// Dashboard.jsx - Deep blue dark mode with better contrast
import { Trophy } from 'lucide-react';
import useStore from '../store/useStore.js';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { getRoadmapsData, badges } = useStore();
    const roadmapsData = getRoadmapsData();

    const careerPaths = ['gate'];
    const techPaths = ['webdev', 'dsa', 'aiml', 'datascience', 'java', 'python'];

    const RoadmapCard = ({ roadmapKey }) => {
        const roadmap = roadmapsData[roadmapKey];
        if (!roadmap || !roadmap.sections) return null;

        const totalSteps = roadmap.totalSteps || 0;
        const completedSteps = roadmap.completedSteps || 0;
        const progress = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;
        const hasBadge = badges[roadmapKey]?.earned;

        return (
            <Link
                to={`/roadmap/${roadmapKey}`}
                className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:border-blue-400 dark:hover:border-cyan-500 hover:shadow-lg relative block"
            >
                {hasBadge && (
                    <div className="absolute top-4 right-4">
                        <Trophy size={24} className="text-amber-500" />
                    </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{roadmap.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white flex-1">{roadmap.cardTitle}</h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {roadmap.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-1">
                        <div className="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                            <div
                                className="h-2 rounded-full transition-all duration-300"
                                style={{
                                    width: `${progress}%`,
                                    backgroundColor: roadmap.color
                                }}
                            />
                        </div>
                        <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">{progress}%</span>
                    </div>
                </div>

                <div className="mt-2 text-xs text-gray-500 dark:text-slate-400">
                    {completedSteps} of {totalSteps} steps
                </div>

                {hasBadge && (
                    <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 rounded-full text-xs font-semibold">
                        <Trophy size={12} />
                        Badge Earned
                    </div>
                )}
            </Link>
        );
    };

    const totalBadges = Object.values(badges).filter(b => b.earned).length;
    const availableBadges = careerPaths.length + techPaths.length;

    return (
        <div>
            {/* Badge Progress Banner */}
            {totalBadges > 0 && (
                <div className="mb-8 bg-amber-50 dark:bg-amber-500/10 border-2 border-amber-300 dark:border-amber-500/50 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Trophy size={48} className="text-amber-500" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                                    {totalBadges} Badge{totalBadges !== 1 ? 's' : ''} Earned!
                                </h3>
                                <p className="text-gray-600 dark:text-slate-300">
                                    You've completed {totalBadges} out of {availableBadges} roadmaps
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-bold text-amber-600 dark:text-amber-400">
                                {Math.round((totalBadges / availableBadges) * 100)}%
                            </div>
                            <div className="text-sm text-gray-500 dark:text-slate-400">Complete</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Career Paths Section */}
            <div className="mb-10 bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-slate-800">
                <h2 className="text-xl font-bold mb-5 flex items-center gap-2 text-orange-600 dark:text-orange-400">
                    <span>🎯</span> Career Paths
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {careerPaths.map(key => (
                        <RoadmapCard key={key} roadmapKey={key} />
                    ))}
                </div>
            </div>

            {/* Tech Skills Section */}
            <div className="mb-10 bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-slate-800">
                <h2 className="text-xl font-bold mb-5 flex items-center gap-2 text-blue-600 dark:text-cyan-400">
                    <span>💻</span> Tech Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {techPaths.map(key => (
                        <RoadmapCard key={key} roadmapKey={key} />
                    ))}
                </div>
            </div>

            {/* Stats Overview */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-slate-800">
                <h2 className="text-xl font-bold mb-5 flex items-center gap-2 text-gray-800 dark:text-white">
                    <span>📈</span> Your Statistics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-4 text-center border border-blue-100 dark:border-slate-700">
                        <div className="text-3xl mb-1">📚</div>
                        <div className="text-2xl text-blue-600 dark:text-cyan-400 font-bold">
                            {careerPaths.length + techPaths.length}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-slate-400">Total Roadmaps</div>
                    </div>
                    <div className="bg-green-50 dark:bg-slate-800 rounded-lg p-4 text-center border border-green-100 dark:border-slate-700">
                        <div className="text-3xl mb-1">✅</div>
                        <div className="text-2xl text-green-600 dark:text-green-400 font-bold">
                            {Object.values(roadmapsData).reduce((sum, r) => sum + (r.completedSteps || 0), 0)}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-slate-400">Steps Done</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-slate-800 rounded-lg p-4 text-center border border-purple-100 dark:border-slate-700">
                        <div className="text-3xl mb-1">🎯</div>
                        <div className="text-2xl text-purple-600 dark:text-purple-400 font-bold">
                            {Object.values(roadmapsData).reduce((sum, r) => sum + (r.totalSteps || 0), 0)}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-slate-400">Total Steps</div>
                    </div>
                    <div className="bg-amber-50 dark:bg-slate-800 rounded-lg p-4 text-center border border-amber-100 dark:border-slate-700">
                        <div className="text-3xl mb-1">🏆</div>
                        <div className="text-2xl text-amber-600 dark:text-amber-400 font-bold">
                            {totalBadges}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-slate-400">Badges</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;