import { useState } from 'react'

interface ContactFormProps {
  segment?: 'bodas' | 'general' | 'privados' | 'cumpleanos' | 'dj'
}

const segmentLabels = {
  bodas: 'Boda',
  privados: 'Evento Privado',
  cumpleanos: 'Cumpleaños',
  dj: 'Escuela de DJ',
  general: 'General',
}

export default function ContactForm({ segment = 'general' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    const subject = encodeURIComponent(`Consulta ${segmentLabels[segment]} - Sala Frecuenzy`)
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Fecha: ${formData.date}\n` +
      `Invitados: ${formData.guests}\n` +
      `Mensaje: ${formData.message}`
    )

    setLoading(false)
    setSubmitted(true)

    window.open(`mailto:info@salafrecuenzy.es?subject=${subject}&body=${body}`, '_blank')
  }

  if (submitted) {
    return (
      <div className="bg-surface-light dark:bg-surface-dark p-8 md:p-12 rounded-2xl shadow-2xl border border-primary/20 text-center animate-in zoom-in duration-500">
        <span className="material-symbols-outlined text-primary text-6xl mb-6">task_alt</span>
        <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">¡Solicitud Enviada!</h3>
        <p className="text-gray-500 dark:text-gray-400 font-body mb-8">
          Gracias por contactar con Sala Frecuenzy. Nos pondremos en contacto contigo en breve.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-primary font-bold uppercase tracking-widest text-xs hover:text-primary-dark transition-colors"
        >
          Enviar otra consulta
        </button>
      </div>
    )
  }

  return (
    <div className="bg-surface-light dark:bg-surface-dark p-6 md:p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
      <div className="mb-8">
        <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">Hablemos de tu evento</h3>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
          Tipo de consulta: <span className="text-primary font-bold">{segmentLabels[segment]}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest" htmlFor="name">Nombre completo *</label>
            <input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none dark:text-white transition-all"
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest" htmlFor="email">Email de contacto *</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none dark:text-white transition-all"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest" htmlFor="date">Fecha prevista</label>
            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none dark:text-white transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest" htmlFor="guests">Nº Invitados</label>
            <input
              id="guests"
              type="number"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none dark:text-white transition-all"
              placeholder="Ej. 150"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest" htmlFor="message">Cuéntanos sobre tu idea</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none dark:text-white transition-all resize-none"
            placeholder="Describe tu evento ideal..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
        >
          {loading ? 'Enviando...' : (
            <>
              <span className="material-symbols-outlined text-sm">send</span>
              Enviar Solicitud
            </>
          )}
        </button>
      </form>
    </div>
  )
}
