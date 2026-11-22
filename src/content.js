// Todo o texto do site, em português e inglês.
// Fatos verificados: formação (Unesc, 2022-2024), curso OneBitCode, Prefeitura de Araranguá desde 2021
// e os quatro projetos. Nada aqui é inventado: o que não se sabe fica de fora.

export const LINKS = {
  github: 'https://github.com/Kauet-Martins',
  linkedin: 'https://www.linkedin.com/in/kauet-martins/',
  // o e-mail é montado em tempo de execução para não aparecer inteiro no HTML
  email: () => ['kauetdamotta', 'gmail.com'].join('@'),
  trilhasDemo: 'https://inscricao-ivory.vercel.app',
  trilhasRepo: 'https://github.com/Kauet-Martins/FormularioDeInscricao',
  faturasDownload: 'https://github.com/Kauet-Martins/downloadFaturas',
  faturasProcess: 'https://github.com/Kauet-Martins/processamentoFatura',
  shopee: 'https://github.com/Kauet-Martins/ShopeeBot',
}

export const TECH = [
  { id: 'react', name: 'React', uses: ['FinanAI', '@site'] },
  { id: 'typescript', name: 'TypeScript', uses: ['FinanAI'] },
  { id: 'javascript', name: 'JavaScript', uses: ['Trilhas Inova'] },
  { id: 'python', name: 'Python', uses: ['Faturas', 'ShopeeBot'] },
  { id: 'html', name: 'HTML', uses: ['Trilhas Inova'] },
  { id: 'css', name: 'CSS', uses: ['Trilhas Inova'] },
  { id: 'vitejs', name: 'Vite', uses: ['FinanAI', '@site'] },
  { id: 'firebase', name: 'Firebase', uses: ['FinanAI'] },
  { id: 'selenium', name: 'Selenium', uses: ['ShopeeBot'] },
  { id: 'playwright', name: 'Playwright', uses: ['FinanAI'] },
  { id: 'git', name: 'Git', uses: [] },
  { id: 'github', name: 'GitHub', uses: [] },
]

const pt = {
  lang: 'pt-BR',
  title: 'Kauet Martins: desenvolvedor web com React, TypeScript e Python',
  description:
    'Portfólio de Kauet Martins, formado em Análise e Desenvolvimento de Sistemas. Aplicações web, automações em Python e sistemas públicos na Prefeitura de Araranguá.',
  skip: 'Ir para o conteúdo',
  nav: {
    label: 'Principal',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
    action: 'Enviar mensagem',
    menu: 'Menu',
    quick: 'Ações rápidas',
    switchTo: 'Mudar para English',
    switchLabel: 'EN',
  },
  hero: {
    notice: 'Na Prefeitura de Araranguá desde 2021',
    h1: 'Desenvolvedor web com React e Python',
    lead: 'Formado em Análise e Desenvolvimento de Sistemas pela Unesc. Construo aplicações web e automações, e cuido de sistemas públicos no dia a dia da prefeitura.',
    primary: 'Enviar mensagem',
    secondary: 'Ver projetos',
    facts: [
      ['Formação', 'ADS, Unesc, 2022–2024'],
      ['Curso', 'Full Stack Developer, OneBitCode'],
      ['Trabalho', 'Prefeitura de Araranguá'],
    ],
    chat: {
      app: 'FinanAI',
      day: 'Hoje',
      placeholder: 'Escreva um gasto',
      exchanges: [
        { me: 'hoje gastei 45 no almoço', bot: 'Anotei <b>R$ 45,00</b> em Alimentação, hoje.' },
        { me: 'ontem paguei 120 de luz', bot: 'Anotei <b>R$ 120,00</b> em Moradia, ontem.' },
      ],
    },
  },
  statement: {
    label: 'Trabalho',
    text: 'Desde 2021, na Prefeitura de Araranguá, dou suporte a sistemas públicos e ajudo a melhorá-los. Também treino equipes, faço entrada de dados e escrevo pequenas <strong>automações</strong> que cortam trabalho repetido.',
  },
  about: {
    h2: 'Sobre mim.',
    muted: 'Formação, trabalho e ferramentas.',
    rows: [
      ['Análise e Desenvolvimento de Sistemas', 'Unesc', '2022–2024'],
      ['Full Stack Developer', 'OneBitCode', 'Curso'],
      ['Suporte e melhoria de sistemas', 'Prefeitura de Araranguá', 'Desde 2021'],
    ],
    techLabel: 'Tecnologias dos meus projetos',
    site: 'Este site',
    everywhere: 'Todos os projetos',
  },
  projects: {
    h2: 'Projetos.',
    muted: 'Dois aplicativos web.',
    h2b: 'Automações.',
    mutedb: 'Dois scripts em Python.',
    private: 'Repositório privado',
    collab: 'Em colaboração',
    items: {
      finanai: {
        name: 'FinanAI',
        title: 'FinanAI registra gastos escritos em linguagem natural',
        body: 'PWA de finanças pessoais em português. Você escreve “hoje gastei 45 no almoço” e o app entende no próprio aparelho, sem IA paga. Tem contas, cartões, metas e relatórios.',
      },
      trilhas: {
        name: 'Trilhas Inova',
        title: 'Trilhas Inova recebe inscrições com validação e busca de CEP',
        body: 'Formulário de inscrição feito em colaboração: máscaras, validação, CEP pela ViaCEP, envio de documentos e modo claro e escuro.',
        demo: 'Ver demonstração',
        repo: 'Ver código',
        alt: 'Tela do formulário de inscrição do Programa Trilhas, com campos de nome, data de nascimento e CPF',
      },
      faturas: {
        name: 'Automação de faturas',
        title: 'A automação de faturas lê o e-mail e preenche a planilha',
        body: 'Dois scripts em Python: um baixa os anexos por IMAP; o outro lê a unidade consumidora e o valor total de cada PDF e grava na planilha.',
        download: 'Ver downloadFaturas',
        process: 'Ver processamentoFatura',
        alt: 'Fluxo: e-mail, PDF, planilha',
      },
      shopee: {
        name: 'ShopeeBot',
        title: 'O ShopeeBot automatiza o navegador e exporta CSV',
        body: 'Programa em Python com Selenium e interface Tkinter. Mantém a sessão salva, exporta os dados em CSV e vira executável com PyInstaller.',
        repo: 'Ver código',
      },
    },
  },
  contact: {
    h2: 'Contato.',
    muted: 'Escreva aqui ou use um dos links.',
    links: { email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn' },
    form: {
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      submit: 'Enviar mensagem',
      errName: 'Escreva seu nome.',
      errEmail: 'Escreva um e-mail com @, como nome@exemplo.com.',
      errMessage: 'Escreva sua mensagem.',
      fix: 'Campos para corrigir: {n}.',
      sending: 'Enviando',
      sent: 'Mensagem enviada. Respondo por e-mail.',
      failed: 'Não enviou: a conexão falhou. Seu texto continua aqui; tente de novo.',
      note: 'A mensagem chega no meu e-mail.',
    },
  },
  footer: {
    h2: 'Envie uma mensagem.',
    line: 'Aberto a vagas e projetos de desenvolvimento web.',
    lede: 'Desenvolvedor web formado pela Unesc, na Prefeitura de Araranguá desde 2021.',
    colNav: 'Navegar',
    colProjects: 'Projetos',
    colLinks: 'Links',
    rights: 'Nomes e logotipos pertencem aos seus donos.',
  },
}

const en = {
  lang: 'en',
  title: 'Kauet Martins: web developer with React, TypeScript and Python',
  description:
    'Portfolio of Kauet Martins, a systems analysis and development graduate. Web apps, Python automations and public systems at the Araranguá city hall.',
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    action: 'Send a message',
    menu: 'Menu',
    quick: 'Quick actions',
    switchTo: 'Mudar para português',
    switchLabel: 'PT',
  },
  hero: {
    notice: 'At the Araranguá city hall since 2021',
    h1: 'Web developer with React and Python',
    lead: 'Graduate in Systems Analysis and Development from Unesc. I build web apps and automations, and look after public systems day to day at the city hall.',
    primary: 'Send a message',
    secondary: 'See projects',
    facts: [
      ['Degree', 'ADS, Unesc, 2022–2024'],
      ['Course', 'Full Stack Developer, OneBitCode'],
      ['Work', 'Araranguá city hall'],
    ],
    chat: pt.hero.chat,
  },
  statement: {
    label: 'Work',
    text: 'Since 2021, at the Araranguá city hall, I support public systems and help improve them. I also train teams, enter data and write small <strong>automations</strong> that cut repeated work.',
  },
  about: {
    h2: 'About me.',
    muted: 'Education, work and tools.',
    rows: [
      ['Systems Analysis and Development', 'Unesc', '2022–2024'],
      ['Full Stack Developer', 'OneBitCode', 'Course'],
      ['Support and improvement of systems', 'Araranguá city hall', 'Since 2021'],
    ],
    techLabel: 'Technologies in my projects',
    site: 'This site',
    everywhere: 'All projects',
  },
  projects: {
    h2: 'Projects.',
    muted: 'Two web apps.',
    h2b: 'Automations.',
    mutedb: 'Two Python scripts.',
    private: 'Private repository',
    collab: 'In collaboration',
    items: {
      finanai: {
        name: 'FinanAI',
        title: 'FinanAI logs expenses written in plain language',
        body: 'A personal finance PWA in Portuguese. You write “hoje gastei 45 no almoço” and the app understands it on the device, with no paid AI. It has accounts, cards, goals and reports.',
      },
      trilhas: {
        name: 'Trilhas Inova',
        title: 'Trilhas Inova takes sign-ups with validation and postcode lookup',
        body: 'A sign-up form built in collaboration: input masks, validation, postcode lookup through ViaCEP, document upload and light and dark modes.',
        demo: 'See the demo',
        repo: 'See the code',
        alt: 'Screen of the Trilhas Program sign-up form, with name, date of birth and CPF fields',
      },
      faturas: {
        name: 'Invoice automation',
        title: 'Invoice automation reads email and fills the spreadsheet',
        body: 'Two Python scripts: one downloads attachments over IMAP; the other reads the customer unit and the total of each PDF and writes it to the spreadsheet.',
        download: 'See downloadFaturas',
        process: 'See processamentoFatura',
        alt: 'Flow: email, PDF, spreadsheet',
      },
      shopee: {
        name: 'ShopeeBot',
        title: 'ShopeeBot automates the browser and exports CSV',
        body: 'A Python program with Selenium and a Tkinter interface. It keeps the session saved, exports data as CSV and builds into an executable with PyInstaller.',
        repo: 'See the code',
      },
    },
  },
  contact: {
    h2: 'Contact.',
    muted: 'Write here or use one of the links.',
    links: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send a message',
      errName: 'Write your name.',
      errEmail: 'Write an email address with an @, like name@example.com.',
      errMessage: 'Write your message.',
      fix: 'Fields to fix: {n}.',
      sending: 'Sending',
      sent: 'Message sent. I reply by email.',
      failed: 'Not sent: the connection failed. Your words are still here; try again.',
      note: 'The message arrives in my inbox.',
    },
  },
  footer: {
    h2: 'Send a message.',
    line: 'Open to web development jobs and projects.',
    lede: 'Web developer, Unesc graduate, at the Araranguá city hall since 2021.',
    colNav: 'Navigate',
    colProjects: 'Projects',
    colLinks: 'Links',
    rights: 'Product names and logos are trademarks of their owners.',
  },
}

export const content = { pt, en }

export function detectLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (q === 'pt' || q === 'en') return q
  } catch {
    // sem URL legível: segue adiante
  }
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // sem acesso ao armazenamento: segue o navegador
  }
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'pt'
  return nav.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}
