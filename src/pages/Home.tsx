import Navbar from '../components/Navbar'
import HeroSegmentado from '../components/HeroSegmentado'
import CateringPartners from '../components/CateringPartners'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ExtraServices from '../components/ExtraServices'

const features = [
  { icon: 'groups', title: 'Hasta 1100', description: 'Espacio diáfano y versátil' },
  { icon: 'straighten', title: '1,200m2', description: 'Nave industrial reformada' },
  { icon: 'lightbulb', title: 'Iluminación', description: 'Sistema LED programable' },
  { icon: 'local_parking', title: 'Parking', description: 'Amplio aparcamiento privado' },
]

const galleryImages = [
  { src: '/images/venue_exterior.png', alt: 'Fachada Sala Frecuenzy' },
  { src: '/images/venue_interior.png', alt: 'Espacio Industrial' },
  { src: '/images/wedding_setup.png', alt: 'Interior Sala Eventos' },
  { src: '/images/gallery_1.png', alt: 'Detalle Arquitectonico' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <HeroSegmentado />

      {/* SECCIÓN CONÓCENOS */}
      <section id="conocenos" className="py-20 lg:py-32 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full md:w-1/2 animate-in slide-in-from-left duration-700">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  alt="Modern Architecture Exterior"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="/images/venue_exterior.png"
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary border border-primary/20">
                  Nuestra Historia
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-in slide-in-from-right duration-700">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Conócenos
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-body">
                  Somos una sala multiespacios que está totalmente adaptada para nuestros clientes. Nacemos de la recuperación de una antigua estructura industrial, transformada cuidadosamente para mantener su esencia y carácter único.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-body">
                  De una nave industrial original, hemos creado un lugar donde la historia del edificio se funde con la modernidad y la versatilidad necesaria para cualquier tipo de evento. Aquí, cada rincón cuenta una historia y cada evento escribe una nueva.
                </p>
              </div>
              <div className="mt-10">
                <button className="text-primary font-bold uppercase text-xs tracking-[0.2em] hover:text-primary-dark transition-all duration-300 border-b-2 border-primary/30 hover:border-primary pb-2 flex items-center gap-3">
                  Leer más sobre nosotros
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Espacio como ninguno */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Un espacio como ninguno
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-16 max-w-2xl mx-auto font-body">
            Industrial por fuera, versátil por dentro. Todo lo que necesitas para un evento inolvidable.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/5 dark:bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                </div>
                <h4 className="font-display font-bold text-gray-900 dark:text-white mb-2 text-xl">{feature.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Descubre nuestros espacios</h2>
              <p className="text-gray-500 dark:text-gray-400 font-body">Capturando la esencia de Sala Frecuenzy</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
              Ver Galería Completa <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs font-bold uppercase tracking-widest">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExtraServices />
      <CateringPartners />

      {/* Location */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 border-l-4 border-primary pl-4">
                <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  En el corazón de la Ribera
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg font-body leading-relaxed">
                Ubicados en Cintruénigo, en el cruce estratégico entre Navarra, La Rioja y Aragón.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'A 15 min de Tudela',
                  'A 45 min de Logroño',
                  'A 1h de Zaragoza y Pamplona'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 font-body">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-1 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-inner">
                <div className="aspect-video overflow-hidden rounded-xl h-64 w-full grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23534.89!2d-1.8!3d42.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5086f0c0c0c0c0%3A0x0!2sCintru%C3%A9nigo%2C%20Navarra!5e0!3m2!1ses!2ses!4v1"
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicacion Sala Frecuenzy"
                  ></iframe>
                </div>
              </div>
            </div>

            <div id="contacto" className="animate-in slide-in-from-right duration-1000">
              <ContactForm segment="general" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
