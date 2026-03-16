# 바이브코딩 가이드 — 콘텐츠 편집 파일

> 이 파일을 수정한 뒤 저장하면, 별도로 알려주시면 반영해드립니다.
> 각 항목 옆에 `[수정위치]`를 표기해 두었습니다.

---

## 🔝 네비게이션

| 항목 | 현재 텍스트 (한국어) | 현재 텍스트 (영어) |
|------|-------------------|--------------------|
| 로고 | ⚡ 바이브코딩 | ⚡ Vibe Coding |
| 메뉴1 | 바이브코딩이란 | What is Vibe Coding |
| 메뉴2 | 도구 준비 | Tools Setup |
| 메뉴3 | 단계별 가이드 | Step-by-Step Guide |
| 메뉴4 | 프롬프트 작성법 | Prompt Writing |
| 메뉴5 | 실습 | Practice |
| 메뉴6 | 팁 & 주의사항 | Tips & Notes |

---

## 🦸 HERO 섹션

**배지 텍스트**
- 한국어: `2026 · AI 시대의 개발 방식`
- 영어: `2026 · The New Way to Develop in the AI Era`

**메인 타이틀**
- 한국어: `코딩 몰라도 / 웹앱 만드는 법`
- 영어: `Build Web Apps / Without Knowing Code`

**서브 설명**
- 한국어: `AI와 대화하며 아이디어를 현실로 만드는 바이브코딩(Vibe Coding)을 배워보세요.`
- 영어: `Learn Vibe Coding — turning your ideas into reality by conversing with AI.`

**버튼**
- 한국어: `가이드 시작하기 →` / `바로 실습하기`
- 영어: `Start Guide →` / `Practice Now`

**통계 3개**
- 한국어: `5단계` / `체계적 가이드` · `10+` / `실전 프롬프트 예시` · `무료` / `완전 오픈`
- 영어: `5 Steps` / `Structured Guide` · `10+` / `Real-world Prompt Examples` · `Free` / `Fully Open`

**터미널 애니메이션 대사 (한국어)**
```
$ claude
✻ Claude Code v2.1.0 시작됨
> 안녕! 독서 기록 앱 만들어줘
⠸ 분석 중...
📁 index.html 생성 중...
🎨 style.css 생성 중...
⚡ app.js 생성 중...
✓ 완료! 3개 파일이 생성되었습니다.
> 별점 기능도 추가해줘
⠸ 수정 중...
✎ app.js 수정 중...
✓ 별점(★) 기능이 추가되었습니다!
```

**터미널 애니메이션 대사 (영어)**
```
$ claude
✻ Claude Code v2.1.0 started
> Hey! Create a reading log app
⠸ Analyzing...
📁 Creating index.html...
🎨 Creating style.css...
⚡ Creating app.js...
✓ Done! 3 files created.
> Add a star rating feature too
⠸ Modifying...
✎ Editing app.js...
✓ Star rating (★) feature added!
```

---

## 📖 CHAPTER 01 — 바이브코딩이란?

**섹션 헤더**
- 태그: `CHAPTER 01`
- 제목 (한): `바이브코딩이란?`
- 제목 (영): `What is Vibe Coding?`
- 설명 (한): `개발 지식 없이도 AI에게 원하는 것을 설명하고, 그 결과를 바탕으로 제품을 만들어가는 새로운 개발 패러다임`
- 설명 (영): `A new development paradigm where you describe what you want to AI without any coding knowledge, and build products based on the results`

**개념 카드 4개**

| 번호 | 아이콘 | 제목 (한) | 설명 (한) |
|------|--------|-----------|-----------|
| 1 | 💬 | 아이디어를 말로 표현 | 코드를 직접 쓰지 않습니다. AI에게 원하는 기능을 자연어로 설명하면 됩니다. |
| 2 | 🤖 | AI가 코드를 작성 | Claude, GPT 등 AI가 실제 동작하는 코드를 생성합니다. 개발 경험이 없어도 됩니다. |
| 3 | 🔄 | 대화로 개선 | 마음에 안 드는 부분은 다시 AI에게 요청합니다. 반복적인 대화로 완성도를 높입니다. |
| 4 | 🚀 | 빠른 배포 | 완성된 코드를 GitHub Pages, Vercel 등에 배포합니다. 몇 분 안에 세상에 공개됩니다. |

**비교표**

❌ 전통적인 개발:
- HTML, CSS, JavaScript 학습 필요
- 프레임워크, 라이브러리 이해 필요
- 수개월~수년의 학습 기간
- 버그 디버깅에 많은 시간 소모
- 배포 과정이 복잡

✅ 바이브코딩:
- 아이디어와 한국어(자연어)만으로 시작
- AI가 기술 선택과 구현을 담당
- 당일 첫 프로토타입 완성 가능
- 오류도 AI에게 설명하면 해결
- AI가 배포 가이드까지 제공

**인용문**
```
"The hottest new programming language is English."
— Andrej Karpathy (전 Tesla AI 디렉터, OpenAI 공동 창업자)
```

---

## 🛠️ CHAPTER 02 — 도구 준비하기

**섹션 헤더**
- 태그: `CHAPTER 02`
- 제목 (한): `도구 준비하기`
- 제목 (영): `Setting Up Tools`
- 설명 (한): `바이브코딩을 시작하기 위한 최소한의 도구를 설정합니다`
- 설명 (영): `Set up the minimum tools needed to start Vibe Coding`

**도구 카드 4개**

**도구 01**
- 제목 (한): `Claude.ai 또는 Claude Code`
- 제목 (영): `Claude.ai or Claude Code`
- 설명 (한): `AI 코딩 파트너. 아이디어를 코드로 변환해줍니다. 무료 플랜으로도 시작 가능합니다.`
- 설명 (영): `Your AI coding partner. Converts ideas to code. You can start with the free plan.`
- 태그 (한): `무료 시작 가능` / `핵심 도구`
- 태그 (영): `Free to Start` / `Essential Tool`

**도구 02**
- 제목 (한): `GitHub 계정`
- 제목 (영): `GitHub Account`
- 설명 (한): `코드를 저장하고 버전을 관리합니다. 무료로 만들 수 있으며, 배포에도 활용됩니다.`
- 설명 (영): `Store and version control your code. Free to create, also used for deployment.`
- 태그 (한): `무료` / `코드 저장소`
- 태그 (영): `Free` / `Code Repository`

**도구 03**
- 제목 (한): `VS Code (선택사항)`
- 제목 (영): `VS Code (Optional)`
- 설명 (한): `코드 편집기. Claude Code를 사용한다면 필수는 아니지만, 코드를 직접 보고 싶다면 유용합니다.`
- 설명 (영): `Code editor. Not required if using Claude Code, but useful to view code directly.`
- 태그 (한): `선택사항` / `무료`
- 태그 (영): `Optional` / `Free`

**도구 04**
- 제목 (한): `Vercel 또는 GitHub Pages`
- 제목 (영): `Vercel or GitHub Pages`
- 설명 (한): `완성된 웹앱을 인터넷에 공개합니다. GitHub 연동으로 자동 배포까지 가능합니다.`
- 설명 (영): `Publish your finished web app online. Automatic deployment with GitHub integration.`
- 태그 (한): `무료` / `배포 플랫폼`
- 태그 (영): `Free` / `Deployment Platform`

**시작 전 체크리스트**
- 제목 (한): `✅ 시작 전 체크리스트`
- 제목 (영): `✅ Pre-Start Checklist`
- 항목1 (한): `Claude.ai 회원가입 완료`
- 항목1 (영): `Claude.ai account created`
- 항목2 (한): `GitHub 계정 생성 완료`
- 항목2 (영): `GitHub account created`
- 항목3 (한): `만들고 싶은 것에 대한 아이디어 메모`
- 항목3 (영): `Ideas noted for what you want to build`
- 항목4 (한): `30분~1시간 확보`
- 항목4 (영): `30 min–1 hour set aside`

---

## 📋 CHAPTER 03 — 단계별 가이드

**섹션 헤더**
- 태그: `CHAPTER 03`
- 제목 (한): `단계별 가이드`
- 제목 (영): `Step-by-Step Guide`
- 설명 (한): `아이디어에서 완성된 웹앱까지, 실제 제작 과정을 따라가 봅니다`
- 설명 (영): `Follow the actual process from idea to finished web app`

---

### STEP 01 — 아이디어 구체화하기

**헤더**
- 제목 (한): `아이디어 구체화하기`
- 제목 (영): `Clarify Your Idea`
- 부제 (한): `막연한 아이디어를 AI가 이해할 수 있는 명확한 요구사항으로 정리합니다`
- 부제 (영): `Turn vague ideas into clear requirements that AI can understand`

**본문 내용**

🎯 핵심 기능 3가지 정의
> 처음부터 완벽한 앱을 만들려고 하지 마세요. 핵심 기능 3가지만 정의하고 시작합니다.
> 예시: 할일 관리 앱 → 할일 추가하기 / 완료 체크하기 / 삭제하기

👥 사용자 정의
> 누가 이 앱을 사용할지 생각해보세요. 사용자가 명확할수록 더 좋은 앱이 됩니다.

🎨 참고할 레퍼런스 찾기
> 비슷한 앱의 스크린샷이나 URL을 모아두면 AI에게 시각적 방향을 제시할 수 있습니다.

💡 팁: `아이디어를 AI에게 말하고 "이 아이디어를 구체적인 기능 목록으로 정리해줘"라고 먼저 요청해보세요.`

---

### STEP 02 — 첫 번째 프롬프트 작성

**헤더**
- 제목 (한): `첫 번째 프롬프트 작성`
- 제목 (영): `Write Your First Prompt`
- 부제 (한): `AI에게 앱의 전체 구조와 핵심 기능을 한 번에 요청합니다`
- 부제 (영): `Request the entire structure and core features of your app from AI at once`

**본문 내용**

📝 좋은 첫 프롬프트의 구조:
- 목적: [무엇을 만들 것인지]
- 사용자: [누가 사용하는지]
- 핵심 기능: [반드시 필요한 기능들]
- 디자인: [원하는 스타일이나 레퍼런스]
- 기술: [특별한 요구사항 없으면 생략 가능]

✍️ 실제 예시:
```
"개인 독서 기록 웹앱을 만들어줘.

- 책 제목, 저자, 읽은 날짜를 기록할 수 있어야 해
- 읽은 책 목록을 카드 형태로 보여줘
- 별점(1~5점)을 매길 수 있어야 해
- 깔끔하고 미니멀한 디자인으로 해줘
- HTML, CSS, JavaScript만 사용해줘 (라이브러리 없이)"
```

💡 팁: `첫 프롬프트에서 완벽함을 추구하지 마세요. 일단 동작하는 버전을 만들고 이후에 개선합니다.`

---

### STEP 03 — 코드 검토 및 실행

**헤더**
- 제목 (한): `코드 검토 및 실행`
- 제목 (영): `Review & Run the Code`
- 부제 (한): `AI가 생성한 코드를 실행하고 결과를 확인합니다`
- 부제 (영): `Run the AI-generated code and check the results`

**본문 내용**

🖥️ 코드 실행하기 (AI가 HTML 파일을 생성했다면):
1. 코드를 복사해서 `index.html` 파일로 저장
2. 브라우저로 파일 열기 (더블클릭 또는 드래그앤드롭)
3. 원하는 대로 작동하는지 확인

🔍 무엇을 확인해야 할까?
- 핵심 기능이 모두 작동하는가?
- UI가 대략 원하는 모습인가?
- 오류 메시지가 없는가?

🐛 오류가 났을 때:
> 당황하지 마세요! 오류 메시지를 그대로 복사해서 AI에게 붙여넣기 하면 됩니다.
```
"아래 오류가 발생했어. 고쳐줘:
[오류 메시지 붙여넣기]"
```

💡 팁: `코드를 이해하려고 너무 오래 시간을 보내지 마세요. 작동하면 다음 단계로, 오류가 있으면 AI에게 요청합니다.`

---

### STEP 04 — 반복적 개선 (Iteration)

**헤더**
- 제목 (한): `반복적 개선 (Iteration)`
- 제목 (영): `Iterative Improvement`
- 부제 (한): `대화를 통해 기능을 추가하고, 디자인을 개선하고, 버그를 수정합니다`
- 부제 (영): `Add features, improve design, and fix bugs through conversation`

**본문 내용**

🔁 이터레이션 사이클: `💬 요청 → 🤖 AI 작업 → 👀 확인 → 📝 피드백 → (반복)`

📋 좋은 피드백 방법:

❌ 나쁜 피드백:
- "좀 더 예쁘게 해줘"
- "느린 것 같아"
- "다시 해줘"

✅ 좋은 피드백:
- "버튼 색상을 파란색으로 바꾸고 크기를 20% 키워줘"
- "목록을 로딩할 때 스피너 애니메이션을 추가해줘"
- "카드 레이아웃을 3열 그리드로 바꿔줘"

💡 팁: `한 번에 하나씩 요청하세요. 여러 변경사항을 동시에 요청하면 AI가 혼동할 수 있습니다.`

---

### STEP 05 — 배포하기

**헤더**
- 제목 (한): `배포하기`
- 제목 (영): `Deploy`
- 부제 (한): `완성된 웹앱을 인터넷에 공개합니다`
- 부제 (영): `Publish your finished web app to the internet`

**본문 내용**

🌐 GitHub Pages로 배포 (무료):
1. GitHub에 새 저장소(Repository) 생성
2. AI에게 "GitHub에 업로드하는 방법 알려줘" 요청
3. 저장소 Settings → Pages → Source 설정
4. 몇 분 후 `username.github.io/repo-name` 접속

⚡ Vercel로 배포 (더 쉬움):
1. vercel.com 회원가입 (GitHub 연동)
2. "New Project" → GitHub 저장소 선택
3. 자동으로 빌드 및 배포 완료
4. 고유 URL 자동 생성

💡 팁: `배포 과정에서 막히면 AI에게 "Vercel로 배포하는 방법을 단계별로 알려줘"라고 요청하세요.`

---

## ✍️ CHAPTER 04 — 프롬프트 작성법

**섹션 헤더**
- 태그: `CHAPTER 04`
- 제목 (한): `프롬프트 작성법`
- 제목 (영): `Prompt Writing Techniques`
- 설명 (한): `AI에게 요청할 때 결과의 질을 높이는 프롬프트 패턴들`
- 설명 (영): `Prompt patterns that improve the quality of results when requesting from AI`

---

**패턴 카드 6개**

### 패턴 1 — 🎯 구체적으로 명시하기

- 제목 (한): `구체적으로 명시하기`
- 제목 (영): `Be Specific`

❌ 나쁜 예: `"버튼 만들어줘"`

✅ 좋은 예: `"파란색 배경에 흰 글씨, 둥근 모서리(border-radius 8px), hover 시 약간 어두워지는 '저장하기' 버튼 만들어줘"`

---

### 패턴 2 — 📐 제약 조건 명시하기

- 제목 (한): `제약 조건 명시하기`
- 제목 (영): `Specify Constraints`

❌ 나쁜 예: `"쇼핑몰 만들어줘"`

✅ 좋은 예: `"React 없이 순수 HTML/CSS/JS만 사용해서, 외부 라이브러리 없이 만들어줘"`

---

### 패턴 3 — 🖼️ 레퍼런스 제공하기

- 제목 (한): `레퍼런스 제공하기`
- 제목 (영): `Provide References`

❌ 나쁜 예: `"예쁜 카드 UI 만들어줘"`

✅ 좋은 예: `"Notion의 카드 스타일처럼, 흰 배경에 섬세한 그림자, 호버 시 살짝 올라오는 효과의 카드 컴포넌트 만들어줘"`

---

### 패턴 4 — 🔄 부분 수정 요청하기

- 제목 (한): `부분 수정 요청하기`
- 제목 (영): `Request Partial Changes`

❌ 나쁜 예: `"전체 다시 만들어줘"`

✅ 좋은 예: `"기존 코드에서 헤더 부분만 수정해줘. 다른 부분은 건드리지 마."`

---

### 패턴 5 — 🐛 오류 보고하기

- 제목 (한): `오류 보고하기`
- 제목 (영): `Report Errors Clearly`

❌ 나쁜 예: `"왜 안돼?"`

✅ 좋은 예: `"버튼을 클릭하면 아무 반응이 없어. 브라우저 콘솔에 이런 오류가 나와: [오류 내용]"`

---

### 패턴 6 — 💾 컨텍스트 유지하기

- 제목 (한): `컨텍스트 유지하기`
- 제목 (영): `Maintain Context`

❌ 나쁜 예: `"목록에 검색 기능 추가해줘" (새 대화창에서)`

✅ 좋은 예: `"지금까지 만든 코드에 검색 기능을 추가해줘. [현재 코드 붙여넣기]"`

---

**만능 프롬프트 공식**

- 제목 (한): `🧪 만능 프롬프트 공식`
- 제목 (영): `🧪 Universal Prompt Formula`
- 공식: `[역할 지정]` + `[구체적 요구사항]` + `[제약 조건]` + `[결과물 형식]`
- 예시 (한): `"웹 개발 전문가로서(역할), 다크 테마를 지원하는 메모 앱을(요구사항), 외부 라이브러리 없이(제약), HTML/CSS/JS 3개 파일로 분리해서(형식) 만들어줘"`
- 예시 (영): `"As a web development expert (role), create a memo app that supports dark theme (requirement), without external libraries (constraint), as 3 separate files: HTML/CSS/JS (format)"`

---

## 🧪 CHAPTER 05 — 직접 실습해보기

**섹션 헤더**
- 태그: `CHAPTER 05`
- 제목 (한): `직접 실습해보기`
- 제목 (영): `Hands-on Practice`
- 설명 (한): `아래 연습 문제들로 프롬프트 작성 실력을 키워보세요`
- 설명 (영): `Build your prompt writing skills with these exercises`

---

### 탭: 초급 (Beginner)

**초급 #1 — 자기소개 페이지**
- 난이도 표시 (한): `⭐ 초급 #1`
- 난이도 표시 (영): `⭐ Beginner #1`
- 제목 (한): `자기소개 페이지`
- 제목 (영): `Personal Introduction Page`
- 설명 (한): `나를 소개하는 간단한 웹페이지를 만들어보세요.`
- 설명 (영): `Create a simple webpage introducing yourself.`
- 포함할 내용 (한): 이름과 간단한 소개글 / 내가 좋아하는 것 3가지 / 연락처 또는 SNS 링크
- 포함할 내용 (영): Your name and a short bio / 3 things you like / Contact info or social media links
- 힌트 (한):
```
"나를 소개하는 웹페이지를 만들어줘.
- 이름: [이름]
- 소개: [한 줄 소개]
- 좋아하는 것: 음악, 독서, 여행
- 디자인: 미니멀하고 깔끔하게
- HTML, CSS를 한 파일에 담아줘"
```
- 힌트 (영):
```
"Create a webpage introducing me.
- Name: [Your name]
- Bio: [One-line bio]
- Things I like: Music, Reading, Travel
- Design: Minimal and clean
- Put HTML and CSS in one file"
```

---

**초급 #2 — 카운터 앱**
- 난이도 표시 (한): `⭐ 초급 #2`
- 난이도 표시 (영): `⭐ Beginner #2`
- 제목 (한): `카운터 앱`
- 제목 (영): `Counter App`
- 설명 (한): `버튼을 누르면 숫자가 올라가는 카운터를 만들어보세요.`
- 설명 (영): `Create a counter that increments when a button is pressed.`
- 포함할 내용 (한): +1 버튼 (카운트 증가) / -1 버튼 (카운트 감소) / 초기화 버튼
- 포함할 내용 (영): +1 button (increase count) / -1 button (decrease count) / Reset button
- 힌트 (한):
```
"숫자 카운터 웹앱을 만들어줘.
- + 버튼: 숫자 1 증가
- - 버튼: 숫자 1 감소 (0 이하로 안 내려감)
- 리셋 버튼: 0으로 초기화
- 현재 숫자를 크게 중앙에 표시
- CSS 애니메이션으로 숫자 변경 시 효과 추가"
```
- 힌트 (영):
```
"Create a number counter web app.
- + button: increase number by 1
- - button: decrease by 1 (doesn't go below 0)
- Reset button: reset to 0
- Display current number large in center
- Add CSS animation effect on number change"
```

---

**초급 #3 — 색깔 퀴즈 게임**
- 난이도 표시 (한): `⭐ 초급 #3`
- 난이도 표시 (영): `⭐ Beginner #3`
- 제목 (한): `색깔 퀴즈 게임`
- 제목 (영): `Color Quiz Game`
- 설명 (한): `RGB 색상 코드를 보여주고 맞는 색상을 고르는 게임을 만들어보세요.`
- 설명 (영): `Create a game that shows an RGB color code and you choose the matching color.`
- 포함할 내용 (한): RGB 값 텍스트 표시 / 4개의 색상 선택지 / 점수 기록
- 포함할 내용 (영): Display RGB value text / 4 color choices / Score tracking
- 힌트 (한):
```
"RGB 색상 맞추기 퀴즈 게임을 만들어줘.
- 화면에 'RGB(R, G, B)' 형식으로 색상값 표시
- 4개의 색상 버튼 중 맞는 것 클릭
- 정답/오답 피드백
- 점수 표시 (맞춘 개수/전체 시도)
- 다음 문제 버튼"
```
- 힌트 (영):
```
"Create an RGB color guessing quiz game.
- Display color value in 'RGB(R, G, B)' format
- Click the correct one among 4 color buttons
- Correct/incorrect feedback
- Score display (correct / total attempts)
- Next question button"
```

---

### 탭: 중급 (Intermediate)

**중급 #1 — 할일 관리 앱 (로컬 저장)**
- 난이도 표시 (한): `⭐⭐ 중급 #1`
- 난이도 표시 (영): `⭐⭐ Intermediate #1`
- 제목 (한): `할일 관리 앱 (로컬 저장)`
- 제목 (영): `Todo App (with Local Storage)`
- 설명 (한): `데이터가 브라우저를 닫아도 유지되는 할일 앱을 만들어보세요.`
- 설명 (영): `Create a todo app that persists data even after closing the browser.`
- 포함할 내용 (한): 할일 추가/삭제/완료 체크 / LocalStorage로 데이터 저장 / 필터 (전체/진행중/완료)
- 포함할 내용 (영): Add/delete/complete todos / Save data with LocalStorage / Filter (All/Active/Completed)
- 힌트 (한):
```
"할일 관리 웹앱을 만들어줘.
- 할일 입력 후 Enter 또는 버튼으로 추가
- 각 항목: 체크박스, 텍스트, 삭제 버튼
- 완료된 항목은 취소선 표시
- LocalStorage에 저장 (새로고침해도 유지)
- 하단에 전체/진행중/완료 필터 탭
- 깔끔한 미니멀 디자인"
```
- 힌트 (영):
```
"Create a todo management web app.
- Add todo by pressing Enter or button
- Each item: checkbox, text, delete button
- Completed items shown with strikethrough
- Save to LocalStorage (persists on refresh)
- All/Active/Completed filter tabs at bottom
- Clean minimal design"
```

---

**중급 #2 — 날씨 대시보드**
- 난이도 표시 (한): `⭐⭐ 중급 #2`
- 난이도 표시 (영): `⭐⭐ Intermediate #2`
- 제목 (한): `날씨 대시보드`
- 제목 (영): `Weather Dashboard`
- 설명 (한): `도시 이름을 입력하면 날씨 정보를 보여주는 앱을 만들어보세요.`
- 설명 (영): `Create an app that shows weather info when you enter a city name.`
- 포함할 내용 (한): 도시 검색 / 현재 기온, 날씨 상태 / 습도, 바람 속도
- 포함할 내용 (영): City search / Current temperature, weather status / Humidity, wind speed
- 힌트 (한):
```
"OpenWeatherMap API를 사용하는 날씨 앱을 만들어줘.
- 무료 API 키 필요 (openweathermap.org에서 발급)
- 도시 이름 입력 후 검색
- 현재 날씨: 기온(섭씨), 날씨 상태, 날씨 아이콘
- 추가 정보: 체감온도, 습도, 풍속
- 배경색이 날씨에 따라 변경"
```
- 힌트 (영):
```
"Create a weather app using OpenWeatherMap API.
- API key required (get one at openweathermap.org)
- Search by city name
- Current weather: temperature (Celsius), status, icon
- Extra info: feels like temp, humidity, wind speed
- Background color changes based on weather"
```

---

**중급 #3 — 포모도로 타이머**
- 난이도 표시 (한): `⭐⭐ 중급 #3`
- 난이도 표시 (영): `⭐⭐ Intermediate #3`
- 제목 (한): `포모도로 타이머`
- 제목 (영): `Pomodoro Timer`
- 설명 (한): `25분 집중 + 5분 휴식 사이클을 관리하는 타이머를 만들어보세요.`
- 설명 (영): `Create a timer to manage 25-minute focus + 5-minute break cycles.`
- 포함할 내용 (한): 카운트다운 타이머 / 집중/휴식 모드 전환 / 알림 소리
- 포함할 내용 (영): Countdown timer / Focus/break mode switching / Alert sound
- 힌트 (한):
```
"포모도로 타이머 앱을 만들어줘.
- 집중 시간: 25분 (기본값, 설정 가능)
- 휴식 시간: 5분 (짧은 휴식), 15분 (긴 휴식)
- 시작/일시정지/리셋 버튼
- 타이머 종료 시 Web Audio API로 알림음
- 완료된 포모도로 개수 표시
- 진행 상황 원형 프로그레스바"
```
- 힌트 (영):
```
"Create a Pomodoro timer app.
- Focus time: 25 minutes (default, adjustable)
- Break time: 5 min (short break), 15 min (long break)
- Start/pause/reset buttons
- Alert sound using Web Audio API when timer ends
- Show number of completed pomodoros
- Circular progress bar"
```

---

### 탭: 고급 (Advanced)

**고급 #1 — 마크다운 에디터**
- 난이도 표시 (한): `⭐⭐⭐ 고급 #1`
- 난이도 표시 (영): `⭐⭐⭐ Advanced #1`
- 제목 (한): `마크다운 에디터`
- 제목 (영): `Markdown Editor`
- 설명 (한): `실시간으로 미리보기가 가능한 마크다운 에디터를 만들어보세요.`
- 설명 (영): `Create a markdown editor with real-time preview.`
- 포함할 내용 (한): 좌: 마크다운 입력창 / 우: HTML 렌더링 미리보기 / 내보내기 (HTML/PDF)
- 포함할 내용 (영): Left: Markdown input area / Right: HTML rendering preview / Export (HTML/PDF)
- 힌트 (한):
```
"실시간 마크다운 에디터를 만들어줘.
- 화면을 좌우로 분할 (에디터 | 미리보기)
- marked.js 라이브러리로 마크다운 파싱
- 실시간 렌더링 (타이핑할 때마다 업데이트)
- 툴바: 볼드, 이탤릭, 제목, 링크, 이미지, 코드블록
- 'HTML 내보내기' 버튼
- 다크/라이트 테마 토글"
```
- 힌트 (영):
```
"Create a real-time Markdown editor.
- Split screen left/right (editor | preview)
- Parse markdown with marked.js library
- Real-time rendering (updates as you type)
- Toolbar: bold, italic, heading, link, image, code block
- 'Export HTML' button
- Dark/light theme toggle"
```

---

**고급 #2 — 개인 대시보드**
- 난이도 표시 (한): `⭐⭐⭐ 고급 #2`
- 난이도 표시 (영): `⭐⭐⭐ Advanced #2`
- 제목 (한): `개인 대시보드`
- 제목 (영): `Personal Dashboard`
- 설명 (한): `할일, 날씨, 북마크, 시계를 한 화면에서 볼 수 있는 대시보드를 만들어보세요.`
- 설명 (영): `Create a dashboard showing todos, weather, bookmarks, and clock on one screen.`
- 포함할 내용 (한): 현재 시간/날짜 위젯 / 간단한 할일 위젯 / 북마크 위젯 / 드래그로 위젯 배치
- 포함할 내용 (영): Current time/date widget / Simple todo widget / Bookmarks widget / Drag to reposition widgets
- 힌트 (한):
```
"개인용 브라우저 새탭 대시보드를 만들어줘.
- 배경: Unsplash API로 랜덤 풍경 이미지
- 중앙: 현재 시간 (큰 글씨), 날짜
- 좌측: 할일 미니 위젯 (추가/삭제)
- 우측: 즐겨찾기 링크 위젯
- 검색바: Google 검색 연동
- 전체적으로 유리 모핀 디자인(glassmorphism)"
```
- 힌트 (영):
```
"Create a personal browser new tab dashboard.
- Background: random landscape images from Unsplash API
- Center: current time (large text), date
- Left: mini todo widget (add/delete)
- Right: favorite links widget
- Search bar: Google search integration
- Overall glassmorphism design"
```

---

**고급 #3 — AI 채팅 인터페이스**
- 난이도 표시 (한): `⭐⭐⭐ 고급 #3`
- 난이도 표시 (영): `⭐⭐⭐ Advanced #3`
- 제목 (한): `AI 채팅 인터페이스`
- 제목 (영): `AI Chat Interface`
- 설명 (한): `Claude API를 연동한 나만의 AI 챗봇 인터페이스를 만들어보세요.`
- 설명 (영): `Create your own AI chatbot interface integrated with the Claude API.`
- 포함할 내용 (한): 채팅 UI (메시지 버블) / Claude API 연동 / 대화 내역 저장
- 포함할 내용 (영): Chat UI (message bubbles) / Claude API integration / Save conversation history
- 힌트 (한):
```
"Claude API를 사용하는 AI 채팅 앱을 만들어줘.
- Node.js Express 백엔드
- Anthropic SDK (@anthropic-ai/sdk) 사용
- 프론트엔드: 채팅 UI (사용자/AI 메시지 구분)
- 스트리밍 응답 지원
- 대화 내역 LocalStorage 저장
- 시스템 프롬프트 설정 기능
참고: API 키는 환경변수(.env)로 관리"
```
- 힌트 (영):
```
"Create an AI chat app using Claude API.
- Node.js Express backend
- Use Anthropic SDK (@anthropic-ai/sdk)
- Frontend: chat UI (distinguish user/AI messages)
- Support streaming responses
- Save conversation history to LocalStorage
- System prompt configuration feature
Note: Manage API key as environment variable (.env)"
```

---

### 프롬프트 연습장 (Playground)

- 제목 (한): `🎮 프롬프트 연습장`
- 제목 (영): `🎮 Prompt Playground`
- 설명 (한): `아이디어를 구체적인 프롬프트로 바꾸는 연습을 해보세요.`
- 설명 (영): `Practice turning your ideas into concrete prompts.`
- 입력 레이블 (한): `💭 내 아이디어 (간단하게)`
- 입력 레이블 (영): `💭 My Idea (briefly)`
- 입력 플레이스홀더 (한): `예: 매일 물 마시는 것 체크하는 앱`
- 입력 플레이스홀더 (영): `e.g. An app to track daily water intake`
- 출력 레이블 (한): `📝 강화된 프롬프트 (참고용)`
- 출력 레이블 (영): `📝 Enhanced Prompt (for reference)`
- 변환 버튼 (한): `✨ 프롬프트 변환하기`
- 변환 버튼 (영): `✨ Convert to Prompt`

---

## 💡 CHAPTER 06 — 팁 & 자주 하는 실수

**섹션 헤더**
- 태그: `CHAPTER 06`
- 제목 (한): `팁 & 자주 하는 실수`
- 제목 (영): `Tips & Common Mistakes`
- 설명 (한): `바이브코딩을 더 잘하기 위한 핵심 노하우`
- 설명 (영): `Key know-how for better Vibe Coding`

---

### ✅ 이렇게 하세요 (Do This)

**팁 G1 — 📦 작게 시작하기**
- 제목 (한): `작게 시작하기`
- 제목 (영): `Start Small`
- 설명 (한): `MVP(최소 기능 제품)부터 시작하세요. 완벽한 앱보다 동작하는 앱이 먼저입니다.`
- 설명 (영): `Start with an MVP (Minimum Viable Product). A working app comes before a perfect app.`

**팁 G2 — 💾 자주 저장하기**
- 제목 (한): `자주 저장하기`
- 제목 (영): `Save Frequently`
- 설명 (한): `잘 동작하는 시점마다 코드를 저장하거나 GitHub에 커밋하세요. 나중에 망쳐도 되돌아올 수 있습니다.`
- 설명 (영): `Save your code or commit to GitHub whenever things are working. You can always roll back later.`

**팁 G3 — 🗣️ 맥락 제공하기**
- 제목 (한): `맥락 제공하기`
- 제목 (영): `Provide Context`
- 설명 (한): `대화가 길어지면 "지금까지 만든 코드야, 여기에 [기능]을 추가해줘" 형식으로 현재 코드를 항상 붙여넣으세요.`
- 설명 (영): `When conversations get long, always paste the current code: 'Here's the code so far, please add [feature] to this'.`

**팁 G4 — 🧪 자주 테스트하기**
- 제목 (한): `자주 테스트하기`
- 제목 (영): `Test Frequently`
- 설명 (한): `기능을 추가할 때마다 브라우저에서 바로 테스트하세요. 나중에 한꺼번에 디버깅하는 것보다 훨씬 쉽습니다.`
- 설명 (영): `Test in the browser right after adding each feature. Much easier than debugging everything at once later.`

**팁 G5 — 📖 AI에게 설명 요청하기**
- 제목 (한): `AI에게 설명 요청하기`
- 제목 (영): `Ask AI to Explain`
- 설명 (한): `"이 코드가 어떻게 동작하는지 쉽게 설명해줘"라고 요청하면 점점 개발 감각이 생깁니다.`
- 설명 (영): `Asking 'Explain how this code works in simple terms' will gradually build your developer intuition.`

---

### ❌ 이렇게 하지 마세요 (Don't Do This)

**팁 B1 — 🏔️ 처음부터 완벽함 추구**
- 제목 (한): `처음부터 완벽함 추구`
- 제목 (영): `Pursuing Perfection from the Start`
- 설명 (한): `첫 버전은 항상 rough합니다. 완성도 80%에서 배포하고, 피드백을 받으며 개선하는 게 훨씬 효과적입니다.`
- 설명 (영): `The first version is always rough. Deploy at 80% completeness and improve based on feedback.`

**팁 B2 — 🌊 코드 이해 없이 계속 추가**
- 제목 (한): `코드 이해 없이 계속 추가`
- 제목 (영): `Adding Features Without Understanding the Code`
- 설명 (한): `어느 정도 규모가 되면 AI에게 "지금 코드 구조 설명해줘"를 요청하세요. 구조 파악 없이 기능만 쌓으면 나중에 수습이 어렵습니다.`
- 설명 (영): `When the codebase gets larger, ask AI to 'Explain the current code structure'. Stacking features blindly leads to trouble.`

**팁 B3 — 🔄 오류 나면 무조건 "다시 해줘"**
- 제목 (한): `오류 나면 무조건 "다시 해줘"`
- 제목 (영): `Just Saying 'Do It Again' on Errors`
- 설명 (한): `오류 메시지를 AI에게 그대로 전달하세요. "다시 해줘"보다 오류 내용을 주면 정확하게 수정합니다.`
- 설명 (영): `Pass the error message directly to AI. Providing the actual error is more useful than just saying 'do it again'.`

**팁 B4 — 📚 너무 많은 기능 한번에 요청**
- 제목 (한): `너무 많은 기능 한번에 요청`
- 제목 (영): `Requesting Too Many Features at Once`
- 설명 (한): `한 번에 5개 이상의 기능을 요청하면 코드가 복잡해지고 오류가 많아집니다. 하나씩 추가하세요.`
- 설명 (영): `Requesting 5+ features at once makes code complex and error-prone. Add them one at a time.`

**팁 B5 — 🔒 보안 정보를 코드에 직접 입력**
- 제목 (한): `보안 정보를 코드에 직접 입력`
- 제목 (영): `Putting Sensitive Info Directly in Code`
- 설명 (한): `API 키, 비밀번호 등은 절대 코드에 직접 쓰지 마세요. 환경변수(.env)를 사용하는 방법을 AI에게 물어보세요.`
- 설명 (영): `Never write API keys or passwords directly in code. Ask AI how to use environment variables (.env).`

---

### ❓ 자주 묻는 질문 (FAQ)

**FAQ 1**
- 질문 (한): `코딩을 전혀 모르는데 바이브코딩이 가능한가요?`
- 질문 (영): `Can I do Vibe Coding with absolutely no coding knowledge?`
- 답변 (한): `네, 가능합니다! 바이브코딩의 핵심은 "원하는 것을 명확하게 표현하는 능력"입니다. HTML이나 JavaScript를 몰라도 됩니다. 다만, 기초적인 웹 개념(URL, 파일, 브라우저)을 이해하면 더 효과적으로 AI와 소통할 수 있습니다.`
- 답변 (영): `Yes, it's possible! The key to Vibe Coding is "the ability to clearly express what you want." You don't need to know HTML or JavaScript. However, understanding basic web concepts (URLs, files, browsers) will help you communicate more effectively with AI.`

**FAQ 2**
- 질문 (한): `AI가 만든 코드를 믿어도 되나요?`
- 질문 (영): `Can I trust the code that AI creates?`
- 답변 (한): `개인 프로젝트나 학습용으로는 충분합니다. 다만 실제 서비스에 사용할 때는 보안 취약점(사용자 입력 검증, XSS 방지 등)을 AI에게 확인 요청하거나, 경험 있는 개발자의 리뷰를 받는 것을 권장합니다.`
- 답변 (영): `It's sufficient for personal projects or learning purposes. For actual services, it's recommended to ask AI to check for security vulnerabilities (input validation, XSS prevention, etc.) or have an experienced developer review it.`

**FAQ 3**
- 질문 (한): `어떤 AI가 코딩에 가장 좋나요?`
- 질문 (영): `Which AI is best for coding?`
- 답변 (한): `2026년 기준으로 Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google) 모두 뛰어난 코딩 능력을 보여줍니다. 특히 Claude는 긴 코드 맥락 이해와 코드 품질에서 강점이 있습니다. 각 AI의 무료 플랜으로 직접 시험해보고 맞는 것을 찾아보세요.`
- 답변 (영): `As of 2026, Claude (Anthropic), GPT-4o (OpenAI), and Gemini (Google) all show excellent coding abilities. Claude has particular strengths in understanding long code contexts and code quality. Try each AI's free plan and find the one that works for you.`

**FAQ 4**
- 질문 (한): `바이브코딩으로 만들 수 없는 것이 있나요?`
- 질문 (영): `Are there things Vibe Coding can't build?`
- 답변 (한): `대부분의 웹 앱, 도구, 게임은 만들 수 있습니다. 다만, 대규모 트래픽을 처리하는 서비스, 복잡한 실시간 기능, 모바일 네이티브 앱, 머신러닝 모델 학습 등은 바이브코딩만으로는 한계가 있습니다. 이런 경우에는 개발자와 협업하거나 전문적인 학습이 필요합니다.`
- 답변 (영): `Most web apps, tools, and games can be built. However, services handling large-scale traffic, complex real-time features, native mobile apps, and ML model training have limitations with Vibe Coding alone. These cases require collaboration with developers or specialized learning.`

**FAQ 5**
- 질문 (한): `바이브코딩을 하다 보면 진짜 코딩도 배울 수 있나요?`
- 질문 (영): `Can I actually learn real coding through Vibe Coding?`
- 답변 (한): `네! AI에게 "이 코드가 왜 이렇게 작동하는지 설명해줘"라고 지속적으로 물어보면, 자연스럽게 코드를 읽고 이해하는 능력이 생깁니다. 많은 바이브코더들이 이 과정을 통해 실제 프로그래밍 개념을 습득하고 있습니다.`
- 답변 (영): `Yes! Consistently asking AI "Explain why this code works this way" will naturally build your ability to read and understand code. Many vibe coders are learning actual programming concepts through this process.`

---

## 🚀 CTA 섹션

- 제목 (한): `지금 바로 시작해보세요`
- 제목 (영): `Start Right Now`
- 설명 (한): `아이디어가 있다면, 그것으로 충분합니다. / 바이브코딩으로 오늘 첫 번째 앱을 만들어보세요.`
- 설명 (영): `If you have an idea, that's enough. / Build your first app today with Vibe Coding.`

**5단계 흐름**

| 번호 | 한국어 | 영어 |
|------|--------|------|
| 1 | Claude.ai 접속 | Visit Claude.ai |
| 2 | 아이디어 설명 | Describe Your Idea |
| 3 | 코드 실행 | Run the Code |
| 4 | 개선 반복 | Iterate |
| 5 | 세상에 공개! | Launch to the World! |

---

## 🦶 푸터 (Footer)

- 메인 (한): `⚡ 바이브코딩 가이드 · 누구나 만드는 세상을 위해`
- 메인 (영): `⚡ Vibe Coding Guide · For a World Where Anyone Can Build`
- 서브 (한/영 공통): `Made with Vibe Coding · 2026`
