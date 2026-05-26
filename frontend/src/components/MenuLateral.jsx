import {
  Bot,
  FlaskConical,
  House,
  LogOut,
  PawPrint,
  Settings,
  StickyNote,
} from "lucide-react";

export default function Menu() {
  return (
    <menu className="h-screen w-90 bg-green-700 flex flex-col p-8">
      <div>
        <h2 className="text-white font-bold text-2xl">SIGEA</h2>
        <p className="text-white font-bold text-">Sertões de Crateús</p>
      </div>

      <div className="mt-12 flex flex-col gap-8">
        <a
          href="#"
          className="bg-black/16 transition hover:bg-black/30 px-4 py-6 rounded-2xl text-white font-bold flex items-center gap-2"
        >
          <House size={24} />
          Home
        </a>
        <a
          href="#"
          className="bg-black/16 transition hover:bg-black/30 px-4 py-6 rounded-2xl text-white font-bold flex items-center gap-2"
        >
          <PawPrint size={24} />
          Animais
        </a>
        <a
          href="#"
          className="bg-black/16 transition hover:bg-black/30 px-4 py-6 rounded-2xl text-white font-bold flex items-center gap-2"
        >
          <FlaskConical size={24} />
          Inseminação
        </a>
        <a
          href="#"
          className="bg-black/16 transition hover:bg-black/30 px-4 py-6 rounded-2xl text-white font-bold flex items-center gap-2"
        >
          <Bot size={24} />
          Agro com IA
        </a>
        <a
          href="#"
          className="bg-black/16 transition hover:bg-black/30 px-4 py-6 rounded-2xl text-white font-bold flex items-center gap-2"
        >
          <StickyNote size={24} />
          Relatórios
        </a>
        <a
          href="#"
          className="bg-black/16 transition hover:bg-black/30 px-4 py-6 rounded-2xl text-white font-bold flex items-center gap-2"
        >
          <Settings size={24} />
          Configurações
        </a>
        <a
          href="#"
          className="bg-red-600 transition hover:bg-red-700 px-4 py-6 rounded-2xl text-white font-bold flex items-center gap-2"
        >
          <LogOut size={24} />
          Sair
        </a>
      </div>
    </menu>
  );
}
