# Portfólio de Kauet Martins

Site pessoal com meus projetos, formação e contato, em português e inglês.

**Ao vivo:** https://kauet-martins.github.io/Kauet-Portifolio/

## O que tem

- Hero, trabalho atual, formação e tecnologias, projetos, contato e rodapé.
- Português e inglês. O idioma inicial segue o navegador; o botão `EN` / `PT` troca e lembra a escolha. `?lang=en` ou `?lang=pt` na URL força um idioma.
- Menu com marcação da seção atual e menu em tela cheia no celular.
- Formulário de contato com validação por campo e envio pelo EmailJS, sem `alert()`.
- Respeita `prefers-reduced-motion`. Sem tela de carregamento.

## Tecnologias

React 19, Vite 6 e o kit de CSS/JS da skill de design *Taste* (copiado em `public/assets`). Envio de e-mail com `emailjs-com`.

## Como rodar

```bash
npm ci
npm run dev      # servidor de desenvolvimento
npm run build    # gera a pasta dist
npm run preview  # serve o build localmente
npm run lint
```

## Onde mexer

| O que | Onde |
| --- | --- |
| Todos os textos (PT e EN), links e a lista de tecnologias | `src/content.js` |
| Seções | `src/components/` (`Hero`, `Statement`, `About`, `Projects`, `Contact`, `Footer`) |
| CSS só desta página | `src/index.css` |
| Cores, fontes e metadados | `index.html` (bloco `:root` e `<head>`) |
| Imagens e ícones | `public/img` e `public/assets/icons` |

O React tem quatro raízes (`header`, `main`, `footer` e a barra de ação do celular), definidas em `index.html` e `src/main.jsx`. O kit lê esses quatro elementos como filhos diretos do `body`, e todos usam o mesmo idioma por `src/lang.js`.

## Formulário de contato

O envio usa o EmailJS. As chaves podem vir de variáveis de ambiente, em um arquivo `.env`:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Sem o `.env`, o site usa os valores padrão que já estão em `src/components/Contact.jsx`. São valores públicos: o EmailJS roda no navegador e a chave pública não é segredo. O template recebe os campos `name`, `email` e `message`.

## Publicar

```bash
npm run deploy   # build e envio da pasta dist para a branch gh-pages
```

O `base` do Vite é `/Kauet-Portifolio/` (`vite.config.js`).
