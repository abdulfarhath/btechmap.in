// src/data/roadmaps/index.js
// ============================================================================
// BTECHMAP - ULTRA DETAILED BEGINNER ROADMAPS 2025
// ============================================================================
// Complete Beginners Edition - Step-by-Step Granular Learning Path
// Every topic broken down from ABSOLUTE BASICS
// All steps include a 'link' property for a video resource.
// ============================================================================

// Import all roadmaps
import { academics } from './academics.js';
import { gate } from './gate.js';
import { dsa } from './dsa.js';
import { webdev } from './webdev.js';
import { aiml } from './aiml.js';
import { datascience } from './datascience.js';
import { java } from './java.js';
import { python } from './python.js';

// Combine all roadmaps into one object
const rawRoadmapsData = {
    academics,
    gate,
    dsa,
    webdev,
    aiml,
    datascience,
    java,
    python
};

// Create a safe accessor that returns a default placeholder for missing keys
const initialRoadmapsData = new Proxy(rawRoadmapsData, {
    get(target, prop, receiver) {
        if (typeof prop === 'symbol') {
            return Reflect.get(target, prop, receiver);
        }
        if (prop in target) {
            return Reflect.get(target, prop, receiver);
        }
        // Default placeholder for any roadmap key that isn't defined above
        return {
            cardTitle: "Coming Soon",
            roadmapTitle: "Coming Soon",
            icon: "📘",
            color: "#9CA3AF",
            description: "Content will be added soon. Check back later!",
            sections: []
        };
    }
});

// Export the ultra detailed data
export { initialRoadmapsData };

// Also export individual roadmaps for direct access
export {
    academics,
    gate,
    dsa,
    webdev,
    aiml,
    datascience,
    java,
    python
};
