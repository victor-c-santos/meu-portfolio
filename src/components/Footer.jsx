import React from 'react';
import '/src/styles/Footer.css';
// simples mas funcional, acho que ainda vou dar uma mexida
export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>Desenvolvido por Victor Santos</p>
                <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}