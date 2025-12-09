import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-industrial-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">LA NAVE</h3>
            <p className="text-industrial-300 mb-6 max-w-md">
              Un espacio industrial singular en el corazon de la Ribera Navarra. 
              Donde la libertad y el estilo se encuentran.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-industrial-600 flex items-center justify-center hover:border-copper hover:text-copper transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-copper">Espacios</h4>
            <ul className="space-y-3">
              <li><Link to="/bodas" className="text-industrial-300 hover:text-white transition-colors">Bodas</Link></li>
              <li><Link to="/empresas" className="text-industrial-300 hover:text-white transition-colors">Empresas</Link></li>
              <li><Link to="/universitarios" className="text-industrial-300 hover:text-white transition-colors">Universitarios</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-copper">Contacto</h4>
            <ul className="space-y-3 text-industrial-300">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-copper" />
                <span>Cintruenigo, Navarra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-copper" />
                <span>948 XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-copper" />
                <span>info@lanave.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-800 mt-12 pt-8 text-center text-industrial-500 text-sm">
          <p>2025 La Nave. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
