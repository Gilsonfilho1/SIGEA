import React, { useState } from "react";
import "./styles.css";

export default function AnimalManagement({ animals, onRegisterClick }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Todos os tipos");

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleFilterChange(event) {
    setFilterType(event.target.value);
  }

  const filteredAnimals = animals.filter((animal) => {
    const matchesSearch =
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType =
      filterType === "Todos os tipos" || animal.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="management-container">
      <header className="header-section">
        <div>
          <h1>Gestão de Animais</h1>
          <p>Cadastre e gerencie bovinos, ovinos e caprinos.</p>
        </div>
        <button className="btn-register" onClick={onRegisterClick}>
          <span>+</span> Cadastrar animal
        </button>
      </header>

      <section className="filter-section">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar por nome, identificação ou raça..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <select value={filterType} onChange={handleFilterChange}>
          <option value="Todos os tipos">Todos os tipos</option>
          <option value="Bovino">Bovino</option>
          <option value="Ovino">Ovino</option>
          <option value="Caprino">Caprino</option>
        </select>
      </section>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Identificação</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Sexo</th>
              <th>Raça</th>
              <th>Peso</th>
              <th>Propriedade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnimals.map((animal) => (
              <tr key={animal.id}>
                <td>{animal.id}</td>
                <td>{animal.name}</td>
                <td>
                  <span className={`badge type-${animal.type.toLowerCase()}`}>
                    {animal.type}
                  </span>
                </td>
                <td>
                  <span className={`badge sex-${animal.sex.toLowerCase()}`}>
                    {animal.sex}
                  </span>
                </td>
                <td>{animal.breed}</td>
                <td>{animal.weight}</td>
                <td>{animal.property}</td>
                <td className="actions">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="footer-section">
        Exibindo {filteredAnimals.length} de {animals.length} animais.
      </footer>
    </div>
  );
}
/*  {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.management-container {
  max-width: 1000px;
  margin: 0 auto;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-section h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #1a1a1a;
}

.header-section p {
  margin: 4px 0 0;
  color: #666;
  font-size: 14px;
}

.btn-register {
  background-color: #fbd34d;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s;
}

.btn-register:hover {
  background-color: #facc15;
}

.btn-register span {
  font-weight: bold;
}

.filter-section {
  display: flex;
  gap: 0;
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.search-input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-right: 1px solid #eee;
}

.search-input-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 14px;
}

.search-input-wrapper .search-icon {
  color: #999;
  font-size: 14px;
}

.filter-section select {
  border: none;
  outline: none;
  padding: 8px 16px;
  font-size: 14px;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  min-width: 150px;
}

.table-container {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;
}

th {
  padding: 16px;
  background-color: #fafafa;
  color: #555;
  font-weight: 500;
  border-bottom: 1px solid #eee;
}

td {
  padding: 16px;
  border-bottom: 1px solid #eee;
  color: #333;
  vertical-align: middle;
}

tr:last-child td {
  border-bottom: none;
}

.actions {
  color: #999;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
}

.badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  display: inline-block;
  text-align: center;
  min-width: 80px;
}

.type-bovino {
  background-color: #eef8f0;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.type-ovino {
  background-color: #fff8e1;
  color: #b9773b;
  border: 1px solid #ffecb3;
}

.type-caprino {
  background-color: #e1f5fe;
  color: #0288d1;
  border: 1px solid #b3e5fc;
}

.sex-fêmea, .sex-macho {
  background-color: #f5f5f5;
  color: #555;
  border: 1px solid #e0e0e0;
}

.footer-section {
  margin-top: 16px;
  color: #888;
  font-size: 13px;
} */