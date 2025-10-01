// home-advanced.js - Super advanced UI/UX with animations

const sampleMenu = [ { id: 'm1', title: 'Cheese Burger', price: 120, img: 'images/burger.jpg', category:'Burger' }, { id: 'm2', title: 'Margherita Pizza', price: 250, img: 'images/pizza.jpg', category:'Pizza' }, { id: 'm3', title: 'White Sauce Pasta', price: 180, img: 'images/pasta.jpg', category:'Asian' }, { id: 'm4', title: 'Crispy Fries', price: 90, img: 'images/fries.jpg', category:'Burger' }, { id: 'm5', title: 'Veg Wrap', price: 100, img: 'images/wrap.jpg', category:'Asian' }, { id: 'm6', title: 'Chocolate Cake', price: 150, img: 'images/dessert.jpg', category:'Dessert' } ];

let cart = JSON.parse(localStorage.getItem('foodie_cart') || '[]');

function saveCart(){ localStorage.setItem('foodie_cart', JSON.stringify(cart)); updateCartCounts(); }

function updateCartCounts(){ const totalCount = cart.reduce((s,i)=>s + (i.qty||1), 0); const small = document.getElementById('cart-count-small'); if(small) { small.textContent = (${totalCount}); small.classList.add('cart-badge-animate'); setTimeout(()=>small.classList.remove('cart-badge-animate'),300); } }

function toggleMenu(){ const nav = document.getElementById('navbar'); if(!nav) return; nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'; }

// Scroll Reveal Animation function revealOnScroll(){ const elements = document.querySelectorAll('.reveal'); const windowHeight = window.innerHeight; elements.forEach(el => { const elTop = el.getBoundingClientRect().top; if(elTop < windowHeight - 100){ el.classList.add('active'); } }); } window.addEventListener('scroll', revealOnScroll);

// Filter by category function filterCategory(cat){ renderTopItems(cat); }

// Render Top Items dynamically function renderTopItems(filter=''){ const grid = document.getElementById('top-items-grid'); if(!grid) return; grid.innerHTML = ''; const list = filter ? sampleMenu.filter(i=>i.category===filter) : sampleMenu; list.forEach(item => { const card = document.createElement('div'); card.className = 'menu-card reveal'; card.innerHTML = ` <img src="${item.img}" alt="${item.title}"> <h3>${item