import { useState } from 'react';
import '/src/styles/MainMenu.css';
import DraggablePopup from '/src/components/Popup.jsx';

export default function MainMenu() {
  const [popups, setPopups] = useState([]);

  const openPopup = (title, content) => {
    if (popups.some(popup => popup.title === title)) {
      return;}
    const id=Date.now();
    const offset = 30 * (popups.length * 2);
    setPopups(prev => [...prev, { id, title, content,}]);
  }

  const closePopup = (id) => {
    setPopups(prev => prev.filter(popup => popup.id !== id));
  }
  
  return (
    <div className="window-style">
      <div className="barra-superior">
        <span className="window-title">home</span>
      </div>
      <div className='intro-div'><p className="intro"><span className='oi'>Oi! </span><span className='victor'>Eu sou o Victor!!</span></p></div>
      <div className='subtext'><span>Dev Frontend | QA | Gostosa profissional</span></div>
      <div className="window-content">
        <button onClick={() => openPopup('Sobre mim', <div>conteudo</div>)}> Sobre mim</button>
        <button onClick={() => openPopup('Trabalho', <div>conteudo</div>)}>Trabalho</button>
        <button onClick={() => openPopup('Contato', <div>conteudo</div>)}>Contato</button>
        <button onClick={() => openPopup('Links', <div>conteudo</div>)}>Links</button>
      </div>
      {popups.map(popup => (
        <DraggablePopup 
          key={popup.id} 
          title={popup.title} 
          onClose={() => closePopup(popup.id)}>
          {popup.content}
        </DraggablePopup>
      ))}
    </div>
  );
}