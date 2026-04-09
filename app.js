const PLAYER_FIELDS = {
  G: [{k:'ast',l:'AST'},{k:'three',l:'3PM'},{k:'stl',l:'STL'},{k:'q10',l:'10+Q'}],
  FC:[{k:'reb',l:'REB'},{k:'blk',l:'BLK'},{k:'paint',l:'PNT'},{k:'dd',l:'DD%'}],
  H:[{k:'hit',l:'H'},{k:'rbi',l:'RBI'},{k:'dbl',l:'2B'},{k:'hr',l:'HR'}],
  BP:[{k:'k',l:'K'},{k:'scoreless',l:'SCRL'},{k:'hold',l:'HLD'},{k:'proj',l:'PROJ'}],
  QB:[{k:'ptd',l:'PTD'},{k:'pyd',l:'PYD'},{k:'ryd',l:'RYD'},{k:'cmp',l:'CMP'}],
  RB:[{k:'fd',l:'1D'},{k:'ryd',l:'RYD'},{k:'rec',l:'REC'},{k:'td',l:'TD'}],
  WR:[{k:'rec',l:'REC'},{k:'yd',l:'YDS'},{k:'fd',l:'1D'},{k:'td',l:'TD'}],
  DST:[{k:'sack',l:'SACK'},{k:'to',l:'TO'},{k:'threeout',l:'3&O'},{k:'sq',l:'SQ%'}],
  F:[{k:'sog',l:'SOG'},{k:'ast',l:'AST'},{k:'goal',l:'G'},{k:'ppp',l:'PPP'}],
  D:[{k:'blk',l:'BLK'},{k:'sog',l:'SOG'},{k:'ast',l:'AST'},{k:'goal',l:'G'}],
  GK:[{k:'save',l:'SV'},{k:'sp',l:'SP%'},{k:'hs',l:'10+SV'},{k:'win',l:'W%'}],
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

function P(id, name, team, type, proj, image, stats){ return { id, name, team, type, proj, image, stats }; }

const GAMES = {
  nba: {
    key:'nba', sport:'NBA', leagueImage:'/assets/leagues/nba.svg', title:'Timberwolves vs Thunder', subtitle:'Quarter-by-quarter live calls', venue:'Target Center', start:'Tonight · 7:00 PM CT', theme:'theme-nba',
    teams:[{code:'MIN',name:'Minnesota Timberwolves',image:'/assets/teams/min-nba.svg'},{code:'OKC',name:'Oklahoma City Thunder',image:'/assets/teams/okc.svg'}],
    heroPlayers:['/assets/players/anthony-edwards.svg','/assets/players/shai-gilgeous-alexander.svg'],
    rosterSlots:[{key:'g1',label:'Guard 1',type:'G'},{key:'g2',label:'Guard 2',type:'G'},{key:'fc1',label:'Forward / Center 1',type:'FC'},{key:'fc2',label:'Forward / Center 2',type:'FC'},{key:'fc3',label:'Forward / Center 3',type:'FC'}],
    windows:['1st Quarter','2nd Quarter','3rd Quarter','4th Quarter'], entryFees:[0,5,20,50],
    players:[
      P('ae','Anthony Edwards','MIN','G',14.7,'/assets/players/anthony-edwards.svg',{ast:'4.6',three:'3.1',stl:'1.2',q10:'36%'}),
      P('mc','Mike Conley','MIN','G',8.2,'/assets/players/mike-conley.svg',{ast:'5.8',three:'2.0',stl:'0.9',q10:'18%'}),
      P('sga','Shai Gilgeous-Alexander','OKC','G',15.2,'/assets/players/shai-gilgeous-alexander.svg',{ast:'6.4',three:'1.8',stl:'1.9',q10:'44%'}),
      P('caruso','Alex Caruso','OKC','G',7.4,'/assets/players/alex-caruso.svg',{ast:'3.3',three:'1.6',stl:'1.5',q10:'11%'}),
      P('jr','Julius Randle','MIN','FC',11.6,'/assets/players/julius-randle.svg',{reb:'7.4',blk:'0.3',paint:'8.9',dd:'27%'}),
      P('rg','Rudy Gobert','MIN','FC',10.1,'/assets/players/rudy-gobert.svg',{reb:'11.1',blk:'1.5',paint:'7.2',dd:'48%'}),
      P('jm','Jaden McDaniels','MIN','FC',8.8,'/assets/players/jaden-mcdaniels.svg',{reb:'4.3',blk:'0.9',paint:'5.8',dd:'8%'}),
      P('chet','Chet Holmgren','OKC','FC',10.9,'/assets/players/chet-holmgren.svg',{reb:'8.2',blk:'2.1',paint:'9.1',dd:'31%'}),
      P('jdub','Jalen Williams','OKC','FC',11.9,'/assets/players/jalen-williams.svg',{reb:'5.1',blk:'0.6',paint:'10.2',dd:'15%'}),
    ]
  },
  mlb: {
    key:'mlb', sport:'MLB', leagueImage:'/assets/leagues/mlb.svg', title:'Twins vs Guardians', subtitle:'Three-inning windows with rolling picks', venue:'Target Field', start:'Tonight · 6:40 PM CT', theme:'theme-mlb',
    teams:[{code:'MIN',name:'Minnesota Twins',image:'/assets/teams/min-mlb.svg'},{code:'CLE',name:'Cleveland Guardians',image:'/assets/teams/cle.svg'}],
    heroPlayers:['/assets/players/byron-buxton.svg','/assets/players/jose-ramirez.svg'],
    rosterSlots:[{key:'h1',label:'Hitter 1',type:'H'},{key:'h2',label:'Hitter 2',type:'H'},{key:'h3',label:'Hitter 3',type:'H'},{key:'h4',label:'Hitter 4',type:'H'},{key:'bp',label:'Bullpen',type:'BP'}],
    windows:['Innings 1–3','Innings 4–6','Innings 7–9'], entryFees:[0,5,15,35],
    players:[
      P('correa','Carlos Correa','MIN','H',8.9,'/assets/players/carlos-correa.svg',{hit:1.1,rbi:0.7,dbl:0.24,hr:0.13}),
      P('buxton','Byron Buxton','MIN','H',10.3,'/assets/players/byron-buxton.svg',{hit:1.0,rbi:0.8,dbl:0.28,hr:0.18}),
      P('lewis','Royce Lewis','MIN','H',8.4,'/assets/players/royce-lewis.svg',{hit:0.9,rbi:0.6,dbl:0.20,hr:0.14}),
      P('ramirez','Jose Ramirez','CLE','H',11.1,'/assets/players/jose-ramirez.svg',{hit:1.2,rbi:0.9,dbl:0.27,hr:0.19}),
      P('kwan','Steven Kwan','CLE','H',8.1,'/assets/players/steven-kwan.svg',{hit:1.3,rbi:0.5,dbl:0.22,hr:0.07}),
      P('naylor','Josh Naylor','CLE','H',9.2,'/assets/players/josh-naylor.svg',{hit:1.0,rbi:0.8,dbl:0.21,hr:0.17}),
      P('minbp','Twins Bullpen','MIN','BP',7.0,'/assets/players/twins-bullpen.svg',{k:'3.7',scoreless:'46%',hold:'24%'}),
      P('clebp','Guardians Bullpen','CLE','BP',7.1,'/assets/players/guardians-bullpen.svg',{k:'4.0',scoreless:'48%',hold:'26%'}),
    ]
  },
  nfl: {
    key:'nfl', sport:'NFL', leagueImage:'/assets/leagues/nfl.svg', title:'Vikings vs Packers', subtitle:'Quarter-by-quarter live calls', venue:'U.S. Bank Stadium', start:'Sunday · 3:25 PM CT', theme:'theme-nfl',
    teams:[{code:'MIN',name:'Minnesota Vikings',image:'/assets/teams/min-nfl.svg'},{code:'GB',name:'Green Bay Packers',image:'/assets/teams/gb.svg'}],
    heroPlayers:['/assets/players/justin-jefferson.svg','/assets/players/jordan-love.svg'],
    rosterSlots:[{key:'qb',label:'Quarterback',type:'QB'},{key:'rb',label:'Running Back',type:'RB'},{key:'wr1',label:'Wide Receiver 1',type:'WR'},{key:'wr2',label:'Wide Receiver 2',type:'WR'},{key:'dst',label:'Defense',type:'DST'}],
    windows:['1st Quarter','2nd Quarter','3rd Quarter','4th Quarter'], entryFees:[0,5,25,100],
    players:[
      P('darnold','Sam Darnold','MIN','QB',11.5,'/assets/players/sam-darnold.svg',{ptd:'0.8',pyd:'74',ryd:'9',cmp:'6.3'}),
      P('love','Jordan Love','GB','QB',12.3,'/assets/players/jordan-love.svg',{ptd:'0.9',pyd:'79',ryd:'13',cmp:'6.7'}),
      P('jones','Aaron Jones','MIN','RB',9.2,'/assets/players/aaron-jones.svg',{fd:'2.0',ryd:'24',rec:'1.7',td:'0.18'}),
      P('jacobs','Josh Jacobs','GB','RB',10.8,'/assets/players/josh-jacobs.svg',{fd:'2.3',ryd:'28',rec:'1.3',td:'0.22'}),
      P('jj','Justin Jefferson','MIN','WR',13.8,'/assets/players/justin-jefferson.svg',{rec:'2.2',yd:'31',fd:'1.4',td:'0.25'}),
      P('addison','Jordan Addison','MIN','WR',8.6,'/assets/players/jordan-addison.svg',{rec:'1.6',yd:'24',fd:'1.0',td:'0.16'}),
      P('reed','Jayden Reed','GB','WR',8.5,'/assets/players/jayden-reed.svg',{rec:'1.7',yd:'25',fd:'1.0',td:'0.15'}),
      P('watson','Christian Watson','GB','WR',8.0,'/assets/players/christian-watson.svg',{rec:'1.5',yd:'27',fd:'0.9',td:'0.14'}),
      P('vikdst','Vikings Defense','MIN','DST',7.4,'/assets/players/vikings-defense.svg',{sack:'0.9',to:'0.4',threeout:'30%',sq:'18%'}),
      P('gbdst','Packers Defense','GB','DST',7.0,'/assets/players/packers-defense.svg',{sack:'0.8',to:'0.3',threeout:'28%',sq:'16%'}),
    ]
  },
  nhl: {
    key:'nhl', sport:'NHL', leagueImage:'/assets/leagues/nhl.svg', title:'Wild vs Avalanche', subtitle:'Period-by-period prediction game', venue:'Xcel Energy Center', start:'Tomorrow · 7:00 PM CT', theme:'theme-nhl',
    teams:[{code:'MIN',name:'Minnesota Wild',image:'/assets/teams/min-nhl.svg'},{code:'COL',name:'Colorado Avalanche',image:'/assets/teams/col.svg'}],
    heroPlayers:['/assets/players/kirill-kaprizov.svg','/assets/players/nathan-mackinnon.svg'],
    rosterSlots:[{key:'f1',label:'Forward 1',type:'F'},{key:'f2',label:'Forward 2',type:'F'},{key:'d1',label:'Defense 1',type:'D'},{key:'d2',label:'Defense 2',type:'D'},{key:'gk',label:'Goalie',type:'GK'}],
    windows:['1st Period','2nd Period','3rd Period'], entryFees:[0,5,15,50],
    players:[
      P('kap','Kirill Kaprizov','MIN','F',10.9,'/assets/players/kirill-kaprizov.svg',{sog:'3.8',ast:'0.8',goal:'0.5',ppp:'0.4'}),
      P('boldy','Matt Boldy','MIN','F',8.8,'/assets/players/matt-boldy.svg',{sog:'3.1',ast:'0.6',goal:'0.4',ppp:'0.3'}),
      P('mack','Nathan MacKinnon','COL','F',12.7,'/assets/players/nathan-mackinnon.svg',{sog:'4.6',ast:'1.0',goal:'0.6',ppp:'0.5'}),
      P('rant','Mikko Rantanen','COL','F',10.9,'/assets/players/mikko-rantanen.svg',{sog:'3.4',ast:'0.9',goal:'0.5',ppp:'0.4'}),
      P('brodin','Jonas Brodin','MIN','D',6.9,'/assets/players/jonas-brodin.svg',{blk:'1.9',sog:'1.4',ast:'0.3',goal:'0.05'}),
      P('faber','Brock Faber','MIN','D',7.4,'/assets/players/brock-faber.svg',{blk:'1.6',sog:'1.8',ast:'0.5',goal:'0.08'}),
      P('makar','Cale Makar','COL','D',9.6,'/assets/players/cale-makar.svg',{blk:'1.2',sog:'2.7',ast:'0.8',goal:'0.18'}),
      P('toews','Devon Toews','COL','D',7.2,'/assets/players/devon-toews.svg',{blk:'1.4',sog:'1.7',ast:'0.5',goal:'0.09'}),
      P('gus','Filip Gustavsson','MIN','GK',9.0,'/assets/players/filip-gustavsson.svg',{save:'10.7',sp:'32%',hs:'44%',win:'54%'}),
      P('georg','Alexandar Georgiev','COL','GK',8.5,'/assets/players/alexandar-georgiev.svg',{save:'10.1',sp:'29%',hs:'40%',win:'51%'}),
    ]
  }
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

const state = { activeTab:'home', gameKey:'nba', entryFee:5, wallet:132.5, lineup:{}, picks:{}, windowIndex:0, score:0, started:false, mode:'public', board:seededBoard(), feed:[], openSlot:null };
const $app = document.getElementById('app');
function currency(n){ return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n); }
function game(){ return GAMES[state.gameKey]; }
function rosterComplete(){ return game().rosterSlots.every(s=>state.lineup[s.key]); }
function picksComplete(){ return game().rosterSlots.every(s=>state.picks[`${state.windowIndex}:${s.key}`]); }
function availablePlayers(slotType, currentValue){ const taken = new Set(Object.values(state.lineup).filter(v=>v!==currentValue)); return game().players.filter(p=>p.type===slotType && !taken.has(p.id)); }
function ranked(){ const merged=[...state.board,{name:'You',score:state.score}].sort((a,b)=>b.score-a.score); return merged.map((r,i)=>({...r,rank:i+1})); }
function resetAll(nextGame){ if(nextGame) state.gameKey=nextGame; state.lineup={}; state.picks={}; state.windowIndex=0; state.score=0; state.started=false; state.mode='public'; state.board=seededBoard(); state.feed=[]; state.activeTab='home'; state.openSlot=null; render(); }
function lockRoster(){ if(!rosterComplete()) return; state.started=true; if(state.entryFee>0) state.wallet=Number((state.wallet-state.entryFee).toFixed(2)); state.activeTab='contest'; render(); }
function scoreWindow(){ if(!picksComplete()) return; let earned=0; const results=[]; for(const slot of game().rosterSlots){ const player=playerById(state.lineup[slot.key]); if(!player) continue; const actionId=state.picks[`${state.windowIndex}:${slot.key}`]; const action=(ACTIONS[player.type]||[]).find(a=>a.id===actionId); if(!action) continue; const hit=Math.random()<action.hitRate; const pts=hit?Number((action.base*action.mult).toFixed(2)):0; earned+=pts; results.push({player:player.name,action:action.label,hit,pts,window:game().windows[state.windowIndex]}); }
 state.score=Number((state.score+earned).toFixed(2)); state.feed=[...results.reverse(),...state.feed].slice(0,20); state.board=state.board.map(r=>({...r,score:Number((r.score+(Math.random()*7+1.3)).toFixed(2))}));
 if(state.windowIndex<game().windows.length-1){ state.windowIndex +=1; state.activeTab='contest'; render(); return; }
 const finalRows=[...state.board,{name:'You',score:state.score}].sort((a,b)=>b.score-a.score); const finish=finalRows.findIndex(r=>r.name==='You')+1; const payout=state.entryFee>0?(finish===1?state.entryFee*12:finish<=5?state.entryFee*2.5:0):0; if(payout) state.wallet=Number((state.wallet+payout).toFixed(2)); alert(finish===1?`You won ${currency(payout)}.`:`Contest complete. Finished #${finish}${payout?` and won ${currency(payout)}.`:''}`); state.activeTab='leaderboard'; render(); }
function playerById(id){ return game().players.find(p=>p.id===id); }
function statChips(player){ const fields = PLAYER_FIELDS[player.type] || []; return fields.map(f=>`<span class="stat-chip"><b>${f.l}</b>${player.stats?.[f.k] ?? '—'}</span>`).join('') + `<span class="stat-chip proj-chip"><b>PROJ</b>${player.proj}</span>`; }
function heroCards(g){ return g.heroPlayers.map((src,i)=>`<div class="hero-player-card"><img class="hero-player-img" src="${src}" alt="Hero player ${i+1}" width="140" height="96"><span>${g.sport}</span></div>`).join(''); }

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
</div>`; }

function renderSlotCard(slot){
  const current = playerById(state.lineup[slot.key]);
  return `
  <div class="slot-card">
    <div class="slot-head">
      <div>
        <div class="slot-label">${slot.label}</div>
        <div class="slot-sub">${current?current.name:'Choose a player'}</div>
      </div>
      <span class="mini-pill ghost-pill">${slot.type}</span>
    </div>
    <div class="slot-summary-row">
      ${current?`<img class="slot-thumb" src="${current.image}" alt="${current.name}">`:`<div class="slot-thumb slot-thumb-empty">+</div>`}
      <div class="slot-summary-copy">
        <strong>${current?current.name:'No player locked yet'}</strong>
        <span>${current?`${current.team} · Proj ${current.proj}`:'Tap below to open the full player list and statline.'}</span>
      </div>
      <button class="slot-open-btn" data-action="open-slot" data-slot="${slot.key}">${current?'Change':'Select'}</button>
    </div>
  </div>`;
}

function renderPickerDrawer(){
  if(!state.openSlot) return '';
  const slot = game().rosterSlots.find(s=>s.key===state.openSlot);
  const current = state.lineup[slot.key];
  const players = availablePlayers(slot.type, current);
  const ordered = current && playerById(current) ? [playerById(current), ...players.filter(p=>p.id!==current)] : players;
  return `
  <div class="picker-overlay" data-action="close-slot-bg">
    <div class="picker-sheet" onclick="event.stopPropagation()">
      <div class="picker-handle"></div>
      <div class="picker-header">
        <div>
          <div class="eyebrow">Select player</div>
          <h3>${slot.label}</h3>
          <p>${slot.type} list view with scoring statline and projection.</p>
        </div>
        <button class="picker-close" data-action="close-slot">×</button>
      </div>
      <div class="picker-list">
        ${ordered.map(p=>`
          <button class="player-list-row ${current===p.id?'player-list-row-active':''}" data-action="select-player" data-slot="${slot.key}" data-player="${p.id}">
            <span class="plus-pill">${current===p.id?'✓':'+'}</span>
            <img class="player-list-image" src="${p.image}" alt="${p.name}">
            <div class="player-list-copy">
              <div class="player-list-top"><strong>${p.name}</strong><span>${p.team}</span></div>
              <div class="player-statline">${statChips(p)}</div>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  </div>`;
}

function renderContestScreen(){ const g=game(); const progress=((state.windowIndex+(state.started?1:0))/g.windows.length)*100; return `
<div class="screen-stack">
  <section class="glass-card progress-card"><div class="section-head compact"><div><h3>${state.started?'Contest live':'Build your roster'}</h3><p>${state.started?`Current window: ${g.windows[state.windowIndex]}`:'Lock your players before the game starts.'}</p></div><span class="mini-pill ghost-pill">Score ${state.score.toFixed(2)}</span></div><div class="progress-track"><span style="width:${progress}%"></span></div></section>
  <section class="glass-card roster-card"><div class="section-head"><div><h3>Roster builder</h3><p>List-view picker with full statline and projections.</p></div><button class="mini-pill ghost-pill" data-action="reset">Reset</button></div>
    <div class="slot-stack">${g.rosterSlots.map(renderSlotCard).join('')}</div>
    <div style="margin-top:14px"><button class="primary-btn" ${!rosterComplete()||state.started?'disabled':''} data-action="lock">${state.started?'Roster locked':'Lock roster'}</button></div>
  </section>
  ${state.started?`<section class="glass-card action-card"><div class="section-head"><div><h3>Action picks</h3><p>Choose one action for each roster slot in ${g.windows[state.windowIndex]}.</p></div><span class="mini-pill live-pill">LIVE</span></div><div class="slot-stack">${g.rosterSlots.map(slot=>{ const player=playerById(state.lineup[slot.key]); const key=`${state.windowIndex}:${slot.key}`; return `<div class="pick-block"><div class="pick-player-row"><div><div class="slot-label">${slot.label}</div><div class="pick-name">${player?`${player.name} · ${player.team}`:'Select player first'}</div></div>${player?`<img class="pick-thumb" src="${player.image}" alt="${player.name}">`:`<div class="pick-thumb placeholder"></div>`}</div><div class="action-grid">${(player?(ACTIONS[player.type]||[]):[]).map(a=>`<button class="action-pill ${state.picks[key]===a.id?'action-pill-active':''}" data-action="pick" data-key="${key}" data-pick="${a.id}"><strong>${a.label}</strong><span>Base ${a.base} · ${a.mult}x</span></button>`).join('')}</div></div>`; }).join('')}</div><div style="margin-top:14px"><button class="primary-btn emerald" ${!picksComplete()?'disabled':''} data-action="score">Score ${g.windows[state.windowIndex]}</button></div></section>`:''}
  ${renderPickerDrawer()}
</div>`; }

function renderLeaderboardScreen(){ return `<div class="screen-stack"><section class="glass-card leaderboard-card"><div class="section-head compact"><div><h3>Pool leaderboard</h3><p>Simulated 50-entry board for the hosted demo.</p></div><span class="mini-pill score-pill">You ${state.score.toFixed(2)}</span></div><div class="leader-stack">${ranked().slice(0,10).map(r=>`<div class="leader-row ${r.name==='You'?'leader-row-you':''}"><div><div class="leader-rank">#${r.rank}</div><div class="leader-name">${r.name}</div></div><strong>${r.score.toFixed(2)}</strong></div>`).join('')}</div></section><section class="glass-card leaderboard-card"><div class="section-head compact"><div><h3>Latest events</h3><p>Recent scoring actions from your lineup.</p></div></div><div class="feed-stack">${state.feed.length?state.feed.map(item=>`<div class="feed-row"><div><div class="leader-name">${item.player}</div><div class="feed-meta">${item.action} · ${item.window}</div></div><span class="feed-pill ${item.hit?'feed-hit':'feed-miss'}">${item.hit?`+${item.pts.toFixed(2)}`:'Miss'}</span></div>`).join(''):`<div class="empty-state">No windows scored yet. Lock a roster and start the live contest flow.</div>`}</div></section></div>`; }
function renderWalletScreen(){ return `<div class="screen-stack"><section class="glass-card wallet-hero"><div class="eyebrow">Wallet & promos</div><h3>${currency(state.wallet)}</h3><p>Mocked cash balance for the hosted demo. Deposits, withdrawals, payouts, and vouchers plug into the real product later.</p><div class="wallet-buttons"><button class="primary-btn">Deposit</button><button class="primary-btn emerald">Withdraw</button></div></section><section class="glass-card voucher-card"><div class="section-head compact"><div><h3>Available vouchers</h3><p>Team promo inventory lives here.</p></div></div><div class="voucher-stack"><div class="voucher-row active"><div><div class="leader-name">20% Off Team Store</div><span>Code TEAM20 · Active</span></div><strong>Use</strong></div><div class="voucher-row active"><div><div class="leader-name">$10 Concessions Credit</div><span>Code SNACK10 · Active</span></div><strong>Use</strong></div><div class="voucher-row"><div><div class="leader-name">Premium Seat Upgrade Entry</div><span>Locked until next win</span></div><strong>Locked</strong></div></div></section></div>`; }
function renderProfileScreen(){ return `<div class="screen-stack"><section class="glass-card profile-card"><div class="profile-top"><div class="profile-avatar">AH</div><div><h3>Andrew Hagberg</h3><p>Hosted mobile demo profile</p></div></div><div class="profile-list"><div><strong>Contest mode</strong><span>${state.mode==='public'?'Public auto-pool':'Friends pool'}</span></div><div><strong>Current sport</strong><span>${game().sport}</span></div><div><strong>Entry fee</strong><span>${state.entryFee===0?'Free Play':currency(state.entryFee)}</span></div><div><strong>Current window</strong><span>${game().windows[state.windowIndex]}</span></div></div></section><section class="glass-card profile-card"><div class="section-head compact"><div><h3>Sell-side demo highlights</h3><p>What makes this version pitchable.</p></div></div><ul class="brand-list"><li>Mobile-first layout built around a list-view player selector.</li><li>Four sports included: NBA, MLB, NFL, and NHL.</li><li>League, team, and player art throughout the full flow.</li><li>Single-game roster build, live picks, leaderboard, wallet, and promo surfaces.</li></ul></section></div>`; }

function render(){ const g=game(); $app.innerHTML = `
<div class="app-shell ${g.theme}"><div class="phone-frame"><div class="status-space"></div>
<header class="top-hero glass-card"><div class="top-strip"><span class="mini-pill live-pill">LIVE BUILD</span><span class="mini-pill wallet-pill">Wallet ${currency(state.wallet)}</span></div>
<div class="hero-brand-row"><div><div class="eyebrow">Single-game fantasy · mobile-first</div><h1>InGame</h1><p>${g.subtitle}</p></div><div class="league-mark-wrap"><img class="league-mark" src="${g.leagueImage}" alt="${g.sport} league" width="58" height="58"></div></div>
<div class="hero-matchup"><div class="hero-team"><img class="team-mark" src="${g.teams[0].image}" alt="${g.teams[0].name}" width="56" height="56"><div><div class="team-code">${g.teams[0].code}</div><div class="team-name">${g.teams[0].name}</div></div></div><div class="versus-block"><div class="versus">VS</div><div class="match-meta">${g.start}<br>${g.venue}</div></div><div class="hero-team hero-team-right"><div><div class="team-code">${g.teams[1].code}</div><div class="team-name">${g.teams[1].name}</div></div><img class="team-mark" src="${g.teams[1].image}" alt="${g.teams[1].name}" width="56" height="56"></div></div>
<div class="hero-player-strip">${heroCards(g)}</div></header>
<div class="screen-area"><div class="sport-rail">${Object.values(GAMES).map(item=>`<button class="sport-chip ${state.gameKey===item.key?'sport-chip-active':''}" data-action="sport" data-sport="${item.key}"><img src="${item.leagueImage}" alt="${item.sport}" width="20" height="20"><span>${item.sport}</span></button>`).join('')}</div>
<div style="height:14px"></div>
${state.activeTab==='home'?renderHomeScreen():state.activeTab==='contest'?renderContestScreen():state.activeTab==='leaderboard'?renderLeaderboardScreen():state.activeTab==='wallet'?renderWalletScreen():renderProfileScreen()}
</div>
<nav class="bottom-nav glass-card">${bottomTabs.map(tab=>`<button class="nav-item ${state.activeTab===tab.key?'nav-item-active':''}" data-action="tab" data-tab="${tab.key}"><span class="nav-icon">${tab.icon}</span><span>${tab.label}</span></button>`).join('')}</nav>
</div></div>`;
 attachEvents(); }

function attachEvents(){ document.querySelectorAll('[data-action]').forEach(el=>{ el.addEventListener('click', ()=>{ const action=el.getAttribute('data-action'); if(action==='sport') return resetAll(el.getAttribute('data-sport')); if(action==='tab'){ state.activeTab=el.getAttribute('data-tab'); return render(); } if(action==='fee'){ state.entryFee=Number(el.getAttribute('data-fee')); return render(); } if(action==='mode'){ state.mode=el.getAttribute('data-mode'); return render(); } if(action==='open-slot'){ state.openSlot=el.getAttribute('data-slot'); return render(); } if(action==='close-slot' || action==='close-slot-bg'){ state.openSlot=null; return render(); } if(action==='select-player'){ state.lineup[el.getAttribute('data-slot')]=el.getAttribute('data-player'); state.openSlot=null; return render(); } if(action==='lock') return lockRoster(); if(action==='reset') return resetAll(); if(action==='pick'){ state.picks[el.getAttribute('data-key')]=el.getAttribute('data-pick'); return render(); } if(action==='score') return scoreWindow(); }); }); }
render();
