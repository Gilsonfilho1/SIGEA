import React from 'react';
import './ConfiguracaoPerfil.css';

export default function ConfiguracaoPerfil() {
  return (
    <div className="config-container">
      <main className="perfil-main">
        <div className="perfil-header">
          <h1 className="greeting">Olá Igor</h1>
        </div>

        <div className="perfil-user-section">
          <div className="avatar-placeholder">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" fill="#d9d9d9" />
              <circle cx="50" cy="35" r="18" fill="#ffffff" />
              <path
                d="M20 85C20 68.4315 33.4315 55 50 55C66.5685 55 80 68.4315 80 85"
                fill="#ffffff"
              />
            </svg>
          </div>
          <h2 className="user-name">Igor Neres da Silva Ferreira</h2>
        </div>

        <div className="perfil-dashboard">
          <div className="dashboard-column">
            <div className="info-section">
              <h3 className="section-title">Sobre Mim:</h3>
              <div className="info-card">
                <p>
                  <strong>Nome Completo:</strong> Igor Neres da Silva Ferreira
                </p>
                <p>
                  <strong>Idade:</strong> 62 anos
                </p>
                <p>
                  <strong>Logradouro:</strong> Fazenda Neres
                </p>
                <p className="status-line">
                  <strong>Status da conta:</strong> ATIVO
                  <span className="status-dot"></span>
                </p>
              </div>
            </div>

            <div className="info-section">
              <h3 className="section-title">Propriedade:</h3>
              <div className="info-card">
                <p>
                  <strong>Região:</strong> Sertões de Crateús
                </p>
                <p>
                  <strong>Cidade:</strong> Crateús
                </p>
                <p>
                  <strong>Estado:</strong> Ceará
                </p>
                <p>
                  <strong>Distrito:</strong> Ibiapaba
                </p>
              </div>
            </div>
          </div>

          <div className="dashboard-column">
            <div className="info-section">
              <h3 className="section-title">Gestão de Plantel:</h3>
              <div className="info-card tall-card">
                <p>
                  <strong>Quantidade de Animais:</strong> 312
                </p>
                <ul className="animal-list">
                  <li>Ovinos - 20</li>
                  <li>Caprinos - 42</li>
                  <li>Bovinos - 250</li>
                </ul>

                <p className="margin-top">
                  <strong>Reproduções totais (mês):</strong>
                </p>
                <ul className="animal-list">
                  <li>Ovinos - 2</li>
                  <li>Caprinos - 6</li>
                  <li>Bovinos - 28</li>
                </ul>

                <p className="margin-top">
                  <strong>Taxa de reprodução -</strong> 11,53%
                </p>
                <p>
                  <strong>Taxa de mortalidade -</strong> 1,07%
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
/*
.config-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  background-color: #f1f3f6;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
.perfil-main {
  padding: 40px;
  width: 100%;
  max-width: 900px;
}
.greeting {
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}
.perfil-user-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  margin-bottom: 30px;
}
.avatar-placeholder {
  width: 120px;
  height: 120px;
  margin-bottom: 16px;
}
.user-name {
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}
.perfil-dashboard {
  background-color: #e2e2e2;
  border-radius: 20px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.dashboard-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.section-title {
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 12px 0;
}
.info-card {
  background-color: #cfcfcf;
  border-radius: 16px;
  padding: 20px;
}
.info-card p {
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #000000;
}
.info-card p:last-child {
  margin-bottom: 0;
}
.info-card strong {
  font-weight: 500;
}
.animal-list {
  margin: 5px 0 0 0;
  padding-left: 24px;
}
.animal-list li {
  font-size: 14px;
  color: #000000;
  margin-bottom: 4px;
}
.margin-top {
  margin-top: 16px !important;
}
.status-line {
  display: flex;
  align-items: center;
  gap: 6px;
}
.status-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #12a112;
  border-radius: 50%;
}
*/ 