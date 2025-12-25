// src/App.jsx

import { useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import ProgressRing from './components/ProcessRing.jsx';
import Section from './components/Section.jsx';
import Dashboard from './components/Dashboard.jsx';
import AuthModal from './components/AuthModal.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import LeaderboardPage from './components/LeaderboardPage.jsx';
import Quiz from './components/Quiz.jsx'; // For Section Quiz
import FinalQuiz from './components/FinalQuiz.jsx';
import { sectionQuizData, finalQuizData } from './QuizData.js';
import { Trophy } from 'lucide-react';
import useStore from './store/useStore.js';

export default function App() {
  const {
    activeRoadmap,
    theme,
    showAuth,
    user,
    badges,
    showQuiz,
    showFinalQuiz,
    getRoadmapsData,
    setShowFinalQuiz, // Used for start challenge button
    loadUserProgress,
  } = useStore();

  const roadmapsData = getRoadmapsData();
  const data = roadmapsData[activeRoadmap];

  // Load user and their progress on app start
  useEffect(() => {
    loadUserProgress();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Checks if final quiz can be unlocked
  const canTakeFinalQuiz = () => {
    if (!data || !data.sections) return false;
    const { completedSteps, totalSteps, sections } = data;
    const { quizProgress } = useStore.getState(); // Access latest state directly

    // 1. Check if all steps are completed
    const allStepsCompleted = completedSteps === totalSteps;

    // 2. Check if all section quizzes are passed
    const allQuizzesPassed = sections.every(section => {
      const quizKey = `${activeRoadmap}-${section.id}`;
      return quizProgress[quizKey]?.passed;
    });

    return allStepsCompleted && allQuizzesPassed;
  };

  const progressPercent =
    data && data.totalSteps > 0 ? Math.round((data.completedSteps / data.totalSteps) * 100) : 0;

  return (
    <>
      {showAuth && (
        <AuthModal mode={showAuth} />
      )}

      {showQuiz && (
        <Quiz
          section={showQuiz}
          roadmapKey={activeRoadmap}
          quizData={sectionQuizData}
        />
      )}

      {showFinalQuiz && (
        <FinalQuiz
          roadmap={showFinalQuiz}
          roadmapKey={activeRoadmap}
          finalQuizData={finalQuizData}
        />
      )}

      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Sidebar now handles its own state */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8 bg-slate-100 dark:bg-slate-950 max-w-[calc(100vw-260px)] no-scrollbar overflow-y-auto h-screen transition-colors duration-200">
        <header className="mb-8 flex justify-between items-start">
          <div>
            {activeRoadmap === 'dashboard' ? (
              <>
                <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  {/* (icon) */} Dashboard
                </h1>
                {user && (
                  <p className="text-gray-600 dark:text-gray-400">
                    Welcome back, <span className="text-blue-600 dark:text-cyan-400 font-semibold">{user.name}</span>!
                  </p>
                )}
              </>
            ) : activeRoadmap === 'profile' ? (
              <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                {/* (icon) */} Profile
              </h1>
            ) : activeRoadmap === 'leaderboard' ? (
              <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                {/* (icon) */} Leaderboard
              </h1>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                  {data.icon} {data.roadmapTitle}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {data.description}
                </p>
              </>
            )}
          </div>
        </header>

        {/* Page Content */}
        {activeRoadmap === 'dashboard' ? (
          <Dashboard />

        ) : activeRoadmap === 'profile' ? (
          <ProfilePage />

        ) : activeRoadmap === 'leaderboard' ? (
          <LeaderboardPage />

        ) : (
          <>
            {/* Roadmap Progress Header */}
            <div
              className={`flex gap-8 border rounded-xl p-8 my-8 items-center transition-colors ${theme === 'dark'
                ? 'bg-gray-900 border-gray-800'
                : 'bg-white border-gray-200'
                }`}
            >
              <div className="flex items-center gap-8">
                <ProgressRing progress={progressPercent} color={data.color} />
                <div className="flex-1"></div>
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">
                    TOTAL PROGRESS
                  </h3>
                  <p className="text-2xl text-gray-800 dark:text-gray-200 font-bold">
                    {data.completedSteps} / {data.totalSteps} STEPS
                  </p>
                </div>
              </div>
            </div>

            {/* Final Quiz Section */}
            <div className="mb-8 bg-amber-50 dark:bg-gray-800 border-2 border-amber-300 dark:border-yellow-500 rounded-xl p-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy size={24} className="text-amber-500" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Final Challenge</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    Complete all steps and section quizzes to unlock
                  </p>
                  {badges[activeRoadmap]?.earned && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-yellow-400 rounded-full text-sm font-semibold">
                      <Trophy size={14} />
                      <span>Badge Earned!</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setShowFinalQuiz(data)}
                  disabled={!canTakeFinalQuiz()}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${canTakeFinalQuiz()
                    ? badges[activeRoadmap]?.earned
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-amber-500 hover:bg-amber-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  {badges[activeRoadmap]?.earned
                    ? 'Retake Challenge'
                    : canTakeFinalQuiz()
                      ? 'Start Challenge'
                      : 'Locked'}
                </button>
              </div>
            </div>

            <div className="flex gap-4 my-8 justify-between">
              <div>
                <button className="bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Checklist
                </button>
              </div>
            </div>

            {/* Sections */}
            <div>
              {data.sections.map(section => (
                <Section
                  key={section.id}
                  section={section}
                  roadmapColor={data.color}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}