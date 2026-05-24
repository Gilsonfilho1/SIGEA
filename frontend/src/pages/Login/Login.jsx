import { IdCard, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/api";
import { setAuthSession } from "../../services/auth";

export default function Login() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setFeedback("");
    setIsLoading(true);

    try {
      const data = await loginUser({ cpf, password });
      setAuthSession(data);
      setFeedback(data.message);
      navigate("/home", { replace: true });
    } catch (error) {
      setFeedback(error.response?.data?.detail || "Nao foi possivel entrar");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="h-screen flex items-center justify-center bg-zinc-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-6 bg-white p-18 rounded-lg shadow-2xl"
      >
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Bem vindo de volta!</h2>
        </div>

        <div className="relative w-full">
          <IdCard
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            placeholder="CPF"
            className="w-full border rounded-lg py-2 pl-10 pr-4"
            required
          />
        </div>
        <div className="relative w-full">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Senha"
            className="w-full border rounded-lg py-2 pl-10 pr-4"
            required
          />
        </div>
        <div className="w-full text-right">
          <a href="#" className="font-bold text-green-700 text-md">
            Esqueceu a senha?
          </a>
        </div>
        {feedback && (
          <p className="w-full text-center text-sm font-semibold text-zinc-700">
            {feedback}
          </p>
        )}
        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-700 text-white font-bold w-full rounded-lg py-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </div>
      </form>
    </main>
  );
}
