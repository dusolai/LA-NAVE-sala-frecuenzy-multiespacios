import { Calendar, MessageCircle } from 'lucide-react'

interface FloatingCTAProps {
  variant?: 'wedding' | 'corporate' | 'university' | 'default'
}

const variantStyles = {
  default: 'bg-industrial-900 hover:bg-industrial-800',
  wedding: 'bg-wedding hover:bg-copper-dark',
  corporate: 'bg-corporate hover:bg-industrial-700',
  university: 'bg-university hover:bg-indigo-700',
}

export default function FloatingCTA({ variant = 'default' }: FloatingCTAProps) {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
      <a
        href="#contacto"
        className={`flex items-center gap-2 px-6 py-3 text-white font-medium shadow-lg transition-all hover:scale-105 ${variantStyles[variant]}`}
      >
        <Calendar size={18} />
        <span className="hidden sm:inline">Ver Disponibilidad</span>
      </a>
      <a
        href="#contacto"
        className="flex items-center gap-2 px-6 py-3 bg-white text-industrial-900 font-medium shadow-lg border-2 border-industrial-200 hover:border-copper transition-all hover:scale-105"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Pedir Presupuesto</span>
      </a>
    </div>
  )
}
