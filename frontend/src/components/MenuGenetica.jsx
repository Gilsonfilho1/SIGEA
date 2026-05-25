import React from "react";

const geneticsData = [
  {
    id: "gen-1",
    title: "Gerar Diagnóstico Inteligente",
    description: "Analise o desempenho reprodutivo geral do seu rebanho e receba um resumo direto em texto com os principais resultados do mês e recomendações práticas.",
    buttonText: "Saiba mais",
    isArrowButton: false,
  },
  {
    id: "gen-2",
    title: "Identificar Ineficiências com IA",
    description: "Veja os dados do histórico para localizar falhas ocultas no manejo, como matrizes com tentativas repetidas de inseminação ou riscos de consanguinidade.",
    buttonText: "Saiba mais",
    isArrowButton: false,
  },
  {
    id: "gen-3",
    title: "Estimativa para data de parto",
    description: "Calcule automaticamente a data de nascimento dos bezerros com base nas inseminações confirmadas e descubra o período ideal para o manejo e isolamento da fêmea.",
    buttonText: "➔",
    isArrowButton: true,
  },
];

const managementData = [
  {
    id: "man-1",
    title: "Cruzamento Climático e Conforto Térmico",
    description: "Analise o desempenho reprodutivo geral do seu rebanho e receba um resumo direto em texto com os principais resultados do mês e recomendações práticas.",
    buttonText: "Saiba mais",
    isArrowButton: false,
  },
  {
    id: "man-2",
    title: "Otimização Nutricional e de Pastagem",
    description: "Calcula a formulação ideal de ração utilizando os insumos disponíveis na fazenda para atingir o ganho de peso e o score corporal correto para a reprodução, reduzindo o custo com alimentação.",
    buttonText: "Saiba mais",
    isArrowButton: false,
  },
  {
    id: "man-3",
    title: "Histórico Genético e Rastreabilidade",
    description: "Mapeia a linhagem completa e gera um histórico digital exportável, pronto para rastreabilidade, auditoria e comercialização.",
    buttonText: "➔",
    isArrowButton: true,
  },
];

export default function ModulesDashboard() {
  return (
    <div className="dashboard-container">
      <section className="dashboard-section">
        <h2 className="section-title">Módulos de Genética e Eficiência</h2>
        
        <div className="cards-row">
          {geneticsData.map((module) => (
            <div key={module.id} className="card card-light-green">
              <div className="card-content">
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
              <div className="card-footer">
                <button className={module.isArrowButton ? "btn-arrow" : "btn-saiba-mais"}>
                  {module.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="dashboard-section">
        <h2 className="section-title">Manejo de Precisão e Rastreabilidade</h2>
        
        <div className="cards-row">
          {managementData.map((module) => (
            <div key={module.id} className="card card-dark-green">
              <div className="card-content">
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
              <div className="card-footer">
                <button className={module.isArrowButton ? "btn-arrow" : "btn-saiba-mais"}>
                  {module.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

/*
* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
  padding: 30px;
  background-color: #f2f3f8; 
}
.dashboard-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #111;
  font-weight: 700;
}
.cards-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.card {
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  min-height: 260px;
}
.card-light-green {
  background-color: #4da974; 
  color: #000;
}
.card-dark-green {
  background-color: #0c7616; 
  color: #000;
}
.card-content h3 {
  margin-top: 0;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.2;
}
.card-content p {
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  opacity: 0.9;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.btn-saiba-mais {
  background-color: #fff;
  color: #000;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.9rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s ease-in-out;
}
.btn-arrow {
  background-color: #fff;
  color: #000;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s ease-in-out;
}
button:hover {
  transform: scale(1.05);
}
*/