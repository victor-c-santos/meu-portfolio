import React from "react";
import '/src/styles/Links.css';
import github from '/src/assets/github.png';
import ButtonOpenSound from '/src/components/audio/ButtonOpenSound.jsx'
import linkedin from '/src/assets/linkedin.png';
import instagram from '/src/assets/instagram.png';
import steam from '/src/assets/steam.png';

export default function Links() {
  return (
    <div className="botoes">
        <ButtonOpenSound onClick={() => window.open("https://github.com/victor-c-santos", "_blank")}><img src={github}  alt="" className="icon-links-button icone-github"></img><p className="links-texto">Github</p></ButtonOpenSound>
        <ButtonOpenSound onClick={() => window.open("https://www.linkedin.com/in/victor-hc-santos/", "_blank")}><img src={linkedin} alt="" className="icon-links-button icone-linkedin" /><p className="links-texto">LinkedIn</p></ButtonOpenSound>
        <ButtonOpenSound onClick={() => window.open("https://www.instagram.com/ovictor.cs/#", "_blank")}><img src={instagram} alt="" className="icon-links-button icone-instagram" /><p className="links-texto">Instagram</p></ButtonOpenSound>
        <ButtonOpenSound onClick={() => window.open("https://steamcommunity.com/id/oVitrola/", "_blank")}><img src={steam} alt="" className="icon-links-button icone-steam" /><p className="links-texto">Steam</p></ButtonOpenSound>
    </div>
  )
}