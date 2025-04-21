import { useState } from 'react';
import '/src/styles/EmailCopiavel.css';

export default function EmailCopiavel() {
  const [copiado, setCopiado] = useState(false);

  const email = "victor.csantos444@gmail.com";

  const copiarEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  };
  return (
    <div 
      className="email-wrapper"
      onClick={copiarEmail}
      title={copiado ? "copiado!" : "copiar"}
    >
      {email}
      <span className="tooltip">{copiado ? "copiado!" : "copiar"}</span>
    </div>
  );
}