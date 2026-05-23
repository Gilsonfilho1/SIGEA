export default function AnimalTable({ animals }) {
  if (!animals.length) {
    return <p className="empty">Nenhum animal cadastrado ainda.</p>;
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Animal</th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Idade</th>
            <th>Inseminações</th>
            <th>Prenhezes</th>
            <th>Abortos</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.name}</td>
              <td>{animal.species}</td>
              <td>{animal.breed}</td>
              <td>{animal.age_years}</td>
              <td>{animal.previous_inseminations}</td>
              <td>{animal.confirmed_pregnancies}</td>
              <td>{animal.abortions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
