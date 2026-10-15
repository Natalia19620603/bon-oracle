const data = {
    i18n: {
        ru: {
            altar_question: "Что мне важно вспомнить сегодня?",
            what_to_do: "🔥 Что делать?",
            details: "📖 Подробнее",
            other_levels: "🔗 Другие уровни",
            start_timer: "Начать таймер",
            back: "Назад",
            close: "Закрыть",
            deck_shamanism: "Шаманизм",
            deck_sutra: "Сутра",
            deck_tantra: "Тантра",
            deck_dzogchen: "Дзогчен"
        },
        en: {
            altar_question: "What is important for me to remember today?",
            what_to_do: " What to do?",
            details: " Details",
            other_levels: "🔗 Other levels",
            start_timer: "Start timer",
            back: "Back",
            close: "Close",
            deck_shamanism: "Shamanism",
            deck_sutra: "Sutra",
            deck_tantra: "Tantra",
            deck_dzogchen: "Dzogchen"
        },
        es: {
            altar_question: "¿Qué es importante que recuerde hoy?",
            what_to_do: "🔥 ¿Qué hacer?",
            details: "📖 Detalles",
            other_levels: "🔗 Otros niveles",
            start_timer: "Iniciar temporizador",
            back: "Volver",
            close: "Cerrar",
            deck_shamanism: "Chamanismo",
            deck_sutra: "Sutra",
            deck_tantra: "Tantra",
            deck_dzogchen: "Dzogchen"
        }
    },

    // ВАЖНО: Теперь это МАССИВЫ (в квадратных скобках [ ]), а не одиночные объекты
    cards: {
        shamanism: [
            {
                id: "nagi",
                icon: "🐍",
                translations: {
                    ru: { title: "Наги", subtitle: "Духи воды", situation: "Ты забыл о связи с природой. Вода — это жизнь, и ты используешь её механически.", practice: { title: "Связь с водой", time: "1-2 минуты", steps: ["Встань у источника воды.", "Положи руку на сосуд.", "Скажи: «Я вижу тебя, наги. Благодарю за воду».", "Визуализируй синий свет.", "Пей с осознанием."] } },
                    en: { title: "Nagi", subtitle: "Water spirits", situation: "You forgot your connection with nature. Water is life, used mechanically.", practice: { title: "Connection with water", time: "1-2 minutes", steps: ["Stand by a water source.", "Place hand on container.", "Say: 'I see you, nagas. Thank you.'", "Visualize blue light.", "Drink with awareness."] } },
                    es: { title: "Nagi", subtitle: "Espíritus del agua", situation: "Olvidaste tu conexión con la naturaleza. El agua es vida, usada mecánicamente.", practice: { title: "Conexión con el agua", time: "1-2 minutos", steps: ["Párate junto al agua.", "Pon la mano en el recipiente.", "Di: 'Los veo, nagas. Gracias.'", "Visualiza luz azul.", "Bebe con conciencia."] } }
                }
            },
            {
                id: "earth",
                icon: "🏔️",
                translations: {
                    ru: { title: "Земля", subtitle: "Стихия устойчивости", situation: "Ты чувствуешь тревогу, потерю опоры, суету. Тебе нужно заземлиться.", practice: { title: "Сила Земли", time: "2 минуты", steps: ["Поставь стопы плотно на пол.", "Представь корни, уходящие в землю.", "Вдохни желтый свет земли.", "Почувствуй тяжесть и покой.", "Скажи: «Я в безопасности»."] } },
                    en: { title: "Earth", subtitle: "Element of stability", situation: "You feel anxiety, loss of ground, rush. You need to ground yourself.", practice: { title: "Power of Earth", time: "2 minutes", steps: ["Place feet firmly on floor.", "Imagine roots going into earth.", "Inhale yellow earth light.", "Feel weight and peace.", "Say: 'I am safe'."] } },
                    es: { title: "Tierra", subtitle: "Elemento de estabilidad", situation: "Sientes ansiedad, pérdida de suelo, prisa. Necesitas enraizarte.", practice: { title: "Poder de la Tierra", time: "2 minutos", steps: ["Pon los pies firmes.", "Imagina raíces en la tierra.", "Inhala luz amarilla.", "Siente peso y paz.", "Di: 'Estoy a salvo'."] } }
                }
            }
        ],

        sutra: [
            {
                id: "compassion",
                icon: "🤲",
                translations: {
                    ru: { title: "Сострадание", subtitle: "Ньиндже", situation: "Ты черств, раздражен, забыл о страданиях других.", practice: { title: "Медитация сострадания", time: "2 минуты", steps: ["Вспомни страдающего человека.", "Положи руку на сердце.", "Скажи: «Пусть ты будешь свободен от страданий».", "Представь белый свет от сердца.", "Повтори: «Пусть все будут счастливы»."] } },
                    en: { title: "Compassion", subtitle: "Nyingje", situation: "You are hardened, irritated, forgot others' suffering.", practice: { title: "Compassion meditation", time: "2 minutes", steps: ["Recall a suffering person.", "Hand on heart.", "Say: 'May you be free from suffering'.", "Visualize white light.", "Repeat: 'May all be happy'."] } },
                    es: { title: "Compasión", subtitle: "Nyingje", situation: "Estás endurecido, irritado, olvidaste el sufrimiento ajeno.", practice: { title: "Meditación de compasión", time: "2 minutos", steps: ["Recuerda a alguien que sufre.", "Mano en el corazón.", "Di: 'Que seas libre del sufrimiento'.", "Visualiza luz blanca.", "Repite: 'Que todos sean felices'."] } }
                }
            },
            {
                id: "generosity",
                icon: "",
                translations: {
                    ru: { title: "Щедрость", subtitle: "Джинпа", situation: "Ты чувствуешь жадность, страх нехватки, желание всё контролировать.", practice: { title: "Практика щедрости", time: "1 минута", steps: ["Посмотри на вещь перед собой.", "Мысленно подари её всем существам.", "Отпусти чувство собственности.", "Улыбнись.", "Почувствуй простор."] } },
                    en: { title: "Generosity", subtitle: "Jinpa", situation: "You feel greed, fear of lack, desire to control.", practice: { title: "Generosity practice", time: "1 minute", steps: ["Look at an object.", "Mentally gift it to all beings.", "Release ownership.", "Smile.", "Feel spaciousness."] } },
                    es: { title: "Generosidad", subtitle: "Jinpa", situation: "Sientes avaricia, miedo a la escasez, deseo de control.", practice: { title: "Práctica de generosidad", time: "1 minuto", steps: ["Mira un objeto.", "Regálalo mentalmente a todos.", "Suelta la propiedad.", "Sonríe.", "Siente amplitud."] } }
                }
            }
        ],

        tantra: [
            {
                id: "fire_prana",
                icon: "🔥",
                translations: {
                    ru: { title: "Прана огня", subtitle: "Внутренний огонь", situation: "Ты чувствуешь тупость, холод, отсутствие энергии.", practice: { title: "Активация огня", time: "3 минуты", steps: ["Сядь прямо, внимание на пупок.", "Представь красный треугольник.", "9 дыханий: вдох красный, выдох серый.", "Повтори: А РАМ (7 раз).", "Почувствуй тепло."] } },
                    en: { title: "Fire Prana", subtitle: "Inner fire", situation: "You feel dullness, cold, lack of energy.", practice: { title: "Activating fire", time: "3 minutes", steps: ["Sit straight, focus on navel.", "Visualize red triangle.", "9 breaths: inhale red, exhale gray.", "Repeat: AH RAM (7 times).", "Feel warmth."] } },
                    es: { title: "Prana de fuego", subtitle: "Fuego interno", situation: "Sientes embotamiento, frío, falta de energía.", practice: { title: "Activando fuego", time: "3 minutos", steps: ["Siéntate recto, ombligo.", "Visualiza triángulo rojo.", "9 respiraciones: inhala rojo, exhala gris.", "Repite: AH RAM (7 veces).", "Siente calor."] } }
                }
            },
            {
                id: "space_prana",
                icon: "",
                translations: {
                    ru: { title: "Прана пространства", subtitle: "Открытость", situation: "Ты чувствуешь скованность, застой, тяжесть в теле.", practice: { title: "Простор в теле", time: "2 минуты", steps: ["Расслабь плечи и челюсть.", "Представь белое пространство внутри.", "Вдохни легкий ветер.", "Выдохни напряжение.", "Побудь в пустоте."] } },
                    en: { title: "Space Prana", subtitle: "Openness", situation: "You feel tightness, stagnation, heaviness in body.", practice: { title: "Space in body", time: "2 minutes", steps: ["Relax shoulders and jaw.", "Imagine white space inside.", "Inhale light wind.", "Exhale tension.", "Rest in emptiness."] } },
                    es: { title: "Prana de espacio", subtitle: "Apertura", situation: "Sientes rigidez, estancamiento, pesadez.", practice: { title: "Espacio en el cuerpo", time: "2 minutos", steps: ["Relaja hombros y mandíbula.", "Imagina espacio blanco.", "Inhala viento ligero.", "Exhala tensión.", "Descansa en el vacío."] } }
                }
            }
        ],

        dzogchen: [
            {
                id: "kunzhi",
                icon: "☁️",
                translations: {
                    ru: { title: "Кунжи", subtitle: "Всеоснова", situation: "Ты забыл, что всё есть проявление изначального пространства.", practice: { title: "Возвращение к основе", time: "2 минуты", steps: ["Остановись. Посмотри вокруг.", "Скажи: «Всё это — игра Кунжи».", "Не меняй ничего.", "Почувствуй единство.", "Просто будь."] } },
                    en: { title: "Kunzhi", subtitle: "Ground of All", situation: "You forgot everything is primordial space manifestation.", practice: { title: "Returning to ground", time: "2 minutes", steps: ["Stop. Look around.", "Say: 'This is Kunzhi's play'.", "Don't change anything.", "Feel unity.", "Just be."] } },
                    es: { title: "Kunzhi", subtitle: "Fundamento de Todo", situation: "Olvidaste que todo es manifestación del espacio.", practice: { title: "Regreso al fundamento", time: "2 minutos", steps: ["Detente. Mira alrededor.", "Di: 'Esto es juego de Kunzhi'.", "No cambies nada.", "Siente unidad.", "Solo sé."] } }
                }
            },
            {
                id: "self-liberation",
                icon: "🌊",
                translations: {
                    ru: { title: "Самоосвобождение", subtitle: "Рангдрол", situation: "Тебя захватила сильная эмоция или навязчивая мысль.", practice: { title: "Освобождение мысли", time: "1 минута", steps: ["Заметь эмоцию.", "Не борись с ней.", "Посмотри прямо на неё: «Кто ты?».", "Увидь, как она тает, как облако.", "Останься в ясности."] } },
                    en: { title: "Self-liberation", subtitle: "Rangdrol", situation: "You are caught by strong emotion or obsessive thought.", practice: { title: "Thought liberation", time: "1 minute", steps: ["Notice the emotion.", "Don't fight it.", "Look at it: 'Who are you?'.", "See it melt like a cloud.", "Rest in clarity."] } },
                    es: { title: "Autoliberación", subtitle: "Rangdrol", situation: "Te atrapa una emoción fuerte o pensamiento obsesivo.", practice: { title: "Liberación del pensamiento", time: "1 minuto", steps: ["Nota la emoción.", "No luches.", "Mírala: '¿Quién eres?'.", "Mírala derretirse como nube.", "Descansa en claridad."] } }
                }
            }
        ]
    }
};