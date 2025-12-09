import { 
  Video, 
  Mail, 
  Smile, 
  Music, 
  Car, 
  Bus, 
  Bed, 
  Camera, 
  Utensils, 
  Sparkles,
  PartyPopper
} from 'lucide-react'

const services = [
  {
    category: "Tecnología & Recuerdos",
    items: [
      { icon: Video, title: "Video 3D y Decoraciones", desc: "Proyecciones y mapping para transformar el espacio." },
      { icon: Mail, title: "Invitaciones Digitales", desc: "Diseño y gestión de envíos para tus invitados." },
      { icon: Camera, title: "Foto y Vídeo", desc: "Fotógrafos profesionales y generación de vídeo post-evento." }
    ]
  },
  {
    category: "Logística & Confort",
    items: [
      { icon: Bus, title: "Convenio Autobuses", desc: "Transporte seguro para que nadie coja el coche." },
      { icon: Bed, title: "Convenio Hoteles", desc: "Alojamiento cercano con tarifas especiales." },
      { icon: Car, title: "Coche con Chófer", desc: "Llegada espectacular para los novios o VIPs." }
    ]
  },
  {
    category: "Fiesta & Entretenimiento",
    items: [
      { icon: Music, title: "DJ Profesional", desc: "El ritmo que tu fiesta necesita." },
      { icon: Smile, title: "Zona Kids", desc: "Castillo de bolas, payasos y educadores para los peques." },
      { icon: Utensils, title: "Catering a Medida", desc: "Desde córners temáticos hasta banquetes completos." }
    ]
  }
]

export default function ExtraServices() {
  return (
    <section className="py-24 bg-industrial-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-industrial-900 mb-4">
            Mucho más que un espacio
          </h2>
          <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
            Elevamos tu evento al siguiente nivel con nuestros servicios de valor añadido. 
            Tú lo imaginas, nosotros lo hacemos realidad.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-2xl font-bold text-industrial-800 mb-8 border-l-4 border-copper pl-4">
                {group.category}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {group.items.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div key={index} className="bg-white p-6 border border-industrial-200 hover:border-copper transition-colors shadow-sm group">
                      <div className="w-12 h-12 bg-industrial-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-copper/10 transition-colors">
                        <Icon className="w-6 h-6 text-industrial-700 group-hover:text-copper transition-colors" />
                      </div>
                      <h4 className="font-bold text-lg text-industrial-900 mb-2">{service.title}</h4>
                      <p className="text-industrial-600 text-sm">{service.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sección para Eventos Privados / General */}
        <div className="mt-16 bg-industrial-900 rounded-lg p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 text-copper mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">¿Tienes una idea diferente?</h3>
            <p className="text-xl text-industrial-300 mb-8 max-w-2xl mx-auto">
              Cenas de empresa, cumpleaños privados, ensayos o lanzamientos de producto. 
              Alquilamos la sala para <strong>todo lo que el cliente necesite</strong>.
            </p>
            <a 
              href="#contacto" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-industrial-900 font-bold hover:bg-copper hover:text-white transition-colors rounded"
            >
              <PartyPopper size={20} />
              Personalizar mi evento
            </a>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-copper/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>

      </div>
    </section>
  )
}
