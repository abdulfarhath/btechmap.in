import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { initialRoadmapsData } from '../Data.js';

const Sidebar = ({ activeRoadmap, setActiveRoadmap }) => {
    const [expandedSections, setExpandedSections] = useState({ career: true, tech: true });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('Guest User');

    const toggleSection = (section) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleAuthToggle = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
            setUserName('Guest User');
        } else {
            setIsLoggedIn(true);
            setUserName('Ravi Kumar');
        }
    };
    
    const careerPaths = ['academics', 'gate'];
    const techPaths = ['webdev', 'dsa', 'aiml', 'datascience', 'java', 'python'];

    return (
        <div className="w-64 bg-gray-900 border-r border-gray-800 p-6 fixed h-screen overflow-y-auto font-['Yusei_Magic'] no-scrollbar">
            <style>{`
                .no-scrollbar {
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none; /* IE 10+ */
                }
                .no-scrollbar::-webkit-scrollbar {
                    width: 0;
                    height: 0;
                    background: transparent;
                }
            `}</style>

            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <span className="text-6xl font-bold text-cyan-400">BtechMap.in</span>
                </div>
            </div>

            {/* Profile Section */}
            <div className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        {userName.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{userName}</p>
                        <p className="text-xs text-gray-400">{isLoggedIn ? 'Student' : 'Not logged in'}</p>
                    </div>
                </div>
                <button
                    onClick={handleAuthToggle}
                    className={`w-full py-2 px-4 rounded-md text-sm font-semibold transition-colors ${
                        isLoggedIn
                            ? 'bg-red-500 hover:bg-red-600 text-white'
                            : 'bg-cyan-400 hover:bg-cyan-500 text-gray-900'
                    }`}
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </div>

            {/* Dashboard Button */}
            <div className="mb-4">
                <div
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                        activeRoadmap === 'dashboard'
                            ? 'bg-gray-800 text-cyan-400 border-l-4 border-cyan-400'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                    onClick={() => setActiveRoadmap('dashboard')}
                >
                    <span className="text-lg">📊</span>
                    <span className="text-sm font-semibold">Dashboard</span>
                </div>
            </div>

            <div className="px-1.5">
                <div className="mb-4">
                    <div className="flex items-center gap-2 p-3 cursor-pointer text-orange-500 font-semibold rounded-lg transition-colors hover:bg-gray-800" onClick={() => toggleSection('career')}>
                        {expandedSections.career ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        <span className="text-sm">Career Paths</span>
                    </div>
                    {expandedSections.career && (
                        <div className="pl-2 mt-2">
                            {careerPaths.map(key => (
                                <div
                                    key={key}
                                    className={`flex items-center gap-3 p-2.5 rounded-md text-gray-400 text-sm transition-all mb-1 cursor-pointer hover:bg-gray-800 hover:text-white ${activeRoadmap === key ? 'bg-gray-800 text-white border-l-4 border-orange-500 pl-1.5' : ''}`}
                                    onClick={() => setActiveRoadmap(key)}
                                >
                                    {initialRoadmapsData[key].icon} {initialRoadmapsData[key].cardTitle}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <div className="flex items-center gap-2 p-3 cursor-pointer text-orange-500 font-semibold rounded-lg transition-colors hover:bg-gray-800" onClick={() => toggleSection('tech')}>
                        {expandedSections.tech ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        <span className="text-sm">Tech Skills</span>
                    </div>
                    {expandedSections.tech && (
                        <div className="pl-2 mt-2">
                            {techPaths.map(key => (
                                <div
                                    key={key}
                                    className={`flex items-center gap-3 p-2.5 rounded-md text-gray-400 text-sm transition-all mb-1 cursor-pointer hover:bg-gray-800 hover:text-white ${activeRoadmap === key ? 'bg-gray-800 text-white border-l-4 border-orange-500 pl-1.5' : ''}`}
                                    onClick={() => setActiveRoadmap(key)}
                                >
                                    {initialRoadmapsData[key].icon} {initialRoadmapsData[key].cardTitle}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;