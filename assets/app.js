/* ═══════════════════════════════════════
   DENKENHAUS — app.js
   ═══════════════════════════════════════ */

/* ── SUPABASE ── */
const SUPABASE_URL = 'https://yjeurxxxybbfvyzqxrjd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZXVyeHh4eWJiZnZ5enF4cmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MzAxODUsImV4cCI6MjA4ODIwNjE4NX0.vG8AyVPr7XsSBh_wvQW9OoWA9-PLCYOZZ7KuMggPaOU';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* ── WHATSAPP ── */
const WHATSAPP_NUMBER = '55988601417'; // ← coloque seu número com DDI+DDD

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
  A1: ['Presentacións','Números 1–10','Cores básicas','A familia','Comidas e bebidas','A rutina diaria','Días da semana','O alfabeto','Onde vives?','Como estás?','Animais domésticos','Partes do corpo','A hora','O tempo','Froitas e vexetais','A mochila','Na aula','Verbos esenciais','Artigos e xénero','Pronomes persoais','Cantidades','Adxectivos básicos','No mercado','Transportes','A escola','O meu cuarto','Roupa e cores','Festas','Saúdos formais','Números 11–100','Preposicións de lugar','A cidade','Profesións','Plural','Presente de indicativo','Preguntas básicas','Respostas curtas','Hora e axenda','Tempo e secuencia','O meu corpo','Saúde básica','No médico','Familia extensa','Comunicación','Internet','O aeroporto','Hotel','No restaurante','A conta','Compras','Diñeiro','As estacións','Festivos','Deportes','Xogos e lecer','Adxectivos de tamaño','Comparacións','Vocabulario temático','Repaso A1 – I','Repaso A1 – II'],
  A2: ['Pasado simple','Onte e hoxe','Contar historias','Lugares da cidade','Compras e moda','Rutina semanal','Saúde e síntomas','Na farmacia','Transporte público','Planificar viaxe','Reservar entradas','Cinema e TV','Música','Deportes e afeccións','Comparativos','Superlativos','Verbos irregulares','Tempo libre','Clima avanzado','Cociña sinxela','Receitas','Mercado e lista','Diñeiro e bancos','Comunicación dixital','Email informal','Convites','Celebracións','Amizades','Relacións','Animais e natureza','Ecoloxía','Transporte','Indicacións','Barrios','Vacacións','Hoteis','Restaurante completo','Carta e pedido','Expresións de tempo','Frecuencia','Narración pasado','Que pasou?','Familia extensa','Traballo inicial','Entrevistas','Tarefas domésticas','Escola','Eventos deportivos','Espectáculos','Repaso A2 – I','Repaso A2 – II','Situacións cotiás','Resolución de problemas','Reclamacións','Pedir información','Vocabulario A2','Expresións comúns','Diálogos reais','Frases idiomáticas','Repaso gramatical A2','Test A2'],
  B1: ['Opinións','Debater ideas','Dar consellos','Condicional','Futuro','Soños e ambicións','Traballo e carreira','CV','Entrevista de traballo','Email profesional','Reunións','Tecnoloxía','Redes sociais','Noticias e medios','Cultura pop','Literatura','Cinema','Viaxe cultural','Tradicións','Festivos globais','Gastronomía','Sustentabilidade','Medio ambiente','Saúde e estilo de vida','Deportes','Narrar eventos','Voz pasiva','Estilo indirecto','Phrasal verbs','Expresións idiomáticas B1','Vocabulario académico','Argumentar','Textos de opinión','Informe sinxelo','Presentación oral','Conectores','Cohesión','Gráficos e datos','Estatísticas','Xornalismo','Carta formal','Reclamación formal','Solicitude formal','Narrativa pasado','Diálogo dramático','Humor e ironía','Argot moderado','Variacións dialectais','Repaso B1 – I','Repaso B1 – II','Situacións complexas','Negociación básica','Debates','Debates temáticos','Vocabulario B1','Repaso gramatical','Expresións avanzadas','Frases complexas','Cohesión textual','Test B1'],
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
  return isAdmin || userPlan !== null;
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
  document.getElementById('levelTabsWrap').innerHTML = LVLS.map((lv, i) => `
    <button class="level-tab" id="lt${i}" onclick="switchLvl(${i})"
      style="${i === 0 ? `color:${lv.color};border-bottom:3px solid ${lv.color};margin-bottom:-2px` : ''}"
    >${lv.id} · ${lv.label}</button>`).join('');
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
  const lv    = LVLS[li];
  const done  = progress[curLang][li] || 0;
  const total = 60;
  const pct   = Math.round(done / total * 100);

  let html = `<div class="duolingo-wrap">
    <div class="level-hero-card" style="background:${lv.bg};color:${lv.color}">
      <h2>${lv.id} – ${lv.label}</h2>
      <p>60 aulas · Nível ${lv.id} do CEFR</p>
      <div class="prog-bar-bg"><div class="prog-bar-fg" style="width:${pct}%;background:${lv.color}"></div></div>
      <div class="prog-label">${done} de ${total} aulas concluídas</div>
    </div>
    <div class="path-outer">`;

  for (let n = 1; n <= total; n++) {
    if (n > 1 && (n - 1) % 15 === 0) {
      const cpDone = done >= n - 1;
      html += `<div class="path-connector"></div>
      <div class="checkpoint">
        <span class="cp-icon">${cpDone ? '🏆' : '🔒'}</span>
        <div>
          <div class="cp-title">Ponto de revisão ${Math.floor((n-1)/15)}</div>
          <div class="cp-sub">${cpDone ? 'Concluído — continue avançando!' : 'Complete as aulas anteriores para desbloquear.'}</div>
        </div>
      </div>
      <div class="path-connector"></div>`;
    } else if (n > 1) {
      html += `<div class="path-connector"></div>`;
    }

    let state, cls, icon;
    const isFree = n <= 5;
    const canOpen = isFree || hasAccess();
    if      (n <= done)    { state='done';    cls='n-done';    icon=ICONS[(n-1)%ICONS.length]; }
    else if (n === done+1 && canOpen) { state='current'; cls='n-current'; icon=ICONS[(n-1)%ICONS.length]; }
    else if (!canOpen)     { state='locked';  cls='n-locked';  icon='💎'; }
    else                   { state='locked';  cls='n-locked';  icon='🔒'; }

    const rowClass = n===1?'node-row':(n%3===0?'node-row right':(n%3===1?'node-row left':'node-row'));
    const oc = (state!=='locked' || isFree) ? `openLP(${li},${n})` : `openLP(${li},${n})`;

    html += `<div class="${rowClass}">
      <div class="l-node ${cls}" onclick="${oc}" style="background:${state!=='locked'?lv.color:''}" title="Aula ${n}">
        <span class="n-icon">${icon}</span>
        <span class="n-label">Aula ${n}</span>
        <div class="n-tip">Aula ${n} – ${(TOPICS[lv.id]||[])[n-1]||''}</div>
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
  frExIdx=Math.max(0,Math.min(4,frExIdx+dir));
  document.getElementById('fr-ex-'+frExIdx).style.display='block';
  document.getElementById('fr-ex-prev').disabled=frExIdx===0;
  const labels=['Frases 1–3 de 15','Frases 4–6 de 15','Frases 7–9 de 15','Frases 10–12 de 15','Frases 13–15 de 15'];
  document.getElementById('fr-ex-info').textContent=labels[frExIdx];
  const btn=document.getElementById('fr-ex-next');
  if(frExIdx===4){btn.textContent='Conversação →';btn.onclick=()=>frGoSection(4);}
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
