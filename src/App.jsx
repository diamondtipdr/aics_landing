// ============================================================
// App.jsx — Landing page "Auditan.do"
// Fachada comercial que capta prospectos y los redirige a la
// academia Moodle (academia.auditan.do).
// ============================================================

import AICSLeadMagnet from './components/AICSLeadMagnet'

const ACADEMIA_LOGIN_URL = 'https://academia.auditan.do/login'
const ACADEMIA_URL = 'https://academia.auditan.do'

/**
 * 1. Navegación Superior — menú oscuro (slate-900)
 */
function Navigation() {
  return (
    <header className="bg-slate-900">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 font-display text-lg font-extrabold text-white">
            A
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Auditan.do
          </span>
        </a>

        {/* Enlaces + CTA */}
        <div className="flex items-center gap-6">
          <a
            href={ACADEMIA_URL}
            className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-white sm:block"
          >
            Auditoría Inteligente
          </a>
          <a
            href={ACADEMIA_LOGIN_URL}
            className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-400"
          >
            Acceso a la Academia
          </a>
        </div>
      </nav>
    </header>
  )
}

/**
 * 2. Hero Section — mandato normativo y normalización
 */
function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          Lo que exigen las nuevas Normas Globales
        </span>

        {/* Titular */}
        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          El aseguramiento moderno exige agilidad y datos, no solo cumplimiento.
        </h1>

        {/* Párrafo que baja las barreras técnicas */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
          Entendemos que transformar un departamento de auditoría tradicional
          parece una tarea monumental. Nosotros en la profesión solemos
          complicar lo que debería ser ágil. ¿Cómo iniciamos la transformación?
          Midiendo exactamente dónde estamos parados hoy.
        </p>
      </div>
    </section>
  )
}

/**
 * 3. El Primer Paso Gratuito — Lead Magnet (Autoevaluación de Madurez AICS)
 */
function LeadMagnet() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
            Primer paso, gratis
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Autoevaluación de Madurez AICS
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Conoce, en minutos, el punto de partida exacto de tu departamento
            de auditoría. Sin formularios interminables y sin compromiso.
          </p>
        </div>

        {/* Lead Magnet de Autoevaluación de Madurez AICS
            (componente importado desde ./components/AICSLeadMagnet) */}
        <AICSLeadMagnet />
      </div>
    </section>
  )
}

/**
 * 4. El Producto — Puente hacia Moodle
 */
function Product() {
  const beneficios = [
    {
      titulo: 'Rutas asíncronas',
      descripcion:
        'Avanza a tu ritmo con un itinerario de aprendizaje diseñado para profesionales en activo.',
    },
    {
      titulo: 'Plantillas prácticas',
      descripcion:
        'Baja a tierra la teoría con documentos y formatos listos para aplicar en tu día a día.',
    },
    {
      titulo: 'Enfoque anti-dogmático',
      descripcion:
        'Métodos flexibles y sin dogmas, centrados en lo que funciona en la práctica real.',
    },
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
            Del diagnóstico a la ejecución
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Convierte el diagnóstico en un plan de acción
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Una vez que sabes dónde estás, el siguiente paso es avanzar. Nuestra
            academia te acompaña de la medición a la ejecución con contenido
            práctico y orientado a resultados.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {beneficios.map((beneficio) => (
            <div
              key={beneficio.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="block h-10 w-10 rounded-lg bg-teal-100" />
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {beneficio.titulo}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={ACADEMIA_URL}
            className="inline-block rounded-lg border-2 border-teal-500 px-6 py-3 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-500 hover:text-white"
          >
            Explorar el Curso de Fundamentos
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * 5. Footer Simple
 */
function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Auditan.do. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a
              href={ACADEMIA_URL}
              className="transition-colors hover:text-white"
            >
              Academia
            </a>
            <a
              href={ACADEMIA_LOGIN_URL}
              className="transition-colors hover:text-white"
            >
              Acceso
            </a>
            <a href="/" className="transition-colors hover:text-white">
              Auditoría Inteligente
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LeadMagnet />
        <Product />
      </main>
      <Footer />
    </>
  )
}

export default App
