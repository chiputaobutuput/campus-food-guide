/* 校园食堂避雷决策助手 — 可运行原型
 * 依据 01~10 冻结文档实现：P01 查询 / P02 详情 / P03 评价
 * 数据持久化：localStorage（演示数据明确标注 source_type='demo'）
 */
'use strict';

/* ===================== 1. 字典与常量 ===================== */
const ATTRS = {
  saltiness: { label: '咸淡', values: ['偏淡', '适中', '偏咸'] },
  spiciness: { label: '辣度', values: ['不辣', '微辣', '中辣', '很辣'] },
  oiliness:  { label: '油腻感', values: ['清爽', '适中', '偏油'] },
  portion:   { label: '分量', values: ['偏少', '适中', '偏多'] }
};

const ISSUE_TAGS = [
  '味道偏咸', '偏油', '辣度过高', '味道偏淡',
  '总体分量偏少', '肉量偏少', '配菜偏少', '口感偏硬', '饭菜偏干'
];

const SALE_STATUS = {
  on_sale: { label: '资料显示在售', cls: 'status-on' },
  pending: { label: '资料待确认', cls: 'status-pending' },
  stopped: { label: '已停售(历史资料)', cls: 'status-stopped' }
};

const SOURCE_LABEL = { demo: '演示数据', user: '用户贡献' };

function sampleLevel(n) {
  if (n <= 0) return { level: 0, text: '暂无反馈', cls: 'lv-0' };
  if (n <= 4) return { level: 1, text: '个体反馈', cls: 'lv-1' };
  if (n <= 9) return { level: 2, text: '初步观察', cls: 'lv-2' };
  return { level: 3, text: '可描述分布(非代表性)', cls: 'lv-3' };
}

function timeWindow(dateStr) {
  if (!dateStr) return { text: '体验日期未知', cls: 'tw-unknown' };
  const d = new Date(dateStr);
  if (isNaN(d)) return { text: '体验日期未知', cls: 'tw-unknown' };
  const days = Math.floor((Date.now() - d.getTime()) / 86400000);
  if (days <= 30) return { text: '近30天内体验', cls: 'tw-recent' };
  if (days <= 90) return { text: '31~90天前体验', cls: 'tw-mid' };
  return { text: '90天前体验', cls: 'tw-old' };
}

function fmtDate(s) {
  if (!s) return '未知';
  const d = new Date(s);
  return isNaN(d) ? '未知' : d.toISOString().slice(0, 10);
}
function fmtDateTime(s) {
  if (!s) return '';
  const d = new Date(s);
  return isNaN(d) ? '' : d.toISOString().slice(0, 16).replace('T', ' ');
}

/* ===================== 2. 演示数据 ===================== */
const DEMO_DISHES = [
  { dish_id: 'd_001', name: '黄焖鸡米饭', canteen: '第一食堂', stall: 'A窗口',
    sale_status: 'on_sale', reference_price: 14, price_source: '窗口标价',
    price_confirmed_at: '2026-09-15', source_type: 'demo' },
  { dish_id: 'd_002', name: '黄焖鸡米饭', canteen: '第二食堂', stall: 'B窗口',
    sale_status: 'on_sale', reference_price: 13, price_source: '窗口标价',
    price_confirmed_at: '2026-09-10', source_type: 'demo' },
  { dish_id: 'd_003', name: '麻辣香锅', canteen: '第一食堂', stall: 'C窗口',
    sale_status: 'on_sale', reference_price: 16, price_source: '窗口标价',
    price_confirmed_at: '2026-09-18', source_type: 'demo' },
  { dish_id: 'd_004', name: '重庆小面', canteen: '第二食堂', stall: 'D窗口',
    sale_status: 'on_sale', reference_price: 9, price_source: '窗口标价',
    price_confirmed_at: '2026-09-12', source_type: 'demo' },
  { dish_id: 'd_005', name: '牛肉煎饼果子', canteen: '风味小吃街', stall: 'E窗口',
    sale_status: 'on_sale', reference_price: 8, price_source: '窗口标价',
    price_confirmed_at: '2026-09-05', source_type: 'demo' },
  { dish_id: 'd_006', name: '芝士焗饭', canteen: '第一食堂', stall: 'F窗口',
    sale_status: 'pending', reference_price: 18, price_source: '同学提供',
    price_confirmed_at: '2026-08-20', source_type: 'demo' },
  { dish_id: 'd_007', name: '新疆大盘鸡', canteen: '清真食堂', stall: 'G窗口',
    sale_status: 'stopped', reference_price: 20, price_source: '历史记录',
    price_confirmed_at: '2026-06-01', source_type: 'demo' }
];

// 辅助：生成相对日期
function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

const DEMO_REVIEWS = [
  // 黄焖鸡 d_001 (第一食堂A窗) — 6条有效
  { review_id: 'r_001', dish_id: 'd_001', reviewer_id: 'demo_u1', status: 'active',
    saltiness: '偏咸', spiciness: '微辣', oiliness: '偏油', portion: '适中',
    issue_tags: ['味道偏咸', '偏油'], text: '鸡肉入味但偏咸偏油，配饭刚好。',
    images: [], source_type: 'demo',
    created_at: daysAgo(12), edited_at: null, experience_at: daysAgo(13).slice(0,10), recorded_at: daysAgo(12).slice(0,10) },
  { review_id: 'r_002', dish_id: 'd_001', reviewer_id: 'demo_u2', status: 'active',
    saltiness: '适中', spiciness: '不辣', oiliness: '适中', portion: '偏少',
    issue_tags: ['总体分量偏少'], text: '味道还行，就是分量偏少，男生吃不饱。',
    images: [], source_type: 'demo',
    created_at: daysAgo(8), edited_at: null, experience_at: daysAgo(9).slice(0,10), recorded_at: daysAgo(8).slice(0,10) },
  { review_id: 'r_003', dish_id: 'd_001', reviewer_id: 'demo_u3', status: 'active',
    saltiness: '偏咸', spiciness: null, oiliness: null, portion: '适中',
    issue_tags: ['味道偏咸'], text: '',
    images: [], source_type: 'demo',
    created_at: daysAgo(5), edited_at: null, experience_at: daysAgo(6).slice(0,10), recorded_at: daysAgo(5).slice(0,10) },
  { review_id: 'r_004', dish_id: 'd_001', reviewer_id: 'demo_u4', status: 'active',
    saltiness: '适中', spiciness: '中辣', oiliness: '适中', portion: '适中',
    issue_tags: [], text: '中辣口味，下饭。',
    images: [], source_type: 'demo',
    created_at: daysAgo(3), edited_at: null, experience_at: daysAgo(4).slice(0,10), recorded_at: daysAgo(3).slice(0,10) },
  { review_id: 'r_005', dish_id: 'd_001', reviewer_id: 'demo_u5', status: 'active',
    saltiness: '偏咸', spiciness: null, oiliness: '偏油', portion: '偏少',
    issue_tags: ['味道偏咸', '总体分量偏少'], text: '又咸又油，量还少。',
    images: [], source_type: 'demo',
    created_at: daysAgo(2), edited_at: null, experience_at: daysAgo(3).slice(0,10), recorded_at: daysAgo(2).slice(0,10) },
  { review_id: 'r_006', dish_id: 'd_001', reviewer_id: 'demo_u6', status: 'withdrawn',
    saltiness: '适中', spiciness: null, oiliness: null, portion: '适中',
    issue_tags: [], text: '已撤回',
    images: [], source_type: 'demo',
    created_at: daysAgo(20), edited_at: null, experience_at: daysAgo(21).slice(0,10), recorded_at: daysAgo(20).slice(0,10) },

  // 黄焖鸡 d_002 (第二食堂B窗) — 同名不同窗口，数据独立
  { review_id: 'r_010', dish_id: 'd_002', reviewer_id: 'demo_u7', status: 'active',
    saltiness: '适中', spiciness: '微辣', oiliness: '适中', portion: '偏多',
    issue_tags: [], text: '分量足，味道家常。',
    images: [], source_type: 'demo',
    created_at: daysAgo(6), edited_at: null, experience_at: daysAgo(7).slice(0,10), recorded_at: daysAgo(6).slice(0,10) },
  { review_id: 'r_011', dish_id: 'd_002', reviewer_id: 'demo_u8', status: 'active',
    saltiness: '偏淡', spiciness: '不辣', oiliness: '清爽', portion: '适中',
    issue_tags: ['味道偏淡'], text: '偏淡，适合口味轻的同学。',
    images: [], source_type: 'demo',
    created_at: daysAgo(1), edited_at: null, experience_at: daysAgo(2).slice(0,10), recorded_at: daysAgo(1).slice(0,10) },

  // 麻辣香锅 d_003
  { review_id: 'r_020', dish_id: 'd_003', reviewer_id: 'demo_u9', status: 'active',
    saltiness: '偏咸', spiciness: '很辣', oiliness: '偏油', portion: '适中',
    issue_tags: ['味道偏咸', '辣度过高', '偏油'], text: '很辣很咸，不能吃辣慎选。',
    images: [], source_type: 'demo',
    created_at: daysAgo(10), edited_at: null, experience_at: daysAgo(11).slice(0,10), recorded_at: daysAgo(10).slice(0,10) },
  { review_id: 'r_021', dish_id: 'd_003', reviewer_id: 'demo_u10', status: 'active',
    saltiness: '适中', spiciness: '中辣', oiliness: '适中', portion: '偏少',
    issue_tags: ['总体分量偏少'], text: '味道可，量少。',
    images: [], source_type: 'demo',
    created_at: daysAgo(4), edited_at: null, experience_at: daysAgo(5).slice(0,10), recorded_at: daysAgo(4).slice(0,10) },

  // 重庆小面 d_004 — 低样本(2条)
  { review_id: 'r_030', dish_id: 'd_004', reviewer_id: 'demo_u11', status: 'active',
    saltiness: '偏咸', spiciness: '中辣', oiliness: null, portion: null,
    issue_tags: ['味道偏咸'], text: '',
    images: [], source_type: 'demo',
    created_at: daysAgo(15), edited_at: null, experience_at: daysAgo(16).slice(0,10), recorded_at: daysAgo(15).slice(0,10) },
  { review_id: 'r_031', dish_id: 'd_004', reviewer_id: 'demo_u12', status: 'active',
    saltiness: '偏咸', spiciness: '微辣', oiliness: null, portion: null,
    issue_tags: ['味道偏咸'], text: '略咸。',
    images: [], source_type: 'demo',
    created_at: daysAgo(2), edited_at: null, experience_at: daysAgo(3).slice(0,10), recorded_at: daysAgo(2).slice(0,10) },

  // 牛肉煎饼 d_005 — 无评价
  // 芝士焗饭 d_006 — 待确认，无评价
  // 新疆大盘鸡 d_007 — 已停售
];

/* ===================== 3. 存储层 ===================== */
const K = {
  dishes: 'cfg_dishes', reviews: 'cfg_reviews',
  reviewer: 'cfg_reviewer_id', reports: 'cfg_reports',
  seeded: 'cfg_seeded_v1'
};

function loadJSON(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}
function saveJSON(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function seedIfNeeded() {
  if (!localStorage.getItem(K.seeded)) {
    saveJSON(K.dishes, JSON.parse(JSON.stringify(DEMO_DISHES)));
    saveJSON(K.reviews, JSON.parse(JSON.stringify(DEMO_REVIEWS)));
    saveJSON(K.reports, []);
    if (!localStorage.getItem(K.reviewer)) {
      localStorage.setItem(K.reviewer, 'user_local_' + Math.random().toString(36).slice(2, 8));
    }
    localStorage.setItem(K.seeded, '1');
  }
}

function getDishes() { return loadJSON(K.dishes, []); }
function getReviews() { return loadJSON(K.reviews, []); }
function getReports() { return loadJSON(K.reports, []); }
function saveReviews(r) { saveJSON(K.reviews, r); }
function saveReports(r) { saveJSON(K.reports, r); }
function currentReviewer() {
  let id = localStorage.getItem(K.reviewer);
  if (!id) { id = 'user_local_' + Math.random().toString(36).slice(2, 8); localStorage.setItem(K.reviewer, id); }
  return id;
}

/* ===================== 4. 业务统计逻辑 ===================== */
// 当前有效评价集合 E(dish)
function activeReviews(dishId) {
  return getReviews().filter(r => r.dish_id === dishId && r.status === 'active');
}

function stats(dishId) {
  const revs = activeReviews(dishId);
  const N = revs.length;
  const N_d = {};
  Object.keys(ATTRS).forEach(k => { N_d[k] = revs.filter(r => r[k] !== null && r[k] !== undefined).length; });
  const n_r = {};
  ISSUE_TAGS.forEach(t => { n_r[t] = revs.filter(r => (r.issue_tags || []).includes(t)).length; });
  // 每个属性的取值分布
  const dist = {};
  Object.keys(ATTRS).forEach(k => {
    dist[k] = {};
    ATTRS[k].values.forEach(v => { dist[k][v] = revs.filter(r => r[k] === v).length; });
  });
  return { N, N_d, n_r, dist, reviews: revs };
}

function dishById(id) { return getDishes().find(d => d.dish_id === id) || null; }

/* ===================== 5. 查询 ===================== */
function searchDishes(kw) {
  const q = (kw || '').trim();
  const dishes = getDishes();
  if (!q) return { type: 'empty', list: [] };
  const list = dishes.filter(d => d.name.includes(q) || d.stall.includes(q) || d.canteen.includes(q));
  return { type: list.length ? 'results' : 'no_result', list };
}

/* ===================== 6. 推荐 ===================== */
function recommend(excludeDishId, constraints) {
  // constraints: { canteen: string|null, maxPrice: number|null }
  const dishes = getDishes().filter(d => {
    if (d.dish_id === excludeDishId) return false;
    if (d.sale_status !== 'on_sale') return false; // 停售/待确认不推荐
    if (constraints.canteen && d.canteen !== constraints.canteen) return false;
    if (constraints.maxPrice != null) {
      if (d.reference_price == null) return false; // 未知价不声称符合预算
      if (d.reference_price > constraints.maxPrice) return false;
    }
    return true;
  });
  // 评分依据：同食堂优先；有有效评价的优先；无差评(问题标签)倾向的优先
  const scored = dishes.map(d => {
    const s = stats(d.dish_id);
    const sameCanteen = constraints.canteen ? (d.canteen === constraints.canteen ? 1 : 0) : 0;
    const issueCount = Object.values(s.n_r).reduce((a, b) => a + b, 0);
    // 分数：同食堂+2，有评价+1，问题少者优先
    const score = sameCanteen * 2 + (s.N > 0 ? 1 : 0) - issueCount * 0.1;
    return { dish: d, stats: s, score, issueCount };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5);
}

/* ===================== 7. 评价提交/更新/撤回 ===================== */
function validateReview(form) {
  // 至少一项结构化体验
  const hasAttr = Object.keys(ATTRS).some(k => form[k] != null && form[k] !== '');
  const hasIssue = (form.issue_tags || []).length > 0;
  if (!hasAttr && !hasIssue) {
    return { ok: false, msg: '请至少选择一项具体体验（咸淡/辣度/油腻感/分量）或具体问题标签。仅文字或图片不能构成有效评价。' };
  }
  return { ok: true };
}

function findMyActiveReview(dishId) {
  const rid = currentReviewer();
  return getReviews().find(r => r.dish_id === dishId && r.reviewer_id === rid && r.status === 'active') || null;
}

function saveReview(dishId, form) {
  const v = validateReview(form);
  if (!v.ok) return v;
  const rid = currentReviewer();
  const now = new Date().toISOString();
  const reviews = getReviews();
  const existing = reviews.find(r => r.dish_id === dishId && r.reviewer_id === rid && r.status === 'active');
  if (existing) {
    // 更新：替换当前版本，不新增
    Object.assign(existing, form, { edited_at: now, recorded_at: now.slice(0, 10) });
    // 体验日期：若用户填了则更新，普通编辑不自动刷新体验日
    if (!form.experience_at) existing.experience_at = existing.experience_at;
    saveReviews(reviews);
    return { ok: true, action: 'updated', review: existing };
  } else {
    const newRev = {
      review_id: 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 5),
      dish_id: dishId, reviewer_id: rid, status: 'active',
      saltiness: form.saltiness || null,
      spiciness: form.spiciness || null,
      oiliness: form.oiliness || null,
      portion: form.portion || null,
      issue_tags: form.issue_tags || [],
      text: form.text || '',
      images: form.images || [],
      source_type: 'user',
      created_at: now, edited_at: null,
      experience_at: form.experience_at || null,
      recorded_at: now.slice(0, 10)
    };
    reviews.push(newRev);
    saveReviews(reviews);
    return { ok: true, action: 'created', review: newRev };
  }
}

function withdrawReview(reviewId) {
  const rid = currentReviewer();
  const reviews = getReviews();
  const r = reviews.find(x => x.review_id === reviewId);
  if (!r) return { ok: false, msg: '评价不存在' };
  if (r.reviewer_id !== rid) return { ok: false, msg: '无权限操作他人评价' };
  r.status = 'withdrawn';
  saveReviews(reviews);
  return { ok: true };
}

/* ===================== 8. 举报 ===================== */
function submitReport(reviewId, reason) {
  if (!reason || !reason.trim()) return { ok: false, msg: '请填写举报原因' };
  const reports = getReports();
  reports.push({
    report_id: 'rep_' + Date.now(),
    review_id: reviewId,
    reason: reason.trim(),
    report_status: 'pending',
    created_at: new Date().toISOString(),
    decision_authority: null,
    decision_at: null
  });
  saveReports(reports);
  return { ok: true };
}

// 受控模拟处置（仅授权角色）— 演示用，不冒充真实审核
function simulateRestrict(reviewId, restrict) {
  const reviews = getReviews();
  const r = reviews.find(x => x.review_id === reviewId);
  if (!r) return { ok: false, msg: '评价不存在' };
  r.status = restrict ? 'restricted' : 'active';
  saveReviews(reviews);
  return { ok: true };
}

/* ===================== 9. 路由 ===================== */
function route() {
  const h = location.hash || '#/';
  if (h === '#/' || h === '#' || h === '') renderP01();
  else if (h.startsWith('#/dish/')) renderP02(h.slice(7));
  else if (h.startsWith('#/review/')) renderP03(h.slice(9));
  else renderP01();
}
function go(path) { location.hash = path; }

window.addEventListener('hashchange', route);

/* ===================== 10. P01 查询页 ===================== */
function renderP01() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <header class="app-header">
      <div class="header-title">校园食堂避雷决策助手</div>
      <div class="header-sub">查菜、看体验、避开踩雷窗口</div>
    </header>
    <main class="page p01">
      <div class="search-card">
        <div class="search-row">
          <input type="text" id="q-input" placeholder="输入菜名或窗口，如：黄焖鸡" autocomplete="off">
          <button class="btn-primary" id="q-btn">查询</button>
        </div>
        <div class="search-hint">同名菜在不同食堂/窗口为独立对象，评价不串联</div>
      </div>
      <div id="p01-results" class="p01-results"></div>
      <div class="demo-notice">当前为演示环境，数据为虚构演示数据，不代表真实购买验证。</div>
    </main>`;
  const input = document.getElementById('q-input');
  const btn = document.getElementById('q-btn');
  const results = document.getElementById('p01-results');

  function doSearch() {
    const q = input.value.trim();
    if (!q) { results.innerHTML = '<div class="empty-tip">请输入菜名或窗口关键词</div>'; return; }
    results.innerHTML = '<div class="loading">查询中…</div>';
    // 模拟异步
    setTimeout(() => {
      try {
        const res = searchDishes(q);
        if (res.type === 'no_result') {
          results.innerHTML = `<div class="empty-tip">未找到与「${escapeHtml(q)}」相关的菜品。可换关键词重试。<br><span class="muted">（无结果不等于现实中未售卖）</span></div>`;
        } else {
          results.innerHTML = res.list.map(d => dishResultCard(d)).join('');
          bindResultCards();
        }
      } catch (e) {
        results.innerHTML = `<div class="error-tip">查询失败：${escapeHtml(e.message)} <button class="btn-link" onclick="doSearch()">重试</button></div>`;
      }
    }, 200);
  }
  window.doSearch = doSearch;
  btn.onclick = doSearch;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  input.focus();
}

function dishResultCard(d) {
  const ss = SALE_STATUS[d.sale_status] || SALE_STATUS.on_sale;
  return `<div class="dish-result" data-id="${d.dish_id}">
    <div class="dish-result-name">${escapeHtml(d.name)}</div>
    <div class="dish-result-meta">${escapeHtml(d.canteen)} · ${escapeHtml(d.stall)}</div>
    <div class="dish-result-foot">
      <span class="status-pill ${ss.cls}">${ss.label}</span>
      <span class="price">参考价 ¥${d.reference_price ?? '未知'}</span>
      <span class="source-tag">${SOURCE_LABEL[d.source_type] || ''}</span>
    </div>
  </div>`;
}

function bindResultCards() {
  document.querySelectorAll('.dish-result').forEach(el => {
    el.onclick = () => go('/dish/' + el.dataset.id);
  });
}

/* ===================== 11. P02 详情页 ===================== */
function renderP02(dishId) {
  const app = document.getElementById('app');
  const dish = dishById(dishId);
  if (!dish) {
    app.innerHTML = `<main class="page"><div class="error-tip">菜品不存在或已不可访问。<a href="#/" class="btn-link">返回查询</a></div></main>`;
    return;
  }
  const s = stats(dishId);
  const ss = SALE_STATUS[dish.sale_status];
  const myRev = findMyActiveReview(dishId);

  app.innerHTML = `
    <header class="app-header">
      <button class="back-btn" onclick="history.length>1?history.back():go('/')">←</button>
      <div class="header-title">菜品详情</div>
      <div style="width:40px"></div>
    </header>
    <main class="page p02">
      <!-- D1 身份 -->
      <section class="card">
        <h1 class="dish-name">${escapeHtml(dish.name)}</h1>
        <div class="dish-meta">${escapeHtml(dish.canteen)} · ${escapeHtml(dish.stall)}</div>
        <div class="info-row">
          <span class="status-pill ${ss.cls}">${ss.label}</span>
          <span class="price">参考价 ¥${dish.reference_price ?? '未知'}</span>
        </div>
        <div class="info-sub">价格来源：${escapeHtml(dish.price_source || '未知')} · 确认时间 ${fmtDate(dish.price_confirmed_at)}</div>
        <div class="info-sub">菜品ID：${dish.dish_id} · ${SOURCE_LABEL[dish.source_type]}</div>
      </section>

      <!-- D2 体验摘要 -->
      <section class="card">
        <h2 class="sec-title">真实体验</h2>
        <div class="N-info">当前有效评价 N = <b>${s.N}</b> 条</div>
        ${Object.keys(ATTRS).map(k => attrBlock(k, s)).join('')}
      </section>

      <!-- D3 具体问题 -->
      <section class="card">
        <h2 class="sec-title">具体踩雷原因</h2>
        ${issueBlock(s, dishId)}
      </section>

      <!-- D4 原始评价 -->
      <section class="card">
        <h2 class="sec-title">原始评价与证据</h2>
        <div id="review-list">${reviewList(s.reviews, dishId)}</div>
      </section>

      <!-- D5 替代推荐 -->
      <section class="card">
        <h2 class="sec-title">轻量替代推荐</h2>
        <div id="rec-area">
          <div class="rec-cons">
            <label>食堂限制：
              <select id="rec-canteen">
                <option value="">不限</option>
                <option>第一食堂</option><option>第二食堂</option>
                <option>清真食堂</option><option>风味小吃街</option>
              </select>
            </label>
            <label>预算上限(元)：<input type="number" id="rec-price" placeholder="如 15" min="1"></label>
            <button class="btn-primary" id="rec-btn">主动寻找替代</button>
          </div>
          <div id="rec-results" class="muted">尚未触发推荐。推荐需主动发起，无合格候选时返回空结果。</div>
        </div>
      </section>

      <!-- 进入评价 -->
      <div class="action-bar">
        <button class="btn-primary" onclick="go('/review/${dishId}')">${myRev ? '更新我的评价' : '我吃过，写评价'}</button>
      </div>
    </main>`;

  // 绑定问题核查
  bindIssueDrill(dishId);
  bindReviewReports(dishId);
  // 推荐
  document.getElementById('rec-btn').onclick = () => {
    const canteen = document.getElementById('rec-canteen').value;
    const priceRaw = document.getElementById('rec-price').value;
    const maxPrice = priceRaw === '' ? null : Number(priceRaw);
    const res = recommend(dishId, { canteen: canteen || null, maxPrice });
    const box = document.getElementById('rec-results');
    if (res.length === 0) {
      box.innerHTML = `<div class="empty-tip">无合格候选。硬约束未放宽，未知价格的菜品未被当作符合预算。</div>`;
    } else {
      box.innerHTML = '<div class="rec-list">' + res.map(r => recCard(r)).join('') + '</div>';
      box.querySelectorAll('.rec-item').forEach(el => {
        el.onclick = () => go('/dish/' + el.dataset.id);
      });
    }
  };
}

function attrBlock(k, s) {
  const meta = ATTRS[k];
  const nd = s.N_d[k];
  const lv = sampleLevel(nd);
  const dist = s.dist[k];
  const parts = Object.entries(dist).filter(([, c]) => c > 0).map(([v, c]) => `${v} ${c}条`);
  const distText = parts.length ? parts.join('，') : '无反馈';
  return `<div class="attr-row">
    <div class="attr-head">
      <span class="attr-name">${meta.label}</span>
      <span class="attr-denom">相关反馈 ${nd}/${s.N} 条</span>
      <span class="sample-lv ${lv.cls}">${lv.text}</span>
    </div>
    <div class="attr-dist">${distText}</div>
  </div>`;
}

function issueBlock(s, dishId) {
  const issues = ISSUE_TAGS.map(t => ({ tag: t, n: s.n_r[t] })).filter(x => x.n > 0);
  if (issues.length === 0) {
    return `<div class="muted">当前无被标注的具体问题。<br><span class="muted">注意：没有问题标签不等于肯定无问题。</span></div>`;
  }
  return `<div class="issue-list">${issues.map(x =>
    `<div class="issue-item" data-issue="${escapeHtml(x.tag)}" data-dish="${dishId}">
       <span class="issue-tag">${escapeHtml(x.tag)}</span>
       <span class="issue-count">${x.n} 条反馈</span>
       <span class="issue-drill">核查原始评价 →</span>
     </div>`).join('')}</div>
    <div id="issue-evidence" class="issue-evidence"></div>`;
}

function bindIssueDrill(dishId) {
  document.querySelectorAll('.issue-item').forEach(el => {
    el.onclick = () => {
      const issue = el.dataset.issue;
      const s = stats(dishId);
      const matched = s.reviews.filter(r => (r.issue_tags || []).includes(issue));
      const box = document.getElementById('issue-evidence');
      box.innerHTML = `<div class="evidence-head">问题「${escapeHtml(issue)}」参与计数的原始评价（共 ${matched.length} 条）：
        <button class="btn-link" onclick="document.getElementById('issue-evidence').innerHTML=''">返回</button></div>
        ${matched.map(r => reviewCard(r, dishId)).join('')}`;
      bindReviewReports(dishId);
    };
  });
}

function reviewList(revs, dishId) {
  if (revs.length === 0) return '<div class="muted">该菜品暂无有效评价。</div>';
  return revs.map(r => reviewCard(r, dishId)).join('');
}

function reviewCard(r, dishId) {
  const mine = r.reviewer_id === currentReviewer();
  const tw = timeWindow(r.experience_at);
  const attrs = [];
  Object.keys(ATTRS).forEach(k => { if (r[k]) attrs.push(`${ATTRS[k].label}:${r[k]}`); });
  const issues = (r.issue_tags || []).map(t => `<span class="chip">${escapeHtml(t)}</span>`).join('');
  return `<div class="review-card" data-rid="${r.review_id}">
    <div class="review-head">
      <span class="reviewer">${mine ? '我' : '评价者'}${r.reviewer_id.slice(-4)}</span>
      <span class="source-tag">${SOURCE_LABEL[r.source_type]}</span>
      ${mine ? '<span class="mine-tag">本人</span>' : ''}
    </div>
    <div class="review-attrs">${attrs.map(a => `<span class="chip chip-attr">${escapeHtml(a)}</span>`).join('')}</div>
    ${issues ? `<div class="review-issues">${issues}</div>` : ''}
    ${r.text ? `<div class="review-text">${escapeHtml(r.text)}</div>` : ''}
    <div class="review-foot">
      <span class="${tw.cls}">${tw.text}</span>
      <span class="muted">记录于 ${fmtDate(r.recorded_at)}</span>
    </div>
    <div class="review-actions">
      ${!mine ? `<button class="btn-link report-btn" data-rid="${r.review_id}">举报</button>` : '<span class="muted">本人评价，可在评价页更新/撤回</span>'}
    </div>
  </div>`;
}

function bindReviewReports(dishId) {
  document.querySelectorAll('.report-btn').forEach(btn => {
    btn.onclick = () => {
      const rid = btn.dataset.rid;
      const reason = prompt('请填写举报原因（举报仅为待处理，不自动删除评价）：');
      if (reason == null) return;
      const res = submitReport(rid, reason);
      if (res.ok) alert('举报已提交，状态为「待处理」，该评价仍正常计数。');
      else alert(res.msg);
    };
  });
}

function recCard(r) {
  const d = r.dish;
  const evLevel = sampleLevel(r.stats.N);
  return `<div class="rec-item" data-id="${d.dish_id}">
    <div class="rec-name">${escapeHtml(d.name)} <span class="muted">${escapeHtml(d.canteen)}·${escapeHtml(d.stall)}</span></div>
    <div class="rec-meta">¥${d.reference_price} · 有效评价 ${r.stats.N} 条 · ${evLevel.text}</div>
    <div class="rec-reason">${r.stats.N > 0 ? `有 ${r.stats.N} 条体验反馈；问题标签共 ${r.issueCount} 项` : '暂无体验反馈，仅作为候选'}</div>
  </div>`;
}

/* ===================== 12. P03 评价编辑 ===================== */
function renderP03(dishId) {
  const app = document.getElementById('app');
  const dish = dishById(dishId);
  if (!dish) { app.innerHTML = `<main class="page"><div class="error-tip">菜品不存在。<a href="#/" class="btn-link">返回</a></div></main>`; return; }
  const myRev = findMyActiveReview(dishId);

  app.innerHTML = `
    <header class="app-header">
      <button class="back-btn" onclick="go('/dish/${dishId}')">←</button>
      <div class="header-title">${myRev ? '更新我的评价' : '评价这道菜'}</div>
      <div style="width:40px"></div>
    </header>
    <main class="page p03">
      <section class="card">
        <div class="dish-name">${escapeHtml(dish.name)}</div>
        <div class="dish-meta">${escapeHtml(dish.canteen)} · ${escapeHtml(dish.stall)}</div>
        <div class="info-sub">菜品ID：${dish.dish_id}</div>
      </section>

      <form id="review-form" class="card">
        <h2 class="sec-title">具体体验（可跳过，至少一项有效）</h2>
        ${Object.keys(ATTRS).map(k => attrEditor(k, myRev)).join('')}

        <h2 class="sec-title">具体问题标签（选填，可多选）</h2>
        <div class="tag-picker">
          ${ISSUE_TAGS.map(t => `<label class="tag-opt"><input type="checkbox" value="${t}" ${(myRev?.issue_tags||[]).includes(t)?'checked':''}>${t}</label>`).join('')}
        </div>

        <h2 class="sec-title">文字描述（选填）</h2>
        <textarea id="rev-text" rows="3" placeholder="补充具体感受（仅文字不能构成有效评价）">${escapeHtml(myRev?.text||'')}</textarea>

        <h2 class="sec-title">体验日期（可选，未知可留空）</h2>
        <input type="date" id="rev-date" value="${myRev?.experience_at||''}">
        <div class="info-sub">体验日期仅为自报，非购买核验；留空表示未知。</div>

        <div id="form-msg" class="form-msg"></div>
        <div class="form-actions">
          <button type="button" class="btn-primary" id="save-btn">${myRev?'保存更新':'提交评价'}</button>
          ${myRev ? '<button type="button" class="btn-danger" id="wd-btn">撤回本人评价</button>' : ''}
          <button type="button" class="btn-link" onclick="go('/dish/${dishId}')">取消</button>
        </div>
      </form>
    </main>`;

  document.getElementById('save-btn').onclick = () => {
    const form = collectForm();
    const btn = document.getElementById('save-btn');
    btn.disabled = true; btn.textContent = '保存中…';
    setTimeout(() => {
      const res = saveReview(dishId, form);
      if (res.ok) {
        document.getElementById('form-msg').innerHTML = `<div class="success-msg">${res.action==='created'?'评价已提交':'评价已更新'}，正在返回详情…</div>`;
        setTimeout(() => go('/dish/' + dishId), 600);
      } else {
        document.getElementById('form-msg').innerHTML = `<div class="error-msg">${escapeHtml(res.msg)}</div>`;
        btn.disabled = false; btn.textContent = myRev?'保存更新':'提交评价';
      }
    }, 300);
  };
  if (myRev) {
    document.getElementById('wd-btn').onclick = () => {
      if (!confirm('确认撤回该评价？撤回后将不再计入统计。')) return;
      const res = withdrawReview(myRev.review_id);
      if (res.ok) {
        alert('已撤回，返回详情查看更新后的统计。');
        go('/dish/' + dishId);
      } else alert(res.msg);
    };
  }
}

function attrEditor(k, myRev) {
  const meta = ATTRS[k];
  const cur = myRev?.[k] || '';
  return `<div class="attr-editor">
    <div class="attr-editor-name">${meta.label}</div>
    <div class="attr-opts">
      <label class="attr-opt"><input type="radio" name="${k}" value="" ${cur===''?'checked':''}>跳过</label>
      ${meta.values.map(v => `<label class="attr-opt"><input type="radio" name="${k}" value="${v}" ${cur===v?'checked':''}>${v}</label>`).join('')}
    </div>
  </div>`;
}

function collectForm() {
  const form = {};
  Object.keys(ATTRS).forEach(k => {
    const el = document.querySelector(`input[name="${k}"]:checked`);
    form[k] = el && el.value ? el.value : null;
  });
  form.issue_tags = Array.from(document.querySelectorAll('.tag-opt input:checked')).map(el => el.value);
  form.text = document.getElementById('rev-text').value.trim();
  form.experience_at = document.getElementById('rev-date').value || null;
  form.images = [];
  return form;
}

/* ===================== 13. 工具 ===================== */
function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* ===================== 14. 启动 ===================== */
seedIfNeeded();
route();
