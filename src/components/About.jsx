import { useLang, asset } from '../lang.js'
import { TECH } from '../content.js'

export default function About() {
  const { t } = useLang()
  const a = t.about
  return (
    <section className="section" id="sobre" aria-labelledby="sobre-h" style={{ "--hm": 2 }}>
      <div className="wrap">
        <div className="section-head">
          <h2 id="sobre-h">
            {a.h2} <span className="muted">{a.muted}</span>
          </h2>
        </div>
        <div className="grid grid--top">
          <ul className="rows span-5">
            {a.rows.map(([name, place, when]) => (
              <li key={name}>
                <span className="rows__name">
                  {name}
                  <small>{place}</small>
                </span>
                <span className="rows__value">{when}</span>
              </li>
            ))}
          </ul>
          <div className="span-6 start-7 tech-panel" role="img" aria-label={`${a.techLabel}: ${TECH.map((x) => x.name).join(', ')}`}>
            <ul className="tech-grid" aria-hidden="true">
              {TECH.map((tech) => (
                <li key={tech.id} className="tech-cell">
                  <span className="ic-tile ic-tile--72">
                    <img loading="lazy" decoding="async" width="72" height="72" className={`ic ${tech.id === 'github' ? 'ic-ink' : ''}`} src={asset(`assets/icons/${tech.id}.svg`)} alt="" />
                  </span>
                  <span className="tech-cell__name">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
