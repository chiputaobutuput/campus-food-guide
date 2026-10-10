// ===== 模拟数据 =====
const CanteENS = [
    { id: 1, name: '第一食堂', icon: '🏢', rating: 4.2, tags: ['种类丰富', '性价比高'] },
    { id: 2, name: '第二食堂', icon: '🏬', rating: 4.0, tags: ['环境好', '排队少'] },
    { id: 3, name: '清真食堂', icon: '🕌', rating: 4.5, tags: ['特色风味', '分量足'] },
    { id: 4, name: '风味小吃街', icon: '🍢', rating: 3.8, tags: ['种类多', '价格偏高'] },
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
    { id: 1, dishId: 1, user: '美食猎人', avatar: '🦊', rating: 5, text: '辣度刚好，食材很新鲜，自选模式太爽了！每次必加午餐肉和藕片', time: '2小时前', tags: ['麻辣', '量大'] },
    { id: 2, dishId: 4, user: '早起鸟', avatar: '🐦', rating: 5, text: '煎饼果子yyds！外皮酥脆，牛肉给得多，加个蛋简直完美，8块钱吃到撑', time: '3小时前', tags: ['便宜', '好吃'] },
    { id: 3, dishId: 9, user: '西北狼', avatar: '🐺', rating: 5, text: '冬天来一碗泡馍太幸福了，汤鲜味美，羊肉一点膻味都没有', time: '5小时前', tags: ['暖胃', '正宗'] },
    { id: 4, dishId: 3, user: '嗦粉达人', avatar: '🐱', rating: 4, text: '味道正，但酸笋可以再多放点，喜欢重口的可以让阿姨多加', time: '昨天', tags: ['重口味'] },
    { id: 5, dishId: 11, user: '踩雷大队', avatar: '💣', rating: 2, text: '芝士就薄薄一层，还不如直接叫焗饭，性价比太低了，不推荐', time: '昨天', tags: ['踩雷', '量少'] },
    { id: 6, dishId: 2, user: '米饭杀手', avatar: '🐯', rating: 5, text: '汤汁拌饭绝了！鸡肉很入味，土豆也炖烂了，14块管饱', time: '2天前', tags: ['下饭', '性价比'] },
    { id: 7, dishId: 12, user: '新疆小伙', avatar: '🐪', rating: 5, text: '新窗口的大盘鸡太惊艳了！皮带面泡在汤汁里，又筋道又入味', time: '2天前', tags: ['新品', '分量足'] },
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

// ===== 状态 =====
let currentBannerIndex = 0;
let bannerTimer = null;
let userReviews = []; // 用户添加的点评

// ===== 初始化 =====
function init() {
    renderBanner();
    renderCanteens();
    renderHotRank();
    renderLatestReviews();
    renderCategoryGrid();
    renderAvoidList();
    renderNewDishes();
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

    // 更新底部导航
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    // 非首页隐藏搜索入口
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.style.display = page === 'search' ? 'none' : 'flex';
    }
}

// ===== Banner轮播 =====
function getBannerDishes() {
    return [...DISHES].sort((a, b) => b.rating - a.rating).slice(0, 3);
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

    document.getElementById('banner-title').textContent = dish.name;
    document.getElementById('banner-desc').textContent = dish.canteen + ' · ¥' + dish.price + ' · ' + dish.desc;
    document.getElementById('banner-rating').innerHTML = '⭐ ' + dish.rating + ' | 💬 ' + dish.reviews + '条评价';

    document.querySelector('.banner-image').style.background = `linear-gradient(135deg, ${dish.imgColor} 0%, ${shadeColor(dish.imgColor, 30)} 100%)`;

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

function shadeColor(color, percent) {
    // Simple color shade function
    return color;
}

// ===== 食堂导航 =====
function renderCanteens() {
    const container = document.getElementById('canteen-grid');
    container.innerHTML = CanteENS.map(c => `
        <div class="canteen-card" onclick="showToast('${c.name} 共${DISHES.filter(d => d.canteen === c.name).length}道菜品')">
            <div class="canteen-icon">${c.icon}</div>
            <div class="canteen-info">
                <h3>${c.name}</h3>
                <p>⭐ ${c.rating} · ${c.tags.join(' · ')}</p>
            </div>
        </div>
    `).join('');
}

// ===== 热门排行 =====
function renderHotRank() {
    const dishes = [...DISHES].sort((a, b) => b.reviews - a.reviews).slice(0, 3);
    const container = document.getElementById('hot-rank-list');
    container.innerHTML = dishes.map((d, i) => {
        const rankClass = i === 0 ? 'top1' : i === 1 ? 'top2' : 'top3';
        return `
            <div class="rank-item" onclick="openDishDetail(${d.id})">
                <div class="rank-num ${rankClass}">${i + 1}</div>
                <div class="rank-thumb" style="background:${d.imgColor}20">${d.emoji}</div>
                <div class="rank-info">
                    <h4>${d.name}</h4>
                    <p>${d.canteen} · <span class="price-tag">¥${d.price}</span></p>
                </div>
                <div class="rank-score">
                    <div class="score-num">${d.rating}</div>
                    <div class="score-label">${d.reviews}评</div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== 排行榜全量 =====
function switchRankTab(type, el) {
    document.querySelectorAll('.rank-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    let sorted;
    if (type === 'rating') {
        sorted = [...DISHES].sort((a, b) => b.rating - a.rating);
    } else if (type === 'hot') {
        sorted = [...DISHES].sort((a, b) => b.reviews - a.reviews);
    } else if (type === 'value') {
        sorted = [...DISHES].sort((a, b) => (b.rating / b.price) - (a.rating / a.price));
    }

    const container = document.getElementById('rank-full-list');
    container.innerHTML = sorted.map((d, i) => {
        const rankClass = i === 0 ? 'top1' : i === 1 ? 'top2' : i === 2 ? 'top3' : '';
        const valueScore = (d.rating / d.price).toFixed(2);
        const subInfo = type === 'value' ? `性价比 ${valueScore}` : `${d.reviews}条评价`;
        return `
            <div class="rank-item" onclick="openDishDetail(${d.id})">
                <div class="rank-num ${rankClass}">${i + 1}</div>
                <div class="rank-thumb" style="background:${d.imgColor}20">${d.emoji}</div>
                <div class="rank-info">
                    <h4>${d.name}</h4>
                    <p>${d.canteen} · <span class="price-tag">¥${d.price}</span></p>
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
    const allReviews = [...REVIEWS, ...userReviews].sort((a, b) => b.id - a.id).slice(0, 3);
    const container = document.getElementById('latest-reviews');
    container.innerHTML = allReviews.map(r => {
        const dish = DISHES.find(d => d.id === r.dishId);
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
    const dishes = DISHES.filter(d => d.rating < 3.5);
    const container = document.getElementById('avoid-list');
    if (dishes.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">🎉</div><p>暂无踩雷菜品</p></div>';
        return;
    }
    container.innerHTML = dishes.map(d => `
        <div class="dish-card" onclick="openDishDetail(${d.id})">
            <div class="dish-card-img" style="background:${d.imgColor}20">${d.emoji}</div>
            <div class="dish-card-info">
                <span class="dish-card-tag tag-avoid">⚠️ 踩雷</span>
                <h4>${d.name}</h4>
                <div class="dish-card-meta">
                    <span class="rating">★${d.rating}</span>
                    <span class="price">¥${d.price}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== 新品上架 =====
function renderNewDishes() {
    const dishes = DISHES.filter(d => d.isNew);
    const container = document.getElementById('new-dish-list');
    if (dishes.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">📭</div><p>暂无新品</p></div>';
        return;
    }
    container.innerHTML = dishes.map(d => `
        <div class="dish-card" onclick="openDishDetail(${d.id})">
            <div class="dish-card-img" style="background:${d.imgColor}20">${d.emoji}</div>
            <div class="dish-card-info">
                <span class="dish-card-tag tag-new">🆕 新品</span>
                <h4>${d.name}</h4>
                <div class="dish-card-meta">
                    <span class="rating">★${d.rating}</span>
                    <span class="price">¥${d.price}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== 搜索 =====
function handleSearch(keyword) {
    const container = document.getElementById('search-results');
    if (!keyword || keyword.trim() === '') {
        container.innerHTML = '';
        return;
    }
    const results = DISHES.filter(d =>
        d.name.includes(keyword) ||
        d.canteen.includes(keyword) ||
        d.category.includes(keyword) ||
        d.tags.some(t => t.includes(keyword))
    );

    if (results.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><p>没有找到相关菜品</p></div>';
        return;
    }

    container.innerHTML = results.map(d => `
        <div class="dish-card" onclick="openDishDetail(${d.id})">
            <div class="dish-card-img" style="background:${d.imgColor}20">${d.emoji}</div>
            <div class="dish-card-info">
                <h4>${d.name}</h4>
                <div class="dish-card-meta">
                    <span class="rating">★${d.rating}</span>
                    <span class="price">¥${d.price}</span>
                </div>
                <p style="font-size:11px;color:#999;margin-top:4px">${d.canteen} · ${d.window}</p>
            </div>
        </div>
    `).join('');
}

function quickSearch(keyword) {
    const input = document.getElementById('search-input');
    input.value = keyword;
    handleSearch(keyword);
}

// ===== 菜品详情 =====
function openDishDetail(id) {
    const dish = DISHES.find(d => d.id === id);
    if (!dish) return;

    const dishReviews = [...REVIEWS, ...userReviews].filter(r => r.dishId === id);
    const reviewHTML = dishReviews.length > 0
        ? dishReviews.map(r => `
            <div class="review-card" style="margin-bottom:10px">
                <div class="review-header">
                    <div class="review-avatar">${r.avatar}</div>
                    <div class="review-user">
                        <h5>${r.user}</h5>
                        <p>${r.time}</p>
                    </div>
                </div>
                <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                <p class="review-text">${r.text}</p>
            </div>
        `).join('')
        : '<div class="empty-state"><div class="empty-icon">📝</div><p>还没有点评，来写第一条吧！</p></div>';

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
                ${dish.tags.map(t => `<span class="detail-tag">${t}</span>`).join('')}
            </div>
            <p style="font-size:14px;color:#666;line-height:1.6;margin-bottom:16px">${dish.desc}</p>
            <div class="detail-info-box">
                <h4>📍 菜品信息</h4>
                <div class="detail-info-row"><span>所在食堂</span><span>${dish.canteen}</span></div>
                <div class="detail-info-row"><span>窗口位置</span><span>${dish.window}</span></div>
                <div class="detail-info-row"><span>菜品分类</span><span>${dish.category}</span></div>
                <div class="detail-info-row"><span>人均价格</span><span>¥${dish.price}</span></div>
            </div>
            <div class="detail-actions">
                <button class="detail-btn btn-outline" onclick="showToast('已收藏')">⭐ 收藏</button>
                <button class="detail-btn btn-primary" onclick="openReviewModal(${dish.id})">✍️ 写点评</button>
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

// ===== 点评弹窗 =====
let currentReviewDishId = null;
let selectedRating = 0;
let selectedTags = [];

function openReviewModal(dishId) {
    currentReviewDishId = dishId;
    selectedRating = 0;
    selectedTags = [];

    const dish = DISHES.find(d => d.id === dishId);
    const tagOptions = ['好吃', '量大', '便宜', '踩雷', '下饭', '重口味', '清淡', '排队多', '出餐快'];

    document.getElementById('review-form').innerHTML = `
        <div class="review-form-body">
            <p style="font-size:14px;color:#666;margin-bottom:16px">为「${dish.emoji} ${dish.name}」打分</p>
            <div class="rating-selector" id="rating-selector">
                ${[1,2,3,4,5].map(n => `<span class="rating-star" data-rating="${n}" onclick="selectRating(${n})">★</span>`).join('')}
            </div>
            <label class="form-label">点评内容</label>
            <textarea class="form-textarea" id="review-text" placeholder="分享你的用餐体验..." maxlength="200"></textarea>
            <label class="form-label">添加标签</label>
            <div class="tag-selector" id="tag-selector">
                ${tagOptions.map(t => `<span class="tag" onclick="toggleTag(this, '${t}')">${t}</span>`).join('')}
            </div>
            <button class="submit-btn" onclick="submitReview()">发布点评</button>
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
    el.classList.toggle('selected');
    if (el.classList.contains('selected')) {
        if (!selectedTags.includes(tag)) selectedTags.push(tag);
    } else {
        selectedTags = selectedTags.filter(t => t !== tag);
    }
}

function submitReview() {
    if (selectedRating === 0) {
        showToast('请先打分');
        return;
    }
    const text = document.getElementById('review-text').value.trim();
    if (!text) {
        showToast('请填写点评内容');
        return;
    }

    const newReview = {
        id: Date.now(),
        dishId: currentReviewDishId,
        user: '我',
        avatar: '😊',
        rating: selectedRating,
        text: text + (selectedTags.length > 0 ? `（${selectedTags.join('、')}）` : ''),
        time: '刚刚',
        tags: selectedTags
    };

    userReviews.unshift(newReview);

    // 更新菜品评价数和评分
    const dish = DISHES.find(d => d.id === currentReviewDishId);
    if (dish) {
        dish.reviews += 1;
        // 简单更新评分
        dish.rating = ((dish.rating * (dish.reviews - 1) + selectedRating) / dish.reviews).toFixed(1);
        dish.rating = parseFloat(dish.rating);
    }

    closeReviewModal();
    showToast('点评发布成功！');
    renderLatestReviews();
    renderHotRank();
    renderAvoidList();

    // 重新打开详情
    setTimeout(() => openDishDetail(currentReviewDishId), 300);
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
