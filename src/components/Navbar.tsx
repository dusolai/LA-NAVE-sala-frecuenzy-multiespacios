import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/#conocenos', label: 'Conócenos', icon: 'info' },
    { href: '/bodas', label: 'Bodas', icon: 'favorite' },
    { href: '/cumpleanos', label: 'Cumpleaños', icon: 'cake' },
    { href: '/eventos-privados', label: 'Eventos Privados', icon: 'lock' },
    { href: '/escuela-dj', label: 'Escuela DJ', icon: 'headphones' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-2 shadow-lg border-b border-gray-200 dark:border-gray-800' : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <span className="font-display font-bold text-xl tracking-wider uppercase text-gray-900 dark:text-white transition-colors group-hover:text-primary">
              SALA FRECUENZY
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-body font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 hover:text-primary ${location.hash === link.href.split('#')[1] || location.pathname === link.href
                  ? 'text-primary'
                  : 'text-gray-700 dark:text-gray-300'
                  }`}
              >
                <span className="material-symbols-outlined text-lg">{link.icon}</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-widest py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              Reservar
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-effect border-t border-gray-200 dark:border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-8 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-lg font-display font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2"
              >
                <span className="material-symbols-outlined text-primary">{link.icon}</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-lg font-display font-bold text-primary"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Reservar Evento
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
