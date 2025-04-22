import React, { useEffect, useRef } from 'react';
import '/src/styles/StarBackground.css';

const StarBackground = ({ starCount = 100 }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${1 + Math.random() * 2}s`;
      container.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach(star => container.removeChild(star));
    };
  }, [starCount]);

  return <div className="starry-background" ref={containerRef}></div>;
};

export default StarBackground;