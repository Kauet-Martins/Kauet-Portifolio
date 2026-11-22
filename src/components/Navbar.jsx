import { useEffect, useState } from 'react'
import { useLang, asset } from '../lang.js'

// Seção na tela -> palavra do menu que fica marcada (o kit sublinha aria-current="page").
const SPY = { sobre: 'sobre', projetos: 'projetos', automacoes: 'projetos', contato: 'contato' }

function useScrollSpy() {
  const [current, setCurrent] = useState(null)
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.4
      let found = null
      for (const id of Object.keys(SPY)) {
        const el = document.getElementById(id)
        if (!el) continue
        const r = el.getBoundingClientRect()
        if (r.top <= line && r.bottom > line) found = SPY[id]
      }
      setCurrent(found)
    }
    update()
    const first = setTimeout(update, 400)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      clearTimeout(first)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return current
}

const PROJECT_LINKS = [
  ['finanai', '#finanai', 'React, TypeScript, Firebase'],
  ['trilhas', '#trilhas', 'HTML, CSS, JavaScript'],
  ['faturas', '#faturas', 'Python, PyMuPDF, openpyxl'],
  ['shopee', '#shopee', 'Python, Selenium, Tkinter'],
]

export default function Navbar() {
  const { lang, t, setLang } = useLang()
  const projects = t.projects.items
  const current = useScrollSpy()
  const mark = (key) => (current === key ? 'page' : undefined)

  return (
    <>
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          {t.skip}
        </a>
        <a className="nav__logo" href="#top">
          <span className="mark" data-mark="ring" aria-hidden="true"></span>
          Kauet Martins
        </a>
        <nav className="nav__links" aria-label={t.nav.label}>
          <div className="nav__item">
            <a className="nav__link" href="#sobre" aria-current={mark('sobre')}>
              {t.nav.about}
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#projetos" aria-current={mark('projetos')}>
              {t.nav.projects}
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-6">
                  <p className="t-label">{t.nav.projects}</p>
                  {PROJECT_LINKS.map(([key, href, stack]) => (
                    <a key={key} href={href}>
                      {projects[key].name}
                      <span>{stack}</span>
                    </a>
                  ))}
                </div>
                <a className="menu-card span-3 start-10" href="#trilhas">
                  <div className="panel">
                    <img loading="lazy" decoding="async" width="1280" height="800" className="frame__img" src={asset('img/trilhas-inova.png')} alt={projects.trilhas.alt} />
                  </div>
                  <span className="t-card">{projects.trilhas.name}</span>
                  <span className="t-small muted">{t.projects.collab}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#contato" aria-current={mark('contato')}>
              {t.nav.contact}
            </a>
          </div>
        </nav>
        <div className="nav__actions">
          <button
            type="button"
            className="nav__link lang-switch"
            lang={lang === 'pt' ? 'en' : 'pt'}
            aria-label={t.nav.switchTo}
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          >
            {t.nav.switchLabel}
          </button>
          <a className="btn btn--primary" href="#contato">
            {t.nav.action}
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label={t.nav.menu}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  )
}
