import { create } from 'zustand';
import { initialRoadmapsData } from '../Data.js';
import { getUser, getProgress, saveProgress, logout } from '../authService.js';
import { debounce } from 'lodash';

// Helper to calculate progress based on completed steps
const calculateProgress = (data, completedSteps) => {
    // Create a deep copy to avoid mutating the original data
    const updatedData = JSON.parse(JSON.stringify(data));

    Object.keys(updatedData).forEach(key => {
        const roadmap = updatedData[key];
        if (!roadmap || !roadmap.sections) return;

        let totalSteps = 0;
        let completedStepsCount = 0;

        roadmap.sections.forEach(section => {
            totalSteps += section.steps.length;
            section.steps.forEach(step => {
                // Construct the unique ID for each step
                const stepId = `${key}-${section.id}-${step.id}`;

                // Hydrate the 'completed' status from our state
                if (completedSteps[stepId]) {
                    step.completed = true;
                    completedStepsCount++;
                } else {
                    step.completed = false;
                }
            });
        });

        roadmap.totalSteps = totalSteps;
        roadmap.completedSteps = completedStepsCount;
    });

    // Restore Proxy behavior to handle missing keys (like 'dashboard') gracefully
    return new Proxy(updatedData, {
        get(target, prop, receiver) {
            if (typeof prop === 'symbol') {
                return Reflect.get(target, prop, receiver);
            }
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            }
            // Default placeholder for missing keys to prevent crashes/redirects
            return {
                cardTitle: "Coming Soon",
                roadmapTitle: "Coming Soon",
                icon: "📘",
                color: "#9CA3AF",
                description: "Content will be added soon. Check back later!",
                sections: []
            };
        }
    });
};

// Debounced save function
const debouncedSave = debounce((progress) => {
    if (getUser()) {
        saveProgress(progress);
    }
}, 1000);

const useStore = create((set, get) => ({
    // State
    activeRoadmap: 'hackathons',
    theme: localStorage.getItem('theme') || 'dark',
    showAuth: null, // 'login' | 'signup' | null
    user: getUser(),
    completedSteps: JSON.parse(localStorage.getItem('completedSteps') || '{}'),
    quizProgress: JSON.parse(localStorage.getItem('quizProgress') || '{}'),
    badges: JSON.parse(localStorage.getItem('badges') || '{}'),
    isLoading: true,
    isSidebarOpen: false,

    // Quiz Modals State
    showQuiz: null, // section object
    showFinalQuiz: null, // roadmap object

    // Computed
    getRoadmapsData: () => {
        const { completedSteps } = get();
        return calculateProgress(initialRoadmapsData, completedSteps);
    },

    // Actions
    setActiveRoadmap: (roadmap) => set({ activeRoadmap: roadmap }),

    setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    closeSidebar: () => set({ isSidebarOpen: false }),

    setTheme: (theme) => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
        set({ theme });
    },

    setShowAuth: (mode) => set({ showAuth: mode }),

    setUser: (user) => set({ user }),

    logoutUser: () => {
        logout();
        set({ user: null });
        window.location.reload();
    },

    setShowQuiz: (section) => set({ showQuiz: section }),

    setShowFinalQuiz: (roadmap) => set({ showFinalQuiz: roadmap }),

    // Data Persistence Helper
    saveAllProgress: (steps, quizzes, userBadges) => {
        const { user, isLoading } = get();

        // 1. Save to localStorage
        localStorage.setItem('completedSteps', JSON.stringify(steps));
        localStorage.setItem('quizProgress', JSON.stringify(quizzes));
        localStorage.setItem('badges', JSON.stringify(userBadges));

        // 2. Save to DB
        if (user && !isLoading) {
            const progressData = {
                completedSteps: steps,
                quizProgress: quizzes,
                badges: userBadges,
            };
            debouncedSave(progressData);
        }
    },

    loadUserProgress: async () => {
        set({ isLoading: true });
        const userData = getUser();
        if (userData) {
            set({ user: userData });
            try {
                const progress = await getProgress();
                const newCompletedSteps = progress.completedSteps || {};
                const newQuizProgress = progress.quizProgress || {};
                const newBadges = progress.badges || {};

                set({
                    completedSteps: newCompletedSteps,
                    quizProgress: newQuizProgress,
                    badges: newBadges,
                    isLoading: false
                });

                // Update localStorage
                localStorage.setItem('completedSteps', JSON.stringify(newCompletedSteps));
                localStorage.setItem('quizProgress', JSON.stringify(newQuizProgress));
                localStorage.setItem('badges', JSON.stringify(newBadges));
            } catch (error) {
                console.error("Failed to load progress:", error);
                set({ isLoading: false });
            }
        } else {
            set({ isLoading: false });
        }
    },

    toggleStep: (sectionId, stepId) => {
        const { activeRoadmap, completedSteps, quizProgress, badges, saveAllProgress } = get();
        const uniqueStepId = `${activeRoadmap}-${sectionId}-${stepId}`;

        const newSteps = { ...completedSteps };
        if (newSteps[uniqueStepId]) {
            delete newSteps[uniqueStepId];
        } else {
            newSteps[uniqueStepId] = true;
        }

        set({ completedSteps: newSteps });
        saveAllProgress(newSteps, quizProgress, badges);
    },

    completeQuiz: (sectionId, passed, score, total) => {
        const { activeRoadmap, completedSteps, quizProgress, badges, saveAllProgress } = get();

        let newQuizProgress = { ...quizProgress };
        if (passed) {
            const quizKey = `${activeRoadmap}-${sectionId}`;
            newQuizProgress = {
                ...quizProgress,
                [quizKey]: { passed, score, total, date: new Date().toISOString() }
            };
        }

        set({ quizProgress: newQuizProgress });
        saveAllProgress(completedSteps, newQuizProgress, badges);
    },

    completeFinalQuiz: (passed, score, total) => {
        const { activeRoadmap, completedSteps, quizProgress, badges, saveAllProgress } = get();

        let newBadges = { ...badges };
        if (passed) {
            newBadges = {
                ...badges,
                [activeRoadmap]: {
                    earned: true,
                    score,
                    total,
                    date: new Date().toISOString()
                }
            };
        }

        set({ badges: newBadges });
        saveAllProgress(completedSteps, quizProgress, newBadges);
    }
}));

export default useStore;
