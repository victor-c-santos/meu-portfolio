import React from 'react';
import { useState } from 'react';
import '/src/styles/Header.css';
import DarkmodeButton from './DarkmodeButton.jsx';
import brazil from '/src/assets/brazil.png';
import usa from '/src/assets/usa.png';

// vai ser util no futuro, prometo
export default function Header() {
    return (
      <header>
        <nav>
          <div className='header-elements'>
            <div className='header-elements-left'>
              {DarkmodeButton()}
            </div>
            <div className='header-elements-right'>
              <button href="#ptbr" className='portugues botao-idioma'><img src={brazil} alt="Português"/></button>
              <button href="#eng" className='ingles botao-idioma'><img src={usa} alt="Inglês" /></button>
            </div>
          </div>
        </nav>
      </header>
    );
  }