// src/components/RouteHandler.jsx
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useStore from '../store/useStore.js';

// Component to sync URL with Zustand Store
export const RouteHandler = () => {
    const location = useLocation();
    const { roadmapId } = useParams();
    const { setActiveRoadmap } = useStore();

    useEffect(() => {
        const path = location.pathname;
        let newRoadmap = 'dashboard';

        if (path === '/') {
            newRoadmap = 'dashboard';
        } else if (path === '/profile') {
            newRoadmap = 'profile';
        } else if (path === '/leaderboard') {
            newRoadmap = 'leaderboard';
        } else if (path === '/hackathons') {
            newRoadmap = 'hackathons';
        } else if (path.startsWith('/roadmap/') && roadmapId) {
            newRoadmap = roadmapId;
        }

        // Only update if it's different to prevent loops (though Zustand usually handles this)
        if (useStore.getState().activeRoadmap !== newRoadmap) {
            setActiveRoadmap(newRoadmap);
        }
    }, [location, roadmapId, setActiveRoadmap]);

    return null;
};
