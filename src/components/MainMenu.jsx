import { useState } from 'react';
import '/src/styles/MainMenu.css';
import DraggablePopup from '/src/components/Popup.jsx';
import Sobre from '/src/components/Sobre.jsx';
import Projetos from '/src/components/Projetos.jsx';
import Links from '/src/components/Links.jsx';
import Contato from '/src/components/Contato.jsx';
import link from '/src/assets/link.png';
import email from '/src/assets/email.png';
import project from '/src/assets/project.png';
import about from '/src/assets/about.png';

export default function MainMenu() {
  const [popups, setPopups] = useState([]);

  const openPopup = (title, content, contentClassName = "") => {
    if (popups.some(popup => popup.title === title)) {
      return;}
    const id=Date.now();
    const offset = 30 * (popups.length * 2);
    setPopups(prev => [...prev, { id, title, content, contentClassName}]);
  }

  const closePopup = (id) => {
    setPopups(prev => prev.filter(popup => popup.id !== id));
  }
  
  return (
    <div className="window-style">
      <div className="barra-superior">
        <span className="window-title">home</span>
      </div>
      <div className='intro-div'><p className="intro"><span className='oi'>Oi! </span><span className='victor'>Eu sou o Victor!</span></p></div>
      <div className='subtext'><span>Dev Frontend | QA | Fullstack</span></div>
      <div className="window-content">
        <button className='btn-sobre btn-menu' onClick={() => openPopup('Sobre mim', <Sobre/>, 'sobre-style')}><img src={about} alt="Sobre" className='icon-popups icon-sobre'/><p>Sobre</p></button>
        <button className='btn-projetos btn-menu' onClick={() => openPopup('Projetos', <Projetos/>, 'projetos-style')}><img src={project} alt="Projetos" className='icon-popups icon-projetos'/><p>Projetos</p></button>
        <button className='btn-links btn-menu' onClick={() => openPopup('Links', <Links/>, 'links-style')}><img src={link} alt="Links" className='icon-popups icon-links'/><p>Links</p></button>
        <button className='btn-contato btn-menu' onClick={() => openPopup('Contato', <Contato/>, 'contato-style')}><img src={email} alt="Email" className='icon-popups icon-contato'/><p>Contatos</p></button>
      </div>
      {popups.map(popup => (
        <DraggablePopup 
          key={popup.id} 
          title={popup.title} 
          onClose={() => closePopup(popup.id)}
          contentClassName={popup.contentClassName}>
          {popup.content}
        </DraggablePopup>
      ))}
    </div>
  );
}