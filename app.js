// ============================================================
//  교사를 위한 바이브코딩 연수 - App JS
// ============================================================

// ============================================================
//  FIREBASE
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyASKlSSBCKUe6gnm3DuDT-s33Z64T82oHo",
  authDomain: "won-s-vibe.firebaseapp.com",
  databaseURL: "https://won-s-vibe-default-rtdb.firebaseio.com",
  projectId: "won-s-vibe",
  storageBucket: "won-s-vibe.firebasestorage.app",
  messagingSenderId: "899599719435",
  appId: "1:899599719435:web:16222bfa1fff7279523b0e",
  measurementId: "G-LCTCPFLB0F"
};
let db;
try {
  firebase.initializeApp(firebaseConfig);
  db = firebase.database();
} catch (e) {
  console.error('Firebase 초기화 실패:', e);
  db = null;
}

// ============================================================
//  THEME TOGGLE
// ============================================================
const htmlEl = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
htmlEl.setAttribute('data-theme', savedTheme);

const themeToggle = document.getElementById('themeToggle');
function updateThemeBtn(t) {
  themeToggle.innerHTML = t === 'dark'
    ? '<span class="material-symbols-outlined">light_mode</span>'
    : '<span class="material-symbols-outlined">dark_mode</span>';
}
updateThemeBtn(savedTheme);
themeToggle.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeBtn(next);
});

// ============================================================
//  I18N
// ============================================================
function cacheKorean() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (!el.hasAttribute('data-ko')) el.setAttribute('data-ko', el.textContent);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    if (!el.hasAttribute('data-ko-html')) el.setAttribute('data-ko-html', el.innerHTML);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    if (!el.hasAttribute('data-ko-ph')) el.setAttribute('data-ko-ph', el.getAttribute('placeholder') || '');
  });
}

const en = {
  'nav-logo': 'Vibe Coding for All Teachers',
  'nav-why': 'WHY (Chichiboo Vibe Coding)',
  'nav-how': 'HOW (Meal Kit)',
  'nav-lesson': 'WHAT (Fine Dining)',
  'nav-network': 'Community (Open Kitchen)',
  'hero-badge': 'Vibe Coding for All Teachers',
  'hero-title': 'Build Web Apps<br/><span class="gradient-text">That Change Your Classroom</span>',
  'hero-desc': 'With AI, teachers can create<br/><strong>their own lesson apps</strong> today.',
  'toc-title': 'Contents',
  'hero-btn-start': 'Start Workshop →',
  'hero-btn-practice': 'Build Lesson App',
  'hero-stat1-num': '3 Stages',
  'hero-stat1-label': 'Structured Workshop',
  'hero-stat2-label': 'Development Framework',
  'hero-stat3-num': 'Challenge',
  'hero-stat3-label': 'Start Today',
  'ch01-tag': 'CHAPTER 01 · Chichiboo Vibe Coding',
  'ch01-title': "Chichiboo's Vibe Coding",
  'ch01-desc': 'With AI, the era of teachers building their own classroom tools has arrived.',
  'why-sub1-title': 'Why Vibe Coding Now?',
  'why-sub1-desc': 'The evolution of teaching tools and AI\'s role',
  'why-sub2-title': 'The Essence of Vibe Coding',
  'why-sub2-desc': '4 core principles more important than coding skills',
  'why-sub3-title': 'Benefits of Vibe Coding',
  'why-sub3-desc': 'Your imagination, brought to life',
  'adv1-title': 'Fast',
  'adv1-desc': 'From idea to finished web app in just one day. AI writes the code for you, making development dramatically faster.',
  'adv2-title': 'Easy',
  'adv2-desc': 'No coding knowledge needed. Describe what you want in plain language, and AI creates working code. Anyone can start.',
  'adv3-title': 'Creative',
  'adv3-desc': 'Break free from platform constraints and build tools made exclusively for your class. Bring any idea to life.',
  'val1-title': 'If You Imagine It, You Can Build It',
  'val1-desc': 'Turn your teaching ideas into web apps and use them right away in the classroom',
  'val2-title': 'AI Supports You from A to Z',
  'val2-desc': 'From planning to coding, refining, and deployment — with AI every step of the way',
  'val3-title': 'Classroom Customization',
  'val3-desc': 'Tools built with only what you need, tailored to your routines and classroom context',
  'val4-title': 'From Consumer to Creator',
  'val4-desc': 'Move beyond using materials to creating your own teaching tools',
  'timeline-title': 'The Evolution of Classroom Materials',
  'tl-hwp-label': 'Hangul (HWP)',
  'tl-ppt-label': 'PowerPoint',
  'tl-canva-label': 'Canva',
  'tl-webapp-label': 'Web App',
  'tl-hint': 'Click a stage to see its characteristics and limitations.',
  'concept1-title': 'Classroom Example: Activity App',
  'concept1-desc': 'An app the teacher built. Students connect via smartphone and share results in real time.',
  'concept2-title': 'Built on the Same Day',
  'concept2-desc': 'If you get an idea today, you can finish the web app today. AI writes the code for you.',
  'concept3-title': 'Share With One Link',
  'concept3-desc': 'No printing needed. Share one link and it becomes interactive learning material.',
  'concept4-title': 'Perfectly Tailored for Your Class',
  'concept4-desc': 'Without platform constraints, build exactly what your students need.',
  'quote-cite': '— Antoine de Saint-Exupéry',
  'ch02-tag': 'CHAPTER 02 · Meal Kit',
  'ch02-title': 'Vibe Coding Essentials',
  'ch02-desc': 'AI tools organized by your vibe coding approach.',
  'tc1-desc': 'The starting point of vibe coding — chat with AI and see results instantly',
  'tc2-desc': 'AI agents plan, execute, and verify on their own. You just set direction and review',
  'tc3-title': 'All-in-One Vibe Coding',
  'tc3-desc': 'From idea to app creation and deployment — all within one platform',
  'tc4-title': 'Deploy',
  'tc4-desc': 'Publish your vibe-coded app as a live service. One-click deployment',
  'tool-chatgpt': 'Describe your idea and it writes code instantly. Preview and edit in Canvas',
  'tool-gemini-idea': 'Connects with Google Docs and Drive. Upload images or documents to build apps',
  'tool-claude': 'Preview your app live while chatting (Artifacts). Handles complex code accurately',
  'tool-canva': 'Build interactive apps directly inside Canva. Free for K-12 educators',
  'tool-codex': 'State your goal and it codes and tests automatically. Works with your ChatGPT account',
  'tool-claude-code': 'Give plain-language instructions; it handles the entire coding process on its own',
  'tool-cursor': 'AI understands your whole project and auto-edits multiple files at once',
  'tool-replit': 'Start instantly in the browser — no setup needed. AI auto-builds and deploys your app',
  'tool-lovable': 'One prompt generates a complete app with login and database. Auto-syncs to GitHub',
  'tool-github': 'The central hub for saving and versioning your code — where all AI outputs come together',
  'tool-netlify': 'Connect your GitHub repo and it deploys automatically. One link, accessible to anyone',
  'tc-act-label': 'Key Activities',
  'tc1-act1': 'Describe your idea to generate a code draft instantly',
  'tc1-act2': 'Preview results live with Canvas, Artifacts, or Canva Code',
  'tc1-act3': 'Refine and finish through back-and-forth conversation',
  'tc2-act1': 'State your task goal in plain language',
  'tc2-act2': 'Agent writes, tests, and fixes code autonomously',
  'tc2-act3': 'Review the result and approve or give feedback',
  'tc3-act1': 'Generate your entire app structure with a prompt',
  'tc3-act2': 'Refine with visual editing or follow-up prompts',
  'tc3-act3': 'Deploy directly on the platform or sync to GitHub',
  'tc4-act1': 'Sync code to GitHub and manage versions',
  'tc4-act2': 'One-click deployment with Netlify',
  'tc4-act3': 'Auto-redeploy on every code change',
  'how-part1-title': 'Tools',
  'how-part2-title': 'VIBE Framework',
  'how-part2-desc': 'Remember four steps. From idea to finished lesson app.',
  'practice-prompts-desc': 'Copy a prompt below and paste it into a generative AI tool to practice.',
  'practice-empty': 'No practice prompts added yet.',
  'vibe-v-title': 'Visualize — Imagine & Visualize',
  'vibe-v-sub': 'Picture what kind of app your class needs',
  'vibe-i-title': 'Interact — AI Interaction',
  'vibe-i-sub': 'Describe your vision to AI and receive the code',
  'vibe-b-title': 'Build — Implement',
  'vibe-b-sub': 'Run the AI-generated code and check the results',
  'vibe-e-title': 'Execute & Evolve — Run & Advance',
  'vibe-e-sub': 'Use in class, gather feedback, and improve',
  'ch04-tag': 'CHAPTER 03 · Fine Dining',
  'ch04-title': 'Build Your Own Lesson App',
  'ch04-desc': "Enter your details below to auto-generate a prompt for AI",
  'lesson-activity-label': 'App Name',
  'lesson-activity-placeholder': 'e.g. Pros & Cons Discussion App',
  'lesson-goal-label': 'App Concept & Goal',
  'lesson-goal-placeholder': "e.g. Let students vote on issues and see results visualized in real time",
  'lesson-process-label': 'User Flow',
  'lesson-process-placeholder': 'e.g. Name → choose agree/disagree → reason → submit → view results',
  'lesson-grade-label': 'Target Audience',
  'lesson-grade-placeholder': 'e.g. 8th grade',
  'lesson-gen-btn': 'Auto-Generate Prompt',
  'lesson-output-title': 'Generated Prompt',
  'lesson-copy-btn': 'Copy',
  'lesson-next-title': '<strong>Next steps:</strong>',
  'next-basic-label': 'Basic',
  'next-basic-subtitle': 'Preview with Canvas',
  'next-basic-1': 'Copy the prompt above and paste it into a generative AI tool.',
  'next-basic-2': 'Review results live in the Canvas panel and refine through conversation.',
  'next-basic-3': 'Share the finished result directly as a Canvas link.',
  'next-adv-label': 'Advanced',
  'next-adv-subtitle': 'Save generated code as index.html',
  'next-adv-1': 'Copy the code generated from the prompt above.',
  'next-adv-2': 'Save the code as an index.html file.',
  'next-adv-3': 'Deploy and use via a hosting service (Vercel, GitHub Pages, etc.).',
  'ch05-tag': 'CHAPTER 04 · Open Kitchen',
  'ch05-title': 'Vibe Coding Gallery',
  'ch05-desc': "Experience each other's apps firsthand and exchange creative inspiration.",
  'network-name-label': 'Name (nickname ok)',
  'network-name-placeholder': 'e.g. Teacher Kim',
  'network-title-label': 'App Name',
  'network-title-placeholder': 'e.g. Group Discussion App',
  'network-desc-label': 'App Description',
  'network-desc-placeholder': 'e.g. Students submit opinions and see results in real time',
  'network-url-label': 'Web App Link',
  'network-url-placeholder': 'https://...',
  'network-pw-label': 'Set Password',
  'network-pw-placeholder': 'Password for editing/deleting',
  'network-pw-notice': 'Password is encrypted and stored securely. Required for editing or deleting.',
  'network-consent-label': 'Promotional Use Consent (required)',
  'network-consent-text': 'I agree to allow this app to be used for Vibe Coding One-Day Class promotion.',
  'network-consent-agree': 'I Agree',
  'network-consent-disagree': 'I Disagree',
  'network-submit-btn': 'Share',
  'gallery-title': '<span class="material-symbols-outlined">wall_art</span> Work Gallery',
  'gallery-empty': 'No works shared yet. Be the first!',
  'cta-title': 'Build Your First Lesson App Right Now',
  'cta-desc': "If you have an idea, that's enough.<br/>Complete your first app today.",
  'cta-step1': 'Imagine & Visualize',
  'cta-step2': 'AI Interaction',
  'cta-step3': 'Build',
  'cta-step4': 'Run & Advance',
  'cta-btn': 'Start Fine Dining →',
  'footer-main': 'Created by. 교육뮤지컬 꿈꾸는 치수쌤',
  'footer-sub': 'Made with Vibe Coding · 2026',

  // Quote
  'quote-text': '"Perfection is achieved, not when there is nothing more to add,<br/>but when there is nothing left to take away."',

  // Tool tag
  'recommended-tag': 'Recommended',

  // Practice Prompts section title
  'practice-prompts-title': 'Practice Prompts',

  // VIBE Step V — Visualize
  'vibe-v-teacher-example-h4': '<span class="material-symbols-outlined">track_changes</span> Teacher Activity Example',
  'vibe-v-teacher-example-desc': 'Imagine your students need an app to submit group discussion results.',
  'vibe-v-viz-questions-label': 'Visualization Questions',
  'vibe-v-q1': 'What will students input in this app?',
  'vibe-v-q2': 'What screen does the teacher see?',
  'vibe-v-q3': 'At which stage of the lesson is it used?',
  'vibe-v-tip': '<strong><span class="material-symbols-outlined">emoji_objects</span> Tip:</strong> Sketch your screen on paper first. A drawing helps you explain more precisely to AI.',

  // VIBE Step I — Interact
  'vibe-i-prompt-structure-h4': '<span class="material-symbols-outlined">assignment</span> Ideal First Prompt Structure',
  'vibe-i-prompt-line1': '<span class="pt-label">I am:</span> [Teacher / Subject]',
  'vibe-i-prompt-line2': '<span class="pt-label">Purpose:</span> [What lesson activity it\'s for]',
  'vibe-i-prompt-line3': '<span class="pt-label">Users:</span> [Students / Grade level]',
  'vibe-i-prompt-line4': '<span class="pt-label">Key Features:</span> [3 things students can do]',
  'vibe-i-prompt-line5': '<span class="pt-label">Format:</span> Single HTML/CSS/JS file',
  'vibe-i-real-example-h4': '<span class="material-symbols-outlined">history_edu</span> Real Teacher Example',
  'vibe-i-example-code': '"I am a middle school social studies teacher.\n\nPlease create a web app for students to submit debate opinions.\n\n- Students enter their name, choose agree/disagree, and write a reason\n- Show overall results as a bar chart after submission\n- Teacher mode: button to reset results\n- Must look good on mobile\n- Build as a single HTML, CSS, JS file"',
  'vibe-i-tip': '<strong><span class="material-symbols-outlined">emoji_objects</span> Tip:</strong> Stating "I am a teacher" helps AI better understand the educational context.',

  // VIBE Step B — Build
  'vibe-b-run-methods-h4': '<span class="material-symbols-outlined">desktop_windows</span> Running the Code (2 Methods)',
  'vibe-b-method1-label': 'Method 1: Local File (Easiest)',
  'vibe-b-method1-step1': 'Copy AI code → Save as <code>index.html</code>',
  'vibe-b-method1-step2': 'Double-click the file → Opens instantly in browser',
  'vibe-b-method2-label': 'Method 2: Replit (No install, instant sharing)',
  'vibe-b-method2-step1': 'Go to replit.com → Create a new Repl',
  'vibe-b-method2-step2': 'Paste code → Click Run',
  'vibe-b-method2-step3': 'URL auto-generated → Share with students instantly',
  'vibe-b-debug-h4': '<span class="material-symbols-outlined">bug_report</span> When an Error Occurs',
  'vibe-b-debug-code': '"I got this error. Please fix it:\n[paste error message here]"',
  'vibe-b-tip': '<strong><span class="material-symbols-outlined">emoji_objects</span> Tip:</strong> Copy the error message as-is and paste it to AI — most issues are solved immediately.',

  // VIBE Step E — Execute & Evolve
  'vibe-e-cycle-h4': '<span class="material-symbols-outlined">sync</span> Post-Lesson Improvement Cycle',
  'vibe-e-cycle-apply': 'Apply in Class',
  'vibe-e-cycle-feedback': 'Collect Feedback',
  'vibe-e-cycle-request': 'Request AI Improvements',
  'vibe-e-cycle-next': 'Use in Next Lesson',
  'vibe-e-improvement-h4': '<span class="material-symbols-outlined">playlist_add_check</span> Good Improvement Request Examples',
  'vibe-e-feedback-bad-label': '<span class="material-symbols-outlined">close</span> Vague Request',
  'vibe-e-feedback-bad-text': '"Students found it uncomfortable. Fix it."',
  'vibe-e-feedback-good-label': '<span class="material-symbols-outlined">done</span> Specific Request',
  'vibe-e-feedback-good-text': '"Buttons were too small to tap on mobile. Please make them twice as large."',
  'vibe-e-deploy-h4': '<span class="material-symbols-outlined">school</span> Deploy & Share with Students',
  'vibe-e-deploy-step1': 'Upload to GitHub Pages or Vercel',
  'vibe-e-deploy-step2': 'Convert the URL to a QR code (search "QR code generator" on Google)',
  'vibe-e-deploy-step3': 'Insert QR code into lesson materials → Students scan it',
  'vibe-e-tip': '<strong><span class="material-symbols-outlined">emoji_objects</span> Tip:</strong> Your first app doesn\'t need to be perfect. Improving it a little each lesson is the key.',
};

let currentLang = localStorage.getItem('lang') || 'ko';

// Admin text override caches — must be declared BEFORE applyTranslations() is called
let _adminI18nCache = {};   // { lang: { key: val } }
let _adminCustomCache = {}; // { textId: val }

function applyTranslations(lang) {
  if (lang === 'ko') {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const orig = el.getAttribute('data-ko');
      if (orig !== null) el.textContent = orig;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const orig = el.getAttribute('data-ko-html');
      if (orig !== null) el.innerHTML = orig;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const orig = el.getAttribute('data-ko-ph');
      if (orig !== null) el.setAttribute('placeholder', orig);
    });
  } else {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (en[key] !== undefined) el.textContent = en[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (en[key] !== undefined) el.innerHTML = en[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (en[key] !== undefined) el.setAttribute('placeholder', en[key]);
    });
  }
  htmlEl.lang = lang;
  document.getElementById('langToggle').textContent = lang === 'ko' ? 'EN' : 'KO';
  applyAdminTextOverrides(lang);
  applyCustomTextOverrides();
}

cacheKorean();
applyTranslations(currentLang);

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  localStorage.setItem('lang', currentLang);
  applyTranslations(currentLang);
  renderEvoCards();
  renderEssenceCards();
  loadGallery();
  resetTerminal();
});

// ---- Navbar ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));

const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

// ---- Step accordion ----
function toggleStep(id) { document.getElementById(id).classList.toggle('open'); }

// ---- Tool category accordion ----
function toggleToolCat(id) { document.getElementById(id).classList.toggle('open'); }

// ---- Floating TOC ----
function toggleToc() {
  const drawer = document.getElementById('tocDrawer');
  const overlay = document.getElementById('tocOverlay');
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
}

function closeToc() {
  document.getElementById('tocDrawer').classList.remove('open');
  document.getElementById('tocOverlay').classList.remove('open');
}

function tocScrollTo(id) {
  closeToc();
  const el = document.getElementById(id);
  if (!el) return;
  if (el.classList.contains('step') && !el.classList.contains('open')) {
    el.classList.add('open');
  }
  setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 320);
}

document.addEventListener('DOMContentLoaded', () => {
  renderEvoCards();
  renderEssenceCards();
  loadGallery();
  loadPracticePrompts();
  _initCustomTextIds();
  initAdminOverrideListeners();
});

// ---- Evolution Cards ----
const evoData = {
  ko: [
    {
      era: 'HWP', icon: '📄', title: '한글(HWP) 시대',
      features: ['인쇄 기반 활동지 제작', '학생이 직접 쓰고 기록', '결과물 눈으로 확인·공유'],
      limits: ['학생 수준별 맞춤 설계 어려움', '모둠 활동 시 일부 학생만 참여하기 쉬움', '수정 시 재인쇄 필요'],
      therefore: '더 효과적으로 보여주고 안내할 수 있는 방식이 필요해졌습니다',
    },
    {
      era: 'PPT', icon: '📊', title: 'PowerPoint 시대',
      features: ['시각 중심 설명 가능', '수업 흐름을 구조적으로 설계', '교사의 전달력 강화'],
      limits: ['학생 참여가 교사 진행에 의존', '학생의 생각이 수업에서 드러나기 어려움', '여전히 교사 중심 자료'],
      therefore: '학생 간 협업과 과정·결과의 시각화가 가능한 방식이 필요해졌습니다',
    },
    {
      era: 'Canva', icon: '🎨', title: 'Canva 시대',
      features: ['템플릿 기반 빠른 제작', '링크로 간편 공유', '실시간 협업으로 학생 참여 확대'],
      limits: ['템플릿과 기능 범위 내에서만 구현 가능', '수업 맥락에 딱 맞는 설계에 한계', '"이 기능만 있으면" 을 구현하기 어려움'],
      therefore: '내 수업에 맞게 직접 만들고 싶다는 필요가 생깁니다',
    },
    {
      era: 'Web App', icon: '🌐', title: 'Web App 시대 (지금)',
      features: ['학생이 직접 조작하는 상호작용 중심 수업', '수업 스타일·흐름에 맞게 도구 설계', '학생 수준·학급 특성에 맞춘 맞춤형 활동', '계속 수정·개선하며 쓰는 살아있는 도구'],
      isNow: true,
      highlight1: '도구에 수업을 맞추던 시대',
      highlight2: '→ 수업에 맞게 도구를 만드는 시대',
      highlight3: 'AI 덕분에, 코딩 없이도 이것이 가능해졌습니다',
    },
  ],
  en: [
    {
      era: 'HWP', icon: '📄', title: 'Hangul (HWP) Era',
      features: ['Print-based activity sheets', 'Students write and record directly', 'Results visible and shareable'],
      limits: ['Hard to customize by student level', 'Some students dominate group activities', 'Reprinting needed after edits'],
      therefore: 'A more effective way to guide and present was needed',
    },
    {
      era: 'PPT', icon: '📊', title: 'PowerPoint Era',
      features: ['Visual-first presentations', 'Structured lesson flow design', 'Stronger teacher delivery'],
      limits: ["Student participation depends on teacher's style", 'Student ideas rarely surface in class', 'Still teacher-centered material'],
      therefore: 'A way to enable student collaboration and visualize process/results was needed',
    },
    {
      era: 'Canva', icon: '🎨', title: 'Canva Era',
      features: ['Fast creation with templates', 'Easy link-based sharing', 'Real-time collaboration expands participation'],
      limits: ['Limited to existing templates and features', 'Hard to design for specific lesson context', '"I wish I could add this" stays a wish'],
      therefore: 'Teachers started wanting to build exactly what their class needs',
    },
    {
      era: 'Web App', icon: '🌐', title: 'Web App Era (Now)',
      features: ['Student-driven interactive activities', 'Tools designed to fit your teaching style', "Customized for your students' level & class", 'Living tools you can keep improving'],
      isNow: true,
      highlight1: 'Fitting lessons into tools',
      highlight2: '→ Building tools to fit your lessons',
      highlight3: 'Thanks to AI, no coding skills required',
    },
  ],
};

function renderEvoCards() {
  const container = document.getElementById('evo-cards-container');
  if (!container) return;
  const lang = currentLang === 'en' ? 'en' : 'ko';
  const stages = evoData[lang];
  const isEN = lang === 'en';
  const sectionTitle = isEN ? 'The Evolution of Classroom Tools' : '수업도구의 진화';
  const featLabel = isEN ? '✅ Features' : '✅ 특징';
  const limLabel = isEN ? '⚠️ Limitations' : '⚠️ 한계';
  const keyChangeLabel = isEN ? '🔥 Key Change' : '🔥 핵심 변화';

  let html = `<div class="evo-section">
    <h3 class="evo-section-title"><span class="material-symbols-outlined">auto_stories</span>${sectionTitle}</h3>
    <div class="evo-flow">`;

  stages.forEach((s, i) => {
    if (i > 0) html += `<div class="evo-flow-arrow"><span>→</span></div>`;
    if (s.isNow) {
      html += `<div class="evo-card evo-card--now">
        <div class="evo-card-top">
          <span class="evo-era-badge evo-era-now">${s.era}</span>
          <h4 class="evo-card-title">${s.title}</h4>
        </div>
        <div class="evo-block">
          <div class="evo-block-label evo-feat">${featLabel}</div>
          <ul class="evo-block-list">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>
        <div class="evo-now-box">
          <div class="evo-now-label">${keyChangeLabel}</div>
          <div class="evo-hl-from">${s.highlight1}</div>
          <div class="evo-hl-to">${s.highlight2}</div>
          <div class="evo-hl-ai">${s.highlight3}</div>
        </div>
      </div>`;
    } else {
      html += `<div class="evo-card">
        <div class="evo-card-top">
          <span class="evo-era-badge">${s.era}</span>
          <h4 class="evo-card-title">${s.title}</h4>
        </div>
        <div class="evo-block">
          <div class="evo-block-label evo-feat">${featLabel}</div>
          <ul class="evo-block-list">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>
        <div class="evo-block">
          <div class="evo-block-label evo-limit">${limLabel}</div>
          <ul class="evo-block-list evo-list-limit">${s.limits.map(l => `<li>${l}</li>`).join('')}</ul>
        </div>
        <div class="evo-therefore">👉 ${s.therefore}</div>
      </div>`;
    }
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

// ---- Essence Cards ----
const essenceData = {
  ko: [
    {
      num: '①', title: '코딩? 문제 해결!',
      bad: '기술', good: '방향',
      conclusion: '👉 학급의 문제를 해결하다',
    },
    {
      num: '②', title: '완벽한 앱보다 자주 쓰는 앱',
      bad: '올인원 서비스', good: '간지러움을 긁어주는 서비스',
      conclusion: '👉 단순해도 뾰족하다',
    },
    {
      num: '③', title: '개발자가 아니라, 교사답게',
      bad: '기술 중심', good: '수업 루틴 중심',
      conclusion: '👉 내 수업에 딱 맞추다',
    },
    {
      num: '④', title: 'Less is More',
      bad: '기능을 많이 넣는 것', good: '꼭 필요한 기능만',
      conclusion: '👉 더 이상 덜어낼 것이 없다',
    },
  ],
  en: [
    {
      num: '①', title: 'Problem-Solving, Not Coding',
      bad: 'Code', good: 'Direction',
      conclusion: '👉 "What problem do I want to solve?"',
    },
    {
      num: '②', title: 'A Tool for Now, Not a Perfect App',
      bad: 'All-in-one service', good: 'A small feature you can use tomorrow',
      conclusion: '👉 Small but precise tools',
    },
    {
      num: '③', title: 'Build Like a Teacher, Not a Developer',
      bad: 'Technology-centered', good: 'Lesson context-centered',
      conclusion: '👉 Not "well-built" — but "well-matched"',
    },
    {
      num: '④', title: 'Less is More',
      bad: 'Cramming in features', good: 'Only what is truly needed',
      conclusion: '👉 Simpler means stronger in the classroom',
    },
  ],
};

function renderEssenceCards() {
  const container = document.getElementById('essence-cards-container');
  if (!container) return;
  const lang = currentLang === 'en' ? 'en' : 'ko';
  const items = essenceData[lang];
  const isEN = lang === 'en';

  let html = `<div class="essence-grid">`;
  items.forEach(item => {
    let bodyHtml = '';
    if (item.body) bodyHtml += `<p class="essence-body">${item.body}</p>`;
    if (item.bad && item.good) {
      bodyHtml += `<div class="essence-contrast">
        <span class="contrast-bad">${item.bad}</span>
        <span class="contrast-sep">&lt;</span>
        <span class="contrast-good">${item.good}</span>
      </div>`;
    }
    html += `<div class="essence-card">
      <div class="essence-num">${item.num}</div>
      <div class="essence-content">
        <h4 class="essence-title">${item.title}</h4>
        ${bodyHtml}
        <div class="essence-conclusion">${item.conclusion}</div>
      </div>
    </div>`;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// ---- Lesson Prompt Generator ----
function generateLessonPrompt() {
  const activity = document.getElementById('lessonActivity').value.trim();
  const goal = document.getElementById('lessonGoal').value.trim();
  const process = document.getElementById('lessonProcess').value.trim();
  const grade = document.getElementById('lessonGrade').value.trim();
  if (!activity || !goal) {
    alert(currentLang === 'en' ? 'Please enter the app name and concept.' : '앱 이름과 기획 의도를 입력해주세요.');
    return;
  }
  const gradeLabel = grade || (currentLang === 'en' ? 'all students' : '해당 학년');
  const processLabel = process || (currentLang === 'en' ? 'Students input, submit, and view collective results' : '학생들이 입력하고 제출하면 전체 결과를 볼 수 있는 형태');
  let prompt;
  if (currentLang === 'en') {
    prompt = `[System Role]
You are an educational technology expert and full-stack web developer. Your mission is to create an intuitive, beautifully designed classroom web app tailored to the level of ${gradeLabel} students.

[Input Information]
* App Name: ${activity}
* App Concept & Goal: ${goal}
* User Flow & Key Features: ${processLabel}

[Technical Guidelines (strictly follow)]
1. Single-file structure: Write all HTML, CSS (Tailwind), and JS in one index.html file.
2. UI/UX Design:
   - Use Tailwind CSS to create a polished, modern interface.
   - Apply a soft pastel color system that feels friendly and approachable to students.
   - Design mobile-first and responsive, with PC as the primary target but full smartphone support.
3. Data handling: Use the browser's LocalStorage to save and load data — no server required. (Data persists after refresh)
4. User experience: Include detailed UX touches such as button click feedback (animations) and input validation.

[Educational Guidelines]
* Difficulty: Use simple language and UI so ${gradeLabel} students can start using the app immediately without any instructions.
* Language: Write all interface text and guidance messages in Korean.

[Output Instructions]
* Add detailed Korean comments throughout the code organized by feature, so the teacher can easily modify it later.
* Output complete, ready-to-run code that can be previewed immediately using the Canvas feature.`;
  } else {
    prompt = `[시스템 역할]
너는 교육공학 전문가이자 풀스택 웹 개발자야. ${gradeLabel} 학생 수준에 맞춘 직관적이고 아름다운 수업용 웹앱을 제작하는 것이 너의 임무야.

[입력 정보]
* 앱 이름: ${activity}
* 기획 의도: ${goal}
* 핵심 기능 및 흐름: ${processLabel}

[기술적 가이드라인 (반드시 준수)]
1. 단일 파일 구조: HTML, CSS(Tailwind), JS를 하나의 index.html 파일로 작성해줘.
2. 디자인(UI/UX):
   - Tailwind CSS를 사용하여 세련되고 현대적인 UI로 제작해.
   - 부드러운 파스텔톤 컬러 시스템을 사용하고 학생들에게 친숙한 느낌을 줘.
   - PC 사용을 기본으로 하되, 스마트폰 사용을 고려한 모바일 우선(Mobile-First) 반응형 디자인을 적용해.
3. 데이터 처리: 서버 없이 작동하도록 브라우저의 LocalStorage를 활용해 데이터를 저장하고 불러와. (새로고침해도 데이터 유지)
4. 사용자 경험: 버튼 클릭 시 피드백(애니메이션), 입력값 유효성 검사 등 디테일한 UX를 포함해.

[교육적 가이드라인]
* 난이도 조절: ${gradeLabel} 학생들이 별도의 설명 없이도 바로 사용할 수 있도록 용어와 UI를 아주 쉽게 구성해줘.
* 언어: 모든 인터페이스와 안내 메시지는 한국어로 작성해.

[출력 지시]
* 코드 내부에 선생님이 추후 수정하기 쉽도록 핵심 기능별로 상세한 한글 주석을 달아줘.
* 캔버스(Canvas) 기능을 통해 바로 확인하고 실행할 수 있는 완성된 코드를 출력해줘.`;
  }
  const out = document.getElementById('lessonOutput');
  document.getElementById('lessonPromptText').value = prompt;
  out.style.display = 'block';
  out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyLessonPrompt() {
  const ta = document.getElementById('lessonPromptText');
  ta.select();
  document.execCommand('copy');
  const btn = document.querySelector('.copy-btn');
  const textSpan = btn.querySelector('[data-i18n]') || btn;
  const orig = textSpan.textContent;
  textSpan.textContent = currentLang === 'en' ? '✅ Copied!' : '✅ 복사됨!';
  setTimeout(() => { textSpan.textContent = orig; }, 2000);
}

// ============================================================
//  GALLERY — Firebase REST API 방식 (SDK 리스너 대신 fetch 사용)
// ============================================================
const _DB_URL = 'https://won-s-vibe-default-rtdb.firebaseio.com';

function _ghash(pw) {
  return Array.from(pw).reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0);
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(String(str || '')));
  return d.innerHTML;
}

function _renderItems(items) {
  const grid = document.getElementById('galleryGrid');
  const empty = document.getElementById('galleryEmpty');
  if (!items || items.length === 0) {
    grid.style.display = 'none';
    empty.innerHTML = currentLang === 'en' ? 'No works in the gallery yet.' : '갤러리에 작품이 없습니다.';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  grid.style.display = 'grid';
  const likedKeys = JSON.parse(localStorage.getItem('likedGallery') || '[]');
  const visitLabel = currentLang === 'en' ? 'Visit App' : '앱 방문하기';
  const editLabel  = currentLang === 'en' ? 'Edit' : '수정';
  const delLabel   = currentLang === 'en' ? 'Delete' : '삭제';
  const parts = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const liked = likedKeys.includes(item.key);
    const likeCount = item.likes || 0;
    const descHtml = item.desc ? '<div class="gallery-item-desc">' + escapeHtml(item.desc) + '</div>' : '';
    const consentHtml = item.consent === undefined ? '' :
      item.consent
        ? '<span class="gallery-consent agree">' + (currentLang === 'en' ? '✅ Promotion OK' : '✅ 홍보 동의') + '</span>'
        : '<span class="gallery-consent disagree">' + (currentLang === 'en' ? '🚫 No Promotion' : '🚫 홍보 비동의') + '</span>';
    parts.push(
      '<div class="gallery-item">' +
        '<div class="gallery-item-header">' +
          '<span class="gallery-name">' + escapeHtml(item.name) + '</span>' +
          '<span class="gallery-date">' + escapeHtml(item.date) + '</span>' +
        '</div>' +
        '<div class="gallery-item-title">' + escapeHtml(item.title) + '</div>' +
        descHtml +
        consentHtml +
        '<a href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener noreferrer" class="gallery-link">🔗 ' + visitLabel + '</a>' +
        '<div class="gallery-item-actions">' +
          '<button class="gallery-like-btn' + (liked ? ' liked' : '') + '" onclick="toggleLike(\'' + item.key + '\')">' + (liked ? '❤️' : '🤍') + ' ' + likeCount + '</button>' +
          '<button class="gallery-action-btn" onclick="galleryEdit(\'' + item.key + '\')">' + editLabel + '</button>' +
          '<button class="gallery-action-btn del" onclick="galleryDelete(\'' + item.key + '\')">' + delLabel + '</button>' +
        '</div>' +
      '</div>'
    );
  }
  grid.innerHTML = parts.join('');
}

// REST API로 gallery 데이터 가져오기 — Object.entries()로 배열 변환
// v2026-03-18
function loadGallery() {
  var grid = document.getElementById('galleryGrid');
  var empty = document.getElementById('galleryEmpty');
  // 로딩 중 표시
  if (grid) grid.style.display = 'none';
  if (empty) {
    empty.style.display = 'block';
    empty.innerHTML = '<span style="opacity:0.6">⏳ 갤러리 불러오는 중...</span>';
  }

  fetch(_DB_URL + '/gallery.json')
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      // Firebase REST API는 객체({key: {…}, …}) 또는 null 반환
      if (!data || typeof data !== 'object') {
        _renderItems([]);
        return;
      }
      // Object.entries()로 배열로 변환 후 최신순 정렬
      var items = Object.entries(data).map(function(pair) {
        return Object.assign({ key: pair[0] }, pair[1]);
      });
      items.sort(function(a, b) { return (b.ts || 0) - (a.ts || 0); });
      _renderItems(items);
    })
    .catch(function(err) {
      console.error('Gallery fetch error:', err);
      // 오류를 화면에도 표시
      if (empty) {
        empty.style.display = 'block';
        empty.innerHTML = '❌ 갤러리 로딩 오류: ' + err.message +
          '<br><small style="opacity:0.6">브라우저 콘솔(F12)을 확인해주세요.</small>';
      }
      if (grid) grid.style.display = 'none';
    });
}

function toggleLike(key) {
  if (!db) return;
  const likedKeys = JSON.parse(localStorage.getItem('likedGallery') || '[]');
  const alreadyLiked = likedKeys.includes(key);
  const btn = document.querySelector('.gallery-like-btn[onclick*="' + key + '"]');

  // Optimistic UI update
  if (btn) {
    const nowLiked = !alreadyLiked;
    const currentCount = parseInt(btn.textContent.replace(/[^\d]/g, '')) || 0;
    btn.innerHTML = (nowLiked ? '❤️' : '🤍') + ' ' + (nowLiked ? currentCount + 1 : Math.max(currentCount - 1, 0));
    btn.classList.toggle('liked', nowLiked);
  }

  db.ref('gallery/' + key + '/likes').transaction(function(current) {
    if (alreadyLiked) return Math.max((current || 1) - 1, 0);
    return (current || 0) + 1;
  }).then(function(result) {
    if (alreadyLiked) {
      localStorage.setItem('likedGallery', JSON.stringify(likedKeys.filter(function(k) { return k !== key; })));
    } else {
      likedKeys.push(key);
      localStorage.setItem('likedGallery', JSON.stringify(likedKeys));
    }
    // Sync real count from Firebase
    if (btn) {
      const realCount = result.snapshot.val() || 0;
      const nowLiked = !alreadyLiked;
      btn.innerHTML = (nowLiked ? '❤️' : '🤍') + ' ' + realCount;
    }
  });
}

function submitToNetwork() {
  const name = document.getElementById('networkName').value.trim();
  const title = document.getElementById('networkTitle').value.trim();
  const desc = document.getElementById('networkDesc').value.trim();
  const url = document.getElementById('networkUrl').value.trim();
  const pw = document.getElementById('networkPw').value.trim();
  if (!name || !title || !url) {
    alert(currentLang === 'en' ? 'Please fill in all required fields.' : '이름, 앱 이름, 링크를 모두 입력해주세요.');
    return;
  }
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    alert(currentLang === 'en' ? 'Please enter a valid URL (https://).' : '유효한 링크를 입력해주세요 (https://로 시작).');
    return;
  }
  if (!pw) {
    alert(currentLang === 'en' ? 'Please set a password for editing/deleting.' : '수정/삭제를 위한 비밀번호를 설정해주세요.');
    return;
  }
  if (!_consentState) {
    alert(currentLang === 'en' ? 'Please select your consent for promotional use.' : '홍보 활용 동의 여부를 선택해주세요.');
    return;
  }
  if (!db) { alert(currentLang === 'en' ? '❌ Database unavailable.' : '❌ 데이터베이스에 연결할 수 없습니다.'); return; }
  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
  db.ref('gallery').push({ name, title, desc, url, date: dateStr, pwHash: _ghash(pw), ts: Date.now(), likes: 0, consent: _consentState === 'agree' })
    .then(function() {
      ['networkName', 'networkTitle', 'networkDesc', 'networkUrl', 'networkPw'].forEach(function(id) { document.getElementById(id).value = ''; });
      setConsent(null);
      _consentState = null;
      loadGallery();
      alert(currentLang === 'en' ? '🎉 Shared successfully!' : '🎉 공유되었습니다!');
    })
    .catch(err => {
      console.error('Submit error:', err);
      alert(currentLang === 'en'
        ? '❌ Failed to share. Please check Firebase security rules.'
        : '❌ 공유에 실패했습니다. Firebase 보안 규칙을 확인해주세요.');
    });
}

// Consent state
let _consentState = null;
function setConsent(state) {
  _consentState = state;
  document.getElementById('consentAgree').classList.toggle('active', state === 'agree');
  document.getElementById('consentDisagree').classList.toggle('active', state === 'disagree');
}

// PW Modal state
let _pwCallback = null;
function pwModalOpen(title, cb) {
  _pwCallback = cb;
  document.getElementById('pwModalTitle').innerHTML = '<span class="material-symbols-outlined">key</span> ' + title;
  document.getElementById('pwModalInput').value = '';
  document.getElementById('pwModal').classList.add('open');
  setTimeout(() => document.getElementById('pwModalInput').focus(), 100);
}
function pwModalClose() {
  document.getElementById('pwModal').classList.remove('open');
  _pwCallback = null;
}
function pwModalConfirm() {
  const pw = document.getElementById('pwModalInput').value;
  if (_pwCallback) _pwCallback(pw);
  pwModalClose();
}

function galleryEdit(key) {
  if (isAdminMode) { _doGalleryEdit(key, null, true); return; }
  pwModalOpen(currentLang === 'en' ? 'Enter Password to Edit' : '수정 비밀번호 입력', (pw) => _doGalleryEdit(key, pw, false));
}
function galleryDelete(key) {
  if (isAdminMode) { _doGalleryDelete(key, null, true); return; }
  pwModalOpen(currentLang === 'en' ? 'Enter Password to Delete' : '삭제 비밀번호 입력', (pw) => _doGalleryDelete(key, pw, false));
}

function _doGalleryEdit(key, pw, isAdmin) {
  if (!db) return;
  db.ref('gallery/' + key).once('value').then(snapshot => {
    const item = snapshot.val();
    if (!item) return;
    if (!isAdmin && _ghash(pw) !== item.pwHash) {
      alert(currentLang === 'en' ? '❌ Incorrect password.' : '❌ 비밀번호가 맞지 않습니다.');
      return;
    }
    const newTitle = prompt(currentLang === 'en' ? 'New app name:' : '새 앱 이름:', item.title);
    if (newTitle === null) return;
    const newDesc = prompt(currentLang === 'en' ? 'New description:' : '새 앱 소개:', item.desc || '');
    if (newDesc === null) return;
    const newUrl = prompt(currentLang === 'en' ? 'New URL:' : '새 링크:', item.url);
    if (newUrl === null) return;
    const updates = {};
    if (newTitle.trim()) updates.title = newTitle.trim();
    updates.desc = newDesc.trim();
    if (newUrl.trim()) updates.url = newUrl.trim();
    db.ref('gallery/' + key).update(updates);
  });
}

function _doGalleryDelete(key, pw, isAdmin) {
  if (!db) return;
  db.ref('gallery/' + key).once('value').then(snapshot => {
    const item = snapshot.val();
    if (!item) return;
    if (!isAdmin && _ghash(pw) !== item.pwHash) {
      alert(currentLang === 'en' ? '❌ Incorrect password.' : '❌ 비밀번호가 맞지 않습니다.');
      return;
    }
    if (!confirm(currentLang === 'en' ? 'Delete this item?' : '삭제하시겠습니까?')) return;
    db.ref('gallery/' + key).remove().then(function() { loadGallery(); });
  });
}

// ============================================================
//  PRACTICE PROMPTS  — Firebase backend
// ============================================================
function loadPracticePrompts() {
  const list = document.getElementById('practicePromptsList');
  const emptyMsg = document.getElementById('practiceEmptyMsg');
  if (!list) return;
  list.querySelectorAll('.practice-prompt-item').forEach(el => el.remove());

  fetch(_DB_URL + '/practicePrompts.json')
    .then(res => res.json())
    .then(data => {
      list.querySelectorAll('.practice-prompt-item').forEach(el => el.remove());
      if (!data || typeof data !== 'object') {
        if (emptyMsg) emptyMsg.style.display = 'block';
        return;
      }
      const items = Object.entries(data).map(([key, val]) => ({ key, ...val }));
      items.sort((a, b) => (a.order || 0) - (b.order || 0));
      if (items.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
        return;
      }
      if (emptyMsg) emptyMsg.style.display = 'none';
      items.forEach(p => {
        const item = document.createElement('div');
        item.className = 'practice-prompt-item';
        item.dataset.key = p.key;
        item.innerHTML = `
          <div class="practice-prompt-item-header" onclick="togglePracticeItem('${p.key}')">
            <span class="practice-prompt-title">${escapeHtml(p.title)}</span>
            <div class="practice-prompt-header-actions">
              <button class="practice-prompt-copy" data-key="${p.key}" onclick="event.stopPropagation(); copyPracticePrompt('${p.key}')">
                <span class="material-symbols-outlined">content_paste</span>
              </button>
              <span class="material-symbols-outlined practice-prompt-chevron">expand_more</span>
            </div>
          </div>
          <div class="practice-prompt-content" id="ppc-${p.key}" style="display:none">${escapeHtml(p.content)}</div>`;
        list.appendChild(item);
      });
    })
    .catch(err => {
      console.error('Practice prompts fetch error:', err);
      if (emptyMsg) emptyMsg.style.display = 'block';
    });
}

function togglePracticeItem(key) {
  const content = document.getElementById('ppc-' + key);
  const item = document.querySelector(`.practice-prompt-item[data-key="${key}"]`);
  if (!content || !item) return;
  const isOpen = content.style.display !== 'none';
  content.style.display = isOpen ? 'none' : 'block';
  const chevron = item.querySelector('.practice-prompt-chevron');
  if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
}

function copyPracticePrompt(key) {
  const item = document.querySelector(`.practice-prompt-item[data-key="${key}"]`);
  const contentEl = item ? item.querySelector('.practice-prompt-content') : null;
  const text = contentEl ? contentEl.textContent : '';
  if (!text) return;
  navigator.clipboard.writeText(text).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
  const btn = document.querySelector(`.practice-prompt-copy[data-key="${key}"]`);
  if (btn) {
    btn.innerHTML = '<span class="material-symbols-outlined">done</span><span class="copy-feedback-text">복사됨</span>';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<span class="material-symbols-outlined">content_paste</span>';
      btn.classList.remove('copied');
    }, 2000);
  }
}

// ============================================================
//  ADMIN MODE
//  Password obfuscated — do not store plaintext
// ============================================================
let isAdminMode = false;
let textEditMode = false;
let _currentEditKey = null;

// djb2-like hash (computed for access code)
function _vc(p) {
  const h = Array.from(p).reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0);
  return h === 1545093;
}

function openAdminModal() {
  if (isAdminMode) {
    document.getElementById('adminLoginView').style.display = 'none';
    document.getElementById('adminPanelView').style.display = 'block';
  } else {
    document.getElementById('adminLoginView').style.display = 'block';
    document.getElementById('adminPanelView').style.display = 'none';
    document.getElementById('adminPwInput').value = '';
  }
  document.getElementById('adminOverlay').classList.add('open');
  setTimeout(() => {
    const inp = document.getElementById('adminPwInput');
    if (inp && !isAdminMode) inp.focus();
  }, 100);
}

function closeAdminModal() {
  document.getElementById('adminOverlay').classList.remove('open');
}

function openAdminPanel() {
  document.getElementById('adminLoginView').style.display = 'none';
  document.getElementById('adminPanelView').style.display = 'block';
  document.getElementById('adminOverlay').classList.add('open');
  renderAdminPromptList();
  renderAdminGalleryList();
}

function adminLogin() {
  const pw = document.getElementById('adminPwInput').value;
  if (!_vc(pw)) {
    alert('비밀번호가 맞지 않습니다.');
    return;
  }
  isAdminMode = true;
  document.getElementById('adminBar').classList.add('visible');
  document.body.classList.add('admin-active');
  document.getElementById('adminLoginView').style.display = 'none';
  document.getElementById('adminPanelView').style.display = 'block';
  renderAdminPromptList();
  renderAdminGalleryList();
}

function adminLogout() {
  isAdminMode = false;
  textEditMode = false;
  document.getElementById('adminBar').classList.remove('visible');
  document.body.classList.remove('admin-active');
  document.querySelectorAll('.admin-text-highlight').forEach(el => {
    el.classList.remove('admin-text-highlight');
    el.removeEventListener('click', _onTextEditClick);
  });
  document.getElementById('adminEditNotice').classList.remove('visible');
  textEditMode = false;
  closeAdminModal();
}

// Assign stable data-text-id to all non-i18n text elements (deterministic order)
let _textIdSeed = 0;
function _initCustomTextIds() {
  _textIdSeed = 0;
  const SEL = 'h1,h2,h3,h4,h5,h6,p,li,dt,dd,cite,blockquote,th,td,span,label,a';
  document.querySelectorAll(SEL).forEach(el => {
    if (el.hasAttribute('data-i18n') || el.hasAttribute('data-i18n-html')) return;
    if (el.closest('script,style,noscript,input,textarea,button,select')) return;
    if (!el.textContent.trim()) return;
    // Skip if already assigned or if parent already has one (avoid double)
    if (el.hasAttribute('data-text-id')) return;
    el.setAttribute('data-text-id', 'tx' + (_textIdSeed++));
  });
}

function toggleTextEditMode() {
  if (!isAdminMode) return;
  textEditMode = !textEditMode;
  const notice = document.getElementById('adminEditNotice');
  if (textEditMode) {
    notice.classList.add('visible');
    // i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.classList.add('admin-text-highlight');
      el.addEventListener('click', _onTextEditClick);
    });
    // All other text elements
    document.querySelectorAll('[data-text-id]').forEach(el => {
      el.classList.add('admin-text-highlight');
      el.addEventListener('click', _onTextEditClick);
    });
  } else {
    notice.classList.remove('visible');
    document.querySelectorAll('.admin-text-highlight').forEach(el => {
      el.classList.remove('admin-text-highlight');
      el.removeEventListener('click', _onTextEditClick);
    });
  }
  closeAdminModal();
}

function _onTextEditClick(e) {
  if (!textEditMode) return;
  e.stopPropagation();
  const i18nKey = this.getAttribute('data-i18n');
  const textId = this.getAttribute('data-text-id');
  if (!i18nKey && !textId) return;
  _currentEditKey = i18nKey ? ('i18n:' + i18nKey) : ('custom:' + textId);
  const modal = document.getElementById('adminTextModal');
  document.getElementById('adminTextInput').value = this.textContent;
  modal.classList.add('open');
  setTimeout(() => document.getElementById('adminTextInput').focus(), 100);
}

// ---- Admin text overrides: Firebase-backed, real-time across devices ----

function _applyI18nCache(lang) {
  const overrides = _adminI18nCache[lang] || {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (overrides[key] !== undefined) el.textContent = overrides[key];
  });
}

function _applyCustomCache() {
  document.querySelectorAll('[data-text-id]').forEach(el => {
    const textId = el.getAttribute('data-text-id');
    if (!el.hasAttribute('data-orig-text')) el.setAttribute('data-orig-text', el.textContent);
    if (_adminCustomCache[textId] !== undefined) el.textContent = _adminCustomCache[textId];
  });
}

function initAdminOverrideListeners() {
  if (!db) return;
  // i18n overrides (all languages)
  db.ref('adminOverrides/i18n').on('value', function(snapshot) {
    _adminI18nCache = snapshot.val() || {};
    _applyI18nCache(currentLang);
  });
  // custom text overrides
  db.ref('adminOverrides/custom').on('value', function(snapshot) {
    _adminCustomCache = snapshot.val() || {};
    _applyCustomCache();
  });
}

function saveAdminText() {
  if (!_currentEditKey) return;
  if (!db) { closeAdminTextModal(); return; }
  const val = document.getElementById('adminTextInput').value;
  if (_currentEditKey.startsWith('i18n:')) {
    const key = _currentEditKey.slice(5);
    db.ref('adminOverrides/i18n/' + currentLang + '/' + key).set(val);
    document.querySelectorAll('[data-i18n="' + key + '"]').forEach(function(el) { el.textContent = val; });
  } else {
    const textId = _currentEditKey.slice(7);
    db.ref('adminOverrides/custom/' + textId).set(val);
    document.querySelectorAll('[data-text-id="' + textId + '"]').forEach(function(el) { el.textContent = val; });
  }
  closeAdminTextModal();
}

function resetAdminText() {
  if (!_currentEditKey) return;
  if (!db) { closeAdminTextModal(); return; }
  if (_currentEditKey.startsWith('i18n:')) {
    const key = _currentEditKey.slice(5);
    db.ref('adminOverrides/i18n/' + currentLang + '/' + key).remove();
    const defVal = currentLang === 'ko'
      ? document.querySelector('[data-i18n="' + key + '"]')?.getAttribute('data-ko')
      : en[key];
    if (defVal) document.querySelectorAll('[data-i18n="' + key + '"]').forEach(function(el) { el.textContent = defVal; });
  } else {
    const textId = _currentEditKey.slice(7);
    db.ref('adminOverrides/custom/' + textId).remove();
    const el = document.querySelector('[data-text-id="' + textId + '"]');
    if (el && el.hasAttribute('data-orig-text')) el.textContent = el.getAttribute('data-orig-text');
  }
  closeAdminTextModal();
}

function closeAdminTextModal() {
  document.getElementById('adminTextModal').classList.remove('open');
  _currentEditKey = null;
}

// Called from applyTranslations — applies cached overrides synchronously
function applyAdminTextOverrides(lang) {
  _applyI18nCache(lang);
}

function applyCustomTextOverrides() {
  _applyCustomCache();
}

// Admin: practice prompts  — Firebase backend
let _editingPromptKey = null;

function adminAddPrompt() {
  if (!db) return;
  const title = document.getElementById('adminPromptTitle').value.trim();
  const content = document.getElementById('adminPromptContent').value.trim();
  if (!title || !content) { alert('제목과 내용을 모두 입력해주세요.'); return; }
  const done = () => {
    adminCancelEditPrompt();
    loadPracticePrompts();
    renderAdminPromptList();
  };
  if (_editingPromptKey) {
    db.ref('practicePrompts/' + _editingPromptKey).update({ title, content }).then(done);
  } else {
    db.ref('practicePrompts').push({ title, content, order: Date.now() }).then(done);
  }
}

function adminCancelEditPrompt() {
  _editingPromptKey = null;
  document.getElementById('adminPromptTitle').value = '';
  document.getElementById('adminPromptContent').value = '';
  const submitBtn = document.getElementById('adminPromptSubmitBtn');
  const cancelBtn = document.getElementById('adminPromptCancelBtn');
  if (submitBtn) { submitBtn.textContent = '+ 추가'; }
  if (cancelBtn) { cancelBtn.style.display = 'none'; }
}

function adminEditPrompt(key, title, content) {
  _editingPromptKey = key;
  document.getElementById('adminPromptTitle').value = title;
  document.getElementById('adminPromptContent').value = content;
  const submitBtn = document.getElementById('adminPromptSubmitBtn');
  const cancelBtn = document.getElementById('adminPromptCancelBtn');
  if (submitBtn) { submitBtn.textContent = '수정 완료'; }
  if (cancelBtn) { cancelBtn.style.display = ''; }
  document.getElementById('adminPromptTitle').focus();
}

function adminDeletePrompt(key) {
  if (!db) return;
  if (!confirm('삭제하시겠습니까?')) return;
  if (_editingPromptKey === key) adminCancelEditPrompt();
  db.ref('practicePrompts/' + key).remove().then(() => {
    loadPracticePrompts();
    renderAdminPromptList();
  });
}

function renderAdminPromptList() {
  const list = document.getElementById('adminPromptList');
  if (!list) return;
  fetch(_DB_URL + '/practicePrompts.json')
    .then(res => res.json())
    .then(data => {
      if (!data || typeof data !== 'object') {
        list.innerHTML = '<p style="font-size:0.82rem;color:var(--text-dim);">등록된 프롬프트 없음</p>';
        return;
      }
      const items = Object.entries(data).map(([key, val]) => ({ key, ...val }));
      items.sort((a, b) => (a.order || 0) - (b.order || 0));
      if (items.length === 0) {
        list.innerHTML = '<p style="font-size:0.82rem;color:var(--text-dim);">등록된 프롬프트 없음</p>';
        return;
      }
      list.innerHTML = items.map(p => {
        const t = JSON.stringify(p.title).replace(/"/g, '&quot;');
        const c = JSON.stringify(p.content).replace(/"/g, '&quot;');
        return `
        <div class="admin-gallery-item">
          <span>${escapeHtml(p.title)}</span>
          <div style="display:flex;gap:6px;flex-shrink:0;">
            <button class="admin-gallery-edit" onclick="adminEditPrompt('${p.key}', ${t}, ${c})">수정</button>
            <button class="admin-gallery-del" onclick="adminDeletePrompt('${p.key}')">삭제</button>
          </div>
        </div>`;
      }).join('');
    })
    .catch(() => {
      list.innerHTML = '<p style="font-size:0.82rem;color:var(--text-dim);">목록 로딩 오류</p>';
    });
}

function renderAdminGalleryList() {
  if (!db) return;
  db.ref('gallery').orderByChild('ts').once('value').then(snapshot => {
    const list = document.getElementById('adminGalleryList');
    if (!list) return;
    if (!snapshot.exists()) { list.innerHTML = '<p style="font-size:0.82rem;color:var(--text-dim);">갤러리 항목 없음</p>'; return; }
    const items = [];
    snapshot.forEach(child => items.unshift({ key: child.key, ...child.val() }));
    if (items.length === 0) { list.innerHTML = '<p style="font-size:0.82rem;color:var(--text-dim);">갤러리 항목 없음</p>'; return; }
    list.innerHTML = items.map(item => `
      <div class="admin-gallery-item">
        <span>${escapeHtml(item.name)} — ${escapeHtml(item.title)}</span>
        <button class="admin-gallery-del" onclick="adminDeleteGallery('${item.key}')">삭제</button>
      </div>`).join('');
  });
}

function adminDeleteGallery(key) {
  if (!db) return;
  if (!confirm('갤러리 항목을 삭제하시겠습니까?')) return;
  db.ref('gallery/' + key).remove().then(function() {
    loadGallery();
    renderAdminGalleryList();
  });
}

// ============================================================
//  TERMINAL ANIMATION
// ============================================================
const terminalLines = {
  ko: [
    { type: 'prompt', text: "$ Won\u2019s Vibe Coding" },
    { type: 'output', text: '✻ 치수쌤 바이브코딩 v2.1.0 실행 중...', delay: 400 },
    { type: 'blank', delay: 200 },
    { type: 'prompt', text: '> 나는 누구야?' },
    { type: 'info', text: '⠸ 정체성 분석 중...', delay: 600 },
    { type: 'output', text: '👨‍🏫 경기도교육청 초등교사 로드 완료', delay: 500 },
    { type: 'output', text: '🎭 교육뮤지컬 엔진 연결 중...', delay: 600 },
    { type: 'output', text: '💡 따뜻한 디지털 교육 실행 중...', delay: 500 },
    { type: 'output', text: '📘 \u300e세상에서 가장 쉬운 뮤지컬 수업\u300f 저자 로드 완료', delay: 600 },
    { type: 'success', text: "\u2713 완료! \u2018교육뮤지컬 꿈꾸는 치수쌤\u2019이 활성화되었습니다.", delay: 700 },
    { type: 'blank', delay: 300 },
    { type: 'prompt', text: '> 어떤 걸 만들고 있어?' },
    { type: 'info', text: '⠸ 프로젝트 스캔 중...', delay: 600 },
    { type: 'output', text: '🎶 교육과정 연계 예술·기술 융합수업 디자인 중...', delay: 600 },
    { type: 'output', text: '🌐 생각과 감성을 키우는 디지털 수업 도구 개발 중...', delay: 500 },
    { type: 'output', text: '🤝 디지털 기반 사회정서·세계시민교육 활동 진행 중...', delay: 600 },
    { type: 'success', text: '✓ 실행 완료! 의미 있는 배움이 생성되었습니다.', delay: 700 },
    { type: 'blank', delay: 300 },
    { type: 'prompt', text: '> 더 알고 싶어' },
    { type: 'info', text: '⠸ 외부 링크 연결 중...', delay: 600 },
    { type: 'link', text: '🔗 litt.ly/chichiboo', href: 'https://litt.ly/chichiboo', delay: 500 },
    { type: 'success', text: '✓ 접속하면 더 많은 프로젝트를 확인할 수 있습니다.', delay: 500 },
  ],
  en: [
    { type: 'prompt', text: "$ Won\u2019s Vibe Coding" },
    { type: 'output', text: "✻ Chisu\u2019s Vibe Coding v2.1.0 running...", delay: 400 },
    { type: 'blank', delay: 200 },
    { type: 'prompt', text: '> Who am I?' },
    { type: 'info', text: '⠸ Analyzing identity...', delay: 600 },
    { type: 'output', text: '👨‍🏫 Elementary Teacher (Gyeonggido Office of Education) loaded', delay: 500 },
    { type: 'output', text: '🎭 Educational Musical Theatre Engine connected', delay: 600 },
    { type: 'output', text: '💡 Warm Digital Education running...', delay: 500 },
    { type: 'output', text: '📘 Author of "The Easiest Musical Theatre Class in the World" loaded', delay: 600 },
    { type: 'success', text: '✓ Complete! "Dreaming of Educational Musical Theatre, Chisu-Saem" is now activated.', delay: 700 },
    { type: 'blank', delay: 300 },
    { type: 'prompt', text: '> What am I creating?' },
    { type: 'info', text: '⠸ Scanning projects...', delay: 600 },
    { type: 'output', text: '🎶 Designing curriculum-connected arts & technology integrated lessons...', delay: 600 },
    { type: 'output', text: '🌐 Developing digital learning tools that grow thinking and emotion...', delay: 500 },
    { type: 'output', text: '🤝 Running SEL & global citizenship projects through digital learning...', delay: 600 },
    { type: 'success', text: '✓ Execution complete! Meaningful learning has been generated.', delay: 700 },
    { type: 'blank', delay: 300 },
    { type: 'prompt', text: '> Want to know more?' },
    { type: 'info', text: '⠸ Connecting external link...', delay: 600 },
    { type: 'link', text: '🔗 litt.ly/chichiboo', href: 'https://litt.ly/chichiboo', delay: 500 },
    { type: 'success', text: '✓ Visit to explore more projects.', delay: 500 },
  ],
};

let lines = terminalLines[currentLang] || terminalLines.ko;
let lineIndex = 0, charIndex = 0, currentEl = null;
let _termGen = 0; // 세대 카운터: 언어 전환 시 구형 타이머 무효화

function typeChar(gen) {
  if (gen !== _termGen) return; // 구형 세대 타이머 무효화
  if (lineIndex >= lines.length) {
    const cur = document.createElement('span');
    cur.className = 't-cursor';
    document.getElementById('terminalBody').appendChild(cur);
    return;
  }
  const line = lines[lineIndex];
  if (!currentEl) {
    setTimeout(() => {
      if (gen !== _termGen) return;
      if (line.type === 'blank') {
        document.getElementById('terminalBody').appendChild(document.createElement('br'));
        lineIndex++; currentEl = null; typeChar(gen); return;
      }
      const div = document.createElement('div');
      div.className = 't-line';
      let el;
      if (line.type === 'link') {
        el = document.createElement('a');
        el.href = line.href;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
        el.className = 't-link';
      } else {
        el = document.createElement('span');
        el.className = line.type === 'prompt' ? 't-prompt' : line.type === 'success' ? 't-success' : line.type === 'info' ? 't-info' : 't-output';
      }
      div.appendChild(el);
      currentEl = el;
      document.getElementById('terminalBody').appendChild(div);
      charIndex = 0;
      typeNextChar(gen);
    }, line.delay || 0);
  }
}

function typeNextChar(gen) {
  if (gen !== _termGen) return; // 구형 세대 타이머 무효화
  const line = lines[lineIndex];
  if (charIndex < line.text.length) {
    currentEl.textContent += line.text[charIndex++];
    const tb = document.getElementById('terminalBody');
    if (tb) tb.scrollTop = tb.scrollHeight;
    setTimeout(() => typeNextChar(gen), line.type === 'prompt' ? 40 : 20);
  } else {
    lineIndex++; currentEl = null; typeChar(gen);
  }
}

function resetTerminal() {
  _termGen++;
  lineIndex = 0; charIndex = 0; currentEl = null;
  lines = terminalLines[currentLang] || terminalLines.ko;
  const tb = document.getElementById('terminalBody');
  if (tb) tb.innerHTML = '';
  const gen = _termGen;
  setTimeout(() => typeChar(gen), 300);
}

setTimeout(() => typeChar(_termGen), 800);

// ---- Active nav link ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => a.classList.toggle('active-nav', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' });
sections.forEach(s => observer.observe(s));

const styleEl = document.createElement('style');
styleEl.textContent = '.nav-link.active-nav { color: var(--primary-light) !important; background: rgba(99,102,241,0.1) !important; }';
document.head.appendChild(styleEl);

// ---- Dictionary popup (window.open) ----
document.getElementById('dictToggle').addEventListener('click', () => {
  const w = 900, h = 700;
  const left = Math.round((screen.width - w) / 2);
  const top = Math.round((screen.height - h) / 2);
  window.open(
    'https://chichiboo.link/vibedic',
    '바이브코딩 기초 용어 사전',
    `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`
  );
});
