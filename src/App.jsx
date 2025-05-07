import LightModeButton from '/src/components/LightModeButton';
import MainMenu from '/src/components/MainMenu';
import Footer from '/src/components/Footer';
import StarBackground from '/src/components/StarBackground';
import Astronauta from '/src/components/Astronauta';
import { useEffect, useState} from 'react';
import '/src/App.css';

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [lightMode]);

  return (
    <div className="app-container">
      <StarBackground starCount={100} lightMode={lightMode} />
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
