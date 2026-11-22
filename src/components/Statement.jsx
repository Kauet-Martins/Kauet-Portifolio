import { useLang } from '../lang.js'

// Momento "word-highlight": o kit troca o texto por palavras que ganham tinta ao rolar.
// A chave por idioma remonta o parágrafo, então o React nunca mexe em nós que o kit alterou.
export default function Statement() {
  const { lang, t } = useLang()
  return (
    <section className="section statement" id="trabalho" data-moment="word-highlight" aria-label={t.statement.label}>
      <div className="wrap">
        <p className="t-label">{t.statement.label}</p>
        <p key={lang} className="mo-wh__text" dangerouslySetInnerHTML={{ __html: t.statement.text }} />
      </div>
    </section>
  )
}
