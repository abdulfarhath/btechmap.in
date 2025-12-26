import React, { useMemo, useEffect, useRef } from 'react';
import { ExternalLink, Calendar, Trophy, Globe, Briefcase, Award, MapPin, Clock, ArrowRight } from 'lucide-react';
import { hackathonData } from '../data/hackathons.js';

// Animation styles
const animationStyles = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes pulse-glow {
    0%, 100% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    50% {
        box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
    }
}

/* Scroll animation classes - hidden by default */
.scroll-animate {
    opacity: 0;
}

.scroll-animate.animate-visible {
    animation-fill-mode: forwards;
}

.scroll-animate.fade-in-up.animate-visible {
    animation: fadeInUp 0.7s ease-out forwards;
}

.scroll-animate.fade-in.animate-visible {
    animation: fadeIn 0.8s ease-out forwards;
}

.scroll-animate.slide-in-left.animate-visible {
    animation: slideInLeft 0.6s ease-out forwards;
}

.scroll-animate.slide-in-right.animate-visible {
    animation: slideInRight 0.6s ease-out forwards;
}

.scroll-animate.scale-in.animate-visible {
    animation: scaleIn 0.5s ease-out forwards;
}

.hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
`;

// Custom hook for scroll animations
const useScrollAnimation = (dependency) => {
    useEffect(() => {
        // Small delay to ensure elements are rendered
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-visible');
                        }
                    });
                },
                {
                    threshold: 0.05,
                    rootMargin: '0px 0px -20px 0px'
                }
            );

            const elements = document.querySelectorAll('.scroll-animate');
            elements.forEach((el) => observer.observe(el));

            return () => {
                elements.forEach((el) => observer.unobserve(el));
            };
        }, 100);

        return () => clearTimeout(timer);
    }, [dependency]);
};

// --- Helper Functions for Date Parsing ---

const monthMap = {
    jan: 0, january: 0,
    feb: 1, february: 1,
    mar: 2, march: 2,
    apr: 3, april: 3,
    may: 4,
    jun: 5, june: 5,
    jul: 6, july: 6,
    aug: 7, august: 7,
    sep: 8, sept: 8, september: 8,
    oct: 9, october: 9,
    nov: 10, november: 10,
    dec: 11, december: 11
};

const getMonthFromDateString = (dateStr) => {
    if (!dateStr) return { monthIndex: 12, label: 'TBA' };
    const lower = dateStr.toLowerCase();

    // Check for "Ongoing" 
    if (lower.includes('ongoing') || lower.includes('rolling') || lower.includes('various')) {
        return { monthIndex: -1, label: 'Year Round / Rolling' }; // Special code for ongoing
    }

    // Check for Quarters
    if (lower.includes('q1')) return { monthIndex: 0, label: 'Q1 (Jan-Mar)' };
    if (lower.includes('q2')) return { monthIndex: 3, label: 'Q2 (Apr-Jun)' };
    if (lower.includes('q3')) return { monthIndex: 6, label: 'Q3 (Jul-Sep)' };
    if (lower.includes('q4')) return { monthIndex: 9, label: 'Q4 (Oct-Dec)' };

    // Try to find a month name
    for (const [key, val] of Object.entries(monthMap)) {
        if (lower.includes(key)) {
            return { monthIndex: val, label: new Date(2026, val).toLocaleString('default', { month: 'long' }) };
        }
    }

    // Default fallback
    return { monthIndex: 12, label: 'To Be Announced' };
};

const getYearFromDateString = (dateStr) => {
    if (!dateStr) return 2026;
    const match = dateStr.match(/202[5-9]/);
    return match ? parseInt(match[0]) : 2026;
};


const HackathonCard = ({ event, index = 0 }) => {
    return (
        <div
            className="scroll-animate fade-in-up bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 flex flex-col h-full group relative hover-lift"
            style={{ animationDelay: `${index * 80}ms` }}
        >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3 gap-2">
                    <span className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-[10px] uppercase tracking-wider font-bold rounded-md">
                        {event.organizer}
                    </span>
                    {event.type.includes('Global') && (
                        <span className="text-blue-500 dark:text-blue-400" title="Global Event"><Globe size={16} /></span>
                    )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {event.name}
                </h3>

                <p className="text-sm text-gray-500 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                    {event.description}
                </p>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300 p-2 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                        <Calendar size={14} className="text-blue-500 flex-shrink-0" />
                        <span className="truncate">{event.dates}</span>
                    </div>
                    {event.prize && (
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300 p-2 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-900/30">
                            <Trophy size={14} className="text-amber-600 dark:text-amber-500 flex-shrink-0" />
                            <span className="truncate text-amber-800 dark:text-amber-300">{event.prize}</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {event.internship && (
                        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[10px] rounded-full font-bold flex items-center gap-1">
                            <Briefcase size={8} /> INTERNSHIP
                        </span>
                    )}
                    {event.ppo && (
                        <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400 text-[10px] rounded-full font-bold">
                            PPO
                        </span>
                    )}
                    {event.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-[10px] rounded-full">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-3 bg-gray-50 dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700">
                <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-white dark:bg-slate-700 hover:bg-black hover:text-white dark:hover:bg-blue-600 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600 hover:border-transparent rounded-lg font-semibold transition-all text-xs uppercase tracking-wide group/btn"
                >
                    View Details <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

const HackathonsPage = () => {
    // 1. Process Data: Flatten -> Group by Month -> Sort
    const processedEvents = useMemo(() => {
        // Flatten
        const allEvents = hackathonData.flatMap(tier => tier.events.map(ev => ({ ...ev, tierColor: tier.color })));

        // Grouping
        const groups = {};

        allEvents.forEach(event => {
            const { monthIndex, label } = getMonthFromDateString(event.dates);
            const year = getYearFromDateString(event.dates);

            // Key logic: 
            // If year is 2025 and month is Sept+ (8+), sort key: 202508
            // If year is 2026, sort key: 202601 etc.
            // If ongoing (-1), put at the end: 999999

            let sortKey = year * 100 + monthIndex;
            if (monthIndex === -1) sortKey = 999999;

            if (!groups[sortKey]) {
                groups[sortKey] = {
                    title: label,
                    year: monthIndex === -1 ? '' : year,
                    isOngoing: monthIndex === -1,
                    events: []
                };
            }
            groups[sortKey].events.push(event);
        });

        // Convert to array and sort
        return Object.keys(groups).sort((a, b) => a - b).map(key => groups[key]);

    }, []);

    // Initialize scroll animations after data is processed
    useScrollAnimation(processedEvents.length);

    return (
        <>
            <style>{animationStyles}</style>
            <div className="max-w-screen-xl mx-auto pb-20 px-4 sm:px-6">

                {/* Hero Section */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-gray-900 dark:text-white mb-16 p-8 md:p-16 shadow-xl dark:shadow-2xl border border-blue-100 dark:border-slate-800 animate-fade-in">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-15 dark:opacity-50"
                        style={{ backgroundImage: 'url(/hackathon-bg.png)' }}
                    ></div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/60 to-purple-50/70 dark:from-slate-900/60 dark:via-slate-900/50 dark:to-slate-800/60"></div>
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full blur-[100px] opacity-10 dark:opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full blur-[100px] opacity-10 dark:opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent dark:from-blue-900/10 dark:via-slate-900/50 dark:to-slate-900 pointer-events-none"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/10 border border-blue-300/50 dark:border-blue-400/20 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                            <Globe size={12} /> Global & India 2026
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-blue-200">
                            Hackathon Calendar
                        </h1>

                        <p className="text-gray-600 dark:text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
                            The ultimate schedule for 2026. <span className="text-blue-600 dark:text-white font-medium">₹50Cr+ prize pool</span> and <span className="text-blue-600 dark:text-white font-medium">top-tier hiring opportunities</span> curated for you.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-3 px-6 py-3 bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm">
                                <Calendar className="text-blue-500 dark:text-blue-400" />
                                <div className="text-left">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 uppercase font-bold">Timeline</p>
                                    <p className="text-sm font-semibold text-gray-800 dark:text-white">Jan - Dec 2026</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-3 bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm">
                                <Trophy className="text-amber-500 dark:text-amber-400" />
                                <div className="text-left">
                                    <p className="text-xs text-gray-500 dark:text-slate-400 uppercase font-bold">Opportunity</p>
                                    <p className="text-sm font-semibold text-gray-800 dark:text-white">PPOs & Internships</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline View */}
                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-20"></div>

                    <div className="space-y-12">
                        {processedEvents.map((monthGroup, idx) => (
                            <div key={idx} className="relative md:pl-24">

                                {/* Month Marker (Desktop) */}
                                <div className="hidden md:flex absolute left-0 top-0 flex-col items-center scroll-animate slide-in-left" style={{ animationDelay: `${idx * 100}ms` }}>
                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-500 dark:border-blue-400 shadow-lg z-10 flex flex-col items-center justify-center p-2 text-center group hover:scale-110 transition-transform">
                                        <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-slate-400">{monthGroup.year}</span>
                                        <span className="text-xs font-black text-gray-900 dark:text-white leading-none whitespace-normal uppercase">
                                            {monthGroup.title.split(' ')[0].substring(0, 3)}
                                        </span>
                                    </div>
                                </div>

                                {/* Section Header (Mobile & Content) */}
                                <div className="mb-6 flex items-center md:hidden">
                                    <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                                        <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {monthGroup.title} {monthGroup.year && <span className="text-gray-400 font-normal text-lg"> {monthGroup.year}</span>}
                                        </h2>
                                    </div>
                                </div>

                                {/* Desktop Year/Month Title */}
                                <div className="hidden md:block mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                        {monthGroup.title}
                                        {!monthGroup.isOngoing && <span className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-500 text-sm rounded-full font-medium">{monthGroup.events.length} Events</span>}
                                    </h2>
                                </div>

                                {/* Events Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                                    {monthGroup.events.map((event, i) => (
                                        <HackathonCard key={`${event.id}-${i}`} event={event} index={i} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Can't find what you're looking for?</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                            Dates and deadlines change frequently. Always check the official website for the most accurate information.
                        </p>
                        <button className="px-6 py-2.5 bg-slate-900 dark:bg-blue-600 text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                            Subscribe for Updates
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HackathonsPage;
