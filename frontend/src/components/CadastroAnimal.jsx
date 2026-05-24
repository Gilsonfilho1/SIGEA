import { useState } from 'react';
import './CadastroAnimal.css';
import React, { useState } from 'react';
const initialState = {
  identification: '',
  name: '',
  type: 'bovino',
  breed: '',
  birth_date: '',
  sex: 'femea',
  weight_kg: '',
  property: '',
  observations: "",
};

export default function CadastroAnimal({ onSubmit, loading }) {
  const [form, setForm] = useState(initialState);

  function handleChange(event) {
    const { name, value, type } = event.target;

    const parsedValue =
      type === 'number' ? (value === '' ? '' : Number(value)) : value;

    setForm((current) => ({ ...current, [name]: parsedValue }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await onSubmit(form);
    setForm(initialState);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Identificação
          <input
            name="identification"
            value={form.identification}
            onChange={handleChange}
            placeholder="Ex: BOV-001"
            required
          />
        </label>

        <label>
          Nome
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nome do animal"
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
          Raça
          <input
            name="breed"
            value={form.breed}
            onChange={handleChange}
            placeholder="Ex: Nelore, Angus..."
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Data de Nascimento
          <input
            type="date"
            name="birth_date"
            value={form.birth_date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Sexo
          <select name="sex" value={form.sex} onChange={handleChange}>
            <option value="femea">Fêmea</option>
            <option value="macho">Macho</option>
          </select>
        </label>
      </div>

      <div className="form-row">
        <label>
          Peso (kg)
          <input
            type="number"
            name="weight_kg"
            value={form.weight_kg}
            onChange={handleChange}
            placeholder="Ex: 350"
          />
        </label>

        <label>
          Propriedade
          <input
            name="property"
            value={form.property}
            onChange={handleChange}
            placeholder="Nome da fazenda/sítio"
          />
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
          {loading ? "Salvando..." : "Cadastrar Animal"}
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