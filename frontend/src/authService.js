// src/authService.js

// --- Auth Functions ---

const API_URL = 'http://localhost:8080/api';

export const login = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Login failed');
    }

    const data = await response.json();
    
    // Save token and user data
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    return data;
};

export const signup = async (name, email, password) => {
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Signup failed');
    }

    const data = await response.json();
    
    // Save token and user data
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    return data;
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Clear progress data as well
    localStorage.removeItem('completedSteps');
    localStorage.removeItem('quizProgress');
    localStorage.removeItem('badges');
};

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const getToken = () => {
    return localStorage.getItem('token');
};


// --- NEW! Progress Functions ---

const getAuthHeaders = () => {
    const token = getToken();
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
};

export const getProgress = async () => {
    if (!isAuthenticated()) {
        return { completedSteps: {}, quizProgress: {}, badges: {} };
    }

    try {
        const response = await fetch(`${API_URL}/progress`, {
            method: 'GET',
            headers: getAuthHeaders(),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch progress');
        }
        
        return await response.json();

    } catch (error) {
        console.error('Error fetching progress:', error);
        return { completedSteps: {}, quizProgress: {}, badges: {} };
    }
};

export const saveProgress = async (progress) => {
    if (!isAuthenticated()) return;

    try {
        await fetch(`${API_URL}/progress`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(progress),
        });
    } catch (error) {
        console.error('Error saving progress:', error);
    }
};