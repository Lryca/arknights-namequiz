// 사진 위치. download_avatars.py로 사진을 받아 avatars 폴더에 넣었다면 "avatars/"로 바꾸세요.
const IMG_BASE = "https://raw.githubusercontent.com/yuanyan3060/ArknightsGameResource/main/avatar/";

/* ───────────── 언어 ─────────────
   ko: data.js의 한국어 이름 + 별명(ALIASES)
   ja / en / zh: names.js의 각 서버 공식 이름 (별명 없음)
   어느 언어든 영어 이름도 정답으로 인정돼요. */
const LANGS = { ko: "한국어", ja: "日本語", en: "English", zh: "中文" };
const ROBOT = "로봇 · 기계";

// 받침 있으면 '을', 없으면 '를'
const eulReul = w => { const c = w.charCodeAt(w.length - 1) - 0xAC00; return c >= 0 && c < 11172 && c % 28 ? "을" : "를"; };

const T = {
  ko: {
    pageTitle: "로도스 오퍼레이터 퀴즈",
    title: w => `당신은 명일방주의 모든 <em>${w}</em>${eulReul(w)} 알고 있다`,
    operator: "오퍼레이터",
    sub: "이름을 입력하면 자동으로 채점돼요. 한국어, 영어 둘 다 되고 띄어쓰기는 상관없어요. 첫 입력부터 타이머가 돌아요.",
    placeholder: "오퍼레이터 이름 입력", got: "맞춤", left: "남음",
    shadow: "그림자 모드", sound: "소리", giveUp: "포기", reset: "다시", normal: "노말", hard: "하드",
    allClass: "직군 전체", allRace: "종족 전체", star: n => `${n}성`, starWord: n => `${n}성 오퍼레이터`, modesLabel: "퀴즈 범위", diffLabel: "난이도",
    winAll: "당신은 진정한 로도스 아일랜드 독타", winOne: m => `당신은 ${m} 인사 담당관`, lose: "켈시가 한숨을 쉽니다",
    score: (n, f, p) => `${n}명 중 ${f}명 (${p}%)`,
    close: "닫기", again: "다시 하기",
    confirmTitle: "진행 중인 게임이 있어요", confirmBody: n => `지금까지 ${n}명 맞혔어요. 바꾸면 기록이 사라지고 새 게임이 시작돼요.`, keep: "계속 플레이", proceed: "바꾸기",
    legal: "※ 비공식 팬 콘텐츠이며 Hypergryph · Yostar의 승인을 받지 않았습니다. 캐릭터 이미지의 저작권은 Hypergryph에 있습니다.",
  },
  ja: {
    pageTitle: "ロドス・オペレータークイズ",
    title: w => `あなたはアークナイツの<em>${w}</em>を全員知っている`,
    operator: "オペレーター",
    sub: "名前を入力すると自動で採点されます。日本語・英語どちらでもOK、ひらがなでも入力できます。最初の入力からタイマーが動きます。",
    placeholder: "オペレーター名を入力", got: "正解", left: "残り",
    shadow: "シルエット", sound: "効果音", giveUp: "降参", reset: "リセット", normal: "ノーマル", hard: "ハード",
    allClass: "全職分", allRace: "全種族", star: n => `★${n}`, starWord: n => `★${n}オペレーター`, modesLabel: "出題範囲", diffLabel: "難易度",
    winAll: "あなたこそ真のロドス・アイランドのドクター", winOne: m => `あなたは${m}人事担当`, lose: "ケルシーがため息をついた",
    score: (n, f, p) => `${n}人中${f}人 (${p}%)`,
    close: "閉じる", again: "もう一度",
    confirmTitle: "プレイ中のゲームがあります", confirmBody: n => `ここまで${n}人正解しています。切り替えると記録が消えて、新しいゲームが始まります。`, keep: "続ける", proceed: "切り替える",
    legal: "※ 非公式のファンコンテンツです。Hypergryph・Yostarの承認を受けたものではありません。キャラクター画像の著作権はHypergryphに帰属します。",
  },
  en: {
    pageTitle: "Rhodes Operator Quiz",
    title: w => `You know every <em>${w}</em> in Arknights`,
    operator: "Operator",
    sub: "Type a name and it is checked automatically. Spaces and capitals don't matter. The timer starts with your first keystroke.",
    placeholder: "Type an operator name", got: "Found", left: "Left",
    shadow: "Silhouettes", sound: "Sound", giveUp: "Give up", reset: "Restart", normal: "Normal", hard: "Hard",
    allClass: "All classes", allRace: "All races", star: n => `${n}★`, starWord: n => `${n}★ Operator`, modesLabel: "Quiz scope", diffLabel: "Difficulty",
    winAll: "You are a true Doctor of Rhodes Island", winOne: m => `You are the ${m} personnel officer`, lose: "Kal'tsit sighs",
    score: (n, f, p) => `${f} of ${n} (${p}%)`,
    close: "Close", again: "Play again",
    confirmTitle: "A game is in progress", confirmBody: n => `You've found ${n} so far. Switching clears your progress and starts a new game.`, keep: "Keep playing", proceed: "Switch",
    legal: "※ Unofficial fan content, not approved by Hypergryph or Yostar. Character images © Hypergryph.",
  },
  zh: {
    pageTitle: "罗德岛干员测验",
    title: w => `你认识明日方舟的所有<em>${w}</em>`,
    operator: "干员",
    sub: "输入名字即可自动判定。中文、英文都可以，空格不影响。第一次输入时开始计时。",
    placeholder: "输入干员名字", got: "答对", left: "剩余",
    shadow: "剪影模式", sound: "音效", giveUp: "放弃", reset: "重来", normal: "普通", hard: "困难",
    allClass: "全部职业", allRace: "全部种族", star: n => `${n}星`, starWord: n => `${n}星干员`, modesLabel: "测验范围", diffLabel: "难度",
    winAll: "你是真正的罗德岛博士", winOne: m => `你是${m}人事专员`, lose: "凯尔希叹了口气",
    score: (n, f, p) => `共${n}人，答对${f}人 (${p}%)`,
    close: "关闭", again: "再来一次",
    confirmTitle: "游戏正在进行中", confirmBody: n => `目前已答对${n}人。切换后记录将清空，并开始新游戏。`, keep: "继续游戏", proceed: "切换",
    legal: "※ 非官方粉丝作品，未经鹰角网络（Hypergryph）及悠星（Yostar）授权。角色图片版权归鹰角网络所有。",
  },
};

let lang = "ko";
try {
  const h = location.hash.slice(1), s = localStorage.getItem("akq-lang"), nav = (navigator.language || "").slice(0, 2);
  lang = [h, s, nav].find(x => x in LANGS) || "ko";
} catch(e){}
const t = () => T[lang];

const nameOf  = o => lang === "ko" ? o.name : NAMES[lang][o.id];
const classOf = c => lang === "ko" ? c : CLASS_LABELS[lang][c];
const raceOf  = r => lang === "ko" ? r : (RACE_LABELS[lang][r] || r);

// 가타카나는 히라가나로 바꿔서 비교해요 (일본어는 히라가나로 쳐도 정답)
const norm = s => s.normalize("NFKC").toLowerCase()
  .replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60))
  .replace(/[\s·・.\-'’"=＝]/g, "");
const $ = id => document.getElementById(id);

const board = $("board"), input = $("guess");
let ops = [], groups = [], found = 0, started = 0, tick = null, over = false, sound = true;

// 오퍼레이터 한 명 = { name(한국어), r, en, id, cls(한국어 직군), race(한국어 종족) }
const ALL_OPS = Object.entries(DATA).flatMap(([cls, list]) =>
  list.map(([name, r, en, id]) => ({ name, r, en, id, cls, race: RACE[id] || ROBOT })));

// 모드 목록. 줄(row)마다 버튼이 한 줄씩 생겨요. id는 언어와 상관없이 같아요.
// 종족별 개별 모드(필라인만 등)는 아직 없어요. 넣을 땐 race 줄에 항목을 추가하면 돼요.
const MODES = [
  { row: "class", id: "class:all", all: true, groupBy: "cls", order: Object.keys(DATA), label: () => t().allClass },
  ...Object.keys(DATA).map(c => ({ row: "class", id: "class:" + c, groupBy: "cls", order: [c], filter: o => o.cls === c, label: () => classOf(c) })),
  { row: "race", id: "race:all", all: true, groupBy: "race", order: RACE_ORDER, label: () => t().allRace },
  // 성급 모드: 그 성급만, 직군별로 나눠서
  ...[6, 5, 4].map(n => ({ row: "rarity", id: "rarity:" + n, groupBy: "cls", order: Object.keys(DATA), filter: o => o.r === n, label: () => t().star(n), word: () => t().starWord(n) })),
];
let mode = MODES[0];
try { const m = MODES.find(x => x.id === localStorage.getItem("akq-mode")); if (m) mode = m; } catch(e){}

// 난이도: 노말은 성급 색 띠 + 성급순 정렬, 하드는 색 띠 없이 묶음 안에서 무작위 순서
let hard = false;
try { hard = localStorage.getItem("akq-hard") === "1"; } catch(e){}
const shuffle = a => { for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function setDiff(h){
  hard = h;
  try { localStorage.setItem("akq-hard", h ? "1" : "0"); } catch(e){}
  for (const [id, on] of [["normalBtn", !h], ["hardBtn", h]]){ $(id).classList.toggle("on", on); $(id).setAttribute("aria-pressed", on); }
}

// 화면의 고정 문구를 현재 언어로 채워요
function applyText(){
  document.documentElement.lang = lang;
  document.title = t().pageTitle;
  document.querySelectorAll("[data-t]").forEach(el => el.textContent = t()[el.dataset.t]);
  input.placeholder = t().placeholder; input.setAttribute("aria-label", t().placeholder);
  $("modes").setAttribute("aria-label", t().modesLabel);
  document.querySelector(".diff").setAttribute("aria-label", t().diffLabel);
  const on = board.classList.contains("shadow");
  $("shadowBtn").textContent = `${t().shadow}: ${on ? "ON" : "OFF"}`;
  const langs = $("langs"); langs.innerHTML = "";
  for (const [code, label] of Object.entries(LANGS)){
    const b = document.createElement("button");
    b.textContent = label; b.lang = code;
    b.classList.toggle("on", code === lang); b.setAttribute("aria-pressed", code === lang);
    b.onclick = () => { if (code !== lang) guard(() => setLang(code)); };
    langs.append(b);
  }
}

function setLang(code){
  if (code === lang) return;
  lang = code;
  try { localStorage.setItem("akq-lang", code); history.replaceState(null, "", "#" + code); } catch(e){}
  $("modal").hidden = true;
  applyText(); buildModes(); build(); setBarH(); input.focus();
}

function buildModes(){
  const nav = $("modes"); nav.innerHTML = "";
  for (const row of ["class", "race", "rarity"]){
    const line = document.createElement("div"); line.className = "mode-row";
    for (const m of MODES.filter(x => x.row === row)){
      const n = m.filter ? ALL_OPS.filter(m.filter).length : ALL_OPS.length;
      const b = document.createElement("button");
      b.innerHTML = `<span></span><small>${n}</small>`;
      b.querySelector("span").textContent = m.label();
      b.classList.toggle("on", m === mode); b.setAttribute("aria-pressed", m === mode);
      b.onclick = () => { if (m === mode) return; guard(() => { mode = m; try { localStorage.setItem("akq-mode", m.id); } catch(e){} buildModes(); build(); setBarH(); input.focus(); }); };
      line.append(b);
    }
    nav.append(line);
  }
}

function build(){
  board.innerHTML = ""; $("classes").innerHTML = "";
  ops = []; groups = []; found = 0; over = false; started = 0;
  clearInterval(tick); $("timer").textContent = "00:00";
  $("title").innerHTML = t().title(mode.all ? t().operator : mode.word ? mode.word() : mode.label());
  $("classes").hidden = mode.id !== "class:all";
  board.classList.toggle("hard", hard);

  // 묶음 이름은 현재 언어로. 언어에 따라 두 종족이 같은 표기가 되면 한 묶음으로 합쳐요.
  const label = mode.groupBy === "cls" ? classOf : raceOf;
  const order = [...new Set(mode.order.map(label))];
  const pool = mode.filter ? ALL_OPS.filter(mode.filter) : ALL_OPS;

  const frag = document.createDocumentFragment();
  for (const key of order){
    const list = pool.filter(o => label(o[mode.groupBy]) === key);
    if (!list.length) continue;
    // 묶음 안에서는 레어도 높은 순, 같은 레어도는 이름순 (하드는 무작위)
    if (hard) shuffle(list);
    else if (mode.groupBy !== "cls" || lang !== "ko") list.sort((a, b) => b.r - a.r || nameOf(a).localeCompare(nameOf(b), lang));

    const div = document.createElement("div");
    div.className = "divider";
    div.innerHTML = `<span></span><small><b>0</b> / ${list.length}</small>`;
    div.querySelector("span").textContent = key;
    frag.append(div);

    const chip = document.createElement("span");
    chip.innerHTML = `<i></i> <b>0</b> / ${list.length}`;
    chip.querySelector("i").textContent = key;
    $("classes").append(chip);

    const g = { total: list.length, got: 0, els: [div, chip] };
    groups.push(g);

    for (const o of list){
      const name = nameOf(o);
      const el = document.createElement("div");
      el.className = "tile"; el.dataset.r = o.r;
      el.innerHTML = `<div class="pic"><img loading="lazy" alt=""></div><div class="nm"></div>`;
      const img = el.querySelector("img");
      img.onerror = () => el.classList.add("noimg");
      if (o.id) img.src = IMG_BASE + o.id + ".png"; else el.classList.add("noimg");
      // 이름은 맞히거나 포기하기 전까지 넣지 않아요 (드래그·복사로 정답이 보이지 않게)
      frag.append(el);
      const answers = lang === "ko" ? [o.name, o.en, ...(ALIASES[o.name] || [])] : [name, o.en];
      ops.push({ name, keys: [...new Set(answers.filter(Boolean).map(norm))], el, img, done: false, group: g });
    }
  }
  board.append(frag);
  $("left").textContent = ops.length; $("got").textContent = 0;
  input.value = ""; input.disabled = false;
}

const fmt = ms => { const s = Math.floor(ms / 1000); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); };
function startTimer(){ if (started) return; started = Date.now(); tick = setInterval(() => $("timer").textContent = fmt(Date.now() - started), 250); }

let actx = null;
function beep(){
  if (!sound) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = "square"; o.frequency.value = 880; g.gain.value = .06;
    o.connect(g); g.connect(actx.destination); o.start();
    o.frequency.exponentialRampToValueAtTime(1320, actx.currentTime + .08);
    g.gain.exponentialRampToValueAtTime(.0001, actx.currentTime + .15); o.stop(actx.currentTime + .16);
  } catch(e){}
}

// 정답 처리: 친 이름이 아직 안 맞힌 오퍼레이터 이름과 일치하면 바로 정답이에요.
function accept(hit, composing){
  hit.done = true; found++;
  hit.img.loading = "eager";
  hit.el.querySelector(".nm").textContent = hit.name;
  hit.el.classList.add("got", "new");
  const g = hit.group; g.got++;
  for (const el of g.els){
    el.querySelector("b").textContent = g.got;
    if (g.got === g.total) el.classList.add("done");
  }
  $("got").textContent = found; $("left").textContent = ops.length - found;
  // 한글 입력기가 글자를 조합하는 도중에 입력창을 비우면, 윈도우 등에서 조합 중이던 글자가
  // 다시 들어와 "래티넘"처럼 남는 문제가 있어요. 조합 중이면 포커스를 잠깐 빼서 입력기가
  // 조합을 끝내게 한 다음 비우고, 다시 포커스를 줘요.
  if (composing){ input.blur(); input.value = ""; input.focus(); }
  else input.value = "";
  input.classList.add("flash"); setTimeout(() => input.classList.remove("flash"), 200);
  beep();
  hit.el.scrollIntoView({ block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  if (found === ops.length) finish(true);
}

function check(e){
  if (over) return;
  const k = norm(input.value); if (!k) return;
  startTimer();
  const hit = ops.find(o => !o.done && o.keys.includes(k));
  if (hit) accept(hit, composing || (e && e.isComposing));
}

let composing = false;
input.addEventListener("compositionstart", () => composing = true);
input.addEventListener("compositionend", () => composing = false);
input.addEventListener("input", check);

function finish(win){
  over = true; clearInterval(tick); input.disabled = true;
  const time = started ? fmt(Date.now() - started) : "00:00";
  if (!win) ops.filter(o => !o.done).forEach(o => { o.el.querySelector(".nm").textContent = o.name; o.el.classList.add("lost"); });
  $("mEye").textContent = `${mode.label()} · ${hard ? t().hard : t().normal} · ${win ? "CLEAR" : "MISSION FAILED"}`;
  $("mTime").textContent = time;
  $("mTitle").textContent = !win ? t().lose : mode.all ? t().winAll : t().winOne(mode.label());
  $("mSub").textContent = t().score(ops.length, found, Math.round(found / ops.length * 100));
  $("modal").hidden = false;
}

$("shadowBtn").onclick = e => {
  const on = board.classList.toggle("shadow");
  e.currentTarget.textContent = `${t().shadow}: ${on ? "ON" : "OFF"}`;
  e.currentTarget.classList.toggle("on", on); e.currentTarget.setAttribute("aria-pressed", on);
  input.focus();
};
$("sndBtn").onclick = e => { sound = !sound; e.currentTarget.classList.toggle("on", sound); e.currentTarget.setAttribute("aria-pressed", sound); };
$("giveBtn").onclick = () => { if (!over) finish(false); };
$("resetBtn").onclick = () => guard(() => { build(); input.focus(); });
$("againBtn").onclick = () => { $("modal").hidden = true; build(); input.focus(); };
$("closeBtn").onclick = () => $("modal").hidden = true;
$("normalBtn").onclick = () => { if (!hard) return; guard(() => { setDiff(false); build(); input.focus(); }); };
$("hardBtn").onclick = () => { if (hard) return; guard(() => { setDiff(true); build(); input.focus(); }); };

// 플레이 도중(타이머가 돌고 있고 아직 안 끝났을 때) 모드·난이도·언어를 바꾸거나 "다시"를 누르면
// 정말 바꿀지 먼저 물어봐요. 게임 전이나 끝난 뒤에는 바로 바뀌어요.
let confirmAction = null;
function guard(action){
  if (!started || over) return action();
  confirmAction = action;
  $("cBody").textContent = t().confirmBody(found);
  $("confirm").hidden = false;
  $("keepBtn").focus();
}
function closeConfirm(go){
  $("confirm").hidden = true;
  const a = confirmAction; confirmAction = null;
  if (go && a) a(); else input.focus();
}
$("keepBtn").onclick = () => closeConfirm(false);
$("proceedBtn").onclick = () => closeConfirm(true);
$("confirm").addEventListener("click", e => { if (e.target === e.currentTarget) closeConfirm(false); });
addEventListener("keydown", e => { if (e.key === "Escape" && !$("confirm").hidden) closeConfirm(false); });

const setBarH = () => document.documentElement.style.setProperty("--barh", document.querySelector(".bar").offsetHeight + "px");
addEventListener("resize", setBarH);
setDiff(hard); applyText(); buildModes(); build(); setBarH();
