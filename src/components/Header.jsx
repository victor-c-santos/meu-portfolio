import React from 'react';
import '/src/styles/Header.css';
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
              <button href="#ptbr" className='portugues'><img src="/src/assets/brazil.png" alt="Português"/></button>
              <button href="#eng" className='ingles'><img src="/src/assets/usa.png" alt="Inglês" /></button>
            </div>
          </div>
        </nav>
      </header>
    );
  }