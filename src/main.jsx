import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css';

// Global Scroll Reveal Observer
const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: stop observing once revealed
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal, .revealLeft, .revealRight, .revealScale');
  revealElements.forEach((el) => observer.observe(el));
};

// Use a small timeout to ensure DOM is ready or run on route changes
window.addEventListener('load', initScrollReveal);

// For SPA route changes, we might need to re-init
const observeRouteChange = () => {
  const targetNode = document.getElementById('root');
  const config = { childList: true, subtree: true };
  const callback = () => initScrollReveal();
  const mutationObserver = new MutationObserver(callback);
  mutationObserver.observe(targetNode, config);
};
window.addEventListener('DOMContentLoaded', observeRouteChange);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
