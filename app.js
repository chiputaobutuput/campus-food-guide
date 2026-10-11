// ===== 模拟数据 =====
const CANTEENS = [
    { id: 1, name: '第一食堂', icon: '🏢', rating: 4.2, tags: ['种类丰富', '性价比高'], location: '东区一楼' },
    { id: 2, name: '第二食堂', icon: '🏬', rating: 4.0, tags: ['环境好', '排队少'], location: '东区二楼' },
    { id: 3, name: '清真食堂', icon: '🕌', rating: 4.5, tags: ['特色风味', '分量足'], location: '西区一楼' },
    { id: 4, name: '风味小吃街', icon: '🍢', rating: 3.8, tags: ['种类多', '价格偏高'], location: '南门侧' },
];

const DISHES = [
    { id: 1, name: '麻辣香锅', canteen: '第一食堂', window: 'A-01', price: 16, rating: 4.8, reviews: 234, emoji: '🍲', category: '主食', tags: ['招牌', '人气爆棚'], desc: '麻辣鲜香，食材自选，辣度可调', isNew: false, imgColor: '#FF6B35' },
    { id: 2, name: '黄焖鸡米饭', canteen: '第一食堂', window: 'A-03', price: 14, rating: 4.6, reviews: 189, emoji: '🍗', category: '盖饭', tags: ['经典', '下饭神器'], desc: '鸡肉嫩滑，汤汁浓郁，配米饭绝配', isNew: false, imgColor: '#FFA500' },
    { id: 3, name: '螺蛳粉', canteen: '第二食堂', window: 'B-02', price: 13, rating: 4.3, reviews: 156, emoji: '🍜', category: '粉面', tags: ['爱恨分明', '重口味'], desc: '正宗柳州味，酸笋腐竹配齐', isNew: false, imgColor: '#8BC344' },
    { id: 4, name: '牛肉煎饼果子', canteen: '风味小吃街', window: 'C-01', price: 8, rating: 4.7, reviews: 312, emoji: '🥞', category: '小吃', tags: ['早餐之王', '性价比之王'], desc: '外酥里嫩，牛肉鲜香，每日限量', isNew: false, imgColor: '#FFD700' },
    { id: 5, name: '番茄鸡蛋盖饭', canteen: '第一食堂', window: 'A-05', price: 10, rating: 3.9, reviews: 98, emoji: '🍳', category: '盖饭', tags: ['清淡', '家常味'], desc: '酸甜可口，鸡蛋嫩滑', isNew: false, imgColor: '#FF7043' },
    { id: 6, name: '酸菜鱼粉', canteen: '第二食堂', window: 'B-04', price: 15, rating: 4.5, reviews: 142, emoji: '🐟', category: '粉面', tags: ['鲜美', '开胃'], desc: '酸菜爽脆，鱼片滑嫩', isNew: false, imgColor: '#26A69A' },
    { id: 7, name: '鸡公煲', canteen: '第一食堂', window: 'A-07', price: 18, rating: 4.4, reviews: 120, emoji: '🍲', category: '主食', tags: ['量大', '够味'], desc: '鸡肉紧实，土豆软糯，配菜丰富', isNew: false, imgColor: '#E53935' },
    { id: 8, name: '寿司拼盘', canteen: '风味小吃街', window: 'C-03', price: 20, rating: 3.5, reviews: 45, emoji: '🍣', category: '小吃', tags: ['价格偏高', '量少'], desc: '种类多但分量偏少', isNew: false, imgColor: '#7E57C2' },
    { id: 9, name: '羊肉泡馍', canteen: '清真食堂', window: 'D-01', price: 17, rating: 4.6, reviews: 178, emoji: '🥘', category: '主食', tags: ['特色', '暖胃'], desc: '汤浓味鲜，羊肉软烂无膻味', isNew: false, imgColor: '#FF8C00' },
    { id: 10, name: '重庆小面', canteen: '第二食堂', window: 'B-06', price: 9, rating: 4.2, reviews: 203, emoji: '🍝', category: '粉面', tags: ['便宜', '麻辣'], desc: '麻辣鲜香，面条筋道', isNew: false, imgColor: '#D32F2F' },
    { id: 11, name: '芝士焗饭', canteen: '第二食堂', window: 'B-08', price: 16, rating: 2.8, reviews: 34, emoji: '🍚', category: '盖饭', tags: ['踩雷', '芝士少'], desc: '芝士量少且口感一般', isNew: false, imgColor: '#FFCA28' },
    { id: 12, name: '新疆大盘鸡', canteen: '清真食堂', window: 'D-03', price: 22, rating: 4.7, reviews: 167, emoji: '🍗', category: '主食', tags: ['分量足', '够辣'], desc: '鸡肉入味，土豆绵软，皮带面配着吃', isNew: true, imgColor: '#C62828' },
    { id: 13, name: '韩式拌饭', canteen: '风味小吃街', window: 'C-05', price: 14, rating: 4.1, reviews: 89, emoji: '🍱', category: '盖饭', tags: ['颜值高', '营养均衡'], desc: '蔬菜丰富，辣酱开胃', isNew: false, imgColor: '#FF5252' },
    { id: 14, name: '潮汕砂锅粥', canteen: '第二食堂', window: 'B-10', price: 12, rating: 4.3, reviews: 67, emoji: '🥣', category: '小吃', tags: ['养胃', '鲜美'], desc: '米粒开花，鲜虾扇贝', isNew: true, imgColor: '#66BB6A' },
];

const REVIEWS = [
    { id: 1, dishId: 1, user: '美食猎人', avatar: '🦊', rating: 5, text: '辣度刚好，食材很新鲜，自选模式太爽了！每次必加午餐肉和藕片', time: '2小时前', daysAgo: 0, tags: ['麻辣', '量大'] },
    { id: 2, dishId: 4, user: '早起鸟', avatar: '🐦', rating: 5, text: '煎饼果子yyds！外皮酥脆，牛肉给得多，加个蛋简直完美，8块钱吃到撑', time: '3小时前', daysAgo: 0, tags: ['便宜', '好吃'] },
    { id: 3, dishId: 9, user: '西北狼', avatar: '🐺', rating: 5, text: '冬天来一碗泡馍太幸福了，汤鲜味美，羊肉一点膻味都没有', time: '5小时前', daysAgo: 1, tags: ['暖胃', '正宗'] },
    { id: 4, dishId: 3, user: '嗦粉达人', avatar: '🐱', rating: 4, text: '味道正，但酸笋可以再多放点，喜欢重口的可以让阿姨多加', time: '昨天', daysAgo: 1, tags: ['重口味'] },
    { id: 5, dishId: 11, user: '匿名同学', avatar: '💣', rating: 2, text: '芝士就薄薄一层，还不如直接叫焗饭，性价比太低了，不推荐', time: '昨天', daysAgo: 1, tags: ['踩雷', '量少'] },
    { id: 6, dishId: 2, user: '米饭杀手', avatar: '🐯', rating: 5, text: '汤汁拌饭绝了！鸡肉很入味，土豆也炖烂了，14块管饱', time: '2天前', daysAgo: 2, tags: ['下饭', '性价比'] },
    { id: 7, dishId: 12, user: '新疆小伙', avatar: '🐪', rating: 5, text: '新窗口的大盘鸡太惊艳了！皮带面泡在汤汁里，又筋道又入味', time: '2天前', daysAgo: 2, tags: ['新品', '分量足'] },
    { id: 8, dishId: 11, user: '匿名同学', avatar: '💣', rating: 1, text: '今天又去试了一次，还是很难吃，芝士根本不拉丝', time: '3天前', daysAgo: 3, tags: ['踩雷', '口味好'] },
];

const CATEGORIES = [
    { name: '主食', icon: '🍚', color: '#FFF3E0' },
    { name: '盖饭', icon: '🍱', color: '#E8F5E9' },
    { name: '粉面', icon: '🍜', color: '#E3F2FD' },
    { name: '小吃', icon: '🍢', color: '#FCE4EC' },
    { name: '粥品', icon: '🥣', color: '#F3E5F5' },
    { name: '甜点', icon: '🍰', color: '#FFF8E1' },
    { name: '饮品', icon: '🥤', color: '#E0F7FA' },
    { name: '更多', icon: '✨', color: '#F1F8E9' },
];

// 标签池（发评价用）
const REVIEW_TAG_OPTIONS = ['踩雷', '排队久', '出餐慢', '份量足', '口味好', '性价比高', '回购N次', '新品试吃'];

// 敏感词库（模拟内容安全）
const SENSITIVE_WORDS = ['傻逼', '草泥马', '去死', '垃圾人', '废物', '脑残'];

// ===== localStorage 持久化 =====
const STORAGE_KEYS = {
    REVIEWS: 'zhishi_reviews',
    DISHES: 'zhishi_dishes',
    FAVORITES: 'zhishi_favorites',
    REVIEW_COUNT_TODAY: 'zhishi_review_count_today',
    REVIEW_COUNT_DATE: 'zhishi_review_count_date'
};

function loadUserReviews() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEWS) || '[]');
    } catch { return []; }
}

function saveUserReviews(reviews) {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
}

function loadDishOverrides() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.DISHES) || '{}');
    } catch { return {}; }
}

function saveDishOverrides(overrides) {
    localStorage.setItem(STORAGE_KEYS.DISHES, JSON.stringify(overrides));
}

function loadFavorites() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || '[]');
    } catch { return []; }
}

function saveFavorites(favs) {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
}

// 获取合并后的菜品数据（基础数据 + 用户评分覆盖）
function getMergedDishes() {
    const overrides = loadDishOverrides();
    return DISHES.map(d => {
        if (overrides[d.id]) {
            return { ...d, ...overrides[d.id] };
        }
        return d;
    });
}

function getAllReviews() {
    return [...REVIEWS, ...loadUserReviews()];
}

// ===== 推荐度标签算法（V1基于评分，V2升级为"值得排队"）=====
function getWorthTag(dish) {
    if (dish.reviews < 10) {
        return { type: 'none', label: '评价不足', icon: '⚪' };
    }
    if (dish.rating >= 4.5) {
        return { type: 'worth', label: '强烈推荐', icon: '🟢' };
    }
    if (dish.rating < 3.5) {
        return { type: 'not-worth', label: '不推荐', icon: '🔴' };
    }
    return { type: 'maybe', label: '可以一试', icon: '🟡' };
}

// 算法透明化文案
function getAlgoTransparentText(dish) {
    const worth = getWorthTag(dish);
    if (worth.type === 'none') {
        return `评价不足10条（当前${dish.reviews}条），暂不判定`;
    }
    return `近30天 ${dish.reviews} 条评价，均分 ${dish.rating} → ${worth.label}`;
}

// ===== 排队状态提示（V1基于评价标签）=====
function getQueueStatus(dish) {
    const allReviews = getAllReviews().filter(r => r.dishId === dish.id);
    const recent = allReviews.filter(r => (r.daysAgo || 0) <= 7);
    if (recent.length < 5) return null;
    const queueCount = recent.filter(r => (r.tags || []).some(t => t.includes('排队'))).length;
    const slowCount = recent.filter(r => (r.tags || []).some(t => t.includes('出餐') || t.includes('慢'))).length;
    if (queueCount / recent.length >= 0.3) return { type: 'queue', text: '⏳ 近期排队较久' };
    if (slowCount / recent.length >= 0.3) return { type: 'slow', text: '🐢 近期出餐较慢' };
    return null;
}

// ===== 建设性避雷建议 =====
function getAvoidAdvice(dish) {
    const allReviews = getAllReviews().filter(r => r.dishId === dish.id);
    const allTags = allReviews.flatMap(r => r.tags || []);
    const dishTags = dish.tags || [];
    const combinedTags = [...allTags, ...dishTags];

    if (combinedTags.some(t => t.includes('排队') || t.includes('慢'))) {
        return '建议错峰前往（避开 11:30-12:30 高峰）';
    }
    if (combinedTags.some(t => t.includes('出餐'))) {
        return '出餐较慢，赶时间慎选';
    }
    if (combinedTags.some(t => t.includes('踩雷') || t.includes('口味差') || t.includes('难吃'))) {
        return '近期评价不佳，可尝试同窗口其他高分菜品';
    }
    if (combinedTags.some(t => t.includes('量少') || t.includes('份量'))) {
        return '饭量较大者慎选，可考虑加饭';
    }
    if (combinedTags.some(t => t.includes('价格') || t.includes('贵'))) {
        return '价格偏高，建议对比其他窗口同类菜品';
    }
    return '近期评价不佳，建议观望';
}

// ===== 内容安全 =====
function containsSensitiveWord(text) {
    return SENSITIVE_WORDS.some(w => text.includes(w));
}

function getTodayReviewCount() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem(STORAGE_KEYS.REVIEW_COUNT_DATE);
    if (savedDate !== today) {
        localStorage.setItem(STORAGE_KEYS.REVIEW_COUNT_DATE, today);
        localStorage.setItem(STORAGE_KEYS.REVIEW_COUNT_TODAY, '0');
        return 0;
    }
    return parseInt(localStorage.getItem(STORAGE_KEYS.REVIEW_COUNT_TODAY) || '0');
}

function incrementTodayReviewCount() {
    const count = getTodayReviewCount() + 1;
    localStorage.setItem(STORAGE_KEYS.REVIEW_COUNT_TODAY, String(count));
    return count;
}

// ===== 状态 =====
let currentBannerIndex = 0;
let bannerTimer = null;
let selectedRating = 0;
let selectedTags = [];
let currentReviewDishId = null;
let currentBuildingFilter = 'all';
let reviewImages = [];

// ===== 初始化 =====
function init() {
    renderBanner();
    renderCanteens();
    renderDualRank('good');
    renderLatestReviews();
    renderCategoryGrid();
    renderAvoidList();
    renderNewDishes();
    renderMineStats();
    startBannerAutoPlay();
}

// ===== 导航 =====
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    const target = document.getElementById('page-' + page);
    if (target) {
        target.style.display = 'block';
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.style.display = page === 'search' ? 'none' : 'flex';
    }

    // 页面进入时刷新特定内容
    if (page === 'mine') renderMineStats();
    if (page === 'myreviews') renderMyReviews();
    if (page === 'favorites') renderFavorites();
    if (page === 'rank' || page === 'discover') {
        const activeTab = document.querySelector('.rank-tab.active');
        if (activeTab) {
            const type = activeTab.getAttribute('onclick').match(/'(\w+)'/)[1];
            switchRankTab(type, activeTab);
        }
        renderAvoidList();
        renderNewDishes();
    }
}

// ===== Banner轮播 =====
function getBannerDishes() {
    const dishes = getMergedDishes();
    return [...dishes].sort((a, b) => b.rating - a.rating).slice(0, 3);
}

function renderBanner() {
    const dishes = getBannerDishes();
    const dotsContainer = document.getElementById('banner-dots');
    dotsContainer.innerHTML = '';
    dishes.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
    });
    updateBanner(0);
}

function updateBanner(index) {
    const dishes = getBannerDishes();
    if (dishes.length === 0) return;
    currentBannerIndex = index % dishes.length;
    const dish = dishes[currentBannerIndex];
    const worth = getWorthTag(dish);

    document.getElementById('banner-title').textContent = dish.name;
    document.getElementById('banner-desc').textContent = dish.canteen + ' · ¥' + dish.price + ' · ' + dish.desc;
    document.getElementById('banner-rating').innerHTML = `⭐ ${dish.rating} | 💬 ${dish.reviews}条 | ${worth.icon} ${worth.label}`;

    document.querySelector('.banner-image').style.background = `linear-gradient(135deg, ${dish.imgColor} 0%, ${dish.imgColor}88 100%)`;

    document.querySelectorAll('.banner-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentBannerIndex);
    });

    document.querySelector('.banner-card').onclick = () => openDishDetail(dish.id);
}

function startBannerAutoPlay() {
    if (bannerTimer) clearInterval(bannerTimer);
    bannerTimer = setInterval(() => {
        updateBanner(currentBannerIndex + 1);
    }, 4000);
}

// ===== 食堂导航 =====
function renderCanteens() {
    const container = document.getElementById('canteen-grid');
    const dishes = getMergedDishes();
    container.innerHTML = CANTEENS.map(c => {
        const dishCount = dishes.filter(d => d.canteen === c.name).length;
        return `
            <div class="canteen-card" onclick="openCanteenDetail(${c.id})">
                <div class="canteen-icon">${c.icon}</div>
                <div class="canteen-info">
                    <h3>${c.name}</h3>
                    <p>⭐ ${c.rating} · ${dishCount}道菜</p>
                </div>
            </div>
        `;
    }).join('');
}

// 食堂详情页
function openCanteenDetail(canteenId) {
    const canteen = CANTEENS.find(c => c.id === canteenId);
    if (!canteen) return;
    const dishes = getMergedDishes().filter(d => d.canteen === canteen.name);

    document.getElementById('canteen-detail-content').innerHTML = `
        <div class="canteen-detail-header">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
                <span style="font-size:40px">${canteen.icon}</span>
                <div>
                    <h2>${canteen.name}</h2>
                    <div class="canteen-detail-meta">
                        <span>⭐ ${canteen.rating}</span>
                        <span>📍 ${canteen.location}</span>
                        <span>🍽️ ${dishes.length}道菜</span>
                    </div>
                </div>
            </div>
            <div class="canteen-detail-tags">
                ${canteen.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
        </div>
        <div class="section-header">
            <h3>🍽️ 全部菜品（按评分排序）</h3>
        </div>
        ${dishes.length > 0 ? `
            <div class="dish-list">
                ${dishes.sort((a, b) => b.rating - a.rating).map(d => renderDishCard(d)).join('')}
            </div>
        ` : '<div class="empty-state"><div class="empty-icon">🍽️</div><p>该食堂暂无菜品数据</p></div>'}
    `;

    navigateTo('canteen');
}

// 菜品卡片通用渲染
function renderDishCard(dish) {
    const worth = getWorthTag(dish);
    let tagHtml = '';
    if (dish.isNew) tagHtml = '<span class="dish-card-tag tag-new">🆕 新品</span>';
    else if (worth.type === 'not-worth') tagHtml = '<span class="dish-card-tag tag-avoid">⚠️ 避雷</span>';
    else if (worth.type === 'worth') tagHtml = '<span class="dish-card-tag" style="background:#E8F5E9;color:#00C853">👍 推荐</span>';

    return `
        <div class="dish-card" onclick="openDishDetail(${dish.id})">
            <div class="dish-card-img" style="background:${dish.imgColor}20">${dish.emoji}</div>
            <div class="dish-card-info">
                ${tagHtml}
                <h4>${dish.name}</h4>
                <div class="dish-card-meta">
                    <span class="rating">★${dish.rating}</span>
                    <span class="price">¥${dish.price}</span>
                </div>
                <span class="worth-tag ${worth.type}">${worth.icon} ${worth.label}</span>
            </div>
        </div>
    `;
}

// ===== 双榜（好评榜/避雷榜）=====
function switchDualTab(type, el) {
    document.querySelectorAll('.dual-tab-btn').forEach(t => {
        t.classList.remove('active', 'good', 'bad');
    });
    el.classList.add('active', type);
    renderDualRank(type);
}

function renderDualRank(type) {
    const dishes = getMergedDishes();
    const container = document.getElementById('dual-rank-list');

    // 楼栋筛选
    const buildingFilter = document.getElementById('building-filter');
    const buildingBtns = buildingFilter ? buildingFilter.querySelectorAll('.filter-chip') : [];
    buildingBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.canteen === currentBuildingFilter);
    });

    let filtered = currentBuildingFilter === 'all' 
        ? dishes 
        : dishes.filter(d => d.canteen === currentBuildingFilter);

    let list;
    let doubtfulList = [];

    if (type === 'good') {
        // 好评榜：评分≥4.5 且评价数≥10
        list = filtered.filter(d => d.rating >= 4.5 && d.reviews >= 10)
                     .sort((a, b) => b.rating - a.rating)
                     .slice(0, 5);
    } else {
        // 差评榜：评分<3.5 且评价数≥10 且近7天有差评
        list = filtered.filter(d => {
            if (d.rating >= 3.5 || d.reviews < 10) return false;
            const recentBad = getAllReviews().filter(r => r.dishId === d.id && r.rating <= 2 && (r.daysAgo || 0) <= 7);
            return recentBad.length > 0;
        }).sort((a, b) => a.rating - b.rating).slice(0, 5);
        // 存疑区：评分<3.5 且评价数≥10 但近7天无差评
        doubtfulList = filtered.filter(d => {
            if (d.rating >= 3.5 || d.reviews < 10) return false;
            const recentBad = getAllReviews().filter(r => r.dishId === d.id && r.rating <= 2 && (r.daysAgo || 0) <= 7);
            return recentBad.length === 0;
        }).sort((a, b) => a.rating - b.rating).slice(0, 5);
    }

    if (list.length === 0 && doubtfulList.length === 0) {
        container.innerHTML = `<div class="empty-state"><div class="empty-icon">${type === 'good' ? '🌟' : '🎉'}</div><p>${type === 'good' ? '该食堂暂无高分菜品' : '该食堂暂无踩雷菜品，恭喜！'}</p></div>`;
        return;
    }

    const mainHtml = list.length > 0 ? list.map((d, i) => {
        const rankClass = `${type}-top${i + 1}`;
        const worth = getWorthTag(d);
        let adviceHtml = '';
        if (type === 'bad') {
            adviceHtml = `<div class="avoid-advice">${getAvoidAdvice(d)}</div>`;
        }
        return `
            <div class="rank-item" onclick="openDishDetail(${d.id})">
                <div class="rank-num ${rankClass}">${i + 1}</div>
                <div class="rank-thumb" style="background:${d.imgColor}20">${d.emoji}</div>
                <div class="rank-info">
                    <h4>${d.name}</h4>
                    <p>${d.canteen} · <span class="price-tag">¥${d.price}</span></p>
                    <span class="worth-tag ${worth.type}">${worth.icon} ${worth.label}</span>
                    ${adviceHtml}
                </div>
                <div class="rank-score">
                    <div class="score-num">${d.rating}</div>
                    <div class="score-label">${d.reviews}评</div>
                </div>
            </div>
        `;
    }).join('') : '';

    // 存疑区（仅差评榜有）
    const doubtfulHtml = (type === 'bad' && doubtfulList.length > 0) ? `
        <div class="doubtful-section">
            <div class="doubtful-header" onclick="toggleDoubtful()">
                <span>🔍 存疑菜品（历史评分偏低，近期暂无差评）</span>
                <span class="doubtful-toggle" id="doubtful-toggle">▶</span>
            </div>
            <div id="doubtful-content" style="display:none">
                <p class="doubtful-desc">这些菜品历史评分偏低，但近 7 天无差评，可能已改善，建议自行判断。</p>
                ${doubtfulList.map(d => `
                    <div class="rank-item" onclick="openDishDetail(${d.id})">
                        <div class="rank-thumb" style="background:${d.imgColor}20">${d.emoji}</div>
                        <div class="rank-info">
                            <h4>${d.name}</h4>
                            <p>${d.canteen} · <span class="price-tag">¥${d.price}</span></p>
                            <span class="worth-tag maybe">🔍 存疑</span>
                        </div>
                        <div class="rank-score">
                            <div class="score-num">${d.rating}</div>
                            <div class="score-label">${d.reviews}评</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    container.innerHTML = mainHtml + doubtfulHtml;
}

function toggleDoubtful() {
    const content = document.getElementById('doubtful-content');
    const toggle = document.getElementById('doubtful-toggle');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggle.textContent = '▼';
    } else {
        content.style.display = 'none';
        toggle.textContent = '▶';
    }
}

function setBuildingFilter(canteen) {
    currentBuildingFilter = canteen;
    const activeTab = document.querySelector('.dual-tab-btn.active');
    renderDualRank(activeTab ? activeTab.dataset.tab : 'good');
}

// ===== 排行榜全量 =====
function switchRankTab(type, el) {
    document.querySelectorAll('.rank-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    const dishes = getMergedDishes();
    let sorted;
    if (type === 'rating') {
        sorted = [...dishes].sort((a, b) => b.rating - a.rating);
    } else if (type === 'hot') {
        sorted = [...dishes].sort((a, b) => b.reviews - a.reviews);
    } else if (type === 'value') {
        sorted = [...dishes].sort((a, b) => (b.rating / b.price) - (a.rating / a.price));
    }

    const container = document.getElementById('rank-full-list');
    container.innerHTML = sorted.map((d, i) => {
        const rankClass = i < 3 ? `good-top${i + 1}` : '';
        const valueScore = (d.rating / d.price).toFixed(2);
        const subInfo = type === 'value' ? `性价比 ${valueScore}` : `${d.reviews}条评价`;
        const worth = getWorthTag(d);
        return `
            <div class="rank-item" onclick="openDishDetail(${d.id})">
                <div class="rank-num ${rankClass}">${i + 1}</div>
                <div class="rank-thumb" style="background:${d.imgColor}20">${d.emoji}</div>
                <div class="rank-info">
                    <h4>${d.name}</h4>
                    <p>${d.canteen} · <span class="price-tag">¥${d.price}</span></p>
                    <span class="worth-tag ${worth.type}">${worth.icon} ${worth.label}</span>
                </div>
                <div class="rank-score">
                    <div class="score-num">${d.rating}</div>
                    <div class="score-label">${subInfo}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== 最新评价 =====
function renderLatestReviews() {
    const allReviews = getAllReviews().sort((a, b) => b.id - a.id).slice(0, 3);
    const container = document.getElementById('latest-reviews');
    const dishes = getMergedDishes();
    container.innerHTML = allReviews.map(r => {
        const dish = dishes.find(d => d.id === r.dishId);
        return `
            <div class="review-card" onclick="openDishDetail(${r.dishId})">
                <div class="review-header">
                    <div class="review-avatar">${r.avatar}</div>
                    <div class="review-user">
                        <h5>${r.user}</h5>
                        <p>${r.time}</p>
                    </div>
                </div>
                <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                <p class="review-text">${r.text}</p>
                <span class="review-dish">${dish ? dish.emoji + ' ' + dish.name : '已下架'}</span>
            </div>
        `;
    }).join('');
}

// ===== 分类 =====
function renderCategoryGrid() {
    const container = document.getElementById('category-grid');
    container.innerHTML = CATEGORIES.map(c => `
        <div class="category-item" onclick="searchByCategory('${c.name}')">
            <div class="category-icon" style="background:${c.color}">${c.icon}</div>
            <span>${c.name}</span>
        </div>
    `).join('');
}

function searchByCategory(cat) {
    navigateTo('search');
    const input = document.getElementById('search-input');
    input.value = cat;
    handleSearch(cat);
}

// ===== 避雷指南 =====
function renderAvoidList() {
    const dishes = getMergedDishes().filter(d => d.rating < 3.5);
    const filtered = currentBuildingFilter === 'all' ? dishes : dishes.filter(d => d.canteen === currentBuildingFilter);
    const container = document.getElementById('avoid-list');
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">🎉</div><p>该食堂暂无踩雷菜品</p></div>';
        return;
    }
    container.innerHTML = filtered.map(d => renderDishCard(d)).join('');
}

// ===== 新品上架 =====
function renderNewDishes() {
    const dishes = getMergedDishes().filter(d => d.isNew);
    const filtered = currentBuildingFilter === 'all' ? dishes : dishes.filter(d => d.canteen === currentBuildingFilter);
    const container = document.getElementById('new-dish-list');
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">📭</div><p>该食堂暂无新品</p></div>';
        return;
    }
    container.innerHTML = filtered.map(d => renderDishCard(d)).join('');
}

// ===== 搜索 =====
function handleSearch(keyword) {
    const container = document.getElementById('search-results');
    if (!keyword || keyword.trim() === '') {
        container.innerHTML = '';
        return;
    }
    const dishes = getMergedDishes();
    const results = dishes.filter(d =>
        d.name.includes(keyword) ||
        d.canteen.includes(keyword) ||
        d.category.includes(keyword) ||
        d.tags.some(t => t.includes(keyword))
    );

    if (results.length === 0) {
        container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>没有找到「${keyword}」</p><p class="empty-hint">换个关键词试试</p></div>`;
        return;
    }

    container.innerHTML = results.map(d => renderDishCard(d)).join('');
}

function quickSearch(keyword) {
    const input = document.getElementById('search-input');
    input.value = keyword;
    handleSearch(keyword);
}

// ===== 菜品详情 =====
function openDishDetail(id) {
    const dishes = getMergedDishes();
    const dish = dishes.find(d => d.id === id);
    if (!dish) return;

    const allReviews = getAllReviews();
    const dishReviews = allReviews.filter(r => r.dishId === id);
    const worth = getWorthTag(dish);
    const queueStatus = getQueueStatus(dish);
    const isFav = loadFavorites().includes(id);

    const reviewHTML = dishReviews.length > 0
        ? dishReviews.map(r => {
            const isBad = r.rating <= 2;
            const displayName = isBad ? '匿名同学' : r.user;
            const displayAvatar = isBad ? '🎭' : r.avatar;
            const displayTime = r.time;
            const imagesHtml = r.images && r.images.length > 0
                ? `<div class="review-images">${r.images.map(img => `<img src="${img}" alt="评价图">`).join('')}</div>`
                : '';
            return `
                <div class="review-card" style="margin-bottom:10px">
                    <div class="review-header">
                        <div class="review-avatar">${displayAvatar}</div>
                        <div class="review-user">
                            <h5>${displayName}${r.isFirst ? ' 🏆首评' : ''}</h5>
                            <p>${displayTime}</p>
                        </div>
                    </div>
                    <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                    <p class="review-text">${r.text}</p>
                    ${imagesHtml}
                    ${r.tags && r.tags.length > 0 ? `<div style="margin-top:6px">${r.tags.map(t => `<span class="detail-tag" style="margin-right:4px">#${t}</span>`).join('')}</div>` : ''}
                </div>
            `;
        }).join('')
        : '<div class="empty-state"><div class="empty-icon">📝</div><p>还没有人评价，吃完来抢首评！</p></div>';

    // 建设性避雷建议（仅不值得排队时展示）
    const adviceHtml = worth.type === 'not-worth'
        ? `<div class="avoid-advice" style="margin-bottom:12px">${getAvoidAdvice(dish)}</div>`
        : '';

    document.getElementById('dish-detail-content').innerHTML = `
        <div class="detail-hero" style="background:linear-gradient(135deg, ${dish.imgColor}40, ${dish.imgColor}20)">${dish.emoji}</div>
        <div class="detail-body">
            <h2 class="detail-title">${dish.name}</h2>
            <div class="detail-meta">
                <span class="rating-big">★ ${dish.rating}</span>
                <span style="color:#999">${dish.reviews}条评价</span>
                <span class="price-big">¥${dish.price}</span>
            </div>
            <div class="detail-tags">
                <span class="worth-tag ${worth.type}">${worth.icon} ${worth.label}</span>
                ${queueStatus ? `<span class="worth-tag maybe">${queueStatus.text}</span>` : ''}
                ${dish.tags.map(t => `<span class="detail-tag">${t}</span>`).join('')}
            </div>
            <div class="algo-transparent">${getAlgoTransparentText(dish)}</div>
            ${adviceHtml}
            <p style="font-size:14px;color:#666;line-height:1.6;margin:12px 0 16px">${dish.desc}</p>
            <div class="detail-info-box">
                <h4>📍 菜品信息</h4>
                <div class="detail-info-row"><span>所在食堂</span><span>${dish.canteen}</span></div>
                <div class="detail-info-row"><span>窗口位置</span><span>${dish.window}</span></div>
                <div class="detail-info-row"><span>菜品分类</span><span>${dish.category}</span></div>
                <div class="detail-info-row"><span>人均价格</span><span>¥${dish.price}</span></div>
            </div>
            <div class="detail-actions">
                <button class="detail-btn ${isFav ? 'btn-primary' : 'btn-outline'}" onclick="toggleFavorite(${dish.id})">${isFav ? '✓ 已加入' : '🍽️ 加入想吃清单'}</button>
                <button class="detail-btn btn-primary" onclick="openReviewModal(${dish.id})">✍️ 写点评</button>
            </div>
            <div style="margin-top:10px">
                <button class="detail-btn btn-outline" style="width:100%" onclick="openCheckIn(${dish.id})">✅ 我去吃了（打卡）</button>
            </div>
            <div class="detail-reviews">
                <h4>💬 用户评价 (${dishReviews.length})</h4>
                ${reviewHTML}
            </div>
        </div>
    `;

    document.getElementById('dish-detail-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeDishDetail() {
    document.getElementById('dish-detail-modal').style.display = 'none';
    document.body.style.overflow = '';
}

// ===== 想吃清单 =====
function toggleFavorite(dishId) {
    const favs = loadFavorites();
    const idx = favs.indexOf(dishId);
    if (idx >= 0) {
        favs.splice(idx, 1);
        showToast('已从想吃清单移除');
    } else {
        favs.push(dishId);
        showToast('已加入想吃清单');
    }
    saveFavorites(favs);
    openDishDetail(dishId); // 刷新详情页按钮状态
    renderMineStats();
}

// ===== 打卡功能 =====
function openCheckIn(dishId) {
    const choice = confirm('你今天吃了什么？\n\n点击"确定"= 吃了这道菜\n点击"取消"= 选了同食堂其他菜');
    const checkIns = JSON.parse(localStorage.getItem('zhishi_checkins') || '{}');
    const today = new Date().toDateString();
    if (!checkIns[today]) checkIns[today] = [];
    checkIns[today].push({ dishId, ateThis: choice, time: Date.now() });
    localStorage.setItem('zhishi_checkins', JSON.stringify(checkIns));
    showToast(choice ? '打卡成功：吃了这道菜' : '打卡成功：选了其他菜');
}

// ===== 点评弹窗 =====
function openReviewModal(dishId) {
    currentReviewDishId = dishId;
    selectedRating = 0;
    selectedTags = [];
    reviewImages = [];

    const dishes = getMergedDishes();
    const dish = dishes.find(d => d.id === dishId);

    // 频率限制：每日5条
    if (getTodayReviewCount() >= 5) {
        showToast('今日评价已达上限（5条），明天再来吧');
        return;
    }

    document.getElementById('review-form').innerHTML = `
        <div class="review-form-body">
            <p style="font-size:14px;color:#666;margin-bottom:12px">为「${dish.emoji} ${dish.name}」打分</p>
            <div class="rating-selector" id="rating-selector">
                ${[1,2,3,4,5].map(n => `<span class="rating-star" data-rating="${n}" onclick="selectRating(${n})">★</span>`).join('')}
            </div>
            <label class="form-label">选择标签 <span style="color:#999;font-weight:400;font-size:12px">（必选至少1个，最多3个）</span></label>
            <div class="tag-selector" id="tag-selector">
                ${REVIEW_TAG_OPTIONS.map(t => `<span class="tag" onclick="toggleTag(this, '${t}')">${t}</span>`).join('')}
            </div>
            <label class="form-label">一句话评价 <span style="color:#999;font-weight:400;font-size:12px">（选填，≤200字）</span></label>
            <textarea class="form-textarea" id="review-text" placeholder="说说你的用餐体验..." maxlength="200"></textarea>
            <label class="form-label">上传图片 <span style="color:#999;font-weight:400;font-size:12px">（选填，最多3张）</span></label>
            <div class="review-image-upload" id="review-image-upload">
                <label class="image-add-btn" onclick="document.getElementById('review-image-input').click()">+</label>
                <input type="file" id="review-image-input" accept="image/*" multiple style="display:none" onchange="handleReviewImages(event)">
                <div class="image-preview-list" id="image-preview-list"></div>
            </div>
            <button class="submit-btn" onclick="submitReview()">发布点评</button>
            <p style="font-size:11px;color:#BBB;text-align:center;margin-top:10px">今日已评价 ${getTodayReviewCount()}/5 条</p>
        </div>
    `;

    closeDishDetail();
    document.getElementById('review-modal').style.display = 'flex';
}

function closeReviewModal() {
    document.getElementById('review-modal').style.display = 'none';
    document.body.style.overflow = '';
}

function selectRating(n) {
    selectedRating = n;
    document.querySelectorAll('#rating-selector .rating-star').forEach(star => {
        const val = parseInt(star.dataset.rating);
        star.classList.toggle('active', val <= n);
    });
}

function toggleTag(el, tag) {
    if (el.classList.contains('selected')) {
        el.classList.remove('selected');
        selectedTags = selectedTags.filter(t => t !== tag);
    } else {
        if (selectedTags.length >= 3) {
            showToast('最多选择3个标签');
            return;
        }
        el.classList.add('selected');
        selectedTags.push(tag);
    }
}

function handleReviewImages(event) {
    const files = Array.from(event.target.files);
    const remaining = 3 - reviewImages.length;
    if (files.length > remaining) {
        showToast(`最多上传3张图片`);
    }
    files.slice(0, remaining).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            reviewImages.push(e.target.result);
            renderImagePreviews();
        };
        reader.readAsDataURL(file);
    });
    event.target.value = '';
}

function renderImagePreviews() {
    const container = document.getElementById('image-preview-list');
    if (!container) return;
    container.innerHTML = reviewImages.map((img, i) => `
        <div class="image-preview-item">
            <img src="${img}" alt="评价图片">
            <span class="image-remove" onclick="removeReviewImage(${i})">×</span>
        </div>
    `).join('');
}

function removeReviewImage(index) {
    reviewImages.splice(index, 1);
    renderImagePreviews();
}

function submitReview() {
    if (selectedRating === 0) {
        showToast('请先打分');
        return;
    }
    if (selectedTags.length === 0) {
        showToast('请至少选择1个标签');
        return;
    }

    const text = document.getElementById('review-text').value.trim();

    // 敏感词过滤
    if (text && containsSensitiveWord(text)) {
        showToast('评价包含敏感词，请修改后提交');
        return;
    }

    const allReviews = getAllReviews();
    const dishReviews = allReviews.filter(r => r.dishId === currentReviewDishId);
    const isFirst = dishReviews.length === 0;

    const newReview = {
        id: Date.now(),
        dishId: currentReviewDishId,
        user: '我',
        avatar: '😊',
        rating: selectedRating,
        text: text || selectedTags.join('、'),
        time: '刚刚',
        daysAgo: 0,
        tags: selectedTags,
        images: reviewImages,
        isFirst: isFirst
    };

    // 持久化用户评价
    const userReviews = loadUserReviews();
    userReviews.unshift(newReview);
    saveUserReviews(userReviews);

    // 更新菜品评分（加权平均：旧总分+新评分 / 旧数量+1）
    const overrides = loadDishOverrides();
    const dish = DISHES.find(d => d.id === currentReviewDishId);
    const current = overrides[currentReviewDishId] || { rating: dish.rating, reviews: dish.reviews };
    const oldTotal = current.rating * current.reviews;
    const newReviews = current.reviews + 1;
    const newRating = Math.round((oldTotal + selectedRating) / newReviews * 10) / 10;
    overrides[currentReviewDishId] = { rating: newRating, reviews: newReviews };
    saveDishOverrides(overrides);

    // 今日评价计数+1
    incrementTodayReviewCount();

    closeReviewModal();
    showToast(isFirst ? '🏆 恭喜首评！评价发布成功' : '评价发布成功！');

    // 刷新所有列表
    renderDualRank(document.querySelector('.dual-tab-btn.active').dataset.tab);
    renderLatestReviews();
    renderAvoidList();
    renderNewDishes();
    renderMineStats();

    // 重新打开详情
    setTimeout(() => openDishDetail(currentReviewDishId), 300);
}

// ===== 我的页面 =====
function renderMineStats() {
    const userReviews = loadUserReviews();
    const favs = loadFavorites();
    document.getElementById('profile-stats').textContent = `已点评 ${userReviews.length} 道 · 想吃清单 ${favs.length} 道`;
    document.getElementById('my-review-count').textContent = userReviews.length;
    document.getElementById('my-fav-count').textContent = favs.length;
}

function renderMyReviews() {
    const userReviews = loadUserReviews();
    const dishes = getMergedDishes();
    const container = document.getElementById('my-reviews-list');

    if (userReviews.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">📝</div><p>还没有点评，去发现美食吧！</p></div>';
        return;
    }

    container.innerHTML = userReviews.map(r => {
        const dish = dishes.find(d => d.id === r.dishId);
        return `
            <div class="review-card" onclick="openDishDetail(${r.dishId})">
                <div class="review-header">
                    <div class="review-avatar">${r.avatar}</div>
                    <div class="review-user">
                        <h5>${r.user}${r.isFirst ? ' 🏆' : ''}</h5>
                        <p>${r.time}</p>
                    </div>
                </div>
                <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                <p class="review-text">${r.text}</p>
                ${r.tags && r.tags.length > 0 ? `<div style="margin-top:6px">${r.tags.map(t => `<span class="detail-tag" style="margin-right:4px">#${t}</span>`).join('')}</div>` : ''}
                <span class="review-dish">${dish ? dish.emoji + ' ' + dish.name : '已下架'}</span>
            </div>
        `;
    }).join('');
}

function renderFavorites() {
    const favs = loadFavorites();
    const dishes = getMergedDishes().filter(d => favs.includes(d.id));
    const container = document.getElementById('favorites-list');

    if (dishes.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">🍽️</div><p>想吃清单是空的，去逛逛榜单吧</p></div>';
        return;
    }

    container.innerHTML = dishes.map(d => renderDishCard(d)).join('');
}

// ===== 隐私弹窗 =====
function showPrivacy() {
    document.getElementById('privacy-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePrivacy() {
    document.getElementById('privacy-modal').style.display = 'none';
    document.body.style.overflow = '';
}

// ===== Toast =====
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2000);
}

// ===== 启动 =====
init();
