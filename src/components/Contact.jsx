import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { useLang, asset } from '../lang.js'
import { LINKS } from '../content.js'

// Valores públicos do EmailJS (ficam no navegador por natureza). O .env, se existir, tem prioridade.
const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_p3fes1b'
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_zka623d'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'c7l8end-0NSY86NSe'

const Icon = ({ id, ink }) => (
  <span className="ic-tile ic-tile--40">
    <img loading="lazy" decoding="async" width="40" height="40" className={`ic ${ink ? 'ic-ink' : ''}`} src={asset(`assets/icons/${id}.svg`)} alt="" />
  </span>
)

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const f = c.form
  const status = useRef(null)
  const email = LINKS.email()

  const say = (text) => {
    if (status.current) status.current.textContent = text
  }

  // A validação e os erros por campo vêm do kit (system.js). Se algo falhou, ele já cancelou o envio.
  const onSubmit = async (e) => {
    if (e.nativeEvent.defaultPrevented) return
    e.preventDefault()
    const form = e.currentTarget
    const button = form.querySelector('[type="submit"]')
    const wait = setTimeout(() => say(f.sending), 300)
    button.disabled = true
    button.setAttribute('aria-busy', 'true')
    try {
      await emailjs.sendForm(SERVICE, TEMPLATE, form, PUBLIC_KEY)
      clearTimeout(wait)
      form.reset()
      say(f.sent)
    } catch {
      clearTimeout(wait)
      say(f.failed)
    } finally {
      button.disabled = false
      button.removeAttribute('aria-busy')
    }
  }

  return (
    <section className="section" id="contato" aria-labelledby="contato-h" style={{ "--hm": 2 }}>
      <div className="wrap">
        <div className="section-head">
          <h2 id="contato-h">
            {c.h2} <span className="muted">{c.muted}</span>
          </h2>
        </div>
        <div className="grid grid--top">
          <ul className="rows span-5">
            <li>
              <span className="rows__name">{c.links.email}</span>
              <span className="rows__value rows__value--icon">
                <Icon id="gmail" />
                <a className="link" href={`mailto:${email}`}>
                  {email}
                </a>
              </span>
            </li>
            <li>
              <span className="rows__name">{c.links.github}</span>
              <span className="rows__value rows__value--icon">
                <Icon id="github" ink />
                <a className="link" href={LINKS.github} target="_blank" rel="noopener noreferrer">
                  Kauet-Martins
                </a>
              </span>
            </li>
            <li>
              <span className="rows__name">{c.links.linkedin}</span>
              <span className="rows__value rows__value--icon">
                <Icon id="linkedin" />
                <a className="link" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  kauet-martins
                </a>
              </span>
            </li>
          </ul>
          <div className="span-6 start-7 contact-panel">
            <form className="form" onSubmit={onSubmit} data-fix={f.fix} noValidate>
              <div className="field">
                <label htmlFor="c-name">{f.name}</label>
                <input id="c-name" name="name" type="text" autoComplete="name" required aria-describedby="c-name-err" />
                <p className="field__error" id="c-name-err" data-text={f.errName} hidden>
                  {f.errName}
                </p>
              </div>
              <div className="field">
                <label htmlFor="c-email">{f.email}</label>
                <input id="c-email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby="c-email-err" />
                <p className="field__error" id="c-email-err" data-text={f.errEmail} hidden>
                  {f.errEmail}
                </p>
              </div>
              <div className="field field--full">
                <label htmlFor="c-message">{f.message}</label>
                <textarea id="c-message" name="message" rows="5" required aria-describedby="c-message-err"></textarea>
                <p className="field__error" id="c-message-err" data-text={f.errMessage} hidden>
                  {f.errMessage}
                </p>
              </div>
              <div className="btn-row">
                <button className="btn btn--primary" type="submit">
                  {f.submit}
                </button>
              </div>
              <p className="form__status" role="status" data-form-status ref={status}></p>
              <p className="t-small muted">{f.note}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
