import React from 'react';
import './Configuracao.css';

export default function Configuracao() {
  return (
    <div className="config-container">
      <nav className="config-nav">
        <button type="button" className="config-btn">
          Perfil
        </button>
        <button type="button" className="config-btn">
          Sistema
        </button>
        <button type="button" className="config-btn">
          Suporte
        </button>
      </nav>

      <main className="config-main">
      </main>
    </div>
  );
}