export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[60] flex flex-col gap-4 animate-in slide-in-from-bottom duration-1000">
      <a
        href="#contacto"
        className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
      >
        <span className="material-symbols-outlined text-3xl">calendar_month</span>
        <span className="absolute right-full mr-4 bg-background-dark text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
          Disponibilidad
        </span>
      </a>

      <a
        href="https://wa.me/34600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
      >
        <span className="material-symbols-outlined text-3xl font-bold">chat</span>
        <span className="absolute right-full mr-4 bg-background-dark text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
          Pedir Presupuesto
        </span>
      </a>
    </div>
  )
}
