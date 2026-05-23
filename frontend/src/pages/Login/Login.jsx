import { Lock, Mail } from "lucide-react";

export default function Login() {
  return (
    <main className="h-screen flex items-center justify-center bg-zinc-100">
      <form className="flex flex-col items-center justify-center gap-6 bg-white p-18 rounded-lg shadow-2xl">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Bem vindo de volta!</h2>
        </div>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            placeholder="Email"
            className="w-full border rounded-lg py-2 pl-10 pr-4"
          />
        </div>
        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            placeholder="Email"
            className="w-full border rounded-lg py-2 pl-10 pr-4"
          />
        </div>
        <div className="w-full text-right">
          <a href="#" className="font-bold text-green-700 text-md">
            Esqueceu a senha?
          </a>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="bg-green-700 text-white font-bold w-full rounded-lg py-2">
            Entrar
          </button>
        </div>
      </form>
    </main>
  );
}
