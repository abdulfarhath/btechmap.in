// src/components/LeaderboardPage.jsx
import React, { useState, useEffect } from 'react';
import { Trophy, Search } from 'lucide-react';
import { getToken } from '../authService.js'; // Use this for API_URL if needed

const API_URL = 'http://localhost:8080/api';

const LeaderboardPage = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [collegeFilter, setCollegeFilter] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchLeaderboard = async (college) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/leaderboard?college=${encodeURIComponent(college)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch leaderboard');
            }
            const data = await response.json();
            setLeaderboard(data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchLeaderboard(collegeFilter);
    }, []); // Load once on mount

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        fetchLeaderboard(collegeFilter);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Trophy size={32} className="text-yellow-400" />
                Leaderboard
            </h1>

            {/* Filter Form */}
            <form onSubmit={handleFilterSubmit} className="mb-6 flex gap-2">
                <input
                    type="text"
                    value={collegeFilter}
                    onChange={(e) => setCollegeFilter(e.target.value)}
                    placeholder="Filter by college (e.g., 'IIT')"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold rounded-lg transition-colors"
                >
                    <Search size={20} />
                </button>
            </form>

            {/* Leaderboard Table */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="p-4 w-16">Rank</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">College</th>
                            <th className="p-4 w-24">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="4" className="text-center p-8 text-gray-400">Loading...</td>
                            </tr>
                        ) : leaderboard.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center p-8 text-gray-400">No users found.</td>
                            </tr>
                        ) : (
                            leaderboard.map((user) => (
                                <tr key={user.rank} className="border-t border-gray-800 hover:bg-gray-800/50">
                                    <td className="p-4 font-bold text-lg text-center">
                                        {user.rank === 1 && '🏆'}
                                        {user.rank === 2 && '🥈'}
                                        {user.rank === 3 && '🥉'}
                                        {user.rank > 3 && user.rank}
                                    </td>
                                    <td className="p-4 font-semibold text-white">{user.name}</td>
                                    <td className="p-4 text-gray-400">{user.college}</td>
                                    <td className="p-4 font-bold text-cyan-400 text-lg">{user.totalScore}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderboardPage;