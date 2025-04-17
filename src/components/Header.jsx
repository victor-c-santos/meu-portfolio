import React from 'react';
import '/src/styles/Header.css';
// vai ser util no futuro, prometo
export default function Header() {
    return (
      <header>
        <nav>
          <div className='header-elements'>
            <div className='header-elements-left'>
              <a href="#light-toggle">modo escuro</a>
            </div>
            <div className='header-elements-right'>
              <a href="#ptbr">brazilzilzil</a>
              <a href="#eng">engles</a>
            </div>
          </div>
        </nav>
      </header>
    );
  }