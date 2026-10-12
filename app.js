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
    { id: 15, name: '老式锅包肉', canteen: '第一食堂', window: 'A-09', price: 15, rating: 3.2, reviews: 22, emoji: '🥩', category: '主食', tags: ['口味波动', '偏甜'], desc: '以前口碑不错，近期评价一般', isNew: false, imgColor: '#8D6E63' },
];

const REVIEWS = [
    { id: 1, dishId: 1, user: '美食猎人', avatar: '🦊', rating: 5, text: '辣度刚好，食材很新鲜，自选模式太爽了！每次必加午餐肉和藕片', time: '2小时前', daysAgo: 0, tags: ['麻辣', '量大'], likes: 18 },
    { id: 2, dishId: 4, user: '早起鸟', avatar: '🐦', rating: 5, text: '煎饼果子yyds！外皮酥脆，牛肉给得多，加个蛋简直完美，8块钱吃到撑', time: '3小时前', daysAgo: 0, tags: ['便宜', '好吃'], likes: 24 },
    { id: 3, dishId: 9, user: '西北狼', avatar: '🐺', rating: 5, text: '冬天来一碗泡馍太幸福了，汤鲜味美，羊肉一点膻味都没有', time: '5小时前', daysAgo: 1, tags: ['暖胃', '正宗'], likes: 15 },
    { id: 4, dishId: 3, user: '嗦粉达人', avatar: '🐱', rating: 4, text: '味道正，但酸笋可以再多放点，喜欢重口的可以让阿姨多加', time: '昨天', daysAgo: 1, tags: ['重口味'], likes: 9 },
    { id: 5, dishId: 11, user: '匿名同学', avatar: '💣', rating: 2, text: '芝士就薄薄一层，还不如直接叫焗饭，性价比太低了，不推荐', time: '昨天', daysAgo: 1, tags: ['踩雷', '量少'], likes: 7 },
    { id: 6, dishId: 2, user: '米饭杀手', avatar: '🐯', rating: 5, text: '汤汁拌饭绝了！鸡肉很入味，土豆也炖烂了，14块管饱', time: '2天前', daysAgo: 2, tags: ['下饭', '性价比'], likes: 21 },
    { id: 7, dishId: 12, user: '新疆小伙', avatar: '🐪', rating: 5, text: '新窗口的大盘鸡太惊艳了！皮带面泡在汤汁里，又筋道又入味', time: '2天前', daysAgo: 2, tags: ['新品', '分量足'], likes: 16 },
    { id: 8, dishId: 11, user: '匿名同学', avatar: '💣', rating: 1, text: '今天又去试了一次，还是很难吃，芝士根本不拉丝', time: '3天前', daysAgo: 3, tags: ['踩雷', '口味差'], likes: 12 },
    { id: 9, dishId: 15, user: '匿名同学', avatar: '🎭', rating: 2, text: '锅包肉太甜了，外皮也不脆，跟以前比差远了', time: '10天前', daysAgo: 10, tags: ['踩雷', '偏甜'], likes: 5 },
    { id: 10, dishId: 15, user: '东北老铁', avatar: '🐻', rating: 4, text: '上次吃还行，酸甜口，就是偶尔发挥不稳定', time: '12天前', daysAgo: 12, tags: ['酸甜'], likes: 6 },
    { id: 11, dishId: 15, user: '匿名同学', avatar: '🎭', rating: 2, text: '面衣太厚，肉很少，咬一口全是面糊', time: '15天前', daysAgo: 15, tags: ['踩雷', '量少'], likes: 4 },
    // 补充评价，使热门菜品近7天评价数≥3（满足好评榜门槛）
    { id: 12, dishId: 1, user: '无辣不欢', avatar: '🌶️', rating: 5, text: '麻辣香锅永远的神，食材新鲜分量足，强烈推荐给爱吃辣的同学', time: '4小时前', daysAgo: 0, tags: ['麻辣', '量大'], likes: 11 },
    { id: 13, dishId: 1, user: '吃货小王', avatar: '🐼', rating: 5, text: '自选模式很自由，丸子和蔬菜都很新鲜，辣度可调很贴心', time: '1天前', daysAgo: 1, tags: ['口味好'], likes: 8 },
    { id: 14, dishId: 4, user: '早餐达人', avatar: '🥐', rating: 5, text: '每天早上必吃的煎饼，外酥里嫩，牛肉给得很实在，性价比超高', time: '6小时前', daysAgo: 0, tags: ['便宜', '性价比高'], likes: 13 },
    { id: 15, dishId: 4, user: '夜猫子', avatar: '🦉', rating: 4, text: '味道不错就是排队有点久，建议早点去，加蛋加肠更满足', time: '1天前', daysAgo: 1, tags: ['排队久'], likes: 5 },
    { id: 16, dishId: 2, user: '干饭人', avatar: '🍚', rating: 5, text: '黄焖鸡米饭太下饭了，汤汁浓郁，鸡肉嫩，土豆软，强烈推荐', time: '3天前', daysAgo: 3, tags: ['下饭', '口味好'], likes: 9 },
    { id: 17, dishId: 2, user: '柠檬茶', avatar: '🍋', rating: 4, text: '整体不错，就是偶尔鸡肉有点柴，但汤汁拌饭真的绝了', time: '4天前', daysAgo: 4, tags: ['下饭'], likes: 4 },
    { id: 18, dishId: 9, user: '回民街常客', avatar: '🕌', rating: 5, text: '泡馍很正宗，汤浓肉烂，糖蒜配上绝了，冬天吃一碗全身暖', time: '3天前', daysAgo: 3, tags: ['暖胃', '正宗'], likes: 7 },
    { id: 19, dishId: 9, user: '面食爱好者', avatar: '🍜', rating: 5, text: '羊肉给得足，没有膻味，汤头浓郁，分量大到吃不完', time: '4天前', daysAgo: 4, tags: ['份量足'], likes: 6 },
    { id: 20, dishId: 12, user: '大盘鸡爱好者', avatar: '🍗', rating: 5, text: '新品大盘鸡太惊艳，鸡肉入味土豆绵软，皮带面吸满汤汁，必点', time: '3天前', daysAgo: 3, tags: ['新品', '够辣'], likes: 10 },
    { id: 21, dishId: 12, user: '辣妹子', avatar: '🌶️', rating: 4, text: '味道很正，分量足，就是有点辣不能吃辣的同学慎点', time: '4天前', daysAgo: 4, tags: ['够辣'], likes: 3 },
    { id: 22, dishId: 6, user: '酸菜鱼控', avatar: '🐟', rating: 5, text: '酸菜鱼粉太鲜美了，鱼片滑嫩，酸菜爽脆，汤都能喝完', time: '2天前', daysAgo: 2, tags: ['鲜美', '开胃'], likes: 8 },
    { id: 23, dishId: 6, user: '粉面达人', avatar: '🍜', rating: 4, text: '鱼片新鲜，汤底好喝，就是分量稍少，男生可能不够吃', time: '3天前', daysAgo: 3, tags: ['鲜美'], likes: 4 },
    { id: 24, dishId: 6, user: '美食评论家', avatar: '📝', rating: 5, text: '性价比很高的一碗粉，酸菜很正宗，值得推荐', time: '5天前', daysAgo: 5, tags: ['性价比高'], likes: 5 },
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

// 标签池（按星级分正负向，发评价用）
const REVIEW_TAG_POOLS = {
    positive: ['口味好', '份量足', '性价比高', '回购N次', '招牌', '下饭神器', '新品试吃', '暖胃'],
    negative: ['踩雷', '排队久', '出餐慢', '量少', '口味差', '价格贵', '不推荐', '偏甜'],
    neutral: ['一般', '还行', '中规中矩', '口味波动', '中规中矩']
};

function getTagPoolByRating(rating) {
    if (rating >= 4) return { pool: REVIEW_TAG_POOLS.positive, type: 'positive' };
    if (rating <= 2) return { pool: REVIEW_TAG_POOLS.negative, type: 'negative' };
    return { pool: REVIEW_TAG_POOLS.neutral, type: 'neutral' };
}

// 敏感词库（模拟内容安全）
const SENSITIVE_WORDS = ['傻逼', '草泥马', '去死', '垃圾人', '废物', '脑残'];

// ===== localStorage 持久化 =====
const STORAGE_KEYS = {
    REVIEWS: 'zhishi_reviews',
    DISHES: 'zhishi_dishes',
    USER_DISHES: 'zhishi_user_dishes',
    FAVORITES: 'zhishi_favorites',
    REVIEW_COUNT_TODAY: 'zhishi_review_count_today',
    REVIEW_COUNT_DATE: 'zhishi_review_count_date',
    LIKES: 'zhishi_likes',
    PROFILE: 'zhishi_profile'
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

function loadUserDishes() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DISHES) || '[]');
    } catch { return []; }
}

function saveUserDishes(dishes) {
    localStorage.setItem(STORAGE_KEYS.USER_DISHES, JSON.stringify(dishes));
}

function loadFavorites() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || '[]');
    } catch { return []; }
}

function saveFavorites(favs) {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
}

// ===== 点赞 =====
function loadLikedReviews() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.LIKES) || '[]');
    } catch { return []; }
}

function saveLikedReviews(ids) {
    localStorage.setItem(STORAGE_KEYS.LIKES, JSON.stringify(ids));
}

// ===== 用户资料 =====
const DEFAULT_PROFILE = { avatar: '😊', name: '知食探索者' };
const AVATAR_EMOJIS = ['😊','😄','😍','🤩','😎','🥳','🤓','😋','😺','🐱','🐶','🐼','🦊','🐯','🐻','🐨','🐰','🐸','🐵','🦁','🐮','🐷','🐙','🦄','🍔','🍕','🍜','🍣','🍩','🍪','🎮','⚽','🎵','⭐','🌈','🔥'];

function loadProfile() {
    try {
        const p = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROFILE) || 'null');
        if (p && p.avatar && p.name) return p;
    } catch {}
    return { ...DEFAULT_PROFILE };
}

function saveProfile(profile) {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
}

function applyProfileToCard() {
    const p = loadProfile();
    const avatarEl = document.getElementById('profile-avatar');
    const nameEl = document.getElementById('profile-name');
    if (avatarEl) avatarEl.textContent = p.avatar;
    if (nameEl) nameEl.textContent = p.name;
}

function getReviewLikeCount(review) {
    return review.likes || 0;
}

function hasLikedReview(reviewId) {
    return loadLikedReviews().includes(reviewId);
}

function isOwnReview(review) {
    return review.user === '我';
}

// ===== 图片前端压缩（≤300KB，限1张）=====
function compressImage(file, maxSizeKB = 300) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');
                let width = img.width;
                let height = img.height;
                // 限制最大边长 1280
                const maxDim = 1280;
                if (width > maxDim || height > maxDim) {
                    if (width > height) {
                        height = Math.round(height * maxDim / width);
                        width = maxDim;
                    } else {
                        width = Math.round(width * maxDim / height);
                        height = maxDim;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                // 逐步降低质量直到 ≤ maxSizeKB
                let quality = 0.8;
                let result = canvas.toDataURL('image/jpeg', quality);
                while (result.length > maxSizeKB * 1024 && quality > 0.2) {
                    quality -= 0.1;
                    result = canvas.toDataURL('image/jpeg', quality);
                }
                resolve(result);
            };
            img.onerror = () => resolve(e.target.result);
            img.src = e.target.result;
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
    });
}

// 获取合并后的菜品数据（基础数据 + 用户评分覆盖）
function getMergedDishes() {
    const overrides = loadDishOverrides();
    const base = DISHES.map(d => {
        if (overrides[d.id]) {
            return { ...d, ...overrides[d.id] };
        }
        return d;
    });
    // 合并用户自建菜品（用户发评价时新增的菜品）
    const userDishes = loadUserDishes().map(d => {
        if (overrides[d.id]) {
            return { ...d, ...overrides[d.id] };
        }
        return d;
    });
    return [...base, ...userDishes];
}

function getAllReviews() {
    return [...REVIEWS, ...loadUserReviews()];
}

// ===== 推荐度标签算法（V1基于评分，V2升级为"值得排队"）=====
function getWorthTag(dish) {
    const recentCount = getAllReviews().filter(r => r.dishId === dish.id && (r.daysAgo || 0) <= 7).length;
    if (recentCount < 3) {
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

// 算法透明化文案（近7天口径）
function getAlgoTransparentText(dish) {
    const worth = getWorthTag(dish);
    const recentCount = getAllReviews().filter(r => r.dishId === dish.id && (r.daysAgo || 0) <= 7).length;
    if (worth.type === 'none') {
        return `近7天仅 ${recentCount} 条评价（不足3条），暂不判定推荐度`;
    }
    return `近7天 ${recentCount} 条评价，均分 ${dish.rating} → ${worth.label}`;
}

// ===== 排队状态提示（V1基于评价标签）=====
function getQueueStatus(dish) {
    const allReviews = getAllReviews().filter(r => r.dishId === dish.id);
    const recent = allReviews.filter(r => (r.daysAgo || 0) <= 7);
    if (recent.length < 3) return null;
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
    renderNewDishes();
    renderMineStats();
    // 初始化全维度排行（默认评分最高）
    const firstRankTab = document.querySelector('.rank-tab');
    if (firstRankTab) switchRankTab('rating', firstRankTab);
    startBannerAutoPlay();
}

// ===== 导航 =====
let searchReturnPage = 'home';
function navigateTo(page) {
    // 进入搜索页前，记录来源页（用于"取消"返回）
    if (page === 'search') {
        const pages = document.querySelectorAll('.page');
        for (const p of pages) {
            if (p.style.display !== 'none' && p.id !== 'page-search') {
                searchReturnPage = p.id.replace('page-', '');
                break;
            }
        }
    }

    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    const target = document.getElementById('page-' + page);
    if (target) {
        target.style.display = 'block';
        // 切回页面顶部（scrollIntoView 在切换 display 时不可靠）
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.style.display = page === 'search' ? 'none' : 'flex';
    }

    // 进入搜索页时清空输入框与结果
    if (page === 'search') {
        const input = document.getElementById('search-input');
        if (input) input.value = '';
        const results = document.getElementById('search-results');
        if (results) results.innerHTML = '';
    }

    // 页面进入时刷新特定内容
    if (page === 'mine') renderMineStats();
    if (page === 'myreviews') renderMyReviews();
    if (page === 'favorites') renderFavorites();
    if (page === 'discover') {
        renderCategoryGrid();
        const activeTab = document.querySelector('.rank-tab.active');
        if (activeTab) {
            const type = activeTab.getAttribute('onclick').match(/'(\w+)'/)[1];
            switchRankTab(type, activeTab);
        }
    }
    if (page === 'avoid') {
        renderNewDishes();
        renderLatestReviews();
    }
    if (page === 'review') {
        renderReviewForm();
    }
}

function cancelSearch() {
    navigateTo(searchReturnPage);
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

// ===== 发评价流程（自由输入菜品） =====
const DISH_EMOJIS = ['🍽️','🍲','🍛','🍜','🍝','🍱','🍚','🍗','🍖','🥩','🐟','🍤','🥟','🥞','🍳','🥗','🍔','🌮','🥣','🍙'];
let selectedDishEmoji = '🍽️';

function renderReviewForm() {
    // 填充食堂下拉选项
    const select = document.getElementById('review-canteen-select');
    if (select) {
        select.innerHTML = '<option value="">请选择食堂</option>' +
            CANTEENS.map(c => `<option value="${c.name}">${c.icon} ${c.name}</option>`).join('');
    }
    // 渲染菜品图标选择器
    const emojiPicker = document.getElementById('review-emoji-picker');
    if (emojiPicker) {
        selectedDishEmoji = '🍽️';
        emojiPicker.innerHTML = DISH_EMOJIS.map(e =>
            `<span class="emoji-option ${e === selectedDishEmoji ? 'selected' : ''}" onclick="selectDishEmoji('${e}', this)">${e}</span>`
        ).join('');
    }
    // 清空输入框
    const nameInput = document.getElementById('review-dish-name');
    const windowInput = document.getElementById('review-window');
    const priceInput = document.getElementById('review-price');
    if (nameInput) nameInput.value = '';
    if (windowInput) windowInput.value = '';
    if (priceInput) priceInput.value = '';
}

function selectDishEmoji(emoji, el) {
    selectedDishEmoji = emoji;
    document.querySelectorAll('#review-emoji-picker .emoji-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
}

function startReviewFromForm() {
    const name = document.getElementById('review-dish-name').value.trim();
    const canteen = document.getElementById('review-canteen-select').value;
    const window = document.getElementById('review-window').value.trim();
    const priceVal = document.getElementById('review-price').value;

    if (!name) { showToast('请输入菜品名称'); return; }
    if (!canteen) { showToast('请选择食堂'); return; }
    if (!window) { showToast('请输入窗口'); return; }

    const price = priceVal ? parseInt(priceVal) : 0;

    // 查找是否已存在同名同食堂同窗口的菜品
    const dishes = getMergedDishes();
    let dish = dishes.find(d => d.name === name && d.canteen === canteen && d.window === window);

    if (!dish) {
        // 创建新菜品
        const newId = Date.now();
        // 根据图标索引分配一个配色
        const colorPalette = ['#FF6B35','#FFA500','#8BC344','#FFD700','#FF7043','#26A69A','#E53935','#7E57C2','#FF8C00','#D32F2F','#FFCA28','#C62828','#FF5252','#66BB6A','#8D6E63','#42A5F5','#AB47BC','#26C6DA','#EC407A','#90A4AE'];
        const idx = DISH_EMOJIS.indexOf(selectedDishEmoji);
        dish = {
            id: newId,
            name: name,
            canteen: canteen,
            window: window,
            price: price,
            rating: 0,
            reviews: 0,
            emoji: selectedDishEmoji,
            category: '其他',
            tags: [],
            desc: '',
            isNew: false,
            imgColor: idx >= 0 ? colorPalette[idx] : '#90A4AE'
        };
        const userDishes = loadUserDishes();
        userDishes.push(dish);
        saveUserDishes(userDishes);
    }

    openReviewModal(dish.id);
}

// 食堂详情页
let currentCanteenTab = 'all';
function openCanteenDetail(canteenId) {
    const canteen = CANTEENS.find(c => c.id === canteenId);
    const dishes = getMergedDishes().filter(d => d.canteen === canteen.name);
    currentCanteenTab = 'all';

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
        <div class="canteen-tabs">
            <button class="canteen-tab active" data-ctab="all" onclick="switchCanteenTab('all', this)">全部菜品</button>
            <button class="canteen-tab" data-ctab="avoid" onclick="switchCanteenTab('avoid', this)">避雷库</button>
            <button class="canteen-tab" data-ctab="new" onclick="switchCanteenTab('new', this)">新品</button>
        </div>
        <div id="canteen-dish-list"></div>
    `;
    renderCanteenDishes(canteen.name);
    navigateTo('canteen');
}

function switchCanteenTab(tab, el) {
    document.querySelectorAll('.canteen-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    currentCanteenTab = tab;
    const canteenName = document.querySelector('.canteen-detail-header h2').textContent;
    renderCanteenDishes(canteenName);
}

function renderCanteenDishes(canteenName) {
    let dishes = getMergedDishes().filter(d => d.canteen === canteenName);
    if (currentCanteenTab === 'avoid') {
        dishes = dishes.filter(d => d.rating < 3.5 && d.reviews >= 5);
    } else if (currentCanteenTab === 'new') {
        dishes = dishes.filter(d => d.isNew);
    } else {
        dishes = dishes.sort((a, b) => b.rating - a.rating);
    }
    const container = document.getElementById('canteen-dish-list');
    if (!container) return;
    if (dishes.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">🍽️</div><p>该分类下暂无菜品</p></div>';
        return;
    }
    container.innerHTML = `<div class="dish-list">${dishes.map(d => renderDishCard(d)).join('')}</div>`;
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
        // 好评榜：评分≥4.5 且近7天评价数≥3
        list = filtered.filter(d => {
            if (d.rating < 4.5) return false;
            const recentCount = getAllReviews().filter(r => r.dishId === d.id && (r.daysAgo || 0) <= 7).length;
            return recentCount >= 3;
        }).sort((a, b) => b.rating - a.rating)
          .slice(0, 10);
    } else {
        // 差评榜：评分<3.5 且近7天有差评（时效性预警）
        list = filtered.filter(d => {
            if (d.rating >= 3.5) return false;
            const recentBad = getAllReviews().filter(r => r.dishId === d.id && r.rating <= 2 && (r.daysAgo || 0) <= 7);
            return recentBad.length > 0;
        }).sort((a, b) => a.rating - b.rating).slice(0, 5);
        // 存疑区：评分<3.5 但近7天无差评
        doubtfulList = filtered.filter(d => {
            if (d.rating >= 3.5) return false;
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
    // 同步刷新受楼栋筛选影响的模块
    const activeRankTab = document.querySelector('.rank-tab.active');
    if (activeRankTab) {
        const type = activeRankTab.getAttribute('onclick').match(/'(\w+)'/)[1];
        switchRankTab(type, activeRankTab);
    }
    renderNewDishes();
}

// ===== 排行榜全量 =====
function switchRankTab(type, el) {
    document.querySelectorAll('.rank-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    const dishes = getMergedDishes();
    // 楼栋筛选全局应用
    const filtered = currentBuildingFilter === 'all' ? dishes : dishes.filter(d => d.canteen === currentBuildingFilter);
    let sorted;
    if (type === 'rating') {
        sorted = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (type === 'hot') {
        sorted = [...filtered].sort((a, b) => b.reviews - a.reviews);
    } else if (type === 'value') {
        // 性价比：排除 price=0 的菜品，按 rating/price 降序
        sorted = [...filtered].filter(d => d.price > 0).sort((a, b) => (b.rating / b.price) - (a.rating / a.price));
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
        const isBad = r.rating <= 2;
        const displayName = isBad ? '匿名同学' : r.user;
        const displayAvatar = isBad ? '🎭' : r.avatar;
        const liked = hasLikedReview(r.id);
        const own = isOwnReview(r);
        const likeCount = getReviewLikeCount(r);
        // 差评不展示点赞数，仅用于排序权重
        const likeDisplay = isBad ? '' : `${likeCount}`;
        const likeBtn = own
            ? `<button class="review-like disabled" title="不能给自己的评价点赞">♡ ${likeDisplay}</button>`
            : `<button class="review-like ${liked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLike(${r.id})">${liked ? '♥' : '♡'} ${likeDisplay}</button>`;
        return `
            <div class="review-card" onclick="openDishDetail(${r.dishId})">
                <div class="review-header">
                    <div class="review-avatar">${displayAvatar}</div>
                    <div class="review-user">
                        <h5>${displayName}${r.isFirst ? ' <span class="first-review-badge">首评</span>' : ''}</h5>
                        <p>${r.time}</p>
                    </div>
                </div>
                <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                <p class="review-text">${r.text}</p>
                <span class="review-dish">${dish ? dish.emoji + ' ' + dish.name : '已下架'}</span>
                <div class="review-footer">
                    <span></span>
                    ${likeBtn}
                </div>
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

    // 排序：评分降序，相同评分按评价数降序
    results.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
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
            const liked = hasLikedReview(r.id);
            const own = isOwnReview(r);
            const likeCount = getReviewLikeCount(r);
            const likeDisplay = isBad ? '' : `${likeCount}`;
            const likeBtn = own
                ? `<button class="review-like disabled" title="不能给自己的评价点赞">♡ ${likeDisplay}</button>`
                : `<button class="review-like ${liked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLike(${r.id}); openDishDetail(${id})">${liked ? '♥' : '♡'} ${likeDisplay}</button>`;
            const imagesHtml = r.images && r.images.length > 0
                ? `<div class="review-images">${r.images.map(img => `<img src="${img}" alt="评价图">`).join('')}</div>`
                : '';
            return `
                <div class="review-card" style="margin-bottom:10px">
                    <div class="review-header">
                        <div class="review-avatar">${displayAvatar}</div>
                        <div class="review-user">
                            <h5>${displayName}${r.isFirst ? ' <span class="first-review-badge">首评</span>' : ''}</h5>
                            <p>${displayTime}</p>
                        </div>
                    </div>
                    <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                    <p class="review-text">${r.text}</p>
                    ${imagesHtml}
                    ${r.tags && r.tags.length > 0 ? `<div style="margin-top:6px">${r.tags.map(t => `<span class="detail-tag" style="margin-right:4px">#${t}</span>`).join('')}</div>` : ''}
                    <div class="review-footer">
                        <span></span>
                        ${likeBtn}
                    </div>
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
                <span class="price-big">¥${dish.price}<span class="price-report" onclick="event.stopPropagation(); reportPrice(${dish.id})">价格不准？</span></span>
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

// ===== 点赞（每人每评仅1次，不可给自己点赞）=====
function toggleLike(reviewId) {
    const allReviews = getAllReviews();
    const review = allReviews.find(r => r.id === reviewId);
    if (!review) return;
    if (isOwnReview(review)) {
        showToast('不能给自己的评价点赞');
        return;
    }
    const liked = loadLikedReviews();
    const idx = liked.indexOf(reviewId);
    if (idx >= 0) {
        liked.splice(idx, 1);
        // 减少点赞数
        if (review.likes) review.likes -= 1;
    } else {
        liked.push(reviewId);
        review.likes = (review.likes || 0) + 1;
    }
    saveLikedReviews(liked);
    // 持久化点赞数变更（仅用户评价写入localStorage，种子评价仅内存更新）
    const userReviews = loadUserReviews();
    const uIdx = userReviews.findIndex(r => r.id === reviewId);
    if (uIdx >= 0) {
        userReviews[uIdx].likes = review.likes;
        saveUserReviews(userReviews);
    }
    renderLatestReviews();
}

// ===== 价格上报 =====
function reportPrice(dishId) {
    const newPrice = prompt('请输入你看到的实际价格（元）：');
    if (newPrice === null) return;
    const price = parseFloat(newPrice);
    if (isNaN(price) || price < 0) {
        showToast('请输入有效价格');
        return;
    }
    const overrides = loadDishOverrides();
    const current = overrides[dishId] || {};
    overrides[dishId] = { ...current, price: price };
    saveDishOverrides(overrides);
    showToast('价格已上报，感谢反馈！');
    openDishDetail(dishId);
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

// ===== 点评弹窗 =====
function openReviewModal(dishId) {
    currentReviewDishId = dishId;
    selectedRating = 0;
    selectedTags = [];
    reviewImages = [];

    const dishes = getMergedDishes();
    const dish = dishes.find(d => d.id === dishId);

    document.getElementById('review-form').innerHTML = `
        <div class="review-form-body">
            <p style="font-size:14px;color:#666;margin-bottom:12px">为「${dish.emoji} ${dish.name}」打分</p>
            <div class="rating-selector" id="rating-selector">
                ${[1,2,3,4,5].map(n => `<span class="rating-star" data-rating="${n}" onclick="selectRating(${n})">★</span>`).join('')}
            </div>
            <label class="form-label">选择标签 <span style="color:#999;font-weight:400;font-size:12px">（根据星级动态展示，选填，最多3个）</span></label>
            <div class="tag-selector" id="tag-selector"></div>
            <label class="form-label">评价内容 <span style="color:#999;font-weight:400;font-size:12px">（至少15字，≤200字）</span></label>
            <textarea class="form-textarea" id="review-text" placeholder="说说你的用餐体验，至少15个字..." maxlength="200"></textarea>
            <label class="form-label">上传图片 <span style="color:#999;font-weight:400;font-size:12px">（选填，限1张，自动压缩）</span></label>
            <div class="review-image-upload" id="review-image-upload">
                <label class="image-add-btn" id="image-add-label" onclick="document.getElementById('review-image-input').click()">+</label>
                <input type="file" id="review-image-input" accept="image/*" style="display:none" onchange="handleReviewImages(event)">
                <div class="image-preview-list" id="image-preview-list"></div>
            </div>
            <button class="submit-btn" onclick="submitReview()">发布点评</button>
        </div>
    `;
    // 初始渲染空标签池（未打分时不展示）
    renderTagSelector(0);

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
    // 根据星级动态切换标签池，清空已选标签
    selectedTags = [];
    renderTagSelector(n);
}

// 根据星级渲染对应正负向标签池
function renderTagSelector(rating) {
    const container = document.getElementById('tag-selector');
    if (!container) return;
    if (rating === 0) {
        container.innerHTML = '<span style="color:#BBB;font-size:13px">请先打分，再选择标签</span>';
        return;
    }
    const { pool, type } = getTagPoolByRating(rating);
    container.innerHTML = pool.map(t => {
        const selected = selectedTags.includes(t);
        return `<span class="tag ${type} ${selected ? 'selected' : ''}" onclick="toggleTag(this, '${t}')">${t}</span>`;
    }).join('');
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
    const file = event.target.files[0];
    if (!file) return;
    if (reviewImages.length >= 1) {
        showToast('最多上传1张图片');
        return;
    }
    compressImage(file, 300).then(compressed => {
        if (compressed) {
            reviewImages = [compressed];
            renderImagePreviews();
            // 隐藏上传按钮
            const addLabel = document.getElementById('image-add-label');
            if (addLabel) addLabel.style.display = 'none';
        } else {
            showToast('图片处理失败');
        }
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
    const addLabel = document.getElementById('image-add-label');
    if (addLabel) addLabel.style.display = 'flex';
}

function submitReview() {
    if (selectedRating === 0) {
        showToast('请先打分');
        return;
    }

    const text = document.getElementById('review-text').value.trim();

    // 提交门槛：至少15字（标签/图片为有效评价加分项，非提交必填）
    if (text.length < 15) {
        showToast('评价内容至少15个字');
        return;
    }

    // 敏感词过滤
    if (containsSensitiveWord(text)) {
        showToast('评价包含敏感词，请修改后提交');
        return;
    }

    const allReviews = getAllReviews();
    const dishReviews = allReviews.filter(r => r.dishId === currentReviewDishId);
    const isFirst = dishReviews.length === 0;

    const profile = loadProfile();
    const newReview = {
        id: Date.now(),
        dishId: currentReviewDishId,
        user: profile.name,
        avatar: profile.avatar,
        rating: selectedRating,
        text: text,
        time: '刚刚',
        daysAgo: 0,
        tags: selectedTags,
        images: reviewImages,
        likes: 0,
        isFirst: isFirst
    };

    // 持久化用户评价
    const userReviews = loadUserReviews();
    userReviews.unshift(newReview);
    saveUserReviews(userReviews);

    // 更新菜品评分（加权平均：旧总分+新评分 / 旧数量+1）
    const overrides = loadDishOverrides();
    const dish = getMergedDishes().find(d => d.id === currentReviewDishId);
    const current = overrides[currentReviewDishId] || { rating: dish ? dish.rating : 0, reviews: dish ? dish.reviews : 0 };
    const oldTotal = current.rating * current.reviews;
    const newReviews = current.reviews + 1;
    const newRating = Math.round((oldTotal + selectedRating) / newReviews * 10) / 10;
    overrides[currentReviewDishId] = { rating: newRating, reviews: newReviews };
    saveDishOverrides(overrides);

    closeReviewModal();
    showToast(isFirst ? '🏆 恭喜首评！评价发布成功' : '评价发布成功！');

    // 刷新所有列表
    renderDualRank(document.querySelector('.dual-tab-btn.active').dataset.tab);
    renderLatestReviews();
    renderNewDishes();
    renderMineStats();

    // 重新打开详情
    setTimeout(() => openDishDetail(currentReviewDishId), 300);
}

// ===== 我的页面 =====
function renderMineStats() {
    applyProfileToCard();
    const userReviews = loadUserReviews();
    const favs = loadFavorites();
    document.getElementById('profile-stats').textContent = `已点评 ${userReviews.length} 道 · 想吃清单 ${favs.length} 道`;
    document.getElementById('my-review-count').textContent = userReviews.length;
    document.getElementById('my-fav-count').textContent = favs.length;
}

// ===== 编辑资料弹窗 =====
let pendingAvatar = '😊';

function openProfileModal() {
    const p = loadProfile();
    pendingAvatar = p.avatar;
    document.getElementById('avatar-current').textContent = p.avatar;
    document.getElementById('nickname-input').value = p.name;
    const grid = document.getElementById('emoji-grid');
    grid.innerHTML = AVATAR_EMOJIS.map(e =>
        `<div class="emoji-option ${e === p.avatar ? 'selected' : ''}" data-avatar="${e}" onclick="selectAvatar('${e}')">${e}</div>`
    ).join('');
    document.getElementById('profile-modal').style.display = 'flex';
}

function closeProfileModal() {
    document.getElementById('profile-modal').style.display = 'none';
}

function selectAvatar(emoji) {
    pendingAvatar = emoji;
    document.getElementById('avatar-current').textContent = emoji;
    document.querySelectorAll('#emoji-grid .emoji-option').forEach(el => {
        el.classList.toggle('selected', el.dataset.avatar === emoji);
    });
}

function saveProfileEdit() {
    const name = document.getElementById('nickname-input').value.trim() || DEFAULT_PROFILE.name;
    const profile = { avatar: pendingAvatar, name: name.slice(0, 12) };
    saveProfile(profile);
    applyProfileToCard();
    closeProfileModal();
    showToast('资料已更新');
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
        const isBad = r.rating <= 2;
        const displayName = isBad ? '匿名同学' : r.user;
        const displayAvatar = isBad ? '🎭' : r.avatar;
        return `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-avatar">${displayAvatar}</div>
                    <div class="review-user">
                        <h5>${displayName}${r.isFirst ? ' <span class="first-review-badge">首评</span>' : ''}</h5>
                        <p>${r.time}</p>
                    </div>
                    <button class="review-delete-btn" onclick="deleteReview(${r.id})">删除</button>
                </div>
                <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                <p class="review-text">${r.text}</p>
                ${r.images && r.images.length > 0 ? `<div class="review-images">${r.images.map(img => `<img src="${img}" alt="评价图">`).join('')}</div>` : ''}
                ${r.tags && r.tags.length > 0 ? `<div style="margin-top:6px">${r.tags.map(t => `<span class="detail-tag" style="margin-right:4px">#${t}</span>`).join('')}</div>` : ''}
                <span class="review-dish">${dish ? dish.emoji + ' ' + dish.name : '已下架'}</span>
            </div>
        `;
    }).join('');
}

// 删除我的评价（二次确认）
function deleteReview(reviewId) {
    if (!confirm('确定要删除这条评价吗？删除后不可恢复。')) return;
    let userReviews = loadUserReviews();
    userReviews = userReviews.filter(r => r.id !== reviewId);
    saveUserReviews(userReviews);
    renderMyReviews();
    renderMineStats();
    showToast('评价已删除');
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
