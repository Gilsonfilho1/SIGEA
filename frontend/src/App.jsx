import { useEffect, useState } from "react";
import { Activity, Brain, PlusCircle } from "lucide-react";
import { createAnimal, listAnimals, analyzeFertilityPattern } from "./services/api";
import AnimalForm from "./components/AnimalForm";
import AnimalTable from "./components/AnimalTable";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [animals, setAnimals] = useState([]);
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function loadAnimals() {
    const data = await listAnimals();
    setAnimals(data);
  }

  useEffect(() => {
    loadAnimals().catch(console.error);
  }, []);

  async function handleSubmit(formData) {
    setLoading(true);

    try {
      const payload = {
        ...formData,
        age_years: Number(formData.age_years),
        weight_kg: formData.weight_kg ? Number(formData.weight_kg) : null,
        previous_inseminations: Number(formData.previous_inseminations || 0),
        confirmed_pregnancies: Number(formData.confirmed_pregnancies || 0),
        abortions: Number(formData.abortions || 0),
        births: Number(formData.births || 0),
      };

      await createAnimal(payload);

      const result = await analyzeFertilityPattern({
        species: payload.species,
        age_years: payload.age_years,
        previous_inseminations: payload.previous_inseminations,
        confirmed_pregnancies: payload.confirmed_pregnancies,
        abortions: payload.abortions,
        births: payload.births,
      });

      setAiResult(result);
      await loadAnimals();
    } catch (error) {
      alert("Erro ao salvar animal ou analisar fertilidade.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <header className="hero">
        <div>
          <p className="eyebrow">Hackathon Expoagro Crateús 2026</p>
          <h1>AgroGen IA</h1>
          <p>
            Plataforma para registro de dados genéticos e reprodutivos de bovinos,
            ovinos e caprinos, com IA para identificação de padrões de fertilidade.
          </p>
        </div>
        <div className="hero-card">
          <Brain size={42} />
          <strong>IA aplicada ao campo</strong>
          <span>Análise de fertilidade e desempenho animal</span>
        </div>
      </header>

      <section className="cards">
        <div className="metric-card">
          <Activity />
          <span>Animais cadastrados</span>
          <strong>{animals.length}</strong>
        </div>

        <div className="metric-card">
          <PlusCircle />
          <span>Espécies atendidas</span>
          <strong>3</strong>
        </div>
      </section>

      <section className="grid">
        <div className="panel">
          <h2>Cadastrar Animal</h2>
          <AnimalForm onSubmit={handleSubmit} loading={loading} />
        </div>

        <div className="panel">
          <h2>Resultado da IA</h2>
          <ResultCard result={aiResult} />
        </div>
      </section>

      <section className="panel">
        <h2>Animais cadastrados</h2>
        <AnimalTable animals={animals} />
      </section>
    </main>
  );
}
