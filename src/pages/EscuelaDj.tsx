import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const packs = [
    {
        title: 'Iniciación DJ',
        duration: '10 Horas',
        level: 'Principiante',
        features: [
            'Conceptos básicos de mezcla',
            'Configuración de equipo',
            'Estructura musical y beats',
            'Software Rekordbox/Serato',
        ],
        price: 'Consultar',
        popular: false
    },
    {
        title: 'Perfeccionamiento Pro',
        duration: '20 Horas',
        level: 'Intermedio/Avanzado',
        features: [
            'Efectología avanzada',
            'Mezcla armónica',
            'Técnicas de performance',
            'Gestión de librería musical',
        ],
        price: 'Consultar',
        popular: true
    },
    {
        title: 'Pack Premium Individual',
        duration: 'Intensivo',
        level: 'Personalizado',
        features: [
            'Clases 1 a 1 con profesor',
            'Uso exclusivo de la sala',
            'Grabación de set profesional',
            'Asesoría de marketing para DJs',
        ],
        price: 'Consultar',
        popular: false
    }
]

const equipment = [
    { name: 'Pioneer CDJ-3000', icon: 'settings_input_component' },
    { name: 'Pioneer DJM-V10', icon: 'equalizer' },
    { name: 'Sistemas de Monitorización Pro', icon: 'speaker' },
    { name: 'Software Rekordbox / Serato', icon: 'laptop' },
]

export default function EscuelaDj() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-background-dark">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/dj_school_premium_booth.png"
                        alt="Escuela de DJ Sala Frecuenzy"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-1000">
                        <h4 className="font-display font-bold text-primary mb-6 text-sm uppercase tracking-[0.4em] flex items-center gap-4">
                            <span className="w-10 h-px bg-primary"></span>
                            Frecuenzy DJ Lab
                        </h4>
                        <h1 className="font-display text-5xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                            Domina la<br /><span className="text-primary italic">cabina</span>
                        </h1>
                        <p className="font-body text-gray-300 text-lg lg:text-xl mb-12 leading-relaxed max-w-2xl">
                            Formación profesional en el corazón de la Ribera Navarra. Aprende con tecnología de vanguardia en un entorno de club real.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a
                                href="#cursos"
                                className="bg-primary hover:bg-primary-dark text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 shadow-2xl inline-flex items-center gap-4 group"
                            >
                                Explorar Cursos
                                <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">expand_more</span>
                            </a>
                            <a
                                href="#contacto"
                                className="glass-effect-white text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 border border-white/20 hover:bg-white/10 inline-flex items-center gap-4"
                            >
                                Más información
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 lg:py-32 bg-surface-light dark:bg-surface-dark overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                                Mucho más que mezclar canciones
                            </h2>
                            <p className="font-body text-gray-500 dark:text-gray-400 text-lg mb-10 leading-relaxed">
                                En Frecuenzy DJ Lab no solo enseñamos técnicas; formamos artistas. Nuestro sistema completo te lleva desde los fundamentos básicos hasta el dominio total de la actuación en directo.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-display font-bold text-primary text-3xl mb-2">100%</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Práctico</p>
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-primary text-3xl mb-2">Pro</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Equipamiento</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500 scale-95 opacity-50"></div>
                            <img
                                src="/images/venue_interior.png"
                                alt="Formación DJ"
                                className="rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cursos Grid */}
            <section id="cursos" className="py-24 lg:py-32 bg-background-light dark:bg-background-dark relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Programas de Formación</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                        <p className="font-body text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            Elige el pack que mejor se adapte a tus objetivos. Desde iniciación hasta profesionalización.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packs.map((pack, i) => (
                            <div
                                key={i}
                                className={`relative p-10 rounded-3xl border transition-all duration-500 hover:scale-[1.02] cursor-default flex flex-col h-full
                  ${pack.popular
                                        ? 'bg-surface-dark border-primary shadow-2xl text-white'
                                        : 'bg-white dark:bg-surface-dark border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white'
                                    }`}
                            >
                                {pack.popular && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full">
                                        El más recomendado
                                    </span>
                                )}
                                <div className="mb-8">
                                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${pack.popular ? 'text-primary' : 'text-primary'}`}>{pack.level}</p>
                                    <h3 className="font-display text-3xl font-bold">{pack.title}</h3>
                                </div>
                                <div className={`text-4xl font-display font-bold mb-8 ${pack.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                    {pack.duration}
                                </div>
                                <ul className="space-y-4 mb-12 flex-grow">
                                    {pack.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <span className={`material-symbols-outlined text-sm ${pack.popular ? 'text-primary' : 'text-primary'}`}>check_circle</span>
                                            <span className={`font-body text-sm ${pack.popular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#contacto"
                                    className={`block py-4 text-center rounded-xl font-bold transition-all duration-300 uppercase tracking-widest text-xs
                    ${pack.popular
                                            ? 'bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/20'
                                            : 'border border-primary text-primary hover:bg-primary hover:text-white'
                                        }`}
                                >
                                    Solicitar Plaza
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment Section */}
            <section className="py-24 bg-surface-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#CBA16F 1px, transparent 1px), linear-gradient(90deg, #CBA16F 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-8 leading-tight">Estándar Industrial de Vanguardia</h2>
                            <p className="font-body text-gray-400 text-lg mb-12 leading-relaxed">
                                Para ser el mejor, tienes que formarte con lo mejor. Nuestra cabina está equipada con el estándar de los grandes festivales y clubs internacionales.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {equipment.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                                        <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                                        <span className="font-display font-semibold text-gray-200 tracking-wide">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img src="/images/gallery_1.png" className="rounded-2xl h-48 w-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" alt=" Booth 1" />
                                <img src="/images/wedding_setup.png" className="rounded-2xl h-64 w-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" alt="Booth 2" />
                            </div>
                            <div className="space-y-4 pt-12">
                                <img src="/images/corporate_event.png" className="rounded-2xl h-64 w-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" alt="Booth 3" />
                                <img src="/images/venue_interior.png" className="rounded-2xl h-48 w-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" alt="Booth 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <div id="contacto" className="py-24 lg:py-32 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">¿Preparado para empezar?</h2>
                        <p className="font-body text-gray-500 dark:text-gray-400 text-lg">
                            Reserva tu sesión informativa o solicita más detalles sobre nuestros packs de formación.
                        </p>
                    </div>
                    <ContactForm segment="dj" />
                </div>
            </div>

            <Footer />
        </div>
    )
}
