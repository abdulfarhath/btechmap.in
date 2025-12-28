// src/Data.js
// ============================================================================
// BTECHMAP - ULTRA DETAILED BEGINNER ROADMAPS 2025
// ============================================================================
// This file now re-exports from the modular roadmaps data structure.
// Individual roadmap data files are located in: src/data/roadmaps/
// ============================================================================

// Re-export the roadmaps data from the new modular structure
export { initialRoadmapsData } from './data/roadmaps/index.js';

// Also export individual roadmaps for direct access if needed
export {
    academics,
    gate,
    dsa,
    webdev,
    aiml,
    datascience,
    java,
    python
} from './data/roadmaps/index.js';