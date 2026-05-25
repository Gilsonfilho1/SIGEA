import Menu from "../../components/MenuLateral";
import NavAnimais from "../../components/BarraSuperior";
import { CirclePlus, ChartNoAxesColumn, Settings, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="flex h-screen bg-zinc-100">
      <Menu />
      <section className="flex-1 flex flex-col">
        <NavAnimais />
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-md p-4 h-auto">
            <section className="w-full px-4 py-12 rounded-lg bg-linear-to-r from-[#3DAD71] to-[#F3D337]">
              <div>
                <h2 className="text-white font-bold text-4xl">
                  Monitoramento inteligente
                </h2>
                <h2 className="text-white font-bold text-4xl">com IA</h2>
              </div>
              <div className="mt-4">
                <p className="text-white text-lg">
                  Colete, analise e utilize dados genéticos para <br /> tomar
                  decisões mais assertivas e aumentar a <br /> produtividade do
                  seu rebanho.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href="#"
                  className="px-4 py-2 rounded-2xl bg-[#f3d337] flex items-center gap-2 text-[#36752b]"
                >
                  <CirclePlus />
                  Cadastrar animal
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-2xl bg-white flex items-center gap-2 text-[#36752b]"
                >
                  <ChartNoAxesColumn />
                  Ver relatórios
                </a>
              </div>
            </section>

            <div className="w-full cards-container flex items-center justify-between p-8">
              <div className="w-68.5 h-29.75 bg-white rounded-[30px] shadow-md flex items-center px-4 gap-4">
                <div className="w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=400"
                    alt="Bovino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-0.5 h-20 bg-green-600 rounded-full"></div>

                <div className="flex flex-col justify-center">
                  <span className="text-zinc-700 text-[14px] leading-4">
                    Bovinos cadastrados
                  </span>

                  <h2 className="text-5xl font-bold text-black leading-none mt-2">
                    100
                  </h2>

                  <span className="text-green-600 text-sm mt-1">
                    +67 esse mês
                  </span>
                </div>
              </div>
              <div className="w-68.5 h-29.75 bg-white rounded-[30px] shadow-md flex items-center px-4 gap-4">
                <div className="w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=400"
                    alt="Bovino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-0.5 h-20 bg-green-600 rounded-full"></div>

                <div className="flex flex-col justify-center">
                  <span className="text-zinc-700 text-[14px] leading-4">
                    Ovinos cadastrados
                  </span>

                  <h2 className="text-5xl font-bold text-black leading-none mt-2">
                    242
                  </h2>

                  <span className="text-green-600 text-sm mt-1">
                    +20 esse mês
                  </span>
                </div>
              </div>
              <div className="w-68.5 h-29.75 bg-white rounded-[30px] shadow-md flex items-center px-4 gap-4">
                <div className="w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=400"
                    alt="Bovino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-0.5 h-20 bg-green-600 rounded-full"></div>

                <div className="flex flex-col justify-center">
                  <span className="text-zinc-700 text-[14px] leading-4">
                    Caprinos cadastrados
                  </span>

                  <h2 className="text-5xl font-bold text-black leading-none mt-2">
                    158
                  </h2>

                  <span className="text-green-600 text-sm mt-1">
                    +10 esse mês
                  </span>
                </div>
              </div>
              <div className="w-68.5 h-29.75 bg-white rounded-[30px] shadow-md flex items-center px-4 gap-4">
                <div className="w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=400"
                    alt="Bovino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-0.5 h-20 bg-green-600 rounded-full"></div>

                <div className="flex flex-col justify-center">
                  <span className="text-zinc-700 text-[14px] leading-4">
                    Taxa de prenhez cadastrados
                  </span>

                  <h2 className="text-5xl font-bold text-black leading-none mt-2">
                    87%
                  </h2>

                  <span className="text-green-600 text-sm mt-1">
                    +3% esse mês
                  </span>
                </div>
              </div>
            </div>

            <section className="w-full max-w-[580px] h-[490px] rounded-[30px] shadow-lg p-5 overflow-hidden">
              <div className="flex items-center gap-2">
                <Settings size={30} className="text-green-700" />
                <h2 className="text-xl font-bold text-zinc-900 leading-8">
                  Recomendações com inteligentes com IA
                </h2>
              </div>

              <hr className="my-4 border-zinc-400" />
              <div className="flex flex-col gap-4 overflow-y-auto h-[370px] pr-2">
                <div className="bg-white rounded-2xl shadow-md p-3 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-green-800 flex items-center justify-center shrink-0">
                    <Heart
                      size={22}
                      fill="#22c55e"
                      className="text-green-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[18px] font-medium text-zinc-900">
                      Melhor cruzamento para mimosa
                    </span>

                    <span className="text-zinc-500 text-lg">
                      92% de probabilidade
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-3 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-green-800 flex items-center justify-center shrink-0">
                    <Heart
                      size={22}
                      fill="#22c55e"
                      className="text-green-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[18px] font-medium text-zinc-900">
                      Melhor cruzamento para mimosa
                    </span>

                    <span className="text-zinc-500 text-lg">
                      92% de probabilidade
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-3 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-green-800 flex items-center justify-center shrink-0">
                    <Heart
                      size={22}
                      fill="#22c55e"
                      className="text-green-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[18px] font-medium text-zinc-900">
                      Melhor cruzamento para mimosa
                    </span>

                    <span className="text-zinc-500 text-lg">
                      92% de probabilidade
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
