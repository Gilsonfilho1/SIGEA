import React from "react";

export default function App() {
  return (
    <main className="status-page">
      <section className="status-card">
        <span className="status-badge">Online</span>
        <h1>SIGEA funcionando</h1>
        <p>
          Se voce esta vendo esta tela, o frontend React com Vite carregou
          corretamente.
        </p>

        <div className="status-grid" aria-label="Status da aplicacao">
          <div>
            <strong>Frontend</strong>
            <span>React + Vite</span>
          </div>
          <div>
            <strong>Porta</strong>
            <span>5173</span>
          </div>
          <div>
            <strong>API</strong>
            <span>http://localhost:8000</span>
          </div>
        </div>
      </section>
    </main>
  );
}
