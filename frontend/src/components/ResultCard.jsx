export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="result-card muted">
        Cadastre um animal para visualizar a análise de fertilidade.
      </div>
    );
  }

  return (
    <div className="result-card">
      <span className="score">{result.fertility_score}%</span>
      <p><strong>Risco:</strong> {result.risk_level}</p>
      <p><strong>Padrão identificado:</strong> {result.pattern_identified}</p>
      <p><strong>Recomendação:</strong> {result.recommendation}</p>
    </div>
  );
}
