/* ═══════════════════════════════════════
   DENKENHAUS — app.js
   ═══════════════════════════════════════ */

/* ── SUPABASE ── */
const SUPABASE_URL = 'https://yjeurxxxybbfvyzqxrjd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZXVyeHh4eWJiZnZ5enF4cmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MzAxODUsImV4cCI6MjA4ODIwNjE4NX0.vG8AyVPr7XsSBh_wvQW9OoWA9-PLCYOZZ7KuMggPaOU';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* ── WHATSAPP ── */
const WHATSAPP_NUMBER = '5541988601417'; // ← coloque seu número com DDI+DDD
/* ── ADMIN ── verificado no Supabase ── */

/* ── DADOS ── */
const LANGS = [
  { flag: '🏴',  name: 'Galego',   native: 'Galego / Galician' },
  { flag: '🇬🇧', name: 'Inglês',   native: 'English' },
  { flag: '🇪🇸', name: 'Espanhol', native: 'Español' },
  { flag: '🇫🇷', name: 'Francês',  native: 'Français' },
  { flag: '🇮🇹', name: 'Italiano', native: 'Italiano' },
  { flag: '🇩🇪', name: 'Alemão',   native: 'Deutsch' },
  { flag: '🇷🇺', name: 'Russo',    native: 'Русский' },
  { flag: '🇯🇵', name: 'Japonês',  native: '日本語' },
];

const LVLS = [
  { id: 'A1', label: 'Iniciante',         color: '#27ae60', rgb: '39,174,96',   bg: '#e8f8ee' },
  { id: 'A2', label: 'Básico',            color: '#2980b9', rgb: '41,128,185',  bg: '#e8f3fb' },
  { id: 'B1', label: 'Intermediário',     color: '#d4870a', rgb: '212,135,10',  bg: '#fdf3e3' },
  { id: 'B2', label: 'Interm. Avançado',  color: '#8e44ad', rgb: '142,68,173',  bg: '#f5eefb' },
  { id: 'C1', label: 'Avançado',          color: '#c0392b', rgb: '192,57,43',   bg: '#fdecea' },
];

const TOPICS = {
  A1: [],
  A2: [],
  B1: [],
  B2: ['Argumentación avanzada','Ensaios','Análise crítica','Literatura clásica','Cinema de arte','Música e letras','Economía global','Política','Medio ambiente','Ciencia e tecnoloxía','IA e futuro','Ética','Voz pasiva avanzada','Subxuntivo','Condicionais avanzados','Discurso formal','Presentación profesional','Negociación','Conflitos','Liderado','Marketing','Comunicación intercultural','Valores','Filosofía','Psicoloxía','Saúde mental','Benestar','Narrativa literaria','Conto','Artigo xornalístico','Reportaxe','Entrevista','Podcast','Documental','Discurso público','TED Talk','Linguaxe figurada','Metáforas','Ironía','Humor sofisticado','Repaso B2 – I','Repaso B2 – II','Vocabulario especializado','Léxico técnico','Rexistros','Ton','Escrita creativa','Descrición elaborada','Análise de texto','Resumo executivo','Informe profesional','Proposta de proxecto','Vocabulario B2','Estruturas complexas','Cohesión avanzada','Repaso gramatical','Expresións sofisticadas','Preparación C1','Repaso final B2','Simulacro B2'],
  C1: ['Linguaxe académica','Escrita científica','Revisión bibliográfica','Análise de discurso','Semántica','Retórica','Filosofía da linguaxe','Linguaxe xurídica','Linguaxe médica','Linguaxe de negocios','Linguaxe diplomática','Linguaxe literaria','Poesía','Teatro','Ensaio crítico','Tese','Metodoloxía','Cita e referencia','Debate formal','Oratoria','Improvisación','Humor culto','Ironía posmoderna','Intertextualidade','Variación diacrónica','Linguaxe histórica','Arcaísmos','Xergas profesionais','Tecnicismos','Vocabulario diplomático','Tradución','Matices culturais','Tabús','Política lingüística','Multilingüismo','Competencia intercultural','Análise de medios','Propaganda','Ética da comunicación','Verificación','Repaso C1 – I','Repaso C1 – II','Escrita avanzada','Debate universitario','Conferencia','Entrevista avanzada','Presentación executiva','Negociación internacional','Networking','Vocabulario C1','Estruturas raras','Expresións literarias','Preparación certificación','Estratexias de exame','Lectura auténtica','Escoita real','Produción escrita final','Repaso final C1','Simulacro C1','Exame final C1'],
};

const ICONS  = ['📖','✏️','🎧','💬','📝','🎯','🔤','🗣️','📚','🧩','🌐','🎪','📰','🎬','🎵','🏆','💡','🔬','📐','🎨'];
const SKILLS = ['Vocabulário','Gramática','Escuta','Pronúncia','Leitura','Escrita','Conversação','Expressões'];

const AULAS = {
  'Galego-A1-1': {
    icon: '💬', titulo: 'Presentacións',
    descricao: 'Diálogos reais de apresentação em galego, gramática essencial e vocabulário comparado com o português.',
    duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
    file: 'aulas/gl-a1-1.html',
  },
'Inglês-A1-1': {
    icon: '💬', titulo: 'Presentacións',
    descricao: 'Diálogos reais de apresentação em galego, gramática essencial e vocabulário comparado com o português.',
    duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
    file: 'aulas/en-a1-1.html',
  },
  'Inglês-A1-2': {
  icon: '🔤',
  titulo: 'Introduce Yourself',
  descricao: 'Apresentar-se, perguntar nomes, soletrar nomes, contar de 0 a 10 e reconhecer o alfabeto em inglês.',
  duracao: '30 min',
  skills: ['Introductions', 'Alphabet', 'Numbers'],
  file: 'aulas/en-a1-2.html',
},
'Inglês-A1-3': {
  icon: '🌍',
  titulo: 'Countries & He / She / It',
  descricao: 'Aprender países, nacionalidades e usar he, she e it com o verbo to be para identificar pessoas e objetos.',
  duracao: '30 min',
  skills: ['Countries', 'Nationalities', 'To Be'],
  file: 'aulas/en-a1-3.html',
},
'Inglês-A1-4': {
  icon: '🎬',
  titulo: 'Favourite Films',
  descricao: 'Falar sobre filmes favoritos, gêneros de filmes, atores e atrizes, e usar adjetivos possessivos em inglês.',
  duracao: '30 min',
  skills: ['Film Genres', 'Possessive Adjectives', 'Favourites'],
  file: 'aulas/en-a1-4.html',
},
'Inglês-A1-5': {
  icon: '🌍',
  titulo: 'Why is English Spoken in So Many Countries?',
  descricao: 'Curiosity lesson about English, countries, communication, the internet and words from different languages.',
  duracao: '20 min',
  skills: ['Reading', 'Culture', 'Comprehension'],
  file: 'aulas/en-a1-5.html',
},
'Inglês-A1-6': {
  icon: '👨‍👩‍👧‍👦',
  titulo: 'My Family',
  descricao: 'Falar sobre membros da família, revisar o verbo to be, usar possessive ’s e my/your/his/her.',
  duracao: '30 min',
  skills: ['Family', 'To be review', 'Possessive ’s'],
  file: 'aulas/en-a1-6.html',
},
'Inglês-A1-7': {
  icon: '👥',
  titulo: 'Friends, Families & Groups',
  descricao: 'Usar we, you e they, falar sobre grupos de pessoas, revisar família, possessive ’s e usar our/their.',
  duracao: '30 min',
  skills: ['We / You / They', 'Groups', 'Possessives'],
  file: 'aulas/en-a1-7.html',
},
'Inglês-A1-8': {
  icon: '🎨',
  titulo: 'Colors Around Us',
  descricao: 'Aprender cores, descrever objetos e pessoas, revisar o verbo to be, possessive adjectives e possessive ’s.',
  duracao: '30 min',
  skills: ['Colors', 'Objects', 'To be review'],
  file: 'aulas/en-a1-8.html',
},
'Inglês-A1-9': {
  icon: '🎒',
  titulo: 'Personal Objects',
  descricao: 'Falar sobre objetos pessoais, usar a/an, formar plurais regulares e revisar possessive ’s.',
  duracao: '30 min',
  skills: ['Personal objects', 'A / An', 'Plural nouns'],
  file: 'aulas/en-a1-9.html',
},
'Inglês-A1-10': {
  icon: '🎂',
  titulo: 'How Old Are You?',
  descricao: 'Perguntar e responder sobre idade, aprender números de 11 a 100, falar sobre aniversários e revisar o verbo to be.',
  duracao: '30 min',
  skills: ['Age', 'Numbers 11–100', 'Birthdays'],
  file: 'aulas/en-a1-10.html',
},
'Inglês-A1-11': {
  icon: '🏙️',
  titulo: 'Around Town',
  descricao: 'Aprender lugares da cidade, perguntar onde ficam lugares, usar there is / there are e revisar a/an e plurais.',
  duracao: '30 min',
  skills: ['Places in town', 'There is / There are', 'Directions'],
  file: 'aulas/en-a1-11.html',
},
'Inglês-A1-12': {
  icon: '🌍',
  titulo: 'The Many Englishes Around the World',
  descricao: 'Curiosity lesson about different varieties of English, accents, vocabulary and English around the world.',
  duracao: '20 min',
  skills: ['Reading', 'Culture', 'Comprehension'],
  file: 'aulas/en-a1-12.html',
},
'Inglês-A1-13': {
  icon: '🔁',
  titulo: 'Review: Ages & Around Town',
  descricao: 'Revisar idades, aniversários, lugares da cidade, there is / there are, a/an, plurais e possessive ’s.',
  duracao: '30 min',
  skills: ['Review', 'Ages', 'Around town'],
  file: 'aulas/en-a1-13.html',
},
'Inglês-A1-14': {
  icon: '🥪',
  titulo: 'Ordering Food and Drinks',
  descricao: 'Pedir comidas e bebidas de forma educada usando I’d like e Can I have, com vocabulário de cafés e restaurantes.',
  duracao: '30 min',
  skills: ['Ordering food', 'I’d like', 'Can I have'],
  file: 'aulas/en-a1-14.html',
},
'Inglês-A1-15': {
  icon: '☕',
  titulo: 'Curiosity: Tea Time',
  descricao: 'Conhecer a tradição britânica do chá enquanto revisa vocabulário de cafés, comidas e bebidas, I’d like, Would you like e compreensão de leitura.',
  duracao: '30 min',
  skills: ['Reading', 'Culture', 'Food & Drinks'],
  file: 'aulas/en-a1-15.html',
},
'Inglês-A1-16': {
  icon: '🧩',
  titulo: 'Describing Things',
  descricao: 'Aprender adjetivos comuns, posição dos adjetivos, to be + adjective e intensificadores como very, really e quite.',
  duracao: '30 min',
  skills: ['Adjectives', 'Descriptions', 'Very / Really / Quite'],
  file: 'aulas/en-a1-16.html',
},
'Inglês-A1-17': {
  icon: '🛍️',
  titulo: 'Shopping',
  descricao: 'Aprender this, that, these e those, perguntar preços e revisar cores em situações de compras.',
  duracao: '30 min',
  skills: ['Shopping', 'This / That', 'Prices'],
  file: 'aulas/en-a1-17.html',
},
'Inglês-A1-18': {
  icon: '🌍',
  titulo: 'Places Around the World',
  descricao: 'Aprender lugares da natureza e da cidade, revisar this/that/these/those e descrever lugares com adjetivos.',
  duracao: '30 min',
  skills: ['Places', 'This / That', 'Descriptions'],
  file: 'aulas/en-a1-18.html',
},
  'Francês-A1-1': {
    icon: '💬', titulo: 'Se présenter',
    descricao: "Diálogos reais de apresentação em francês, conjugação dos verbos s'appeler e être, vocabulário essencial.",
    duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
    file: 'aulas/fr-a1-1.html',
  },
  'Francês-A1-2': {
    icon: '✏️', titulo: 'Nationalités, pays, nombres',
    descricao: 'Nacionalidades, países, verbo venir de, artigos e números até 20.',
    duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
    file: 'aulas/fr-a1-2.html',
  },
  'Francês-A1-3': {
    icon: '🔢', titulo: 'Les nombres (21–69) + révision',
    descricao: 'Idade com "avoir", contar participantes e números 21–69 (et un) + revisão de nacionalidades.',
    duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
    file: 'aulas/fr-a1-3.html',
  },
  'Francês-A1-4': {
    icon: '👋', titulo: 'Saluer et prendre congé',
    descricao: 'Saudações formais e informais, TU vs VOUS e expressões para despedida.',
    duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
    file: 'aulas/fr-a1-4.html',
  },
'Francês-A1-5': {
  icon: '📖',
  titulo: 'Pourquoi Paris est appelée la Ville Lumière',
  descricao: 'Lecture simple sur l’origine du surnom de Paris + vocabulaire et questions de compréhension.',
  duracao: '15 min',
  skills: ['Lecture', 'Vocabulaire', 'Compréhension'],
  file: 'aulas/fr-a1-5.html'
},
'Francês-A1-6': {
  icon: '🧑',
  titulo: 'Profil et présentation',
  descricao: 'Perfil, estudos, verbo avoir, ne... pas, pas de e possessivos.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-6.html',
},
'Francês-A1-7': {
  icon: '🪪',
  titulo: 'Demander des documents',
  descricao: 'Vocabulário de documentos, artigo indefinido e pedidos educados com “je voudrais”.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-7.html',
},
'Francês-A1-8': {
  icon: '📝',
  titulo: 'Poser des questions sur l’identité',
  descricao: 'Perguntar nome, sobrenome, telefone, endereço, data de nascimento e usar quel/quelle/quelles.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-8.html',
},
'Francês-A1-9': {
  icon: '📞',
  titulo: 'Coordonnées et numéros',
  descricao: 'Telefone, endereço, e-mail, leitura de números e explicação de 70 a 99.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-9.html',
},
'Francês-A1-10': {
    icon: '🌍', titulo: 'Le français dans le monde',
    descricao: 'Por que o francês é falado em tantos países? Texto sobre países francófonos, vocabulário geográfico e questões de compreensão.',
    duracao: '15 min', skills: ['Leitura','Vocabulário','Compreensão'],
    file: 'aulas/fr-a1-10.html',
  },
'Francês-A1-11': {
  icon: '🌍',
  titulo: 'Habiter dans un pays / une ville',
  descricao: 'Pays, villes, prépositions de lieu, habiter, vivre et monuments célèbres.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-11.html',
},
'Francês-A1-12': {
  icon: '🏙️',
  titulo: 'Parler de sa ville',
  descricao: 'Lieux dans une ville, description, articles et structure il y a.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-12.html',
},
'Francês-A1-13': {
  icon: '🗺️',
  titulo: 'Localiser dans la ville',
  descricao: 'Prépositions de lieu, localisation, demander son chemin et lire un plan.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-13.html',
},
'Francês-A1-14': {
  icon: '🛏️',
  titulo: 'Passer une nuit / S’informer sur l’hébergement',
  descricao: 'Réserver un hébergement, demander des informations et parler des types de logement.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-14.html',
},
'Francês-A1-15': {
  icon: '💡',
  titulo: 'Curiosité — Les auberges de jeunesse',
  descricao: 'Texte culturel sur les auberges de jeunesse en France.',
  duracao: '10 min',
  skills: ['Lecture', 'Vocabulário', 'Compreensão'],
  file: 'aulas/fr-a1-15.html',
},
'Francês-A1-16': {
  icon: '🧭',
  titulo: 'Indiquer un itinéraire',
  descricao: 'Dar direções, usar verbos de movimento, imperativo simples e pontos de referência na cidade.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-16.html',
},
'Francês-A1-17': {
  icon: '🗺️',
  titulo: 'Indiquer un itinéraire (version simplifiée)',
  descricao: 'Dar direções com mais repetição, progressão e clareza, reforçando verbos de movimento e direções.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-17.html',
},
'Francês-A1-18': {
  icon: '✉️',
  titulo: 'Écrire une carte postale',
  descricao: 'Escrever um cartão postal, falar das férias, dar impressões e usar ce/cette/ces.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-18.html',
},
'Francês-A1-19': {
  icon: '📮',
  titulo: 'Provenance et destination',
  descricao: 'Origem e destino com de/du/des e en/au/aux, além de vocabulário de correio e formulários.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-19.html',
},
'Francês-A1-20': {
  icon: '📮',
  titulo: 'Le système postal en France',
  descricao: 'Funcionamento da La Poste, envio de cartas, código postal e vocabulário essencial.',
  duracao: '20 min',
  skills: ['Leitura', 'Vocabulário', 'Compreensão'],
  file: 'aulas/fr-a1-20.html',
},
'Francês-A1-21': {
  icon: '❤️',
  titulo: 'J’adore !',
  descricao: 'Falar de gostos, preferências, esporte, atividades culturais e frequência.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-21.html',
},
'Francês-A1-22': {
  icon: '💼',
  titulo: 'Parler de sa profession',
  descricao: 'Falar da própria profissão, do local de trabalho e dos objetivos profissionais.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-22.html',
},
'Francês-A1-23': {
  icon: '🧑',
  titulo: 'Solo ou duo ?',
  descricao: 'Falar de si, do próprio perfil, do caráter e das relações com outras pessoas.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-23.html',
},
'Francês-A1-24': {
  icon: '🧠',
  titulo: 'Caractériser une personne',
  descricao: 'Descrever pessoas com adjetivos, masculino/feminino, plural e características pessoais.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-24.html',
},
'Francês-A1-25': {
  icon: '👋',
  titulo: 'Comment les Français se saluent-ils ?',
  descricao: 'Cumprimentos formais e informais na França, la bise e relações sociais.',
  duracao: '20 min',
  skills: ['Leitura', 'Vocabulário', 'Compreensão'],
  file: 'aulas/fr-a1-25.html',
},
'Francês-A1-26': {
  icon: '👨‍👩‍👧‍👦',
  titulo: 'En famille',
  descricao: 'Falar da família, da árvore genealógica e usar adjetivos possessivos.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-26.html',
},
'Francês-A1-27': {
  icon: '🎉',
  titulo: 'Annoncer un événement, réagir',
  descricao: 'Anunciar um evento familiar, pedir e dar notícias e reagir emocionalmente.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-27.html',
},
'Francês-A1-28': {
  icon: '🕒',
  titulo: 'Indiquer l’heure et les horaires',
  descricao: 'Falar sobre horas, horários e rotina diária.',
  duracao: '25 min',
  skills: ['Conversação', 'Vocabulário', 'Gramática'],
  file: 'aulas/fr-a1-28.html',
},
'Francês-A1-29': {
  icon: '📅',
  titulo: 'Parler de ses habitudes',
  descricao: 'Falar da rotina, dos hábitos diários e da sequência de ações no presente.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-29.html',
},
'Francês-A1-30': {
  icon: '⏰',
  titulo: 'Les habitudes quotidiennes des Français',
  descricao: 'Rotina, horários e hábitos cotidianos na França.',
  duracao: '20 min',
  skills: ['Leitura', 'Vocabulário', 'Compreensão'],
  file: 'aulas/fr-a1-30.html',
},
'Francês-A1-31': {
  icon: '🎬',
  titulo: 'Proposer une sortie',
  descricao: 'Propor uma saída, aceitar ou recusar convites e usar o futur proche.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/fr-a1-31.html',
},
'Francês-A1-32': {
  icon: '🎉',
  titulo: 'Inviter quelqu’un',
  descricao: 'Convidar, aceitar, recusar e organizar encontros com futur proche e impératif.',
  duracao: '25 min',
  skills: ['Conversação', 'Interação', 'Gramática'],
  file: 'aulas/fr-a1-32.html',
},

'Francês-A1-33': {
  icon: '📅',
  titulo: 'Au jour le jour',
  descricao: 'Descrever a rotina completa com sequência de ações e frequência.',
  duracao: '25 min',
  skills: ['Fala', 'Rotina', 'Fluência'],
  file: 'aulas/fr-a1-33.html',
},

'Francês-A1-34': {
  icon: '⏳',
  titulo: 'Raconter des événements passés',
  descricao: 'Introdução ao passé composé para contar acontecimentos do passado.',
  duracao: '30 min',
  skills: ['Gramática', 'Narrativa', 'Compreensão'],
  file: 'aulas/fr-a1-34.html',
},

'Francês-A1-35': {
  icon: '🎆',
  titulo: 'La fête nationale en France',
  descricao: 'Curiosité em passé composé sobre o 14 juillet e a cultura francesa.',
  duracao: '20 min',
  skills: ['Leitura', 'Vocabulário', 'Compreensão'],
  file: 'aulas/fr-a1-35.html',
},
   
'Francês-A1-36': {
  icon: '🎊',
  titulo: 'Jour de fête',
  descricao: 'Falar sobre festas, fazer perguntas e responder em uma interação real.',
  duracao: '25 min',
  skills: ['Conversação', 'Perguntas', 'Vocabulário'],
  file: 'aulas/fr-a1-36.html',
},

'Francês-A1-37': {
  icon: '🎄',
  titulo: 'Parler des rituels de fêtes',
  descricao: 'Falar sobre tradições, rituais de festas, opinião e contraste simples.',
  duracao: '25 min',
  skills: ['Conversação', 'Opinião', 'Passé composé'],
  file: 'aulas/fr-a1-37.html',
},

'Francês-A1-38': {
  icon: '☎️',
  titulo: 'Grande nouvelle !',
  descricao: 'Telefonar, anunciar uma notícia, reagir e combinar ações futuras.',
  duracao: '25 min',
  skills: ['Conversação', 'Passé composé', 'Futur proche'],
  file: 'aulas/fr-a1-38.html',
},

'Francês-A1-39': {
  icon: '💡',
  titulo: 'Donner des conseils',
  descricao: 'Dar conselhos práticos usando impératif, ordem de ações e expressões úteis.',
  duracao: '25 min',
  skills: ['Conversação', 'Impératif', 'Vocabulário'],
  file: 'aulas/fr-a1-39.html',
},

'Francês-A1-40': {
  icon: '🌿',
  titulo: 'Les conseils des Français pour bien vivre',
  descricao: 'Curiosité com conselhos, hábitos, passé composé e impératif.',
  duracao: '20 min',
  skills: ['Leitura', 'Vocabulário', 'Compreensão'],
  file: 'aulas/fr-a1-40.html',
},
'Francês-A1-41': {
  icon: '🧑‍🎤',
  titulo: 'Vie privée, vie publique',
  descricao: 'Contar fatos da vida e falar de biografias usando passé composé.',
  duracao: '30 min',
  skills: ['Passé composé', 'Narrativa', 'Biografia'],
  file: 'aulas/fr-a1-41.html',
},
'Francês-A1-42': {
  icon: '👤',
  titulo: 'Décrire une personne',
  descricao: 'Descrever pessoas, falar de mudanças, semelhanças, avoir l’air e c’est / il est.',
  duracao: '30 min',
  skills: ['Description', 'Passé composé', 'Grammaire'],
  file: 'aulas/fr-a1-42.html',
},
'Francês-A1-43': {
  icon: '🍂',
  titulo: 'Au fil des saisons',
  descricao: 'Falar das estações, sensações, verbos de percepção e experiências no passé composé.',
  duracao: '30 min',
  skills: ['Perception', 'Passé composé', 'Vocabulário'],
  file: 'aulas/fr-a1-43.html',
},
'Francês-A1-44': {
  icon: '🔁',
  titulo: 'Révision — classes 41 à 43',
  descricao: 'Revisão de passé composé, descrição física, avoir l’air, c’est/il est, estações e percepção.',
  duracao: '30 min',
  skills: ['Révision', 'Passé composé', 'Description'],
  file: 'aulas/fr-a1-44.html',
},
'Francês-A1-45': {
  icon: '🇨🇦',
  titulo: 'Pourquoi les Canadiens français parlent-ils français ?',
  descricao: 'Curiosité sobre a história do francês no Canadá, Québec e cultura francófona.',
  duracao: '20 min',
  skills: ['Leitura', 'Cultura', 'Compreensão'],
  file: 'aulas/fr-a1-45.html',
},
'Francês-A1-46': {
  icon: '🌦️',
  titulo: 'Parler du climat',
  descricao: 'Falar sobre clima, météo, estações, sensações e experiências no passé composé.',
  duracao: '30 min',
  skills: ['Météo', 'Passé composé', 'Conversation'],
  file: 'aulas/fr-a1-46.html',
},
'Francês-A1-47': {
  icon: '🌨️',
  titulo: 'Révision complète — Le climat',
  descricao: 'Grande revisão sobre clima, estações, météo, inversion e passé composé.',
  duracao: '35 min',
  skills: ['Météo', 'Inversion', 'Révision'],
  file: 'aulas/fr-a1-47.html',
},
'Francês-A1-48': {
  icon: '🛒',
  titulo: 'Faire les courses',
  descricao: 'Fazer compras, pedir preços, usar artigos partitivos e praticar situações no supermercado.',
  duracao: '30 min',
  skills: ['Courses', 'Articles partitifs', 'Questions'],
  file: 'aulas/fr-a1-48.html',
},
'Francês-A1-49': {
  icon: '🍽️',
  titulo: 'Au restaurant',
  descricao: 'Revisão de alimentos e partitivos, pedidos no restaurante, perguntas úteis e pagamento da conta.',
  duracao: '30 min',
  skills: ['Restaurant', 'Articles partitifs', 'Questions'],
  file: 'aulas/fr-a1-49.html',
},
'Francês-A1-50': {
  icon: '🥖',
  titulo: 'La gastronomie française',
  descricao: 'Curiosité sobre gastronomia francesa, boulangeries, fromages, restaurantes e spécialités régionales.',
  duracao: '20 min',
  skills: ['Lecture', 'Culture', 'Compréhension'],
  file: 'aulas/fr-a1-50.html',
},
'Francês-A1-51': {
  icon: '🏠',
  titulo: 'À la maison',
  descricao: 'Falar sobre tarefas domésticas, cômodos da casa, il faut, devoir e passé composé.',
  duracao: '30 min',
  skills: ['Maison', 'Obligation', 'Passé composé'],
  file: 'aulas/fr-a1-51.html',
},
'Francês-A1-52': {
  icon: '🛋️',
  titulo: 'Décrire son appartement',
  descricao: 'Descrever casa e apartamento, móveis, peças, preposições de lugar, il y a e passé composé.',
  duracao: '30 min',
  skills: ['Maison', 'Prépositions de lieu', 'Description'],
  file: 'aulas/fr-a1-52.html',
},
'Francês-A1-53': {
  icon: '🏡',
  titulo: 'Inviter quelqu’un chez soi',
  descricao: 'Convidar alguém para casa, receber convidados, revisar preposições de lugar, devoir, il faut, futur proche e passé composé.',
  duracao: '30 min',
  skills: ['Invitation', 'Maison', 'Prépositions de lieu'],
  file: 'aulas/fr-a1-53.html',
},
'Francês-A1-54': {
  icon: '🎉',
  titulo: 'Une soirée entre amis',
  descricao: 'Revisar casa, móveis, tarefas domésticas, preposições de lugar e conversas naturais entre amigos.',
  duracao: '25 min',
  skills: ['Maison', 'Révision', 'Conversation'],
  file: 'aulas/fr-a1-54.html',
},
'Francês-A1-55': {
  icon: '☕',
  titulo: 'Les cafés en France',
  descricao: 'Curiosité sobre a cultura dos cafés franceses, bebidas, terrasses, pâtisseries e momentos sociais.',
  duracao: '20 min',
  skills: ['Lecture', 'Culture', 'Compréhension'],
  file: 'aulas/fr-a1-55.html',
},
'Francês-A1-56': {
  icon: '☕',
  titulo: 'Au café',
  descricao: 'Pedir em um café, falar de bebidas e pâtisseries, usar partitifs e praticar interações sociais naturais.',
  duracao: '30 min',
  skills: ['Café', 'Partitifs', 'Interaction sociale'],
  file: 'aulas/fr-a1-56.html',
},
'Francês-A1-57': {
  icon: '🥐',
  titulo: 'Au petit-déjeuner',
  descricao: 'Falar sobre café da manhã, hábitos alimentares, boulangerie, alimentos, bebidas, partitifs e perguntas naturais.',
  duracao: '30 min',
  skills: ['Petit-déjeuner', 'Partitifs', 'Habitudes'],
  file: 'aulas/fr-a1-57.html',
},
'Francês-A1-58': {
  icon: '🎧',
  titulo: 'Un week-end entre amis',
  descricao: 'Textes longs et conversation naturelle sur les week-ends, les amis, les cafés et la maison.',
  duracao: '35 min',
  skills: ['Conversation', 'Week-end', 'Production orale'],
  file: 'aulas/fr-a1-58.html',
},
'Francês-A1-59': {
  icon: '🗼',
  titulo: 'Une journée à Paris',
  descricao: 'Textes longs et conversation naturelle sur Paris, voyages, cafés, météo, maison et journées tranquilles.',
  duracao: '35 min',
  skills: ['Conversation', 'Voyage', 'Production orale'],
  file: 'aulas/fr-a1-59.html',
},
'Francês-A2-1': {
  icon: '🏝️',
  titulo: 'Les voyages et les paysages',
  descricao: 'Falar sobre viagens, paisagens, lugares, atividades, adjetivos descritivos e usar o pronome Y.',
  duracao: '35 min',
  skills: ['Voyage', 'Paysages', 'Pronom Y'],
  file: 'aulas/fr-a1-61.html',
},
'Francês-A2-2': {
  icon: '🏙️',
  titulo: 'Une capitale européenne',
  descricao: 'Falar sobre ações em curso, usar être en train de, continuar o pronome Y e pedir informações em uma cidade.',
  duracao: '35 min',
  skills: ['Être en train de', 'Pronom Y', 'Ville'],
  file: 'aulas/fr-a1-62.html',
},
'Francês-A2-3': {
  icon: '👕',
  titulo: 'Quel look ?',
  descricao: 'Falar sobre roupas, descrever uma tenue, dar opinião e usar os pronomes COD le, la, les.',
  duracao: '35 min',
  skills: ['Vêtements', 'Pronoms COD', 'Opinion'],
  file: 'aulas/fr-a1-63.html',
},
'Francês-A2-4': {
  icon: '🧥',
  titulo: 'Relooking et conseils vestimentaires',
  descricao: 'Dar conselhos sobre roupas e estilo usando il faut, tu devrais, tu peux e tu pourrais.',
  duracao: '35 min',
  skills: ['Conseils', 'Vêtements', 'Il faut'],
  file: 'aulas/fr-a1-64.html',
},
'Francês-A2-6': {
  icon: '🎁',
  titulo: 'Des cadeaux pour tous',
  descricao: 'Escolher e oferecer presentes, falar de ocasiões especiais e usar os pronomes COI lui e leur.',
  duracao: '35 min',
  skills: ['Cadeaux', 'Pronoms COI', 'Occasions'],
  file: 'aulas/fr-a1-66.html',
},
'Francês-A2-7': {
  icon: '🎁',
  titulo: 'Les cadeaux et les relations',
  descricao: 'Revisar COD e COI com presentes, família, amigos, comunicação e ocasiões especiais.',
  duracao: '35 min',
  skills: ['COD / COI', 'Cadeaux', 'Relations'],
  file: 'aulas/fr-a1-67.html',
},
'Francês-A2-8': {
  icon: '🔋',
  titulo: 'Les objets du quotidien',
  descricao: 'Descrever objetos, falar de utilidade e usar os pronomes relativos qui e que.',
  duracao: '35 min',
  skills: ['Objets', 'QUI / QUE', 'Technologie'],
  file: 'aulas/fr-a1-68.html',
},
'Francês-A2-9': {
  icon: '🛒',
  titulo: 'Faire les courses',
  descricao: 'Fazer compras, falar de quantidades, comprar comida e usar o pronome EN.',
  duracao: '35 min',
  skills: ['Courses', 'Quantités', 'Pronom EN'],
  file: 'aulas/fr-a1-69.html',
},
'Francês-A2-10': {
  icon: '🍽️',
  titulo: 'Pourquoi les Français mangent-ils si tard ?',
  descricao: 'Curiosité sur les horaires des repas en France, la culture du déjeuner et du dîner, et le repas comme moment de partage.',
  duracao: '20 min',
  skills: ['Reading', 'Culture', 'Comprehension'],
  file: 'aulas/fr-a1-70.html',
},
'Francês-A2-11': {
  icon: '🧺',
  titulo: 'Un week-end à la campagne',
  descricao: 'Revisar Y e EN em situações naturais com viagens, lugares, alimentos, quantidades e conversação.',
  duracao: '35 min',
  skills: ['Y / EN', 'Voyages', 'Courses'],
  file: 'aulas/fr-a1-71.html',
},
'Francês-A2-12': {
  icon: '⚖️',
  titulo: 'Avant et maintenant',
  descricao: 'Comparar situações, falar de mudanças e usar os comparativos plus que, moins que, aussi que, meilleur e mieux.',
  duracao: '35 min',
  skills: ['Comparatifs', 'Changements', 'Présent / Passé'],
  file: 'aulas/fr-a1-72.html',
},
'Francês-A2-13': {
  icon: '🏠',
  titulo: 'Ma maison idéale',
  descricao: 'Falar sobre moradia, descrever cômodos, móveis e revisar il y a e preposições de lugar.',
  duracao: '35 min',
  skills: ['Logement', 'Mobilier', 'Prépositions'],
  file: 'aulas/fr-a1-73.html',
},
'Francês-A2-14': {
  icon: '🛠️',
  titulo: 'Les transformations de la maison',
  descricao: 'Falar de mudanças, reformas e transformações usando il y a, depuis e passé composé.',
  duracao: '35 min',
  skills: ['Il y a / Depuis', 'Logement', 'Passé composé'],
  file: 'aulas/fr-a1-74.html',
},
'Francês-A2-15': {
  icon: '☕',
  titulo: 'Les cafés en France',
  descricao: 'Curiosité sur les cafés français, leur histoire, les terrasses, les habitudes et leur importance culturelle.',
  duracao: '25 min',
  skills: ['Culture', 'Cafés', 'Compréhension'],
  file: 'aulas/fr-a1-75.html',
},
'Francês-A2-16': {
  icon: '🏢',
  titulo: 'Chercher un logement',
  descricao: 'Procurar moradia, pedir informações, entender anúncios imobiliários e revisar logement, mobilier e comparativos.',
  duracao: '35 min',
  skills: ['Logement', 'Annonces', 'Informations'],
  file: 'aulas/fr-a1-76.html',
},
'Francês-A2-17': {
  icon: '🏡',
  titulo: 'Habiter autrement',
  descricao: 'Falar da evolução de hábitos, moradia e cidades usando de plus en plus, de moins en moins e de mieux en mieux.',
  duracao: '35 min',
  skills: ['Évolution', 'De plus en plus', 'Mode de vie'],
  file: 'aulas/fr-a1-77.html',
},
'Francês-A2-18': {
  icon: '🏘️',
  titulo: 'La colocation',
  descricao: 'Expressar regras, obrigações, proibições, permissões e conselhos em situações de vida compartilhada.',
  duracao: '35 min',
  skills: ['Règles', 'Obligation', 'Colocation'],
  file: 'aulas/fr-a1-78.html',
},
'fr-a2-19': {
  icon: '🤝',
  titulo: 'Bien vivre ensemble',
  descricao: 'Revisar il faut, il ne faut pas, devoir, pouvoir, il vaut mieux e tu devrais em situações práticas.',
  duracao: '35 min',
  skills: ['Révision', 'Obligation', 'Conseil'],
  file: 'aulas/fr-a1-79.html',
},
'Espanhol-A1-18': {
  icon: '✉️',
  titulo: 'Escribir una postal',
  descricao: 'Escribir una postal, hablar de las vacaciones, dar opiniones y usar este/esta/estos.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/esp-a1-18.html',
},

'Espanhol-A1-19': {
  icon: '📮',
  titulo: 'Origen y destino',
  descricao: 'Origen y destino con de y a, además de vocabulario de correos y formularios.',
  duracao: '25 min',
  skills: ['Conversação', 'Gramática', 'Vocabulário'],
  file: 'aulas/esp-a1-19.html',
},
'Inglês-B1-1': {
    icon: '🤝', 
    titulo: 'First Impressions',
    descricao: "Diálogos sobre primeiras impressões, uso de Present Simple vs. Continuous e phrasal verbs sociais como 'come across as'.",
    duracao: '30 min', 
    skills: ['Social Interaction', 'Opinion Phrases', 'Grammar'],
    file: 'aulas/en-b1-1.html',
},
'Inglês-B1-2': {
    icon: '🗣️',
    titulo: 'Ways of Speaking',
    descricao: "Diálogos sobre comunicação, maneiras de falar, conselhos com should/shouldn’t e expressões como 'make small talk' e 'stumble over your words'.",
    duracao: '30 min',
    skills: ['Communication', 'Advice Structures', 'Speaking'],
    file: 'aulas/en-b1-2.html',
},

'Inglês-B1-3': {
    icon: '👨‍👩‍👧‍👦',
    titulo: 'Family Ties & Past Experiences',
    descricao: "Diálogos sobre família, infância e experiências passadas, com foco em Past Simple, Past Continuous, Past Perfect e 'used to'.",
    duracao: '30 min',
    skills: ['Family Vocabulary', 'Past Tenses', 'Life Experiences'],
    file: 'aulas/en-b1-3.html',
},

'Inglês-B1-4': {
    icon: '🧠',
    titulo: 'Family Influence & Life Stories',
    descricao: "Diálogos sobre influência familiar, personalidade e escolhas de vida, com foco em sequência narrativa, Past Perfect e formação de adjetivos.",
    duracao: '30 min',
    skills: ['Life Stories', 'Personality', 'Narrative Grammar'],
    file: 'aulas/en-b1-4.html',
},

'Inglês-B1-5': {
    icon: '⚖️',
    titulo: 'British Habits for a Balanced Life',
    descricao: "Texto cultural sobre hábitos britânicos para uma vida equilibrada, vocabulário de bem-estar e perguntas de compreensão e conversação.",
    duracao: '30 min',
    skills: ['Reading', 'Well-being Vocabulary', 'Conversation'],
    file: 'aulas/en-b1-5.html',
},
'Inglês-B1-6': {
  icon: '📱',
  titulo: 'Mobile connections',
  descricao: 'Falar sobre celular, comunicação, contato, habilidade e obrigação.',
  duracao: '30 min',
  skills: ['Conversation', 'Vocabulary', 'Grammar'],
  file: 'aulas/en-b1-6.html',
},
'Inglês-B1-7': {
  icon: '💬',
  titulo: 'Relationships & Phrasal verbs',
  descricao: 'Falar sobre relações, conflitos, conselhos e phrasal verbs em contexto real.',
  duracao: '30 min',
  skills: ['Phrasal verbs', 'Advice', 'Connected speech'],
  file: 'aulas/en-b1-7.html',
},
'Inglês-B1-8': {
  icon: '✈️',
  titulo: 'Travel experiences & Present Perfect',
  descricao: 'Falar sobre experiências de viagem, adaptação cultural, saudade de casa e uso de Present Perfect Simple/Continuous.',
  duracao: '30 min',
  skills: ['Travel Vocabulary', 'Present Perfect', 'Storytelling'],
  file: 'aulas/en-b1-8.html',
},
'Inglês-B1-9': {
  icon: '🌍',
  titulo: 'Life-changing experiences & Bhutan',
  descricao: 'Falar sobre experiências transformadoras, adaptação, sentimentos e cultura do Butão.',
  duracao: '35 min',
  skills: ['Present Perfect', 'Adjectives', 'Opinion'],
  file: 'aulas/en-b1-9.html',
},
'Inglês-B1-10': {
  icon: '💭',
  titulo: 'Dreams, ambitions & hypothetical situations',
  descricao: 'Falar sobre sonhos, carreira, ambições e situações hipotéticas usando would e second conditional.',
  duracao: '35 min',
  skills: ['Would', 'Second conditional', 'Conversation'],
  file: 'aulas/en-b1-10.html',
},
'Inglês-B1-11': {
  icon: '🎓',
  titulo: 'Education, learning & intelligence',
  descricao: 'Discutir educação, formas de aprendizagem, inteligência, professores e hábitos de estudo.',
  duracao: '35 min',
  skills: ['Relative clauses', 'Gerunds', 'Infinitives'],
  file: 'aulas/en-b1-11.html',
},
'Inglês-B1-12': {
  icon: '🔁',
  titulo: 'Grammar Review & Real-life Communication',
  descricao: 'Revisar past forms, present perfect e hypothetical language em comunicação real.',
  duracao: '35 min',
  skills: ['Grammar review', 'Present perfect', 'Hypotheticals'],
  file: 'aulas/en-b1-12.html',
},
'Inglês-B1-13': {
  icon: '📍',
  titulo: 'Position of Adverbs',
  descricao: 'Estudar a posição dos advérbios com Present Simple, to be, Present Perfect e Past Perfect.',
  duracao: '35 min',
  skills: ['Adverbs', 'Present Perfect', 'Past Perfect'],
  file: 'aulas/en-b1-13.html',
},
'Inglês-B1-14': {
  icon: '🧭',
  titulo: 'Decisions, regrets & life choices',
  descricao: 'Falar sobre decisões, arrependimentos, oportunidades, riscos e escolhas de vida.',
  duracao: '30 min',
  skills: ['Reflection', 'Regrets', 'Hypotheticals'],
  file: 'aulas/en-b1-14.html',
},
'Inglês-B1-15': {
  icon: '🇨🇦',
  titulo: 'Why Canada attracts people from all over the world',
  descricao: 'Curiosity lesson about Canada, immigration, multiculturalism, adaptation and new beginnings.',
  duracao: '25 min',
  skills: ['Reading', 'Culture', 'Conversation'],
  file: 'aulas/en-b1-15.html',
},
'Russo-A1-1': {
  icon: '💬', titulo: 'Меня зовут — Se apresentar',
  descricao: 'Diálogos reais em russo com tradução por hover, gramática essencial e vocabulário.',
  duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
  file: 'aulas/ru-a1-1.html',
},
'Russo-A1-2': {
  icon: '🌍', titulo: 'Национальности и страны — Nacionalidades e países',
  descricao: 'Nacionalidades, países, apresentações e números básicos em contextos reais.',
  duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
  file: 'aulas/ru-a1-2.html',
},

'Russo-A1-3': {
  icon: '🔢', titulo: 'Возраст и числа — Idade e números',
  descricao: 'Números de 21 a 69, idade, quantidades e uso prático em diálogos do dia a dia.',
  duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
  file: 'aulas/ru-a1-3.html',
},

'Russo-A1-4': {
  icon: '👋', titulo: 'Привет и здравствуйте — Cumprimentos e formalidade',
  descricao: 'Saudações, despedidas, tu vs vous em russo e expressões sociais essenciais.',
  duracao: '25 min', skills: ['Conversação','Gramática','Vocabulário'],
  file: 'aulas/ru-a1-4.html',
},

'Russo-A1-5': {
  icon: '🇷🇺', titulo: 'Ты и вы — Curiosité sur le russe',
  descricao: 'Curiosidade cultural sobre a língua russa com texto curto, vocabulário e compreensão.',
  duracao: '10 min', skills: ['Leitura','Cultura','Vocabulário'],
  file: 'aulas/ru-a1-5.html',
},
};

/* ── ESTADO ── */
let curLang = 0, curLvl = 0, lpAtual = {};
let currentUser = null;
let isAdmin = false;
let userPlan = null; // null = sem plano, 'basico'|'professor2'|'professor5'|'custom'
let progress = Array.from({ length: 8 }, () => [0,0,0,0,0]);

/* ══════════════════════════════════════════
   SUPABASE — AUTH
══════════════════════════════════════════ */
async function initAuth() {
  const { data: { session } } = await sb.auth.getSession();
  if (session) await onLogin(session.user);

  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN')  await onLogin(session.user);
    if (event === 'SIGNED_OUT') onLogout();
  });
}

async function onLogin(user) {
  currentUser = user;
  // Verifica na tabela admins do Supabase — seguro
  const { data } = await sb.from('admins')
    .select('user_id')
    .eq('user_id', user.id)
    .single();
  isAdmin = !!data;
  await loadProgress();
  await loadUserPlan();
  updateNavUser();
  renderPathIfOpen();
}

function onLogout() {
  currentUser = null;
  isAdmin = false;
  userPlan = null;
  progress = Array.from({ length: 8 }, () => [0,0,0,0,0]);
  updateNavUser();
}

function updateNavUser() {
  const nav = document.getElementById('navActions');
  if (currentUser) {
    const name = currentUser.user_metadata?.full_name || currentUser.email.split('@')[0];
    const badge = isAdmin ? '<span style="background:var(--gold);color:var(--navy-dark);font-size:0.65rem;font-weight:800;padding:0.15rem 0.5rem;border-radius:100px;margin-left:0.4rem;">ADMIN</span>' : '';
    nav.innerHTML = `
      <span style="color:var(--text-light);font-size:0.82rem;">Olá, <strong style="color:var(--cream)">${name}</strong>${badge}</span>
      <button class="btn-ghost" onclick="showPage('plansPage')">Meu Plano</button>
      <button class="btn-ghost" onclick="doLogout()">Sair</button>`;
  } else {
    nav.innerHTML = `
      <button class="btn-ghost" onclick="openAuth('login')">Entrar</button>
      <button class="btn-primary" onclick="openAuth('register')">Cadastrar-se</button>`;
  }
}

async function doResetPassword() {
  const email = document.getElementById('loginEmail').value.trim();
  if (!email) { showAuthMsg('Digite seu e-mail acima primeiro.'); return; }
  const { error } = await sb.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://rodrigolana-coder.github.io/denkenhaus/',
  });
  if (error) { showAuthMsg(error.message); return; }
  showAuthMsg('✅ E-mail de redefinição enviado! Verifique sua caixa de entrada.', true);
}

async function doLogin() {
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPass').value;
  showAuthMsg('');
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) { showAuthMsg(error.message); return; }
  closeAuth();
}

async function doRegister() {
  const name     = document.getElementById('regName').value.trim();
  const email    = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPass').value;
  const confirm  = document.getElementById('regConfirm').value;
  showAuthMsg('');
  if (password !== confirm) { showAuthMsg('As senhas não coincidem.'); return; }
  if (password.length < 6)  { showAuthMsg('A senha deve ter pelo menos 6 caracteres.'); return; }
  const { error } = await sb.auth.signUp({ email, password, options: { data: { full_name: name } } });
  if (error) { showAuthMsg(error.message); return; }
  showAuthMsg('✅ Confirme seu e-mail para ativar a conta.', true);
}

async function doLogout() {
  await sb.auth.signOut();
  goHome();
}

function showAuthMsg(msg, success = false) {
  const el = document.getElementById('authMsg');
  el.textContent   = msg;
  el.style.color   = success ? '#27ae60' : '#e74c3c';
  el.style.display = msg ? 'block' : 'none';
}

/* ══════════════════════════════════════════
   SUPABASE — PROGRESSO
══════════════════════════════════════════ */
async function loadProgress() {
  if (!currentUser) return;
  const { data, error } = await sb.from('progresso').select('*').eq('user_id', currentUser.id);
  if (error) { console.error('Erro progresso:', error); return; }
  progress = Array.from({ length: 8 }, () => [0,0,0,0,0]);
  data.forEach(row => {
    const li = LANGS.findIndex(l => l.name === row.lang);
    const vi = LVLS.findIndex(v => v.id   === row.nivel);
    if (li >= 0 && vi >= 0) progress[li][vi] = row.aulas_concluidas;
  });
}

async function saveProgress(langName, nivelId, aulasConcluidas) {
  if (!currentUser) return;
  await sb.from('progresso').upsert({
    user_id: currentUser.id, lang: langName,
    nivel: nivelId, aulas_concluidas: aulasConcluidas,
  }, { onConflict: 'user_id,lang,nivel' });
}

async function markLessonDone(langIdx, lvlIdx, n) {
  if (n <= progress[langIdx][lvlIdx]) return;
  progress[langIdx][lvlIdx] = n;
  await saveProgress(LANGS[langIdx].name, LVLS[lvlIdx].id, n);
}

function renderPathIfOpen() {
  if (document.getElementById('coursePage').classList.contains('active')) renderPath(curLvl);
}

/* ══════════════════════════════════════════
   SUPABASE — PLANOS
══════════════════════════════════════════ */
async function loadUserPlan() {
  if (!currentUser) return;
  const { data } = await sb.from('assinaturas')
    .select('plano, status, validade')
    .eq('user_id', currentUser.id)
    .eq('status', 'ativo')
    .limit(1);
  userPlan = (data && data.length > 0) ? data[0].plano : null;
}

function hasAccess() {
  return true;
}

/* ══════════════════════════════════════════
   MERCADO PAGO — redirecionar para checkout
   Cole o link de pagamento de cada plano abaixo
══════════════════════════════════════════ */
const MP_LINKS = {
  basico:      'https://mpago.la/SEU-LINK-BASICO',       // R$ 39,90
  professor2:  'https://mpago.la/SEU-LINK-PROF2',        // R$ 150,00
  professor5:  'https://mpago.la/SEU-LINK-PROF5',        // R$ 320,00
  custom:      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Tenho interesse no plano personalizado do Denkenhaus.')}`,
};

function goToCheckout(plano) {
  if (!currentUser) { openAuth('register'); return; }
  window.open(MP_LINKS[plano], '_blank');
}

/* ══════════════════════════════════════════
   HOME
══════════════════════════════════════════ */
function buildHome() {
  document.getElementById('langGrid').innerHTML = LANGS.map((l, i) => `
    <div class="lang-card reveal" onclick="openCourse(${i})" style="transition-delay:${i*50}ms">
      <div class="lang-card-header">
        <span class="lang-flag">${l.flag}</span>
        <div><div class="lang-name">${l.name}</div><div class="lang-native">${l.native}</div></div>
      </div>
      <div class="lang-card-body">
        <div class="lang-levels">${LVLS.map(lv => `<span class="lvl-pill l${lv.id}">${lv.id}</span>`).join('')}</div>
        <div class="lang-meta"><span>📚 300 aulas</span><span>Ver trilha →</span></div>
      </div>
    </div>`).join('');
  observeReveal();
}

/* ══════════════════════════════════════════
   COURSE
══════════════════════════════════════════ */
function openCourse(idx) {
  curLang = idx; curLvl = 0;
  const l = LANGS[idx];
  document.getElementById('cFlag').textContent = l.flag;
  document.getElementById('cName').textContent = l.name;
  document.getElementById('cSub').textContent  = l.native + ' · 300 aulas · 5 níveis';
  buildTabs(); renderPath(0);
  showPage('coursePage');
}

function buildTabs() {
  document.getElementById('levelTabsWrap').innerHTML = '';
}

function switchLvl(i) {
  curLvl = i;
  document.querySelectorAll('.level-tab').forEach((t, j) => {
    t.style.color        = j === i ? LVLS[i].color : '';
    t.style.borderBottom = j === i ? `3px solid ${LVLS[i].color}` : '3px solid transparent';
    t.style.marginBottom = j === i ? '-2px' : '';
  });
  renderPath(i);
}

/* ══════════════════════════════════════════
   TRILHA
══════════════════════════════════════════ */
function renderPath(li) {
  const done300 = LVLS.reduce((acc, _, vi) => acc + (progress[curLang][vi] || 0), 0);
  const total   = 300;
  const pct     = Math.round(done300 / total * 100);

  let html = `<div class="duolingo-wrap">
    <div class="level-hero-card" style="background:#e8f8ee;color:#27ae60">
      <h2>Trilha completa</h2>
      <p>300 aulas · A1 → C1</p>
      <div class="prog-bar-bg"><div class="prog-bar-fg" style="width:${pct}%;background:#27ae60"></div></div>
      <div class="prog-label">${done300} de ${total} aulas concluídas</div>
    </div>
    <div class="path-outer">`;

  for (let global = 1; global <= 300; global++) {
    const lvlIdx = Math.floor((global - 1) / 60);
    const n      = ((global - 1) % 60) + 1;
    const lv     = LVLS[lvlIdx];
    const done   = progress[curLang][lvlIdx] || 0;

    if (global > 1 && (global - 1) % 15 === 0) {
      const cpDone = done >= n - 1;
      html += `<div class="path-connector"></div>
      <div class="checkpoint">
        <span class="cp-icon">${cpDone ? '🏆' : '🔒'}</span>
        <div>
          <div class="cp-title">Revisão ${Math.floor((global-1)/15)} · ${lv.id}</div>
          <div class="cp-sub">${cpDone ? 'Concluído — continue avançando!' : 'Complete as aulas anteriores para desbloquear.'}</div>
        </div>
      </div>
      <div class="path-connector"></div>`;
    } else if (global > 1) {
      html += `<div class="path-connector"></div>`;
    }

    if (n === 1) {
      html += `<div style="text-align:center;margin:1.5rem 0 0.5rem;">
        <span style="background:${lv.bg};color:${lv.color};font-weight:700;padding:0.4rem 1.2rem;border-radius:100px;font-size:0.9rem;">
          ${lv.id} — ${lv.label}
        </span>
      </div>`;
    }

    const isFree  = global <= 5;
    const canOpen = isFree || hasAccess();

    let state, cls, icon;
    if      (n <= done)               { state='done';    cls='n-done';    icon=ICONS[(global-1)%ICONS.length]; }
    else if (n === done+1 && canOpen) { state='current'; cls='n-current'; icon=ICONS[(global-1)%ICONS.length]; }
    else if (!canOpen)                { state='locked';  cls='n-locked';  icon='💎'; }
    else                              { state='locked';  cls='n-locked';  icon='🔒'; }

    const rowClass = global===1?'node-row':(global%3===0?'node-row right':(global%3===1?'node-row left':'node-row'));

    html += `<div class="${rowClass}">
      <div class="l-node ${cls}" onclick="openLP(${lvlIdx},${n})" style="background:${state!=='locked'?lv.color:''}" title="Aula ${global}">
        <span class="n-icon">${icon}</span>
        <span class="n-label">Aula ${global}</span>
        <div class="n-tip">${lv.id} · Aula ${n}</div>
      </div>
    </div>`;
  }

  html += `</div></div>`;
  document.getElementById('pathArea').innerHTML = html;
}
    
/* ══════════════════════════════════════════
   POPUP RESUMO
══════════════════════════════════════════ */
function openLP(li, n) {
  // Aulas 6+ exigem plano
  if (n > 5 && !hasAccess()) {
    showPage('plansPage');
    return;
  }
  const lv       = LVLS[li];
  const topic    = (TOPICS[lv.id]||[])[n-1] || `Aula ${n}`;
  const chave    = `${LANGS[curLang].name}-${lv.id}-${n}`;
  const aulaData = AULAS[chave];
  const skills   = aulaData ? aulaData.skills : shuffle([...SKILLS]).slice(0,3);
  const desc     = aulaData ? aulaData.descricao : `Nesta aula você vai praticar "${topic}" com exercícios de vocabulário, gramática e compreensão.`;

  lpAtual = { li, n, lv, chave };

  document.getElementById('lpIcon').style.background = lv.bg;
  document.getElementById('lpIcon').style.color      = lv.color;
  document.getElementById('lpIcon').textContent      = aulaData ? aulaData.icon : ICONS[(n-1)%ICONS.length];
  document.getElementById('lpTitle').textContent     = `Aula ${n} — ${topic}`;
  document.getElementById('lpMeta').textContent      = `${lv.id} · ${lv.label} · ${aulaData ? aulaData.duracao : '≈ 20 min'}`;
  document.getElementById('lpDesc').textContent      = desc;
  document.getElementById('lpSkills').innerHTML      = skills.map(s=>`<span class="sk-chip">${s}</span>`).join('');
  document.getElementById('lpOverlay').classList.add('open');
}

function closeLP() { document.getElementById('lpOverlay').classList.remove('open'); }

/* ══════════════════════════════════════════
   INICIAR AULA
══════════════════════════════════════════ */
async function doStart() {
  closeLP();
  const { li, n, lv, chave } = lpAtual;
  const aulaData = AULAS[chave];
  const topic    = (TOPICS[lv.id]||[])[n-1] || `Aula ${n}`;
  const lang     = LANGS[curLang];

  document.getElementById('lessonTopFlag').textContent        = lang.flag;
  document.getElementById('lessonTopTitle').textContent       = `Aula ${n} — ${topic}`;
  document.getElementById('lessonTopBadge').textContent       = `${lv.id} · ${lv.label}`;
  document.getElementById('lessonTopBadge').style.color       = lv.color;
  document.getElementById('lessonTopBadge').style.borderColor = lv.color;
  document.getElementById('lessonTopBadge').style.background  = lv.bg;

  const area = document.getElementById('lessonContentArea');

  if (aulaData && aulaData.file) {
    try {
      const res  = await fetch(aulaData.file);
      const html = await res.text();
      area.innerHTML = `
        <div class="lesson-hero" style="background:${lv.bg};color:${lv.color}">
          <div class="lesson-hero-icon">${aulaData.icon}</div>
          <div class="lesson-hero-text">
            <h1>Aula ${n} — ${aulaData.titulo}</h1>
            <p>${lang.name} · ${lv.id} – ${lv.label} · ⏱ ${aulaData.duracao}</p>
          </div>
        </div>
        ${html}
        <div class="lesson-nav">
          <div class="lesson-complete-badge">✅ Aula concluída!</div>
          <button class="btn-next-lesson" onclick="completeAndContinue(${curLang},${li},${n})">Concluir e continuar →</button>
        </div>`;
    } catch(e) {
      area.innerHTML = `<div class="c-block" style="text-align:center;padding:3rem;">
        <div style="font-size:3rem;margin-bottom:1rem">⚠️</div>
        <div class="c-block-title" style="justify-content:center">Erro ao carregar aula</div>
        <p style="color:#5a6e8a;font-size:0.9rem;margin-top:0.5rem">Verifique se o arquivo <strong>${aulaData.file}</strong> existe.</p>
      </div>`;
    }
  } else {
    area.innerHTML = `
      <div class="lesson-hero" style="background:${lv.bg};color:${lv.color}">
        <div class="lesson-hero-icon">${ICONS[(n-1)%ICONS.length]}</div>
        <div class="lesson-hero-text">
          <h1>Aula ${n} — ${topic}</h1>
          <p>${lang.name} · ${lv.id} – ${lv.label}</p>
        </div>
      </div>
      <div class="c-block" style="text-align:center;padding:3rem;">
        <div style="font-size:3rem;margin-bottom:1rem">🚧</div>
        <div class="c-block-title" style="justify-content:center">Conteúdo em breve</div>
        <p style="color:#5a6e8a;font-size:0.9rem;margin-top:0.5rem">Esta aula ainda está sendo preparada.</p>
      </div>
      <div class="lesson-nav">
        <div></div>
        <button class="btn-next-lesson" onclick="backToCourse()">← Voltar à trilha</button>
      </div>`;
  }

  showPage('lessonPage');
  window.scrollTo(0,0);
}

async function completeAndContinue(langIdx, lvlIdx, n) {
  await markLessonDone(langIdx, lvlIdx, n);
  backToCourse();
}
/* ══════════════════════════════════════════
   EXERCÍCIOS
══════════════════════════════════════════ */
function toggleAnswer(btn) {
  const ans     = btn.nextElementSibling;
  const showing = ans.classList.toggle('show');
  btn.textContent = showing ? 'Ocultar resposta' : 'Mostrar resposta';
}

/* ══════════════════════════════════════════
   NAVEGAÇÃO
══════════════════════════════════════════ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}
function goHome()       { showPage('homePage'); }
function backToCourse() { showPage('coursePage'); renderPath(curLvl); window.scrollTo(0,0); }
function lockedMsg()    { alert('Complete as aulas anteriores para desbloquear esta.'); }

/* ══════════════════════════════════════════
   WHATSAPP
══════════════════════════════════════════ */
function openWhatsApp(msg = 'Olá! Gostaria de saber mais sobre o Denkenhaus.') {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ══════════════════════════════════════════
   AUTH MODAL
══════════════════════════════════════════ */
function openAuth(tab) { document.getElementById('authModal').classList.add('active'); switchTab(tab); }
function closeAuth()   { document.getElementById('authModal').classList.remove('active'); showAuthMsg(''); }

function switchTab(tab) {
  document.querySelectorAll('.m-tab').forEach(t  => t.classList.remove('active'));
  document.querySelectorAll('.t-panel').forEach(p => p.classList.remove('active'));
  if (tab === 'login') {
    document.getElementById('mTabL').classList.add('active');
    document.getElementById('tpL').classList.add('active');
    document.getElementById('authTitle').textContent = 'Bem-vindo de volta';
    document.getElementById('authSub').textContent   = 'Acesse sua conta e continue aprendendo.';
  } else {
    document.getElementById('mTabR').classList.add('active');
    document.getElementById('tpR').classList.add('active');
    document.getElementById('authTitle').textContent = 'Crie sua conta';
    document.getElementById('authSub').textContent   = 'Comece sua jornada linguística hoje.';
  }
}

/* ══════════════════════════════════════════
   FRANCÊS — navegação por seções
══════════════════════════════════════════ */
var frDlgIdx=0, frExIdx=0, frCvIdx=0;

function frGoSection(i) {
  document.querySelectorAll('.fr-section').forEach(s=>s.classList.remove('fr-active'));
  document.getElementById('fr-sec-'+i).classList.add('fr-active');
  document.querySelectorAll('.fr-tab').forEach((t,j)=>t.classList.toggle('fr-tab-active',j===i));
}
function frNavDlg(dir) {
  document.getElementById('fr-dlg-'+frDlgIdx).style.display='none';
  frDlgIdx=Math.max(0,Math.min(2,frDlgIdx+dir));
  document.getElementById('fr-dlg-'+frDlgIdx).style.display='block';
  document.getElementById('fr-dlg-prev').disabled=frDlgIdx===0;
  document.getElementById('fr-dlg-info').textContent='Diálogo '+(frDlgIdx+1)+' de 3';
  const btn=document.getElementById('fr-dlg-next');
  if(frDlgIdx===2){btn.textContent='Vocabulário →';btn.onclick=()=>frGoSection(1);}
  else{btn.textContent='Próximo →';btn.onclick=()=>frNavDlg(1);}
}
function frNavEx(dir) {
  document.getElementById('fr-ex-'+frExIdx).style.display='none';
frExIdx=Math.max(0,Math.min(document.querySelectorAll('[id^="fr-ex-"]').length-1,frExIdx+dir));
  document.getElementById('fr-ex-'+frExIdx).style.display='block';
  document.getElementById('fr-ex-prev').disabled=frExIdx===0;
  const total = document.querySelectorAll('[id^="fr-ex-"]').length;
document.getElementById('fr-ex-info').textContent = `Question ${frExIdx + 1} de ${total}`;
  const btn=document.getElementById('fr-ex-next');
  if(frExIdx===document.querySelectorAll('[id^="fr-ex-"]').length-1){btn.textContent='Conversação →';btn.onclick=()=>frGoSection(4);}
  else{btn.textContent='Próximo →';btn.onclick=()=>frNavEx(1);}
}
function frNavCv(dir) {
  document.getElementById('fr-cv-'+frCvIdx).style.display='none';
  frCvIdx=Math.max(0,Math.min(2,frCvIdx+dir));
  document.getElementById('fr-cv-'+frCvIdx).style.display='block';
  document.getElementById('fr-cv-prev').disabled=frCvIdx===0;
  const labels=['Perguntas 1–3 de 9','Perguntas 4–6 de 9','Perguntas 7–9 de 9'];
  document.getElementById('fr-cv-info').textContent=labels[frCvIdx];
  document.getElementById('fr-cv-next').disabled=frCvIdx===2;
  document.getElementById('fr-cv-next').textContent=frCvIdx===2?'Concluído':'Próximo →';
}

/* ══════════════════════════════════════════
   UTILS
══════════════════════════════════════════ */
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function observeReveal(){
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

/* ── INIT ── */
document.getElementById('authModal').addEventListener('click',e=>{if(e.target.id==='authModal')closeAuth();});
document.getElementById('lpOverlay').addEventListener('click',e=>{if(e.target.id==='lpOverlay')closeLP();});

initAuth();
buildHome();
