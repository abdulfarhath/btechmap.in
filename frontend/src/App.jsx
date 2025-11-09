import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import ProgressRing from './components/ProcessRing.jsx';
import { initialRoadmapsData } from './Data.js';
import Section from './components/Section.jsx';
import Dashboard from './components/Dashboard.jsx';

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

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  const data = roadmapsData[activeRoadmap];
  const progressPercent =
    data && data.totalSteps > 0 ? Math.round((data.completedSteps / data.totalSteps) * 100) : 0;

  return (
    <>
      {/* Hide scrollbar styles for the main content container */}
      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      <Sidebar activeRoadmap={activeRoadmap} setActiveRoadmap={setActiveRoadmap} />

      <div className="flex-1 ml-64 p-8 bg-black max-w-[calc(100vw-260px)] no-scrollbar overflow-y-auto">
        {/* Header */}
        <header className="mb-8 flex justify-between items-start">
          <div>
            {activeRoadmap === 'dashboard' ? (
              <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
                📊 Dashboard
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

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="border border-gray-400 dark:border-gray-700 rounded-lg py-2 px-4 text-sm font-semibold transition-all duration-300 
              bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        {/* Conditional Content */}
        {activeRoadmap === 'dashboard' ? (
          <Dashboard onSelectRoadmap={setActiveRoadmap} />
        ) : (
          <>
            {/* Progress Ring Section */}
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
                  <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    TOTAL PROGRESS
                  </h3>
                  <p className="text-2xl font-bold">
                    {data.completedSteps} / {data.totalSteps} STEPS
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist and Other Controls */}
            <div className="flex gap-4 my-8 justify-between">
              <div>
                <button className="bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg text-sm hover:bg-blue-600 transition-all duration-300">
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
                  onToggleStep={handleToggleStep}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}