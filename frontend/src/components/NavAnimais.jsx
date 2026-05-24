import React from "react";
import './NavAnimais.css';

export default function NavAnimais({ user }) {
  const userName = user?.name || "Igor Neres";
  const userRole = user?.role || "Produtor rural";

  return (
    <header className="nav-animais-container">
      <div className="nav-animais-titles">
        <h1 className="nav-animais-main-title">Animais</h1>
        <p className="nav-animais-subtitle">Animais cadastrados</p>
      </div>

      <div className="nav-animais-profile">
        <div className="nav-animais-avatar">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </div>
        
        <div className="nav-animais-user-info">
          <span className="nav-animais-username">{userName}</span>
          <span className="nav-animais-role">{userRole}</span>
        </div>

        <div className="nav-animais-chevron">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        </div>
      </div>
    </header>
  );
}

/*
.nav-animais-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 16px 24px;
  border-left: 6px solid #007A33; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  min-height: 70px;
}

.nav-animais-titles {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-animais-main-title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #111111;
}

.nav-animais-subtitle {
  margin: 0;
  font-size: 14px;
  color: #666666;
}

.nav-animais-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
}

.nav-animais-avatar {
  width: 40px;
  height: 40px;
  color: #007A33; 
}

.nav-animais-user-info {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.nav-animais-username {
  font-size: 16px;
  font-weight: 600;
  color: #222222;
}

.nav-animais-role {
  font-size: 12px;
  color: #777777;
}

.nav-animais-chevron {
  width: 20px;
  height: 20px;
  color: #555555;
  margin-left: 4px;
} */