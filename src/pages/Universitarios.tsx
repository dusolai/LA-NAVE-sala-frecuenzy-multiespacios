import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'
import { GraduationCap, Bus, Shield, Music, Check, Star, Clock, Beer, Crown } from 'lucide-react'

const packages = [
  {
    name: 'Level Up Party',
    description: 'Subes de nivel. Dejas de ser novato.',
    features: ['Espacio completo Sala Frequency', 'DJ profesional', 'Iluminación fiesta', 'Servicio de Autobús', 'Seguridad privada'],
    popular: true,
  },
  {
    name: 'Fin de carrera',
    description: 'La despedida que os merecéis.',
    features: ['Level Up Party included', 'Catering/Cena', 'Photocall personalizado', 'Grabación video', 'Acceso Zona VIP'],
    popular: false,
  },
]

const safetyFeatures = [
  { icon: Shield, title: 'Seguridad 24h', description: 'Personal de seguridad profesional toda la noche' },
  { icon: Bus, title: 'Transporte', description: 'Servicio de autobús ida y vuelta para tu seguridad' },
  { icon: Clock, title: 'Horario Extendido', description: 'Fiesta permitida hasta las 7:00 AM' },
]

export default function Universitarios() {
  return (
    <div className="min-h-screen">
      <Navbar variant="university" />
      <FloatingCTA variant="university" />

      <section className="min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/university_party_1_6.jpg" 
            alt="Fiesta universitaria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-university/90 via-indigo-600/85 to-purple-700/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <GraduationCap size={20} />
              <span className="text-sm font-medium uppercase tracking-wider">Fiestas Universitarias</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              SALA FREQUENCY<br />MULTIESPACIOS
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              El mejor espacio para tu Level Up Party o fin de carrera. 
              Hasta el amanecer, con la mejor música y seguridad garantizada.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-6 h-6" />
                <span className="font-medium">Hasta las 7:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Beer className="w-6 h-6" />
                <span className="font-medium">3 Barras</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Crown className="w-6 h-6" />
                <span className="font-medium">Zona VIP</span>
              </div>
            </div>

            <a href="#paquetes" className="inline-block px-8 py-4 bg-white text-university font-medium hover:bg-industrial-100 transition-colors">
              Ver opciones
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-industrial-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                 <Music className="w-10 h-10 mx-auto mb-4 text-university" />
                 <h3 className="font-bold text-lg mb-2">Cabina DJ Ampliada</h3>
                 <p className="text-gray-400 text-sm">Sonido brutal y espacio para el show</p>
              </div>
              <div className="p-4">
                 <Beer className="w-10 h-10 mx-auto mb-4 text-university" />
                 <h3 className="font-bold text-lg mb-2">3 Barras</h3>
                 <p className="text-gray-400 text-sm">Servicio rápido con camareros profesionales</p>
              </div>
              <div className="p-4">
                 <Crown className="w-10 h-10 mx-auto mb-4 text-university" />
                 <h3 className="font-bold text-lg mb-2">Zona VIP Superior</h3>
                 <p className="text-gray-400 text-sm">Espacio exclusivo separado de la pista</p>
              </div>
              <div className="p-4">
                 <Clock className="w-10 h-10 mx-auto mb-4 text-university" />
                 <h3 className="font-bold text-lg mb-2">Cierre 7:00 AM</h3>
                 <p className="text-gray-400 text-sm">La noche es joven y larga</p>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-900 mb-4">Tu seguridad es lo primero</h2>
            <p className="text-industrial-600 text-lg">Nos tomamos en serio que pases una noche increíble y vuelvas a casa sano y salvo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="p-8 bg-university/5 border-2 border-university/20 text-center">
                  <Icon className="w-12 h-12 text-university mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-industrial-900 mb-2">{feature.title}</h3>
                  <p className="text-industrial-500">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="paquetes" className="py-24 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-900 mb-4">Paquetes universitarios</h2>
            <p className="text-industrial-600">Todo incluido para que solo te preocupes de pasarlo bien</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white border-2 ${pkg.popular ? 'border-university' : 'border-industrial-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-university text-white text-xs font-medium uppercase">
                    Más popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-industrial-900 mb-2">{pkg.name}</h3>
                <p className="text-lg text-industrial-500 mb-6 italic">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-university" />
                      <span className="text-industrial-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                    <span className="block text-xl font-bold text-university mb-4">Precios especiales para grupos</span>
                    <a href="#contacto" className={`block w-full py-3 font-medium transition-colors ${pkg.popular ? 'bg-university text-white hover:bg-indigo-700' : 'border-2 border-industrial-300 text-industrial-700 hover:border-university'}`}>
                    Consultar disponibilidad
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm segment="universitarios" />
      <Footer />
    </div>
  )
}
