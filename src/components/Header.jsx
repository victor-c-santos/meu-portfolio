import React from 'react';
import '/src/styles/Header.css';
import brazil from '/src/assets/brazil.png';
import usa from '/src/assets/usa.png';

// vai ser util no futuro, prometo
export default function Header() {
    return (
      <header>
        <nav>
          <div className='header-elements'>
            <div className='header-elements-left'>
              <input type="checkbox" id='checkboxInput' />
                <label for="checkboxInput" class="toggleSwitch"></label>
            </div>
            <div className='header-elements-right'>
              <button href="#ptbr" className='portugues'><img src={brazil} alt="Português"/></button>
              <button href="#eng" className='ingles'><img src={usa} alt="Inglês" /></button>
            </div>
          </div>
        </nav>
      </header>
    );
  }