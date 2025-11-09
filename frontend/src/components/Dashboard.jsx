// Updated Dashboard.jsx - Replace your existing Dashboard.jsx
import { Trophy } from 'lucide-react';

const Dashboard = ({ onSelectRoadmap, roadmapsData, badges }) => {
    const careerPaths = ['academics', 'gate'];
    const techPaths = ['webdev', 'dsa', 'aiml', 'datascience', 'java', 'python'];

    const RoadmapCard = ({ roadmapKey }) => {
        const roadmap = roadmapsData[roadmapKey];
        if (!roadmap || !roadmap.sections) return null;

        const totalSteps = roadmap.totalSteps || 0;
        const completedSteps = roadmap.completedSteps || 0;
        const progress = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;
        const hasBadge = badges[roadmapKey]?.earned;

        return (
            <div
                onClick={() => onSelectRoadmap(roadmapKey)}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:scale-105 relative"
            >
                {hasBadge && (
                    <div className="absolute top-4 right-4">
                        <Trophy size={24} className="text-yellow-400" />
                    </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{roadmap.icon}</span>
                    <h3 className="text-xl font-bold text-white flex-1">{roadmap.cardTitle}</h3>
                </div>
                
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {roadmap.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-800 rounded-full h-2 w-32">
                            <div
                                className="h-2 rounded-full transition-all duration-300"
                                style={{ 
                                    width: `${progress}%`,
                                    backgroundColor: roadmap.color 
                                }}
                            />
                        </div>
                        <span className="text-xs text-gray-500">{progress}%</span>
                    </div>
                    <span className="text-xs text-gray-500">
                        {completedSteps}/{totalSteps} steps
                    </span>
                </div>

                {hasBadge && (
                    <div className="mt-3 text-xs text-yellow-400 font-semibold">
                        ✓ Badge Earned
                    </div>
                )}
            </div>
        );
    };

    // Calculate badge stats
    const totalBadges = Object.values(badges).filter(b => b.earned).length;
    const availableBadges = careerPaths.length + techPaths.length;

    return (
        <div>
            {/* Badge Progress Banner */}
            {totalBadges > 0 && (
                <div className="mb-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Trophy size={48} className="text-yellow-400" />
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    {totalBadges} Badge{totalBadges !== 1 ? 's' : ''} Earned!
                                </h3>
                                <p className="text-gray-400">
                                    You've completed {totalBadges} out of {availableBadges} roadmaps
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-bold text-yellow-400">
                                {Math.round((totalBadges / availableBadges) * 100)}%
                            </div>
                            <div className="text-sm text-gray-400">Complete</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Career Paths Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-orange-500">
                    <span>🎯</span> Career Paths
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {careerPaths.map(key => (
                        <RoadmapCard key={key} roadmapKey={key} />
                    ))}
                </div>
            </div>

            {/* Tech Skills Section */}
            <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-orange-500">
                    <span>💻</span> Tech Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techPaths.map(key => (
                        <RoadmapCard key={key} roadmapKey={key} />
                    ))}
                </div>
            </div>

            {/* Stats Overview */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="text-3xl mb-2">📚</div>
                    <div className="text-2xl text-gray-300 font-bold mb-1">
                        {careerPaths.length + techPaths.length}
                    </div>
                    <div className="text-sm text-gray-400">Total Roadmaps</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="text-3xl mb-2">✅</div>
                    <div className="text-2xl text-gray-300 font-bold mb-1">
                        {Object.values(roadmapsData).reduce((sum, r) => sum + (r.completedSteps || 0), 0)}
                    </div>
                    <div className="text-sm text-gray-400">Steps Completed</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="text-2xl text-gray-300 font-bold mb-1">
                        {Object.values(roadmapsData).reduce((sum, r) => sum + (r.totalSteps || 0), 0)}
                    </div>
                    <div className="text-sm text-gray-400">Total Steps</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-2xl text-yellow-400 font-bold mb-1">
                        {totalBadges}
                    </div>
                    <div className="text-sm text-gray-400">Badges Earned</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;