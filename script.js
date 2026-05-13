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
  }
];

let clothes = [];
let savedOutfits = [];
let profile = { name: '', gender: '', city: '' };
let users = [];
let currentUser = null;

// DOM Elements
const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
const toastEl = document.getElementById('toast');

// Views
const loginView = document.getElementById('view-login');
const registerView = document.getElementById('view-register');
const labView = document.getElementById('view-lab');
const closetView = document.getElementById('view-closet');
const addItemView = document.getElementById('view-add-item');
const savedView = document.getElementById('view-saved');
const profileView = document.getElementById('view-profile');
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
const profileForm = document.getElementById('profile-form');

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

// ==========================================
// INITIALIZATION
// ==========================================

function renderColorPalette() {
  const palette = document.getElementById('item-color-palette');
  const input = document.getElementById('item-color');
  if (!palette) return;
  palette.innerHTML = '';
  
  presetColors.forEach(color => {
    const chip = document.createElement('div');
    chip.className = 'color-chip';
    chip.style.backgroundColor = color.value;
    if (color.value === '#ffffff') chip.style.border = '1px solid #dfe6e9';
    
    chip.addEventListener('click', () => {
      document.querySelectorAll('.color-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      input.value = color.name;
    });
    
    palette.appendChild(chip);
  });
}

function init() {
  renderColorPalette();
  loadData();
  bindEvents();
  
  if (currentUser) {
    showApp();
  } else {
    showAuth('view-login');
  }
}

function loadData() {
  const storedClothes = localStorage.getItem('outfitlab_clothes');
  const storedSaved = localStorage.getItem('outfitlab_saved');
  const storedProfile = localStorage.getItem('outfitlab_profile');
  const storedUsers = localStorage.getItem('outfitlab_users');
  const storedCurrentUser = localStorage.getItem('outfitlab_currentUser');

  if (storedUsers) users = JSON.parse(storedUsers);
  if (storedCurrentUser) currentUser = JSON.parse(storedCurrentUser);

  if (storedClothes) {
    clothes = JSON.parse(storedClothes);
  } else {
    clothes = [...defaultItems]; // Use dummy data
    saveData('clothes');
  }

  if (storedSaved) savedOutfits = JSON.parse(storedSaved);
  if (storedProfile) profile = JSON.parse(storedProfile);
}

function saveData(type) {
  if (type === 'clothes' || !type) localStorage.setItem('outfitlab_clothes', JSON.stringify(clothes));
  if (type === 'saved' || !type) localStorage.setItem('outfitlab_saved', JSON.stringify(savedOutfits));
  if (type === 'profile' || !type) localStorage.setItem('outfitlab_profile', JSON.stringify(profile));
  if (type === 'users' || !type) localStorage.setItem('outfitlab_users', JSON.stringify(users));
  if (type === 'currentUser' || !type) localStorage.setItem('outfitlab_currentUser', JSON.stringify(currentUser));
}

// ==========================================
// AUTHENTICATION
// ==========================================

function showAuth(viewId) {
  if (bottomNav) bottomNav.style.display = 'none';
  switchView(viewId);
}

function showApp() {
  if (bottomNav) bottomNav.style.display = 'flex';
  renderCloset('all');
  renderSavedOutfits();
  renderProfile();
  
  // Reset navigation to lab
  navItems.forEach(n => n.classList.remove('active'));
  if (navItems.length > 0) navItems[0].classList.add('active'); // Lab tab
  switchView('view-lab');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = user;
    saveData('currentUser');
    loginForm.reset();
    showToast('Login successful!');
    showApp();
  } else {
    showToast('Invalid email or password');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  
  if (users.find(u => u.email === email)) {
    showToast('Email already registered');
    return;
  }
  
  const newUser = { email, password };
  users.push(newUser);
  saveData('users');
  
  currentUser = newUser;
  saveData('currentUser');
  
  registerForm.reset();
  showToast('Account created!');
  showApp();
}

function handleLogout() {
  currentUser = null;
  saveData('currentUser');
  showToast('Logged out');
  showAuth('view-login');
}

// ==========================================
// NAVIGATION
// ==========================================

function bindEvents() {
  // Auth Links
  linkRegister.addEventListener('click', (e) => { e.preventDefault(); showAuth('view-register'); });
  linkLogin.addEventListener('click', (e) => { e.preventDefault(); showAuth('view-login'); });
  
  // Auth Forms
  loginForm.addEventListener('submit', handleLogin);
  registerForm.addEventListener('submit', handleRegister);
  if (btnLogout) btnLogout.addEventListener('click', handleLogout);

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      switchView(target);
      
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Filter tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCloset(btn.getAttribute('data-filter'));
    });
  });

  // Image Upload Preview
  itemImageInput.addEventListener('change', handleImageUpload);

  // Forms
  addItemForm.addEventListener('submit', handleAddItem);
  profileForm.addEventListener('submit', handleSaveProfile);

  // Generate
  btnGenerate.addEventListener('click', generateOutfits);
}

function switchView(viewId) {
  views.forEach(view => view.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  window.scrollTo(0, 0);
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3000);
}

// ==========================================
// ADD ITEM
// ==========================================

let currentBase64Image = '';

function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    currentBase64Image = event.target.result;
    imagePreview.src = currentBase64Image;
    imagePreview.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function handleAddItem(e) {
  e.preventDefault();
  if (!currentBase64Image) {
    showToast('Please upload an image!');
    return;
  }

  const itemName = document.getElementById('item-name').value;
  const itemColor = document.getElementById('item-color').value;

  if (!itemColor) {
    showToast('Please select a color!');
    return;
  }

  const newItem = {
    id: Date.now(),
    name: itemName,
    image: currentBase64Image,
    category: document.getElementById('item-category').value,
    type: document.getElementById('item-type').value,
    color: itemColor,
    pattern: document.getElementById('item-pattern').value
  };

  clothes.unshift(newItem);
  saveData('clothes');
  
  // Reset form
  addItemForm.reset();
  currentBase64Image = '';
  imagePreview.src = '';
  imagePreview.style.display = 'none';

  showToast('Item added to closet!');
  renderCloset('all');
  
  // Navigate back to closet
  navItems[1].click(); // Click Closet tab
}

// ==========================================
// CLOSET RENDER
// ==========================================

function getColorHex(colorName) {
  const c = presetColors.find(c => c.name.toLowerCase() === colorName.toLowerCase());
  return c ? c.value : colorName;
}

function renderCloset(filter) {
  let filtered = clothes;
  if (filter !== 'all') {
    filtered = clothes.filter(c => c.category === filter);
  }

  closetCount.textContent = `${filtered.length} items`;
  closetGrid.innerHTML = '';

  if (filtered.length === 0) {
    closetGrid.innerHTML = `
      <div style="grid-column: 1 / -1" class="empty-state">
        <span class="material-icons">checkroom</span>
        <p>No items found.</p>
      </div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card card';
    const hex = getColorHex(item.color || '');
    const name = item.name || item.color;
    card.innerHTML = `
      <img src="${item.image}" alt="${name}">
      <div class="item-title" title="${name}">${name}</div>
      <div style="margin-bottom: 8px;">
        <span class="color-chip-small" style="background-color: ${hex}"></span>
      </div>
      <div>
        <span class="item-badge">${item.type}</span>
        <span class="item-badge">${item.pattern}</span>
      </div>
    `;
    closetGrid.appendChild(card);
  });
}

// ==========================================
// OUTFIT GENERATION
// ==========================================

function getRandomItem(array) {
  if (!array || array.length === 0) return null;
  return array[Math.floor(Math.random() * array.length)];
}

function generateOutfits() {
  generatedContainer.innerHTML = '';
  
  // Generate 3 random outfits
  for(let i=0; i<3; i++) {
    const outfit = createValidOutfit();
    if (outfit) {
      renderOutfitCard(outfit, generatedContainer, false);
    } else {
      if (i === 0) {
        generatedContainer.innerHTML = `<div class="empty-state"><p>Not enough compatible clothes to generate outfits!</p></div>`;
      }
      break;
    }
  }
}

function createValidOutfit() {
  const tops = clothes.filter(c => c.category === 'top');
  const bottoms = clothes.filter(c => c.category === 'bottom');
  const outerwear = clothes.filter(c => c.category === 'outerwear');
  const shoes = clothes.filter(c => c.category === 'shoes');

  if (tops.length === 0 || bottoms.length === 0) return null;

  let outfit = {};
  let attempts = 0;
  const maxAttempts = 50;

  while (attempts < maxAttempts) {
    attempts++;
    
    const top = getRandomItem(tops);
    
    // Filter bottoms based on rules
    // Rule: if top is printed -> bottom must be solid
    let validBottoms = bottoms;
    if (top.pattern === 'printed') {
      validBottoms = bottoms.filter(b => b.pattern === 'solid');
    }
    
    // Rule: Avoid mixing formal with sport
    if (top.type === 'formal') {
      validBottoms = validBottoms.filter(b => b.type !== 'sport');
    } else if (top.type === 'sport') {
      validBottoms = validBottoms.filter(b => b.type !== 'formal');
    }

    if (validBottoms.length === 0) continue; // Try another top

    const bottom = getRandomItem(validBottoms);

    outfit = { top, bottom };

    // Outerwear
    if (toggleOuterwear.checked && outerwear.length > 0) {
      let validOuter = outerwear;
      // Avoid mixing formal/sport
      if (top.type === 'formal' || bottom.type === 'formal') {
        validOuter = validOuter.filter(o => o.type !== 'sport');
      }
      if (top.type === 'sport' || bottom.type === 'sport') {
        validOuter = validOuter.filter(o => o.type !== 'formal');
      }
      
      const out = getRandomItem(validOuter);
      if (out) outfit.outerwear = out;
    }

    // Shoes
    if (toggleShoes.checked && shoes.length > 0) {
      let validShoes = shoes;
      if (top.type === 'formal' || bottom.type === 'formal') {
        validShoes = validShoes.filter(s => s.type !== 'sport');
      }
      if (top.type === 'sport' || bottom.type === 'sport') {
        validShoes = validShoes.filter(s => s.type !== 'formal');
      }
      
      const shoe = getRandomItem(validShoes);
      if (shoe) outfit.shoes = shoe;
    }

    return outfit; // Found valid outfit
  }
  
  return null;
}

function renderOutfitCard(outfit, container, isSavedCard) {
  const card = document.createElement('div');
  card.className = 'outfit-card card';
  
  // Render slots in specific order
  const order = ['outerwear', 'top', 'bottom', 'shoes'];
  
  let html = '';
  order.forEach(cat => {
    if (outfit[cat]) {
      const item = outfit[cat];
      html += `
        <div class="outfit-slot">
          <img class="outfit-slot-img" src="${item.image}" alt="">
          <div class="outfit-slot-info">
            <div class="outfit-slot-category">${item.category}</div>
            <div class="outfit-slot-details">${item.name || item.color} • ${item.pattern} • ${item.type}</div>
          </div>
        </div>
      `;
    }
  });

  if (!isSavedCard) {
    html += `
      <button class="secondary-btn save-outfit-btn">
        <span class="material-icons">favorite_border</span> Save to Favorites
      </button>
    `;
  }

  card.innerHTML = html;

  if (!isSavedCard) {
    const btn = card.querySelector('.save-outfit-btn');
    btn.addEventListener('click', () => {
      saveOutfit(outfit);
      btn.innerHTML = `<span class="material-icons">favorite</span> Saved`;
      btn.disabled = true;
    });
  }

  container.appendChild(card);
}

// ==========================================
// SAVED OUTFITS
// ==========================================

function saveOutfit(outfit) {
  savedOutfits.unshift({ id: Date.now(), ...outfit });
  saveData('saved');
  showToast('Outfit saved to favorites!');
  renderSavedOutfits();
}

function renderSavedOutfits() {
  savedContainer.innerHTML = '';
  if (savedOutfits.length === 0) {
    savedContainer.innerHTML = `
      <div class="empty-state">
        <span class="material-icons">favorite_border</span>
        <p>No saved outfits yet.</p>
      </div>`;
    return;
  }

  savedOutfits.forEach(outfit => {
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
  showToast('Profile saved!');
}

// Start
document.addEventListener('DOMContentLoaded', init);
