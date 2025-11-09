import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import StepRow from './Steprow.jsx';

const Section = ({ section, roadmapColor, onToggleStep }) => {
    const [expanded, setExpanded] = useState(true);
    const progress = section.steps.filter(s => s.completed).length;
    const total = section.steps.length;

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl mb-6 overflow-hidden">
            <div className="flex justify-between text-white items-center p-5 cursor-pointer transition-colors hover:bg-gray-800/50" onClick={() => setExpanded(!expanded)}>
                <div className="flex items-center gap-3">
                    {expanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    <span className="text-lg font-semibold">{section.title}</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-end gap-1.5 h-8">
                        {Array.from({ length: total }).map((_, index) => (
                            <div
                                key={index}
                                className="w-2 rounded-sm transition-all duration-300"
                                style={{
                                    height: `${((index + 1) / total) * 100}%`,
                                    backgroundColor: index < progress ? roadmapColor : '#1f2937',
                                    opacity: index < progress ? 1 : 0.3
                                }}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-400">{progress} / {total}</span>
                </div>
            </div>

            {expanded && (
                <div className="border-t border-gray-800">
                    <div className="grid grid-cols-[80px_1fr_100px_80px_100px] items-center gap-4 px-6 py-4 bg-gray-900/50 text-gray-500 text-xs font-semibold border-b border-gray-800">
                        <div className="text-left">Status</div>
                        <div className="text-left">Step & Details</div>
                        <div className="text-center">Resources</div>
                        <div className="text-center">Note</div>
                        <div className="text-center">Revision</div>
                    </div>
                    {section.steps.map(step => (
                        <StepRow 
                            key={step.id} 
                            step={step} 
                            roadmapColor={roadmapColor} 
                            onToggle={() => onToggleStep(section.id, step.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Section;