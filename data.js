const i18n = {
  ru: {
    select_language: "Выберите язык",
    back: "Назад",
    bon_tradition: "Традиция Юнгдрунг Бон",
    bon_description: "Древняя тибетская традиция, основанная Тонпа Шенрабом Миво более 18 000 лет назад. Путь вечного света и изначальной мудрости.",
    teacher: "Современный учитель: Тендзин Вангьял Ринпоче",
    continue: "Продолжить →",
    three_gates: "Три Врата",
    body: "Тело",
    speech: "Речь",
    mind: "Ум",
    elements: "Элементы",
    dream: "Сон",
    transition: "Переходы",
    offerings: "Подношения",
    library: "Библиотека",
    search_placeholder: "Поиск практик...",
    what_to_do: "🔥 Практика",
    start_timer: "⏱ Таймер",
    close: "Закрыть",
    flashcards_title: "Флеш-карточки",
    mantras: "Мантры",
    syllables: "Слоги",
    chakras: "Чакры",
    dzogchen_terms: "Дзогчен",
    prev_card: "← Предыдущая",
    next_card: "Следующая →",
    books_title: "Книги Тендзина Вангьяла Ринпоче",
    body_title: "Врата Тела",
    speech_title: "Врата Речи",
    mind_title: "Врата Ума",
    elements_title: "Пять Элементов",
    dream_title: "Йога Сна",
    transition_title: "Переходные состояния",
    offerings_title: "Подношения",
    library_title: "Библиотека"
  },
  en: {
    select_language: "Select language",
    back: "Back",
    bon_tradition: "Yungdrung Bon Tradition",
    bon_description: "Ancient Tibetan tradition founded by Tonpa Shenrab Miwo over 18,000 years ago.",
    teacher: "Contemporary teacher: Tenzin Wangyal Rinpoche",
    continue: "Continue →",
    three_gates: "Three Gates",
    body: "Body",
    speech: "Speech",
    mind: "Mind",
    elements: "Elements",
    dream: "Dream",
    transition: "Transitions",
    offerings: "Offerings",
    library: "Library",
    search_placeholder: "Search practices...",
    what_to_do: "🔥 Practice",
    start_timer: "⏱ Timer",
    close: "Close",
    flashcards_title: "Flashcards",
    mantras: "Mantras",
    syllables: "Syllables",
    chakras: "Chakras",
    dzogchen_terms: "Dzogchen",
    prev_card: "← Previous",
    next_card: "Next →",
    books_title: "Books by Tenzin Wangyal Rinpoche",
    body_title: "Gate of Body",
    speech_title: "Gate of Speech",
    mind_title: "Gate of Mind",
    elements_title: "Five Elements",
    dream_title: "Dream Yoga",
    transition_title: "Transition States",
    offerings_title: "Offerings",
    library_title: "Library"
  },
  es: {
    select_language: "Elige idioma",
    back: "Volver",
    bon_tradition: "Tradición Yungdrung Bon",
    bon_description: "Antigua tradición tibetana fundada por Tonpa Shenrab Miwo hace más de 18,000 años.",
    teacher: "Maestro contemporáneo: Tenzin Wangyal Rinpoche",
    continue: "Continuar →",
    three_gates: "Tres Puertas",
    body: "Cuerpo",
    speech: "Habla",
    mind: "Mente",
    elements: "Elementos",
    dream: "Sueño",
    transition: "Transiciones",
    offerings: "Ofrendas",
    library: "Biblioteca",
    search_placeholder: "Buscar prácticas...",
    what_to_do: "🔥 Práctica",
    start_timer: "⏱ Temporizador",
    close: "Cerrar",
    flashcards_title: "Tarjetas",
    mantras: "Mantras",
    syllables: "Sílabas",
    chakras: "Chakras",
    dzogchen_terms: "Dzogchen",
    prev_card: "← Anterior",
    next_card: "Siguiente →",
    books_title: "Libros de Tenzin Wangyal Rinpoche",
    body_title: "Puerta del Cuerpo",
    speech_title: "Puerta del Habla",
    mind_title: "Puerta de la Mente",
    elements_title: "Cinco Elementos",
    dream_title: "Yoga del Sueño",
    transition_title: "Estados de Transición",
    offerings_title: "Ofrendas",
    library_title: "Biblioteca"
  }
};

const data = {
  body: [
    { id: "nine-breaths", icon: "🌬️", translations: { ru: { title: "Девять очистительных дыханий", subtitle: "Цалунг — основа всех практик", situation: "Энергетический застой, тревожность.", practice: { title: "Девять очистительных дыханий", time: "5 мин", steps: ["Сядьте в пятичленную позу.", "Закройте правую ноздрю, вдохните через левую белый свет.", "Задержите, визуализируя очищение.", "Закройте левую, выдохните через правую.", "Повторите 9 раз, меняя стороны."] } }, en: { title: "Nine Purifying Breaths", subtitle: "Tsa Lung — foundation", situation: "Energy stagnation, anxiety.", practice: { title: "Nine Purifying Breaths", time: "5 min", steps: ["Sit in five-point posture.", "Close right nostril, inhale white light through left.", "Hold, visualizing purification.", "Close left, exhale through right.", "Repeat 9 times, switching sides."] } }, es: { title: "Nueve Respiraciones Purificadoras", subtitle: "Tsa Lung — base", situation: "Estancamiento energético.", practice: { title: "Nueve Respiraciones", time: "5 min", steps: ["Siéntate en postura de cinco puntos.", "Cierra fosa derecha, inhala luz blanca por izquierda.", "Mantén, visualizando purificación.", "Cierra izquierda, exhala por derecha.", "Repite 9 veces alternando."] } } } },
    { id: "tsalung-fire", icon: "🔥", translations: { ru: { title: "Цалунг: Огонь", subtitle: "Развитие внутреннего тепла", situation: "Холод, апатия.", practice: { title: "Движение огня", time: "5 мин", steps: ["Визуализируйте красный слог РАМ в пупке.", "Вдохните огонь вверх по центральному каналу.", "Задержите дыхание, почувствуйте тепло.", "Выдохните, рассеивая тепло.", "Повторите 9 раз."] } }, en: { title: "Tsa Lung: Fire", subtitle: "Inner heat", situation: "Cold, apathy.", practice: { title: "Fire Movement", time: "5 min", steps: ["Visualize red RAM in navel.", "Inhale fire up central channel.", "Hold breath, feel warmth.", "Exhale, spreading warmth.", "Repeat 9 times."] } }, es: { title: "Tsa Lung: Fuego", subtitle: "Calor interno", situation: "Frío, apatía.", practice: { title: "Movimiento de Fuego", time: "5 min", steps: ["Visualiza RAM rojo en ombligo.", "Inhala fuego por canal central.", "Mantén, siente calor.", "Exhala, expande calor.", "Repite 9 veces."] } } } },
    { id: "trulkhor-hammer", icon: "⚡", translations: { ru: { title: "Трюлкхор: Молот", subtitle: "Преодоление гнева", situation: "Гнев, раздражение.", practice: { title: "Молот атлета", time: "5 мин", steps: ["Встаньте, ноги на ширине плеч.", "Поднимите руки над головой.", "Резко опустите с выдохом ХА.", "Повторите 7 раз.", "Побудьте в тишине."] } }, en: { title: "Trulkhor: Hammer", subtitle: "Overcoming anger", situation: "Anger, irritation.", practice: { title: "Athlete's Hammer", time: "5 min", steps: ["Stand, feet shoulder-width.", "Raise hands above head.", "Lower sharply with HA exhale.", "Repeat 7 times.", "Rest in silence."] } }, es: { title: "Trulkhor: Martillo", subtitle: "Superando ira", situation: "Ira, irritación.", practice: { title: "Martillo del Atleta", time: "5 min", steps: ["Párate, pies al ancho de hombros.", "Levanta manos sobre cabeza.", "Baja bruscamente con HA.", "Repite 7 veces.", "Descansa en silencio."] } } } }
  ],

  speech: [
    { id: "warrior-a", icon: "⚪", translations: { ru: { title: "Слог А", subtitle: "Белый, коронная чакра", situation: "Ограниченность.", practice: { title: "Практика А", time: "5 мин", steps: ["Визуализируйте белый А на макушке.", "Протяжно произнесите А-А-А.", "Почувствуйте пространство.", "Позвольте уму раствориться.", "Побудьте в чистоте."] } }, en: { title: "Syllable A", subtitle: "White, crown chakra", situation: "Limitation.", practice: { title: "Practice of A", time: "5 min", steps: ["Visualize white A at crown.", "Prolonged A-A-A.", "Feel space.", "Let mind dissolve.", "Rest in purity."] } }, es: { title: "Sílaba A", subtitle: "Blanco, coronilla", situation: "Limitación.", practice: { title: "Práctica de A", time: "5 min", steps: ["Visualiza A blanca en coronilla.", "A-A-A prolongado.", "Siente espacio.", "Deja mente disolverse.", "Descansa en pureza."] } } } },
    { id: "warrior-om", icon: "🔴", translations: { ru: { title: "Слог ОМ", subtitle: "Красный, горловая чакра", situation: "Нечистая речь.", practice: { title: "Практика ОМ", time: "5 мин", steps: ["Визуализируйте красный ОМ в горле.", "Протяжно произнесите ОМ-ОМ-ОМ.", "Почувствуйте спонтанность.", "Очистите речь.", "Побудьте в чистой речи."] } }, en: { title: "Syllable OM", subtitle: "Red, throat chakra", situation: "Impure speech.", practice: { title: "Practice of OM", time: "5 min", steps: ["Visualize red OM in throat.", "Prolonged OM-OM-OM.", "Feel spontaneity.", "Purify speech.", "Rest in pure speech."] } }, es: { title: "Sílaba OM", subtitle: "Rojo, garganta", situation: "Habla impura.", practice: { title: "Práctica de OM", time: "5 min", steps: ["Visualiza OM rojo en garganta.", "OM-OM-OM prolongado.", "Siente espontaneidad.", "Purifica habla.", "Descansa en habla pura."] } } } }
  ],

  mind: [
    { id: "kunzhi", icon: "☁️", translations: { ru: { title: "Кунжи", subtitle: "Основа всего", situation: "Забыл пространство.", practice: { title: "Возвращение к Кунжи", time: "5 мин", steps: ["Остановись.", "Скажи: «Всё — игра Кунжи».", "Не меняй ничего.", "Почувствуй единство.", "Просто будь."] } }, en: { title: "Kunzhi", subtitle: "Ground of All", situation: "Forgot space.", practice: { title: "Return to Kunzhi", time: "5 min", steps: ["Stop.", "Say: 'All is Kunzhi's play'.", "Don't change anything.", "Feel unity.", "Just be."] } }, es: { title: "Kunzhi", subtitle: "Fundamento", situation: "Olvidaste espacio.", practice: { title: "Regreso a Kunzhi", time: "5 min", steps: ["Detente.", "Di: 'Todo es juego de Kunzhi'.", "No cambies nada.", "Siente unidad.", "Solo sé."] } } } },
    { id: "rigpa", icon: "✨", translations: { ru: { title: "Ригпа", subtitle: "Изначальное осознавание", situation: "Потеря присутствия.", practice: { title: "Узнавание Ригпа", time: "5 мин", steps: ["Остановись.", "Посмотри на смотрящего.", "Не ищи — узнай.", "Это Ригпа.", "Побудь в узнавании."] } }, en: { title: "Rigpa", subtitle: "Primordial awareness", situation: "Lost presence.", practice: { title: "Recognizing Rigpa", time: "5 min", steps: ["Stop.", "Look at the looker.", "Don't search — recognize.", "This is Rigpa.", "Rest in recognition."] } }, es: { title: "Rigpa", subtitle: "Conciencia primordial", situation: "Perdiste presencia.", practice: { title: "Reconocer Rigpa", time: "5 min", steps: ["Detente.", "Mira al que mira.", "No busques — reconoce.", "Esto es Rigpa.", "Descansa en reconocimiento."] } } } }
  ],

  elements: [
    { id: "earth", icon: "🏔️", translations: { ru: { title: "Земля", subtitle: "Устойчивость", situation: "Тревога.", practice: { title: "Сила Земли", time: "5 мин", steps: ["Почувствуй землю под собой.", "Визуализируй желтый свет.", "Вдохни устойчивость.", "Побудь в покое."] } }, en: { title: "Earth", subtitle: "Stability", situation: "Anxiety.", practice: { title: "Earth Power", time: "5 min", steps: ["Feel earth beneath you.", "Visualize yellow light.", "Inhale stability.", "Rest in peace."] } }, es: { title: "Tierra", subtitle: "Estabilidad", situation: "Ansiedad.", practice: { title: "Poder Tierra", time: "5 min", steps: ["Siente tierra bajo ti.", "Visualiza luz amarilla.", "Inhala estabilidad.", "Descansa en paz."] } } } },
    { id: "water", icon: "💧", translations: { ru: { title: "Вода", subtitle: "Текучесть", situation: "Скованность.", practice: { title: "Текучесть Воды", time: "5 мин", steps: ["Выпей воду медленно.", "Визуализируй синий свет.", "Отпусти контроль.", "Позволь течь."] } }, en: { title: "Water", subtitle: "Flow", situation: "Rigidity.", practice: { title: "Water Flow", time: "5 min", steps: ["Drink water slowly.", "Visualize blue light.", "Release control.", "Let flow."] } }, es: { title: "Agua", subtitle: "Fluidez", situation: "Rigidez.", practice: { title: "Flujo Agua", time: "5 min", steps: ["Bebe agua lentamente.", "Visualiza luz azul.", "Suelta control.", "Deja fluir."] } } } }
  ],

  dream: [
    { id: "dream-prep", icon: "🌙", translations: { ru: { title: "Подготовка ко сну", subtitle: "Осознанные сновидения", situation: "Не запоминать сны.", practice: { title: "Подготовка", time: "10 мин", steps: ["Днем осознавай бодрствование.", "Вечером — намерение осознавать сны.", "Перед сном — визуализация света в сердце.", "При пробуждении — вспоминай сон."] } }, en: { title: "Dream Preparation", subtitle: "Lucid dreaming", situation: "Not remembering dreams.", practice: { title: "Preparation", time: "10 min", steps: ["Day — recognize waking.", "Evening — intention for lucid dreams.", "Before sleep — visualize light in heart.", "Upon waking — recall dream."] } }, es: { title: "Preparación Sueño", subtitle: "Sueños lúcidos", situation: "No recordar sueños.", practice: { title: "Preparación", time: "10 min", steps: ["Día — reconoce vigilia.", "Tarde — intención sueños lúcidos.", "Antes dormir — visualiza luz en corazón.", "Al despertar — recuerda sueño."] } } } }
  ],

  transition: [
    { id: "bardo-life", icon: "🌅", translations: { ru: { title: "Переходное состояние жизни", subtitle: "От рождения до ухода", situation: "Забыл о непостоянстве.", practice: { title: "Памятование", time: "5 мин", steps: ["Эта жизнь — переходное состояние.", "Всё временно.", "Используй момент для практики.", "Не цепляйся.", "Готовься."] } }, en: { title: "Bardo of Life", subtitle: "From birth to departure", situation: "Forgot impermanence.", practice: { title: "Remembering", time: "5 min", steps: ["This life is transitional.", "Everything is temporary.", "Use moment for practice.", "Don't cling.", "Prepare."] } }, es: { title: "Bardo de Vida", subtitle: "Del nacimiento a la partida", situation: "Olvidaste impermanencia.", practice: { title: "Recordando", time: "5 min", steps: ["Esta vida es transitoria.", "Todo es temporal.", "Usa momento para práctica.", "No te aferres.", "Prepárate."] } } } }
  ],

  offerings: [
    { id: "sang", icon: "🌫️", translations: { ru: { title: "Санг", subtitle: "Дымовое подношение", situation: "Тяжесть в месте.", practice: { title: "Ритуал Санг", time: "10 мин", steps: ["Зажгите можжевельник.", "Визуализируйте дым как подношение.", "Пригласите духов природы.", "Предложите дым.", "Попросите очищения."] } }, en: { title: "Sang", subtitle: "Smoke offering", situation: "Heaviness in place.", practice: { title: "Sang Ritual", time: "10 min", steps: ["Light juniper.", "Visualize smoke as offering.", "Invite nature spirits.", "Offer smoke.", "Ask for purification."] } }, es: { title: "Sang", subtitle: "Ofrenda de humo", situation: "Pesadez en lugar.", practice: { title: "Ritual Sang", time: "10 min", steps: ["Enciende enebro.", "Visualiza humo como ofrenda.", "Invita espíritus naturaleza.", "Ofrece humo.", "Pide purificación."] } } } }
  ],

  library: []
};

const flashcards = {
  mantras: [
    { front: "Тонпа Шенраб", back: "ОМ МА ТЕ МА ЙЕ СА ЛЕ ХУМ" },
    { front: "Шенла Одкар", back: "ОМ МУНИ ТРИГЬЕ ДУ ШЕН" },
    { front: "Шерап Чамма", back: "ОМ ПАДМА КИЛИ КИЛИ ШЕРАП ЧАММА ХУМ СОХА" }
  ],
  syllables: [
    { front: "А (белый)", back: "Коронная чакра, пространство" },
    { front: "ОМ (красный)", back: "Горловая чакра, качество" },
    { front: "ХУНГ (синий)", back: "Сердечная чакра" },
    { front: "РАМ (красный)", back: "Пупочная чакра" },
    { front: "ДЗА (зеленый)", back: "Тайная чакра" }
  ],
  elements: [
    { front: "Земля", back: "Желтый, устойчивость" },
    { front: "Вода", back: "Синий, текучесть" },
    { front: "Огонь", back: "Красный, трансформация" },
    { front: "Воздух", back: "Зеленый, движение" },
    { front: "Пространство", back: "Белый, открытость" }
  ],
  chakras: [
    { front: "Коронная", back: "А, пространство" },
    { front: "Горловая", back: "ОМ, качество" },
    { front: "Сердечная", back: "ХУНГ, сострадание" },
    { front: "Пупочная", back: "РАМ, действие" },
    { front: "Тайная", back: "ДЗА, деятельность" }
  ],
  dzogchen: [
    { front: "Кунжи", back: "Основа всего" },
    { front: "Ригпа", back: "Изначальное осознавание" },
    { front: "Сем", back: "Обычный ум" },
    { front: "Цал", back: "Энергия" },
    { front: "Трекчо", back: "Прорыв" },
    { front: "Тхогёл", back: "Перескок" }
  ],
  bardo: [
    { front: "Бардо жизни", back: "От рождения до ухода" },
    { front: "Бардо перехода", back: "Растворение элементов" },
    { front: "Бардо ясности", back: "Встреча со светом" },
    { front: "Бардо становления", back: "Поиск нового рождения" }
  ]
};

let currentLang = 'ru';
let currentCard = null;
let currentSection = null;
let timerInterval = null;
let currentFlashcardCategory = 'mantras';
let currentFlashcardIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let lastScreen = 'main-screen';

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function updateLanguage() {
  const texts = i18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (texts[key]) el.textContent = texts[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (texts[key]) el.placeholder = texts[key];
  });
}

function selectLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  showScreen('intro-screen');
  updateLanguage();
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateLanguage();
}

function showSection(section) {
  currentSection = section;
  lastScreen = 'section-screen';
  const titles = {
    body: i18n[currentLang].body_title,
    speech: i18n[currentLang].speech_title,
    mind: i18n[currentLang].mind_title,
    elements: i18n[currentLang].elements_title,
    dream: i18n[currentLang].dream_title,
    transition: i18n[currentLang].transition_title,
    offerings: i18n[currentLang].offerings_title,
    library: i18n[currentLang].library_title
  };
  document.getElementById('section-title').textContent = titles[section];
  showSectionList(section);
  showScreen('section-screen');
}

function showSectionList(section, filter = '') {
  const cards = data[section] || [];
  const listEl = document.getElementById('library-list');
  listEl.innerHTML = '';
  const filtered = filter ? cards.filter(c => {
    const t = c.translations[currentLang];
    return t.title.toLowerCase().includes(filter) || t.subtitle.toLowerCase().includes(filter);
  }) : cards;
  filtered.forEach((card, index) => {
    const t = card.translations[currentLang];
    const item = document.createElement('div');
    item.className = 'library-item';
    item.innerHTML = `<div class="library-icon">${card.icon}</div><div class="library-info"><h4>${t.title}</h4><p>${t.subtitle}</p></div>`;
    item.onclick = () => showCard(section, index);
    listEl.appendChild(item);
  });
  if (filtered.length === 0) {
    listEl.innerHTML = '<div class="favorites-empty">Ничего не найдено</div>';
  }
}

function showCard(section, index) {
  const card = data[section][index];
  currentCard = { section, card, index };
  const t = card.translations[currentLang];
  const imageEl = document.getElementById('card-image');
  if (card.image) {
    imageEl.innerHTML = '<img src="' + card.image + '">';
  } else {
    imageEl.textContent = card.icon;
  }
  document.getElementById('card-title').textContent = t.title;
  document.getElementById('card-subtitle').textContent = t.subtitle;
  document.getElementById('card-deck').textContent = section;
  document.getElementById('card-situation-text').textContent = t.situation;
  updateFavoriteButton();
  showScreen('card-screen');
}

function goBackFromCard() {
  showScreen(lastScreen);
}

function showPractice() {
  if (!currentCard) return;
  const t = currentCard.card.translations[currentLang].practice;
  document.getElementById('practice-title').textContent = t.title;
  document.getElementById('practice-time').textContent = t.time;
  const stepsEl = document.getElementById('practice-steps');
  stepsEl.innerHTML = '';
  t.steps.forEach((step, i) => {
    stepsEl.innerHTML += '<div class="practice-step"><div class="step-number">' + (i+1) + '</div><div class="step-text">' + step + '</div></div>';
  });
  showScreen('practice-screen');
}

function searchCards() {
  const query = document.getElementById('search-input').value.toLowerCase();
  if (currentSection && data[currentSection]) {
    showSectionList(currentSection, query);
  }
}

function showFlashcards(category) {
  currentFlashcardCategory = category;
  currentFlashcardIndex = 0;
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  updateFlashcard();
  showScreen('flashcards-screen');
}

function updateFlashcard() {
  const cards = flashcards[currentFlashcardCategory];
  const card = cards[currentFlashcardIndex];
  document.getElementById('flashcard-front').textContent = card.front;
  document.getElementById('flashcard-back').textContent = card.back;
  document.getElementById('flashcard-counter').textContent = `${currentFlashcardIndex + 1} / ${cards.length}`;
  document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  const cards = flashcards[currentFlashcardCategory];
  currentFlashcardIndex = (currentFlashcardIndex + 1) % cards.length;
  updateFlashcard();
}

function prevCard() {
  const cards = flashcards[currentFlashcardCategory];
  currentFlashcardIndex = (currentFlashcardIndex - 1 + cards.length) % cards.length;
  updateFlashcard();
}

function toggleFavorite() {
  if (!currentCard) return;
  const cardId = currentCard.card.id;
  const index = favorites.findIndex(f => f.cardId === cardId);
  if (index >= 0) {
    favorites.splice(index, 1);
  } else {
    favorites.push({ section: currentCard.section, cardId: cardId, timestamp: Date.now() });
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  updateFavoriteButton();
}

function updateFavoriteButton() {
  const btn = document.getElementById('favorite-btn-card');
  if (!currentCard || !btn) return;
  const cardId = currentCard.card.id;
  const isFavorite = favorites.some(f => f.cardId === cardId);
  btn.textContent = isFavorite ? '⭐' : '☆';
  btn.classList.toggle('active', isFavorite);
}

function startTimer(seconds) {
  document.getElementById('timer-modal').classList.add('active');
  let remaining = seconds;
  updateTimerDisplay(remaining);
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    remaining--;
    updateTimerDisplay(remaining);
    if (remaining <= 0) { stopTimer(); alert('Время вышло!'); }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  document.getElementById('timer-display').textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  document.getElementById('timer-modal').classList.remove('active');
}

window.onload = function() {
  const saved = localStorage.getItem('lang');
  if (saved) { currentLang = saved; showScreen('intro-screen'); updateLanguage(); }
  else { showScreen('language-screen'); }
};