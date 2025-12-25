import React from 'react';
import { ExternalLink, Calendar, Trophy, Globe, Briefcase, Award, MapPin, Tag } from 'lucide-react';
import { hackathonData } from '../data/hackathons.js';

const HackathonCard = ({ event }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
            <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md mb-2">
                            {event.organizer}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {event.name}
                        </h3>
                    </div>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="text-blue-500" />
                        <span>{event.dates}</span>
                    </div>
                    {event.prize && (
                        <div className="flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                            <Trophy size={16} />
                            <span>{event.prize}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="text-red-500" />
                        <span>{event.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Award size={16} className="text-purple-500" />
                        <span className="truncate">{event.eligibility}</span>
                    </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">
                    {event.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {event.internship && (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full font-medium flex items-center gap-1">
                            <Briefcase size={10} /> Internship
                        </span>
                    )}
                    {event.ppo && (
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs rounded-full font-medium">
                            PPO
                        </span>
                    )}
                    {event.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white dark:bg-gray-700 hover:bg-black hover:text-white dark:hover:bg-blue-600 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:border-transparent rounded-lg font-semibold transition-all text-sm"
                >
                    View Details <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
};

const HackathonsPage = () => {
    return (
        <div className="max-w-6xl mx-auto pb-12">
            {/* Hero Header */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white mb-12 p-8 md:p-12 shadow-xl">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/30 text-xs font-semibold mb-4 backdrop-blur-sm">
                                <Globe size={12} /> Global & India 2026
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">Hackathon Database</h1>
                            <p className="text-blue-100 text-lg max-w-2xl">
                                Consolidating the best hackathon opportunities for 2026.
                                Over ₹50+ Crore in prize pools and 100+ internship opportunities listed.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/10">
                                <div className="text-2xl font-bold">35+</div>
                                <div className="text-xs text-blue-200 uppercase tracking-wider">Events</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/10">
                                <div className="text-2xl font-bold">₹50Cr+</div>
                                <div className="text-xs text-blue-200 uppercase tracking-wider">Prizes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="space-y-16">
                {hackathonData.map((tier, index) => (
                    <div key={index} className="scroll-mt-24" id={`tier-${index}`}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`w-2 h-10 rounded-full bg-gradient-to-b ${tier.color}`}></div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{tier.title}</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                                    <span className="font-semibold">{tier.period}</span> • {tier.description}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tier.events.map(event => (
                                <HackathonCard key={event.id} event={event} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl text-center">
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                    ⚠️ <strong>Disclaimer:</strong> Dates and prize amounts are subject to change by organizers. Always verify on the official event website.
                </p>
            </div>
        </div>
    );
};

export default HackathonsPage;
