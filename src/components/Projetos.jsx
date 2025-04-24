import React from "react";
import '/src/styles/Projetos.css';
import imagemPortfolio from '/src/assets/portfolio.png'; 

export default function Projetos() {
    return (
        <div className="main-container">
            <div className="ferramentas-desenvolvimento">
                <div className="ferramentas">
                    <p className="txt-ferramentas txt-titulo">Ferramentas</p>
                    <div className="div-btn-ferramentas">
                        <button className="btn-ferramentas"><span className="btn-projetos-span">VSCode</span></button>
                        <button className="btn-ferramentas"><span className="btn-projetos-span">IntelliJ</span></button>
                        <button className="btn-ferramentas"><span className="btn-projetos-span">Github</span></button>
                        <button className="btn-ferramentas"><span className="btn-projetos-span">Jira</span></button>
                        <button className="btn-ferramentas"><span className="btn-projetos-span">Azure</span></button>
                        <button className="btn-ferramentas"><span className="btn-projetos-span">Postman</span></button>
                    </div>
                </div>
                <div className="desenvolvimento">
                    <p className="txt-desenvolvimento txt-titulo">Desenvolvimento</p>
                    <div className="div-btn-desenvolvimento">
                        <button className="btn-desenvolvimento"><span className="btn-projetos-span">Python</span></button>
                        <button className="btn-desenvolvimento"><span className="btn-projetos-span">Java</span></button>
                        <button className="btn-desenvolvimento"><span className="btn-projetos-span">JavaScript</span></button>
                        <button className="btn-desenvolvimento"><span className="btn-projetos-span">HTML/CSS</span></button>
                        <button className="btn-desenvolvimento"><span className="btn-projetos-span">React</span></button>
                        <button className="btn-desenvolvimento"><span className="btn-projetos-span">Cypress</span></button>
                        <button className="btn-desenvolvimento"><span className="btn-projetos-span">React</span></button>
                        <button className="btn-desenvolvimento"><span className="btn-projetos-span">Git</span></button>
                    </div>
                </div>
            </div>
            <div className="projetos">
                    <p className="txt-projetos txt-titulo">Projetos públicos</p>
                    <div className="projeto projeto1">
                        <div className="projeto1-imagem">
                        <img src={imagemPortfolio} alt="" />
                        <div className="projeto1-texto">
                            <p className="projeto1-titulo">Portfolio</p>
                            <p className="projeto1-descricao">Página pessoal também usada como portfólio. Projeto feito com React, JavaScript e HTML/CSS.</p>
                            <button className="btn-projeto1" onClick={() => window.open("https://github.com/victor-c-santos/meu-portfolio", "_blank")}><span className="btn-projetos-span">Github</span></button>
                        </div>
                        </div>
                    </div>
                    <div className="projeto projeto2">
                        <p className="projeto2-texto">Estou trabalhando em mais coisas mas por enquanto é isso..</p>
                    </div>
                </div>       
        </div>
    )
}