import { Link } from 'react-router-dom'
import { Heart, Briefcase, ArrowRight } from 'lucide-react'

const segments = [
  {
    id: 'bodas',
    title: 'Bodas',
    subtitle: 'Tu dia, tus reglas',
    description: 'Libertad total de catering en un espacio industrial unico',
    href: '/bodas',
    icon: Heart,
    image: '/images/wedding_setup.png',
    gradient: 'from-wedding/95 to-copper/90',
    hoverColor: 'hover:border-wedding',
  },
  {
    id: 'empresas',
    title: 'Empresas',
    subtitle: 'Eventos que impactan',
    description: 'Tecnologia avanzada y espacios diafanos para tu marca',
    href: '/empresas',
    icon: Briefcase,
    image: '/images/corporate_event.png',
    gradient: 'from-industrial-800/95 to-steel-dark/90',
    hoverColor: 'hover:border-corporate',
  },
]

export default function HeroSegmentado() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 bg-gray-950 overflow-hidden">
      {/* FONDO SÓLIDO OSCURO */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-sm">
            SALA FRECUENZY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            MULTIESPACIOS - No somos un salon de bodas clasico. Somos un espacio singular y moderno
            donde tu tienes el control total.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400 font-semibold">
            <span className="w-12 h-px bg-gray-600"></span>
            <span>Cintruenigo, Navarra</span>
            <span className="w-12 h-px bg-gray-600"></span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">

          {segments.map((segment) => {
            const Icon = segment.icon
            return (
              <Link
                key={segment.id}
                to={segment.href}
                className={`group relative overflow-hidden bg-industrial-900 border-2 border-industrial-200 transition-all duration-500 ${segment.hoverColor} hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                  <img src={segment.image} alt={segment.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-110" />
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10`}></div>

                <div className="relative p-8 lg:p-10 min-h-[320px] flex flex-col justify-between z-20">
                  <div>
                    <div className="w-14 h-14 flex items-center justify-center border-2 border-industrial-200 group-hover:border-white/50 transition-colors mb-6">
                      <Icon className="w-7 h-7 text-industrial-600 group-hover:text-white transition-colors" />
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-industrial-900 group-hover:text-white transition-colors mb-2">
                      {segment.title}
                    </h2>
                    <p className="text-lg font-medium text-copper group-hover:text-white/90 transition-colors mb-4">
                      {segment.subtitle}
                    </p>
                    <p className="text-industrial-600 group-hover:text-white/80 transition-colors leading-relaxed">
                      {segment.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-industrial-500 group-hover:text-white transition-colors mt-6">
                    <span>Descubrir mas</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
