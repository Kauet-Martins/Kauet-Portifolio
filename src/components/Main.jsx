import { useEffect } from 'react'
import { useLang, asset } from '../lang.js'
import Hero from './Hero.jsx'
import Statement from './Statement.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

// O kit (assets/*.js) liga menu, scrollspy, animações e momentos lendo o DOM uma vez.
// Carrega quando as quatro raízes já pintaram.
const KIT = ['system.js', 'motion/motion.js', 'layout/layout.js']
const ROOTS = ['nav-root', 'top', 'rodape', 'bar-root']

function loadKit() {
  if (window.__kitLoaded) return
  window.__kitLoaded = true
  KIT.forEach((file) => {
    const s = document.createElement('script')
    s.type = 'module'
    s.src = asset(`assets/${file}`)
    document.body.appendChild(s)
  })
}

function whenPainted(done, tries = 0) {
  const ready = ROOTS.every((id) => document.getElementById(id)?.childElementCount > 0)
  if (ready || tries > 120) done()
  else requestAnimationFrame(() => whenPainted(done, tries + 1))
}

export default function Main() {
  const { lang, t } = useLang()

  useEffect(() => {
    document.documentElement.lang = t.lang
    document.title = t.title
    const set = (selector, val) => document.querySelector(selector)?.setAttribute('content', val)
    set('meta[name="description"]', t.description)
    set('meta[property="og:title"]', t.title)
    set('meta[property="og:description"]', t.description)
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // armazenamento bloqueado: a escolha vale só nesta visita
    }
  }, [lang, t])

  useEffect(() => {
    whenPainted(loadKit)
  }, [])

  return (
    <>
      <Hero />
      <Statement />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
