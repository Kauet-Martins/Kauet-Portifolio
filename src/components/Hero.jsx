import { useLang } from '../lang.js'

const Arrow = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
)

// A tela do FinanAI aparece sempre em português: é a interface do produto, não texto do site.
function FinanChat({ chat }) {
  return (
    <div className="ui ui-panel ui-chat hero-chat" data-ui="chat" role="img" aria-label={`${chat.app}: ${chat.exchanges.map((e) => e.me).join('; ')}`}>
      <div className="ui-head">
        <span className="ui-agent" aria-hidden="true"></span>
        <div className="ui-title">{chat.app}</div>
        <span className="ui-spacer"></span>
      </div>
      <div className="ui-chat__body" aria-hidden="true">
        <div className="ui-chat__day">{chat.day}</div>
        {chat.exchanges.map((e) => (
          <div key={e.me} className="hero-chat__pair">
            <div className="ui-msg ui-msg--me">
              <span className="ui-msg__text">{e.me}</span>
            </div>
            <div className="ui-msg ui-msg--bot">
              <span className="ui-agent ui-msg__av"></span>
              <span className="ui-msg__col">
                <span className="ui-chat__answer" dangerouslySetInnerHTML={{ __html: e.bot }} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="ui-chat__input" aria-hidden="true">
        <span className="ui-chat__ph">{chat.placeholder}</span>
        <span className="ui-chat__send">
          <svg viewBox="0 0 16 16" width="14" height="14">
            <path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  return (
    <section className="hero hero--split" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <p className="hero__kicker">
              <span className="dot" aria-hidden="true"></span>
              {h.notice}
            </p>
            <h1 id="hero-h">{h.h1}</h1>
            <p className="hero__lead">{h.lead}</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#contato">
                {h.primary}
                <Arrow />
              </a>
              <a className="btn btn--secondary" href="#projetos">
                {h.secondary}
              </a>
            </div>
          </div>
          <div className="hero__media hero__media--ui span-6 start-7">
            <FinanChat chat={h.chat} />
          </div>
        </div>
      </div>
    </section>
  )
}
