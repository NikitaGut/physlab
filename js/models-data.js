// Каталог моделей. Каждая модель = объект.
// category нужна для фильтрации, url — куда ведёт карточка.
const MODELS = [
  {
    id: 'uniform-motion',
    title: 'Равномерное движение',
    icon: '🚗',
    description: 'Меняй скорость и наблюдай, как тело движется по прямой.',
    category: 'kinematics',
    categoryName: 'Кинематика',
    url: 'models/uniform-motion.html',
    difficulty: 'easy'  // пригодится для бейджика «просто»
  },
  {
    id: 'newton-second',
    title: 'Второй закон Ньютона',
    icon: '🏎️',
    description: 'Изменяй силу и массу — смотри, как меняется ускорение.',
    category: 'dynamics',
    categoryName: 'Динамика',
    url: 'models/newton-second.html',
    difficulty: 'easy'
  },
  {
    id: 'free-fall',
    title: 'Свободное падение',
    icon: '🪂',
    description: 'Меняй высоту и g — наблюдай падение тела.',
    category: 'kinematics',
    categoryName: 'Кинематика',
    url: 'models/free-fall.html',
    difficulty: 'easy'
  },
  {
    id: 'projectile',
    title: 'Бросок под углом',
    icon: '⚽',
    description: 'Меняй скорость и угол — строй траекторию полёта.',
    category: 'kinematics',
    categoryName: 'Кинематика',
    url: 'models/projectile.html',
    difficulty: 'medium'
  },
  {
    id: 'ohms-law',
    title: 'Закон Ома',
    icon: '🔌',
    description: 'Меняй напряжение и сопротивление — измеряй силу тока.',
    category: 'electricity',
    categoryName: 'Электричество',
    url: 'models/ohms-law.html',
    difficulty: 'easy'
  },
  {
    id: 'oscillations',
    title: 'Гармонические колебания',
    icon: '🌊',
    description: 'Меняй амплитуду и частоту — наблюдай колебания.',
    category: 'oscillations',
    categoryName: 'Колебания',
    url: 'models/oscillations.html',
    difficulty: 'medium'
  }
];