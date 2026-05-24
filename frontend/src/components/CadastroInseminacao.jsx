import React, { useState } from 'react';
import './CadastroInseminacao.css';

const initialState = {
  animal_id: '',
  protocol: '',
  technician: '',
  insemination_date: '',
  type: 'bovino',
  result: 'positivo',
  observations: '',
};

export default function CadastroInseminacao({ onSubmit, loading }) {
  const [form, setForm] = useState(initialState);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await onSubmit(form);
    setForm(initialState);
  }

  return (
    <form className="insemination-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Cadastrar Nova Inseminação</h2>
        <p>Preencha os dados da inseminação para cadastrar no sistema.</p>
      </div>

      <div className="form-row">
        <label>
          Animal
          <input
            name="animal_id"
            value={form.animal_id}
            onChange={handleChange}
            placeholder="Identificação do animal"
            required
          />
        </label>

        <label>
          Protocolo
          <input
            name="protocol"
            value={form.protocol}
            onChange={handleChange}
            placeholder="Ex: IATF padrão"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Técnico
          <input
            name="technician"
            value={form.technician}
            onChange={handleChange}
            placeholder="Nome do técnico"
          />
        </label>

        <label>
          Data de Inseminação
          <input
            type="date"
            name="insemination_date"
            value={form.insemination_date}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Tipo
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="bovino">Bovino</option>
            <option value="ovino">Ovino</option>
            <option value="caprino">Caprino</option>
          </select>
        </label>

        <label>
          Resultado
          <select name="result" value={form.result} onChange={handleChange}>
            <option value="positivo">Positivo</option>
            <option value="negativo">Negativo</option>
            <option value="pariaria">Pendente</option>
          </select>
        </label>
      </div>

      <div className="form-full-width">
        <label>
          Observações
          <textarea
            name="observations"
            value={form.observations}
            onChange={handleChange}
            placeholder="Informações adicionais sobre o animal..."
            rows="3"
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-cancel">
          Cancelar
        </button>
        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? 'Salvando...' : 'Cadastrar Inseminação'}
        </button>
      </div>
    </form>
  );
}

/*
.form {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 16px;
  width: 100%;
  max-width: 500px; 
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
}

.form-header {
  margin-bottom: 20px;
  position: relative;
}

.form-header h2 {
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
}

.form-header p {
  margin: 0;
  font-size: 13px;
  color: #a0a0a0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.form-full-width {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.form label,
.form-full-width label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
}

.form input,
.form select,
.form textarea {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  color: #333333;
  background-color: #ffffff;
  border: 1px solid #e2e8f0; 
  border-radius: 10px; 
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

.form input::placeholder,
.form textarea::placeholder {
  color: #c0c0c0;
}

.form select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;
  padding-right: 32px;
}

.form textarea {
  resize: none;
  min-height: 90px;
}

.form input:focus,
.form select:focus,
.form textarea:focus {
  outline: none;
  border-color: #00875a; 
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.btn-cancel {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #e2e8f0;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-cancel:hover {
  background-color: #f7fafc;
}

.btn-submit {
  background-color: #007a3e; 
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: #006432;
}

.btn-submit:disabled {
  background-color: #a3d9bc;
  cursor: not-allowed;
}
*/