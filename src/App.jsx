import LightModeButton from '/src/components/LightModeButton';
import MainMenu from '/src/components/MainMenu';
import Footer from '/src/components/Footer';
import StarBackground from '/src/components/StarBackground';
import Astronauta from '/src/components/Astronauta';
import LightOnSound from '/src/assets/lightOnSound.mp3'
import LightOffSound from '/src/assets/lightOffSound.mp3'
import { useEffect, useState, useRef } from 'react';
import '/src/App.css';

export default function App() {
  const [lightMode, setLightMode] = useState(false);
  const lightOnSound = useRef(new Howl({ src: [ LightOnSound ], volume:0.8}));
  const lightOffSound = useRef(new Howl({ src: [LightOffSound], volume:0.8}));


  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light');
      lightOnSound.current.play();
    } else {
      document.body.classList.remove('light');
      lightOffSound.current.play();
    }
  }, [lightMode]);

  return (
    <div className="app-container">
      <StarBackground />
      <Astronauta />
      <div className='main-content'>
        <LightModeButton lightMode={lightMode} setLightMode={setLightMode}/>
        <main>
          <MainMenu />
        </main>
        <Footer />
      </div>
    </div>
  );
}
