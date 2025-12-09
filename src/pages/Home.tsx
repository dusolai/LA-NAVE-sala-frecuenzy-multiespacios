import Navbar from '../components/Navbar'
import HeroSegmentado from '../components/HeroSegmentado'
import CateringPartners from '../components/CateringPartners'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ExtraServices from '../components/ExtraServices'
import { Users, Maximize, Lightbulb, Car } from 'lucide-react'

const features = [
  { icon: Users, title: 'Hasta 1100 invitados', description: 'Espacio diafano y versatil para grandes celebraciones' },
  { icon: Maximize, title: '1.200m2', description: 'Nave industrial completamente reformada' },
  { icon: Lightbulb, title: 'Iluminacion profesional', description: 'Sistema de luces LED programable' },
  { icon: Car, title: 'Parking privado', description: 'Amplio aparcamiento para todos tus invitados' },
]

const galleryImages = [
  { src: '/images/industrial_space_1_9.jpeg', alt: 'Sala Principal' },
  { src: '/images/venue_exterior_1_9.jpeg', alt: 'Zona Exterior' },
  { src: '/images/wedding_venue_1_5.jpeg', alt: 'Detalles Industriales' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSegmentado />

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-6">
              Un espacio como ninguno
            </h2>
            <p className="text-xl text-industrial-600 max-w-2xl mx-auto">
              Industrial por fuera, versatil por dentro. Todo lo que necesitas para un evento inolvidable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-industrial-200 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-copper" />
                  </div>
                  <h3 className="text-xl font-semibold text-industrial-900 mb-2">{feature.title}</h3>
                  <p className="text-industrial-500">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery with Real Images */}
      <section className="py-24 bg-industrial-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Nuestro espacio</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden group">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Extra (Nuevo bloque añadido) */}
      <ExtraServices />

      <CateringPartners />

      {/* Location with Google Maps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-industrial-900 mb-6">
                En el corazon de la Ribera
              </h2>
              <p className="text-lg text-industrial-600 mb-6">
                Ubicados en Cintruenigo, en el cruce estrategico entre Navarra, La Rioja y Aragon. 
                Accesible desde Tudela, Logrono, Zaragoza y Pamplona.
              </p>
              <ul className="space-y-3 text-industrial-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-copper"></span>
                  A 15 min de Tudela
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-copper"></span>
                  A 45 min de Logrono
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-copper"></span>
                  A 1h de Zaragoza y Pamplona
                </li>
              </ul>
            </div>
            <div className="aspect-video overflow-hidden border-2 border-industrial-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23534.89!2d-1.8!3d42.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5086f0c0c0c0c0%3A0x0!2sCintru%C3%A9nigo%2C%20Navarra!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion La Nave"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <ContactForm segment="general" />
      <Footer />
    </div>
  )
}
