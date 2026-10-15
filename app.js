let currentLang = 'ru';
let currentCard = null;
let timerInterval = null;

console.log('✅ App.js загружен успешно');

function showScreen(screenId) {
    console.log('Переход на экран:', screenId);
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function selectLang(lang) {
    console.log('Выбран язык:', lang);
    currentLang = lang;
    localStorage.setItem('lang', lang);
    showScreen('altar-screen');
}

function switchLang(lang) {
    console.log('Переключение языка:', lang);
    currentLang = lang;
    localStorage.setItem('lang', lang);
    // Обновляем активную кнопку
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

function drawCard(deck) {
    console.log('Вытянута карта из колоды:', deck);
    const cards = data.cards[deck];
    const card = cards[Math.floor(Math.random() * cards.length)];
    currentCard = { deck, card };
    
    const translation = card.translations[currentLang];
    const imageEl = document.getElementById('card-image');
    
    if (card.image) {
        imageEl.innerHTML = '<img src="' + card.image + '" alt="' + translation.title + '">';
    } else {
        imageEl.textContent = card.icon;
    }
    
    document.getElementById('card-title').textContent = translation.title;
    document.getElementById('card-subtitle').textContent = translation.subtitle;
    document.getElementById('card-deck').textContent = deck;
    document.getElementById('card-situation-text').textContent = translation.situation;
    
    showScreen('card-screen');
}

function showPractice() {
    console.log('Показ практики');
    if (!currentCard) return;
    const card = currentCard.card;
    const translation = card.translations[currentLang];
    const practice = translation.practice;
    
    const imageEl = document.getElementById('practice-card-image');
    if (card.image) {
        imageEl.innerHTML = '<img src="' + card.image + '" alt="' + translation.title + '">';
    } else {
        imageEl.textContent = card.icon;
    }
    
    document.getElementById('practice-title').textContent = practice.title;
    document.getElementById('practice-time').textContent = practice.time;
    
    const stepsEl = document.getElementById('practice-steps');
    stepsEl.innerHTML = '';
    practice.steps.forEach((step, i) => {
        stepsEl.innerHTML += '<div class="practice-step"><div class="step-number">' + (i + 1) + '</div><div class="step-text">' + step + '</div></div>';
    });
    
    showScreen('practice-screen');
}

function startTimer(seconds) {
    console.log('Таймер запущен:', seconds, 'секунд');
    document.getElementById('timer-modal').classList.add('active');
    let remaining = seconds;
    updateTimerDisplay(remaining);
    
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        remaining--;
        updateTimerDisplay(remaining);
        if (remaining <= 0) {
            stopTimer();
            alert('Время вышло!');
        }
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

// Инициализация
window.onload = function() {
    console.log('✅ Страница загружена');
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
        showScreen('altar-screen');
    } else {
        showScreen('language-screen');
    }
};