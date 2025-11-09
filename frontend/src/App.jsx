// Updated App.jsx - Replace your existing App.jsx with this
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import ProgressRing from './components/ProcessRing.jsx';
import { initialRoadmapsData } from './Data.js';
import Section from './components/Section.jsx';
import Dashboard from './components/Dashboard.jsx';
import AuthModal from './components/AuthModal.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import Quiz from './components/Quiz.jsx';
import FinalQuiz from './components/FinalQuiz.jsx';
import { getUser } from './authService.js';
import { sectionQuizData, finalQuizData } from './QuizData.js';
import { Trophy } from 'lucide-react';

const calculateProgress = (data) => {
  const updatedData = { ...data };
  Object.keys(updatedData).forEach(key => {
    const roadmap = updatedData[key];
    if (!roadmap || !roadmap.sections) return;
    let totalSteps = 0;
    let completedSteps = 0;
    roadmap.sections.forEach(section => {
      totalSteps += section.steps.length;
      completedSteps += section.steps.filter(s => s.completed).length;
    });
    roadmap.totalSteps = totalSteps;
    roadmap.completedSteps = completedSteps;
  });
  return updatedData;
};

export default function App() {
  const [roadmapsData, setRoadmapsData] = useState(() => calculateProgress(initialRoadmapsData));
  const [activeRoadmap, setActiveRoadmap] = useState('dashboard');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [showAuth, setShowAuth] = useState(null);
  const [user, setUser] = useState(null);
  
  // Quiz states
  const [showQuiz, setShowQuiz] = useState(null);
  const [showFinalQuiz, setShowFinalQuiz] = useState(null);
  const [quizProgress, setQuizProgress] = useState(() => {
    const saved = localStorage.getItem('quizProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [badges, setBadges] = useState(() => {
    const saved = localStorage.getItem('badges');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const userData = getUser();
    if (userData) {
      setUser(userData);
    }
  }, []);

  // Save quiz progress to localStorage
  useEffect(() => {
    localStorage.setItem('quizProgress', JSON.stringify(quizProgress));
  }, [quizProgress]);

  // Save badges to localStorage
  useEffect(() => {
    localStorage.setItem('badges', JSON.stringify(badges));
  }, [badges]);

  const handleToggleStep = (sectionId, stepId) => {
    setRoadmapsData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData));
      const roadmap = newData[activeRoadmap];
      const section = roadmap.sections.find(s => s.id === sectionId);
      const step = section.steps.find(s => s.id === stepId);
      step.completed = !step.completed;
      return calculateProgress(newData);
    });
  };

  const handleAuthSuccess = () => {
    const userData = getUser();
    setUser(userData);
  };

  const handleStartQuiz = (section) => {
    setShowQuiz(section);
  };

  const handleQuizComplete = (sectionId, passed, score, total) => {
    if (passed) {
      const quizKey = `${activeRoadmap}-${sectionId}`;
      setQuizProgress(prev => ({
        ...prev,
        [quizKey]: { passed, score, total, date: new Date().toISOString() }
      }));
    }
  };

  const handleStartFinalQuiz = () => {
    const data = roadmapsData[activeRoadmap];
    setShowFinalQuiz(data);
  };

  const handleFinalQuizComplete = (passed, score, total) => {
    if (passed) {
      setBadges(prev => ({
        ...prev,
        [activeRoadmap]: { 
          earned: true, 
          score, 
          total,
          date: new Date().toISOString() 
        }
      }));
    }
  };

  // Check if user can take final quiz
// In App.jsx
const canTakeFinalQuiz = () => {
  const data = roadmapsData[activeRoadmap];
  if (!data || !data.sections) return false;
  
  // 1. Check if all steps are completed
  const allStepsCompleted = data.completedSteps === data.totalSteps;
  
  // 2. Check if all section quizzes are passed
  const allQuizzesPassed = data.sections.every(section => {
    const quizKey = `${activeRoadmap}-${section.id}`;
    return quizProgress[quizKey]?.passed;
  });
  
  // It needs BOTH to be true
  return allStepsCompleted && allQuizzesPassed;
};

  const data = roadmapsData[activeRoadmap];
  const progressPercent =
    data && data.totalSteps > 0 ? Math.round((data.completedSteps / data.totalSteps) * 100) : 0;

  return (
    <>
      {showAuth && (
        <AuthModal
          mode={showAuth}
          onClose={() => setShowAuth(null)}
          onSuccess={handleAuthSuccess}
        />
      )}

      {showQuiz && (
        <Quiz
          section={showQuiz}
          roadmapKey={activeRoadmap}
          onClose={() => setShowQuiz(null)}
          onComplete={handleQuizComplete}
          quizData={sectionQuizData}
        />
      )}

      {showFinalQuiz && (
        <FinalQuiz
          roadmap={showFinalQuiz}
          roadmapKey={activeRoadmap}
          onClose={() => setShowFinalQuiz(null)}
          onComplete={handleFinalQuizComplete}
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

      <Sidebar 
        activeRoadmap={activeRoadmap} 
        setActiveRoadmap={setActiveRoadmap}
        setShowAuth={setShowAuth}
        currentUser={user}
        badges={badges}
      />

      <div className="flex-1 ml-64 p-8 bg-black max-w-[calc(100vw-260px)] bg-black no-scrollbar overflow-y-auto">
        <header className="mb-8 flex justify-between items-start">
          <div>
            {activeRoadmap === 'dashboard' ? (
              <>
                <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  📊 Dashboard
                </h1>
                {user && (
                  <p className="text-gray-400">
                    Welcome back, <span className="text-cyan-400 font-semibold">{user.name}</span>! 👋
                  </p>
                )}
              </>
            ) : activeRoadmap === 'profile' ? (
              <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
                👤 Profile
              </h1>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  {data.icon} {data.roadmapTitle}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {data.description}
                </p>
              </>
            )}
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="border border-gray-400 dark:border-gray-700 rounded-lg py-2 px-4 text-sm font-semibold transition-all duration-300 
              bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        {activeRoadmap === 'dashboard' ? (
          <Dashboard onSelectRoadmap={setActiveRoadmap} roadmapsData={roadmapsData} badges={badges} />
        ) : activeRoadmap === 'profile' ? (
          <ProfilePage roadmapsData={roadmapsData} badges={badges} quizProgress={quizProgress} />
        ) : (
          <>
            <div
              className={`flex gap-8 border rounded-xl p-8 my-8 items-center transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-900 border-gray-800'
                  : 'bg-white border-gray-300'
              }`}
            >
              <div className="flex items-center gap-8">
                <ProgressRing progress={progressPercent} color={data.color} />
                <div className="flex-1"></div>
                <div>
                  <h3 className="text-sm text-white dark:text-gray-400 mb-2">
                    TOTAL PROGRESS
                  </h3>
                  <p className="text-2xl text-gray-500 font-bold">
                    {data.completedSteps} / {data.totalSteps} STEPS
                  </p>
                </div>
              </div>
            </div>

            {/* Final Quiz Section */}
            <div className="mb-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-yellow-500 rounded-xl p-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy size={24} className="text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">Final Challenge</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    Complete all steps and section quizzes to unlock
                  </p>
                  {badges[activeRoadmap]?.earned && (
                    <div className="flex items-center gap-2 text-yellow-400 text-sm">
                      <Trophy size={16} />
                      <span>Badge Earned!</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleStartFinalQuiz}
                  disabled={!canTakeFinalQuiz()}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    canTakeFinalQuiz()
                      ? badges[activeRoadmap]?.earned
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                      : 'bg-gray-700 cursor-not-allowed opacity-50'
                  }`}
                >
                  {badges[activeRoadmap]?.earned 
                    ? 'Retake Challenge' 
                    : canTakeFinalQuiz() 
                      ? 'Start Challenge' 
                      : '🔒 Locked'}
                </button>
              </div>
            </div>

            <div className="flex gap-4 my-8 justify-between">
              <div>
                <button className="bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg text-sm hover:bg-blue-600 transition-all duration-300">
                  Checklist
                </button>
              </div>
            </div>

            <div>
              {data.sections.map(section => {
                const quizKey = `${activeRoadmap}-${section.id}`;
                return (
                  <Section
                    key={section.id}
                    section={section}
                    roadmapColor={data.color}
                    onToggleStep={handleToggleStep}
                    onStartQuiz={handleStartQuiz}
                    quizStatus={quizProgress[quizKey]}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}