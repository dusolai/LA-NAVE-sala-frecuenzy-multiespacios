import Navbar from '../components/Navbar'
import CateringPartners from '../components/CateringPartners'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ExtraServices from '../components/ExtraServices'

const benefits = [
  { icon: 'restaurant', title: 'Libertad de catering', description: 'Elige tu catering favorito o trae el tuyo propio' },
  { icon: 'camera_enhance', title: 'Espacios fotográficos', description: 'Rincones industriales únicos para fotos memorables' },
  { icon: 'nightlife', title: 'Sin límites de música', description: 'Celebra hasta el amanecer sin restricciones' },
  { icon: 'schedule', title: 'Tu timing', description: 'Organizamos según tus horarios, no los nuestros' },
]

const testimonials = [
  { name: 'Laura y Miguel', date: 'Septiembre 2024', text: 'El espacio perfecto para nuestra boda. La libertad de elegir nuestro catering fue clave.' },
  { name: 'Ana y Carlos', date: 'Julio 2024', text: 'Industrial, elegante y diferente. Exactamente lo que buscábamos.' },
]

const galleryImages = [
  { src: '/images/wedding_setup.png', alt: 'Configuración mesa de boda' },
  { src: '/images/venue_interior.png', alt: 'Interior nave industrial' },
  { src: '/images/gallery_1.png', alt: 'Detalle decoración industrial' },
  { src: '/images/venue_exterior.png', alt: 'Exterior nave noche' },
]

export default function Bodas() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />

      {/* Hero Section - Elegante & Industrial */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/wedding_setup.png"
            alt="Bodas en Sala Frecuenzy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl animate-in slide-in-from-left duration-1000">
            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-primary/20">
              Sala Multiespacios para Bodas
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Tu día,<br />tus reglas
            </h1>
            <p className="font-body text-gray-300 text-lg lg:text-xl mb-10 leading-relaxed max-w-lg">
              Un espacio industrial-chic donde la libertad es protagonista. Sin ataduras de catering, sin horarios rígidos. Solo tu visión hecha realidad.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#contacto"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl transform hover:scale-105 active:scale-95"
              >
                Reservar visita
              </a>
              <a
                href="#galeria"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold py-4 px-10 rounded-full transition-all duration-300"
              >
                Ver galería
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Atributos de valor */}
      <section className="py-20 lg:py-32 bg-surface-light dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 px-4">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Por qué elegirnos
            </h2>
            <p className="font-body text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto italic leading-relaxed">
              "Somos una sala multiespacios preparada para tu gran día."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary/5 dark:bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  <span className="material-symbols-outlined text-4xl">{benefit.icon}</span>
                </div>
                <h4 className="font-display font-bold text-gray-900 dark:text-white mb-3 text-xl tracking-tight">{benefit.title}</h4>
                <p className="font-body text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-4">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section id="galeria" className="py-20 lg:py-32 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div className="animate-in slide-in-from-left duration-700">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Inspiración industrial
              </h2>
              <p className="font-body text-gray-500 dark:text-gray-400 text-lg">Descubre cómo otros novios transformaron nuestro espacio.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-10 left-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2">{img.alt}</p>
                  <div className="h-0.5 w-12 bg-primary"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExtraServices />
      <CateringPartners />

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Historias de amor
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background-light dark:bg-background-dark p-10 md:p-14 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                <p className="font-body text-gray-600 dark:text-gray-400 text-xl md:text-2xl mb-10 italic leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold font-display text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-gray-900 dark:text-white text-lg tracking-wide">{testimonial.name}</h5>
                    <p className="text-gray-400 text-sm font-body uppercase tracking-widest">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="contacto" className="py-20 lg:py-32 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm segment="bodas" />
        </div>
      </div>

      <Footer />
    </div>
  )
}
