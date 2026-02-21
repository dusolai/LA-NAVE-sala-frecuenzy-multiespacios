import { Link } from 'react-router-dom'

const segments = [
  {
    id: 'bodas',
    title: 'Bodas',
    description: 'Un día único en un entorno industrial.',
    href: '/bodas',
    icon: 'favorite',
    image: '/images/wedding_setup.png',
    action: 'Ver detalles',
  },
  {
    id: 'cumpleanos',
    title: 'Cumpleaños',
    description: 'Celebra tu día con total libertad.',
    href: '/cumpleanos',
    icon: 'cake',
    image: '/images/venue_interior.png',
    action: 'Más info',
  },
  {
    id: 'privados',
    title: 'Eventos Privados',
    description: 'Privacidad y personalización total.',
    href: '/eventos-privados',
    icon: 'lock',
    image: '/images/gallery_1.png',
    action: 'Más info',
  },
]

export default function HeroSegmentado() {
  return (
    <>
      <header className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-background-dark">
        <div className="absolute inset-0 z-0">
          <img
            alt="Sala Frecuenzy Venue Interior"
            className="w-full h-full object-cover opacity-50"
            src="/images/venue_interior.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight uppercase">
            SALA FRECUENZY
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-lg leading-relaxed font-body italic">
            "Somos una sala multiespacios preparada para cualquier tipo de evento. Tu lienzo en blanco en la Ribera Navarra."
          </p>
          <p className="text-primary text-xs uppercase tracking-widest font-bold mb-10 bg-primary/10 inline-block px-4 py-1 rounded-full border border-primary/20">
            Cintruénigo, Navarra
          </p>

          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-2xl max-w-sm mx-auto border border-gray-100 dark:border-gray-800 animate-in fade-in zoom-in duration-500">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-sm font-bold dark:text-white">Ver disponibilidad</span>
              <span className="material-symbols-outlined text-primary text-sm">event</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <input
                  className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-xs py-2.5 px-3 dark:text-gray-200 focus:ring-1 focus:ring-primary outline-none"
                  type="date"
                />
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-sm active:scale-95">
                Buscar Fecha
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {segments.map((segment) => (
              <Link
                key={segment.id}
                to={segment.href}
                className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-xl"
              >
                <img
                  alt={segment.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={segment.image}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                  <div className="glass-effect w-12 h-12 flex items-center justify-center rounded-lg mb-4 border border-white/20 shadow-lg">
                    <span className="material-symbols-outlined text-white text-2xl">{segment.icon}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{segment.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 font-body leading-relaxed">{segment.description}</p>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    {segment.action}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500 rounded-xl z-30 pointer-events-none"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
