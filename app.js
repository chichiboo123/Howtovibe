// ============================================================
//  바이브코딩 가이드 - App JS
// ============================================================

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- Step accordion ----
function toggleStep(id) {
  const el = document.getElementById(id);
  el.classList.toggle('open');
}

// Open first step by default
document.addEventListener('DOMContentLoaded', () => {
  const first = document.getElementById('step1');
  if (first) first.classList.add('open');
});

// ---- Practice tabs ----
function switchTab(name, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.practice-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

// ---- Hint toggle ----
function toggleHint(btn) {
  const content = btn.nextElementSibling;
  content.classList.toggle('hidden');
  btn.textContent = content.classList.contains('hidden') ? '💡 힌트 보기' : '💡 힌트 닫기';
}

// ---- FAQ toggle ----
function toggleFaq(btn) {
  const item = btn.parentElement;
  const answer = btn.nextElementSibling;
  item.classList.toggle('open');
  answer.classList.toggle('hidden');
}

// ---- Playground: Prompt Generator ----
const promptTemplates = {
  tracker: (idea) => `"${idea} 웹앱을 만들어줘.

요구사항:
- [핵심 기능 1]: 사용자가 직접 입력하고 저장할 수 있어야 해
- [핵심 기능 2]: 목록 형태로 보여주고 삭제 가능해야 해
- [핵심 기능 3]: LocalStorage에 저장해서 새로고침해도 유지되어야 해

디자인:
- 다크 테마, 미니멀하고 깔끔한 UI
- 반응형 (모바일/PC 모두 지원)
- 부드러운 hover 효과 및 트랜지션

기술 제약:
- HTML, CSS, JavaScript만 사용 (외부 라이브러리 없이)
- 단일 HTML 파일로 만들어줘"`,

  default: (idea) => `"${idea}를 만들어줘.

핵심 기능:
1. [가장 중요한 기능 - 직접 채워주세요]
2. [두 번째로 중요한 기능]
3. [세 번째 기능]

디자인 요구사항:
- 현대적이고 깔끔한 UI
- 다크 모드 지원
- 모바일 반응형

기술 스택:
- 순수 HTML, CSS, JavaScript
- 외부 라이브러리 없이 구현
- 단일 파일 또는 3개 파일 분리 (index.html, style.css, app.js)

추가 요구사항:
- 데이터는 LocalStorage에 저장
- 에러 처리 포함
- 직관적인 사용자 경험"`,
};

function generatePrompt() {
  const idea = document.getElementById('ideaInput').value.trim();
  if (!idea) {
    alert('아이디어를 먼저 입력해주세요!');
    return;
  }

  // Simple keyword detection to pick template
  const keywords = {
    tracker: ['기록', '체크', '추적', '관리', '할일', '습관', '다이어리', '일기'],
  };

  let template = 'default';
  for (const [key, words] of Object.entries(keywords)) {
    if (words.some(w => idea.includes(w))) {
      template = key;
      break;
    }
  }

  const output = promptTemplates[template](idea);
  const el = document.getElementById('promptOutput');
  el.value = output;
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

// ---- Terminal animation ----
const lines = [
  { type: 'prompt', text: '$ claude' },
  { type: 'output', text: '✻ Claude Code v2.1.0 시작됨', delay: 400 },
  { type: 'blank', delay: 200 },
  { type: 'prompt', text: '> 안녕! 독서 기록 앱 만들어줘' },
  { type: 'info', text: '⠸ 분석 중...', delay: 600 },
  { type: 'output', text: '📁 index.html 생성 중...', delay: 800 },
  { type: 'output', text: '🎨 style.css 생성 중...', delay: 400 },
  { type: 'output', text: '⚡ app.js 생성 중...', delay: 400 },
  { type: 'success', text: '✓ 완료! 3개 파일이 생성되었습니다.', delay: 600 },
  { type: 'blank', delay: 300 },
  { type: 'prompt', text: '> 별점 기능도 추가해줘' },
  { type: 'info', text: '⠸ 수정 중...', delay: 600 },
  { type: 'output', text: '✎ app.js 수정 중...', delay: 500 },
  { type: 'success', text: '✓ 별점(★) 기능이 추가되었습니다!', delay: 500 },
];

let lineIndex = 0;
let charIndex = 0;
let currentEl = null;

function typeChar() {
  if (lineIndex >= lines.length) {
    // Show cursor at end
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

      if (line.type === 'prompt') {
        const span = document.createElement('span');
        span.className = 't-prompt';
        div.appendChild(span);
        currentEl = span;
      } else {
        const span = document.createElement('span');
        span.className = line.type === 'success' ? 't-success' : line.type === 'info' ? 't-info' : 't-output';
        div.appendChild(span);
        currentEl = span;
      }

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
    const speed = line.type === 'prompt' ? 40 : 20;
    setTimeout(typeNextChar, speed);
  } else {
    lineIndex++;
    currentEl = null;
    typeChar();
  }
}

// Start terminal animation after a short delay
setTimeout(typeChar, 800);

// ---- Smooth scroll active nav link ----
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

// Add active nav style
const styleEl = document.createElement('style');
styleEl.textContent = '.nav-link.active-nav { color: var(--primary-light) !important; background: rgba(99,102,241,0.1) !important; }';
document.head.appendChild(styleEl);
