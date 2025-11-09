import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { initialRoadmapsData } from '../Data.js';
import { isAuthenticated, getUser, logout } from '../authService.js';

const Sidebar = ({ activeRoadmap, setActiveRoadmap, setShowAuth, currentUser }) => {
    const [expandedSections, setExpandedSections] = useState({ career: true, tech: true });
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Update user when currentUser prop changes
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
            // Logout
            try {
                await logout();
                setUser(null);
                // Force a re-render by clearing the parent's user state
                window.location.reload(); // Optional: reload page for clean state
            } catch (error) {
                console.error('Logout failed:', error);
                // Still clear local state even if API call fails
                setUser(null);
            }
        } else {
            // Show login modal
            setShowAuth('login');
        }
    };
    
    const careerPaths = ['academics', 'gate'];
    const techPaths = ['webdev', 'dsa', 'aiml', 'datascience', 'java', 'python'];

    return (
        <div className="w-64 bg-gray-900 border-r border-gray-800 p-6 fixed h-screen overflow-y-auto font-['Yusei_Magic'] no-scrollbar">
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

            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <span className="text-6xl font-bold text-cyan-400">BtechMap.in</span>
                </div>
            </div>

            {/* Profile Section */}
            <div className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div 
                    className="flex items-center gap-3 mb-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition-colors relative group"
                    onClick={() => user && setActiveRoadmap('profile')}
                    title={user ? "Click to view profile" : "Login to view profile"}
                >
                    <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                        {user ? user.name.charAt(0).toUpperCase() : 'G'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">
                            {user ? user.name : 'Guest User'}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                            {user ? user.email : 'Not logged in'}
                        </p>
                    </div>
                    {user && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">
                            →
                        </div>
                    )}
                </div>
                <button
                    onClick={handleAuthToggle}
                    className={`w-full py-2 px-4 rounded-md text-sm font-semibold transition-colors ${
                        user
                            ? 'bg-red-500 hover:bg-red-600 text-white'
                            : 'bg-cyan-400 hover:bg-cyan-500 text-gray-900'
                    }`}
                >
                    {user ? 'Logout' : 'Login'}
                </button>
                {!user && (
                    <button
                        onClick={() => setShowAuth('signup')}
                        className="w-full mt-2 py-2 px-4 rounded-md text-sm font-semibold transition-colors bg-gray-700 hover:bg-gray-600 text-white"
                    >
                        Sign Up
                    </button>
                )}
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