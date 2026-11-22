import { useEffect } from 'react'
import { useLang } from '../lang.js'

// A barra fixa do celular: o kit a mostra só depois que o botão do hero sai da tela.
export default function ActionBar() {
  const { t } = useLang()
  useEffect(() => {
    document.getElementById('bar-root')?.setAttribute('aria-label', t.nav.quick)
  }, [t])
  return (
    <a className="btn btn--primary" href="#contato">
      {t.nav.action}
    </a>
  )
}
