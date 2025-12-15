import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'
import { Briefcase, Wifi, Monitor, Users, Check } from 'lucide-react'

const specs = [
  { label: 'Superficie total', value: '1.200 m2' },
  { label: 'Capacidad máxima', value: '1100 personas' },
  { label: 'Altura libre', value: '8 metros' },
  { label: 'Potencia eléctrica', value: 'Industrial' },
]

const features = [
  { icon: Wifi, title: 'WiFi de alta velocidad', description: 'Fibra óptica 1Gbps simétrico' },
  { icon: Monitor, title: 'Equipamiento AV', description: 'Proyector 4K, pantalla LED, sonido profesional' },
  { icon: Users, title: 'Espacios Flexibles', description: 'Adaptable a cualquier formato de evento' },
]

const clients = ['Empresa Tech', 'Consultora XYZ', 'Marca Premium', 'Startup Innovation', 'Grupo Industrial']

export default function Empresas() {
  return (
    <div className="min-h-screen">
      <Navbar variant="corporate" />
      <FloatingCTA variant="corporate" />

      <section className="min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/corporate_event_1_3.jpeg" 
            alt="Evento corporativo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-industrial-900/85"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-steel-light mb-4">
                <Briefcase size={20} />
                <span className="text-sm font-medium uppercase tracking-wider">Eventos Corporativos</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Eventos que<br />impactan
              </h1>
              <p className="text-xl text-industrial-300 mb-8 leading-relaxed">
                Un espacio diáfano con tecnología de última generación. 
                Perfecto para presentaciones, team buildings, y eventos de marca.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto" className="px-8 py-4 bg-white text-industrial-900 font-medium hover:bg-steel-light transition-colors">
                  Solicitar presupuesto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-900 mb-4">Datos técnicos</h2>
            <p className="text-industrial-600">Todo lo que necesitas saber para planificar tu evento</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {specs.map((spec, index) => (
              <div key={index} className="p-6 bg-industrial-50 text-center">
                <p className="text-3xl font-bold text-industrial-900 mb-2">{spec.value}</p>
                <p className="text-industrial-500 text-sm uppercase tracking-wider">{spec.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="p-8 border-2 border-industrial-200 hover:border-corporate transition-colors">
                  <Icon className="w-12 h-12 text-corporate mb-4" />
                  <h3 className="text-xl font-semibold text-industrial-900 mb-2">{feature.title}</h3>
                  <p className="text-industrial-500">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Configuración genérica (sin grids específicos) */}
      <section className="py-24 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-industrial-900 mb-6">Configuraciones a medida</h2>
          <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
            Olvídate de formatos rígidos. Adaptamos el espacio totalmente a tus necesidades, 
            ya sea para una conferencia multitudinaria, una cena de gala o un showroom exclusivo.
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24 bg-industrial-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Confían en nosotros</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="px-8 py-4 bg-industrial-800 text-industrial-400">{client}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-industrial-900 mb-12 text-center">Incluido en el alquiler</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Mobiliario básico (mesas y sillas)',
              'Sistema de sonido profesional',
              'Proyector 4K y pantalla',
              'WiFi alta velocidad',
              'Iluminación ambiental LED',
              'Parking privado',
              'Camerino y zona backstage',
              'Coordinador de evento',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-industrial-50">
                <Check className="w-5 h-5 text-corporate flex-shrink-0" />
                <span className="text-industrial-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm segment="empresas" />
      <Footer />
    </div>
  )
}
