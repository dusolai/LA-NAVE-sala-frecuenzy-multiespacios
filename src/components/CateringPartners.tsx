const partners = [
  { name: 'Maher Catering', specialty: 'Alta gastronomía', initial: 'M' },
  { name: 'Gourmet Ribera', specialty: 'Cocina de autor', initial: 'G' },
  { name: 'Sabores Tierra', specialty: 'Km 0', initial: 'S' },
  { name: 'Tu propio catering', specialty: 'Libertad total', initial: 'T', highlight: true },
]

export default function CateringPartners() {
  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tu Catering, Tus Reglas
          </h2>
          <p className="font-body text-gray-500 dark:text-gray-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            Elige entre nuestros caterings homologados o trae el tuyo propio. Aquí no hay ataduras, solo libertad.
          </p>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-12 snap-x scrollbar-hide">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-72 md:w-80 snap-center rounded-2xl p-8 border transition-all duration-300 group shadow-lg ${partner.highlight
                  ? 'bg-background-dark text-white border-primary/30'
                  : 'bg-background-light dark:bg-background-dark border-gray-100 dark:border-gray-800'
                }`}
            >
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center font-display font-bold text-2xl shadow-inner ${partner.highlight
                  ? 'bg-primary/20 text-primary'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300'
                }`}>
                {partner.initial}
              </div>
              <h4 className={`font-display font-bold text-xl mb-2 transition-colors duration-300 ${partner.highlight ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                {partner.name}
              </h4>
              <p className={`text-sm font-body ${partner.highlight ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'
                }`}>
                {partner.specialty}
              </p>

              <div className="mt-8">
                <span className={`material-symbols-outlined text-primary transition-all duration-300 group-hover:translate-x-2 ${partner.highlight ? 'opacity-100' : 'opacity-0'
                  }`}>
                  restaurant
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 font-body text-sm italic tracking-wide">
            Partners colaboradores de confianza. La decisión final siempre es tuya.
          </p>
        </div>
      </div>
    </section>
  )
}
