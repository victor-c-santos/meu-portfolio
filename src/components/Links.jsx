import React from "react";
import '/src/styles/Links.css';
import github from '/src/assets/github.svg';
import linkedin from '/src/assets/linkedin.svg';
import instagram from '/src/assets/instagram.svg';
import steam from '/src/assets/steam.svg';
import backlog from '/src/assets/backlog.svg';
import myanimelist from '/src/assets/myanimelist.svg';

export default function Links() {
  return (
    <div className="botoes">
        <button onClick={() => window.open("https://github.com/victor-c-santos", "_blank")}><img src={github}  alt="" className="icon-links"></img>Github</button>
        <button onClick={() => window.open("https://www.linkedin.com/in/victor-hc-santos/", "_blank")}><img src={linkedin} alt="" className="icon-links" />LinkedIn</button>
        <button onClick={() => window.open("https://www.instagram.com/ovictor.cs/#", "_blank")}><img src={instagram} alt="" className="icon-links" />Instagram</button>
        <button onClick={() => window.open("https://steamcommunity.com/id/oVitrola/", "_blank")}><img src={steam} alt="" className="icon-links" />Steam</button>
        <button onClick={() => window.open("https://docs.google.com/spreadsheets/d/1LBet-qxk0b4XnbJNl7WrSn9rKxX5Qv4C8bDYeEwoS2g/edit?gid=0#gid=0", "_blank")}><img src={backlog} alt="" className="icon-links" />Backlog</button>
        <button onClick={() => window.open("https://myanimelist.net/profile/Laikea_H", "_blank")}><img src={myanimelist} alt="" className="icon-links" />MyAnimeList</button>
    </div>
  )
}