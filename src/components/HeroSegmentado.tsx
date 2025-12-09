import { Link } from 'react-router-dom'
import { Heart, Briefcase, GraduationCap, ArrowRight } from 'lucide-react'

const segments = [
  {
    id: 'bodas',
    title: 'Bodas',
    subtitle: 'Tu dia, tus reglas',
    description: 'Libertad total de catering en un espacio industrial unico',
    href: '/bodas',
    icon: Heart,
    gradient: 'from-wedding/90 to-copper/80',
    hoverColor: 'hover:border-wedding',
  },
  {
    id: 'empresas',
    title: 'Empresas',
    subtitle: 'Eventos que impactan',
    description: 'Tecnologia avanzada y espacios diafanos para tu marca',
    href: '/empresas',
    icon: Briefcase,
    gradient: 'from-industrial-800/90 to-steel-dark/80',
    hoverColor: 'hover:border-corporate',
  },
  {
    id: 'universitarios',
    title: 'Universitarios',
    subtitle: 'Fiesta segura',
    description: 'Autobus incluido y seguridad garantizada',
    href: '/universitarios',
    icon: GraduationCap,
    gradient: 'from-university/90 to-indigo-700/80',
    hoverColor: 'hover:border-university',
  },
]

export default function HeroSegmentado() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-industrial-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-industrial-900 tracking-tight mb-6">
            LA NAVE
          </h1>
          <p className="text-xl md:text-2xl text-industrial-600 max-w-3xl mx-auto leading-relaxed">
            NO somos un salon de bodas clasico. Somos un espacio singular y moderno 
            donde tu tienes el control total.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-industrial-500">
            <span className="w-12 h-px bg-industrial-300"></span>
            <span>Cintruenigo, Navarra</span>
            <span className="w-12 h-px bg-industrial-300"></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {segments.map((segment) => {
            const Icon = segment.icon
            return (
              <Link
                key={segment.id}
                to={segment.href}
                className={`group relative overflow-hidden bg-white border-2 border-industrial-200 transition-all duration-500 ${segment.hoverColor} hover:shadow-2xl`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative p-8 lg:p-10 min-h-[320px] flex flex-col justify-between">
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
