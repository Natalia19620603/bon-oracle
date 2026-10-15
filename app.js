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

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
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
});

function showScreen(screenId) {
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
    
    console.log('Randomly drew:', card.id, 'from deck:', deck);
    
    currentCard = { deck, card };
    showCardScreen({ deck, card });
}

function showCardScreen(cardData) {
    const { deck, card } = cardData || currentCard;
    const translation = card.translations[currentLang];

    const imageElement = document.getElementById('card-image');
    if (card.image) {
        imageElement.innerHTML = `<img src="${card.image}" alt="${translation.title}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">`;
    } else {
        imageElement.textContent = card.icon;
    }
    
    document.getElementById('card-title').textContent = translation.title;
    document.getElementById('card-subtitle').textContent = translation.subtitle;
    
    const deckNames = {
        shamanism: { ru: '🌿 Шаманизм', en: '🌿 Shamanism', es: '🌿 Chamanismo' },
        sutra: { ru: ' Сутра', en: '📿 Sutra', es: '📿 Sutra' },
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

    // Показываем картинку карты на экране практики
    const practiceImageElement = document.getElementById('practice-card-image');
    if (card.image) {
        practiceImageElement.innerHTML = `<img src="${card.image}" alt="${translation.title}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">`;
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