let currentLang = localStorage.getItem('lang') || 'ru';
let currentCard = null;
let timerInterval = null;

const pathsTranslations = {
    ru: {
        paths_title: "Четыре пути Бон",
        path_shamanism_title: "Шаманизм",
        path_shamanism_desc: "Внешний путь. Работа с природой, духами, элементами. Установление гармонии через подношения и ритуалы.",
        path_sutra_title: "Сутра",
        path_sutra_desc: "Путь преобразования ума. Развитие этики, сострадания, мудрости. Меняет отношение к миру.",
        path_tantra_title: "Тантра",
        path_tantra_desc: "Путь преобразования энергии. Работа с каналами, ветрами, божествами. Меняет энергетику.",
        path_dzogchen_title: "Дзогчен",
        path_dzogchen_desc: "Путь Великого Совершенства. Прямое узнавание природы ума. Без усилий — просто пребывание."
    },
    en: {
        paths_title: "Four Paths of Bon",
        path_shamanism_title: "Shamanism",
        path_shamanism_desc: "Outer path. Working with nature, spirits, elements. Harmony through offerings and rituals.",
        path_sutra_title: "Sutra",
        path_sutra_desc: "Path of mind transformation. Ethics, compassion, wisdom. Changes attitude to the world.",
        path_tantra_title: "Tantra",
        path_tantra_desc: "Path of energy transformation. Channels, winds, deities. Changes energy through practice.",
        path_dzogchen_title: "Dzogchen",
        path_dzogchen_desc: "Path of Great Perfection. Direct recognition of mind nature. Without effort — just abiding."
    },
    es: {
        paths_title: "Cuatro caminos del Bon",
        path_shamanism_title: "Chamanismo",
        path_shamanism_desc: "Camino exterior. Trabajo con naturaleza, espíritus, elementos. Armonía a través de ofrendas.",
        path_sutra_title: "Sutra",
        path_sutra_desc: "Camino de transformación mental. Ética, compasión, sabiduría. Cambia actitud al mundo.",
        path_tantra_title: "Tantra",
        path_tantra_desc: "Camino de transformación energética. Canales, vientos, deidades. Cambia energía.",
        path_dzogchen_title: "Dzogchen",
        path_dzogchen_desc: "Camino de la Gran Perfección. Reconocimiento directo de la mente. Sin esfuerzo."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ App initialized, language:', currentLang);
    
    if (currentLang) {
        showScreen('altar-screen');
        updateLanguage();
        updateLangSwitchUI();
    } else {
        showScreen('language-screen');
    }

    // Обработчики кнопок языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🌐 Language button clicked:', btn.dataset.lang);
            currentLang = btn.dataset.lang;
            localStorage.setItem('lang', currentLang);
            showScreen('altar-screen');
            updateLanguage();
            updateLangSwitchUI();
        });
    });

    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🔄 Language switched to:', btn.dataset.lang);
            currentLang = btn.dataset.lang;
            localStorage.setItem('lang', currentLang);
            updateLanguage();
            updateLangSwitchUI();
        });
    });

    document.querySelectorAll('.card-back').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const deck = card.dataset.deck;
            console.log('🎴 Card clicked:', deck);
            drawCard(deck);
        });
    });

    document.getElementById('back-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showScreen('altar-screen');
    });

    document.getElementById('practice-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showPractice();
    });

    document.getElementById('practice-back-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showCardScreen(currentCard);
    });

    document.getElementById('timer-btn').addEventListener('click', (e) => {
        e.preventDefault();
        startTimer(300);
    });

    document.getElementById('timer-close').addEventListener('click', (e) => {
        e.preventDefault();
        stopTimer();
    });

    document.getElementById('menu-btn').addEventListener('click', (e) => {
        e.preventDefault();
        console.log(' Menu clicked - showing paths');
        showPathsScreen();
    });

    document.getElementById('paths-back-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showScreen('altar-screen');
    });
});

function showScreen(screenId) {
    console.log('📱 Showing screen:', screenId);
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (data.i18n[currentLang] && data.i18n[currentLang][key]) {
            el.textContent = data.i18n[currentLang][key];
        }
    });
}

function updateLangSwitchUI() {
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
}

function drawCard(deck) {
    const deckCards = data.cards[deck];
    const randomIndex = Math.floor(Math.random() * deckCards.length);
    const card = deckCards[randomIndex];
    console.log('🎲 Drew card:', card.id);
    currentCard = { deck, card };
    showCardScreen({ deck, card });
}

function showCardScreen(cardData) {
    const { deck, card } = cardData || currentCard;
    const translation = card.translations[currentLang];

    const imageElement = document.getElementById('card-image');
    if (card.image) {
        imageElement.innerHTML = `<img src="${card.image}" alt="${translation.title}">`;
    } else {
        imageElement.textContent = card.icon;
    }
    
    document.getElementById('card-title').textContent = translation.title;
    document.getElementById('card-subtitle').textContent = translation.subtitle;
    
    const deckNames = {
        shamanism: { ru: '🌿 Шаманизм', en: '🌿 Shamanism', es: '🌿 Chamanismo' },
        sutra: { ru: '📿 Сутра', en: '📿 Sutra', es: '📿 Sutra' },
        tantra: { ru: '🔥 Тантра', en: '🔥 Tantra', es: '🔥 Tantra' },
        dzogchen: { ru: '☁️ Дзогчен', en: '☁️ Dzogchen', es: '☁️ Dzogchen' }
    };
    document.getElementById('card-deck').textContent = deckNames[deck][currentLang];
    document.getElementById('card-situation-text').textContent = translation.situation;

    showScreen('card-screen');
}

function showPractice() {
    if (!currentCard) return;
    const { card } = currentCard;
    const translation = card.translations[currentLang];
    const practice = translation.practice;

    const practiceImageElement = document.getElementById('practice-card-image');
    if (card.image) {
        practiceImageElement.innerHTML = `<img src="${card.image}" alt="${translation.title}">`;
    } else {
        practiceImageElement.textContent = card.icon;
    }

    document.getElementById('practice-title').textContent = practice.title;
    document.getElementById('practice-time').textContent = practice.time;

    const stepsContainer = document.getElementById('practice-steps');
    stepsContainer.innerHTML = '';
    practice.steps.forEach((step, index) => {
        const stepEl = document.createElement('div');
        stepEl.className = 'practice-step';
        stepEl.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <div class="step-text">${step}</div>
        `;
        stepsContainer.appendChild(stepEl);
    });

    showScreen('practice-screen');
}

function showPathsScreen() {
    const t = pathsTranslations[currentLang];
    document.querySelector('.paths-title').textContent = t.paths_title;
    document.querySelector('.path_shamanism_title').textContent = t.path_shamanism_title;
    document.querySelector('.path_shamanism_desc').textContent = t.path_shamanism_desc;
    document.querySelector('.path_sutra_title').textContent = t.path_sutra_title;
    document.querySelector('.path_sutra_desc').textContent = t.path_sutra_desc;
    document.querySelector('.path_tantra_title').textContent = t.path_tantra_title;
    document.querySelector('.path_tantra_desc').textContent = t.path_tantra_desc;
    document.querySelector('.path_dzogchen_title').textContent = t.path_dzogchen_title;
    document.querySelector('.path_dzogchen_desc').textContent = t.path_dzogchen_desc;
    showScreen('paths-screen');
}

function startTimer(seconds) {
    const modal = document.getElementById('timer-modal');
    modal.classList.add('active');
    let remaining = seconds;
    updateTimerDisplay(remaining);
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        remaining--;
        updateTimerDisplay(remaining);
        if (remaining <= 0) {
            stopTimer();
            alert('⏰ Время вышло!');
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('timer-display').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
}

function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
    document.getElementById('timer-modal').classList.remove('active');
}