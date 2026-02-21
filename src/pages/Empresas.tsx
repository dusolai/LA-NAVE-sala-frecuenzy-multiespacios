import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const specs = [
  { label: 'Superficie', value: '1.200 m2', icon: 'square_foot' },
  { label: 'Capacidad', value: '1100 px', icon: 'groups' },
  { label: 'Altura', value: '8 metros', icon: 'straighten' },
  { label: 'WIFI', value: '1 Gbps', icon: 'wifi' },
]

const features = [
  { icon: 'settings_input_component', title: 'Equipamiento AV', description: 'Proyector 4K, sonido profesional y control de iluminación LED.' },
  { icon: 'bolt', title: 'Potencia Eléctrica', description: 'Instalación industrial preparada para grandes montajes.' },
  { icon: 'view_quilt', title: 'Espacios Flexibles', description: 'Adaptable a conferencias, showrooms o cenas de gala.' },
]

export default function Empresas() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />

      {/* Hero Section - Corporativo & Tecnológico */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-background-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/corporate_event.png"
            alt="Eventos Corporativos"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl animate-in fade-in duration-1000">
            <h4 className="font-display font-bold text-primary mb-6 text-sm uppercase tracking-[0.4em] flex items-center gap-4">
              <span className="w-10 h-px bg-primary"></span>
              Corporate Events
            </h4>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Eventos que<br /><span className="text-primary italic">impactan</span>
            </h1>
            <p className="font-body text-gray-300 text-lg lg:text-xl mb-12 leading-relaxed max-w-2xl">
              Un espacio diáfano con tecnología de última generación. Perfecto para presentaciones, team buildings, y eventos de marca.
            </p>
            <a
              href="#contacto"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 shadow-2xl inline-flex items-center gap-4 group"
            >
              Solicitar presupuesto
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">trending_flat</span>
            </a>
          </div>
        </div>

        {/* Floating Technical Specs */}
        <div className="hidden lg:block absolute bottom-12 right-12 z-20">
          <div className="glass-effect p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-8">
              {specs.map((spec, i) => (
                <div key={i}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{spec.label}</p>
                  <p className="text-xl font-display font-bold text-white">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Grid */}
      <section className="py-24 lg:py-32 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <img
                  src="/images/venue_interior.png"
                  alt="Instalaciones Técnicas"
                  className="rounded-3xl shadow-2xl relative z-10 border border-gray-100 dark:border-gray-800"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10 leading-tight">
                Infraestructura de vanguardia
              </h2>
              <div className="space-y-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-background-light dark:bg-background-dark rounded-xl flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                      <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2 tracking-wide">{feature.title}</h4>
                      <p className="font-body text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Configuration Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#CBA16F 1px, transparent 1px), linear-gradient(90deg, #CBA16F 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8">Configuraciones a medida</h2>
          <p className="font-body text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed lg:px-20">
            Olvídate de formatos rígidos. Adaptamos el espacio totalmente a tus necesidades, ya sea para una conferencia multitudinaria, una cena de gala o un showroom exclusivo.
          </p>
        </div>
      </section>

      {/* Included Checklist */}
      <section className="py-24 lg:py-32 bg-background-light dark:bg-background-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Incluido en el alquiler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-left">
            {[
              'Mobiliario básico corporativo',
              'Sistema de sonido profesional',
              'Proyector 4K y pantalla gigante',
              'WiFi de alta densidad',
              'Iluminación LED perimetral',
              'Parking privado vigilado',
              'Zona de backstage y camerinos',
              'Coordinador técnico dedicado',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 py-3 border-b border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-bottom duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body text-gray-700 dark:text-gray-300 tracking-wide text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="contacto" className="py-20 lg:py-32 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm segment="empresas" />
        </div>
      </div>

      <Footer />
    </div>
  )
}
