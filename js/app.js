// =============================================
// Kinetic Learning - Router & State
// =============================================

// --- 라우터 ---
const routes = {
  login:       '/index.html',
  dashboard:   '/pages/dashboard.html',
  teamSetup:   '/pages/team-setup.html',
  teamResult:  '/pages/team-result.html',
  matchFormat: '/pages/match-format.html',
  tournament:  '/pages/tournament.html',
  studentManagement: '/pages/student-management.html',
};

function navigate(page) {
  if (routes[page]) {
    window.location.href = routes[page];
  } else {
    console.warn(`[Router] 알 수 없는 페이지: ${page}`);
  }
}

// --- 앱 상태 관리 ---
const AppState = {
  // 현재 로그인한 교사 정보
  teacher: JSON.parse(sessionStorage.getItem('teacher') || 'null'),

  // 현재 반 정보
  classroom: (() => {
    const saved = sessionStorage.getItem('classroom');
    if (saved) {
      const data = JSON.parse(saved);
      if (!data.students && data.totalStudents) {
        data.students = Array.from({ length: data.totalStudents }, (_, i) => `학생 ${i + 1}`);
      } else if (!data.students) {
        data.students = [];
      }
      return data;
    }
    return {
      name: '4학년 호랑이반',
      students: Array.from({ length: 28 }, (_, i) => `학생 ${i + 1}`),
    };
  })(),

  // 팀 배정 설정
  teamConfig: JSON.parse(sessionStorage.getItem('teamConfig') || JSON.stringify({
    teamCount: 4,
    genderBalance: 'random',
  })),

  // 배정된 팀 결과
  teams: JSON.parse(sessionStorage.getItem('teams') || 'null'),

  // 경기 결과
  matchResults: JSON.parse(sessionStorage.getItem('matchResults') || '[]'),

  // 팀 통계 (순위용)
  teamsStats: JSON.parse(sessionStorage.getItem('teamsStats') || '{}'),

  // 최근 활동 내역
  activities: JSON.parse(sessionStorage.getItem('activities') || '[]'),

  // 선택된 경기 방식
  matchFormat: sessionStorage.getItem('matchFormat') || null,

  // 패자부활전 여부
  isDoubleElim: JSON.parse(sessionStorage.getItem('isDoubleElim') || 'false'),

  // 상태 저장
  save(key, value) {
    this[key] = value;
    sessionStorage.setItem(key, JSON.stringify(value));
    
    // 만약 teams가 새로 저장되면 통계도 초기화 및 활동 기록
    if (key === 'teams' && value) {
      const stats = {};
      value.forEach(team => {
        stats[team.name] = { wins: 0, losses: 0, draws: 0, points: 0 };
      });
      this.save('teamsStats', stats);
      this.save('matchResults', []);
      this.logActivity('group', `${value.length}개의 새로운 팀이 배정되었습니다.`);
    }
  },

  // 활동 기록
  logActivity(icon, message) {
    const activities = [...this.activities];
    activities.unshift({
      icon,
      message,
      time: new Date().toISOString()
    });
    // 최대 10개까지만 유지
    if (activities.length > 10) activities.pop();
    this.save('activities', activities);
  },

  // 결과 기록 및 순위 업데이트
  recordResult(matchId, team1Name, team2Name, result) {
    // result: 'win1', 'win2', 'draw'
    const results = [...this.matchResults];
    const existingIdx = results.findIndex(r => r.id === matchId);
    
    let activityMsg = '';
    if (result === 'win1') activityMsg = `${team1Name} 팀이 승리했습니다.`;
    else if (result === 'win2') activityMsg = `${team2Name} 팀이 승리했습니다.`;
    else activityMsg = `${team1Name} vs ${team2Name} 경기가 무승부로 종료되었습니다.`;

    if (existingIdx > -1) {
      // 기존 결과 취소 (기존 점수 차감)
      this.updateStatsFromResult(results[existingIdx], -1);
      results[existingIdx] = { id: matchId, team1: team1Name, team2: team2Name, result };
    } else {
      results.push({ id: matchId, team1: team1Name, team2: team2Name, result });
    }
    
    this.logActivity('sports_score', activityMsg);
    
    // 새로운 결과 반영 (점수 가산)
    this.updateStatsFromResult({ id: matchId, team1: team1Name, team2: team2Name, result }, 1);
    this.save('matchResults', results);
  },

  updateStatsFromResult(match, multiplier) {
    const stats = { ...this.teamsStats };
    const { team1, team2, result } = match;
    
    if (!stats[team1]) stats[team1] = { wins: 0, losses: 0, draws: 0, points: 0 };
    if (!stats[team2]) stats[team2] = { wins: 0, losses: 0, draws: 0, points: 0 };

    if (result === 'win1') {
      stats[team1].wins += (1 * multiplier);
      stats[team1].points += (3 * multiplier);
      stats[team2].losses += (1 * multiplier);
    } else if (result === 'win2') {
      stats[team2].wins += (1 * multiplier);
      stats[team2].points += (3 * multiplier);
      stats[team1].losses += (1 * multiplier);
    } else if (result === 'draw') {
      stats[team1].draws += (1 * multiplier);
      stats[team1].points += (1 * multiplier);
      stats[team2].draws += (1 * multiplier);
      stats[team2].points += (1 * multiplier);
    }
    
    this.save('teamsStats', stats);
  },

  // 로그인 처리
  login(teacherInfo) {
    this.save('teacher', teacherInfo);
    navigate('dashboard');
  },

  // 로그아웃
  logout() {
    sessionStorage.clear();
    navigate('login');
  },
};

// --- 공통 컴포넌트 로더 ---
async function loadComponent(selector, htmlPath) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(htmlPath);
    if (!res.ok) throw new Error(`컴포넌트 로드 실패: ${htmlPath}`);
    el.innerHTML = await res.text();
    // 로드 후 현재 페이지에 맞게 하단 탭 활성화
    highlightActiveTab();
  } catch (e) {
    console.warn(e.message);
  }
}

// 현재 URL에 맞게 하단 탭바 활성화
function highlightActiveTab() {
  const path = window.location.pathname;
  document.querySelectorAll('[data-nav]').forEach(btn => {
    const target = btn.dataset.nav;
    const isActive = path.includes(target);
    btn.classList.toggle('text-primary', isActive);
    btn.classList.toggle('text-on-surface-variant', !isActive);
  });
}
