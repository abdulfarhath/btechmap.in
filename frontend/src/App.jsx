import React, { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import ProgressRing from './components/ProcessRing.jsx';
import Section from './components/Section.jsx';
import Dashboard from './components/Dashboard.jsx';
import AuthModal from './components/AuthModal.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import LeaderboardPage from './components/LeaderboardPage.jsx';
import HackathonsPage from './components/HackathonsPage.jsx';
import Quiz from './components/Quiz.jsx';
import FinalQuiz from './components/FinalQuiz.jsx';
import { sectionQuizData, finalQuizData } from './QuizData.js';
import { Trophy } from 'lucide-react';
import useStore from './store/useStore.js';
import { RouteHandler } from './components/RouteHandler.jsx';

// Layout Component to wrap Pages
const Layout = () => {
  return (
    <>
      <RouteHandler />
      <Sidebar />
      <div className="flex-1 ml-64 p-8 bg-slate-100 dark:bg-slate-950 max-w-[calc(100vw-260px)] no-scrollbar overflow-y-auto h-screen transition-colors duration-200">
        <Outlet />
      </div>
    </>
  );
};

// Component for Roadmap Pages (WebDev, DSA, etc.)
const RoadmapPage = () => {
  const {
    activeRoadmap,
    theme,
    badges,
    getRoadmapsData,
    setShowFinalQuiz,
    toggleStep,
    setShowQuiz,
    showFinalQuiz,
    quizProgress
  } = useStore();

  const roadmapsData = getRoadmapsData();
  const data = roadmapsData[activeRoadmap];

  if (!data) return <Navigate to="/" />;

  // Checks if final quiz can be unlocked
  const canTakeFinalQuiz = () => {
    if (!data || !data.sections) return false;
    const { completedSteps, totalSteps, sections } = data;
    const currentQuizProgress = useStore.getState().quizProgress;

    // 1. Check if all steps are completed
    const allStepsCompleted = completedSteps === totalSteps;

    // 2. Check if all section quizzes are passed
    const allQuizzesPassed = sections.every(section => {
      const quizKey = `${activeRoadmap}-${section.id}`;
      return currentQuizProgress[quizKey]?.passed;
    });

    return allStepsCompleted && allQuizzesPassed;
  };

  const progressPercent = data && data.totalSteps > 0
    ? Math.round((data.completedSteps / data.totalSteps) * 100)
    : 0;

  return (
    <>
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
            {data.icon} {data.roadmapTitle}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {data.description}
          </p>
        </div>
      </header>

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
  );
};

// Wrapper for Dashboard Header
const DashboardPage = () => {
  const { user } = useStore();
  return (
    <>
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
            Dashboard
          </h1>
          {user && (
            <p className="text-gray-600 dark:text-gray-400">
              Welcome back, <span className="text-blue-600 dark:text-cyan-400 font-semibold">{user.name}</span>!
            </p>
          )}
        </div>
      </header>
      <Dashboard />
    </>
  );
};

// Wrapper for other static pages to inject headers if needed
const PageHeader = ({ title, children }) => (
  <>
    <header className="mb-8 flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
          {title}
        </h1>
      </div>
    </header>
    {children}
  </>
);


export default function App() {
  const {
    activeRoadmap,
    theme,
    showAuth,
    showQuiz,
    showFinalQuiz,
    loadUserProgress,
  } = useStore();

  // Load user and their progress on app start
  useEffect(() => {
    loadUserProgress();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

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

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/hackathons" replace />} />
          <Route path="profile" element={<PageHeader title="Profile"><ProfilePage /></PageHeader>} />
          <Route path="leaderboard" element={<PageHeader title="Leaderboard"><LeaderboardPage /></PageHeader>} />
          <Route path="hackathons" element={<HackathonsPage />} />
          <Route path="roadmap/:roadmapId" element={<RoadmapPage />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}