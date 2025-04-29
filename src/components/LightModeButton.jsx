import React from "react";
import '/src/styles/LightModeButton.css';
import sun from '/src/assets/sun.png';
import moon from '/src/assets/moon.png';

export default function LightmodeButton({ lightMode, setLightMode}) {
  return (
    <button onClick={() => setLightMode(!lightMode)} className="header-element">
      {lightMode ? <img src={moon} alt="dark mode"/>: <img src={sun} alt="light mode" />}
    </button>
  );
} 