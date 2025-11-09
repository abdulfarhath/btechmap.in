// authService.js - Add this file to your src folder

const API_URL = 'http://localhost:8080/api';

// Get token from localStorage
export const getToken = () => {
    return localStorage.getItem('token');
};

// Set token in localStorage
const setToken = (token) => {
    localStorage.setItem('token', token);
};

// Remove token from localStorage
const removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

// Get user from localStorage
export const getUser = () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
};

// Set user in localStorage
const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

// Check if user is authenticated
export const isAuthenticated = () => {
    return !!getToken();
};

// Signup
export const signup = async (name, email, password) => {
    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Signup failed');
        }

        // Save token and user
        setToken(data.token);
        setUser(data.user);

        return data;
    } catch (error) {
        throw error;
    }
};

// Login
export const login = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Login failed');
        }

        // Save token and user
        setToken(data.token);
        setUser(data.user);

        return data;
    } catch (error) {
        throw error;
    }
};

// Logout
export const logout = async () => {
    try {
        const token = getToken();
        
        await fetch(`${API_URL}/logout`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        removeToken();
    } catch (error) {
        // Even if API call fails, remove local data
        removeToken();
        throw error;
    }
};

// Get current user from API
export const getCurrentUser = async () => {
    try {
        const token = getToken();
        
        const response = await fetch(`${API_URL}/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to get user');
        }

        setUser(data);
        return data;
    } catch (error) {
        removeToken();
        throw error;
    }
};