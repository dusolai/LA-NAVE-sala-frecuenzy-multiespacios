const services = [
  {
    category: "Organización & Detalles",
    items: [
      { icon: "event_available", title: "Wedding Planner", desc: "Servicio integral para tu tranquilidad." },
      { icon: "local_florist", title: "Floristería", desc: "Decoración floral personalizada." },
      { icon: "photo_camera", title: "Fotografía", desc: "Capturando cada momento especial." },
      { icon: "videocam", title: "Vídeo", desc: "Tu evento en alta definición." }
    ]
  },
  {
    category: "Fiesta & Entretenimiento",
    items: [
      { icon: "music_note", title: "DJ & Música", desc: "Equipamiento profesional de sonido e iluminación." },
      { icon: "child_care", title: "Zona Kids", desc: "Entretenimiento seguro para los más pequeños." },
      { icon: "restaurant", title: "Catering", desc: "Opciones gastronómicas de primer nivel." },
      { icon: "mail", title: "Invitaciones", desc: "Digitales o impresas a medida." }
    ]
  }
]

export default function ExtraServices() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mucho más que un espacio
          </h2>
          <p className="font-body text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Elevamos tu evento al siguiente nivel con nuestros servicios de valor añadido.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((group, groupIndex) => (
            <div key={groupIndex} className="animate-in fade-in duration-700">
              <div className="flex items-center gap-4 mb-10 border-l-4 border-primary pl-4">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white uppercase tracking-[0.2em]">
                  {group.category}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((service, index) => (
                  <div
                    key={index}
                    className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-primary/5 dark:bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3 tracking-wide">{service.title}</h4>
                    <p className="font-body text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 relative bg-background-dark rounded-3xl overflow-hidden p-8 md:p-20 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#CBA16F 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>

          <div className="relative z-10 max-w-3xl mx-auto animate-in zoom-in duration-700">
            <span className="material-symbols-outlined text-primary text-6xl mb-6">auto_awesome</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">¿Tienes una idea diferente?</h2>
            <p className="text-gray-300 max-w-lg mx-auto mb-12 text-lg font-body leading-relaxed">
              Cenas de empresa, cumpleaños privados, ensayos o lanzamientos de producto. Alquilamos la sala para todo lo que necesites.
            </p>
            <a
              href="#contacto"
              className="bg-white text-background-dark hover:bg-primary hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 inline-flex items-center gap-3 shadow-xl transform hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              Personalizar mi evento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
