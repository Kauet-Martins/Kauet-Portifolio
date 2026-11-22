import { useSyncExternalStore } from 'react'
import { content, detectLang } from './content.js'

let current = detectLang()
const listeners = new Set()

export const setLang = (next) => {
  if (next === current) return
  current = next
  listeners.forEach((l) => l())
}

const subscribe = (l) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export function useLang() {
  const lang = useSyncExternalStore(subscribe, () => current)
  return { lang, t: content[lang], setLang }
}

// Caminho de um arquivo em public/, respeitando o base do Vite.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
