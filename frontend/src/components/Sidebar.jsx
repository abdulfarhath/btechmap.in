import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Trophy, X } from 'lucide-react';
import { initialRoadmapsData } from '../Data.js';
import useStore from '../store/useStore.js';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const {
        activeRoadmap,
        setShowAuth,
        user,
        badges,
        theme,
        setTheme,
        logoutUser,
        isSidebarOpen,
        closeSidebar
    } = useStore();

    const [expandedSections, setExpandedSections] = useState({ career: true, tech: true });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleAuthToggle = async () => {
        if (user) {
            logoutUser();
        } else {
            setShowAuth('login');
        }
    };

    const careerPaths = ['gate'];
    const techPaths = ['webdev', 'dsa', 'java', 'python'];
    const userInitial = (user && user.name) ? user.name.charAt(0).toUpperCase() : 'G';

    return (
        <div className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-gray-100 dark:border-slate-800 
            transform transition-transform duration-300 ease-in-out flex flex-col font-['Yusei_Magic']
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 md:static md:inset-auto
        `}>
            <style>{`
                .no-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .no-scrollbar::-webkit-scrollbar {
                    width: 0;
                    height: 0;
                    background: transparent;
                }
            `}</style>

            {/* Mobile Close Button */}
            <button
                onClick={closeSidebar}
                className="md:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >
                <X size={24} />
            </button>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
                {/* Logo */}
                <div className="mb-8">
                    <Link to="/" className="flex items-center gap-2" onClick={closeSidebar}>
                        <span className="text-3xl font-bold text-blue-600 dark:text-cyan-400">BtechMap.in</span>
                    </Link>
                </div>

                {/* Navigation Buttons */}
                <div className="mb-4 space-y-1">
                    <Link to="/hackathons" onClick={closeSidebar}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${activeRoadmap === 'hackathons'
                            ? 'bg-amber-100 dark:bg-slate-800 text-amber-700 dark:text-yellow-400 border-l-4 border-amber-500 dark:border-yellow-400'
                            : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-white'
                            }`}
                    >
                        <span className="text-lg"><Trophy size={18} /></span>
                        <span className="text-sm font-semibold">Hackathons</span>
                    </Link>
                </div>

                {/* Roadmap Links */}
                <div className="px-1">
                    <div>
                        <div className="flex items-center gap-2 p-3 cursor-pointer text-orange-600 dark:text-orange-400 font-semibold rounded-lg transition-colors hover:bg-orange-50 dark:hover:bg-slate-800" onClick={() => toggleSection('tech')}>
                            {expandedSections.tech ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            <span className="text-sm">Tech Skills</span>
                        </div>
                        {expandedSections.tech && (
                            <div className="pl-2 mt-1 space-y-1">
                                {techPaths.map(key => (
                                    <Link
                                        key={key}
                                        to={`/roadmap/${key}`}
                                        onClick={closeSidebar}
                                        className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors cursor-pointer ${activeRoadmap === key
                                            ? 'bg-orange-100 dark:bg-slate-800 text-orange-700 dark:text-white border-l-4 border-orange-500 pl-1.5'
                                            : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-white'
                                            }`}
                                    >
                                        <div className="flex-1 flex items-center gap-3">
                                            {initialRoadmapsData[key].icon} {initialRoadmapsData[key].cardTitle}
                                        </div>
                                        {badges[key]?.earned && (
                                            <Trophy size={16} className="text-amber-500 flex-shrink-0" />
                                        )}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Fixed Section: Profile & Settings */}
            <div className="p-4 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-stretch gap-2">
                    {/* User Profile */}
                    <Link
                        to={user ? "/profile" : "#"}
                        onClick={(e) => {
                            if (!user) e.preventDefault();
                            closeSidebar();
                        }}
                        className="flex-1 flex items-center gap-2 p-1.5 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors min-w-0"
                        title={user ? "View Profile" : "Not logged in"}
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm flex-shrink-0">
                            {userInitial}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                                {user ? user.name : 'Guest'}
                            </p>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                                {user ? 'View Profile' : 'Not logged in'}
                            </p>
                        </div>
                    </Link>

                    {/* Theme Toggle (Switch) */}
                    <div
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out relative flex items-center ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
                            }`}
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        <div
                            className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-300 ease-in-out flex items-center justify-center text-[10px] ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                                }`}
                        >
                            {theme === 'dark' ? '🌙' : '☀️'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;