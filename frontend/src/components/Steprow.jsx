// StepRow.jsx - Clean light mode colors

import { FileText, Star } from "lucide-react";

const StepRow = ({ step, roadmapColor, onToggle }) => {
    return (
        <div className="grid grid-cols-[80px_1fr_100px_80px_100px] text-gray-800 dark:text-white items-center gap-4 px-6 py-4 border-b border-gray-100 dark:border-gray-800 transition-colors last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800/50">
            {/* Status Checkbox */}
            <div className="text-left">
                <div
                    className={`w-6 h-6 border-2 rounded-md flex items-center justify-center cursor-pointer transition-all font-bold`}
                    style={{
                        borderColor: roadmapColor,
                        backgroundColor: step.completed ? roadmapColor : 'transparent'
                    }}
                    onClick={onToggle}
                >
                    {step.completed && <span style={{ color: '#ffffff' }}>✓</span>}
                </div>
            </div>

            {/* Step Details */}
            <div className="text-left">
                <div className="font-medium mb-1">{step.title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{step.description}</div>
                {step.options && step.options.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {step.options.map(opt => (
                            <span
                                key={opt}
                                className="text-xs py-1 px-2.5 border rounded-full"
                                style={{ borderColor: roadmapColor, color: roadmapColor }}
                            >
                                {opt}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Resources Column */}
            <div className="text-center">
                {step.link ? (
                    <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open resource"
                        className="inline-block transition-colors text-gray-400 hover:text-blue-500 dark:hover:text-cyan-400"
                    >
                        <FileText size={16} />
                    </a>
                ) : step.hasResource ? (
                    <FileText size={16} className="text-gray-300 dark:text-gray-600 inline" />
                ) : null}
            </div>

            {/* Note Column */}
            <div className="text-center">
                <span className="text-gray-400 text-2xl cursor-pointer leading-none select-none hover:text-gray-600">+</span>
            </div>

            {/* Revision Column */}
            <div className="text-center">
                <Star size={16} className="text-gray-400 transition-colors cursor-pointer hover:text-amber-500 inline" />
            </div>
        </div>
    );
};

export default StepRow;