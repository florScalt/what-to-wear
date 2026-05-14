// ==========================================
// STATE MANAGEMENT & CONSTANTS
// ==========================================

const presetColors = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#ffffff' },
  { name: 'Gray', value: '#95a5a6' },
  { name: 'Brown', value: '#8b4513' },
  { name: 'Beige', value: '#f5f5dc' },
  { name: 'Blue', value: '#3498db' },
  { name: 'Light Blue', value: '#81ecec' },
  { name: 'Red', value: '#e74c3c' },
  { name: 'Pink', value: '#fd79a8' },
  { name: 'Green', value: '#2ecc71' },
  { name: 'Yellow', value: '#f1c40f' },
  { name: 'Purple', value: '#9b59b6' }
];

const defaultItems = [
  {
    id: 1,
    name: 'White Basic Tee',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'top',
    type: 'casual',
    color: 'White',
    pattern: 'solid'
  },
  {
    id: 2,
    name: 'Striped Casual Shirt',
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'top',
    type: 'casual',
    color: 'Gray',
    pattern: 'printed'
  },
  {
    id: 3,
    name: 'Blue Formal Shirt',
    image: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'top',
    type: 'formal',
    color: 'Blue',
    pattern: 'solid'
  },
  {
    id: 4,
    name: 'Blue Denim Jeans',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'bottom',
    type: 'casual',
    color: 'Blue',
    pattern: 'solid'
  },
  {
    id: 5,
    name: 'Black Trousers',
    image: 'https://images.unsplash.com/photo-1594938298596-88ef56b10228?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'bottom',
    type: 'formal',
    color: 'Black',
    pattern: 'solid'
  },
  {
    id: 6,
    name: 'Brown Leather Jacket',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'outerwear',
    type: 'casual',
    color: 'Brown',
    pattern: 'solid'
  },
  {
    id: 7,
    name: 'White Sport Sneakers',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'shoes',
    type: 'sport',
    color: 'White',
    pattern: 'solid'
  },
  {
    id: 8,
    name: 'Brown Formal Shoes',
    image: 'https://images.unsplash.com/photo-1614252235316-0c8571bc2016?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'shoes',
    type: 'formal',
    color: 'Brown',
    pattern: 'solid'
  },
  {
    id: 9,
    name: 'Black Overshirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'top',
    type: 'casual',
    color: 'Black',
    pattern: 'solid'
  },
  {
    id: 10,
    name: 'Beige Knit Polo',
    image: 'https://placehold.co/400x520/F3E8D7/08050F?text=Beige+Knit+Polo',
    category: 'top',
    type: 'smart_casual',
    color: 'Beige',
    pattern: 'solid',
    tags: ['smart', 'premium']
  },
  {
    id: 11,
    name: 'Light Blue Oxford Shirt',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'top',
    type: 'formal',
    color: 'Light Blue',
    pattern: 'solid'
  },
  {
    id: 12,
    name: 'Olive Relaxed Tee',
    image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'top',
    type: 'casual',
    color: 'Green',
    pattern: 'solid',
    colorFamily: 'green',
    tags: ['relaxed']
  },
  {
    id: 13,
    name: 'Black Satin Blouse',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'top',
    type: 'formal',
    color: 'Black',
    pattern: 'solid',
    tags: ['premium', 'elegant']
  },
  {
    id: 14,
    name: 'Cream Wide Leg Trousers',
    image: 'https://placehold.co/400x520/F2EEE8/08050F?text=Cream+Wide+Leg+Trousers',
    category: 'bottom',
    type: 'formal',
    color: 'Beige',
    pattern: 'solid'
  },
  {
    id: 15,
    name: 'Gray Tailored Pants',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'bottom',
    type: 'formal',
    color: 'Gray',
    pattern: 'solid'
  },
  {
    id: 16,
    name: 'Black Relaxed Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'bottom',
    type: 'casual',
    color: 'Black',
    pattern: 'solid'
  },
  {
    id: 17,
    name: 'Beige Linen Shorts',
    image: 'https://placehold.co/400x520/EFDEC8/08050F?text=Beige+Linen+Shorts',
    category: 'bottom',
    type: 'casual',
    color: 'Beige',
    pattern: 'solid',
    tags: ['relaxed']
  },
  {
    id: 18,
    name: 'Navy Pleated Trousers',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'bottom',
    type: 'formal',
    color: 'Blue',
    pattern: 'solid',
    tags: ['office']
  },
  {
    id: 19,
    name: 'Black Wool Coat',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'outerwear',
    type: 'formal',
    color: 'Black',
    pattern: 'solid',
    tags: ['premium', 'elegant']
  },
  {
    id: 20,
    name: 'Beige Trench Coat',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'outerwear',
    type: 'formal',
    color: 'Beige',
    pattern: 'solid',
    tags: ['office', 'premium']
  },
  {
    id: 21,
    name: 'Blue Denim Jacket',
    image: 'https://placehold.co/400x520/CAD7E7/08050F?text=Blue+Denim+Jacket',
    category: 'outerwear',
    type: 'casual',
    color: 'Blue',
    pattern: 'solid',
    tags: ['street']
  },
  {
    id: 22,
    name: 'Gray Zip Hoodie',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'outerwear',
    type: 'sport',
    color: 'Gray',
    pattern: 'solid',
    tags: ['sport', 'relaxed']
  },
  {
    id: 23,
    name: 'White Leather Sneakers',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'shoes',
    type: 'casual',
    color: 'White',
    pattern: 'solid'
  },
  {
    id: 24,
    name: 'Black Loafers',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'shoes',
    type: 'formal',
    color: 'Black',
    pattern: 'solid',
    tags: ['office', 'premium']
  },
  {
    id: 25,
    name: 'Beige Minimal Sneakers',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'shoes',
    type: 'casual',
    color: 'Beige',
    pattern: 'solid',
    tags: ['minimal']
  },
  {
    id: 26,
    name: 'Black Running Sneakers',
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'shoes',
    type: 'sport',
    color: 'Black',
    pattern: 'solid',
    tags: ['sport']
  }
];

const SLOT_ORDER = ['outerwear', 'top', 'bottom', 'shoes'];

const SLOT_LABELS = {
  top: 'Top',
  bottom: 'Bottom',
  outerwear: 'Outerwear',
  shoes: 'Shoes',
  accessory: 'Accessories'
};

const COLOR_FAMILY_LABELS = {
  dark_neutral: 'Dark neutral',
  neutral_gray: 'Gray scale',
  light_neutral: 'Light neutral',
  earth: 'Earth tones',
  blue: 'Blue',
  green: 'Green',
  bold: 'Bold tones'
};

const OUTFIT_CATEGORIES = {
  monochrome_formal: {
    label: 'Monochromatic formal',
    targetFormality: 4.4,
    monochrome: true,
    preferredTypes: ['formal'],
    preferredPatterns: ['solid'],
    preferredTags: ['office', 'elegant', 'premium'],
    preferredFamilies: ['dark_neutral', 'earth', 'blue']
  },
  monochrome_casual: {
    label: 'Monochromatic casual',
    targetFormality: 2.5,
    monochrome: true,
    preferredTypes: ['casual'],
    preferredPatterns: ['solid'],
    preferredTags: ['relaxed', 'minimal'],
    preferredFamilies: ['earth', 'light_neutral', 'blue', 'dark_neutral']
  },
  formal: {
    label: 'Formal',
    targetFormality: 4.2,
    preferredTypes: ['formal'],
    preferredPatterns: ['solid'],
    preferredTags: ['office', 'elegant'],
    preferredFamilies: ['dark_neutral', 'blue', 'earth']
  },
  casual: {
    label: 'Casual',
    targetFormality: 2.4,
    preferredTypes: ['casual'],
    preferredTags: ['relaxed'],
    preferredFamilies: ['light_neutral', 'blue', 'earth']
  },
  smart_casual: {
    label: 'Smart casual',
    targetFormality: 3.3,
    preferredTypes: ['casual', 'formal'],
    preferredPatterns: ['solid'],
    preferredTags: ['smart', 'minimal'],
    preferredFamilies: ['blue', 'earth', 'dark_neutral']
  },
  streetwear: {
    label: 'Streetwear',
    targetFormality: 2,
    preferredTypes: ['casual', 'sport'],
    preferredTags: ['street', 'sport'],
    preferredFamilies: ['dark_neutral', 'blue', 'bold']
  },
  minimalist: {
    label: 'Minimalist',
    targetFormality: 3.1,
    preferredTypes: ['casual', 'formal'],
    preferredPatterns: ['solid'],
    preferredTags: ['minimal'],
    preferredFamilies: ['light_neutral', 'dark_neutral', 'earth']
  },
  elegant: {
    label: 'Elegant',
    targetFormality: 4.1,
    preferredTypes: ['formal'],
    preferredPatterns: ['solid'],
    preferredTags: ['elegant', 'premium'],
    preferredFamilies: ['dark_neutral', 'earth', 'blue']
  },
  sport: {
    label: 'Sport',
    targetFormality: 1.6,
    preferredTypes: ['sport', 'casual'],
    preferredTags: ['sport', 'street'],
    preferredFamilies: ['light_neutral', 'blue', 'green']
  },
  night_out: {
    label: 'Night out',
    targetFormality: 3.8,
    preferredTypes: ['formal', 'casual'],
    preferredPatterns: ['solid'],
    preferredTags: ['elegant', 'premium'],
    preferredFamilies: ['dark_neutral', 'blue']
  },
  office: {
    label: 'Office',
    targetFormality: 4,
    preferredTypes: ['formal'],
    preferredPatterns: ['solid'],
    preferredTags: ['office', 'smart'],
    preferredFamilies: ['blue', 'dark_neutral', 'earth']
  },
  special_event: {
    label: 'Special event',
    targetFormality: 4.5,
    preferredTypes: ['formal'],
    preferredPatterns: ['solid'],
    preferredTags: ['elegant', 'premium'],
    preferredFamilies: ['dark_neutral', 'earth']
  },
  relaxed: {
    label: 'Relaxed',
    targetFormality: 2.1,
    preferredTypes: ['casual'],
    preferredTags: ['relaxed'],
    preferredFamilies: ['light_neutral', 'earth', 'blue']
  },
  random: {
    label: 'Random',
    isRandom: true,
    targetFormality: 3
  }
};

let clothes = [];
let savedOutfits = [];
let generatedOutfits = [];
let profile = { name: '', gender: '', city: '' };
let currentUser = null;
let currentClosetFilter = 'all';

// DOM Elements
const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
const toastEl = document.getElementById('toast');

// Views
const bottomNav = document.getElementById('bottom-nav');

// Auth Forms & Links
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const linkRegister = document.getElementById('link-register');
const linkLogin = document.getElementById('link-login');
const btnLogout = document.getElementById('btn-logout');

// Forms & Inputs
const addItemForm = document.getElementById('add-item-form');
const itemImageInput = document.getElementById('item-image');
const imagePreview = document.getElementById('image-preview');
const imagePreviewActions = document.getElementById('image-preview-actions');
const btnReplaceImage = document.getElementById('btn-replace-image');
const btnRemoveImage = document.getElementById('btn-remove-image');
const profileForm = document.getElementById('profile-form');
const outfitCategorySelect = document.getElementById('outfit-category');

// Lab elements
const btnGenerate = document.getElementById('btn-generate');
const toggleOuterwear = document.getElementById('toggle-outerwear');
const toggleShoes = document.getElementById('toggle-shoes');
const generatedContainer = document.getElementById('generated-outfits-container');

// Closet elements
const closetGrid = document.getElementById('closet-grid');
const closetCount = document.getElementById('closet-count');
const filterBtns = document.querySelectorAll('.filter-btn');

// Saved elements
const savedContainer = document.getElementById('saved-outfits-container');

function cloneData(value){
  return JSON.parse(JSON.stringify(value));
}

function createUid(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getCategoryConfig(categoryKey) {
  return OUTFIT_CATEGORIES[categoryKey] || OUTFIT_CATEGORIES.casual;
}

function normalizeItemType(type) {
  if (type === 'smart_casual') return 'casual';
  return type;
}

function getCategoryLabel(categoryKey) {
  return getCategoryConfig(categoryKey).label;
}

function formatColorFamilyLabel(colorFamily) {
  return COLOR_FAMILY_LABELS[colorFamily] || 'Mixed';
}

function isItemValidForSlot(item, slot) {
  return Boolean(item) && item.category === slot;
}

function sanitizeOutfitItemsBySlot(items) {
  const sanitized = {};

  SLOT_ORDER.forEach((slot) => {
    const item = items?.[slot];
    if (isItemValidForSlot(item, slot)) {
      sanitized[slot] = enrichItem(item);
    }
  });

  return sanitized;
}

function needsContrastRing(colorValue) {
  return ['#ffffff', '#f5f5dc'].includes((colorValue || '').toLowerCase());
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getColorHex(colorName) {
  const color = presetColors.find((entry) => entry.name.toLowerCase() === String(colorName || '').toLowerCase());
  return color ? color.value : colorName;
}

function getColorFamily(colorName) {
  const normalized = String(colorName || '').toLowerCase();

  if (normalized.includes('black')) return 'dark_neutral';
  if (normalized.includes('white')) return 'light_neutral';
  if (normalized.includes('gray') || normalized.includes('grey')) return 'neutral_gray';
  if (normalized.includes('beige') || normalized.includes('brown') || normalized.includes('cream') || normalized.includes('tan')) return 'earth';
  if (normalized.includes('blue') || normalized.includes('navy')) return 'blue';
  if (normalized.includes('green') || normalized.includes('olive')) return 'green';
  if (normalized.includes('red') || normalized.includes('pink') || normalized.includes('purple') || normalized.includes('yellow')) return 'bold';

  return 'bold';
}

function getMonochromeMatches(colorFamily) {
  const families = {
    dark_neutral: ['dark_neutral', 'neutral_gray'],
    neutral_gray: ['dark_neutral', 'neutral_gray', 'light_neutral'],
    light_neutral: ['neutral_gray', 'light_neutral', 'earth'],
    earth: ['earth', 'light_neutral'],
    blue: ['blue'],
    green: ['green'],
    bold: ['bold']
  };

  return families[colorFamily] || [colorFamily];
}

function areFamiliesMonochromeCompatible(itemFamily, dominantFamily) {
  return getMonochromeMatches(dominantFamily).includes(itemFamily);
}

function getItemFormalityLevel(item) {
  if (typeof item.formalityLevel === 'number') return item.formalityLevel;

  const normalizedType = normalizeItemType(item.type);
  let score = 2.6;

  if (normalizedType === 'formal') score = 4.3;
  if (normalizedType === 'casual') score = 2.4;
  if (normalizedType === 'sport') score = 1.5;

  if (item.category === 'outerwear' && item.type === 'formal') score += 0.1;
  if (item.category === 'shoes' && item.type === 'formal') score += 0.2;
  if (item.pattern === 'printed') score -= 0.25;

  return clamp(Number(score.toFixed(1)), 1, 5);
}

function getItemTags(item) {
  const tags = new Set(item.tags || []);
  const colorFamily = getColorFamily(item.color);
  const normalizedType = normalizeItemType(item.type);

  if (normalizedType === 'formal') {
    tags.add('office');
    tags.add('elegant');
    tags.add('premium');
  }

  if (normalizedType === 'casual') {
    tags.add('relaxed');
    tags.add('smart');
  }

  if (normalizedType === 'sport') {
    tags.add('sport');
    tags.add('street');
  }

  if (item.pattern === 'solid') {
    tags.add('minimal');
  } else {
    tags.add('statement');
    tags.add('street');
  }

  if (['dark_neutral', 'light_neutral', 'earth'].includes(colorFamily)) {
    tags.add('premium');
    tags.add('minimal');
  }

  return Array.from(tags);
}

function enrichItem(item) {
  if (!item) return null;

  return {
    ...item,
    type: normalizeItemType(item.type),
    colorFamily: item.colorFamily || getColorFamily(item.color),
    formalityLevel: getItemFormalityLevel(item),
    tags: getItemTags(item)
  };
}

function mergeDefaultItems(existingItems) {
  const defaultMap = new Map(defaultItems.map((item) => [String(item.id), item]));
  const merged = existingItems.map((item) => {
    const defaultVersion = defaultMap.get(String(item.id));
    return defaultVersion ? { ...defaultVersion } : item;
  });

  const existingIds = new Set(merged.map((item) => String(item.id)));
  defaultItems.forEach((item) => {
    if (!existingIds.has(String(item.id))) merged.push(item);
  });

  return merged;
}

function normalizeOutfitData(outfit, fallbackCategory = 'casual') {
  if (!outfit) return null;

  if (outfit.items) {
    const items = sanitizeOutfitItemsBySlot(outfit.items);

    const category = outfit.category || fallbackCategory;
    const dominantColorFamily = outfit.dominantColorFamily || deriveDominantColorFamily(items, category);
    const lockedItemIds = Array.isArray(outfit.lockedItemIds) ? outfit.lockedItemIds.filter((slot) => items[slot]) : [];
    const averageFormality = calculateAverageFormality(items);

    return {
      id: outfit.id || createUid('outfit'),
      category,
      dominantColorFamily,
      isMonochrome: Boolean(outfit.isMonochrome || getCategoryConfig(category).monochrome),
      items,
      lockedItemIds,
      formalityLevel: Number((outfit.formalityLevel || averageFormality).toFixed(1)),
      explanation: outfit.explanation || buildOutfitExplanation({
        category,
        dominantColorFamily,
        items,
        formalityLevel: averageFormality,
        isMonochrome: getCategoryConfig(category).monochrome
      })
    };
  }

  const items = {};
  SLOT_ORDER.forEach((slot) => {
    if (isItemValidForSlot(outfit[slot], slot)) items[slot] = enrichItem(outfit[slot]);
  });

  const dominantColorFamily = deriveDominantColorFamily(items, fallbackCategory);
  const averageFormality = calculateAverageFormality(items);

  return {
    id: outfit.id || createUid('outfit'),
    category: fallbackCategory,
    dominantColorFamily,
    isMonochrome: Boolean(getCategoryConfig(fallbackCategory).monochrome),
    items,
    lockedItemIds: [],
    formalityLevel: Number(averageFormality.toFixed(1)),
    explanation: buildOutfitExplanation({
      category: fallbackCategory,
      dominantColorFamily,
      items,
      formalityLevel: averageFormality,
      isMonochrome: getCategoryConfig(fallbackCategory).monochrome
    })
  };
}

// ==========================================
// INITIALIZATION
// ==========================================

function renderColorPalette() {
  const palette = document.getElementById('item-color-palette');
  const input = document.getElementById('item-color');
  if (!palette) return;

  palette.innerHTML = '';

  presetColors.forEach((color) => {
    const chip = document.createElement('div');
    chip.className = 'color-chip';
    chip.style.backgroundColor = color.value;
    if (needsContrastRing(color.value)) chip.classList.add('is-light-chip');

    chip.addEventListener('click', () => {
      document.querySelectorAll('.color-chip').forEach((entry) => entry.classList.remove('selected'));
      chip.classList.add('selected');
      input.value = color.name;
    });

    palette.appendChild(chip);
  });
}

function renderCategoryOptions() {
  if (!outfitCategorySelect) return;

  outfitCategorySelect.innerHTML = Object.entries(OUTFIT_CATEGORIES)
    .map(([value, config]) => `<option value="${value}">${config.label}</option>`)
    .join('');

  outfitCategorySelect.value = 'casual';
}

async function init() {
  renderColorPalette();
  renderCategoryOptions();
  loadData();
  bindEvents();

  if (getToken() && currentUser) {
    await showApp();
  } else {
    showAuth('view-login');
  }
}

function loadData() {
  const storedCurrentUser = localStorage.getItem('closetlab_user');
  if (storedCurrentUser) currentUser = JSON.parse(storedCurrentUser);

  savedOutfits = [];
  profile = { name: '', gender: '', city: '' };

  const storedSaved = localStorage.getItem(getUserStorageKey('saved'));
  if (storedSaved) {
    savedOutfits = JSON.parse(storedSaved)
      .map((outfit) => normalizeOutfitData(outfit))
      .filter(Boolean);
  }

  const storedProfile = localStorage.getItem(getUserStorageKey('profile'));
  if (storedProfile) profile = JSON.parse(storedProfile);
}

function saveData(type) {
  if (type === 'saved' || !type) localStorage.setItem(getUserStorageKey('saved'), JSON.stringify(savedOutfits));
  if (type === 'profile' || !type) localStorage.setItem(getUserStorageKey('profile'), JSON.stringify(profile));
  if (type === 'currentUser' || !type) {
    if (currentUser) {
      localStorage.setItem('closetlab_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('closetlab_user');
    }
  }
}

// ==========================================
// AUTHENTICATION
// ==========================================

function getUserStorageKey(key) {
  return currentUser?.id ? `closetlab_${key}_${currentUser.id}` : `closetlab_${key}`;
}

function getToken() {
  return localStorage.getItem('closetlab_token');
}

function setSession(token, user) {
  localStorage.setItem('closetlab_token', token);
  currentUser = user;
  saveData('currentUser');
}

function clearSession() {
  localStorage.removeItem('closetlab_token');
  currentUser = null;
  clothes = [];
  generatedOutfits = [];
}

async function apiFetch(url, options = {}) {
  const headers = {
    ...(options.headers || {})
  };

  if (options.body && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(url, {
    ...options,
    headers
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (response.status === 401) {
    handleLogout(false);
    throw new Error(data?.error || 'Unauthorized');
  }

  if (!response.ok) {
    throw new Error(data?.error || 'Request failed');
  }

  return data;
}

function normalizeClothingItem(item) {
  return {
    ...item,
    id: item._id || item.id,
    image: item.imageUrl || item.image,
    type: item.style || item.type || 'casual',
    pattern: item.pattern || 'solid'
  };
}

async function loadClothes() {
  clothes = (await apiFetch('/api/clothes')).map(normalizeClothingItem);
}

function showAuth(viewId) {
  if (bottomNav) bottomNav.style.display = 'none';
  switchView(viewId);
}

async function showApp() {
  if (bottomNav) bottomNav.style.display = 'flex';
  try {
    await loadClothes();
  } catch (error) {
    showToast(error.message || 'Could not load closet');
    return;
  }

  renderCloset('all');
  renderSavedOutfits();
  renderProfile();

  navItems.forEach((item) => item.classList.remove('active'));
  if (navItems.length > 0) navItems[0].classList.add('active');
  switchView('view-lab');
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const data = await apiFetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    setSession(data.token, data.user);
    loginForm.reset();
    loadData();
    showToast('Login successful');
    await showApp();
  } catch (error) {
    showToast(error.message || 'Invalid email or password');
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  try {
    const data = await apiFetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password })
    });

    setSession(data.token, data.user);
    registerForm.reset();
    loadData();
    showToast('Account created');
    await showApp();
  } catch (error) {
    showToast(error.message || 'Could not create account');
  }
}

function handleLogout(showMessage = true) {
  clearSession();
  saveData('currentUser');
  if (showMessage) showToast('Logged out');
  showAuth('view-login');
}

// ==========================================
// NAVIGATION
// ==========================================

function bindEvents() {
  linkRegister.addEventListener('click', (e) => {
    e.preventDefault();
    showAuth('view-register');
  });

  linkLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showAuth('view-login');
  });

  loginForm.addEventListener('submit', handleLogin);
  registerForm.addEventListener('submit', handleRegister);

  if (btnLogout) btnLogout.addEventListener('click', handleLogout);

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      switchView(target);

      navItems.forEach((entry) => entry.classList.remove('active'));
      item.classList.add('active');
    });
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((entry) => entry.classList.remove('active'));
      btn.classList.add('active');
      renderCloset(btn.getAttribute('data-filter'));
    });
  });

  itemImageInput.addEventListener('change', handleImageUpload);
  if (btnReplaceImage) {
    btnReplaceImage.addEventListener('click', () => {
      itemImageInput.click();
    });
  }
  if (btnRemoveImage) {
    btnRemoveImage.addEventListener('click', clearUploadedImage);
  }
  addItemForm.addEventListener('submit', handleAddItem);
  profileForm.addEventListener('submit', handleSaveProfile);
  btnGenerate.addEventListener('click', generateOutfits);

  const btnCancelDelete = document.getElementById('btn-cancel-delete');
  const btnConfirmDelete = document.getElementById('btn-confirm-delete');
  if (btnCancelDelete) {
    btnCancelDelete.addEventListener('click', closeConfirmModal);
  }
  if (btnConfirmDelete) {
    btnConfirmDelete.addEventListener('click', executeDeleteClosetItem);
  }
}

function switchView(viewId) {
  views.forEach((view) => view.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  window.scrollTo(0, 0);
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3000);
}

// ==========================================
// ADD ITEM
// ==========================================

let currentBase64Image = '';

function clearUploadedImage() {
  currentBase64Image = '';
  imagePreview.src = '';
  imagePreview.style.display = 'none';
  imagePreview.classList.add('image-preview-hidden');
  imagePreviewActions?.classList.add('image-preview-hidden');
  itemImageInput.value = '';
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}


function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function onLoad(event) {
    currentBase64Image = event.target.result;
    imagePreview.src = currentBase64Image;
    imagePreview.style.display = 'block';
    imagePreview.classList.remove('image-preview-hidden');
    imagePreviewActions?.classList.remove('image-preview-hidden');
  };
  reader.readAsDataURL(file);
}

async function handleAddItem(e) {
  e.preventDefault();

  if (!currentBase64Image) {
    showToast('Please upload an image');
    return;
  }

  const itemColor = document.getElementById('item-color').value;

  if (!itemColor) {
    showToast('Please select a color');
    return;
  }

  const newItem = {
    name: document.getElementById('item-name').value.trim(),
    category: document.getElementById('item-category').value,
    color: itemColor,
    style: document.getElementById('item-type').value,
    imageUrl: currentBase64Image,
    pattern: document.getElementById('item-pattern').value
  };

  try {
    const savedItem = await apiFetch('/api/clothes', {
      method: 'POST',
      body: JSON.stringify(newItem)
    });

    clothes.unshift(normalizeClothingItem(savedItem));
  } catch (error) {
    showToast(error.message || 'Could not save item');
    return;
  }

  addItemForm.reset();
  clearUploadedImage();

  showToast('Item added to closet');
  renderCloset('all');
  navItems[1].click();
}

// ==========================================
// CLOSET RENDER
// ==========================================

function renderCloset(filter) {
  currentClosetFilter = filter;
  let filtered = clothes;

  if (filter !== 'all') {
    filtered = clothes.filter((item) => item.category === filter);
  }

  closetCount.textContent = `${filtered.length} items`;
  closetGrid.innerHTML = '';

  if (filtered.length === 0) {
    closetGrid.innerHTML = `
      <div class="empty-state full-span">
        <span class="material-icons">checkroom</span>
        <p>No items found.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'item-card card';
    const hex = getColorHex(item.color || '');
    const chipClass = needsContrastRing(hex) ? 'color-chip-small is-light-chip' : 'color-chip-small';
    const name = item.name || item.color;

    card.innerHTML = `
      <button type="button" class="delete-item-btn" aria-label="Delete ${name}">
        <span class="material-icons">close</span>
      </button>
      <img src="${item.image}" alt="${name}">
      <div class="item-title" title="${name}">${name}</div>
      <div class="item-color-preview">
        <span class="${chipClass}" style="background-color: ${hex}"></span>
      </div>
      <div>
        <span class="item-badge">${item.type}</span>
        <span class="item-badge">${item.pattern}</span>
      </div>
    `;

    const deleteButton = card.querySelector('.delete-item-btn');
    deleteButton.addEventListener('click', () => {
      deleteClosetItem(item.id, name);
    });

    closetGrid.appendChild(card);
  });
}

function removeDeletedItemFromOutfits(outfits, deletedItemId) {
  return outfits
    .map((outfit) => {
      const normalizedOutfit = normalizeOutfitData(outfit);
      if (!normalizedOutfit) return null;

      const nextItems = {};
      Object.entries(normalizedOutfit.items).forEach(([slot, item]) => {
        if (String(item.id) !== String(deletedItemId)) {
          nextItems[slot] = item;
        }
      });

      if (!nextItems.top || !nextItems.bottom) return null;

      return buildOutfitObject({
        category: normalizedOutfit.category,
        items: nextItems,
        lockedItemIds: (normalizedOutfit.lockedItemIds || []).filter((slot) => nextItems[slot]),
        dominantColorFamily: deriveDominantColorFamily(nextItems, normalizedOutfit.category),
        previousId: normalizedOutfit.id
      });
    })
    .filter(Boolean);
}

let pendingDeleteItemId = null;

function deleteClosetItem(itemId, itemName) {
  pendingDeleteItemId = itemId;
  const modal = document.getElementById('confirm-modal');
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
  }
}

async function executeDeleteClosetItem() {
  if (!pendingDeleteItemId) return;

  try {
    await apiFetch(`/api/clothes?id=${encodeURIComponent(pendingDeleteItemId)}`, {
      method: 'DELETE'
    });
  } catch (error) {
    showToast(error.message || 'Could not delete item');
    closeConfirmModal();
    return;
  }

  clothes = clothes.filter((item) => String(item.id) !== String(pendingDeleteItemId));
  generatedOutfits = removeDeletedItemFromOutfits(generatedOutfits, pendingDeleteItemId);
  savedOutfits = removeDeletedItemFromOutfits(savedOutfits, pendingDeleteItemId);

  saveData('saved');

  renderCloset(currentClosetFilter);
  if (typeof renderGeneratedOutfits === 'function') renderGeneratedOutfits();
  if (typeof renderSavedOutfits === 'function') renderSavedOutfits();
  showToast('Item deleted from closet');

  closeConfirmModal();
}

function closeConfirmModal() {
  pendingDeleteItemId = null;
  const modal = document.getElementById('confirm-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
  }
}

// ==========================================
// OUTFIT GENERATION
// ==========================================

function getRandomItem(array) {
  if (!array || array.length === 0) return null;
  return array[Math.floor(Math.random() * array.length)];
}

function shouldIncludeSlot(slot, baseOutfit = null) {
  if (slot === 'top' || slot === 'bottom') return true;
  if (slot === 'outerwear') return Boolean(toggleOuterwear.checked || baseOutfit?.items?.outerwear);
  if (slot === 'shoes') return Boolean(toggleShoes.checked || baseOutfit?.items?.shoes);
  return false;
}

function getSlotItems(slot) {
  return clothes
    .filter((item) => isItemValidForSlot(item, slot))
    .map((item) => enrichItem(item));
}

function calculateAverageFormality(items) {
  const values = Object.values(items).filter(Boolean).map((item) => item.formalityLevel);
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function isTypeCompatible(itemA, itemB) {
  if (!itemA || !itemB) return true;
  const pair = [itemA.type, itemB.type];
  return !(pair.includes('formal') && pair.includes('sport'));
}

function isPatternCompatible(items) {
  if (!items.top || !items.bottom) return true;
  if (items.top.pattern === 'printed' && items.bottom.pattern !== 'solid') return false;
  return true;
}

function validateOutfitItems(items, requireComplete = true) {
  for (const slot of SLOT_ORDER) {
    if (items[slot] && !isItemValidForSlot(items[slot], slot)) return false;
  }

  if (requireComplete && (!items.top || !items.bottom)) return false;
  if (items.top && items.bottom && !isPatternCompatible(items)) return false;

  const itemList = Object.values(items).filter(Boolean);
  for (let index = 0; index < itemList.length; index += 1) {
    for (let compareIndex = index + 1; compareIndex < itemList.length; compareIndex += 1) {
      if (!isTypeCompatible(itemList[index], itemList[compareIndex])) return false;
    }
  }

  return true;
}

function deriveDominantColorFamily(items, categoryKey) {
  const config = getCategoryConfig(categoryKey);
  const baseFamilies = Object.values(items)
    .filter(Boolean)
    .map((item) => item.colorFamily);

  if (baseFamilies.length > 0) {
    return baseFamilies.sort((familyA, familyB) => {
      const scoreA = baseFamilies.filter((value) => value === familyA).length;
      const scoreB = baseFamilies.filter((value) => value === familyB).length;
      return scoreB - scoreA;
    })[0];
  }

  const candidateFamilies = config.preferredFamilies || Object.keys(COLOR_FAMILY_LABELS);
  for (const family of candidateFamilies) {
    const hasTop = getSlotItems('top').some((item) => areFamiliesMonochromeCompatible(item.colorFamily, family));
    const hasBottom = getSlotItems('bottom').some((item) => areFamiliesMonochromeCompatible(item.colorFamily, family));
    if (hasTop && hasBottom) return family;
  }

  return candidateFamilies[0] || 'dark_neutral';
}

function getSlotCandidateScore(candidate, slot, currentItems, context) {
  const { config, dominantColorFamily, replaceSlot, replaceItemId } = context;
  if (!candidate) return Number.NEGATIVE_INFINITY;

  if (replaceSlot === slot && String(candidate.id) === String(replaceItemId)) {
    return Number.NEGATIVE_INFINITY;
  }

  if (Object.values(currentItems).some((item) => item && String(item.id) === String(candidate.id))) {
    return Number.NEGATIVE_INFINITY;
  }

  const nextItems = { ...currentItems, [slot]: candidate };
  if (!validateOutfitItems(nextItems, false)) return Number.NEGATIVE_INFINITY;

  if (config.monochrome && !areFamiliesMonochromeCompatible(candidate.colorFamily, dominantColorFamily)) {
    return Number.NEGATIVE_INFINITY;
  }

  if (config.isRandom) return Math.random();

  let score = 0;

  const formalityDifference = Math.abs(candidate.formalityLevel - config.targetFormality);
  score += Math.max(0, 18 - formalityDifference * 7);

  if ((config.preferredTypes || []).includes(candidate.type)) score += 8;
  if ((config.preferredPatterns || []).includes(candidate.pattern)) score += 6;
  if ((config.preferredTags || []).some((tag) => candidate.tags.includes(tag))) score += 7;
  if ((config.preferredFamilies || []).includes(candidate.colorFamily)) score += 5;

  if (slot === 'outerwear' && candidate.type === 'formal' && config.targetFormality >= 3.8) score += 3;
  if (slot === 'shoes' && candidate.type === 'formal' && config.targetFormality >= 3.8) score += 4;
  if (slot === 'shoes' && candidate.type === 'sport' && config.targetFormality <= 2) score += 4;

  if (config.monochrome && areFamiliesMonochromeCompatible(candidate.colorFamily, dominantColorFamily)) score += 12;
  if (!config.monochrome && currentItems.top && currentItems.top.colorFamily === candidate.colorFamily) score += 3;

  return score + Math.random();
}

function pickBestSlotCandidate(slot, currentItems, context) {
  const pool = getSlotItems(slot);
  let bestCandidate = null;
  let bestScore = Number.NEGATIVE_INFINITY;

  pool.forEach((candidate) => {
    const score = getSlotCandidateScore(candidate, slot, currentItems, context);
    if (score > bestScore) {
      bestScore = score;
      bestCandidate = candidate;
    }
  });

  return bestCandidate;
}

function scoreOutfit(outfit) {
  if (!outfit || !validateOutfitItems(outfit.items)) return Number.NEGATIVE_INFINITY;

  const config = getCategoryConfig(outfit.category);
  if (config.isRandom) return Math.random();

  const itemList = Object.values(outfit.items).filter(Boolean);
  let score = 0;

  const averageFormality = calculateAverageFormality(outfit.items);
  score += Math.max(0, 40 - Math.abs(averageFormality - config.targetFormality) * 12);

  itemList.forEach((item) => {
    if ((config.preferredTypes || []).includes(item.type)) score += 8;
    if ((config.preferredPatterns || []).includes(item.pattern)) score += 5;
    if ((config.preferredTags || []).some((tag) => item.tags.includes(tag))) score += 6;
    if ((config.preferredFamilies || []).includes(item.colorFamily)) score += 4;
  });

  if (config.monochrome) {
    itemList.forEach((item) => {
      if (areFamiliesMonochromeCompatible(item.colorFamily, outfit.dominantColorFamily)) {
        score += 8;
      } else {
        score -= 14;
      }
    });
  }

  if (isPatternCompatible(outfit.items)) score += 10;
  if (outfit.items.outerwear && shouldIncludeSlot('outerwear')) score += 2;
  if (outfit.items.shoes && shouldIncludeSlot('shoes')) score += 2;

  return score;
}

function buildOutfitExplanation(outfit) {
  const config = getCategoryConfig(outfit.category);
  if (config.isRandom) return 'A completely randomized outfit for a fun and unexpected look.';

  const tone = outfit.isMonochrome
    ? `keeps the look inside the ${formatColorFamilyLabel(outfit.dominantColorFamily).toLowerCase()} family`
    : `balances ${formatColorFamilyLabel(outfit.dominantColorFamily).toLowerCase()} tones with the target vibe`;

  const formalityNote = outfit.formalityLevel >= 4
    ? 'The pieces lean polished and elevated.'
    : outfit.formalityLevel <= 2.2
      ? 'The mix stays relaxed and easy to wear.'
      : 'The mix lands in a versatile middle ground.';

  return `${config.label} outfit that ${tone}. ${formalityNote}`;
}

function buildOutfitObject({ category, items, lockedItemIds, dominantColorFamily, previousId = null }) {
  const sanitizedItems = sanitizeOutfitItemsBySlot(items);
  const formalityLevel = calculateAverageFormality(sanitizedItems);
  const normalizedDominantColorFamily = dominantColorFamily || deriveDominantColorFamily(sanitizedItems, category);

  return {
    id: previousId || createUid('outfit'),
    category,
    dominantColorFamily: normalizedDominantColorFamily,
    isMonochrome: Boolean(getCategoryConfig(category).monochrome),
    items: sanitizedItems,
    lockedItemIds: (lockedItemIds || []).filter((slot) => sanitizedItems[slot]),
    formalityLevel: Number(formalityLevel.toFixed(1)),
    explanation: buildOutfitExplanation({
      category,
      dominantColorFamily: normalizedDominantColorFamily,
      items: sanitizedItems,
      formalityLevel,
      isMonochrome: Boolean(getCategoryConfig(category).monochrome)
    })
  };
}

function createOutfit(options = {}) {
  const category = options.category || outfitCategorySelect.value || 'casual';
  const config = getCategoryConfig(category);
  const baseOutfit = options.baseOutfit ? normalizeOutfitData(options.baseOutfit, category) : null;
  const lockedSlots = new Set(options.lockedItemIds || baseOutfit?.lockedItemIds || []);
  const preserveAllExisting = Boolean(options.preserveAllExisting);
  const replaceSlot = options.replaceSlot || null;
  const replaceItemId = replaceSlot && baseOutfit?.items?.[replaceSlot] ? baseOutfit.items[replaceSlot].id : null;

  let bestOutfit = null;
  let bestScore = Number.NEGATIVE_INFINITY;

  for (let attempt = 0; attempt < 100; attempt += 1) {
    const items = {};

    if (baseOutfit) {
      SLOT_ORDER.forEach((slot) => {
        if (!baseOutfit.items[slot]) return;
        if (slot === replaceSlot) return;
        if (preserveAllExisting || lockedSlots.has(slot)) items[slot] = enrichItem(baseOutfit.items[slot]);
      });
    }

    const dominantColorFamily = deriveDominantColorFamily(items, category);
    const fillOrder = ['top', 'bottom', 'outerwear', 'shoes'];
    let failed = false;

    for (const slot of fillOrder) {
      if (items[slot]) continue;
      if (!shouldIncludeSlot(slot, baseOutfit)) continue;

      const candidate = pickBestSlotCandidate(slot, items, {
        config,
        dominantColorFamily,
        replaceSlot,
        replaceItemId
      });

      if (!candidate) {
        if (slot === 'top' || slot === 'bottom' || replaceSlot === slot) {
          failed = true;
          break;
        }
        continue;
      }

      items[slot] = candidate;
    }

    if (failed || !validateOutfitItems(items)) continue;

    const outfit = buildOutfitObject({
      category,
      items,
      lockedItemIds: Array.from(lockedSlots),
      dominantColorFamily,
      previousId: options.previousId || null
    });

    const score = scoreOutfit(outfit);
    if (score > bestScore) {
      bestScore = score;
      bestOutfit = outfit;
    }
  }

  return bestOutfit;
}

function renderGeneratedOutfits() {
  generatedContainer.innerHTML = '';

  if (generatedOutfits.length === 0) {
    generatedContainer.innerHTML = `
      <div class="empty-state">
        <span class="material-icons">style</span>
        <p>Not enough compatible clothes to generate outfits for this category.</p>
      </div>
    `;
    return;
  }

  generatedOutfits.forEach((outfit) => {
    renderOutfitCard(outfit, generatedContainer, false);
  });
}

function generateOutfits() {
  const category = outfitCategorySelect.value || 'casual';
  generatedOutfits = [];

  for (let index = 0; index < 3; index += 1) {
    const outfit = createOutfit({ category });
    if (outfit) generatedOutfits.push(outfit);
  }

  renderGeneratedOutfits();
}

function updateGeneratedOutfit(outfitId, nextOutfit) {
  generatedOutfits = generatedOutfits.map((outfit) => (
    outfit.id === outfitId ? nextOutfit : outfit
  ));
  renderGeneratedOutfits();
}

function toggleOutfitLock(outfitId, slot) {
  const outfit = generatedOutfits.find((entry) => entry.id === outfitId);
  if (!outfit || !outfit.items[slot]) return;

  const lockedSet = new Set(outfit.lockedItemIds || []);
  if (lockedSet.has(slot)) {
    lockedSet.delete(slot);
  } else {
    lockedSet.add(slot);
  }

  const nextOutfit = buildOutfitObject({
    category: outfit.category,
    items: cloneData(outfit.items),
    lockedItemIds: Array.from(lockedSet),
    dominantColorFamily: outfit.dominantColorFamily,
    previousId: outfit.id
  });

  updateGeneratedOutfit(outfitId, nextOutfit);
}

function regenerateExistingOutfit(outfitId, options = {}) {
  const currentOutfit = generatedOutfits.find((entry) => entry.id === outfitId);
  if (!currentOutfit) return;

  if (options.replaceSlot && !SLOT_ORDER.includes(options.replaceSlot)) {
    showToast('That outfit piece cannot be changed from here');
    return;
  }

  const nextCategory = options.category || currentOutfit.category;
  const nextOutfit = createOutfit({
    category: nextCategory,
    baseOutfit: currentOutfit,
    lockedItemIds: currentOutfit.lockedItemIds,
    preserveAllExisting: Boolean(options.preserveAllExisting),
    replaceSlot: options.replaceSlot || null,
    previousId: currentOutfit.id
  });

  if (!nextOutfit) {
    showToast('Could not find a compatible update for that request');
    return;
  }

  updateGeneratedOutfit(outfitId, nextOutfit);
}

function getFormalityLabel(level) {
  if (level >= 4.1) return 'High formality';
  if (level >= 3) return 'Balanced formality';
  return 'Low formality';
}

function getOutfitActionLabel(action) {
  const labels = {
    regenerate: 'Regenerate unlocked',
    more_formal: 'More formal',
    more_casual: 'More casual',
    mono_casual: 'Mono casual',
    mono_formal: 'Mono formal'
  };

  return labels[action] || action;
}

function deleteSavedOutfit(outfitId) {
  savedOutfits = savedOutfits.filter((outfit) => outfit.id !== outfitId);
  saveData('saved');
  renderSavedOutfits();
  showToast('Favorite removed');
}

function buildRefineCategory(currentCategory, action) {
  if (action === 'regenerate') return currentCategory;
  if (action === 'more_formal') return 'formal';
  if (action === 'more_casual') return 'casual';
  if (action === 'mono_casual') return 'monochrome_casual';
  if (action === 'mono_formal') return 'monochrome_formal';
  return currentCategory;
}

function renderOutfitCard(outfit, container, isSavedCard) {
  const normalizedOutfit = normalizeOutfitData(outfit);
  const card = document.createElement('div');
  card.className = 'outfit-card card';

  const slotsHtml = SLOT_ORDER
    .filter((slot) => normalizedOutfit.items[slot])
    .map((slot) => {
      const item = normalizedOutfit.items[slot];
      const isLocked = (normalizedOutfit.lockedItemIds || []).includes(slot);

      return `
        <div class="outfit-slot" data-slot="${slot}">
          <img class="outfit-slot-img" src="${item.image}" alt="${item.name || slot}">
          <div class="outfit-slot-info">
            <div class="outfit-slot-topline">
              <div class="outfit-slot-category">${SLOT_LABELS[slot]}</div>
              ${isSavedCard ? '' : `
                <div class="slot-actions">
                  <button type="button" class="slot-action-btn ${isLocked ? 'active' : ''}" data-lock-slot="${slot}">
                    ${isLocked ? 'Keeping' : 'Keep'}
                  </button>
                  <button type="button" class="slot-action-btn" data-change-slot="${slot}">
                    Change
                  </button>
                </div>
              `}
            </div>
            <div class="outfit-slot-details">${item.name || item.color} - ${item.pattern} - ${item.type}</div>
          </div>
        </div>
      `;
    })
    .join('');

  const actionButtons = isSavedCard
    ? `
      <button type="button" class="delete-item-btn delete-saved-btn" aria-label="Remove favorite">
        <span class="material-icons">close</span>
      </button>
    `
    : `
      <div class="outfit-actions">
        <button type="button" class="micro-btn micro-btn-repeat" data-refine-action="regenerate">${getOutfitActionLabel('regenerate')}</button>
        <button type="button" class="micro-btn" data-refine-action="more_formal">${getOutfitActionLabel('more_formal')}</button>
        <button type="button" class="micro-btn" data-refine-action="more_casual">${getOutfitActionLabel('more_casual')}</button>
        <button type="button" class="micro-btn" data-refine-action="mono_casual">${getOutfitActionLabel('mono_casual')}</button>
        <button type="button" class="micro-btn" data-refine-action="mono_formal">${getOutfitActionLabel('mono_formal')}</button>
      </div>
      <button class="secondary-btn save-outfit-btn">
        <span class="material-icons">favorite_border</span>
        <span>Save to Favorites</span>
      </button>
    `;

  card.innerHTML = `
    <div class="outfit-header">
      <div>
        <div class="outfit-title">${getCategoryLabel(normalizedOutfit.category)}</div>
        <div class="outfit-subtitle">Color lead: ${formatColorFamilyLabel(normalizedOutfit.dominantColorFamily)}</div>
      </div>
      <div class="outfit-meta-pills">
        <span class="outfit-pill">${normalizedOutfit.isMonochrome ? 'Monochrome' : 'Mixed palette'}</span>
        <span class="outfit-pill">${getFormalityLabel(normalizedOutfit.formalityLevel)}</span>
      </div>
    </div>
    ${slotsHtml}
    <div class="outfit-structure">
      <div class="outfit-structure-row"><span>Style</span><strong>${getCategoryLabel(normalizedOutfit.category)}</strong></div>
      <div class="outfit-structure-row"><span>Dominant color</span><strong>${formatColorFamilyLabel(normalizedOutfit.dominantColorFamily)}</strong></div>
      <div class="outfit-structure-row"><span>Formality</span><strong>${normalizedOutfit.formalityLevel}/5</strong></div>
      <div class="outfit-structure-row"><span>Accessories</span><strong>Not available yet</strong></div>
    </div>
    <p class="outfit-explanation">${normalizedOutfit.explanation}</p>
    ${actionButtons}
  `;

  if (isSavedCard) {
    const removeButton = card.querySelector('.delete-saved-btn');
    removeButton?.addEventListener('click', () => {
      deleteSavedOutfit(normalizedOutfit.id);
    });
  } else {
    card.querySelectorAll('[data-lock-slot]').forEach((button) => {
      button.addEventListener('click', () => {
        toggleOutfitLock(normalizedOutfit.id, button.dataset.lockSlot);
      });
    });

    card.querySelectorAll('[data-change-slot]').forEach((button) => {
      button.addEventListener('click', () => {
        regenerateExistingOutfit(normalizedOutfit.id, {
          category: normalizedOutfit.category,
          replaceSlot: button.dataset.changeSlot,
          preserveAllExisting: true
        });
      });
    });

    card.querySelectorAll('[data-refine-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextCategory = buildRefineCategory(normalizedOutfit.category, button.dataset.refineAction);
        regenerateExistingOutfit(normalizedOutfit.id, {
          category: nextCategory,
          preserveAllExisting: false
        });
      });
    });

    const saveButton = card.querySelector('.save-outfit-btn');
    saveButton.addEventListener('click', () => {
      saveOutfit(normalizedOutfit);
      saveButton.innerHTML = `
        <span class="material-icons">favorite</span>
        <span>Saved</span>
      `;
      saveButton.disabled = true;
    });
  }

  container.appendChild(card);
}

// ==========================================
// SAVED OUTFITS
// ==========================================

function saveOutfit(outfit) {
  savedOutfits.unshift(cloneData(normalizeOutfitData(outfit)));
  saveData('saved');
  showToast('Outfit saved to favorites');
  renderSavedOutfits();
}

function renderSavedOutfits() {
  savedContainer.innerHTML = '';

  if (savedOutfits.length === 0) {
    savedContainer.innerHTML = `
      <div class="empty-state">
        <span class="material-icons">favorite_border</span>
        <p>No saved outfits yet.</p>
      </div>
    `;
    return;
  }

  savedOutfits.forEach((outfit) => {
    renderOutfitCard(outfit, savedContainer, true);
  });
}

// ==========================================
// PROFILE
// ==========================================

function renderProfile() {
  document.getElementById('profile-name').value = profile.name || '';
  document.getElementById('profile-gender').value = profile.gender || '';
  document.getElementById('profile-city').value = profile.city || '';
}

function handleSaveProfile(e) {
  e.preventDefault();
  profile = {
    name: document.getElementById('profile-name').value,
    gender: document.getElementById('profile-gender').value,
    city: document.getElementById('profile-city').value
  };
  saveData('profile');
  showToast('Profile saved');
}

document.addEventListener('DOMContentLoaded', init);
