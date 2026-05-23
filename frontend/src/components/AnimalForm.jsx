import { useState } from "react";

const initialState = {
  name: "",
  species: "bovino",
  breed: "",
  lineage: "",
  age_years: "",
  weight_kg: "",
  previous_inseminations: 0,
  confirmed_pregnancies: 0,
  abortions: 0,
  births: 0,
  reproductive_notes: "",
};

export default function AnimalForm({ onSubmit, loading }) {
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
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nome/Identificação
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>

      <label>
        Espécie
        <select name="species" value={form.species} onChange={handleChange}>
          <option value="bovino">Bovino</option>
          <option value="ovino">Ovino</option>
          <option value="caprino">Caprino</option>
        </select>
      </label>

      <label>
        Raça
        <input name="breed" value={form.breed} onChange={handleChange} required />
      </label>

      <label>
        Linhagem
        <input name="lineage" value={form.lineage} onChange={handleChange} />
      </label>

      <div className="form-row">
        <label>
          Idade
          <input type="number" name="age_years" value={form.age_years} onChange={handleChange} required />
        </label>

        <label>
          Peso kg
          <input type="number" name="weight_kg" value={form.weight_kg} onChange={handleChange} />
        </label>
      </div>

      <div className="form-row">
        <label>
          Inseminações
          <input type="number" name="previous_inseminations" value={form.previous_inseminations} onChange={handleChange} />
        </label>

        <label>
          Prenhezes
          <input type="number" name="confirmed_pregnancies" value={form.confirmed_pregnancies} onChange={handleChange} />
        </label>
      </div>

      <div className="form-row">
        <label>
          Abortos
          <input type="number" name="abortions" value={form.abortions} onChange={handleChange} />
        </label>

        <label>
          Partos
          <input type="number" name="births" value={form.births} onChange={handleChange} />
        </label>
      </div>

      <label>
        Observações reprodutivas
        <textarea name="reproductive_notes" value={form.reproductive_notes} onChange={handleChange} rows="3" />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Salvar e analisar com IA"}
      </button>
    </form>
  );
}
