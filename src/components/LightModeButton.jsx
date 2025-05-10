import React from "react";
import { howl } from 'howler';
import lightOnSound from '/src/assets/lightOnSound.mp3'
import lightOffSound from '/src/assets/lightOffSound.mp3'
import '/src/styles/LightModeButton.css';
import sun from '/src/assets/sun.png';
import moon from '/src/assets/moon.png';

export default function LightmodeButton({ lightMode, setLightMode}) {
  const lightModeHandleClick = () => {
    const sound = new Howl({
      src: [lightMode ? lightOffSound : lightOnSound],
      volume: 0.8,
    });

    sound.play();
    setLightMode(!lightMode);
  };

  return (
    <label>
        <input className="toggle-checkbox" type="checkbox" checked={lightMode} onChange={lightModeHandleClick} />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false" />
          </div>
          <div className="toggle-button" />
          <div className="moon-icon-wrapper">
            <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false" />
          </div>
        </div>
      </label>
  );
} 