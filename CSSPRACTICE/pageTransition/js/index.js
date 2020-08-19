// File: main.js
// Import Highway
import Highway from '@dogstudio/highway';
import Fade from './transition';

// Call Highway.Core once.
// Store it in a variable to use events
const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});
