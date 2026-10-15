// Состояние приложения
let currentLang = localStorage.getItem('lang') || 'ru';
let currentCard = null;
let timerInterval = null;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, был ли выбран язык
    if (currentLang) {
        showScreen('altar-screen');
        updateLanguage();
    } else {
        showScreen('language-screen');
    }

    // Обработчики выбора языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            localStorage.setItem('lang', currentLang);
            showScreen('altar-screen');
            updateLanguage();
        });
    });

    // Переключатель языка в шапке
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            localStorage.setItem('lang', currentLang);
            updateLanguage();
            updateLangSwitchUI();
        });
    });

    // Клик по картам на алтаре
    document.querySelectorAll('.card-back').forEach(card => {
        card.addEventListener('click', () => {
            const deck = card.dataset.deck;
            drawCard(deck);
        });
    });

    // Кнопка назад
    document.getElementById('back-btn').addEventListener('click', () => {
        showScreen('altar-screen');
    });

    // Кнопка практики
    document.getElementById('practice-btn').addEventListener('click', () => {
        showPractice();
    });

    // Кнопка назад из практики
    document.getElementById('practice-back-btn').addEventListener('click', () => {
        showCardScreen(currentCard);
    });

    // Таймер
    document.getElementById('timer-btn').addEventListener('click', () => {
        startTimer(300); // 5 минут
    });

    document.getElementById('timer-close').addEventListener('click', () => {
        stopTimer();
    });

    updateLangSwitchUI();
});

// Показать экран
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Обновить язык
function updateLanguage() {
    // Обновляем тексты интерфейса
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (data.i18n[currentLang][key]) {
            el.textContent = data.i18n[currentLang][key];
        }
    });
}

// Обновить UI переключателя языка
function updateLangSwitchUI() {
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
}

// Вытянуть карту
function drawCard(deck) {
    const card = data.cards[deck];
    currentCard = { deck, card };
    showCardScreen(card);
}

// Показать экран карты
function showCardScreen(cardData) {
    const { deck, card } = cardData || currentCard;
    const translation = card.translations[currentLang];

    document.getElementById('card-image').textContent = card.icon;
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

// Показать практику
function showPractice() {
    const { deck, card } = currentCard;
    const translation = card.translations[currentLang];
    const practice = translation.practice;

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

// Таймер
function startTimer(seconds) {
    const modal = document.getElementById('timer-modal');
    modal.classList.add('active');
    
    let remaining = seconds;
    updateTimerDisplay(remaining);

    timerInterval = setInterval(() => {
        remaining--;
        updateTimerDisplay(remaining);

        if (remaining <= 0) {
            stopTimer();
            alert('Время вышло! 🕉');
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('timer-display').textContent = 
        `${mins}:${secs.toString().padStart(2, '0')}`;
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer-modal').classList.remove('active');
}