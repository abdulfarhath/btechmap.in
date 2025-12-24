// Updated ProfilePage.jsx - Replace your existing ProfilePage.jsx
import React, { useState } from 'react';
import { User, Mail, Calendar, Award, BookOpen, Target, Edit2, Save, X, Trophy } from 'lucide-react';
import { getUser } from '../authService.js';

const BadgeCard = ({ badge, earned, roadmapKey }) => {
    const badgeDefinitions = {
        academics: { name: "Academic Excellence", icon: "🎓", color: "#FF6B6B" },
        gate: { name: "GATE Master", icon: "🎯", color: "#4ECDC4" },
        dsa: { name: "DSA Expert", icon: "🧠", color: "#B24BF3" },
        webdev: { name: "Web Developer", icon: "💻", color: "#00FFA3" },
        aiml: { name: "AI Specialist", icon: "🤖", color: "#FF6B9D" },
        datascience: { name: "Data Scientist", icon: "📊", color: "#FFA500" },
        java: { name: "Java Master", icon: "☕", color: "#E07A5F" },
        python: { name: "Python Pro", icon: "🐍", color: "#3776AB" }
    };

    const badgeInfo = badgeDefinitions[roadmapKey] || { name: "Badge", icon: "🏆", color: "#FFD700" };

    return (
        <div className={`relative p-6 rounded-xl border-2 transition-all ${earned
                ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-400'
                : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 opacity-50'
            }`}>
            <div className="text-center">
                <div className="text-6xl mb-3">{badgeInfo.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{badgeInfo.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {earned
                        ? `Earned on ${new Date(badge.date).toLocaleDateString()}`
                        : 'Complete all requirements to unlock'}
                </p>
                {earned && (
                    <div className="flex items-center justify-center gap-1 text-yellow-500 dark:text-yellow-400 text-sm">
                        <Trophy size={16} />
                        <span>{badge.score}/{badge.total} in Final Quiz</span>
                    </div>
                )}
            </div>
            {!earned && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 dark:bg-black/60 rounded-xl">
                    <span className="text-gray-500 dark:text-gray-400 font-bold">🔒 Locked</span>
                </div>
            )}
        </div>
    );
};

const ProfilePage = ({ roadmapsData, badges, quizProgress }) => {
    const user = getUser();
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user?.name || '');

    const calculateTotalStats = () => {
        let totalSteps = 0;
        let completedSteps = 0;
        let totalRoadmaps = 0;
        let activeRoadmaps = 0;
        let totalQuizzesPassed = 0;
        let totalBadges = 0;

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

        // Count passed quizzes
        Object.values(quizProgress).forEach(quiz => {
            if (quiz.passed) totalQuizzesPassed++;
        });

        // Count earned badges
        Object.values(badges).forEach(badge => {
            if (badge.earned) totalBadges++;
        });

        return {
            totalSteps,
            completedSteps,
            totalRoadmaps,
            activeRoadmaps,
            totalQuizzesPassed,
            totalBadges,
            progressPercentage: totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0
        };
    };

    const stats = calculateTotalStats();

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
                    progress,
                    hasBadge: badges[key]?.earned
                };
            })
            .sort((a, b) => b.progress - a.progress);
    };

    const activeRoadmaps = getRoadmapProgress();

    const handleSaveName = () => {
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
                    <User size={64} className="mx-auto mb-4 text-gray-400 dark:text-gray-600" />
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Not Logged In</h2>
                    <p className="text-gray-500 dark:text-gray-400">Please login to view your profile</p>
                </div>
            </div>
        );
    }

    const joinDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="max-w-5xl mx-auto">
            {/* Profile Header */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-6">
                <div className="flex items-start gap-6">
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900"></div>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            {isEditing ? (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={editedName}
                                        onChange={(e) => setEditedName(e.target.value)}
                                        className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-xl font-bold text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
                                        autoFocus
                                    />
                                    <button
                                        onClick={handleSaveName}
                                        className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors text-white"
                                    >
                                        <Save size={20} />
                                    </button>
                                    <button
                                        onClick={handleCancelEdit}
                                        className="p-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors text-white"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                    >
                                        <Edit2 size={18} className="text-gray-400" />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>{user.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>Member since {joinDate}</span>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{stats.progressPercentage}%</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Overall Progress</div>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold text-green-500 dark:text-green-400">{stats.completedSteps}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Steps Completed</div>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">{stats.totalBadges}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Badges Earned</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-cyan-100 dark:bg-cyan-500/20 rounded-lg">
                            <BookOpen size={24} className="text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.activeRoadmaps}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Active Roadmaps</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-green-100 dark:bg-green-500/20 rounded-lg">
                            <Target size={24} className="text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.completedSteps}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Steps Done</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-lg">
                            <Award size={24} className="text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalQuizzesPassed}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Quizzes Passed</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-500/20 rounded-lg">
                            <Trophy size={24} className="text-yellow-500 dark:text-yellow-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalBadges}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Badges Earned</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Badges Section */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                    <Trophy size={24} className="text-yellow-500 dark:text-yellow-400" />
                    Your Badges
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {['academics', 'gate', 'dsa', 'webdev', 'aiml', 'datascience', 'java', 'python'].map(key => (
                        <BadgeCard
                            key={key}
                            badge={badges[key]}
                            earned={badges[key]?.earned || false}
                            roadmapKey={key}
                        />
                    ))}
                </div>
            </div>

            {/* Active Roadmaps Progress */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                    <Target size={24} className="text-cyan-600 dark:text-cyan-400" />
                    Your Progress
                </h2>

                {activeRoadmaps.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                        <p>No roadmaps started yet</p>
                        <p className="text-sm mt-2">Start a roadmap to track your progress here!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {activeRoadmaps.map(roadmap => (
                            <div key={roadmap.key} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{roadmap.icon}</span>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">{roadmap.title}</h3>
                                                {roadmap.hasBadge && (
                                                    <Trophy size={16} className="text-yellow-400" />
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
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

                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
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
        </div>
    );
};

export default ProfilePage;