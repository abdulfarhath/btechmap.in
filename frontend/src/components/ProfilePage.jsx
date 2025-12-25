// ProfilePage.jsx
import React from 'react';
import { User, Trophy, BookOpen, Star, Calendar } from 'lucide-react';
import useStore from '../store/useStore.js';

const ProfilePage = () => {
    const { user, badges, quizProgress, getRoadmapsData } = useStore();
    const roadmapsData = getRoadmapsData();
    const userInitial = (user && user.name) ? user.name.charAt(0).toUpperCase() : 'U';

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center text-gray-500 dark:text-gray-400">
                <User size={64} className="mb-4 text-gray-300 dark:text-slate-600" />
                <h3 className="text-xl font-bold mb-2">Please Login</h3>
                <p>Log in to view your profile, track progress, and earn badges.</p>
            </div>
        );
    }

    // Filter badges to only those earned and add metadata
    const earnedBadges = Object.keys(badges)
        .filter(key => badges[key].earned)
        .map(key => ({
            key,
            ...badges[key],
            title: roadmapsData[key]?.cardTitle || key,
            icon: roadmapsData[key]?.icon || '🏆'
        }));

    // Calculate total stats
    const totalQuizzesPassed = Object.values(quizProgress).filter(q => q.passed).length;

    return (
        <div className="space-y-6">
            {/* Header / User Info */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    {userInitial}
                </div>
                <div className="text-center md:text-left flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{user.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{user.email}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <div className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Star size={12} />
                            {totalQuizzesPassed} Quizzes Passed
                        </div>
                        <div className="px-3 py-1 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Trophy size={12} />
                            {earnedBadges.length} Badges
                        </div>
                    </div>
                </div>
            </div>

            {/* Badges Collection */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <Trophy className="text-amber-500" /> My Badges
                </h3>

                {earnedBadges.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {earnedBadges.map((badge) => (
                            <div key={badge.key} className="p-4 rounded-xl border border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/5 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-3xl">{badge.icon}</span>
                                    <span className="text-xs text-amber-700 dark:text-amber-400 font-mono">
                                        {new Date(badge.date).toLocaleDateString()}
                                    </span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white mb-1">{badge.title}</h4>
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <span>Score: {badge.score}/{badge.total}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl">
                        <Trophy size={48} className="mx-auto text-gray-300 dark:text-slate-600 mb-3" />
                        <p className="text-gray-500 dark:text-gray-400">No badges earned yet. Complete a roadmap to earn your first badge!</p>
                    </div>
                )}
            </div>

            {/* Quiz History (Could be expanded) */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <BookOpen className="text-blue-500" /> Recent Activity
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                    Coming soon...
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;