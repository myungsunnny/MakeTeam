# 키네틱 러닝 (Kinetic Learning)

초등학교 교사를 위한 체육 수업 팀 배정 & 경기 관리 웹앱입니다.

## 프로젝트 구조

```
kinetic-learning/
│
├── index.html                  ← 로그인 페이지 (진입점)
│
├── pages/
│   ├── dashboard.html          ← 대시보드 (홈)
│   ├── team-setup.html         ← 팀 배정 설정
│   ├── team-result.html        ← 팀 배정 결과
│   ├── match-format.html       ← 경기 방식 선택
│   └── tournament.html         ← 토너먼트 대진표
│
├── components/
│   ├── bottom-nav.html         ← 공통 하단 탭바
│   └── _head-snippet.html      ← 공통 <head> 참고용 스니펫
│
├── css/
│   └── global.css              ← 공통 스타일
│
├── js/
│   ├── tailwind.config.js      ← Tailwind 설정 (1곳에서만 관리)
│   └── app.js                  ← 라우터 + 상태 관리
│
└── assets/
    └── icons/                  ← 이미지/아이콘 (필요시 추가)
```

## 페이지 흐름

```
로그인 (index.html)
    ↓
대시보드 (pages/dashboard.html)
    ↓ "새로운 팀 생성하기"
팀 배정 설정 (pages/team-setup.html)
    ↓ "팀 배정하기"
팀 배정 결과 (pages/team-result.html)
    ↓ "배정 확정"
경기 방식 선택 (pages/match-format.html)
    ↓ "방식 선택 완료"
토너먼트 대진표 (pages/tournament.html)
```

## 로컬 실행 방법

### Python (추천)
```bash
cd kinetic-learning
python3 -m http.server 3000
```
→ http://localhost:3000 에서 확인

### Node.js
```bash
npx serve .
```

> ⚠️ 반드시 서버를 통해 열어야 합니다.  
> `file://` 로 직접 열면 컴포넌트 fetch가 동작하지 않습니다.

## 주요 파일 역할

| 파일 | 역할 |
|------|------|
| `js/tailwind.config.js` | 전체 디자인 토큰 (색상, 타이포, 간격) 한 곳에서 관리 |
| `js/app.js` | `navigate()` 함수로 페이지 이동, `AppState`로 상태 유지 |
| `css/global.css` | 중복 CSS 클래스 (glass-panel, format-card 등) 통합 |
| `components/bottom-nav.html` | 하단 탭바 — 각 페이지에서 `loadComponent()`로 불러옴 |

## TODO (앞으로 연결할 것들)

- [ ] 실제 로그인 API 연결 (`index.html` → `handleLogin()`)
- [ ] 학생 데이터 DB 연결 (`team-setup.html` → `assignTeams()`)
- [ ] 경기 결과 입력 기능 (`tournament.html`)
- [ ] 점수 집계 및 순위 자동화
- [ ] 반응형 태블릿 레이아웃 최적화

## 디자인 시스템

DESIGN.md 참고 — Stitch에서 생성된 토큰 기준입니다.

- **Primary**: #004ac6 (파란색 — 교사 주요 액션)
- **Secondary**: #fed01b (노란색 — 보상/하이라이트)
- **Tertiary**: #8e3c00 (주황색 — 타이머/긴급 표시)
- **폰트**: Quicksand (헤딩) + Be Vietnam Pro (본문)
