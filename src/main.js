// Import styles
import './style.css';

// Import GSAP and plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);



// Import animations
import './animations.js';

console.log('✅ Vite + GSAP loaded successfully!');