let currentLang = localStorage.getItem('lang') || 'ru';
let currentCard = null;
let timerInterval = null;

document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized, language:', currentLang);
    
    if (currentLang) {
        showScreen('altar-screen');
        updateLanguage();
        updateLangSwitchUI();
    } else {
        showScreen('language-screen');
    }

    // Выбор языка на стартовом экране
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentLang = btn.dataset.lang;
            localStorage.setItem('lang', currentLang);
            console.log('Language selected:', currentLang);
            showScreen('altar-screen');
            updateLanguage();
            updateLangSwitchUI();
        });
    });

    // Переключатель языка в шапке
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentLang = btn.dataset.lang;
            localStorage.setItem('lang', currentLang);
            console.log('Language switched to:', currentLang);
            updateLanguage();
            updateLangSwitchUI();
        });
    });

    // Клик по картам на алтаре
    document.querySelectorAll('.card-back').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const deck = card.dataset.deck;
            console.log('Card clicked:', deck);
            drawCard(deck);
        });
    });

    // Кнопка назад
    document.getElementById('back-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showScreen('altar-screen');
    });

    // Кнопка практики
    document.getElementById('practice-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showPractice();
    });

    // Кнопка назад из практики
    document.getElementById('practice-back-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showCardScreen(currentCard);
    });

    // Таймер
    document.getElementById('timer-btn').addEventListener('click', (e) => {
        e.preventDefault();
        startTimer(300);
    });

    document.getElementById('timer-close').addEventListener('click', (e) => {
        e.preventDefault();
        stopTimer();
    });
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        console.log('Screen shown:', screenId);
    } else {
        console.error('Screen not found:', screenId);
    }
}

function updateLanguage() {
    console.log('Updating language to:', currentLang);
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
    const card = data.cards[deck];
    if (!card) {
        console.error('Card not found for deck:', deck);
        return;
    }
    currentCard = { deck, card };
    console.log('Drawing card:', card.id, 'from deck:', deck);
    showCardScreen({ deck, card });
}

function showCardScreen(cardData) {
    const { deck, card } = cardData || currentCard;
    const translation = card.translations[currentLang];

    if (!translation) {
        console.error('Translation not found for language:', currentLang);
        return;
    }

    document.getElementById('card-image').textContent = card.icon;
    document.getElementById('card-title').textContent = translation.title;
    document.getElementById('card-subtitle').textContent = translation.subtitle;
    
    const deckNames = {
        shamanism: { ru: '🌿 Шаманизм', en: '🌿 Shamanism', es: '🌿 Chamanismo' },
        sutra: { ru: '📿 Сутра', en: '📿 Sutra', es: '📿 Sutra' },
        tantra: { ru: '🔥 Тантра', en: '🔥 Tantra', es: ' Tantra' },
        dzogchen: { ru: '☁️ Дзогчен', en: '☁️ Dzogchen', es: '☁️ Dzogchen' }
    };
    document.getElementById('card-deck').textContent = deckNames[deck][currentLang];
    document.getElementById('card-situation-text').textContent = translation.situation;

    showScreen('card-screen');
}

function showPractice() {
    if (!currentCard) {
        console.error('No current card selected');
        return;
    }
    const { deck, card } = currentCard;
    const translation = card.translations[currentLang];
    const practice = translation.practice;

    if (!practice) {
        console.error('Practice not found');
        return;
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
    document.getElementById('timer-display').textContent = 
        `${mins}:${secs.toString().padStart(2, '0')}`;
}

function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
    document.getElementById('timer-modal').classList.remove('active');
}