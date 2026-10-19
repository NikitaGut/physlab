// Текущее состояние фильтров
let searchQuery = '';
let activeCategory = 'all';

const grid = document.getElementById('models-grid');
const searchInput = document.getElementById('search');
const categoriesBox = document.getElementById('categories');
const emptyState = document.getElementById('empty-state');

// ── Категории ─────────────────────────
function renderCategories() {
  // Собираем уникальные категории из MODELS
  const categories = [{ id: 'all', name: 'Все' }];
  const seen = new Set();
  for (const m of MODELS) {
    if (!seen.has(m.category)) {
      seen.add(m.category);
      categories.push({ id: m.category, name: m.categoryName });
    }
  }

  categoriesBox.innerHTML = '';
  for (const c of categories) {
    const btn = document.createElement('button');
    btn.className = 'category-btn' + (c.id === activeCategory ? ' active' : '');
    btn.textContent = c.name;
    btn.addEventListener('click', () => {
      activeCategory = c.id;
      renderCategories();  // обновить подсветку
      renderModels();      // обновить карточки
    });
    categoriesBox.appendChild(btn);
  }
}

// ── Карточки ──────────────────────────
function renderModels() {
  const q = searchQuery.trim().toLowerCase();

  const filtered = MODELS.filter(m => {
    const matchesText = m.title.toLowerCase().includes(q);
    const matchesCat  = activeCategory === 'all' || m.category === activeCategory;
    return matchesText && matchesCat;
  });

  grid.innerHTML = '';
  emptyState.hidden = filtered.length > 0;

  for (const m of filtered) {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = m.url;
    card.innerHTML = `
      <div class="card-icon">${m.icon}</div>
      <h2 class="card-title">${m.title}</h2>
      <p class="card-desc">${m.description}</p>
      <span class="card-badge">${m.categoryName}</span>
    `;
    grid.appendChild(card);
  }
}

// ── Поиск ─────────────────────────────
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderModels();
});

// ── Старт ─────────────────────────────
renderCategories();
renderModels();