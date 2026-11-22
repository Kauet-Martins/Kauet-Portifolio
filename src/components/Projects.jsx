import { useLang, asset } from '../lang.js'
import { LINKS } from '../content.js'

const ExtLink = ({ href, children }) => (
  <a className="link" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

const Tile = ({ id, name }) => (
  <span className="ic-tile ic-tile--72">
    <img loading="lazy" decoding="async" width="72" height="72" className="ic" src={asset(`assets/icons/${id}.svg`)} alt={name} />
  </span>
)

// Fluxo das faturas: rótulos neutros, valem nos dois idiomas.
const FLOW = [
  { icon: 'ui-mail', name: 'E-mail', sub: 'IMAP' },
  { icon: 'pdf', name: 'PDF', sub: 'PyMuPDF' },
  { icon: 'xlsx', name: 'XLSX', sub: 'openpyxl' },
]

const FlowArrow = () => (
  <svg className="flow__arrow" viewBox="0 0 24 12" aria-hidden="true">
    <path d="M1 6h20M16 1.5 21.5 6 16 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Flow = ({ label }) => (
  <div className="flow" role="img" aria-label={label}>
    {FLOW.map((n, i) => (
      <div className="flow__item" key={n.name} aria-hidden="true">
        {i > 0 && <FlowArrow />}
        <div className="flow__node">
          <span className="ic-tile ic-tile--72">
            <img loading="lazy" decoding="async" width="72" height="72" className="ic" src={asset(`assets/icons/${n.icon}.svg`)} alt="" />
          </span>
          <span className="flow__name">{n.name}</span>
          <span className="flow__sub">{n.sub}</span>
        </div>
      </div>
    ))}
  </div>
)

function Card({ id, label, title, text, panelClass, picture, children, links }) {
  // picture: descrição do painel desenhado com ícones (role="img"); um painel com foto real usa o alt da própria imagem
  const pic = picture ? { role: 'img', 'aria-label': picture } : {}
  return (
    <article className="card card--row card--open span-6" id={id}>
      <p className="t-label muted">{label}</p>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className={`panel ${panelClass}`} {...pic}>
        {children}
      </div>
      {links && <p className="card__links">{links}</p>}
    </article>
  )
}

export default function Projects() {
  const { t } = useLang()
  const p = t.projects
  const it = p.items

  return (
    <>
      <section className="section projects-section" id="projetos" aria-labelledby="projetos-h" style={{ "--hm": 2 }}>
        <div className="wrap">
          <div className="section-head">
            <h2 id="projetos-h">
              {p.h2} <span className="muted">{p.muted}</span>
            </h2>
          </div>
          <div className="grid">
            <Card id="finanai" label={p.private} title={it.finanai.title} text={it.finanai.body} panelClass="panel--tiles" picture="React, TypeScript, Vite, Firebase, Vitest, Playwright">
              <div className="tiles">
                <Tile id="react" name="React" />
                <Tile id="typescript" name="TypeScript" />
                <Tile id="vitejs" name="Vite" />
                <Tile id="firebase" name="Firebase" />
                <Tile id="vitest" name="Vitest" />
                <Tile id="playwright" name="Playwright" />
              </div>
            </Card>
            <Card
              id="trilhas"
              label={p.collab}
              title={it.trilhas.title}
              text={it.trilhas.body}
              panelClass="panel--shot"
              links={
                <>
                  <ExtLink href={LINKS.trilhasDemo}>{it.trilhas.demo}</ExtLink>
                  <ExtLink href={LINKS.trilhasRepo}>{it.trilhas.repo}</ExtLink>
                </>
              }
            >
              <img loading="lazy" decoding="async" width="1280" height="800" className="frame__img" src={asset('img/trilhas-inova.png')} alt={it.trilhas.alt} />
            </Card>
          </div>
        </div>
      </section>
      <section className="section projects-section ground-inverse" id="automacoes" aria-labelledby="automacoes-h" style={{ "--hm": 2 }}>
        <div className="wrap">
          <div className="section-head">
            <h2 id="automacoes-h">
              {p.h2b} <span className="muted">{p.mutedb}</span>
            </h2>
          </div>
          <div className="grid">
            <Card
              id="faturas"
              label="Python"
              title={it.faturas.title}
              text={it.faturas.body}
              panelClass="panel--flow"
              picture={it.faturas.alt}
              links={
                <>
                  <ExtLink href={LINKS.faturasDownload}>{it.faturas.download}</ExtLink>
                  <ExtLink href={LINKS.faturasProcess}>{it.faturas.process}</ExtLink>
                </>
              }
            >
              <Flow label={it.faturas.alt} />
            </Card>
            <Card
              id="shopee"
              label="Python"
              title={it.shopee.title}
              text={it.shopee.body}
              panelClass="panel--tiles"
              picture="Python, Selenium"
              links={<ExtLink href={LINKS.shopee}>{it.shopee.repo}</ExtLink>}
            >
              <div className="tiles">
                <Tile id="python" name="Python" />
                <Tile id="selenium" name="Selenium" />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
