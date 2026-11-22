import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import ActionBar from './components/ActionBar.jsx'

// O kit de design espera header.nav, main, footer.closing e nav.actionbar como filhos diretos do body.
// Por isso cada um tem a sua raiz do React, e todos leem o idioma da mesma store (lang.js).
const mount = (id, element) => {
  createRoot(document.getElementById(id)).render(<StrictMode>{element}</StrictMode>)
}

mount('nav-root', <Navbar />)
mount('top', <Main />)
mount('rodape', <Footer />)
mount('bar-root', <ActionBar />)
