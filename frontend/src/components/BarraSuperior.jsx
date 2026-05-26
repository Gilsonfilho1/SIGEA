export default function NavAnimais({ user }) {
  const userName = user?.name || "Igor Neres";
  const userRole = user?.role || "Produtor rural";

  return (
    <header className="w-full flex items-center justify-between bg-white px-6 py-4 shadow-md min-h-17.5 font-sans">
      <div className="flex flex-col gap-2">
        <h1 className="m-0 text-[22px] font-bold text-zinc-900">Home</h1>
      </div>

      <div className="flex items-center gap-3 cursor-pointer select-none">
        <div className="w-10 h-10 text-green-700">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </div>

        <div className="flex flex-col leading-[1.2]">
          <span className="text-base font-semibold text-zinc-800">
            {userName}
          </span>

          <span className="text-xs text-zinc-500">{userRole}</span>
        </div>

        <div className="w-5 h-5 text-zinc-600 ml-1">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
