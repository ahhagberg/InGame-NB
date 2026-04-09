
const GAMES = {
  nba: {
    key: 'nba', sport: 'NBA', leagueImage: '/assets/leagues/nba.svg',
    title: 'Timberwolves vs Thunder', subtitle: 'Western spotlight · live single-game showdown',
    venue: 'Target Center', start: 'Tonight · 7:00 PM CT', theme: 'theme-nba',
    teams: [
      { code: 'MIN', name: 'Minnesota Timberwolves', image: '/assets/teams/min-nba.svg' },
      { code: 'OKC', name: 'Oklahoma City Thunder', image: '/assets/teams/okc.svg' },
    ],
    heroPlayers: ['/assets/players/anthony-edwards.svg', '/assets/players/shai-gilgeous-alexander.svg'],
    rosterSlots: [
      { key: 'g1', label: 'Guard 1', type: 'G' }, { key: 'g2', label: 'Guard 2', type: 'G' },
      { key: 'fc1', label: 'Forward / Center 1', type: 'FC' }, { key: 'fc2', label: 'Forward / Center 2', type: 'FC' }, { key: 'fc3', label: 'Forward / Center 3', type: 'FC' },
    ],
    windows: ['1st Quarter', '2nd Quarter', '3rd Quarter', '4th Quarter'], entryFees: [0, 5, 20, 50],
    players: [
      { id: 'ae', name: 'Anthony Edwards', team: 'MIN', type: 'G', proj: 14.7, image: '/assets/players/anthony-edwards.svg' },
      { id: 'mc', name: 'Mike Conley', team: 'MIN', type: 'G', proj: 8.2, image: '/assets/players/mike-conley.svg' },
      { id: 'sga', name: 'Shai Gilgeous-Alexander', team: 'OKC', type: 'G', proj: 15.2, image: '/assets/players/shai-gilgeous-alexander.svg' },
      { id: 'caruso', name: 'Alex Caruso', team: 'OKC', type: 'G', proj: 7.4, image: '/assets/players/alex-caruso.svg' },
      { id: 'jr', name: 'Julius Randle', team: 'MIN', type: 'FC', proj: 11.6, image: '/assets/players/julius-randle.svg' },
      { id: 'rg', name: 'Rudy Gobert', team: 'MIN', type: 'FC', proj: 10.1, image: '/assets/players/rudy-gobert.svg' },
      { id: 'jm', name: 'Jaden McDaniels', team: 'MIN', type: 'FC', proj: 8.8, image: '/assets/players/jaden-mcdaniels.svg' },
      { id: 'chet', name: 'Chet Holmgren', team: 'OKC', type: 'FC', proj: 10.9, image: '/assets/players/chet-holmgren.svg' },
      { id: 'jdub', name: 'Jalen Williams', team: 'OKC', type: 'FC', proj: 11.9, image: '/assets/players/jalen-williams.svg' },
    ]
  },
  mlb: {
    key: 'mlb', sport: 'MLB', leagueImage: '/assets/leagues/mlb.svg',
    title: 'Twins vs Guardians', subtitle: 'Windows every three innings',
    venue: 'Target Field', start: 'Tonight · 6:40 PM CT', theme: 'theme-mlb',
    teams: [
      { code: 'MIN', name: 'Minnesota Twins', image: '/assets/teams/min-mlb.svg' },
      { code: 'CLE', name: 'Cleveland Guardians', image: '/assets/teams/cle.svg' },
    ],
    heroPlayers: ['/assets/players/byron-buxton.svg', '/assets/players/jose-ramirez.svg'],
    rosterSlots: [
      { key: 'h1', label: 'Hitter 1', type: 'H' }, { key: 'h2', label: 'Hitter 2', type: 'H' },
      { key: 'h3', label: 'Hitter 3', type: 'H' }, { key: 'h4', label: 'Hitter 4', type: 'H' }, { key: 'bp', label: 'Bullpen', type: 'BP' },
    ],
    windows: ['Innings 1–3', 'Innings 4–6', 'Innings 7–9'], entryFees: [0, 5, 15, 35],
    players: [
      { id: 'correa', name: 'Carlos Correa', team: 'MIN', type: 'H', proj: 8.9, image: '/assets/players/carlos-correa.svg' },
      { id: 'buxton', name: 'Byron Buxton', team: 'MIN', type: 'H', proj: 10.3, image: '/assets/players/byron-buxton.svg' },
      { id: 'lewis', name: 'Royce Lewis', team: 'MIN', type: 'H', proj: 8.4, image: '/assets/players/royce-lewis.svg' },
      { id: 'ramirez', name: 'Jose Ramirez', team: 'CLE', type: 'H', proj: 11.1, image: '/assets/players/jose-ramirez.svg' },
      { id: 'kwan', name: 'Steven Kwan', team: 'CLE', type: 'H', proj: 8.1, image: '/assets/players/steven-kwan.svg' },
      { id: 'naylor', name: 'Josh Naylor', team: 'CLE', type: 'H', proj: 9.2, image: '/assets/players/josh-naylor.svg' },
      { id: 'minbp', name: 'Twins Bullpen', team: 'MIN', type: 'BP', proj: 7.0, image: '/assets/players/twins-bullpen.svg' },
      { id: 'clebp', name: 'Guardians Bullpen', team: 'CLE', type: 'BP', proj: 7.1, image: '/assets/players/guardians-bullpen.svg' },
    ]
  },
  nfl: {
    key: 'nfl', sport: 'NFL', leagueImage: '/assets/leagues/nfl.svg',
    title: 'Vikings vs Packers', subtitle: 'Quarter-by-quarter live calls',
    venue: 'U.S. Bank Stadium', start: 'Sunday · 3:25 PM CT', theme: 'theme-nfl',
    teams: [
      { code: 'MIN', name: 'Minnesota Vikings', image: '/assets/teams/min-nfl.svg' },
      { code: 'GB', name: 'Green Bay Packers', image: '/assets/teams/gb.svg' },
    ],
    heroPlayers: ['/assets/players/justin-jefferson.svg', '/assets/players/jordan-love.svg'],
    rosterSlots: [
      { key: 'qb', label: 'Quarterback', type: 'QB' }, { key: 'rb', label: 'Running Back', type: 'RB' },
      { key: 'wr1', label: 'Wide Receiver 1', type: 'WR' }, { key: 'wr2', label: 'Wide Receiver 2', type: 'WR' }, { key: 'dst', label: 'Defense', type: 'DST' },
    ],
    windows: ['1st Quarter', '2nd Quarter', '3rd Quarter', '4th Quarter'], entryFees: [0, 5, 25, 100],
    players: [
      { id: 'darnold', name: 'Sam Darnold', team: 'MIN', type: 'QB', proj: 11.5, image: '/assets/players/sam-darnold.svg' },
      { id: 'love', name: 'Jordan Love', team: 'GB', type: 'QB', proj: 12.3, image: '/assets/players/jordan-love.svg' },
      { id: 'jones', name: 'Aaron Jones', team: 'MIN', type: 'RB', proj: 9.2, image: '/assets/players/aaron-jones.svg' },
      { id: 'jacobs', name: 'Josh Jacobs', team: 'GB', type: 'RB', proj: 10.8, image: '/assets/players/josh-jacobs.svg' },
      { id: 'jj', name: 'Justin Jefferson', team: 'MIN', type: 'WR', proj: 13.8, image: '/assets/players/justin-jefferson.svg' },
      { id: 'addison', name: 'Jordan Addison', team: 'MIN', type: 'WR', proj: 8.6, image: '/assets/players/jordan-addison.svg' },
      { id: 'reed', name: 'Jayden Reed', team: 'GB', type: 'WR', proj: 8.5, image: '/assets/players/jayden-reed.svg' },
      { id: 'watson', name: 'Christian Watson', team: 'GB', type: 'WR', proj: 8.0, image: '/assets/players/christian-watson.svg' },
      { id: 'vikdst', name: 'Vikings Defense', team: 'MIN', type: 'DST', proj: 7.4, image: '/assets/players/vikings-defense.svg' },
      { id: 'gbdst', name: 'Packers Defense', team: 'GB', type: 'DST', proj: 7.0, image: '/assets/players/packers-defense.svg' },
    ]
  },
  nhl: {
    key: 'nhl', sport: 'NHL', leagueImage: '/assets/leagues/nhl.svg',
    title: 'Wild vs Avalanche', subtitle: 'Period-by-period prediction game',
    venue: 'Xcel Energy Center', start: 'Tomorrow · 7:00 PM CT', theme: 'theme-nhl',
    teams: [
      { code: 'MIN', name: 'Minnesota Wild', image: '/assets/teams/min-nhl.svg' },
      { code: 'COL', name: 'Colorado Avalanche', image: '/assets/teams/col.svg' },
    ],
    heroPlayers: ['/assets/players/kirill-kaprizov.svg', '/assets/players/nathan-mackinnon.svg'],
    rosterSlots: [
      { key: 'f1', label: 'Forward 1', type: 'F' }, { key: 'f2', label: 'Forward 2', type: 'F' },
      { key: 'd1', label: 'Defense 1', type: 'D' }, { key: 'd2', label: 'Defense 2', type: 'D' }, { key: 'gk', label: 'Goalie', type: 'GK' },
    ],
    windows: ['1st Period', '2nd Period', '3rd Period'], entryFees: [0, 5, 15, 50],
    players: [
      { id: 'kap', name: 'Kirill Kaprizov', team: 'MIN', type: 'F', proj: 10.9, image: '/assets/players/kirill-kaprizov.svg' },
      { id: 'boldy', name: 'Matt Boldy', team: 'MIN', type: 'F', proj: 8.8, image: '/assets/players/matt-boldy.svg' },
      { id: 'mack', name: 'Nathan MacKinnon', team: 'COL', type: 'F', proj: 12.7, image: '/assets/players/nathan-mackinnon.svg' },
      { id: 'rant', name: 'Mikko Rantanen', team: 'COL', type: 'F', proj: 10.9, image: '/assets/players/mikko-rantanen.svg' },
      { id: 'brodin', name: 'Jonas Brodin', team: 'MIN', type: 'D', proj: 6.9, image: '/assets/players/jonas-brodin.svg' },
      { id: 'faber', name: 'Brock Faber', team: 'MIN', type: 'D', proj: 7.4, image: '/assets/players/brock-faber.svg' },
      { id: 'makar', name: 'Cale Makar', team: 'COL', type: 'D', proj: 9.6, image: '/assets/players/cale-makar.svg' },
      { id: 'toews', name: 'Devon Toews', team: 'COL', type: 'D', proj: 7.2, image: '/assets/players/devon-toews.svg' },
      { id: 'gus', name: 'Filip Gustavsson', team: 'MIN', type: 'GK', proj: 9.0, image: '/assets/players/filip-gustavsson.svg' },
      { id: 'georg', name: 'Alexandar Georgiev', team: 'COL', type: 'GK', proj: 8.5, image: '/assets/players/alexandar-georgiev.svg' },
    ]
  }
};

const ACTIONS = {
  G:[{id:'ast',label:'Assist',base:1.5,mult:1.28,hitRate:.78},{id:'three',label:'Made Three',base:3,mult:1.57,hitRate:.61},{id:'steal',label:'Steal',base:3,mult:2.41,hitRate:.33},{id:'ten',label:'10+ Points',base:10,mult:2.74,hitRate:.29}],
  FC:[{id:'reb',label:'Rebound',base:1.25,mult:1.16,hitRate:.86},{id:'blk',label:'Block',base:3,mult:2.36,hitRate:.35},{id:'paint',label:'6+ Paint Points',base:6,mult:1.91,hitRate:.48},{id:'ddp',label:'Double-Double Pace',base:8,mult:2.82,hitRate:.22}],
  H:[{id:'hit',label:'Hit',base:3,mult:1.17,hitRate:.82},{id:'rbi',label:'RBI',base:2,mult:1.43,hitRate:.61},{id:'dbl',label:'Double',base:5,mult:1.91,hitRate:.32},{id:'hr',label:'Home Run',base:10,mult:3.08,hitRate:.14}],
  BP:[{id:'k',label:'Strikeout',base:2,mult:1.24,hitRate:.79},{id:'scoreless',label:'Scoreless Window',base:4,mult:1.86,hitRate:.46},{id:'hold',label:'Hold',base:4,mult:2.31,hitRate:.24}],
  QB:[{id:'pass-td',label:'Pass TD',base:4,mult:2.82,hitRate:.31},{id:'yards',label:'75+ Passing Yards',base:3,mult:1.52,hitRate:.67},{id:'rush',label:'20+ Rush Yards',base:2,mult:2.27,hitRate:.28},{id:'comp',label:'6+ Completions',base:2,mult:1.44,hitRate:.74}],
  RB:[{id:'first',label:'Rushing First Down',base:1,mult:1.38,hitRate:.76},{id:'rush20',label:'20+ Rush Yards',base:2,mult:1.71,hitRate:.55},{id:'rec',label:'Reception',base:1,mult:1.49,hitRate:.62},{id:'td',label:'Touchdown',base:6,mult:3.11,hitRate:.17}],
  WR:[{id:'catch',label:'Reception',base:1,mult:1.33,hitRate:.78},{id:'yd20',label:'20+ Receiving Yards',base:2,mult:1.66,hitRate:.56},{id:'fd',label:'Receiving First Down',base:1,mult:1.57,hitRate:.49},{id:'td',label:'Touchdown',base:6,mult:3.19,hitRate:.14}],
  DST:[{id:'sack',label:'Sack',base:1,mult:1.71,hitRate:.52},{id:'turnover',label:'Turnover',base:2,mult:2.68,hitRate:.22},{id:'stop',label:'3-and-Out',base:1,mult:1.58,hitRate:.48},{id:'scoreless',label:'Scoreless Quarter',base:3,mult:2.84,hitRate:.19}],
  F:[{id:'sog',label:'Shot on Goal',base:1.5,mult:1.29,hitRate:.81},{id:'assist',label:'Assist',base:2,mult:2.31,hitRate:.29},{id:'goal',label:'Goal',base:3,mult:3.07,hitRate:.17},{id:'pp',label:'Power Play Point',base:2.5,mult:2.61,hitRate:.22}],
  D:[{id:'block',label:'Blocked Shot',base:1.3,mult:1.54,hitRate:.63},{id:'sog',label:'Shot on Goal',base:1.5,mult:1.77,hitRate:.49},{id:'assist',label:'Assist',base:2,mult:2.56,hitRate:.23},{id:'goal',label:'Goal',base:3,mult:3.28,hitRate:.12}],
  GK:[{id:'save',label:'5+ Saves',base:2,mult:1.42,hitRate:.74},{id:'scoreless',label:'Scoreless Period',base:4,mult:2.49,hitRate:.31},{id:'highsave',label:'10+ Saves',base:3,mult:2.05,hitRate:.41},{id:'winpace',label:'Win Pace',base:3,mult:2.38,hitRate:.27}],
};

const bottomTabs = [
  { key: 'home', label: 'Home', icon: '⌂' },
  { key: 'contest', label: 'Contest', icon: '✦' },
  { key: 'leaderboard', label: 'Board', icon: '▤' },
  { key: 'wallet', label: 'Wallet', icon: '◔' },
  { key: 'profile', label: 'Profile', icon: '☺' },
];

function seededBoard(){ return [
  { name:'MoneyTime',score:38.22 },{ name:'BleacherKing',score:36.94 },{ name:'FullCount77',score:35.18 },{ name:'FourthDown',score:32.63 },
  { name:'HotStreak',score:30.47 },{ name:'Section108',score:29.88 },{ name:'IceCold',score:27.51 },{ name:'StatHunter',score:26.07 },
];}
const state = { activeTab:'home', gameKey:'nba', entryFee:5, wallet:132.5, lineup:{}, picks:{}, windowIndex:0, score:0, started:false, mode:'public', board:seededBoard(), feed:[] };
const $app = document.getElementById('app');
function currency(n){ return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n); }
function c(...parts){ return parts.filter(Boolean).join(' '); }
function game(){ return GAMES[state.gameKey]; }
function rosterComplete(){ return game().rosterSlots.every(s=>state.lineup[s.key]); }
function picksComplete(){ return game().rosterSlots.every(s=>state.picks[`${state.windowIndex}:${s.key}`]); }
function availablePlayers(slotType, currentValue){ const taken = new Set(Object.values(state.lineup).filter(v=>v!==currentValue)); return game().players.filter(p=>p.type===slotType && !taken.has(p.id)); }
function ranked(){ const merged=[...state.board,{name:'You',score:state.score}].sort((a,b)=>b.score-a.score); return merged.map((r,i)=>({...r,rank:i+1})); }
function resetAll(nextGame){ if(nextGame) state.gameKey=nextGame; state.lineup={}; state.picks={}; state.windowIndex=0; state.score=0; state.started=false; state.mode='public'; state.board=seededBoard(); state.feed=[]; state.activeTab='home'; render(); }
function lockRoster(){ if(!rosterComplete()) return; state.started=true; if(state.entryFee>0) state.wallet=Number((state.wallet-state.entryFee).toFixed(2)); state.activeTab='contest'; render(); }
function scoreWindow(){ if(!picksComplete()) return; let earned=0; const results=[]; for(const slot of game().rosterSlots){ const player=game().players.find(p=>p.id===state.lineup[slot.key]); if(!player) continue; const actionId=state.picks[`${state.windowIndex}:${slot.key}`]; const action=(ACTIONS[player.type]||[]).find(a=>a.id===actionId); if(!action) continue; const hit=Math.random()<action.hitRate; const pts=hit?Number((action.base*action.mult).toFixed(2)):0; earned+=pts; results.push({player:player.name,action:action.label,hit,pts,window:game().windows[state.windowIndex]}); }
 state.score=Number((state.score+earned).toFixed(2)); state.feed=[...results.reverse(),...state.feed].slice(0,20); state.board=state.board.map(r=>({...r,score:Number((r.score+(Math.random()*7+1.3)).toFixed(2))}));
 if(state.windowIndex<game().windows.length-1){ state.windowIndex +=1; state.activeTab='contest'; render(); return; }
 const finalRows=[...state.board,{name:'You',score:state.score}].sort((a,b)=>b.score-a.score); const finish=finalRows.findIndex(r=>r.name==='You')+1; const payout=state.entryFee>0?(finish===1?state.entryFee*12:finish<=5?state.entryFee*2.5:0):0; if(payout) state.wallet=Number((state.wallet+payout).toFixed(2)); alert(finish===1?`You won ${currency(payout)}.`:`Contest complete. Finished #${finish}${payout?` and won ${currency(payout)}.`:''}`); state.activeTab='leaderboard'; render(); }
function playerById(id){ return game().players.find(p=>p.id===id); }
function renderHomeScreen(){ const g=game(); return `
<div class="screen-stack">
  <section class="glass-card promo-card">
    <div class="eyebrow">Live, single-game fantasy</div>
    <h2>${g.title}</h2>
    <p>${g.subtitle}. Lock a roster once, then make one action call per player before each scoring window.</p>
    <div class="promo-stats"><div><strong>50</strong><span>Entry pool</span></div><div><strong>${g.windows.length}</strong><span>Scoring windows</span></div><div><strong>4</strong><span>Leagues live</span></div></div>
  </section>
  <section class="glass-card contest-card">
    <div class="section-head compact"><div><h3>Choose your entry</h3><p>Start free or enter a paid contest.</p></div><span class="mini-pill score-pill">${currency(state.wallet)}</span></div>
    <div class="entry-grid">${g.entryFees.map(f=>`<button class="entry-chip ${state.entryFee===f?'entry-chip-active':''}" data-action="fee" data-fee="${f}">${f===0?'Free Play':currency(f)}</button>`).join('')}</div>
    <div class="mode-toggle"><button class="${state.mode==='public'?'mode-active':''}" data-action="mode" data-mode="public">Public pool</button><button class="${state.mode==='friends'?'mode-active':''}" data-action="mode" data-mode="friends">Friends pool</button></div>
    <button class="primary-btn" data-action="tab" data-tab="contest">Start building lineup</button>
  </section>
  <section class="highlights-grid">
    <div class="glass-card mini-card"><div class="mini-icon">⚡</div><h4>Live windows</h4><p>Each contest stays active through the game with fresh picks every quarter, period, or inning block.</p></div>
    <div class="glass-card mini-card"><div class="mini-icon">🎟</div><h4>Team promos</h4><p>Wallet and voucher surfaces are ready for revenue share, seats, and broadcast activations.</p></div>
  </section>
</div>`; }
function renderContestScreen(){ const g=game(); const progress=((state.windowIndex+(state.started?1:0))/g.windows.length)*100; return `
<div class="screen-stack">
  <section class="glass-card progress-card"><div class="section-head compact"><div><h3>${state.started?'Contest live':'Build your roster'}</h3><p>${state.started?`Current window: ${g.windows[state.windowIndex]}`:'Lock your players before the game starts.'}</p></div><span class="mini-pill ghost-pill">Score ${state.score.toFixed(2)}</span></div><div class="progress-track"><span style="width:${progress}%"></span></div></section>
  <section class="glass-card roster-card"><div class="section-head"><div><h3>Roster builder</h3><p>${g.rosterSlots.map(s=>s.label).join(' · ')}</p></div><button class="mini-pill ghost-pill" data-action="reset">Reset</button></div>
    <div class="slot-stack">${g.rosterSlots.map(slot=>{ const current=playerById(state.lineup[slot.key]); const players=availablePlayers(slot.type,state.lineup[slot.key]); const tiles=(current && !players.find(p=>p.id===current.id))?[current,...players]:players; return `<div class="slot-card"><div class="slot-head"><div><div class="slot-label">${slot.label}</div><div class="slot-sub">${current?current.name:'Choose a player'}</div></div><span class="mini-pill ghost-pill">${slot.type}</span></div><div class="player-scroll">${tiles.map(p=>`<button class="player-tile ${state.lineup[slot.key]===p.id?'player-tile-active':''}" data-action="select-player" data-slot="${slot.key}" data-player="${p.id}"><img class="player-image" src="${p.image}" alt="${p.name}"><div class="player-copy"><strong>${p.name}</strong><span>${p.team} · Proj ${p.proj}</span></div></button>`).join('')}</div></div>`; }).join('')}</div>
    <div style="margin-top:14px"><button class="primary-btn" ${!rosterComplete()||state.started?'disabled':''} data-action="lock">${state.started?'Roster locked':'Lock roster'}</button></div>
  </section>
  ${state.started?`<section class="glass-card action-card"><div class="section-head"><div><h3>Action picks</h3><p>Choose one action for each roster slot in ${g.windows[state.windowIndex]}.</p></div><span class="mini-pill live-pill">LIVE</span></div><div class="slot-stack">${g.rosterSlots.map(slot=>{ const player=playerById(state.lineup[slot.key]); const key=`${state.windowIndex}:${slot.key}`; return `<div class="pick-block"><div class="pick-player-row"><div><div class="slot-label">${slot.label}</div><div class="pick-name">${player?`${player.name} · ${player.team}`:'Select player first'}</div></div>${player?`<img class="pick-thumb" src="${player.image}" alt="${player.name}">`:`<div class="pick-thumb placeholder"></div>`}</div><div class="action-grid">${(player?(ACTIONS[player.type]||[]):[]).map(a=>`<button class="action-pill ${state.picks[key]===a.id?'action-pill-active':''}" data-action="pick" data-key="${key}" data-pick="${a.id}"><strong>${a.label}</strong><span>Base ${a.base} · ${a.mult}x</span></button>`).join('')}</div></div>`; }).join('')}</div><div style="margin-top:14px"><button class="primary-btn emerald" ${!picksComplete()?'disabled':''} data-action="score">Score ${g.windows[state.windowIndex]}</button></div></section>`:''}
</div>`; }
function renderLeaderboardScreen(){ return `<div class="screen-stack"><section class="glass-card leaderboard-card"><div class="section-head compact"><div><h3>Pool leaderboard</h3><p>Simulated 50-entry board for the hosted demo.</p></div><span class="mini-pill score-pill">You ${state.score.toFixed(2)}</span></div><div class="leader-stack">${ranked().slice(0,10).map(r=>`<div class="leader-row ${r.name==='You'?'leader-row-you':''}"><div><div class="leader-rank">#${r.rank}</div><div class="leader-name">${r.name}</div></div><strong>${r.score.toFixed(2)}</strong></div>`).join('')}</div></section><section class="glass-card leaderboard-card"><div class="section-head compact"><div><h3>Latest events</h3><p>Recent scoring actions from your lineup.</p></div></div><div class="feed-stack">${state.feed.length?state.feed.map(item=>`<div class="feed-row"><div><div class="leader-name">${item.player}</div><div class="feed-meta">${item.action} · ${item.window}</div></div><span class="feed-pill ${item.hit?'feed-hit':'feed-miss'}">${item.hit?`+${item.pts.toFixed(2)}`:'Miss'}</span></div>`).join(''):`<div class="empty-state">No windows scored yet. Lock a roster and start the live contest flow.</div>`}</div></section></div>`; }
function renderWalletScreen(){ return `<div class="screen-stack"><section class="glass-card wallet-hero"><div class="eyebrow">Wallet & promos</div><h3>${currency(state.wallet)}</h3><p>Mocked cash balance for the hosted demo. Deposits, withdrawals, payouts, and vouchers plug into the real product later.</p><div class="wallet-buttons"><button class="primary-btn">Deposit</button><button class="primary-btn emerald">Withdraw</button></div></section><section class="glass-card voucher-card"><div class="section-head compact"><div><h3>Available vouchers</h3><p>Team promo inventory lives here.</p></div></div><div class="voucher-stack"><div class="voucher-row active"><div><div class="leader-name">20% Off Team Store</div><span>Code TEAM20 · Active</span></div><strong>Use</strong></div><div class="voucher-row active"><div><div class="leader-name">$10 Concessions Credit</div><span>Code SNACK10 · Active</span></div><strong>Use</strong></div><div class="voucher-row"><div><div class="leader-name">Premium Seat Upgrade Entry</div><span>Locked until next win</span></div><strong>Locked</strong></div></div></section></div>`; }
function renderProfileScreen(){ return `<div class="screen-stack"><section class="glass-card profile-card"><div class="profile-top"><div class="profile-avatar">AH</div><div><h3>Andrew Hagberg</h3><p>Hosted mobile demo profile</p></div></div><div class="profile-list"><div><strong>Contest mode</strong><span>${state.mode==='public'?'Public auto-pool':'Friends pool'}</span></div><div><strong>Current sport</strong><span>${game().sport}</span></div><div><strong>Entry fee</strong><span>${state.entryFee===0?'Free Play':currency(state.entryFee)}</span></div><div><strong>Current window</strong><span>${game().windows[state.windowIndex]}</span></div></div></section><section class="glass-card profile-card"><div class="section-head compact"><div><h3>Sell-side demo highlights</h3><p>What makes this version pitchable.</p></div></div><ul class="brand-list"><li>Mobile-first layout that feels like an app instead of a desktop dashboard.</li><li>Four sports included: NBA, MLB, NFL, and NHL.</li><li>League, team, and player art throughout the full flow.</li><li>Single-game roster build, live picks, leaderboard, wallet, and promo surfaces.</li></ul></section></div>`; }
function render(){ const g=game(); $app.innerHTML = `
<div class="app-shell ${g.theme}"><div class="phone-frame"><div class="status-space"></div>
<header class="top-hero glass-card"><div class="top-strip"><span class="mini-pill live-pill">LIVE BUILD</span><span class="mini-pill wallet-pill">Wallet ${currency(state.wallet)}</span></div>
<div class="hero-brand-row"><div><div class="eyebrow">Single-game fantasy · mobile-first</div><h1>InGame</h1><p>${g.subtitle}</p></div><div class="league-mark-wrap"><img class="league-mark" src="${g.leagueImage}" alt="${g.sport} league" width="58" height="58"></div></div>
<div class="hero-matchup"><div class="hero-team"><img class="team-mark" src="${g.teams[0].image}" alt="${g.teams[0].name}" width="56" height="56"><div><div class="team-code">${g.teams[0].code}</div><div class="team-name">${g.teams[0].name}</div></div></div><div class="versus-block"><div class="versus">VS</div><div class="match-meta">${g.start}<br>${g.venue}</div></div><div class="hero-team hero-team-right"><div><div class="team-code">${g.teams[1].code}</div><div class="team-name">${g.teams[1].name}</div></div><img class="team-mark" src="${g.teams[1].image}" alt="${g.teams[1].name}" width="56" height="56"></div></div>
<div class="hero-player-strip">${g.heroPlayers.map((src,i)=>`<div class="hero-player-card"><img class="hero-player-img" src="${src}" alt="Hero player ${i+1}" width="140" height="96"><span>${g.sport}</span></div>`).join('')}</div></header>
<div class="screen-area"><div class="sport-rail">${Object.values(GAMES).map(item=>`<button class="sport-chip ${state.gameKey===item.key?'sport-chip-active':''}" data-action="sport" data-sport="${item.key}"><img src="${item.leagueImage}" alt="${item.sport}" width="20" height="20"><span>${item.sport}</span></button>`).join('')}</div>
<div style="height:14px"></div>
${state.activeTab==='home'?renderHomeScreen():state.activeTab==='contest'?renderContestScreen():state.activeTab==='leaderboard'?renderLeaderboardScreen():state.activeTab==='wallet'?renderWalletScreen():renderProfileScreen()}
</div>
<nav class="bottom-nav glass-card">${bottomTabs.map(tab=>`<button class="nav-item ${state.activeTab===tab.key?'nav-item-active':''}" data-action="tab" data-tab="${tab.key}"><span class="nav-icon">${tab.icon}</span><span>${tab.label}</span></button>`).join('')}</nav>
</div></div>`;
 attachEvents(); }
function attachEvents(){ document.querySelectorAll('[data-action]').forEach(el=>{ el.addEventListener('click', e=>{ const action=el.getAttribute('data-action'); if(action==='sport') return resetAll(el.getAttribute('data-sport')); if(action==='tab'){ state.activeTab=el.getAttribute('data-tab'); return render(); } if(action==='fee'){ state.entryFee=Number(el.getAttribute('data-fee')); return render(); } if(action==='mode'){ state.mode=el.getAttribute('data-mode'); return render(); } if(action==='select-player'){ state.lineup[el.getAttribute('data-slot')]=el.getAttribute('data-player'); return render(); } if(action==='lock') return lockRoster(); if(action==='reset') return resetAll(); if(action==='pick'){ state.picks[el.getAttribute('data-key')]=el.getAttribute('data-pick'); return render(); } if(action==='score') return scoreWindow(); }); }); }
render();
