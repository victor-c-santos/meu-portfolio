import React from "react";
import '/src/styles/Projetos.css';

export default function Projetos() {
    return (
        <div className="main-container">
            <div className="emprego-txt"><p>Estou atualmente aberto a ofertas de trabalhos/empregos, me contate pelo meu <a href="">email</a>.</p></div>
            <div className="ferramentas-desenvolvimento">
                <div className="ferramentas">
                    <p className="txt-ferramentas txt-titulo">Ferramentas</p>
                    <div className="btn-ferramentas">
                        <button className="btn-ferramentas">React</button>
                        <button className="btn-ferramentas">JavaScript</button>
                        <button className="btn-ferramentas">HTML</button>
                        <button className="btn-ferramentas">CSS</button>
                        <button className="btn-ferramentas">Node.js</button>
                        <button className="btn-ferramentas">Express.js</button>
                        <button className="btn-ferramentas">PostgreSQL</button>
                    </div>
                </div>
                <div className="desenvolvimento">
                    <p className="txt-desenvolvimento txt-titulo">Desenvolvimento</p>
                    <div className="btn-desenvolvimento">
                        <button className="btn-desenvolvimento">Desenvolvimento Frontend</button>
                        <button className="btn-desenvolvimento">Desenvolvimento Backend</button>
                        <button className="btn-desenvolvimento">Desenvolvimento Fullstack</button>
                        <button className="btn-desenvolvimento">Desenvolvimento de APIs</button>
                    </div>
                </div>
            </div>
        </div>
    )
}