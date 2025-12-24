// src/components/Sidebar.jsx

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Trophy } from 'lucide-react';
import { initialRoadmapsData } from '../Data.js';
import { isAuthenticated, getUser, logout } from '../authService.js';

const Sidebar = ({ activeRoadmap, setActiveRoadmap, setShowAuth, currentUser, badges, theme, setTheme }) => {
    const [expandedSections, setExpandedSections] = useState({ career: true, tech: true });
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        } else if (isAuthenticated()) {
            const userData = getUser();
            setUser(userData);
        } else {
            setUser(null);
        }
    }, [currentUser]);

    const toggleSection = (section) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleAuthToggle = async () => {
        if (user) {
            logout();
            setUser(null);
            window.location.reload();
        } else {
            setShowAuth('login');
        }
    };

    const careerPaths = ['academics', 'gate'];
    const techPaths = ['webdev', 'dsa', 'aiml', 'datascience', 'java', 'python'];
    const userInitial = (user && user.name) ? user.name.charAt(0).toUpperCase() : 'G';

    return (
        <div className="w-64 bg-white dark:bg-slate-900 border-r border-gray-100 dark:border-slate-800 fixed h-screen flex flex-col font-['Yusei_Magic']">
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

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
                {/* Logo */}
                <div className="mb-8">
                    <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-blue-600 dark:text-cyan-400">BtechMap.in</span>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mb-4 space-y-1">
                    <div
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${activeRoadmap === 'dashboard'
                            ? 'bg-blue-100 dark:bg-slate-800 text-blue-700 dark:text-cyan-400 border-l-4 border-blue-600 dark:border-cyan-400'
                            : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-white'
                            }`}
                        onClick={() => setActiveRoadmap('dashboard')}
                    >
                        <span className="text-lg">📊</span>
                        <span className="text-sm font-semibold">Dashboard</span>
                    </div>

                    <div
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${activeRoadmap === 'leaderboard'
                            ? 'bg-amber-100 dark:bg-slate-800 text-amber-700 dark:text-yellow-400 border-l-4 border-amber-500 dark:border-yellow-400'
                            : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-white'
                            }`}
                        onClick={() => setActiveRoadmap('leaderboard')}
                    >
                        <span className="text-lg"><Trophy size={18} /></span>
                        <span className="text-sm font-semibold">Leaderboard</span>
                    </div>
                </div>

                {/* Roadmap Links */}
                <div className="px-1">
                    <div className="mb-4">
                        <div className="flex items-center gap-2 p-3 cursor-pointer text-orange-600 dark:text-orange-400 font-semibold rounded-lg transition-colors hover:bg-orange-50 dark:hover:bg-slate-800" onClick={() => toggleSection('career')}>
                            {expandedSections.career ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            <span className="text-sm">Career Paths</span>
                        </div>
                        {expandedSections.career && (
                            <div className="pl-2 mt-1 space-y-1">
                                {careerPaths.map(key => (
                                    <div
                                        key={key}
                                        className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors cursor-pointer ${activeRoadmap === key
                                            ? 'bg-orange-100 dark:bg-slate-800 text-orange-700 dark:text-white border-l-4 border-orange-500 pl-1.5'
                                            : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-white'
                                            }`}
                                        onClick={() => setActiveRoadmap(key)}
                                    >
                                        <div className="flex-1 flex items-center gap-3">
                                            {initialRoadmapsData[key].icon} {initialRoadmapsData[key].cardTitle}
                                        </div>
                                        {badges[key]?.earned && (
                                            <Trophy size={16} className="text-amber-500 flex-shrink-0" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-2 p-3 cursor-pointer text-orange-600 dark:text-orange-400 font-semibold rounded-lg transition-colors hover:bg-orange-50 dark:hover:bg-slate-800" onClick={() => toggleSection('tech')}>
                            {expandedSections.tech ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            <span className="text-sm">Tech Skills</span>
                        </div>
                        {expandedSections.tech && (
                            <div className="pl-2 mt-1 space-y-1">
                                {techPaths.map(key => (
                                    <div
                                        key={key}
                                        className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors cursor-pointer ${activeRoadmap === key
                                            ? 'bg-orange-100 dark:bg-slate-800 text-orange-700 dark:text-white border-l-4 border-orange-500 pl-1.5'
                                            : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-white'
                                            }`}
                                        onClick={() => setActiveRoadmap(key)}
                                    >
                                        <div className="flex-1 flex items-center gap-3">
                                            {initialRoadmapsData[key].icon} {initialRoadmapsData[key].cardTitle}
                                        </div>
                                        {badges[key]?.earned && (
                                            <Trophy size={16} className="text-amber-500 flex-shrink-0" />
                                        )}
                                    </div>
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
                    <div
                        className="flex-1 flex items-center gap-2 p-1.5 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors min-w-0"
                        onClick={() => user && setActiveRoadmap('profile')}
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
                    </div>

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

                {/* Auth Buttons */}
                <div className="mt-2 flex gap-2">
                    {user ? (
                        <button
                            onClick={handleAuthToggle}
                            className="flex-1 py-1.5 px-3 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-lg text-xs font-semibold hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleAuthToggle}
                                className="flex-1 py-1.5 px-3 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setShowAuth('signup')}
                                className="flex-1 py-1.5 px-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-lg text-xs font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;