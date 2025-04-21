import React from "react";
import '/src/styles/Projetos.css';
import imagemPortfolio from '/src/assets/portfolio.png'; 

export default function Projetos() {
    return (
        <div className="main-container">
            <div className="emprego-txt"><p>Estou atualmente aberto a ofertas de trabalhos/empregos, me contate pelo meu <a href="">email</a>.</p></div>
            <div className="ferramentas-desenvolvimento">
                <div className="ferramentas">
                    <p className="txt-ferramentas txt-titulo">Ferramentas</p>
                    <div className="div-btn-ferramentas">
                    <button className="btn-ferramentas">VSCode</button>
                        <button className="btn-ferramentas">IntelliJ</button>
                        <button className="btn-ferramentas">Github</button>
                        <button className="btn-ferramentas">Jira</button>
                        <button className="btn-ferramentas">Azure</button>
                        <button className="btn-ferramentas">Postman</button>
                    </div>
                </div>
                <div className="desenvolvimento">
                    <p className="txt-desenvolvimento txt-titulo">Desenvolvimento</p>
                    <div className="div-btn-desenvolvimento">
                        <button className="btn-desenvolvimento">Python</button>
                        <button className="btn-desenvolvimento">Java</button>
                        <button className="btn-desenvolvimento">JavaScript</button>
                        <button className="btn-desenvolvimento">HTML/CSS</button>
                        <button className="btn-desenvolvimento">React</button>
                        <button className="btn-desenvolvimento">Cypress</button>
                        <button className="btn-desenvolvimento">React</button>
                        <button className="btn-desenvolvimento">Git</button>
                    </div>
                </div>
            </div>
            <div className="projetos">
                    <p className="txt-projetos txt-titulo">Projetos</p>
                    <div className="projeto projeto1">
                        <div className="projeto1-imagem">
                        <img src={imagemPortfolio} alt="" />
                        <div className="projeto1-texto">
                            <p className="projeto1-titulo">Portfolio</p>
                            <p className="projeto1-descricao">Página pessoal e portfolio. Este projeto foi feito com React e Node.js.</p>
                            <button className="btn-projeto1">Voce já está vendo</button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}