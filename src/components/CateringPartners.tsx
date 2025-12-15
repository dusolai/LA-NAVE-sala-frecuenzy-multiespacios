const partners = [
  { name: 'Maher Catering', specialty: 'Alta gastronomía' },
  { name: 'Gourmet Ribera', specialty: 'Cocina de autor' },
  { name: 'Sabores de la Tierra', specialty: 'Km 0' },
  { name: 'Eventos y Sabores', specialty: 'Internacional' },
  { name: 'Tu propio catering', specialty: 'Libertad total' },
]

export default function CateringPartners() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-6">
            Tu Catering, Tus Reglas
          </h2>
          <p className="text-xl text-industrial-600 max-w-2xl mx-auto">
            Elige entre nuestros caterings homologados o trae el tuyo propio. 
            Aquí no hay ataduras, solo libertad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group p-8 border-2 border-industrial-200 hover:border-copper transition-colors"
            >
              <div className="w-16 h-16 bg-industrial-100 group-hover:bg-copper/10 flex items-center justify-center mb-6 transition-colors">
                <span className="text-2xl font-bold text-industrial-400 group-hover:text-copper">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-industrial-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-industrial-500">{partner.specialty}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-industrial-500 italic">
            Partners, no obligación. La decisión es siempre tuya.
          </p>
        </div>
      </div>
    </section>
  )
}
