import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import CadastroAnimal from "./components/CadastroAnimal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/cadastro-animal" 
          element={<CadastroAnimal onSubmit={(data) => console.log("Dados do animal:", data)} loading={false} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
