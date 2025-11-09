import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { initialRoadmapsData } from '../Data.js';

const Sidebar = ({ activeRoadmap, setActiveRoadmap }) => {
    const [expandedSections, setExpandedSections] = useState({ career: true, tech: true });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const careerPaths = ['academics', 'gate'];
    const techPaths = ['webdev', 'dsa', 'aiml', 'datascience', 'java', 'python'];

    return (
        <div className="w-64 bg-gray-900 border-r border-gray-800 p-6 fixed h-screen overflow-y-auto font-['Yusei_Magic']">
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <span className="text-6xl font-bold text-cyan-400">BtechMap.in</span>
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