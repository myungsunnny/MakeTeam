# MakeTeam

프로젝트 구조가 정리되었습니다. 주요 변경사항:

- `pages/` 폴더에 각 화면을 모아두었습니다: 대시보드, 경기 방식, 대진표, 로그인, 팀 결과, 팀 설정.
- 스크린샷 및 이미지 자산은 `pages/assets/images/`로 중앙화되었습니다.
- 디자인 시스템 문서는 `design/DESIGN.md`에 통합되어 있습니다.

진입 페이지 예시:

- [pages/dashboard.html](pages/dashboard.html) — 메인 대시보드
- [pages/login.html](pages/login.html) — 로그인 화면

원본 소스(`_1`~`_6`, `kinetic_learning`)의 `code.html`과 `DESIGN.md`는 복사 후 제거되어 있습니다. 원본을 보관해야 한다면 알려주세요(백업 디렉터리 생성 또는 Git 커밋 후 복구 가능).

다음 권장 작업:

- README에 더 자세한 개발/배포 지침 추가
- 정적 자산 최적화(이미지 압축) 및 `assets/`로 통합
- 변경사항 커밋 및 PR 생성

작업을 계속 진행할까요?