import React, { useState } from 'react';
import { User, Mail, Calendar, Award, BookOpen, Target, Edit2, Save, X } from 'lucide-react';
import { getUser } from '../authService.js';

const ProfilePage = ({ roadmapsData }) => {
    const user = getUser();
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user?.name || '');

    // Calculate total progress across all roadmaps
    const calculateTotalStats = () => {
        let totalSteps = 0;
        let completedSteps = 0;
        let totalRoadmaps = 0;
        let activeRoadmaps = 0;

        Object.keys(roadmapsData).forEach(key => {
            const roadmap = roadmapsData[key];
            if (roadmap && roadmap.sections) {
                totalRoadmaps++;
                if (roadmap.completedSteps > 0) {
                    activeRoadmaps++;
                }
                totalSteps += roadmap.totalSteps || 0;
                completedSteps += roadmap.completedSteps || 0;
            }
        });

        return {
            totalSteps,
            completedSteps,
            totalRoadmaps,
            activeRoadmaps,
            progressPercentage: totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0
        };
    };

    const stats = calculateTotalStats();

    // Get roadmap progress details
    const getRoadmapProgress = () => {
        return Object.keys(roadmapsData)
            .filter(key => {
                const roadmap = roadmapsData[key];
                return roadmap && roadmap.sections && roadmap.completedSteps > 0;
            })
            .map(key => {
                const roadmap = roadmapsData[key];
                const progress = roadmap.totalSteps > 0 
                    ? Math.round((roadmap.completedSteps / roadmap.totalSteps) * 100) 
                    : 0;
                return {
                    key,
                    title: roadmap.cardTitle,
                    icon: roadmap.icon,
                    color: roadmap.color,
                    completed: roadmap.completedSteps,
                    total: roadmap.totalSteps,
                    progress
                };
            })
            .sort((a, b) => b.progress - a.progress);
    };

    const activeRoadmaps = getRoadmapProgress();

    const handleSaveName = () => {
        // Update user name in localStorage
        const currentUser = getUser();
        if (currentUser) {
            currentUser.name = editedName;
            localStorage.setItem('user', JSON.stringify(currentUser));
        }
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setEditedName(user?.name || '');
        setIsEditing(false);
    };

    if (!user) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="text-center">
                    <User size={64} className="mx-auto mb-4 text-gray-600" />
                    <h2 className="text-2xl font-bold mb-2">Not Logged In</h2>
                    <p className="text-gray-400">Please login to view your profile</p>
                </div>
            </div>
        );
    }

    // Format date
    const joinDate = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    return (
        <div className="max-w-5xl mx-auto">
            {/* Profile Header Card */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-6">
                <div className="flex items-start gap-6">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-gray-900"></div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            {isEditing ? (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={editedName}
                                        onChange={(e) => setEditedName(e.target.value)}
                                        className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xl font-bold text-white focus:outline-none focus:border-cyan-400"
                                        autoFocus
                                    />
                                    <button
                                        onClick={handleSaveName}
                                        className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                                    >
                                        <Save size={20} />
                                    </button>
                                    <button
                                        onClick={handleCancelEdit}
                                        className="p-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-3xl font-bold">{user.name}</h1>
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                                    >
                                        <Edit2 size={18} className="text-gray-400" />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>{user.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>Member since {joinDate}</span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex gap-4 mt-4">
                            <div className="bg-gray-800 rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold text-cyan-400">{stats.progressPercentage}%</div>
                                <div className="text-xs text-gray-400">Overall Progress</div>
                            </div>
                            <div className="bg-gray-800 rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold text-green-400">{stats.completedSteps}</div>
                                <div className="text-xs text-gray-400">Steps Completed</div>
                            </div>
                            <div className="bg-gray-800 rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold text-orange-400">{stats.activeRoadmaps}</div>
                                <div className="text-xs text-gray-400">Active Roadmaps</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-cyan-500 bg-opacity-20 rounded-lg">
                            <BookOpen size={24} className="text-cyan-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{stats.totalRoadmaps}</div>
                            <div className="text-sm text-gray-400">Total Roadmaps</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-green-500 bg-opacity-20 rounded-lg">
                            <Target size={24} className="text-green-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{stats.completedSteps}</div>
                            <div className="text-sm text-gray-400">Steps Completed</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-orange-500 bg-opacity-20 rounded-lg">
                            <Award size={24} className="text-orange-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{stats.totalSteps - stats.completedSteps}</div>
                            <div className="text-sm text-gray-400">Steps Remaining</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Roadmaps Progress */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target size={24} className="text-cyan-400" />
                    Your Progress
                </h2>

                {activeRoadmaps.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                        <p>No roadmaps started yet</p>
                        <p className="text-sm mt-2">Start a roadmap to track your progress here!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {activeRoadmaps.map(roadmap => (
                            <div key={roadmap.key} className="bg-gray-800 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{roadmap.icon}</span>
                                        <div>
                                            <h3 className="font-semibold">{roadmap.title}</h3>
                                            <p className="text-sm text-gray-400">
                                                {roadmap.completed} / {roadmap.total} steps
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold" style={{ color: roadmap.color }}>
                                            {roadmap.progress}%
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-gray-700 rounded-full h-3">
                                    <div
                                        className="h-3 rounded-full transition-all duration-300"
                                        style={{
                                            width: `${roadmap.progress}%`,
                                            backgroundColor: roadmap.color
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Achievements Section (Future Feature) */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Award size={24} className="text-yellow-400" />
                    Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.completedSteps >= 10 && (
                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                            <div className="text-3xl mb-2">🎯</div>
                            <div className="text-sm font-semibold">First Steps</div>
                            <div className="text-xs text-gray-400">Complete 10 steps</div>
                        </div>
                    )}
                    {stats.completedSteps >= 50 && (
                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                            <div className="text-3xl mb-2">🚀</div>
                            <div className="text-sm font-semibold">On Fire</div>
                            <div className="text-xs text-gray-400">Complete 50 steps</div>
                        </div>
                    )}
                    {stats.completedSteps >= 100 && (
                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                            <div className="text-3xl mb-2">⭐</div>
                            <div className="text-sm font-semibold">Century</div>
                            <div className="text-xs text-gray-400">Complete 100 steps</div>
                        </div>
                    )}
                    {stats.activeRoadmaps >= 3 && (
                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                            <div className="text-3xl mb-2">🎓</div>
                            <div className="text-sm font-semibold">Multi-tasker</div>
                            <div className="text-xs text-gray-400">Active in 3 roadmaps</div>
                        </div>
                    )}
                    {(stats.completedSteps < 10 && stats.activeRoadmaps < 3) && (
                        <div className="col-span-2 md:col-span-4 text-center py-8 text-gray-400">
                            <p>Complete more steps to unlock achievements! 🏆</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;