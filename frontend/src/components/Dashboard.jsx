import { initialRoadmapsData } from '../Data.js';

const Dashboard = ({ onSelectRoadmap }) => {
    const careerPaths = ['academics', 'gate'];
    const techPaths = ['webdev', 'dsa', 'aiml', 'datascience', 'java', 'python'];

    const RoadmapCard = ({ roadmapKey }) => {
        const roadmap = initialRoadmapsData[roadmapKey];
        if (!roadmap || !roadmap.sections) return null;

        const totalSteps = roadmap.totalSteps || 0;
        const completedSteps = roadmap.completedSteps || 0;
        const progress = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

        return (
            <div
                onClick={() => onSelectRoadmap(roadmapKey)}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:scale-105"
            >
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
            </div>
        );
    };

    return (
        <div>
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
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="text-3xl mb-2">📚</div>
                    <div className="text-2xl text-gray-300 font-bold mb-1">
                        {careerPaths.length + techPaths.length}
                    </div>
                    <div className="text-sm  text-gray-400">Total Roadmaps</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="text-3xl mb-2">✅</div>
                    <div className="text-2xl text-gray-300 font-bold mb-1">
                        {Object.values(initialRoadmapsData).reduce((sum, r) => sum + (r.completedSteps || 0), 0)}
                    </div>
                    <div className="text-sm text-gray-400">Steps Completed</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="text-2xl text-gray-300 font-bold mb-1">
                        {Object.values(initialRoadmapsData).reduce((sum, r) => sum + (r.totalSteps || 0), 0)}
                    </div>
                    <div className="text-sm text-gray-400">Total Steps</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;