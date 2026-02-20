import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  segment?: 'bodas' | 'empresas' | 'universitarios' | 'general'
}

const segmentLabels = {
  bodas: 'Boda',
  empresas: 'Evento Corporativo',
  universitarios: 'Fiesta Universitaria',
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
    
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const subject = encodeURIComponent(`Consulta ${segmentLabels[segment]} - Sala Frecuenzy`)
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefono: ${formData.phone}\n` +
      `Fecha: ${formData.date}\n` +
      `Invitados: ${formData.guests}\n` +
      `Mensaje: ${formData.message}`
    )
    
    const submissions = JSON.parse(localStorage.getItem('salafrecuenzy_submissions') || '[]')
    submissions.push({ ...formData, segment, timestamp: new Date().toISOString() })
    localStorage.setItem('salafrecuenzy_submissions', JSON.stringify(submissions))
    
    setLoading(false)
    setSubmitted(true)
    
    window.open(`mailto:info@salafrecuenzy.es?subject=${subject}&body=${body}`, '_blank')
  }

  if (submitted) {
    return (
      <section id="contacto" className="py-24 bg-industrial-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 border-2 border-copper">
            <CheckCircle className="w-16 h-16 text-copper mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-industrial-900 mb-4">Solicitud enviada</h2>
            <p className="text-industrial-600 mb-6">
              Gracias por tu interes. Nos pondremos en contacto en menos de 24 horas.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: '', email: '', phone: '', date: '', guests: '', message: '' })
              }}
              className="text-copper font-medium hover:underline"
            >
              Enviar otra consulta
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-24 bg-industrial-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-industrial-900 mb-4">Hablemos de tu evento</h2>
          <p className="text-industrial-600">
            Tipo de evento: <span className="font-semibold text-copper">{segmentLabels[segment]}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border-2 border-industrial-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">Nombre *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-industrial-200 focus:border-copper focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-industrial-200 focus:border-copper focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">Telefono</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-industrial-200 focus:border-copper focus:outline-none transition-colors"
                placeholder="+34 600 000 000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">Fecha aproximada</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 border-2 border-industrial-200 focus:border-copper focus:outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-industrial-700 mb-2">Numero de invitados</label>
              <input
                type="number"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-3 border-2 border-industrial-200 focus:border-copper focus:outline-none transition-colors"
                placeholder="Ej: 150"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-industrial-700 mb-2">Cuentanos mas</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-industrial-200 focus:border-copper focus:outline-none transition-colors resize-none"
                placeholder="Describe tu evento..."
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full flex items-center justify-center gap-2 px-8 py-4 bg-industrial-900 text-white font-medium hover:bg-copper transition-colors disabled:opacity-50"
          >
            {loading ? 'Enviando...' : <><Send size={18} /> Enviar solicitud</>}
          </button>
        </form>
      </div>
    </section>
  )
}
