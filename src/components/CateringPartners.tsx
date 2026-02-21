const partners = [
  'Maher Catering',
  'Gourmet Ribera',
  'Sabores de la Tierra',
  'Tu propio catering (Libertad total)'
]

export default function CateringPartners() {
  return (
    <section className="py-20 lg:py-24 bg-surface-light dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Tu Catering, Tus Reglas
        </h2>
        <div className="glass-effect p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <p className="font-body text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
            En Sala Frecuenzy tienes la libertad absoluta de elegir el servicio gastronómico que mejor se adapte a tu visión.
            Trabaja con nuestros colaboradores de confianza o trae el servicio que tú prefieras.
            <span className="block mt-4 font-bold text-primary italic">Aquí no hay exclusividades, solo tu evento a tu manera.</span>
          </p>

          <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">Colaboradores Homologados</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {partners.map((partner, index) => (
                <span key={index} className="text-sm font-body text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  {partner}
                </span>
              ))}
            </div>
            <p className="mt-8 text-[11px] text-gray-400 dark:text-gray-500 italic font-body max-w-lg mx-auto leading-relaxed">
              * Nota: La contratación del catering es independiente del alquiler de la sala. Consúltanos para detalles técnicos de cocina y montaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
