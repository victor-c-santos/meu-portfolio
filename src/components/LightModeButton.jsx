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
    <button onClick={lightModeHandleClick} className="header-element">
      {lightMode ? <img src={moon} alt="dark mode"/>: <img src={sun} alt="light mode" />}
    </button>
  );
} 