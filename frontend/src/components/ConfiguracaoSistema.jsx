import React, { useState } from 'react';
import './ConfiguracaoSistema.css';

export default function ConfiguracaoSistema() {
  const [toggles, setToggles] = useState({
    atualizacoes: false,
    notificacoesTecnicas: true,
    dicasIA: true,
    sonsNotificacao: true,
    modoLeitura: false,
    economiaEnergia: true,
    temaClaroEscuro: false,
    sonsSistema: true,
    ocultarAnimais: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="config-container">
      <main className="sistema-main">
        <section className="settings-section">
          <div className="section-header">
            <h2>Notificações</h2>
            <p>Alertas de inseminação, partos próximos ou relatórios prontos</p>
          </div>

          <div className="settings-list">
            <div className="setting-item">
              <span className="setting-label">Atualizações recentes</span>
              <button
                className={`toggle-btn ${toggles.atualizacoes ? 'active' : ''}`}
                onClick={() => handleToggle('atualizacoes')}
              >
                <div className="toggle-circle"></div>
              </button>
            </div>

            <div className="setting-item">
              <span className="setting-label">
                Notificações técnicas do sistema
              </span>
              <button
                className={`toggle-btn ${
                  toggles.notificacoesTecnicas ? 'active' : ''
                }`}
                onClick={() => handleToggle('notificacoesTecnicas')}
              >
                <div className="toggle-circle"></div>
              </button>
            </div>

            <div className="setting-item">
              <span className="setting-label">
                Dicas e previsões da Inteligência Artificial
              </span>
              <button
                className={`toggle-btn ${toggles.dicasIA ? 'active' : ''}`}
                onClick={() => handleToggle('dicasIA')}
              >
                <div className="toggle-circle"></div>
              </button>
            </div>

            <div className="setting-item">
              <span className="setting-label">Sons de notificação</span>
              <button
                className={`toggle-btn ${
                  toggles.sonsNotificacao ? 'active' : ''
                }`}
                onClick={() => handleToggle('sonsNotificacao')}
              >
                <div className="toggle-circle"></div>
              </button>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <div className="section-header">
            <h2>Preferências</h2>
          </div>

          <div className="settings-list">
            <div className="setting-item">
              <span className="setting-label">Ativar modo leitura</span>
              <button
                className={`toggle-btn ${toggles.modoLeitura ? 'active' : ''}`}
                onClick={() => handleToggle('modoLeitura')}
              >
                <div className="toggle-circle"></div>
              </button>
            </div>

            <div className="setting-item">
              <span className="setting-label">
                Ativar modo economia de energia
              </span>
              <button
                className={`toggle-btn ${
                  toggles.economiaEnergia ? 'active' : ''
                }`}
                onClick={() => handleToggle('economiaEnergia')}
              >
                <div className="toggle-circle"></div>
              </button>
            </div>

            <div className="setting-item">
              <span className="setting-label">Tema Claro/Escuro</span>
              <button
                className={`toggle-btn ${
                  toggles.temaClaroEscuro ? 'active' : ''
                }`}
                onClick={() => handleToggle('temaClaroEscuro')}
              >
                <div className="toggle-circle"></div>
              </button>
            </div>

            <div className="setting-item">
              <span className="setting-label">Sons do sistema</span>
              <button
                className={`toggle-btn ${toggles.sonsSistema ? 'active' : ''}`}
                onClick={() => handleToggle('sonsSistema')}
              >
                <div className="toggle-circle"></div>
              </button>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <div className="section-header">
            <h2>Filtros</h2>
          </div>

          <div className="settings-list">
            <div className="setting-item">
              <span className="setting-label">
                Ocultar animais vendidos ou descartados
              </span>
              <button
                className={`toggle-btn ${
                  toggles.ocultarAnimais ? 'active' : ''
                }`}
                onClick={() => handleToggle('ocultarAnimais')}
              >
                <div className="toggle-circle"></div>
              </button>
            </div>
          </div>
        </section>
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
.sistema-main {
  padding: 40px 60px;
  width: 100%;
  max-width: 800px; 
}
.settings-section {
  margin-bottom: 40px;
}
.section-header {
  margin-bottom: 16px;
}
.section-header h2 {
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 8px 0;
}
.section-header p {
  font-size: 14px;
  color: #333333;
  margin: 0;
}
.settings-list {
  display: flex;
  flex-direction: column;
}
.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #dcdfe4; 
}
.settings-list .setting-item:last-child {
  border-bottom: none;
}
.setting-label {
  font-size: 15px;
  color: #1a1a1a;
  font-weight: 400;
}
.toggle-btn {
  width: 46px;
  height: 26px;
  background-color: #b0b5bd;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
  padding: 0;
  display: flex;
  align-items: center;
}
.toggle-btn.active {
  background-color: #4cd964;
}
.toggle-circle {
  width: 22px;
  height: 22px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}
.toggle-btn.active .toggle-circle {
  transform: translateX(20px);
}
*/