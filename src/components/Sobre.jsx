import React from "react";
import '/src/styles/Sobre.css';
import foto from '/src/assets/foto.png';

export default function Sobre() {
    return (
        <div className="div-pai">
            <div className="apresentacao">
                <img src={foto} alt="Eu" className="foto-apresentacao"/>
                <div className="texto-apresentacao">
                    <p className="p-nome">Victor Santos</p>
                    <p className="p-apresentacao">Analista de qualidade | Dev Fullstack | QA Automação </p>
                </div>
            </div>
            <div className="conteudo">
                <div className="textos">
                    <p>Opa! Eu sou o Victor, um Dev especializado em automação, eu...</p>
                    <li>Crio programas em Python e JavaScript </li>
                    <li>Crio sites usando React (como esse)</li>
                    <li>Me especializo em testes de software (manuais e automatizados)</li>
                    <li>Sou um estudante da área de T.I.</li>
                </div>
                <div className="educacao">
                    <p className="educacao-titulo titulo">Educação</p>
                    <div className="educacao-texto">
                        <p className="educacao-texto-principal">Técnologo em Análise e desenvolvimento de sistemas</p>
                        <p className="educacao-subtexto">(Em andamento | 01/2024 - 06/2026)</p>
                    </div>
                </div>
                <div className="outros-interesses">
                    <p className="outros-interesses-titulo titulo">Outros interesses</p>
                    <div className="outros-interesses-texto">
                        <p>Alguns outros interesses que eu tenho:</p>
                        <li>Jogos de puzzle/enigma</li>
                        <li>Musica! Guitarra, Piano..</li>
                        <li>Franquia Pokemon</li>
                        <li>Desenvolvimento de jogos</li>
                    </div>
                </div>
                <div className="outras-linguas">
                <p className="educacao-titulo titulo">Idiomas</p>
                    <div className="linguas-texto">
                        <p className="linguas-texto-principal">Tenho fluencia nativa em inglês e português. Consigo falar espanhol a nível conversacional.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}