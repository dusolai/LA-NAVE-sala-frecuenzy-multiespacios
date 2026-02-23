import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-display font-bold text-2xl mb-6 tracking-wider">SALA FRECUENZY</h4>
            <p className="text-gray-400 text-base max-w-sm mb-8 font-body leading-relaxed">
              Un espacio multiespacios en el corazón de la Ribera Navarra. Donde la libertad y el estilo se encuentran.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/5"
              >
                <span className="text-[10px] font-bold">IG</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/5"
              >
                <span className="text-[10px] font-bold">FB</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-display font-bold text-primary mb-6 text-sm uppercase tracking-[0.2em]">Espacios</h5>
            <ul className="space-y-4 text-sm font-body">
              <li><Link className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" to="/bodas">Bodas</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" to="/cumpleanos">Cumpleaños</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" to="/eventos-privados">Eventos Privados</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" to="/escuela-dj">Escuela DJ</Link></li>
              <li><a className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" href="#conocenos">Conócenos</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-bold text-primary mb-6 text-sm uppercase tracking-[0.2em]">Contacto</h5>
            <ul className="space-y-4 text-sm text-gray-400 font-body">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <span>Cintruénigo, Navarra</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <span>666 555 666</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <span>info@salafrecuenzy.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-500 font-body tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Sala Frecuenzy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
