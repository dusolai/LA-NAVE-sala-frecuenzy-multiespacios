import Navbar from '../components/Navbar'
import CateringPartners from '../components/CateringPartners'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'
import ExtraServices from '../components/ExtraServices'
import { Heart, Camera, Music, Utensils, Clock } from 'lucide-react'

const benefits = [
  { icon: Utensils, title: 'Libertad de catering', description: 'Elige tu catering favorito o trae el tuyo propio' },
  { icon: Camera, title: 'Espacios fotograficos', description: 'Rincones industriales unicos para fotos memorables' },
  { icon: Music, title: 'Sin limites de musica', description: 'Celebra hasta el amanecer sin restricciones' },
  { icon: Clock, title: 'Tu timing', description: 'Organizamos segun tus horarios, no los nuestros' },
]

const testimonials = [
  { name: 'Laura y Miguel', date: 'Septiembre 2024', text: 'El espacio perfecto para nuestra boda. La libertad de elegir nuestro catering fue clave.' },
  { name: 'Ana y Carlos', date: 'Julio 2024', text: 'Industrial, elegante y diferente. Exactamente lo que buscabamos.' },
]

const galleryImages = [
  '/images/wedding_venue_1_5.jpeg',
  '/images/wedding_setup_1_0.jpg',
  '/images/industrial_space_1_9.jpeg',
  '/images/venue_exterior_1_9.jpeg',
  '/images/corporate_event_1_3.jpeg',
  '/images/wedding_venue_1_5.jpeg',
]

export default function Bodas() {
  return (
    <div className="min-h-screen">
      <Navbar variant="wedding" />
      <FloatingCTA variant="wedding" />

      {/* Hero with Real Image */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/wedding_venue_1_5.jpeg" 
            alt="Espacio industrial para bodas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-wedding mb-4">
              <Heart size={20} />
              <span className="text-sm font-medium uppercase tracking-wider">Bodas</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-industrial-900 mb-6 leading-tight">
              Tu dia,<br />tus reglas
            </h1>
            <p className="text-xl text-industrial-600 mb-8 leading-relaxed">
              Un espacio industrial-chic donde la libertad es protagonista. 
              Sin ataduras de catering, sin horarios rigidos. Solo tu vision hecha realidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="px-8 py-4 bg-wedding text-white font-medium hover:bg-copper-dark transition-colors">
                Reservar visita
              </a>
              <a href="#galeria" className="px-8 py-4 border-2 border-industrial-300 text-industrial-700 font-medium hover:border-wedding transition-colors">
                Ver galeria
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-900 mb-4">Por que elegirnos</h2>
            <p className="text-industrial-600 text-lg">No somos un salon de bodas clasico. Somos tu lienzo en blanco.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="p-6 border-2 border-industrial-100 hover:border-wedding transition-colors">
                  <Icon className="w-10 h-10 text-wedding mb-4" />
                  <h3 className="text-lg font-semibold text-industrial-900 mb-2">{benefit.title}</h3>
                  <p className="text-industrial-500 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery with Real Images */}
      <section id="galeria" className="py-24 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-industrial-900 mb-12 text-center">Inspiracion industrial</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden group">
                <img 
                  src={src} 
                  alt={`Galeria boda ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Extra (Añadido) */}
      <ExtraServices />

      <CateringPartners />

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-industrial-900 mb-12 text-center">Historias de amor</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-industrial-50 border-l-4 border-wedding">
                <p className="text-industrial-700 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-industrial-900">{testimonial.name}</p>
                  <p className="text-industrial-500 text-sm">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm segment="bodas" />
      <Footer />
    </div>
  )
}
