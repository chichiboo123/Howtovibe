// ============================================================
//  바이브코딩 가이드 - App JS
// ============================================================

// ============================================================
//  THEME TOGGLE (다크/라이트 모드)
// ============================================================
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);
updateThemeBtn(savedTheme);

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeBtn(next);
});

function updateThemeBtn(theme) {
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ============================================================
//  I18N SYSTEM (한국어/영어 전환)
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
  'nav-logo': '⚡ Vibe Coding',
  'nav-what-is': 'What is Vibe Coding',
  'nav-tools': 'Tools Setup',
  'nav-guide': 'Step-by-Step Guide',
  'nav-prompts': 'Prompt Writing',
  'nav-practice': 'Practice',
  'nav-tips': 'Tips & Notes',

  'hero-badge': '2026 · The New Way to Develop in the AI Era',
  'hero-title': 'Build Web Apps<br/><span class="gradient-text">Without Knowing Code</span>',
  'hero-desc': 'Learn <strong>Vibe Coding</strong> —<br/>turning your ideas into reality by conversing with AI.',
  'hero-btn-start': 'Start Guide →',
  'hero-btn-practice': 'Practice Now',
  'hero-stat1-num': '5 Steps',
  'hero-stat1-label': 'Structured Guide',
  'hero-stat2-label': 'Real-world Prompt Examples',
  'hero-stat3-num': 'Free',
  'hero-stat3-label': 'Fully Open',

  'ch01-tag': 'CHAPTER 01',
  'ch01-title': 'What is Vibe Coding?',
  'ch01-desc': 'A new development paradigm where you describe what you want to AI without any coding knowledge, and build products based on the results',
  'concept1-title': 'Express Ideas in Words',
  'concept1-desc': "You don't write code directly. Just describe the features you want to AI in natural language.",
  'concept2-title': 'AI Writes the Code',
  'concept2-desc': 'AI like Claude or GPT generates working code. No development experience needed.',
  'concept3-title': 'Improve Through Conversation',
  'concept3-desc': "Request changes from AI. Improve quality through iterative dialogue.",
  'concept4-title': 'Quick Deployment',
  'concept4-desc': 'Deploy to GitHub Pages, Vercel, etc. Share it with the world in minutes.',
  'comp-old': '<h4>❌ Traditional Development</h4><ul><li>Must learn HTML, CSS, JavaScript</li><li>Must understand frameworks and libraries</li><li>Months to years of learning required</li><li>Lots of time spent debugging</li><li>Complex deployment process</li></ul>',
  'comp-new': '<h4>✅ Vibe Coding</h4><ul><li>Start with just your idea and natural language</li><li>AI handles technology choices and implementation</li><li>First prototype possible on day one</li><li>Errors solved by explaining them to AI</li><li>AI provides deployment guide too</li></ul>',
  'quote-cite': '— Andrej Karpathy (Former Tesla AI Director, OpenAI Co-founder)',

  'ch02-tag': 'CHAPTER 02',
  'ch02-title': 'Setting Up Tools',
  'ch02-desc': 'Set up the minimum tools needed to start Vibe Coding',
  'tool1-title': 'Claude.ai or Claude Code',
  'tool1-desc': 'Your AI coding partner. Converts ideas to code. You can start with the free plan.',
  'tool1-tag1': 'Free to Start',
  'tool1-tag2': 'Essential Tool',
  'tool2-title': 'GitHub Account',
  'tool2-desc': 'Store and version control your code. Free to create, also used for deployment.',
  'tool2-tag1': 'Free',
  'tool2-tag2': 'Code Repository',
  'tool3-title': 'VS Code (Optional)',
  'tool3-desc': 'Code editor. Not required if using Claude Code, but useful to view code directly.',
  'tool3-tag1': 'Optional',
  'tool3-tag2': 'Free',
  'tool4-title': 'Vercel or GitHub Pages',
  'tool4-desc': 'Publish your finished web app online. Automatic deployment with GitHub integration.',
  'tool4-tag1': 'Free',
  'tool4-tag2': 'Deployment Platform',
  'checklist-title': '✅ Pre-Start Checklist',
  'check1': 'Claude.ai account created',
  'check2': 'GitHub account created',
  'check3': 'Ideas noted for what you want to build',
  'check4': '30 min–1 hour set aside',

  'ch03-tag': 'CHAPTER 03',
  'ch03-title': 'Step-by-Step Guide',
  'ch03-desc': 'Follow the actual process from idea to finished web app',
  'step1-title': 'Clarify Your Idea',
  'step1-sub': 'Turn vague ideas into clear requirements that AI can understand',
  'step1-content': '<div class="substep"><h4>🎯 Define 3 Core Features</h4><p>Don\'t try to build a perfect app from the start. Define just 3 core features and begin.</p><div class="example-box"><div class="example-label">Example: Todo App</div><ul><li>Add a todo</li><li>Check as complete</li><li>Delete</li></ul></div></div><div class="substep"><h4>👥 Define Your Users</h4><p>Think about who will use this app. The clearer your user is, the better the app.</p></div><div class="substep"><h4>🎨 Find Reference Examples</h4><p>Collecting screenshots or URLs of similar apps lets you give AI visual direction.</p></div><div class="tip-box"><strong>💡 Tip:</strong> Tell AI your idea first and ask "Organize this idea into a concrete list of features."</div>',
  'step2-title': 'Write Your First Prompt',
  'step2-sub': 'Request the entire structure and core features of your app from AI at once',
  'step2-content': '<div class="substep"><h4>📝 Structure of a Good First Prompt</h4><div class="prompt-template"><div class="prompt-line"><span class="pt-label">Purpose:</span> [What you want to build]</div><div class="prompt-line"><span class="pt-label">Users:</span> [Who will use it]</div><div class="prompt-line"><span class="pt-label">Core Features:</span> [Essential features]</div><div class="prompt-line"><span class="pt-label">Design:</span> [Desired style or reference]</div><div class="prompt-line"><span class="pt-label">Tech:</span> [Can be omitted if no special requirements]</div></div></div><div class="substep"><h4>✍️ Real Example</h4><div class="code-block"><pre>"Create a personal reading log web app.\n- Record book title, author, and date read\n- Show a card-style list of books read\n- Allow star ratings (1–5 stars)\n- Clean, minimal design\n- Use only HTML, CSS, JavaScript (no libraries)"</pre></div></div><div class="tip-box"><strong>💡 Tip:</strong> Don\'t aim for perfection in your first prompt. Build a working version first, then improve.</div>',
  'step3-title': 'Review & Run the Code',
  'step3-sub': 'Run the AI-generated code and check the results',
  'step3-content': '<div class="substep"><h4>🖥️ Running the Code</h4><p>If AI generated an HTML file:</p><ol><li>Copy the code and save as <code>index.html</code></li><li>Open the file in a browser (double-click or drag-and-drop)</li><li>Check if it works as intended</li></ol></div><div class="substep"><h4>🔍 What to Check</h4><ul><li>Are all core features working?</li><li>Does the UI roughly look how you wanted?</li><li>Are there no error messages?</li></ul></div><div class="substep"><h4>🐛 When There\'s an Error</h4><p>Don\'t panic! Copy the error message and paste it to AI.</p><div class="code-block"><pre>"This error occurred. Please fix it:\n[Paste error message]"</pre></div></div><div class="tip-box"><strong>💡 Tip:</strong> Don\'t spend too long trying to understand the code. If it works, move on. If there\'s an error, ask AI.</div>',
  'step4-title': 'Iterative Improvement',
  'step4-sub': 'Add features, improve design, and fix bugs through conversation',
  'step4-content': '<div class="substep"><h4>🔁 Iteration Cycle</h4><div class="cycle-diagram"><div class="cycle-item">💬 Request</div><div class="cycle-arrow">→</div><div class="cycle-item">🤖 AI Works</div><div class="cycle-arrow">→</div><div class="cycle-item">👀 Review</div><div class="cycle-arrow">→</div><div class="cycle-item">📝 Feedback</div><div class="cycle-arrow">↩️</div></div></div><div class="substep"><h4>📋 Giving Good Feedback</h4><div class="feedback-examples"><div class="feedback bad"><div class="feedback-label">❌ Bad Feedback</div><p>"Make it prettier"<br/>"It seems slow"<br/>"Do it again"</p></div><div class="feedback good"><div class="feedback-label">✅ Good Feedback</div><p>"Change button color to blue and increase size by 20%"<br/>"Add a spinner animation when loading the list"<br/>"Change the card layout to a 3-column grid"</p></div></div></div><div class="tip-box"><strong>💡 Tip:</strong> Request one thing at a time. Requesting multiple changes at once can confuse the AI.</div>',
  'step5-title': 'Deploy',
  'step5-sub': 'Publish your finished web app to the internet',
  'step5-content': '<div class="substep"><h4>🌐 Deploy with GitHub Pages (Free)</h4><ol><li>Create a new repository on GitHub</li><li>Ask AI: "How do I upload this to GitHub?"</li><li>Repository Settings → Pages → Set Source</li><li>Access <code>username.github.io/repo-name</code> in a few minutes</li></ol></div><div class="substep"><h4>⚡ Deploy with Vercel (Easier)</h4><ol><li>Sign up at vercel.com (link with GitHub)</li><li>"New Project" → Select GitHub repository</li><li>Automatically built and deployed</li><li>Unique URL automatically generated</li></ol></div><div class="tip-box"><strong>💡 Tip:</strong> If stuck on deployment, ask AI: "Explain how to deploy to Vercel step by step."</div>',

  'ch04-tag': 'CHAPTER 04',
  'ch04-title': 'Prompt Writing Techniques',
  'ch04-desc': 'Prompt patterns that improve the quality of results when requesting from AI',
  'p1-title': 'Be Specific',
  'p1-examples': '<div class="pe bad"><span class="pe-label">❌</span>"Make a button"</div><div class="pe good"><span class="pe-label">✅</span>"Make a \'Save\' button with blue background, white text, rounded corners (border-radius 8px), that gets slightly darker on hover"</div>',
  'p2-title': 'Specify Constraints',
  'p2-examples': '<div class="pe bad"><span class="pe-label">❌</span>"Make a shopping mall"</div><div class="pe good"><span class="pe-label">✅</span>"Build it using only pure HTML/CSS/JS, without React and without any external libraries"</div>',
  'p3-title': 'Provide References',
  'p3-examples': '<div class="pe bad"><span class="pe-label">❌</span>"Make a nice card UI"</div><div class="pe good"><span class="pe-label">✅</span>"Make a card like Notion\'s style — white background, subtle shadow, slight lift effect on hover"</div>',
  'p4-title': 'Request Partial Changes',
  'p4-examples': '<div class="pe bad"><span class="pe-label">❌</span>"Redo the whole thing"</div><div class="pe good"><span class="pe-label">✅</span>"Only modify the header section in the existing code. Don\'t touch anything else."</div>',
  'p5-title': 'Report Errors Clearly',
  'p5-examples': '<div class="pe bad"><span class="pe-label">❌</span>"Why isn\'t it working?"</div><div class="pe good"><span class="pe-label">✅</span>"When I click the button, nothing happens. This error appears in the browser console: [error message]"</div>',
  'p6-title': 'Maintain Context',
  'p6-examples': '<div class="pe bad"><span class="pe-label">❌</span>"Add a search feature to the list" (in a new chat window)</div><div class="pe good"><span class="pe-label">✅</span>"Add a search feature to the code I\'ve built so far. [paste current code]"</div>',
  'formula-title': '🧪 Universal Prompt Formula',
  'formula-p1': '[Role Assignment]',
  'formula-p2': '[Specific Requirements]',
  'formula-p3': '[Constraints]',
  'formula-p4': '[Output Format]',
  'formula-example': '<strong>Example:</strong> "As a web development expert (role), create a memo app that supports dark theme (requirement), without external libraries (constraint), as 3 separate files: HTML/CSS/JS (format)"',

  'ch05-tag': 'CHAPTER 05',
  'ch05-title': 'Hands-on Practice',
  'ch05-desc': 'Build your prompt writing skills with these exercises',
  'tab-beg': 'Beginner',
  'tab-int': 'Intermediate',
  'tab-adv': 'Advanced',

  'beg1-diff': '⭐ Beginner #1',
  'beg1-title': 'Personal Introduction Page',
  'beg1-desc': 'Create a simple webpage introducing yourself.',
  'req-label': 'Include:',
  'beg1-req': '<li>Your name and a short bio</li><li>3 things you like</li><li>Contact info or social media links</li>',
  'hint-show': '💡 Show Hint',
  'hint-hide': '💡 Hide Hint',
  'beg1-hint': '"Create a webpage introducing me.\n- Name: [Your name]\n- Bio: [One-line bio]\n- Things I like: Music, Reading, Travel\n- Design: Minimal and clean\n- Put HTML and CSS in one file"',

  'beg2-diff': '⭐ Beginner #2',
  'beg2-title': 'Counter App',
  'beg2-desc': 'Create a counter that increments when a button is pressed.',
  'beg2-req': '<li>+1 button (increase count)</li><li>-1 button (decrease count)</li><li>Reset button</li>',
  'beg2-hint': '"Create a number counter web app.\n- + button: increase number by 1\n- - button: decrease by 1 (doesn\'t go below 0)\n- Reset button: reset to 0\n- Display current number large in center\n- Add CSS animation effect on number change"',

  'beg3-diff': '⭐ Beginner #3',
  'beg3-title': 'Color Quiz Game',
  'beg3-desc': 'Create a game that shows an RGB color code and you choose the matching color.',
  'beg3-req': '<li>Display RGB value text</li><li>4 color choices</li><li>Score tracking</li>',
  'beg3-hint': '"Create an RGB color guessing quiz game.\n- Display color value in \'RGB(R, G, B)\' format\n- Click the correct one among 4 color buttons\n- Correct/incorrect feedback\n- Score display (correct / total attempts)\n- Next question button"',

  'int1-diff': '⭐⭐ Intermediate #1',
  'int1-title': 'Todo App (with Local Storage)',
  'int1-desc': 'Create a todo app that persists data even after closing the browser.',
  'int1-req': '<li>Add/delete/complete todos</li><li>Save data with LocalStorage</li><li>Filter (All/Active/Completed)</li>',
  'int1-hint': '"Create a todo management web app.\n- Add todo by pressing Enter or button\n- Each item: checkbox, text, delete button\n- Completed items shown with strikethrough\n- Save to LocalStorage (persists on refresh)\n- All/Active/Completed filter tabs at bottom\n- Clean minimal design"',

  'int2-diff': '⭐⭐ Intermediate #2',
  'int2-title': 'Weather Dashboard',
  'int2-desc': 'Create an app that shows weather info when you enter a city name.',
  'int2-req': '<li>City search</li><li>Current temperature, weather status</li><li>Humidity, wind speed</li>',
  'int2-hint': '"Create a weather app using OpenWeatherMap API.\n- API key required (get one at openweathermap.org)\n- Search by city name\n- Current weather: temperature (Celsius), status, icon\n- Extra info: feels like temp, humidity, wind speed\n- Background color changes based on weather"',

  'int3-diff': '⭐⭐ Intermediate #3',
  'int3-title': 'Pomodoro Timer',
  'int3-desc': 'Create a timer to manage 25-minute focus + 5-minute break cycles.',
  'int3-req': '<li>Countdown timer</li><li>Focus/break mode switching</li><li>Alert sound</li>',
  'int3-hint': '"Create a Pomodoro timer app.\n- Focus time: 25 minutes (default, adjustable)\n- Break time: 5 min (short break), 15 min (long break)\n- Start/pause/reset buttons\n- Alert sound using Web Audio API when timer ends\n- Show number of completed pomodoros\n- Circular progress bar"',

  'adv1-diff': '⭐⭐⭐ Advanced #1',
  'adv1-title': 'Markdown Editor',
  'adv1-desc': 'Create a markdown editor with real-time preview.',
  'adv1-req': '<li>Left: Markdown input area</li><li>Right: HTML rendering preview</li><li>Export (HTML/PDF)</li>',
  'adv1-hint': '"Create a real-time Markdown editor.\n- Split screen left/right (editor | preview)\n- Parse markdown with marked.js library\n- Real-time rendering (updates as you type)\n- Toolbar: bold, italic, heading, link, image, code block\n- \'Export HTML\' button\n- Dark/light theme toggle"',

  'adv2-diff': '⭐⭐⭐ Advanced #2',
  'adv2-title': 'Personal Dashboard',
  'adv2-desc': 'Create a dashboard showing todos, weather, bookmarks, and clock on one screen.',
  'adv2-req': '<li>Current time/date widget</li><li>Simple todo widget</li><li>Bookmarks widget</li><li>Drag to reposition widgets</li>',
  'adv2-hint': '"Create a personal browser new tab dashboard.\n- Background: random landscape images from Unsplash API\n- Center: current time (large text), date\n- Left: mini todo widget (add/delete)\n- Right: favorite links widget\n- Search bar: Google search integration\n- Overall glassmorphism design"',

  'adv3-diff': '⭐⭐⭐ Advanced #3',
  'adv3-title': 'AI Chat Interface',
  'adv3-desc': 'Create your own AI chatbot interface integrated with the Claude API.',
  'adv3-req': '<li>Chat UI (message bubbles)</li><li>Claude API integration</li><li>Save conversation history</li>',
  'adv3-hint': '"Create an AI chat app using Claude API.\n- Node.js Express backend\n- Use Anthropic SDK (@anthropic-ai/sdk)\n- Frontend: chat UI (distinguish user/AI messages)\n- Support streaming responses\n- Save conversation history to LocalStorage\n- System prompt configuration feature\nNote: Manage API key as environment variable (.env)"',

  'playground-title': '🎮 Prompt Playground',
  'playground-desc': 'Practice turning your ideas into concrete prompts.',
  'playground-in-label': '💭 My Idea (briefly)',
  'playground-in-placeholder': 'e.g. An app to track daily water intake',
  'playground-out-label': '📝 Enhanced Prompt (for reference)',
  'playground-out-placeholder': "Enter your idea above and click 'Convert to Prompt'...",
  'playground-arrow': '↓ Convert',
  'playground-btn': '✨ Convert to Prompt',

  'ch06-tag': 'CHAPTER 06',
  'ch06-title': 'Tips & Common Mistakes',
  'ch06-desc': 'Key know-how for better Vibe Coding',
  'tips-col-good': '✅ Do This',
  'tips-col-bad': "❌ Don't Do This",
  'tip-g1-title': 'Start Small',
  'tip-g1-desc': 'Start with an MVP (Minimum Viable Product). A working app comes before a perfect app.',
  'tip-g2-title': 'Save Frequently',
  'tip-g2-desc': 'Save your code or commit to GitHub whenever things are working. You can always roll back later.',
  'tip-g3-title': 'Provide Context',
  'tip-g3-desc': "When conversations get long, always paste the current code: 'Here's the code so far, please add [feature] to this'.",
  'tip-g4-title': 'Test Frequently',
  'tip-g4-desc': 'Test in the browser right after adding each feature. Much easier than debugging everything at once later.',
  'tip-g5-title': 'Ask AI to Explain',
  'tip-g5-desc': "Asking 'Explain how this code works in simple terms' will gradually build your developer intuition.",
  'tip-b1-title': 'Pursuing Perfection from the Start',
  'tip-b1-desc': "The first version is always rough. Deploy at 80% completeness and improve based on feedback.",
  'tip-b2-title': 'Adding Features Without Understanding the Code',
  'tip-b2-desc': "When the codebase gets larger, ask AI to 'Explain the current code structure'. Stacking features blindly leads to trouble.",
  'tip-b3-title': "Just Saying 'Do It Again' on Errors",
  'tip-b3-desc': "Pass the error message directly to AI. Providing the actual error is more useful than just saying 'do it again'.",
  'tip-b4-title': 'Requesting Too Many Features at Once',
  'tip-b4-desc': 'Requesting 5+ features at once makes code complex and error-prone. Add them one at a time.',
  'tip-b5-title': 'Putting Sensitive Info Directly in Code',
  'tip-b5-desc': 'Never write API keys or passwords directly in code. Ask AI how to use environment variables (.env).',

  'faq-section-title': '❓ Frequently Asked Questions',
  'faq1-q': 'Can I do Vibe Coding with absolutely no coding knowledge?',
  'faq1-a': "<p>Yes, it's possible! The key to Vibe Coding is \"the ability to clearly express what you want.\" You don't need to know HTML or JavaScript. However, understanding basic web concepts (URLs, files, browsers) will help you communicate more effectively with AI.</p>",
  'faq2-q': 'Can I trust the code that AI creates?',
  'faq2-a': "<p>It's sufficient for personal projects or learning purposes. For actual services, it's recommended to ask AI to check for security vulnerabilities (input validation, XSS prevention, etc.) or have an experienced developer review it.</p>",
  'faq3-q': 'Which AI is best for coding?',
  'faq3-a': "<p>As of 2026, Claude (Anthropic), GPT-4o (OpenAI), and Gemini (Google) all show excellent coding abilities. Claude has particular strengths in understanding long code contexts and code quality. Try each AI's free plan and find the one that works for you.</p>",
  'faq4-q': "Are there things Vibe Coding can't build?",
  'faq4-a': "<p>Most web apps, tools, and games can be built. However, services handling large-scale traffic, complex real-time features, native mobile apps, and ML model training have limitations with Vibe Coding alone. These cases require collaboration with developers or specialized learning.</p>",
  'faq5-q': 'Can I actually learn real coding through Vibe Coding?',
  'faq5-a': "<p>Yes! Consistently asking AI \"Explain why this code works this way\" will naturally build your ability to read and understand code. Many vibe coders are learning actual programming concepts through this process.</p>",

  'cta-title': 'Start Right Now',
  'cta-desc': "If you have an idea, that's enough.<br/>Build your first app today with Vibe Coding.",
  'cta-step1': 'Visit Claude.ai',
  'cta-step2': 'Describe Your Idea',
  'cta-step3': 'Run the Code',
  'cta-step4': 'Iterate',
  'cta-step5': 'Launch to the World!',
  'footer-main': '⚡ Vibe Coding Guide · For a World Where Anyone Can Build',
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

  // 열린 힌트 버튼 텍스트 업데이트
  document.querySelectorAll('.hint-btn').forEach(btn => {
    const content = btn.nextElementSibling;
    if (content && !content.classList.contains('hidden')) {
      btn.textContent = lang === 'en' ? '💡 Hide Hint' : '💡 힌트 닫기';
    }
  });

  htmlEl.lang = lang;
  document.getElementById('langToggle').textContent = lang === 'ko' ? 'EN' : 'KO';
}

// 초기화
cacheKorean();
applyTranslations(currentLang);

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  localStorage.setItem('lang', currentLang);
  applyTranslations(currentLang);
});

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
  const isHidden = content.classList.contains('hidden');
  btn.textContent = isHidden
    ? (currentLang === 'en' ? '💡 Show Hint' : '💡 힌트 보기')
    : (currentLang === 'en' ? '💡 Hide Hint' : '💡 힌트 닫기');
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
  ko: {
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
  },
  en: {
    tracker: (idea) => `"Create a ${idea} web app.

Requirements:
- [Core Feature 1]: Users can input and save data
- [Core Feature 2]: Display in list format with delete option
- [Core Feature 3]: Save to LocalStorage, persists on refresh

Design:
- Dark theme, minimal clean UI
- Responsive (supports mobile/desktop)
- Smooth hover effects and transitions

Technical constraints:
- Use only HTML, CSS, JavaScript (no external libraries)
- Create as a single HTML file"`,

    default: (idea) => `"Create ${idea}.

Core features:
1. [Most important feature - fill in yourself]
2. [Second most important feature]
3. [Third feature]

Design requirements:
- Modern, clean UI
- Dark mode support
- Mobile responsive

Tech stack:
- Pure HTML, CSS, JavaScript
- No external libraries
- Single file or 3 separate files (index.html, style.css, app.js)

Additional requirements:
- Store data in LocalStorage
- Include error handling
- Intuitive user experience"`,
  },
};

const promptKeywords = {
  ko: { tracker: ['기록', '체크', '추적', '관리', '할일', '습관', '다이어리', '일기'] },
  en: { tracker: ['track', 'check', 'log', 'manage', 'todo', 'habit', 'diary', 'journal'] },
};

function generatePrompt() {
  const idea = document.getElementById('ideaInput').value.trim();
  if (!idea) {
    alert(currentLang === 'en' ? 'Please enter your idea first!' : '아이디어를 먼저 입력해주세요!');
    return;
  }

  const keywords = promptKeywords[currentLang] || promptKeywords.ko;
  const templates = promptTemplates[currentLang] || promptTemplates.ko;

  let template = 'default';
  for (const [key, words] of Object.entries(keywords)) {
    if (words.some(w => idea.toLowerCase().includes(w))) {
      template = key;
      break;
    }
  }

  const output = templates[template](idea);
  const el = document.getElementById('promptOutput');
  el.value = output;
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

// ---- Terminal animation ----
const terminalLines = {
  ko: [
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
  ],
  en: [
    { type: 'prompt', text: '$ claude' },
    { type: 'output', text: '✻ Claude Code v2.1.0 started', delay: 400 },
    { type: 'blank', delay: 200 },
    { type: 'prompt', text: '> Hey! Create a reading log app' },
    { type: 'info', text: '⠸ Analyzing...', delay: 600 },
    { type: 'output', text: '📁 Creating index.html...', delay: 800 },
    { type: 'output', text: '🎨 Creating style.css...', delay: 400 },
    { type: 'output', text: '⚡ Creating app.js...', delay: 400 },
    { type: 'success', text: '✓ Done! 3 files created.', delay: 600 },
    { type: 'blank', delay: 300 },
    { type: 'prompt', text: '> Add a star rating feature too' },
    { type: 'info', text: '⠸ Modifying...', delay: 600 },
    { type: 'output', text: '✎ Editing app.js...', delay: 500 },
    { type: 'success', text: '✓ Star rating (★) feature added!', delay: 500 },
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

const styleEl = document.createElement('style');
styleEl.textContent = '.nav-link.active-nav { color: var(--primary-light) !important; background: rgba(99,102,241,0.1) !important; }';
document.head.appendChild(styleEl);
