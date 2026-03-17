// ============================================================
//  교사를 위한 바이브코딩 연수 - App JS
// ============================================================

// ============================================================
//  THEME TOGGLE
// ============================================================
const htmlEl = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);

const themeToggle = document.getElementById('themeToggle');

function updateThemeBtn(theme) {
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

updateThemeBtn(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeBtn(next);
});

// ============================================================
//  I18N SYSTEM
// ============================================================

function cacheKorean() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (!el.hasAttribute('data-ko')) el.setAttribute('data-ko', el.textContent);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    if (!el.hasAttribute('data-ko-html')) el.setAttribute('data-ko-html', el.innerHTML);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    if (!el.hasAttribute('data-ko-ph')) {
      el.setAttribute('data-ko-ph', el.getAttribute('placeholder') || '');
    }
  });
}

const en = {
  'nav-logo': '🍳 Teacher Vibe Coding',
  'nav-why': 'Head Chef (WHY)',
  'nav-how': 'Meal Kit (HOW)',
  'nav-vibe': 'VIBE Framework',
  'nav-lesson': 'Fine Dining',
  'nav-network': 'Network',

  'hero-badge': '2026 · AI Workshop for Teachers',
  'hero-title': 'Build Web Apps<br/><span class="gradient-text">That Change Your Classroom</span>',
  'hero-desc': 'With AI, teachers can create<br/><strong>their own lesson apps</strong> today.',
  'hero-btn-start': 'Start Workshop →',
  'hero-btn-practice': 'Build Lesson App',
  'hero-stat1-num': '4 Stages',
  'hero-stat1-label': 'Structured Workshop',
  'hero-stat2-label': 'Education Framework',
  'hero-stat3-num': 'Free',
  'hero-stat3-label': 'Fully Open',

  'ch01-tag': 'CHAPTER 01 · Head Chef',
  'ch01-title': 'Why Should Teachers Build Web Apps?',
  'ch01-desc': 'Classroom materials have evolved from Hangul to PPT, Canva, and now Web Apps. AI is at the center of that change.',
  'timeline-title': '📚 The Evolution of Classroom Materials',
  'tl-hwp-label': 'Hangul (HWP)',
  'tl-ppt-label': 'PowerPoint',
  'tl-canva-label': 'Canva',
  'tl-webapp-label': 'Web App',
  'tl-hint': 'Click a stage above to see its characteristics and limitations.',
  'concept1-title': 'Classroom Example: Activity App',
  'concept1-desc': 'An app the teacher built. Students connect via smartphone and share results in real time.',
  'concept2-title': 'Built on the Same Day',
  'concept2-desc': 'If you get an idea today, you can finish the web app today. AI writes the code for you.',
  'concept3-title': 'Share With One Link',
  'concept3-desc': 'No printing needed. Share one link and it becomes interactive learning material for any student.',
  'concept4-title': 'Perfectly Tailored for Your Class',
  'concept4-desc': 'Without the constraints of existing platforms, you can build exactly what your students need.',
  'quote-cite': '— Andrej Karpathy (Former Tesla AI Director, OpenAI Co-founder)',

  'ch02-tag': 'CHAPTER 02 · Meal Kit',
  'ch02-title': 'Preparing Your Tools',
  'ch02-desc': 'Like cooking, the right tools make it much easier. Understand tools by their role.',
  'cat1-title': 'Idea Expansion',
  'cat1-desc': 'Tools that develop lesson ideas into specific features',
  'tool-chatgpt': 'Brainstorming, concretizing activities, drafting initial prompts',
  'tool-gemini-idea': 'Google Workspace integration, lesson plan analysis, idea development',
  'cat2-title': 'Code Generation',
  'cat2-desc': 'The core tools that turn ideas into working code',
  'tool-claude': 'Understands long code contexts, accurate implementation, teacher-friendly explanations',
  'tool-gemini-code': 'Google ecosystem friendly, real-time code editing and preview',
  'cat3-title': 'App Building & Deployment',
  'cat3-desc': 'Tools to turn code into a real web app and share with students',
  'tool-replit': 'Code directly in browser, instant deploy, no installation needed',
  'tool-lovable': 'Build apps with AI, automated design, one-click deployment',
  'tool-github': 'Free hosting, permanent link, ideal for sharing with students',
  'checklist-title': '✅ Pre-Workshop Checklist',
  'check1': 'Claude.ai or Gemini account ready',
  'check2': 'One lesson activity idea noted down',
  'check3': 'GitHub account created (free)',
  'check4': '30 min–1 hour set aside',

  'ch03-tag': 'CHAPTER 03 · VIBE Framework',
  'ch03-title': 'Build Lesson Apps with V.I.B.E',
  'ch03-desc': 'Remember four steps. The journey from idea to finished lesson app.',
  'vibe-v-title': 'Visualize — Imagine',
  'vibe-v-sub': 'Picture what kind of app your class needs',
  'vibe-i-title': 'Interact — Talk with AI',
  'vibe-i-sub': 'Describe your vision to AI and receive the code',
  'vibe-b-title': 'Build — Implement',
  'vibe-b-sub': 'Run the AI-generated code and check the results',
  'vibe-e-title': 'Execute & Evolve — Run and Improve',
  'vibe-e-sub': 'Use it in class, gather feedback, and improve',

  'ch04-tag': 'CHAPTER 04 · Fine Dining',
  'ch04-title': 'Build Your Own Lesson App',
  'ch04-desc': "Enter your lesson details below and we'll automatically generate a prompt you can use with AI",
  'lesson-activity-label': '🎯 Activity Name',
  'lesson-activity-placeholder': 'e.g. Pros & Cons Discussion Submission App',
  'lesson-goal-label': '📚 Learning Objective',
  'lesson-goal-placeholder': "e.g. Visualize students' diverse opinions on environmental issues",
  'lesson-process-label': '📋 Activity Flow',
  'lesson-process-placeholder': 'e.g. Student enters name → selects agree/disagree → writes reason → submits → views results graph',
  'lesson-grade-label': '👨‍🎓 Target Grade (optional)',
  'lesson-grade-placeholder': 'e.g. 8th grade / Middle school 2nd year',
  'lesson-gen-btn': '✨ Auto-Generate Prompt',
  'lesson-output-title': '📝 Generated Prompt',
  'lesson-copy-btn': '📋 Copy',
  'lesson-next-title': '<strong>Next steps:</strong>',
  'lesson-next-1': 'Copy the prompt above',
  'lesson-next-2': 'Paste it into Claude.ai or Gemini',
  'lesson-next-3': 'Save the generated code as index.html',
  'lesson-next-4': 'Open in your browser to check',

  'ch05-tag': 'CHAPTER 05 · Network',
  'ch05-title': 'What We Built',
  'ch05-desc': "Share the lesson apps you made. Get inspired by each other's work.",
  'network-name-label': '👤 Name (nickname ok)',
  'network-name-placeholder': 'e.g. Teacher Kim, Math Teacher',
  'network-title-label': '📌 App Name',
  'network-title-placeholder': 'e.g. Group Discussion Submission App',
  'network-url-label': '🔗 Web App Link',
  'network-url-placeholder': 'https://...',
  'network-submit-btn': '🚀 Share',
  'gallery-title': '🎨 Work Gallery',
  'gallery-empty': 'No works shared yet. Be the first!',

  'cta-title': 'Build Your First Lesson App Right Now',
  'cta-desc': "If you have an idea, that's enough.<br/>Complete your first app in today's workshop.",
  'cta-step1': 'Visualize',
  'cta-step2': 'Talk with AI',
  'cta-step3': 'Build',
  'cta-step4': 'Evolve',
  'cta-btn': 'Start Fine Dining →',
  'footer-main': '🍳 Teacher Vibe Coding Workshop · For a World Where Every Teacher Can Build',
  'footer-sub': 'Made with Vibe Coding · 2026',
};

let currentLang = localStorage.getItem('lang') || 'ko';

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
}

cacheKorean();
applyTranslations(currentLang);

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  localStorage.setItem('lang', currentLang);
  applyTranslations(currentLang);
  // Re-render gallery with correct language
  loadGallery();
});

// ---- Navbar scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- Mobile nav ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- Step accordion (VIBE) ----
function toggleStep(id) {
  document.getElementById(id).classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const first = document.getElementById('step-v');
  if (first) first.classList.add('open');
  loadGallery();
});

// ---- Timeline ----
const timelineData = {
  ko: {
    hwp: {
      title: '📝 한글(HWP) 시대',
      features: ['인쇄 기반 자료 제작', '텍스트 중심', '교사가 편집, 학생은 수동적'],
      limits: ['상호작용 불가', '배포 어려움 (파일 직접 전달)', '수정 후 재인쇄 필요'],
    },
    ppt: {
      title: '📊 PowerPoint 시대',
      features: ['시각적 표현 가능', '슬라이드 구조로 발표에 최적', '애니메이션 효과'],
      limits: ['학생 참여는 여전히 수동적', '공유가 불편 (파일 전송)', '인터랙션 없음'],
    },
    canva: {
      title: '🎨 Canva 시대',
      features: ['아름다운 디자인 손쉽게', '실시간 협업 기능', '링크 공유 가능'],
      limits: ['정해진 템플릿의 제한', '인터랙티브 기능 없음', '학생 데이터 수집 불가'],
    },
    webapp: {
      title: '🌐 Web App 시대 (지금!)',
      features: ['완전한 인터랙션', '학생 데이터 실시간 수집', '어떤 기능이든 구현 가능'],
      limits: ['→ AI 덕분에 코딩 몰라도 만들 수 있습니다!'],
      isNow: true,
    },
  },
  en: {
    hwp: {
      title: '📝 Hangul (HWP) Era',
      features: ['Print-based materials', 'Text-focused', 'Teacher edits, students passive'],
      limits: ['No interactivity', 'Hard to distribute', 'Reprint needed after changes'],
    },
    ppt: {
      title: '📊 PowerPoint Era',
      features: ['Visual expression', 'Slide structure for presentations', 'Animation effects'],
      limits: ['Students still passive', 'Inconvenient sharing (file transfer)', 'No interaction'],
    },
    canva: {
      title: '🎨 Canva Era',
      features: ['Beautiful design easily', 'Real-time collaboration', 'Link sharing possible'],
      limits: ['Limited by templates', 'No interactive features', "Can't collect student data"],
    },
    webapp: {
      title: '🌐 Web App Era (Now!)',
      features: ['Full interactivity', 'Real-time student data collection', 'Any feature possible'],
      limits: ['→ Thanks to AI, anyone can build without knowing code!'],
      isNow: true,
    },
  },
};

function showTimelineDetail(key) {
  const lang = currentLang === 'en' ? 'en' : 'ko';
  const data = timelineData[lang][key];
  if (!data) return;

  document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
  document.getElementById('tl-' + key).classList.add('active');

  const featuresList = data.features.map(f => `<li>${f}</li>`).join('');
  const limitsList = data.limits.map(l => `<li>${l}</li>`).join('');
  const featLabel = lang === 'en' ? '✅ Features' : '✅ 특징';
  const limLabel = lang === 'en' ? '⚠️ Limitations' : '⚠️ 한계';

  document.getElementById('timelineDetailContent').innerHTML = `
    <div class="tl-detail-inner${data.isNow ? ' tl-now' : ''}">
      <h4>${data.title}</h4>
      <div class="tl-detail-cols">
        <div><strong>${featLabel}</strong><ul>${featuresList}</ul></div>
        <div><strong>${data.isNow ? '' : limLabel}</strong><ul>${limitsList}</ul></div>
      </div>
    </div>
  `;
}

// ---- Lesson Prompt Generator ----
function generateLessonPrompt() {
  const activity = document.getElementById('lessonActivity').value.trim();
  const goal = document.getElementById('lessonGoal').value.trim();
  const process = document.getElementById('lessonProcess').value.trim();
  const grade = document.getElementById('lessonGrade').value.trim();

  if (!activity || !goal) {
    alert(currentLang === 'en'
      ? 'Please enter the activity name and learning objective.'
      : '활동 이름과 학습 목표를 입력해주세요.');
    return;
  }

  let prompt;
  if (currentLang === 'en') {
    prompt = `I am a teacher${grade ? ' (' + grade + ')' : ''}.

Please create a web app for my classroom activity.

[Activity Name]
${activity}

[Learning Objective]
${goal}

[Activity Flow]
${process || 'Students can input responses, submit, and view collective results'}

[Requirements]
- Mobile-friendly (students use smartphones)
- Intuitive UI — no explanation needed for students
- Real-time results display if possible
- Clean, modern design
- Single HTML file (HTML + CSS + JS all in one)
- Korean language interface

Please create a fully working web app. Add comments so I can easily modify it later.`;
  } else {
    prompt = `저는 ${grade ? grade + ' ' : ''}교사입니다.

수업 활동에 사용할 웹앱을 만들어주세요.

[활동 이름]
${activity}

[학습 목표]
${goal}

[활동 과정]
${process || '학생들이 입력하고, 제출하고, 전체 결과를 볼 수 있는 형태'}

[요구사항]
- 모바일 친화적 (학생들이 스마트폰으로 사용)
- 설명 없이도 학생들이 쉽게 사용할 수 있는 직관적인 UI
- 결과 실시간 표시 (가능하면)
- 깔끔하고 현대적인 디자인
- HTML + CSS + JS를 하나의 파일로 만들어줘
- 한국어 인터페이스

완전히 동작하는 웹앱으로 만들어주세요. 나중에 선생님이 쉽게 수정할 수 있도록 주석도 달아주세요.`;
  }

  const outputSection = document.getElementById('lessonOutput');
  document.getElementById('lessonPromptText').value = prompt;
  outputSection.style.display = 'block';
  outputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyLessonPrompt() {
  const textarea = document.getElementById('lessonPromptText');
  textarea.select();
  document.execCommand('copy');
  const btn = document.querySelector('.copy-btn');
  const original = btn.getAttribute('data-original') || btn.textContent;
  btn.setAttribute('data-original', original);
  btn.textContent = currentLang === 'en' ? '✅ Copied!' : '✅ 복사됨!';
  setTimeout(() => { btn.textContent = original; }, 2000);
}

// ---- Network Gallery ----
function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function loadGallery() {
  const items = JSON.parse(localStorage.getItem('networkGallery') || '[]');
  const grid = document.getElementById('galleryGrid');
  const empty = document.getElementById('galleryEmpty');

  if (items.length === 0) {
    grid.style.display = 'none';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.style.display = 'grid';
  const visitLabel = currentLang === 'en' ? 'Visit App' : '앱 방문하기';
  grid.innerHTML = items.map(item => `
    <div class="gallery-item">
      <div class="gallery-item-header">
        <span class="gallery-name">${escapeHtml(item.name)}</span>
        <span class="gallery-date">${escapeHtml(item.date)}</span>
      </div>
      <div class="gallery-item-title">${escapeHtml(item.title)}</div>
      <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="gallery-link">
        🔗 ${visitLabel}
      </a>
    </div>
  `).join('');
}

function submitToNetwork() {
  const name = document.getElementById('networkName').value.trim();
  const title = document.getElementById('networkTitle').value.trim();
  const url = document.getElementById('networkUrl').value.trim();

  if (!name || !title || !url) {
    alert(currentLang === 'en' ? 'Please fill in all fields.' : '모든 항목을 입력해주세요.');
    return;
  }
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    alert(currentLang === 'en'
      ? 'Please enter a valid URL starting with https://'
      : '유효한 링크를 입력해주세요 (https://로 시작)');
    return;
  }

  const items = JSON.parse(localStorage.getItem('networkGallery') || '[]');
  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
  items.unshift({ name, title, url, date: dateStr });
  localStorage.setItem('networkGallery', JSON.stringify(items));

  document.getElementById('networkName').value = '';
  document.getElementById('networkTitle').value = '';
  document.getElementById('networkUrl').value = '';

  loadGallery();
  alert(currentLang === 'en' ? '🎉 Shared successfully!' : '🎉 공유되었습니다!');
}

// ---- Terminal animation ----
const terminalLines = {
  ko: [
    { type: 'prompt', text: '$ claude' },
    { type: 'output', text: '✻ Claude Code v2.1.0 시작됨', delay: 400 },
    { type: 'blank', delay: 200 },
    { type: 'prompt', text: '> 나는 중학교 교사야. 학생 투표 앱 만들어줘' },
    { type: 'info', text: '⠸ 분석 중...', delay: 600 },
    { type: 'output', text: '📁 index.html 생성 중...', delay: 800 },
    { type: 'output', text: '🎨 학생 친화적 UI 설계 중...', delay: 600 },
    { type: 'output', text: '⚡ 실시간 결과 기능 추가 중...', delay: 500 },
    { type: 'success', text: '✓ 완료! 수업 투표 앱이 생성되었습니다.', delay: 600 },
    { type: 'blank', delay: 300 },
    { type: 'prompt', text: '> 모바일에서도 잘 보이게 수정해줘' },
    { type: 'info', text: '⠸ 반응형 디자인 적용 중...', delay: 600 },
    { type: 'success', text: '✓ QR코드로 학생들과 공유하세요!', delay: 500 },
  ],
  en: [
    { type: 'prompt', text: '$ claude' },
    { type: 'output', text: '✻ Claude Code v2.1.0 started', delay: 400 },
    { type: 'blank', delay: 200 },
    { type: 'prompt', text: "> I'm a teacher. Make a student voting app" },
    { type: 'info', text: '⠸ Analyzing...', delay: 600 },
    { type: 'output', text: '📁 Creating index.html...', delay: 800 },
    { type: 'output', text: '🎨 Designing student-friendly UI...', delay: 600 },
    { type: 'output', text: '⚡ Adding real-time results...', delay: 500 },
    { type: 'success', text: '✓ Done! Classroom voting app created.', delay: 600 },
    { type: 'blank', delay: 300 },
    { type: 'prompt', text: '> Make it look good on mobile too' },
    { type: 'info', text: '⠸ Applying responsive design...', delay: 600 },
    { type: 'success', text: '✓ Share with students via QR code!', delay: 500 },
  ],
};

const lines = terminalLines[currentLang] || terminalLines.ko;
let lineIndex = 0;
let charIndex = 0;
let currentEl = null;

function typeChar() {
  if (lineIndex >= lines.length) {
    const cursor = document.createElement('span');
    cursor.className = 't-cursor';
    document.getElementById('terminalBody').appendChild(cursor);
    return;
  }

  const line = lines[lineIndex];
  const delay = line.delay || 0;

  if (!currentEl) {
    setTimeout(() => {
      if (line.type === 'blank') {
        document.getElementById('terminalBody').appendChild(document.createElement('br'));
        lineIndex++;
        currentEl = null;
        typeChar();
        return;
      }

      const div = document.createElement('div');
      div.className = 't-line';
      const span = document.createElement('span');
      span.className = line.type === 'prompt' ? 't-prompt'
        : line.type === 'success' ? 't-success'
        : line.type === 'info' ? 't-info'
        : 't-output';
      div.appendChild(span);
      currentEl = span;
      document.getElementById('terminalBody').appendChild(div);
      charIndex = 0;
      typeNextChar();
    }, delay);
  }
}

function typeNextChar() {
  const line = lines[lineIndex];
  if (charIndex < line.text.length) {
    currentEl.textContent += line.text[charIndex];
    charIndex++;
    setTimeout(typeNextChar, line.type === 'prompt' ? 40 : 20);
  } else {
    lineIndex++;
    currentEl = null;
    typeChar();
  }
}

setTimeout(typeChar, 800);

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active-nav', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' });

sections.forEach(s => observer.observe(s));

const styleEl = document.createElement('style');
styleEl.textContent = '.nav-link.active-nav { color: var(--primary-light) !important; background: rgba(99,102,241,0.1) !important; }';
document.head.appendChild(styleEl);
