// ============================================================
// App.jsx — Landing page "Auditan.do" (Hub central)
// Conecta los ecosistemas de diagnóstico (sa.auditan.do),
// formación (academia.auditan.do) y consultoría
// (auditoriainteligente.com).
// ============================================================

import { useEffect, useState } from 'react'

// --- Ecosistemas -------------------------------------------------
const DIAGNOSTICO_URL = 'https://sa.auditan.do'
const ACADEMIA_LOGIN_URL = 'https://academia.auditan.do/login'
const ACADEMIA_URL = 'https://academia.auditan.do'
const FIRMA_URL = 'https://www.auditoriainteligente.com'
const WORDPRESS_API =
  'https://www.auditoriainteligente.com/wp-json/wp/v2/posts?per_page=3&_embed'

/**
 * 1. Navegación Superior — fondo oscuro (slate-900)
 */
function Navigation() {
  return (
    <header className="bg-slate-900">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Nombre */}
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 font-montserrat text-lg font-bold text-white">
            A
          </span>
          <span className="font-montserrat text-xl font-bold tracking-tight text-white">
            Academia AICS
          </span>
        </a>

        {/* Enlaces + CTA */}
        <div className="flex items-center gap-6">
          <a
            href={FIRMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-white sm:block"
          >
            Firma Consultora
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
 * 2. Hero Section — mandato normativo + CTA al diagnóstico
 */
function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-800">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Lo que exigen las nuevas Normas Globales
        </span>

        {/* Titular */}
        <h1 className="mx-auto mt-8 max-w-4xl font-montserrat text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          El aseguramiento moderno exige agilidad y datos, no solo cumplimiento.
        </h1>

        {/* Párrafo que normaliza el uso de tecnología */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
          Entendemos que transformar un departamento de auditoría tradicional
          parece una tarea monumental. Nosotros en la profesión solemos
          complicar lo que debería ser ágil. ¿Cómo iniciamos la transformación?
          Midiendo exactamente dónde estamos parados hoy.
        </p>

        {/* CTA primario → Diagnóstico */}
        <div className="mt-10">
          <a
            href={DIAGNOSTICO_URL}
            className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 px-8 py-4 font-montserrat text-base font-bold text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Realizar Diagnóstico Gratuito (2 min)
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * 3. Puente hacia la Academia — del diagnóstico a la ejecución
 */
function Academia() {
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
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Del diagnóstico a la ejecución
          </span>
          <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pase del diagnóstico a la ejecución en la Academia AICS
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Una vez que sabes dónde estás, el siguiente paso es avanzar. La
            Academia AICS te acompaña de la medición a la ejecución con
            contenido práctico y orientado a resultados.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {beneficios.map((beneficio) => (
            <div
              key={beneficio.titulo}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
            >
              <span className="block h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400" />
              <h3 className="mt-6 font-montserrat text-xl font-bold text-slate-900">
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
            className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-montserrat text-sm font-bold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
          >
            Explorar la Academia AICS
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * 4. Insights de Auditoría Inteligente — artículos recientes (WordPress)
 */
function Insights() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchPosts() {
      try {
        const res = await fetch(WORDPRESS_API, { signal: controller.signal })
        if (!res.ok) throw new Error(`Error ${res.status}`)
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        if (err.name !== 'AbortError') setError('No pudimos cargar los artículos.')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    fetchPosts()
    return () => controller.abort()
  }, [])

  // Limpia el HTML del extracto de WordPress
  const cleanExcerpt = (html) =>
    html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&#8211;|&#8212;/g, '-')
      .replace(/&#8217;|&#8216;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim()

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
            Desde la firma
          </span>
          <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Insights de Auditoría Inteligente
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Artículos y perspectivas de la firma consultora para mantenerte al
            día en aseguramiento moderno.
          </p>
        </div>

        {/* Estado de carga */}
        {loading && (
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl border border-slate-200 bg-white p-8"
              >
                <div className="h-4 w-3/4 rounded bg-slate-200" />
                <div className="mt-4 h-3 w-full rounded bg-slate-200" />
                <div className="mt-2 h-3 w-5/6 rounded bg-slate-200" />
                <div className="mt-6 h-8 w-24 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        )}

        {/* Estado de error */}
        {!loading && error && (
          <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-slate-600">{error}</p>
            <a
              href={FIRMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-montserrat text-sm font-bold text-blue-600 hover:underline"
            >
              Visitar la firma consultora
            </a>
          </div>
        )}

        {/* Grid de artículos */}
        {!loading && !error && (
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3
                  className="font-montserrat text-lg font-bold leading-snug text-slate-900"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                  {cleanExcerpt(post.excerpt.rendered)}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-montserrat text-sm font-bold text-blue-600 hover:underline"
                >
                  Leer más →
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/**
 * 5. Pie de Página — enlaces a la matriz
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
              href={FIRMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Firma Consultora
            </a>
            <a
              href={ACADEMIA_URL}
              className="transition-colors hover:text-white"
            >
              Academia AICS
            </a>
            <a
              href={DIAGNOSTICO_URL}
              className="transition-colors hover:text-white"
            >
              Diagnóstico
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
        <Academia />
        <Insights />
      </main>
      <Footer />
    </>
  )
}

export default App
