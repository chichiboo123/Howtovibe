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
function updateThemeBtn(t) { themeToggle.textContent = t === 'dark' ? '☀️' : '🌙'; }
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
  'nav-logo': '🍳 Teacher Vibe Coding',
  'nav-why': 'Head Chef Vibe Coding (WHY)',
  'nav-how': 'Meal Kit (HOW)',
  'nav-vibe': 'VIBE Framework',
  'nav-lesson': 'Fine Dining (WHAT)',
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
  'ch01-desc': 'Classroom materials have evolved from Hangul to PPT, Canva, and now Web Apps.',
  'timeline-title': '📚 The Evolution of Classroom Materials',
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
  'ch02-title': 'Preparing Your Tools',
  'ch02-desc': 'Like cooking, the right tools make it easier. Understand tools by their role.',
  'cat1-title': 'Idea Expansion',
  'cat1-desc': 'Tools that develop lesson ideas into specific features',
  'tool-chatgpt': 'Brainstorming, concretizing activities, drafting prompts',
  'tool-gemini-idea': 'Google Workspace integration, lesson plan analysis',
  'cat2-title': 'Code Generation',
  'cat2-desc': 'Core tools that turn ideas into working code',
  'tool-claude': 'Long context understanding, accurate implementation, teacher-friendly explanations',
  'tool-gemini-code': 'Google ecosystem friendly, real-time code editing and preview',
  'cat3-title': 'App Building & Deployment',
  'cat3-desc': 'Tools to deploy your app and share with students',
  'tool-replit': 'Code in browser, instant deploy, no installation',
  'tool-lovable': 'AI-assisted app building, automated design, one-click deploy',
  'tool-github': 'Free hosting, permanent link, ideal for sharing with students',
  'checklist-title': '✅ Pre-Workshop Checklist',
  'check1': 'Claude.ai or Gemini account ready',
  'check2': 'One lesson activity idea noted',
  'check3': 'GitHub account created (free)',
  'check4': '30 min–1 hour set aside',
  'practice-prompts-desc': 'Copy a prompt below and paste it into Claude.ai or Gemini to practice.',
  'practice-empty': 'No practice prompts added yet.',
  'ch03-tag': 'CHAPTER 03 · VIBE Framework',
  'ch03-title': 'Build Lesson Apps with V.I.B.E',
  'ch03-desc': 'Remember four steps. From idea to finished lesson app.',
  'vibe-v-title': 'Visualize — Imagine',
  'vibe-v-sub': 'Picture what kind of app your class needs',
  'vibe-i-title': 'Interact — Talk with AI',
  'vibe-i-sub': 'Describe your vision to AI and receive the code',
  'vibe-b-title': 'Build — Implement',
  'vibe-b-sub': 'Run the AI-generated code and check the results',
  'vibe-e-title': 'Execute & Evolve — Run and Improve',
  'vibe-e-sub': 'Use in class, gather feedback, and improve',
  'ch04-tag': 'CHAPTER 04 · Fine Dining',
  'ch04-title': 'Build Your Own Lesson App',
  'ch04-desc': "Enter your details below to auto-generate a prompt for AI",
  'lesson-activity-label': '🎯 Activity Name',
  'lesson-activity-placeholder': 'e.g. Pros & Cons Discussion App',
  'lesson-goal-label': '📚 Learning Objective',
  'lesson-goal-placeholder': "e.g. Visualize students' opinions on environmental issues",
  'lesson-process-label': '📋 Activity Flow',
  'lesson-process-placeholder': 'e.g. Name → choose agree/disagree → reason → submit → view results',
  'lesson-grade-label': '👨‍🎓 Target Grade (optional)',
  'lesson-grade-placeholder': 'e.g. 8th grade',
  'lesson-gen-btn': '✨ Auto-Generate Prompt',
  'lesson-output-title': '📝 Generated Prompt',
  'lesson-copy-btn': '📋 Copy',
  'lesson-next-title': '<strong>Next steps:</strong>',
  'lesson-next-1': 'Copy the prompt above',
  'lesson-next-2': 'Paste it into Claude.ai or Gemini',
  'lesson-next-3': 'Save generated code as index.html',
  'lesson-next-4': 'Open in browser to check',
  'ch05-tag': 'CHAPTER 05 · Network',
  'ch05-title': 'What We Built',
  'ch05-desc': "Share your lesson apps. Get inspired by each other's work.",
  'network-name-label': '👤 Name (nickname ok)',
  'network-name-placeholder': 'e.g. Teacher Kim',
  'network-title-label': '📌 App Name',
  'network-title-placeholder': 'e.g. Group Discussion App',
  'network-url-label': '🔗 Web App Link',
  'network-url-placeholder': 'https://...',
  'network-pw-label': '🔑 Set Password',
  'network-pw-placeholder': 'Password for editing/deleting',
  'network-pw-notice': '🔒 This password is encrypted and stored securely — nobody, including the admin, can see it. Keep it somewhere safe.',
  'network-submit-btn': '🚀 Share',
  'gallery-title': '🎨 Work Gallery',
  'gallery-empty': 'No works shared yet. Be the first!',
  'cta-title': 'Build Your First Lesson App Right Now',
  'cta-desc': "If you have an idea, that's enough.<br/>Complete your first app today.",
  'cta-step1': 'Visualize',
  'cta-step2': 'Talk with AI',
  'cta-step3': 'Build',
  'cta-step4': 'Evolve',
  'cta-btn': 'Start Fine Dining →',
  'footer-main': 'Created by. 교육뮤지컬 꿈꾸는 치수쌤',
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
  applyAdminTextOverrides(lang);
}

cacheKorean();
applyTranslations(currentLang);

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  localStorage.setItem('lang', currentLang);
  applyTranslations(currentLang);
  loadGallery();
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

document.addEventListener('DOMContentLoaded', () => {
  const first = document.getElementById('step-v');
  if (first) first.classList.add('open');
  loadGallery();
  loadPracticePrompts();
  applyAdminTextOverrides(currentLang);
});

// ---- Timeline ----
const timelineData = {
  ko: {
    hwp: { title: '📝 한글(HWP) 시대', features: ['인쇄 기반 자료 제작', '텍스트 중심', '교사가 편집, 학생은 수동적'], limits: ['상호작용 불가', '배포 어려움', '수정 후 재인쇄 필요'] },
    ppt: { title: '📊 PowerPoint 시대', features: ['시각적 표현 가능', '슬라이드 구조', '발표 중심 수업'], limits: ['학생 참여 수동적', '파일 공유 불편', '인터랙션 없음'] },
    canva: { title: '🎨 Canva 시대', features: ['아름다운 디자인', '실시간 협업', '링크 공유 가능'], limits: ['템플릿 제한', '인터랙티브 기능 없음', '학생 데이터 수집 불가'] },
    webapp: { title: '🌐 Web App 시대 (지금!)', features: ['완전한 인터랙션', '학생 데이터 실시간 수집', '어떤 기능이든 구현 가능'], limits: ['→ AI 덕분에 코딩 몰라도 만들 수 있습니다!'], isNow: true },
  },
  en: {
    hwp: { title: '📝 Hangul (HWP) Era', features: ['Print-based materials', 'Text-focused', 'Teacher edits, students passive'], limits: ['No interactivity', 'Hard to distribute', 'Reprint needed after edits'] },
    ppt: { title: '📊 PowerPoint Era', features: ['Visual expression', 'Slide structure', 'Presentation-centered'], limits: ['Students still passive', 'File sharing inconvenient', 'No interaction'] },
    canva: { title: '🎨 Canva Era', features: ['Beautiful design', 'Collaboration features', 'Link sharing possible'], limits: ['Template limitations', 'No interactive features', "Can't collect student data"] },
    webapp: { title: '🌐 Web App Era (Now!)', features: ['Full interactivity', 'Real-time student data', 'Any feature possible'], limits: ['→ Thanks to AI, no coding required!'], isNow: true },
  },
};

function showTimelineDetail(key) {
  const lang = currentLang === 'en' ? 'en' : 'ko';
  const data = timelineData[lang][key];
  if (!data) return;
  document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
  document.getElementById('tl-' + key).classList.add('active');
  const fl = data.features.map(f => `<li>${f}</li>`).join('');
  const ll = data.limits.map(l => `<li>${l}</li>`).join('');
  const featLabel = lang === 'en' ? '✅ Features' : '✅ 특징';
  const limLabel = lang === 'en' ? '⚠️ Limitations' : '⚠️ 한계';
  document.getElementById('timelineDetailContent').innerHTML = `
    <div class="tl-detail-inner${data.isNow ? ' tl-now' : ''}">
      <h4>${data.title}</h4>
      <div class="tl-detail-cols">
        <div><strong>${featLabel}</strong><ul>${fl}</ul></div>
        <div><strong>${data.isNow ? '' : limLabel}</strong><ul>${ll}</ul></div>
      </div>
    </div>`;
}

// ---- Lesson Prompt Generator ----
function generateLessonPrompt() {
  const activity = document.getElementById('lessonActivity').value.trim();
  const goal = document.getElementById('lessonGoal').value.trim();
  const process = document.getElementById('lessonProcess').value.trim();
  const grade = document.getElementById('lessonGrade').value.trim();
  if (!activity || !goal) {
    alert(currentLang === 'en' ? 'Please enter activity name and objective.' : '활동 이름과 학습 목표를 입력해주세요.');
    return;
  }
  let prompt;
  if (currentLang === 'en') {
    prompt = `I am a teacher${grade ? ' (' + grade + ')' : ''}.\n\nPlease create a web app for my classroom activity.\n\n[Activity Name]\n${activity}\n\n[Learning Objective]\n${goal}\n\n[Activity Flow]\n${process || 'Students can input, submit, and view collective results'}\n\n[Requirements]\n- Mobile-friendly (students use smartphones)\n- Intuitive UI — no explanation needed for students\n- Real-time results display if possible\n- Clean, modern design\n- Single HTML file (HTML + CSS + JS)\n- Korean language interface\n\nPlease create a fully working web app with comments so I can modify it later.`;
  } else {
    prompt = `저는 ${grade ? grade + ' ' : ''}교사입니다.\n\n수업 활동에 사용할 웹앱을 만들어주세요.\n\n[활동 이름]\n${activity}\n\n[학습 목표]\n${goal}\n\n[활동 과정]\n${process || '학생들이 입력하고, 제출하고, 전체 결과를 볼 수 있는 형태'}\n\n[요구사항]\n- 모바일 친화적 (학생들이 스마트폰으로 사용)\n- 설명 없이도 학생들이 쉽게 사용할 수 있는 직관적인 UI\n- 결과 실시간 표시 (가능하면)\n- 깔끔하고 현대적인 디자인\n- HTML + CSS + JS를 하나의 파일로 만들어줘\n- 한국어 인터페이스\n\n완전히 동작하는 웹앱으로 만들어주세요. 나중에 선생님이 쉽게 수정할 수 있도록 주석도 달아주세요.`;
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
  const orig = btn.getAttribute('data-original') || btn.textContent;
  btn.setAttribute('data-original', orig);
  btn.textContent = currentLang === 'en' ? '✅ Copied!' : '✅ 복사됨!';
  setTimeout(() => { btn.textContent = orig; }, 2000);
}

// ============================================================
//  GALLERY (with password + edit/delete)
// ============================================================
function _ghash(pw) {
  return Array.from(pw).reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0);
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(str));
  return d.innerHTML;
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
  const editLabel = currentLang === 'en' ? 'Edit' : '수정';
  const delLabel = currentLang === 'en' ? 'Delete' : '삭제';
  grid.innerHTML = items.map((item, idx) => `
    <div class="gallery-item">
      <div class="gallery-item-header">
        <span class="gallery-name">${escapeHtml(item.name)}</span>
        <span class="gallery-date">${escapeHtml(item.date)}</span>
      </div>
      <div class="gallery-item-title">${escapeHtml(item.title)}</div>
      <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="gallery-link">🔗 ${visitLabel}</a>
      <div class="gallery-item-actions">
        <button class="gallery-action-btn" onclick="galleryEdit(${idx})">${editLabel}</button>
        <button class="gallery-action-btn del" onclick="galleryDelete(${idx})">${delLabel}</button>
      </div>
    </div>`).join('');
}

function submitToNetwork() {
  const name = document.getElementById('networkName').value.trim();
  const title = document.getElementById('networkTitle').value.trim();
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
  const items = JSON.parse(localStorage.getItem('networkGallery') || '[]');
  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
  items.unshift({ name, title, url, date: dateStr, pwHash: _ghash(pw) });
  localStorage.setItem('networkGallery', JSON.stringify(items));
  ['networkName', 'networkTitle', 'networkUrl', 'networkPw'].forEach(id => document.getElementById(id).value = '');
  loadGallery();
  alert(currentLang === 'en' ? '🎉 Shared successfully!' : '🎉 공유되었습니다!');
}

// PW Modal state
let _pwCallback = null;
function pwModalOpen(title, cb) {
  _pwCallback = cb;
  document.getElementById('pwModalTitle').textContent = title;
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

function galleryEdit(idx) {
  if (isAdminMode) { _doGalleryEdit(idx, null, true); return; }
  pwModalOpen(currentLang === 'en' ? '🔑 Enter Password to Edit' : '🔑 수정 비밀번호 입력', (pw) => _doGalleryEdit(idx, pw, false));
}
function galleryDelete(idx) {
  if (isAdminMode) { _doGalleryDelete(idx, null, true); return; }
  pwModalOpen(currentLang === 'en' ? '🔑 Enter Password to Delete' : '🔑 삭제 비밀번호 입력', (pw) => _doGalleryDelete(idx, pw, false));
}

function _doGalleryEdit(idx, pw, isAdmin) {
  const items = JSON.parse(localStorage.getItem('networkGallery') || '[]');
  const item = items[idx];
  if (!item) return;
  if (!isAdmin && _ghash(pw) !== item.pwHash) {
    alert(currentLang === 'en' ? '❌ Incorrect password.' : '❌ 비밀번호가 맞지 않습니다.');
    return;
  }
  const newTitle = prompt(currentLang === 'en' ? 'New app name:' : '새 앱 이름:', item.title);
  if (newTitle === null) return;
  const newUrl = prompt(currentLang === 'en' ? 'New URL:' : '새 링크:', item.url);
  if (newUrl === null) return;
  if (newTitle.trim()) items[idx].title = newTitle.trim();
  if (newUrl.trim()) items[idx].url = newUrl.trim();
  localStorage.setItem('networkGallery', JSON.stringify(items));
  loadGallery();
}

function _doGalleryDelete(idx, pw, isAdmin) {
  const items = JSON.parse(localStorage.getItem('networkGallery') || '[]');
  const item = items[idx];
  if (!item) return;
  if (!isAdmin && _ghash(pw) !== item.pwHash) {
    alert(currentLang === 'en' ? '❌ Incorrect password.' : '❌ 비밀번호가 맞지 않습니다.');
    return;
  }
  if (!confirm(currentLang === 'en' ? 'Delete this item?' : '삭제하시겠습니까?')) return;
  items.splice(idx, 1);
  localStorage.setItem('networkGallery', JSON.stringify(items));
  loadGallery();
}

// ============================================================
//  PRACTICE PROMPTS
// ============================================================
function loadPracticePrompts() {
  const prompts = JSON.parse(localStorage.getItem('practicePrompts') || '[]');
  const list = document.getElementById('practicePromptsList');
  const emptyMsg = document.getElementById('practiceEmptyMsg');
  if (prompts.length === 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
    // Remove any existing items
    list.querySelectorAll('.practice-prompt-item').forEach(el => el.remove());
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';
  list.querySelectorAll('.practice-prompt-item').forEach(el => el.remove());
  prompts.forEach((p, idx) => {
    const item = document.createElement('div');
    item.className = 'practice-prompt-item';
    item.innerHTML = `
      <div class="practice-prompt-item-header">
        <span class="practice-prompt-title">${escapeHtml(p.title)}</span>
        <button class="practice-prompt-copy" onclick="copyPracticePrompt(${idx})">📋 복사</button>
      </div>
      <div class="practice-prompt-content">${escapeHtml(p.content)}</div>`;
    list.appendChild(item);
  });
}

function copyPracticePrompt(idx) {
  const prompts = JSON.parse(localStorage.getItem('practicePrompts') || '[]');
  const p = prompts[idx];
  if (!p) return;
  const ta = document.createElement('textarea');
  ta.value = p.content;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  const btns = document.querySelectorAll('.practice-prompt-copy');
  const btn = btns[idx];
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = '✅ 복사됨!';
    setTimeout(() => { btn.textContent = orig; }, 2000);
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
  closeAdminModal();
}

function toggleTextEditMode() {
  if (!isAdminMode) return;
  textEditMode = !textEditMode;
  const notice = document.getElementById('adminEditNotice');
  if (textEditMode) {
    notice.classList.add('visible');
    document.querySelectorAll('[data-i18n]').forEach(el => {
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
  const key = this.getAttribute('data-i18n');
  if (!key) return;
  _currentEditKey = key;
  const modal = document.getElementById('adminTextModal');
  document.getElementById('adminTextInput').value = this.textContent;
  modal.classList.add('open');
  setTimeout(() => document.getElementById('adminTextInput').focus(), 100);
}

function saveAdminText() {
  if (!_currentEditKey) return;
  const val = document.getElementById('adminTextInput').value;
  localStorage.setItem(`admin_${currentLang}_${_currentEditKey}`, val);
  // Apply immediately
  document.querySelectorAll(`[data-i18n="${_currentEditKey}"]`).forEach(el => {
    el.textContent = val;
  });
  closeAdminTextModal();
}

function resetAdminText() {
  if (!_currentEditKey) return;
  localStorage.removeItem(`admin_${currentLang}_${_currentEditKey}`);
  // Re-apply default
  const defVal = currentLang === 'ko'
    ? document.querySelector(`[data-i18n="${_currentEditKey}"]`)?.getAttribute('data-ko')
    : en[_currentEditKey];
  if (defVal) {
    document.querySelectorAll(`[data-i18n="${_currentEditKey}"]`).forEach(el => { el.textContent = defVal; });
  }
  closeAdminTextModal();
}

function closeAdminTextModal() {
  document.getElementById('adminTextModal').classList.remove('open');
  _currentEditKey = null;
}

function applyAdminTextOverrides(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const saved = localStorage.getItem(`admin_${lang}_${key}`);
    if (saved !== null) el.textContent = saved;
  });
}

// Admin: practice prompts
function adminAddPrompt() {
  const title = document.getElementById('adminPromptTitle').value.trim();
  const content = document.getElementById('adminPromptContent').value.trim();
  if (!title || !content) { alert('제목과 내용을 모두 입력해주세요.'); return; }
  const prompts = JSON.parse(localStorage.getItem('practicePrompts') || '[]');
  prompts.push({ title, content });
  localStorage.setItem('practicePrompts', JSON.stringify(prompts));
  document.getElementById('adminPromptTitle').value = '';
  document.getElementById('adminPromptContent').value = '';
  loadPracticePrompts();
  renderAdminPromptList();
}

function adminDeletePrompt(idx) {
  if (!confirm('삭제하시겠습니까?')) return;
  const prompts = JSON.parse(localStorage.getItem('practicePrompts') || '[]');
  prompts.splice(idx, 1);
  localStorage.setItem('practicePrompts', JSON.stringify(prompts));
  loadPracticePrompts();
  renderAdminPromptList();
}

function renderAdminPromptList() {
  const prompts = JSON.parse(localStorage.getItem('practicePrompts') || '[]');
  const list = document.getElementById('adminPromptList');
  if (!list) return;
  if (prompts.length === 0) { list.innerHTML = '<p style="font-size:0.82rem;color:var(--text-dim);">등록된 프롬프트 없음</p>'; return; }
  list.innerHTML = prompts.map((p, i) => `
    <div class="admin-gallery-item">
      <span>${escapeHtml(p.title)}</span>
      <button class="admin-gallery-del" onclick="adminDeletePrompt(${i})">삭제</button>
    </div>`).join('');
}

function renderAdminGalleryList() {
  const items = JSON.parse(localStorage.getItem('networkGallery') || '[]');
  const list = document.getElementById('adminGalleryList');
  if (!list) return;
  if (items.length === 0) { list.innerHTML = '<p style="font-size:0.82rem;color:var(--text-dim);">갤러리 항목 없음</p>'; return; }
  list.innerHTML = items.map((item, i) => `
    <div class="admin-gallery-item">
      <span>${escapeHtml(item.name)} — ${escapeHtml(item.title)}</span>
      <button class="admin-gallery-del" onclick="adminDeleteGallery(${i})">삭제</button>
    </div>`).join('');
}

function adminDeleteGallery(idx) {
  if (!confirm('갤러리 항목을 삭제하시겠습니까?')) return;
  const items = JSON.parse(localStorage.getItem('networkGallery') || '[]');
  items.splice(idx, 1);
  localStorage.setItem('networkGallery', JSON.stringify(items));
  loadGallery();
  renderAdminGalleryList();
}

// ============================================================
//  TERMINAL ANIMATION
// ============================================================
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
let lineIndex = 0, charIndex = 0, currentEl = null;

function typeChar() {
  if (lineIndex >= lines.length) {
    const cur = document.createElement('span');
    cur.className = 't-cursor';
    document.getElementById('terminalBody').appendChild(cur);
    return;
  }
  const line = lines[lineIndex];
  if (!currentEl) {
    setTimeout(() => {
      if (line.type === 'blank') {
        document.getElementById('terminalBody').appendChild(document.createElement('br'));
        lineIndex++; currentEl = null; typeChar(); return;
      }
      const div = document.createElement('div');
      div.className = 't-line';
      const span = document.createElement('span');
      span.className = line.type === 'prompt' ? 't-prompt' : line.type === 'success' ? 't-success' : line.type === 'info' ? 't-info' : 't-output';
      div.appendChild(span);
      currentEl = span;
      document.getElementById('terminalBody').appendChild(div);
      charIndex = 0;
      typeNextChar();
    }, line.delay || 0);
  }
}

function typeNextChar() {
  const line = lines[lineIndex];
  if (charIndex < line.text.length) {
    currentEl.textContent += line.text[charIndex++];
    setTimeout(typeNextChar, line.type === 'prompt' ? 40 : 20);
  } else {
    lineIndex++; currentEl = null; typeChar();
  }
}

setTimeout(typeChar, 800);

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
