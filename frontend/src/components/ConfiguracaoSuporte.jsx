import React from 'react';
import './ConfiguracaoSuporte.css';

export default function ConfiguracaoSuporte() {
  return (
    <div className="config-container">
      <main className="support-main">
        <div className="support-header">
          <h1 className="support-title">Central de Ajuda e Suporte</h1>
        </div>

        <div className="support-grid">
          <div className="support-info">
            <p className="support-description">
              Precisa de ajuda com o aplicativo ou com o<br />
              cadastro do seu rebanho? Escolha uma das
              <br />
              opções abaixo para falar com a nossa equipe
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>equipehackathon@gmail.com</span>
              </div>

              <div className="contact-item">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>@equipehackathon2026</span>
              </div>

              <div className="contact-item">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>(xx) 9 xxxx - xxxx</span>
              </div>
            </div>
          </div>

          <div className="support-visual">
            <svg
              width="220"
              height="220"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
              <path d="M14.7 14.7l6.5 6.5" />
            </svg>
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
}

.config-nav {
  display: flex;
  gap: 8px;
  padding: 0 16px;
  background-color: transparent;
}

.config-btn {
  background-color: #006b18;
  color: #ffffff;
  border: none;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.config-btn.active {
  background-color: #004d11; 
}

.support-main {
  padding: 40px 60px;
}

.support-title {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 50px;
}

.support-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: start;
  gap: 20px;
}

.support-description {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 40px;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  color: #1a1a1a;
}

.contact-item .icon {
  width: 24px;
  height: 24px;
}

.support-visual {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
*/