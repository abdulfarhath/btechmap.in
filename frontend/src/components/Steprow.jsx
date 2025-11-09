// src/components/StepRow.jsx

import { FileText, Star } from "lucide-react";

const StepRow = ({ step, roadmapColor, onToggle }) => {
    return (
        <div className="grid grid-cols-[80px_1fr_100px_80px_100px] text-white items-center gap-4 px-6 py-4 border-b border-gray-800 transition-colors last:border-b-0 hover:bg-gray-800/50">
            {/* Status Checkbox */}
            <div className="text-left">
                <div 
                    className={`w-6 h-6 border-2 rounded-md flex items-center justify-center cursor-pointer transition-all font-bold`} 
                    style={{ borderColor: roadmapColor, backgroundColor: step.completed ? roadmapColor : 'transparent' }}
                    onClick={onToggle}
                >
                    {step.completed && <span style={{color: '#1a1a1a'}}>✓</span>}
                </div>
            </div>

            {/* Step Details */}
            <div className="text-left">
                <div className="font-medium mb-1">{step.title}</div>
                <div className="text-sm text-gray-400">{step.description}</div>
                {step.options && step.options.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {step.options.map(opt => (
                            <span key={opt} className="text-xs py-1 px-2.5 border rounded-full" style={{ borderColor: roadmapColor, color: roadmapColor }}>
                                {opt}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* --- UPDATED RESOURCES COLUMN --- */}
            <div className="text-center">
                {step.link ? (
                    <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open resource"
                        className="inline-block transition-colors text-gray-500 hover:text-cyan-400"
                    >
                        <FileText size={16} />
                    </a>
                ) : step.hasResource ? (
                    // Fallback for other roadmaps that don't have links yet
                    <FileText size={16} className="text-gray-500 inline" />
                ) : null}
            </div>
            
            {/* Note Column */}
            <div className="text-center">
                <span className="text-gray-500 text-2xl cursor-pointer leading-none select-none">+</span>
            </div>
            
            {/* Revision Column */}
            <div className="text-center">
                <Star size={16} className="text-gray-500 transition-colors cursor-pointer hover:text-yellow-500 inline" />
            </div>
        </div>
    );
};

export default StepRow;