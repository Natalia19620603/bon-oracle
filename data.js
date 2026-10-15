const data = {
    i18n: {
        ru: {
            altar_question: "Что мне важно вспомнить сегодня?",
            what_to_do: "🔥 Что делать?",
            details: "📖 Подробнее",
            other_levels: " Другие уровни",
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
            what_to_do: "🔥 What to do?",
            details: "📖 Details",
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

    cards: {
        shamanism: [
            {
                id: "earth",
                icon: "🏔️",
                translations: {
                    ru: { title: "Земля", subtitle: "Стихия устойчивости", situation: "Ты чувствуешь тревогу, потерю опоры, суету. Тебе нужно заземлиться.", practice: { title: "Сила Земли", time: "2 минуты", steps: ["Поставь стопы плотно на пол.", "Представь корни, уходящие в землю.", "Вдохни желтый свет земли.", "Почувствуй тяжесть и покой.", "Скажи: «Я в безопасности»."] } },
                    en: { title: "Earth", subtitle: "Element of stability", situation: "You feel anxiety, loss of ground, rush. You need to ground yourself.", practice: { title: "Power of Earth", time: "2 minutes", steps: ["Place feet firmly on floor.", "Imagine roots going into earth.", "Inhale yellow earth light.", "Feel weight and peace.", "Say: 'I am safe'."] } },
                    es: { title: "Tierra", subtitle: "Elemento de estabilidad", situation: "Sientes ansiedad, pérdida de suelo, prisa. Necesitas enraizarte.", practice: { title: "Poder de la Tierra", time: "2 minutos", steps: ["Pon los pies firmes.", "Imagina raíces en la tierra.", "Inhala luz amarilla.", "Siente peso y paz.", "Di: 'Estoy a salvo'."] } }
                }
            },
            {
                id: "water",
                icon: "💧",
                translations: {
                    ru: { title: "Вода", subtitle: "Стихия текучести", situation: "Ты чувствуешь скованность, неспособность адаптироваться, эмоциональную сухость.", practice: { title: "Текучесть Воды", time: "2 минуты", steps: ["Выпей стакан воды медленно.", "Почувствуй, как она течёт внутри.", "Представь синий свет в почках.", "Отпусти контроль.", "Позволь жизни течь."] } },
                    en: { title: "Water", subtitle: "Element of flow", situation: "You feel rigidity, inability to adapt, emotional dryness.", practice: { title: "Flow of Water", time: "2 minutes", steps: ["Drink water slowly.", "Feel it flowing inside.", "Visualize blue light in kidneys.", "Release control.", "Let life flow."] } },
                    es: { title: "Agua", subtitle: "Elemento de fluidez", situation: "Sientes rigidez, incapacidad de adaptarte, sequedad emocional.", practice: { title: "Fluidez del Agua", time: "2 minutos", steps: ["Bebe agua lentamente.", "Siente cómo fluye.", "Visualiza luz azul en riñones.", "Suelta el control.", "Deja que la vida fluya."] } }
                }
            },
            {
                id: "fire",
                icon: "",
                translations: {
                    ru: { title: "Огонь", subtitle: "Стихия трансформации", situation: "Ты чувствуешь холод, апатию, отсутствие страсти и энергии.", practice: { title: "Сила Огня", time: "3 минуты", steps: ["Потри ладони друг о друга.", "Почувствуй тепло.", "Представь красный свет в сердце.", "Вдохни огонь.", "Зажги внутренний огонь."] } },
                    en: { title: "Fire", subtitle: "Element of transformation", situation: "You feel cold, apathy, lack of passion and energy.", practice: { title: "Power of Fire", time: "3 minutes", steps: ["Rub palms together.", "Feel warmth.", "Visualize red light in heart.", "Inhale fire.", "Ignite inner fire."] } },
                    es: { title: "Fuego", subtitle: "Elemento de transformación", situation: "Sientes frío, apatía, falta de pasión y energía.", practice: { title: "Poder del Fuego", time: "3 minutos", steps: ["Frota las palmas.", "Siente calor.", "Visualiza luz roja en corazón.", "Inhala fuego.", "Enciende fuego interno."] } }
                }
            },
            {
                id: "air",
                icon: "💨",
                translations: {
                    ru: { title: "Воздух", subtitle: "Стихия движения", situation: "Ты чувствуешь застой, тяжесть, неспособность двигаться вперёд.", practice: { title: "Свобода Воздуха", time: "2 минуты", steps: ["Выйди на свежий воздух.", "Сделай 9 глубоких вдохов.", "Представь зелёный свет в лёгких.", "Почувствуй лёгкость.", "Отпусти всё лишнее."] } },
                    en: { title: "Air", subtitle: "Element of movement", situation: "You feel stagnation, heaviness, inability to move forward.", practice: { title: "Freedom of Air", time: "2 minutes", steps: ["Go outside.", "Take 9 deep breaths.", "Visualize green light in lungs.", "Feel lightness.", "Release all excess."] } },
                    es: { title: "Aire", subtitle: "Elemento de movimiento", situation: "Sientes estancamiento, pesadez, incapacidad de avanzar.", practice: { title: "Libertad del Aire", time: "2 minutos", steps: ["Sal al aire libre.", "Toma 9 respiraciones profundas.", "Visualiza luz verde en pulmones.", "Siente ligereza.", "Suelta todo lo excesivo."] } }
                }
            },
            {
                id: "space",
                icon: "☁️",
                image: "kunzhi-sky.png",
                translations: {
                    ru: { title: "Пространство", subtitle: "Стихия пустоты", situation: "Ты забыл о бесконечности, чувствуешь себя ограниченным, зажатым.", practice: { title: "Простор Пространства", time: "2 минуты", steps: ["Посмотри на небо.", "Почувствуй бесконечность.", "Представь белое пространство вокруг.", "Раствори границы тела.", "Побудь в пустоте."] } },
                    en: { title: "Space", subtitle: "Element of emptiness", situation: "You forgot infinity, feel limited, squeezed.", practice: { title: "Vastness of Space", time: "2 minutes", steps: ["Look at the sky.", "Feel infinity.", "Visualize white space around.", "Dissolve body boundaries.", "Rest in emptiness."] } },
                    es: { title: "Espacio", subtitle: "Elemento de vacuidad", situation: "Olvidaste el infinito, te sientes limitado, apretado.", practice: { title: "Inmensidad del Espacio", time: "2 minutos", steps: ["Mira el cielo.", "Siente el infinito.", "Visualiza espacio blanco.", "Disuelve límites del cuerpo.", "Descansa en el vacío."] } }
                }
            },
            {
                id: "nagas",
                icon: "🐍",
                translations: {
                    ru: { title: "Наги", subtitle: "Духи воды", situation: "Ты забыл о связи с водной стихией, используешь воду механически.", practice: { title: "Связь с Нагами", time: "1 минута", steps: ["Встань у воды.", "Положи руку на сосуд.", "Скажи: «Благодарю, наги».", "Визуализируй синий свет.", "Пей с осознанием."] } },
                    en: { title: "Nagas", subtitle: "Water spirits", situation: "You forgot connection with water element, use water mechanically.", practice: { title: "Connection with Nagas", time: "1 minute", steps: ["Stand by water.", "Place hand on container.", "Say: 'Thank you, nagas'.", "Visualize blue light.", "Drink with awareness."] } },
                    es: { title: "Nagas", subtitle: "Espíritus del agua", situation: "Olvidaste conexión con elemento agua, usas agua mecánicamente.", practice: { title: "Conexión con Nagas", time: "1 minuto", steps: ["Párate junto al agua.", "Pon mano en recipiente.", "Di: 'Gracias, nagas'.", "Visualiza luz azul.", "Bebe con conciencia."] } }
                }
            },
            {
                id: "lu",
                icon: "🌍",
                translations: {
                    ru: { title: "Лу", subtitle: "Духи земли", situation: "Ты забыл о связи с землёй, ходишь по ней неосознанно.", practice: { title: "Связь с Лу", time: "2 минуты", steps: ["Сними обувь, встань на землю.", "Почувствуй почву под ногами.", "Скажи: «Благодарю, мать-земля».", "Визуализируй желтый свет.", "Побудь в тишине."] } },
                    en: { title: "Lu", subtitle: "Earth spirits", situation: "You forgot connection with earth, walk on it unconsciously.", practice: { title: "Connection with Lu", time: "2 minutes", steps: ["Remove shoes, stand on earth.", "Feel soil under feet.", "Say: 'Thank you, mother earth'.", "Visualize yellow light.", "Rest in silence."] } },
                    es: { title: "Lu", subtitle: "Espíritus de la tierra", situation: "Olvidaste conexión con la tierra, caminas sobre ella inconscientemente.", practice: { title: "Conexión con Lu", time: "2 minutos", steps: ["Quita zapatos, pisa tierra.", "Siente el suelo.", "Di: 'Gracias, madre tierra'.", "Visualiza luz amarilla.", "Descansa en silencio."] } }
                }
            },
            {
                id: "lha",
                icon: "✨",
                translations: {
                    ru: { title: "Лха", subtitle: "Небесные духи", situation: "Ты забыл о небесной поддержке, чувствуешь себя одиноким.", practice: { title: "Связь с Лха", time: "2 минуты", steps: ["Посмотри вверх, в небо.", "Представь светлых существ.", "Скажи: «Я под защитой».", "Вдохни белый свет.", "Почувствуй поддержку."] } },
                    en: { title: "Lha", subtitle: "Celestial spirits", situation: "You forgot heavenly support, feel alone.", practice: { title: "Connection with Lha", time: "2 minutes", steps: ["Look up at sky.", "Imagine luminous beings.", "Say: 'I am protected'.", "Inhale white light.", "Feel support."] } },
                    es: { title: "Lha", subtitle: "Espíritus celestiales", situation: "Olvidaste el apoyo celestial, te sientes solo.", practice: { title: "Conexión con Lha", time: "2 minutos", steps: ["Mira al cielo.", "Imagina seres luminosos.", "Di: 'Estoy protegido'.", "Inhala luz blanca.", "Siente apoyo."] } }
                }
            },
            {
                id: "nyen",
                icon: "🌳",
                translations: {
                    ru: { title: "Ньен", subtitle: "Духи деревьев и гор", situation: "Ты забыл о связи с лесом и горами, живёшь в отрыве от природы.", practice: { title: "Связь с Ньен", time: "3 минуты", steps: ["Обними дерево или посмотри на горы.", "Почувствуй их силу.", "Скажи: «Благодарю за опору».", "Вдохни зелёный свет.", "Побудь в тишине."] } },
                    en: { title: "Nyen", subtitle: "Tree and mountain spirits", situation: "You forgot connection with forest and mountains, live disconnected from nature.", practice: { title: "Connection with Nyen", time: "3 minutes", steps: ["Hug a tree or look at mountains.", "Feel their strength.", "Say: 'Thank you for support'.", "Inhale green light.", "Rest in silence."] } },
                    es: { title: "Nyen", subtitle: "Espíritus de árboles y montañas", situation: "Olvidaste conexión con bosque y montañas, vives desconectado de la naturaleza.", practice: { title: "Conexión con Nyen", time: "3 minutos", steps: ["Abraza un árbol o mira montañas.", "Siente su fuerza.", "Di: 'Gracias por apoyo'.", "Inhala luz verde.", "Descansa en silencio."] } }
                }
            },
            {
                id: "sang",
                icon: "🌫️",
                translations: {
                    ru: { title: "Санг", subtitle: "Ритуал курения", situation: "Тебе нужно очищение пространства, ты чувствуешь тяжесть в месте.", practice: { title: "Ритуал Санг", time: "5 минут", steps: ["Зажги благовония или можжевельник.", "Пройди по комнате.", "Скажи: «Очищаю это пространство».", "Визуализируй белый дым.", "Открой окно."] } },
                    en: { title: "Sang", subtitle: "Smoke offering ritual", situation: "You need space purification, feel heaviness in place.", practice: { title: "Sang Ritual", time: "5 minutes", steps: ["Light incense or juniper.", "Walk through room.", "Say: 'I purify this space'.", "Visualize white smoke.", "Open window."] } },
                    es: { title: "Sang", subtitle: "Ritual de ofrenda de humo", situation: "Necesitas purificación del espacio, sientes pesadez.", practice: { title: "Ritual Sang", time: "5 minutos", steps: ["Enciende incienso o enebro.", "Camina por la habitación.", "Di: 'Purifico este espacio'.", "Visualiza humo blanco.", "Abre ventana."] } }
                }
            },
            {
                id: "serkem",
                icon: "🍵",
                translations: {
                    ru: { title: "Серкьем", subtitle: "Подношение чая", situation: "Тебе нужно выразить благодарность, ты чувствуешь неблагодарность.", practice: { title: "Ритуал Серкьем", time: "3 минуты", steps: ["Налей чай или молоко в чашу.", "Подними чашу.", "Скажи: «Подношу защитникам».", "Вылей на землю или выпей.", "Побудь в благодарности."] } },
                    en: { title: "Serkem", subtitle: "Tea offering", situation: "You need to express gratitude, feel ungrateful.", practice: { title: "Serkem Ritual", time: "3 minutes", steps: ["Pour tea or milk into cup.", "Lift cup.", "Say: 'I offer to protectors'.", "Pour on ground or drink.", "Rest in gratitude."] } },
                    es: { title: "Serkem", subtitle: "Ofrenda de té", situation: "Necesitas expresar gratitud, te sientes desagradecido.", practice: { title: "Ritual Serkem", time: "3 minutos", steps: ["Vierte té o leche en taza.", "Levanta taza.", "Di: 'Ofrezco a protectores'.", "Vierte en tierra o bebe.", "Descansa en gratitud."] } }
                }
            },
            {
                id: "sur",
                icon: "🔥",
                translations: {
                    ru: { title: "Сур", subtitle: "Подношение сожжённой пищи", situation: "Тебе нужно отдать кармические долги, ты чувствуешь препятствия.", practice: { title: "Ритуал Сур", time: "10 минут", steps: ["Приготовь цзамбу или муку.", "Зажги огонь.", "Поднеси еду 4 гостям.", "Сожги подношение.", "Посвяти заслуги всем существам."] } },
                    en: { title: "Sur", subtitle: "Burnt food offering", situation: "You need to repay karmic debts, feel obstacles.", practice: { title: "Sur Ritual", time: "10 minutes", steps: ["Prepare tsampa or flour.", "Light fire.", "Offer food to 4 guests.", "Burn offering.", "Dedicate merits to all beings."] } },
                    es: { title: "Sur", subtitle: "Ofrenda de comida quemada", situation: "Necesitas pagar deudas kármicas, sientes obstáculos.", practice: { title: "Ritual Sur", time: "10 minutos", steps: ["Prepara tsampa o harina.", "Enciende fuego.", "Ofrece comida a 4 huéspedes.", "Quema ofrenda.", "Dedica méritos a todos."] } }
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
                icon: "🌬️",
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