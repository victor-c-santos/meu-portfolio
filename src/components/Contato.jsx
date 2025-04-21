import React from "react";
import '/src/styles/Contato.css';
import astronauta from '/src/assets/astronautaContato.png'
import EmailCopiavel from '/src/components/EmailCopiavel.jsx'

export default function Contato() {
    return (
        <div className="container-contato">
            <p className="titulo">Entrar em contato comigo</p>
            <p className="texto1">Geralmente eu não vejo mensagem pelo insta ou outras redes sociais, caso queira entrar em contato comigo, direcione suas mensagem ao meu email.</p>
            <img src={ astronauta } alt="" className="imagem-astronauta" />
            <p className="texto2">Mande um email para <EmailCopiavel/><br />ou aperte o botão abaixo</p>
            <a href="mailto:victor.csantos444@gmail.com"><button className="btn-email">Mandar um email</button></a>
        </div>
    )
}