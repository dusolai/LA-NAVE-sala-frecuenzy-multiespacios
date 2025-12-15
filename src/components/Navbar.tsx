import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

type Variant = 'default' | 'wedding' | 'corporate' | 'university'

interface NavbarProps {
  variant?: Variant
}

const variantStyles: Record<Variant, { bg: string; text: string; accent: string }> = {
  default: { bg: 'bg-white/95', text: 'text-industrial-900', accent: 'text-copper' },
  wedding: { bg: 'bg-white/95', text: 'text-industrial-800', accent: 'text-wedding' },
  corporate: { bg: 'bg-industrial-900/95', text: 'text-white', accent: 'text-steel-light' },
  university: { bg: 'bg-white/95', text: 'text-industrial-900', accent: 'text-university' },
}

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const styles = variantStyles[variant]

  const links = [
    { href: '/#conocenos', label: 'Conócenos' },
    { href: '/bodas', label: 'Bodas' },
    { href: '/empresas', label: 'Empresas' },
    { href: '/universitarios', label: 'Universitarios' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${styles.bg} backdrop-blur-md border-b border-industrial-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className={`text-2xl font-bold tracking-tight ${styles.text}`}>
            LA NAVE
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:${styles.accent} ${
                  location.pathname === link.href ? styles.accent : styles.text
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contacto"
              className={`px-6 py-2.5 text-sm font-medium uppercase tracking-wider border-2 border-current transition-all hover:bg-industrial-900 hover:text-white ${styles.text}`}
            >
              Contacto
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${styles.text}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${styles.bg} border-t border-industrial-100`}>
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium ${styles.text}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
                to="/#contacto"
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium ${styles.text}`}
              >
                Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
