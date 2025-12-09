import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'
import { GraduationCap, Bus, Shield, Music, Users, Check, Star } from 'lucide-react'

const packages = [
  {
    name: 'Paso de Ecuador',
    price: 'Desde 35/persona',
    features: ['Espacio completo', 'DJ profesional', 'Iluminacion fiesta', 'Autobus incluido', 'Seguridad privada'],
    popular: true,
  },
  {
    name: 'Fin de carrera',
    price: 'Desde 40/persona',
    features: ['Todo del Paso de Ecuador', 'Catering basico', 'Photocall personalizado', 'Grabacion video'],
    popular: false,
  },
]

const safetyFeatures = [
  { icon: Shield, title: 'Seguridad 24h', description: 'Personal de seguridad profesional toda la noche' },
  { icon: Bus, title: 'Transporte incluido', description: 'Autobuses ida y vuelta desde tu universidad' },
  { icon: Users, title: 'Control de aforo', description: 'Capacidad controlada para tu seguridad' },
]

export default function Universitarios() {
  return (
    <div className="min-h-screen">
      <Navbar variant="university" />
      <FloatingCTA variant="university" />

      {/* Hero with Real Image */}
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
              Fiesta segura,<br />noche epica
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              El mejor espacio para tu Paso de Ecuador o fin de carrera. 
              Con transporte incluido y seguridad garantizada.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-white">
                <Bus className="w-6 h-6" />
                <span className="font-medium">Autobus incluido</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-6 h-6" />
                <span className="font-medium">Seguridad 24h</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Music className="w-6 h-6" />
                <span className="font-medium">DJ profesional</span>
              </div>
            </div>

            <a href="#paquetes" className="inline-block px-8 py-4 bg-white text-university font-medium hover:bg-industrial-100 transition-colors">
              Ver paquetes
            </a>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-900 mb-4">Tu seguridad es lo primero</h2>
            <p className="text-industrial-600 text-lg">Nos tomamos en serio que pases una noche increible y vuelvas a casa sano y salvo</p>
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
                    Mas popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-industrial-900 mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-university mb-6">{pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-university" />
                      <span className="text-industrial-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`mt-8 block text-center py-3 font-medium transition-colors ${pkg.popular ? 'bg-university text-white hover:bg-indigo-700' : 'border-2 border-industrial-300 text-industrial-700 hover:border-university'}`}>
                  Solicitar info
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-university text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Lo que dicen de nosotros</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { uni: 'UPNA - Paso Ecuador 2024', text: 'Increible organizacion. El autobus fue clave.' },
              { uni: 'UNIZAR - Fin de carrera', text: 'El mejor espacio para fiestas universitarias.' },
              { uni: 'UR - Medicina 2024', text: 'Seguridad top y musica hasta el amanecer.' },
            ].map((review, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm">
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-4">"{review.text}"</p>
                <p className="text-sm text-white/60">{review.uni}</p>
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
