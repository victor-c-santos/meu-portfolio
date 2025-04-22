import Header from '/src/components/Header';
import MainMenu from '/src/components/MainMenu';
import Footer from '/src/components/Footer';
import StarBackground from '/src/components/StarBackground';
import Astronauta from '/src/components/Astronauta';
import { useEffect, useState } from 'react';
import '/src/App.css';

export default function App() {
  return (
    <div className="app-container">
      <StarBackground />
      <Astronauta />
      <div className='main-content'>
        <Header />
        <main>
          <MainMenu />
        </main>
        <Footer />
      </div>
    </div>
  );
}
