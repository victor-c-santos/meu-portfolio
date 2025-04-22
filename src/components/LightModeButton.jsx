import React from "react";
import '/src/styles/LightModeButton.css';

export default function DarkmodeButton({ lightMode, setLightMode}) {
  return (
    <button onClick={() => setLightMode(!lightMode)} className="header-element">
      {lightMode ? "🌙" : "☀️"}
    </button>
  );
} 