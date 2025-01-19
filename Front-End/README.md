
README.md 파일의 구성 (작성 미완료-진행중)
- 프로젝트 구성
- 프로젝트 프로그램 설치 방법
- 프로젝트 프로그램 사용 방법
- 저작권 및 사용 정보
- 프로그래머 정보
- 버그 및 디버그
- 참고 및 출처
- 버전 및 업데이트 정보
- FAQ
or
- 프로젝트 소개, 개발 기간, 개발자 소개(역할분담 상세), 개발 환경, 기술 스택, 주요 기능, 프로젝트 아키텍쳐 등
---
# GETCODE(겟코드) SIDE PROJECT

웹/앱 사이드 프로젝트들을 모아놓은 반응형 웹을 구현하였습니다. 스터디 및 프로젝트 팀원을 모집할 수 있으며
커뮤니티로 소통을 진행 할 수 있습니다.

## 파일 구조
```
📦 FRONT-END
├─ .env.development
├─ .eslintrc.json
├─ .gitignore
├─ README.md
├─ components
│  ├─ auth
│  │  ├─ LoginPage.tsx
│  │  ├─ NickNamePage.tsx
│  │  └─ SignUpPage.tsx
│  ├─ common
│  │  ├─ ProjectForm.tsx
│  │  ├─ RoundBox.tsx
│  │  ├─ Toggle.tsx
│  │  ├─ auth
│  │  │  ├─ AuthForm.tsx
│  │  │  ├─ AuthLayoutForm.tsx
│  │  │  ├─ InputForm.tsx
│  │  │  └─ loginButton
│  │  │     └─ GoogleLoginButton.tsx
│  │  ├─ layout
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ MenuBar.tsx
│  │  │  ├─ ProfileButtonForm.tsx
│  │  │  ├─ _Header.tsx
│  │  │  └─ _MenuBar.tsx
│  │  └─ search
│  │     └─ SearchInput.tsx
│  ├─ findProject
│  │  ├─ FindProjectPage.tsx
│  │  └─ ObjectForm.tsx
│  ├─ findStudy
│  │  ├─ FindStudyPage.tsx
│  │  └─ ObjectForm.tsx
│  ├─ project
│  │  ├─ ObjectForm.tsx
│  │  └─ ProjectPage.tsx
│  └─ projectDetail
│     └─ ProjectForm.tsx
├─ next-env.d.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ api
│  │  ├─ auth
│  │  │  └─ [...nextauth].ts
│  │  ├─ axios.ts
│  │  ├─ hello.ts
│  │  └─ index.ts
│  ├─ auth
│  │  ├─ login
│  │  │  ├─ index.tsx
│  │  │  └─ oauth
│  │  │     └─ callback.tsx
│  │  └─ signup
│  │     ├─ index.tsx
│  │     └─ nickname
│  │        └─ index.tsx
│  ├─ findProject
│  │  └─ index.tsx
│  ├─ findStudy
│  │  └─ index.tsx
│  ├─ index.tsx
│  ├─ main
│  │  └─ index.tsx
│  └─ project
│     ├─ detail
│     │  └─ index.tsx
│     ├─ index.tsx
│     └─ post
│        └─ index.tsx
├─ public
│  └─ SVG
│     ├─ auth.tsx
│     ├─ header.tsx
│     ├─ logo.tsx
│     ├─ reactionCount.tsx
│     └─ search.tsx
├─ styles
│  ├─ global-style.ts
│  ├─ globals.css
│  ├─ mediaQuery.ts
│  ├─ styled.d.ts
│  └─ theme.ts
└─ tsconfig.json
```