import { useLang } from '../lang.js'
import { LINKS } from '../content.js'

const Arrow = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
)

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const items = t.projects.items
  return (
    <>
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">{f.h2}</h2>
            <p>{f.line}</p>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href="#contato">
            {t.nav.action}
            <Arrow />
          </a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo" href="#top">
                <span className="mark" data-mark="ring" aria-hidden="true"></span>
                Kauet Martins
              </a>
              <p className="footer__lede">{f.lede}</p>
            </div>
            <div className="span-2 footer__col">
              <h3>{f.colNav}</h3>
              <ul>
                <li><a href="#sobre">{t.nav.about}</a></li>
                <li><a href="#projetos">{t.nav.projects}</a></li>
                <li><a href="#contato">{t.nav.contact}</a></li>
              </ul>
            </div>
            <div className="span-3 footer__col">
              <h3>{f.colProjects}</h3>
              <ul>
                <li><a href="#finanai">{items.finanai.name}</a></li>
                <li><a href="#trilhas">{items.trilhas.name}</a></li>
                <li><a href="#faturas">{items.faturas.name}</a></li>
                <li><a href="#shopee">{items.shopee.name}</a></li>
              </ul>
            </div>
            <div className="span-3 footer__col">
              <h3>{f.colLinks}</h3>
              <ul>
                <li><a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href={`mailto:${LINKS.email()}`}>{t.contact.links.email}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {new Date().getFullYear()} Kauet Martins</span>
            <span>{f.rights}</span>
          </div>
        </div>
      </div>
    </>
  )
}
