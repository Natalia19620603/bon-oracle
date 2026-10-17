const i18n = {
  ru: {
    select_language: "Выберите язык", back: "Назад",
    bon_tradition: "Традиция Юнгдрунг Бон",
    bon_description: "Древняя тибетская традиция, основанная Тонпа Шенрабом Миво более 18 000 лет назад. Путь вечного света и изначальной мудрости.",
    teacher: "Современный учитель: Тендзин Вангьял Ринпоче",
    continue: "Продолжить →", three_gates: "Девять разделов учения",
    body: "Тело", speech: "Речь", mind: "Ум", elements: "Элементы",
    pranas: "Праны", dream: "Сон", transition: "Переходы",
    offerings: "Подношения", library: "Библиотека",
    search_placeholder: "Поиск практик...",
    what_to_do: "🔥 Практика", start_timer: "⏱ Таймер", close: "Закрыть",
    flashcards_title: "Флеш-карточки", mantras: "Мантры", syllables: "Слоги",
    pranas_fc: "Праны", dzogchen_terms: "Дзогчен",
    prev_card: "← Предыдущая", next_card: "Следующая →",
    books_title: "Книги Тендзина Вангьяла Ринпоче",
    body_title: "Врата Тела", speech_title: "Врата Речи", mind_title: "Врата Ума",
    elements_title: "Пять Элементов", pranas_title: "Пять Пран",
    dream_title: "Йога Сна", transition_title: "Переходные состояния",
    offerings_title: "Подношения", library_title: "Библиотека"
  },
  en: {
    select_language: "Select language", back: "Back",
    bon_tradition: "Yungdrung Bon Tradition",
    bon_description: "Ancient Tibetan tradition founded by Tonpa Shenrab Miwo over 18,000 years ago.",
    teacher: "Contemporary teacher: Tenzin Wangyal Rinpoche",
    continue: "Continue →", three_gates: "Nine Sections",
    body: "Body", speech: "Speech", mind: "Mind", elements: "Elements",
    pranas: "Pranas", dream: "Dream", transition: "Transitions",
    offerings: "Offerings", library: "Library",
    search_placeholder: "Search...",
    what_to_do: "🔥 Practice", start_timer: "⏱ Timer", close: "Close",
    flashcards_title: "Flashcards", mantras: "Mantras", syllables: "Syllables",
    pranas_fc: "Pranas", dzogchen_terms: "Dzogchen",
    prev_card: "← Previous", next_card: "Next →",
    books_title: "Books by Tenzin Wangyal Rinpoche",
    body_title: "Gate of Body", speech_title: "Gate of Speech", mind_title: "Gate of Mind",
    elements_title: "Five Elements", pranas_title: "Five Pranas",
    dream_title: "Dream Yoga", transition_title: "Transition States",
    offerings_title: "Offerings", library_title: "Library"
  },
  es: {
    select_language: "Elige idioma", back: "Volver",
    bon_tradition: "Tradición Yungdrung Bon",
    bon_description: "Antigua tradición tibetana fundada por Tonpa Shenrab Miwo hace más de 18,000 años.",
    teacher: "Maestro contemporáneo: Tenzin Wangyal Rinpoche",
    continue: "Continuar →", three_gates: "Nueve Secciones",
    body: "Cuerpo", speech: "Habla", mind: "Mente", elements: "Elementos",
    pranas: "Pranas", dream: "Sueño", transition: "Transiciones",
    offerings: "Ofrendas", library: "Biblioteca",
    search_placeholder: "Buscar...",
    what_to_do: "🔥 Práctica", start_timer: "⏱ Temporizador", close: "Cerrar",
    flashcards_title: "Tarjetas", mantras: "Mantras", syllables: "Sílabas",
    pranas_fc: "Pranas", dzogchen_terms: "Dzogchen",
    prev_card: "← Anterior", next_card: "Siguiente →",
    books_title: "Libros de Tenzin Wangyal Rinpoche",
    body_title: "Puerta del Cuerpo", speech_title: "Puerta del Habla", mind_title: "Puerta de la Mente",
    elements_title: "Cinco Elementos", pranas_title: "Cinco Pranas",
    dream_title: "Yoga del Sueño", transition_title: "Estados de Transición",
    offerings_title: "Ofrendas", library_title: "Biblioteca"
  }
};

const data = {
  body: [
    { id: "nine-breaths", icon: "🌬️", translations: {
      ru: { title: "Девять очистительных дыханий", subtitle: "Цалунг — основа всех практик", situation: "Энергетический застой, тревожность.", practice: { title: "Девять очистительных дыханий", time: "5 мин", steps: ["Сядьте в пятичленную позу.", "Закройте правую ноздрю, вдохните белый свет через левую.", "Задержите, визуализируя очищение.", "Закройте левую, выдохните через правую.", "Повторите 9 раз, меняя стороны."] } },
      en: { title: "Nine Purifying Breaths", subtitle: "Tsa Lung — foundation", situation: "Energy stagnation.", practice: { title: "Nine Purifying Breaths", time: "5 min", steps: ["Sit in five-point posture.", "Close right nostril, inhale white light through left.", "Hold, visualizing purification.", "Close left, exhale through right.", "Repeat 9 times."] } },
      es: { title: "Nueve Respiraciones", subtitle: "Tsa Lung — base", situation: "Estancamiento energético.", practice: { title: "Nueve Respiraciones", time: "5 min", steps: ["Siéntate en postura de cinco puntos.", "Cierra fosa derecha, inhala luz blanca.", "Mantén, visualizando purificación.", "Cierra izquierda, exhala.", "Repite 9 veces."] } }
    } },
    { id: "tsalung-fire", icon: "🔥", translations: {
      ru: { title: "Цалунг: Огонь", subtitle: "Развитие внутреннего тепла", situation: "Холод, апатия.", practice: { title: "Движение огня", time: "5 мин", steps: ["Визуализируйте красный слог РАМ в пупке.", "Вдохните огонь вверх по центральному каналу.", "Задержите дыхание, почувствуйте тепло.", "Выдохните, рассеивая тепло.", "Повторите 9 раз."] } },
      en: { title: "Tsa Lung: Fire", subtitle: "Inner heat", situation: "Cold, apathy.", practice: { title: "Fire Movement", time: "5 min", steps: ["Visualize red RAM in navel.", "Inhale fire up central channel.", "Hold breath, feel warmth.", "Exhale, spreading warmth.", "Repeat 9 times."] } },
      es: { title: "Tsa Lung: Fuego", subtitle: "Calor interno", situation: "Frío, apatía.", practice: { title: "Movimiento de Fuego", time: "5 min", steps: ["Visualiza RAM rojo en ombligo.", "Inhala fuego por canal central.", "Mantén, siente calor.", "Exhala, expande calor.", "Repite 9 veces."] } }
    } },
    { id: "trulkhor-hammer", icon: "⚡", translations: {
      ru: { title: "Трюлкхор: Молот", subtitle: "Преодоление гнева", situation: "Гнев, раздражение.", practice: { title: "Молот атлета", time: "5 мин", steps: ["Встаньте, ноги на ширине плеч.", "Поднимите руки над головой.", "Резко опустите с выдохом ХА.", "Повторите 7 раз.", "Побудьте в тишине."] } },
      en: { title: "Trulkhor: Hammer", subtitle: "Overcoming anger", situation: "Anger.", practice: { title: "Athlete's Hammer", time: "5 min", steps: ["Stand, feet shoulder-width.", "Raise hands above head.", "Lower sharply with HA exhale.", "Repeat 7 times.", "Rest in silence."] } },
      es: { title: "Trulkhor: Martillo", subtitle: "Superando ira", situation: "Ira.", practice: { title: "Martillo del Atleta", time: "5 min", steps: ["Párate, pies al ancho de hombros.", "Levanta manos sobre cabeza.", "Baja bruscamente con HA.", "Repite 7 veces.", "Descansa en silencio."] } }
    } },
    { id: "prostrations", icon: "🙏", translations: {
      ru: { title: "Простирания", subtitle: "Очищение эго", situation: "Привязанность к себе.", practice: { title: "Простирания", time: "10 мин", steps: ["Встаньте, руки сложены у сердца.", "Поднимите руки к макушке.", "Опустите к горлу.", "Опустите к сердцу.", "Лягте на землю, коснувшись пятью точками."] } },
      en: { title: "Prostrations", subtitle: "Purifying ego", situation: "Self-attachment.", practice: { title: "Prostrations", time: "10 min", steps: ["Stand, hands at heart.", "Raise hands to crown.", "Lower to throat.", "Lower to heart.", "Lie on ground, touching five points."] } },
      es: { title: "Postraciones", subtitle: "Purificando ego", situation: "Apego al yo.", practice: { title: "Postraciones", time: "10 min", steps: ["Párate, manos en corazón.", "Levanta manos a coronilla.", "Baja a garganta.", "Baja a corazón.", "Acuéstate, tocando cinco puntos."] } }
    } }
  ],

  speech: [
    { id: "warrior-a", icon: "⚪", translations: {
      ru: { title: "Слог А", subtitle: "Белый, коронная чакра, пространство", situation: "Ограниченность.", practice: { title: "Практика А", time: "5 мин", steps: ["Визуализируйте белый А на макушке.", "Протяжно произнесите А-А-А.", "Почувствуйте пространство.", "Позвольте уму раствориться.", "Побудьте в чистоте."] } },
      en: { title: "Syllable A", subtitle: "White, crown chakra", situation: "Limitation.", practice: { title: "Practice of A", time: "5 min", steps: ["Visualize white A at crown.", "Prolonged A-A-A.", "Feel space.", "Let mind dissolve.", "Rest in purity."] } },
      es: { title: "Sílaba A", subtitle: "Blanco, coronilla", situation: "Limitación.", practice: { title: "Práctica de A", time: "5 min", steps: ["Visualiza A blanca en coronilla.", "A-A-A prolongado.", "Siente espacio.", "Deja mente disolverse.", "Descansa en pureza."] } }
    } },
    { id: "warrior-om", icon: "🔴", translations: {
      ru: { title: "Слог ОМ", subtitle: "Красный, горловая чакра", situation: "Нечистая речь.", practice: { title: "Практика ОМ", time: "5 мин", steps: ["Визуализируйте красный ОМ в горле.", "Протяжно произнесите ОМ-ОМ-ОМ.", "Почувствуйте спонтанность.", "Очистите речь.", "Побудьте в чистой речи."] } },
      en: { title: "Syllable OM", subtitle: "Red, throat chakra", situation: "Impure speech.", practice: { title: "Practice of OM", time: "5 min", steps: ["Visualize red OM in throat.", "Prolonged OM-OM-OM.", "Feel spontaneity.", "Purify speech.", "Rest in pure speech."] } },
      es: { title: "Sílaba OM", subtitle: "Rojo, garganta", situation: "Habla impura.", practice: { title: "Práctica de OM", time: "5 min", steps: ["Visualiza OM rojo en garganta.", "OM-OM-OM prolongado.", "Siente espontaneidad.", "Purifica habla.", "Descansa en habla pura."] } }
    } },
    { id: "warrior-hung", icon: "🔵", translations: {
      ru: { title: "Слог ХУНГ", subtitle: "Синий, сердечная чакра", situation: "Рассеянность.", practice: { title: "Практика ХУНГ", time: "5 мин", steps: ["Визуализируйте синий ХУНГ в сердце.", "Протяжно произнесите ХУНГ-ХУНГ-ХУНГ.", "Соберите рассеянную энергию.", "Почувствуйте сосредоточенность.", "Побудьте в ясном присутствии."] } },
      en: { title: "Syllable HUNG", subtitle: "Blue, heart chakra", situation: "Scattered mind.", practice: { title: "Practice of HUNG", time: "5 min", steps: ["Visualize blue HUNG in heart.", "Prolonged HUNG-HUNG-HUNG.", "Gather scattered energy.", "Feel concentration.", "Rest in clear presence."] } },
      es: { title: "Sílaba HUNG", subtitle: "Azul, corazón", situation: "Mente dispersa.", practice: { title: "Práctica de HUNG", time: "5 min", steps: ["Visualiza HUNG azul en corazón.", "HUNG-HUNG-HUNG prolongado.", "Reúne energía dispersa.", "Siente concentración.", "Descansa en presencia clara."] } }
    } },
    { id: "ali-kali", icon: "📿", translations: {
      ru: { title: "Мантра Али-Кали", subtitle: "Очищение речи", situation: "Нечистая речь.", practice: { title: "Мантра Али-Кали", time: "10 мин", steps: ["Визуализируйте божество речи.", "На языке — красный лотос с мантрой.", "Произнесите гласные Али.", "Произнесите согласные Кали.", "Побудьте в чистой речи."] } },
      en: { title: "Ali-Kali Mantra", subtitle: "Purifying speech", situation: "Impure speech.", practice: { title: "Ali-Kali Mantra", time: "10 min", steps: ["Visualize speech deity.", "On tongue — red lotus with mantra.", "Recite vowels Ali.", "Recite consonants Kali.", "Rest in pure speech."] } },
      es: { title: "Mantra Ali-Kali", subtitle: "Purificando habla", situation: "Habla impura.", practice: { title: "Mantra Ali-Kali", time: "10 min", steps: ["Visualiza deidad del habla.", "En lengua — loto rojo con mantra.", "Recita vocales Ali.", "Recita consonantes Kali.", "Descansa en habla pura."] } }
    } }
  ],
  
  mind: [
    { id: "shiné", icon: "🧘", translations: {
      ru: { title: "Шинэ (Покой)", subtitle: "Базовая медитация", situation: "Хаотичный ум.", practice: { title: "Практика Шинэ", time: "10 мин", steps: ["Сядьте в пятичленную позу.", "Поместите внимание на дыхании.", "Когда ум уходит — мягко возвращайте.", "Не боритесь с мыслями.", "Побудьте в возрастающем покое."] } },
      en: { title: "Shiné (Calm)", subtitle: "Basic meditation", situation: "Chaotic mind.", practice: { title: "Shiné Practice", time: "10 min", steps: ["Sit in five-point posture.", "Place attention on breath.", "When mind wanders — gently return.", "Don't fight thoughts.", "Rest in growing calm."] } },
      es: { title: "Shiné (Calma)", subtitle: "Meditación básica", situation: "Mente caótica.", practice: { title: "Práctica Shiné", time: "10 min", steps: ["Siéntate en postura de cinco puntos.", "Pon atención en respiración.", "Cuando mente vague — vuelve suavemente.", "No luches con pensamientos.", "Descansa en calma creciente."] } }
    } },
    { id: "lhaktong", icon: "️", translations: {
      ru: { title: "Лхактонг (Прозрение)", subtitle: "Медитация на природу ума", situation: "Поверхностное понимание.", practice: { title: "Практика Лхактонг", time: "10 мин", steps: ["После Шинэ углубите внимание.", "Спросите: «Кто медитирует?».", "Ищите медитирующего — не находите.", "Это природа ума — пустота-ясность.", "Побудьте в этом узнавании."] } },
      en: { title: "Lhaktong (Insight)", subtitle: "Meditation on mind nature", situation: "Superficial understanding.", practice: { title: "Lhaktong Practice", time: "10 min", steps: ["After Shiné, deepen attention.", "Ask: 'Who is meditating?'.", "Search for meditator — don't find.", "This is mind nature — emptiness-clarity.", "Rest in this recognition."] } },
      es: { title: "Lhaktong (Visión)", subtitle: "Meditación en naturaleza de mente", situation: "Comprensión superficial.", practice: { title: "Práctica Lhaktong", time: "10 min", steps: ["Después de Shiné, profundiza.", "Pregunta: '¿Quién medita?'.", "Busca meditador — no encuentres.", "Esto es naturaleza de mente.", "Descansa en este reconocimiento."] } }
    } },
    { id: "kunzhi", icon: "☁️", translations: {
      ru: { title: "Кунжи", subtitle: "Основа всего — изначальное пространство", situation: "Забыл, что всё — проявление пространства.", practice: { title: "Возвращение к Кунжи", time: "5 мин", steps: ["Остановись. Посмотри вокруг.", "Скажи: «Всё это — игра Кунжи».", "Не меняй ничего.", "Почувствуй единство.", "Просто будь."] } },
      en: { title: "Kunzhi", subtitle: "Ground of All", situation: "Forgot space.", practice: { title: "Return to Kunzhi", time: "5 min", steps: ["Stop. Look around.", "Say: 'All is Kunzhi's play'.", "Don't change anything.", "Feel unity.", "Just be."] } },
      es: { title: "Kunzhi", subtitle: "Fundamento", situation: "Olvidaste espacio.", practice: { title: "Regreso a Kunzhi", time: "5 min", steps: ["Detente. Mira alrededor.", "Di: 'Todo es juego de Kunzhi'.", "No cambies nada.", "Siente unidad.", "Solo sé."] } }
    } },
    { id: "rigpa", icon: "✨", translations: {
      ru: { title: "Ригпа", subtitle: "Изначальное осознавание", situation: "Потеря присутствия.", practice: { title: "Узнавание Ригпа", time: "5 мин", steps: ["Остановись.", "Посмотри на того, кто смотрит.", "Не ищи — просто узнай.", "Это и есть Ригпа.", "Побудь в этом узнавании."] } },
      en: { title: "Rigpa", subtitle: "Primordial awareness", situation: "Lost presence.", practice: { title: "Recognizing Rigpa", time: "5 min", steps: ["Stop.", "Look at the one who looks.", "Don't search — recognize.", "This is Rigpa.", "Rest in recognition."] } },
      es: { title: "Rigpa", subtitle: "Conciencia primordial", situation: "Perdiste presencia.", practice: { title: "Reconocer Rigpa", time: "5 min", steps: ["Detente.", "Mira al que mira.", "No busques — reconoce.", "Esto es Rigpa.", "Descansa en reconocimiento."] } }
    } },
    { id: "trekcho", icon: "⚡", translations: {
      ru: { title: "Трекчо (Прорыв)", subtitle: "Отсечение отвлечений", situation: "Ум захвачен мыслями.", practice: { title: "Практика Трекчо", time: "10 мин", steps: ["Сядьте удобно.", "Не ищите ничего особенного.", "Посмотрите прямо на природу ума.", "Узнайте открытость, ясность, присутствие.", "Не медитируйте — просто будьте."] } },
      en: { title: "Trekchö (Cutting)", subtitle: "Cutting off distractions", situation: "Mind caught in thoughts.", practice: { title: "Trekchö Practice", time: "10 min", steps: ["Sit comfortably.", "Don't search for anything special.", "Look directly at mind nature.", "Recognize openness, clarity, presence.", "Don't meditate — just be."] } },
      es: { title: "Trekchö (Corte)", subtitle: "Cortando distracciones", situation: "Mente atrapada.", practice: { title: "Práctica Trekchö", time: "10 min", steps: ["Siéntate cómodo.", "No busques nada especial.", "Mira directamente naturaleza de mente.", "Reconoce apertura, claridad, presencia.", "No medites — simplemente sé."] } }
    } },
    { id: "togal", icon: "🌈", translations: {
      ru: { title: "Тхогёл (Перескок)", subtitle: "Работа со светом", situation: "Готовность к глубинной практике.", practice: { title: "Практика Тхогёл", time: "15 мин", steps: ["Четыре видения Тхогёл.", "Прямое видение — чистое присутствие.", "Увеличивающееся видение — расширение.", "Полное постижение — совершенство.", "Возвращение в основу."] } },
      en: { title: "Tögal (Leapover)", subtitle: "Working with light", situation: "Readiness for deep practice.", practice: { title: "Tögal Practice", time: "15 min", steps: ["Four visions of Tögal.", "Direct seeing — pure presence.", "Increasing experience — expansion.", "Full realization — perfection.", "Return to ground."] } },
      es: { title: "Tögal (Salto)", subtitle: "Trabajo con luz", situation: "Disposición para práctica profunda.", practice: { title: "Práctica Tögal", time: "15 min", steps: ["Cuatro visiones de Tögal.", "Ver directo — presencia pura.", "Experiencia creciente — expansión.", "Realización plena — perfección.", "Regreso a base."] } }
    } }
  ],

  elements: [
    { id: "earth-goddess", icon: "🏔️", translations: {
      ru: { title: "Богиня Земли", subtitle: "Сатри Эрсанг, мантра: КХАМ ЛА ЖИ КЬЕ ЛЕ ДУ", situation: "Нужна стабильность.", practice: { title: "Призыв Богини Земли", time: "5 мин", steps: ["Визуализируйте жёлтую богиню.", "В правой руке — свастика.", "В левой — исцеляющий сосуд.", "Повторяйте мантру: КХАМ ЛА ЖИ КЬЕ ЛЕ ДУ.", "Попросите благословения устойчивости."] } },
      en: { title: "Earth Goddess", subtitle: "Satri Ersang, mantra: KHAM LA ZHI KYE LE DU", situation: "Need stability.", practice: { title: "Invoking Earth Goddess", time: "5 min", steps: ["Visualize yellow goddess.", "Right hand — swastika.", "Left — healing vessel.", "Repeat mantra: KHAM LA ZHI KYE LE DU.", "Ask for blessing of stability."] } },
      es: { title: "Diosa de la Tierra", subtitle: "Satri Ersang", situation: "Necesitas estabilidad.", practice: { title: "Invocando Diosa de la Tierra", time: "5 min", steps: ["Visualiza diosa amarilla.", "Mano derecha — swastika.", "Izquierda — vaso sanador.", "Repite mantra: KHAM LA ZHI KYE LE DU.", "Pide bendición de estabilidad."] } }
    } },
    { id: "water-goddess", icon: "💧", translations: {
      ru: { title: "Богиня Воды", subtitle: "Кьедима, мантра: МАМ ДАНГ РА МАМ ТИНГ ДУ", situation: "Нужна текучесть.", practice: { title: "Призыв Богини Воды", time: "5 мин", steps: ["Визуализируйте синюю богиню.", "В руках — знамя и сосуд.", "Повторяйте мантру: МАМ ДАНГ РА МАМ ТИНГ ДУ.", "Попросите благословения очищения.", "Побудьте в эмоциональной чистоте."] } },
      en: { title: "Water Goddess", subtitle: "Kyedima, mantra: MAM DANG RA MAM TING DU", situation: "Need flow.", practice: { title: "Invoking Water Goddess", time: "5 min", steps: ["Visualize blue goddess.", "Hands — banner and vessel.", "Repeat mantra: MAM DANG RA MAM TING DU.", "Ask for blessing of purification.", "Rest in emotional purity."] } },
      es: { title: "Diosa del Agua", subtitle: "Kyedima", situation: "Necesitas fluidez.", practice: { title: "Invocando Diosa del Agua", time: "5 min", steps: ["Visualiza diosa azul.", "Manos — estandarte y vaso.", "Repite mantra: MAM DANG RA MAM TING DU.", "Pide bendición de purificación.", "Descansa en pureza emocional."] } }
    } },
    { id: "fire-goddess", icon: "🔥", translations: {
      ru: { title: "Богиня Огня", subtitle: "Мэри, мантра: РАМ ЦАНГ ТАНГ НЕ РАМ ДУ", situation: "Нужна трансформация.", practice: { title: "Призыв Богини Огня", time: "5 мин", steps: ["Визуализируйте красную богиню.", "В руках — ваджра и ритуальный сосуд.", "Повторяйте мантру: РАМ ЦАНГ ТАНГ НЕ РАМ ДУ.", "Попросите благословения трансформации.", "Побудьте в ощущении силы."] } },
      en: { title: "Fire Goddess", subtitle: "Meri, mantra: RAM TSANG TANG NE RAM DU", situation: "Need transformation.", practice: { title: "Invoking Fire Goddess", time: "5 min", steps: ["Visualize red goddess.", "Hands — vajra and ritual vessel.", "Repeat mantra: RAM TSANG TANG NE RAM DU.", "Ask for blessing of transformation.", "Rest in feeling of power."] } },
      es: { title: "Diosa del Fuego", subtitle: "Meri", situation: "Necesitas transformación.", practice: { title: "Invocando Diosa del Fuego", time: "5 min", steps: ["Visualiza diosa roja.", "Manos — vajra y vaso ritual.", "Repite mantra: RAM TSANG TANG NE RAM DU.", "Pide bendición de transformación.", "Descansa en sensación de poder."] } }
    } },
    { id: "air-goddess", icon: "💨", translations: {
      ru: { title: "Богиня Воздуха", subtitle: "Лунгта, мантра: ЯМ ЯМ НИ ЛИ ТУН ДУ", situation: "Нужно движение.", practice: { title: "Призыв Богини Воздуха", time: "5 мин", steps: ["Визуализируйте зелёную богиню.", "В руках — флаг ветра и сосуд.", "Повторяйте мантру: ЯМ ЯМ НИ ЛИ ТУН ДУ.", "Попросите благословения свободы.", "Побудьте в лёгкости."] } },
      en: { title: "Air Goddess", subtitle: "Lungta, mantra: YAM YAM NI LI TUN DU", situation: "Need movement.", practice: { title: "Invoking Air Goddess", time: "5 min", steps: ["Visualize green goddess.", "Hands — wind flag and vessel.", "Repeat mantra: YAM YAM NI LI TUN DU.", "Ask for blessing of freedom.", "Rest in lightness."] } },
      es: { title: "Diosa del Aire", subtitle: "Lungta", situation: "Necesitas movimiento.", practice: { title: "Invocando Diosa del Aire", time: "5 min", steps: ["Visualiza diosa verde.", "Manos — bandera de viento y vaso.", "Repite mantra: YAM YAM NI LI TUN DU.", "Pide bendición de libertad.", "Descansa en ligereza."] } }
    } },
    { id: "space-goddess", icon: "☁️", translations: {
      ru: { title: "Богиня Пространства", subtitle: "Намкха, мантра: А МУ ЙЕ А КАР А НИ А", situation: "Нужна открытость.", practice: { title: "Призыв Богини Пространства", time: "5 мин", steps: ["Визуализируйте белую богиню.", "В руках — драгоценность и сосуд.", "Повторяйте мантру: А МУ ЙЕ А КАР А НИ А.", "Попросите благословения открытости.", "Побудьте в безграничности."] } },
      en: { title: "Space Goddess", subtitle: "Namkha, mantra: A MU YE A KAR A NI A", situation: "Need openness.", practice: { title: "Invoking Space Goddess", time: "5 min", steps: ["Visualize white goddess.", "Hands — jewel and vessel.", "Repeat mantra: A MU YE A KAR A NI A.", "Ask for blessing of openness.", "Rest in boundlessness."] } },
      es: { title: "Diosa del Espacio", subtitle: "Namkha", situation: "Necesitas apertura.", practice: { title: "Invocando Diosa del Espacio", time: "5 min", steps: ["Visualiza diosa blanca.", "Manos — joya y vaso.", "Repite mantra: A MU YE A KAR A NI A.", "Pide bendición de apertura.", "Descansa en inmensidad."] } }
    } }
  ],
  
  pranas: [
    { id: "ascending-prana", icon: "️", translations: {
      ru: { title: "Поднимающая прана", subtitle: "Элемент Земли, горловая чакра", situation: "Тупость чувств, неясность ума.", practice: { title: "Активация поднимающей праны", time: "5 мин", steps: ["Сосредоточьтесь на горловой чакре.", "Визуализируйте жёлтый свет.", "Вдыхайте энергию вверх, к макушке.", "Ощутите ясность и пробуждение чувств.", "Побудьте в этом состоянии."] } },
      en: { title: "Ascending Prana", subtitle: "Earth element, throat chakra", situation: "Dull senses.", practice: { title: "Activating Ascending Prana", time: "5 min", steps: ["Focus on throat chakra.", "Visualize yellow light.", "Inhale energy up to crown.", "Feel clarity and awakening.", "Rest in this state."] } },
      es: { title: "Prana Ascendente", subtitle: "Elemento Tierra, garganta", situation: "Sentidos embotados.", practice: { title: "Activando Prana Ascendente", time: "5 min", steps: ["Enfoca en garganta.", "Visualiza luz amarilla.", "Inhala energía hacia coronilla.", "Siente claridad.", "Descansa en este estado."] } }
    } },
    { id: "life-force-prana", icon: "🤍", translations: {
      ru: { title: "Прана жизненной силы", subtitle: "Элемент Пространства, сердечная чакра", situation: "Слабость, усталость.", practice: { title: "Укрепление жизненной силы", time: "5 мин", steps: ["Сосредоточьтесь на сердечной чакре.", "Визуализируйте белую драгоценность.", "Вдыхайте чистое пространство.", "Ощутите прилив жизненной силы.", "Побудьте в полноте жизни."] } },
      en: { title: "Life-Force Prana", subtitle: "Space element, heart chakra", situation: "Weakness, fatigue.", practice: { title: "Strengthening Life-Force", time: "5 min", steps: ["Focus on heart chakra.", "Visualize white jewel.", "Inhale pure space.", "Feel surge of vitality.", "Rest in fullness of life."] } },
      es: { title: "Prana Fuerza Vital", subtitle: "Elemento Espacio, corazón", situation: "Debilidad, fatiga.", practice: { title: "Fortaleciendo Fuerza Vital", time: "5 min", steps: ["Enfoca en corazón.", "Visualiza joya blanca.", "Inhala espacio puro.", "Siente impulso de vitalidad.", "Descansa en plenitud."] } }
    } },
    { id: "fire-like-prana", icon: "", translations: {
      ru: { title: "Прана, подобная огню", subtitle: "Элемент Огня, пупочная чакра", situation: "Холод, плохое пищеварение.", practice: { title: "Разжигание внутреннего огня", time: "5 мин", steps: ["Сосредоточьтесь на пупочной чакре.", "Визуализируйте красный треугольник.", "Вдыхайте тепло в центр тела.", "Ощутите жар и силу.", "Побудьте в этом тепле."] } },
      en: { title: "Fire-Like Prana", subtitle: "Fire element, navel chakra", situation: "Cold, poor digestion.", practice: { title: "Igniting Inner Fire", time: "5 min", steps: ["Focus on navel chakra.", "Visualize red triangle.", "Inhale warmth into body center.", "Feel heat and power.", "Rest in this warmth."] } },
      es: { title: "Prana Fuego", subtitle: "Elemento Fuego, ombligo", situation: "Frío, mala digestión.", practice: { title: "Encendiendo Fuego Interno", time: "5 min", steps: ["Enfoca en ombligo.", "Visualiza triángulo rojo.", "Inhala calor en centro.", "Siente calor y poder.", "Descansa en este calor."] } }
    } },
    { id: "all-pervading-prana", icon: "🌬️", translations: {
      ru: { title: "Вездесущая прана", subtitle: "Элемент Воздуха, всё тело", situation: "Разрозненность, скованность.", practice: { title: "Распространение энергии", time: "5 мин", steps: ["Расслабьте всё тело.", "Представьте зелёный свет, заполняющий каждую клетку.", "Вдыхайте, позволяя энергии течь свободно.", "Ощутите связь всех частей тела.", "Побудьте в единстве."] } },
      en: { title: "All-Pervading Prana", subtitle: "Air element, entire body", situation: "Feeling fragmented.", practice: { title: "Spreading Energy", time: "5 min", steps: ["Relax entire body.", "Imagine green light filling every cell.", "Inhale, letting energy flow.", "Feel connection of all parts.", "Rest in unity."] } },
      es: { title: "Prana Omnipresente", subtitle: "Elemento Aire, todo el cuerpo", situation: "Sentirse fragmentado.", practice: { title: "Expandiendo Energía", time: "5 min", steps: ["Relaja todo el cuerpo.", "Imagina luz verde llenando cada célula.", "Inhala, dejando energía fluir.", "Siente conexión de todas las partes.", "Descansa en unidad."] } }
    } },
    { id: "downward-prana", icon: "⬇️", translations: {
      ru: { title: "Опускающая прана", subtitle: "Элемент Воды, основание тела", situation: "Тревога, неспособность расслабиться.", practice: { title: "Заземление и отпускание", time: "5 мин", steps: ["Сосредоточьтесь на основании тела.", "Визуализируйте синий свет, движущийся вниз.", "Выдыхайте всё напряжение в землю.", "Ощутите глубокое расслабление.", "Побудьте в покое."] } },
      en: { title: "Downward Prana", subtitle: "Water element, body base", situation: "Anxiety.", practice: { title: "Grounding and Releasing", time: "5 min", steps: ["Focus on base of body.", "Visualize blue light moving down.", "Exhale all tension into earth.", "Feel deep relaxation.", "Rest in peace."] } },
      es: { title: "Prana Descendente", subtitle: "Elemento Agua, base", situation: "Ansiedad.", practice: { title: "Enraizando y Soltando", time: "5 min", steps: ["Enfoca en base del cuerpo.", "Visualiza luz azul moviéndose abajo.", "Exhala toda tensión hacia tierra.", "Siente profunda relajación.", "Descansa en paz."] } }
    } }
  ],

  dream: [
    { id: "dream-prep", icon: "🌙", translations: {
      ru: { title: "Подготовка ко сну", subtitle: "Осознанные сновидения", situation: "Не запоминать сны.", practice: { title: "Подготовка", time: "10 мин", steps: ["Днём осознавай бодрствование.", "Вечером — намерение осознавать сны.", "Перед сном — визуализация света в сердце.", "При пробуждении — вспоминай сон."] } },
      en: { title: "Dream Preparation", subtitle: "Lucid dreaming", situation: "Not remembering dreams.", practice: { title: "Preparation", time: "10 min", steps: ["Day — recognize waking.", "Evening — intention for lucid dreams.", "Before sleep — visualize light in heart.", "Upon waking — recall dream."] } },
      es: { title: "Preparación Sueño", subtitle: "Sueños lúcidos", situation: "No recordar sueños.", practice: { title: "Preparación", time: "10 min", steps: ["Día — reconoce vigilia.", "Tarde — intención sueños lúcidos.", "Antes dormir — visualiza luz en corazón.", "Al despertar — recuerda sueño."] } }
    } },
    { id: "salche-dudalma", icon: "👸", translations: {
      ru: { title: "Дакини Салчже Дудалма", subtitle: "Практика с дакини сна", situation: "Нужна защита во сне.", practice: { title: "Дакини Салчже Дудалма", time: "15 мин", steps: ["Визуализируйте дакини Салчже Дудалму.", "Она окружена четырьмя тигле.", "Попросите защиты и наставлений.", "Засыпайте в её присутствии.", "Во сне встречайтесь с ней."] } },
      en: { title: "Dakini Salche Dudalma", subtitle: "Practice with dream dakini", situation: "Need protection in dream.", practice: { title: "Dakini Salche Dudalma", time: "15 min", steps: ["Visualize dakini Salche Dudalma.", "She is surrounded by four tigles.", "Ask for protection and guidance.", "Fall asleep in her presence.", "In dream meet her."] } },
      es: { title: "Dakini Salche Dudalma", subtitle: "Práctica con dakini del sueño", situation: "Necesitas protección en sueño.", practice: { title: "Dakini Salche Dudalma", time: "15 min", steps: ["Visualiza dakini Salche Dudalma.", "Está rodeada de cuatro tigles.", "Pide protección y guía.", "Duérmete en su presencia.", "En sueño encuéntrala."] } }
    } }
  ],

  transition: [
    { id: "bardo-life", icon: "🌅", translations: {
      ru: { title: "Переходное состояние жизни", subtitle: "От рождения до ухода", situation: "Забыл о непостоянстве.", practice: { title: "Памятование", time: "5 мин", steps: ["Эта жизнь — переходное состояние.", "Всё временно.", "Используй момент для практики.", "Не цепляйся.", "Готовься."] } },
      en: { title: "Bardo of Life", subtitle: "From birth to departure", situation: "Forgot impermanence.", practice: { title: "Remembering", time: "5 min", steps: ["This life is transitional.", "Everything is temporary.", "Use moment for practice.", "Don't cling.", "Prepare."] } },
      es: { title: "Bardo de Vida", subtitle: "Del nacimiento a la partida", situation: "Olvidaste impermanencia.", practice: { title: "Recordando", time: "5 min", steps: ["Esta vida es transitoria.", "Todo es temporal.", "Usa momento para práctica.", "No te aferres.", "Prepárate."] } }
    } },
    { id: "bardo-dharmata", icon: "🌈", translations: {
      ru: { title: "Переход ясности", subtitle: "Встреча со светом", situation: "Незнание природы реальности.", practice: { title: "Узнавание чистого света", time: "5 мин", steps: ["После ухода появится чистый свет.", "Это природа твоего собственного ума.", "Не бойся ярких цветов.", "Узнай это как свой собственный ум.", "Растворись в свете."] } },
      en: { title: "Bardo of Clarity", subtitle: "Meeting the light", situation: "Ignorance of reality.", practice: { title: "Recognizing Clear Light", time: "5 min", steps: ["After departure, clear light appears.", "This is nature of your own mind.", "Don't fear bright colors.", "Recognize this as your own mind.", "Dissolve into light."] } },
      es: { title: "Bardo de Claridad", subtitle: "Encuentro con la luz", situation: "Ignorancia de realidad.", practice: { title: "Reconociendo Luz Clara", time: "5 min", steps: ["Después partida, aparece luz clara.", "Esta es naturaleza de tu mente.", "No temas colores brillantes.", "Reconoce esto como tu mente.", "Disuélvete en luz."] } }
    } }
  ],

  offerings: [
    { id: "sang", icon: "🌫️", translations: {
      ru: { title: "Санг", subtitle: "Дымовое подношение", situation: "Тяжесть в месте.", practice: { title: "Ритуал Санг", time: "10 мин", steps: ["Зажгите можжевельник.", "Визуализируйте дым как подношение.", "Пригласите духов природы.", "Предложите дым.", "Попросите очищения."] } },
      en: { title: "Sang", subtitle: "Smoke offering", situation: "Heaviness in place.", practice: { title: "Sang Ritual", time: "10 min", steps: ["Light juniper.", "Visualize smoke as offering.", "Invite nature spirits.", "Offer smoke.", "Ask for purification."] } },
      es: { title: "Sang", subtitle: "Ofrenda de humo", situation: "Pesadez en lugar.", practice: { title: "Ritual Sang", time: "10 min", steps: ["Enciende enebro.", "Visualiza humo como ofrenda.", "Invita espíritus naturaleza.", "Ofrece humo.", "Pide purificación."] } }
    } },
    { id: "serkem", icon: "🍵", translations: {
      ru: { title: "Серкьем", subtitle: "Золотое подношение напитка", situation: "Нужно выразить благодарность.", practice: { title: "Ритуал Серкьем", time: "5 мин", steps: ["Налейте чай или молоко в чашу.", "Поднимите чашу на уровень сердца.", "Визуализируйте нектар благословения.", "Вылейте на чистую землю.", "Побудьте в благодарности."] } },
      en: { title: "Serkem", subtitle: "Golden drink offering", situation: "Need to express gratitude.", practice: { title: "Serkem Ritual", time: "5 min", steps: ["Pour tea or milk into cup.", "Lift cup to heart level.", "Visualize nectar of blessing.", "Pour on clean ground.", "Rest in gratitude."] } },
      es: { title: "Serkem", subtitle: "Ofrenda dorada", situation: "Necesitas expresar gratitud.", practice: { title: "Ritual Serkem", time: "5 min", steps: ["Vierte té o leche en taza.", "Levanta taza a nivel de corazón.", "Visualiza néctar de bendición.", "Vierte en tierra limpia.", "Descansa en gratitud."] } }
    } }
  ],

  library: [
    { id: "shamanism-desc", icon: "🌿", translations: {
      ru: { title: "Шаманизм", subtitle: "Внешний путь — работа с элементами и духами", situation: "Основы пути Бон", practice: { title: "Описание Шаманизма", time: "Чтение", steps: ["Шаманизм — это работа с пятью элементами (земля, вода, огонь, воздух, пространство) как с живыми силами.", "Практик устанавливает связь с духами природы: наги (вода), лу (земля), лха (небо), ньен (деревья и горы).", "Основные практики: подношения (санг, серкьем, сур), возвращение утраченных энергий элементов, работа со стрелой души (дадар), бирюзой и оленем души (шава).", "Цель: восстановить баланс элементов в теле и окружении, исцелить болезнь, вернуть жизненную силу (ла).", "Шаманизм не стремится к обретению тела божества — это цель Тантры."] } },
      en: { title: "Shamanism", subtitle: "Outer path — working with elements and spirits", situation: "Foundation of Bon", practice: { title: "Description of Shamanism", time: "Reading", steps: ["Shamanism works with five elements (earth, water, fire, air, space) as living forces.", "Practitioner connects with nature spirits: nagas (water), lu (earth), lha (sky), nyen (trees and mountains).", "Main practices: offerings (sang, serkem, sur), returning lost element energies, working with soul arrow (dadar), turquoise and soul deer (shawa).", "Goal: restore balance of elements in body and environment, heal illness, return life force (la).", "Shamanism does not aim to attain deity body — that is the goal of Tantra."] } },
      es: { title: "Chamanismo", subtitle: "Camino exterior — trabajo con elementos y espíritus", situation: "Fundamento del Bon", practice: { title: "Descripción del Chamanismo", time: "Lectura", steps: ["El chamanismo trabaja con cinco elementos (tierra, agua, fuego, aire, espacio) como fuerzas vivas.", "El practicante se conecta con espíritus de la naturaleza: nagas (agua), lu (tierra), lha (cielo), nyen (árboles y montañas).", "Prácticas principales: ofrendas (sang, serkem, sur), retornar energías perdidas de elementos.", "Objetivo: restaurar equilibrio de elementos en cuerpo y entorno, sanar enfermedad, retornar fuerza vital (la).", "El chamanismo no busca obtener cuerpo de deidad — esa es la meta del Tantra."] } }
    } },
    { id: "sutra-desc", icon: "📿", translations: {
      ru: { title: "Сутра", subtitle: "Путь преобразования ума через этику и сострадание", situation: "Развитие сердца", practice: { title: "Описание Сутры", time: "Чтение", steps: ["Сутра — путь работы с умом через развитие этических качеств и сердечной мотивации.", "Основа: принятие Прибежища в Трёх Драгоценностях (Будда, Бон, Сангха) и порождение Бодхичитты — намерения достичь просветления ради всех существ.", "Четыре Безмерных качества: любящая доброта (майтри), сострадание (каруна/ньиндже), сорадование (мудита), равностность (упекша).", "Шесть Парамит (совершенств): щедрость (джинпа), этика (цултим), терпение (зопе), радостное усердие (цондю), медитативная концентрация (самтен), мудрость (шераб).", "Сутра меняет наше отношение к миру — от эгоцентризма к открытому сердцу."] } },
      en: { title: "Sutra", subtitle: "Path of mind transformation through ethics and compassion", situation: "Heart development", practice: { title: "Description of Sutra", time: "Reading", steps: ["Sutra is the path of working with mind through developing ethical qualities and heart motivation.", "Foundation: taking Refuge in Three Jewels (Buddha, Bon, Sangha) and generating Bodhicitta — intention to attain awakening for all beings.", "Four Immeasurables: loving-kindness (maitri), compassion (karuna/nyingje), joy (mudita), equanimity (upeksha).", "Six Paramitas (perfections): generosity (jinpa), ethics (tsultrim), patience (zope), joyous effort (tsöndü), meditative concentration (samten), wisdom (sherab).", "Sutra changes our attitude to the world — from egocentrism to open heart."] } },
      es: { title: "Sutra", subtitle: "Camino de transformación mental a través de ética y compasión", situation: "Desarrollo del corazón", practice: { title: "Descripción de Sutra", time: "Lectura", steps: ["Sutra es el camino de trabajar con la mente desarrollando cualidades éticas y motivación del corazón.", "Base: tomar Refugio en Tres Joyas (Buda, Bon, Sangha) y generar Bodhicitta — intención de alcanzar despertar para todos los seres.", "Cuatro Inconmensurables: amor bondadoso (maitri), compasión (karuna/nyingje), alegría (mudita), ecuanimidad (upeksha).", "Seis Paramitas (perfecciones): generosidad (jinpa), ética (tsultrim), paciencia (zope), esfuerzo gozoso (tsöndü), concentración meditativa (samten), sabiduría (sherab).", "Sutra cambia nuestra actitud al mundo — del egocentrismo al corazón abierto."] } }
    } },
    { id: "tantra-desc", icon: "🔥", translations: {
      ru: { title: "Тантра", subtitle: "Путь преобразования энергии через каналы, ветры и божества", situation: "Работа с тонким телом", practice: { title: "Описание Тантры", time: "Чтение", steps: ["Тантра обнаруживает энергии элементов в собственном теле — в каналах (ца), ветрах-пранах (лунг) и семенных сущностях (тигле).", "Три коренных канала: центральный (ума, синий), правый (ро-ма, белый/красный), левый (кьянг-ма, красный/белый). Соединяются на четыре пальца ниже пупка.", "Пять пран: поднимающая (горло, земля), жизненной силы (сердце, пространство), подобная огню (пупок, огонь), вездесущая (всё тело, воздух), опускающая (основание, вода).", "Пять слогов-воинов: А (корона, пространство), ОМ (горло, качество), ХУНГ (сердце, проявление), РАМ (пупок, действие), ДЗА (тайная чакра, деятельность).", "Практики: цалунг (движение ветра в каналах), трюлкхор (шесть движений), мантры божеств (Шерап Чамма, Шенла Одкар), работа с пятью Богинями-Матерями элементов.", "Конечная цель Тантры — обретение тела божества, преображение обычных тела, речи и ума в просветлённые."] } },
      en: { title: "Tantra", subtitle: "Path of energy transformation through channels, winds and deities", situation: "Working with subtle body", practice: { title: "Description of Tantra", time: "Reading", steps: ["Tantra discovers element energies in one's own body — in channels (tsa), winds-pranas (lung) and seed essences (tigle).", "Three root channels: central (uma, blue), right (ro-ma, white/red), left (kyang-ma, red/white). Join four finger-widths below navel.", "Five pranas: ascending (throat, earth), life-force (heart, space), fire-like (navel, fire), all-pervading (whole body, air), downward (base, water).", "Five warrior syllables: A (crown, space), OM (throat, quality), HUNG (heart, manifestation), RAM (navel, action), DZA (secret chakra, activity).", "Practices: tsa lung (wind movement in channels), trulkhor (six movements), deity mantras (Sherap Chamma, Shenlha Okar), working with five Mother Goddesses of elements.", "Ultimate goal of Tantra — attaining deity body, transforming ordinary body, speech and mind into enlightened ones."] } },
      es: { title: "Tantra", subtitle: "Camino de transformación energética a través de canales, vientos y deidades", situation: "Trabajo con cuerpo sutil", practice: { title: "Descripción de Tantra", time: "Lectura", steps: ["Tantra descubre energías de elementos en el propio cuerpo — en canales (tsa), vientos-pranas (lung) y esencias semilla (tigle).", "Tres canales raíz: central (uma, azul), derecho (ro-ma, blanco/rojo), izquierdo (kyang-ma, rojo/blanco). Se unen cuatro dedos bajo ombligo.", "Cinco pranas: ascendente (garganta, tierra), fuerza vital (corazón, espacio), similar al fuego (ombligo, fuego), omnipresente (todo cuerpo, aire), descendente (base, agua).", "Cinco sílabas guerreras: A (coronilla, espacio), OM (garganta, cualidad), HUNG (corazón, manifestación), RAM (ombligo, acción), DZA (chakra secreto, actividad).", "Prácticas: tsa lung (movimiento de viento en canales), trulkhor (seis movimientos), mantras de deidades (Sherap Chamma, Shenlha Okar), trabajo con cinco Diosas Madre de elementos.", "Meta final del Tantra — obtener cuerpo de deidad, transformar cuerpo, habla y mente ordinarios en iluminados."] } }
    } },
    { id: "dzogchen-desc", icon: "☁️", translations: {
      ru: { title: "Дзогчен", subtitle: "Путь Великого Совершенства — прямое узнавание природы ума", situation: "Высший путь Бон", practice: { title: "Описание Дзогчен", time: "Чтение", steps: ["Дзогчен (Дзогпа Ченпо) — высшее учение Бон, путь прямого узнавания изначальной природы ума без усилий и трансформации.", "Кунжи (основа всего) — изначальное пространство, мать всех проявлений. Ригпа (сын) — изначальное осознавание, неразрывное с пустотой. Цал — их нераздельное единство, проявляющееся как три великих видения: звук, свет, лучи.", "Два главных метода: Трекчо (Прорыв) — отсечение отвлечений, пребывание в естественном состоянии; Тхогёл (Перескок) — работа со светом и видениями через шесть светильников.", "Шесть светильников: свет Кунжи, свет сердца, свет мягкого белого канала, свет воды, свет чистого измерения, светильник Бардо.", "Четыре Бардо: этой жизни (от рождения до ухода), умирания (растворение пяти элементов), дхарматы (встреча с ясным светом), становления (поиск нового рождения).", "Высший плод Дзогчен — Радужное Тело (Джа Лю): тело практика растворяется в свете в момент ухода, остаются только волосы и ногти."] } },
      en: { title: "Dzogchen", subtitle: "Path of Great Perfection — direct recognition of mind nature", situation: "Highest Bon path", practice: { title: "Description of Dzogchen", time: "Reading", steps: ["Dzogchen (Dzogpa Chenpo) — highest teaching of Bon, path of direct recognition of primordial mind nature without effort or transformation.", "Kunzhi (ground of all) — primordial space, mother of all manifestations. Rigpa (son) — primordial awareness, inseparable from emptiness. Tsal — their inseparable unity, manifesting as three great visions: sound, light, rays.", "Two main methods: Trekchö (Cutting Through) — cutting off distractions, resting in natural state; Tögal (Leapover) — working with light and visions through six lamps.", "Six lamps: lamp of Kunzhi, lamp of heart, lamp of soft white channel, water lamp, lamp of pure dimension, lamp of Bardo.", "Four Bardos: of this life (birth to death), of dying (dissolution of five elements), of dharmata (meeting clear light), of becoming (seeking new birth).", "Highest fruit of Dzogchen — Rainbow Body (Ja Lü): practitioner's body dissolves into light at death, only hair and nails remain."] } },
      es: { title: "Dzogchen", subtitle: "Camino de la Gran Perfección — reconocimiento directo de la naturaleza de la mente", situation: "Camino supremo del Bon", practice: { title: "Descripción de Dzogchen", time: "Lectura", steps: ["Dzogchen (Dzogpa Chenpo) — enseñanza suprema del Bon, camino de reconocimiento directo de la naturaleza primordial de la mente sin esfuerzo ni transformación.", "Kunzhi (base de todo) — espacio primordial, madre de todas las manifestaciones. Rigpa (hijo) — conciencia primordial, inseparable de la vacuidad. Tsal — su unidad inseparable, manifestándose como tres grandes visiones: sonido, luz, rayos.", "Dos métodos principales: Trekchö (Corte) — cortar distracciones, descansar en estado natural; Tögal (Salto) — trabajar con luz y visiones a través de seis lámparas.", "Seis lámparas: lámpara de Kunzhi, lámpara de corazón, lámpara del canal blanco suave, lámpara de agua, lámpara de dimensión pura, lámpara de Bardo.", "Cuatro Bardos: de esta vida (nacimiento a muerte), de la muerte (disolución de cinco elementos), de dharmata (encuentro con luz clara), del devenir (buscando nuevo nacimiento).", "Fruto supremo de Dzogchen — Cuerpo Arcoíris (Ja Lü): cuerpo del practicante se disuelve en luz al morir, solo quedan pelo y uñas."] } }
    } },
    { id: "elements-desc", icon: "", translations: {
      ru: { title: "Пять Элементов", subtitle: "Основа всего проявленного мира", situation: "Ключ к пониманию Бон", practice: { title: "Описание Пяти Элементов", time: "Чтение", steps: ["Пять элементов — земля, вода, огонь, воздух, пространство — основа всего проявленного мира в учении Бон.", "Земля (жёлтый, квадрат, слог ЛАМ, орган — селезёнка): устойчивость, прочность, опора. Богиня — Сатри Эрсанг.", "Вода (синий, полумесяц, слог ВАМ, орган — почки): текучесть, спокойствие, чувствительность. Богиня — Кьедима.", "Огонь (красный, треугольник, слог РАМ, орган — печень): трансформация, тепло, сила воли. Богиня — Мэри.", "Воздух (зелёный, круг, слог ЯМ, орган — лёгкие): движение, гибкость, свежесть. Богиня — Лунгта.", "Пространство (белый, сфера, слог ХАМ, орган — сердце): открытость, ясность, вместимость. Богиня — Намкха.", "Мантра всех элементов: А ЯМ РАМ МАМ КХАМ ДРУМ ДУ. Мантра долгой жизни: СО ДРУМ А КАР МУ ЛА ТИНГ НАМ О ДУ МУ ЙЕ ЦЕ НИ ДЗА."] } },
      en: { title: "Five Elements", subtitle: "Foundation of all manifested world", situation: "Key to understanding Bon", practice: { title: "Description of Five Elements", time: "Reading", steps: ["Five elements — earth, water, fire, air, space — foundation of all manifested world in Bon teaching.", "Earth (yellow, square, syllable LAM, organ — spleen): stability, strength, support. Goddess — Satri Ersang.", "Water (blue, crescent, syllable VAM, organ — kidneys): flow, calm, sensitivity. Goddess — Kyedima.", "Fire (red, triangle, syllable RAM, organ — liver): transformation, warmth, willpower. Goddess — Meri.", "Air (green, circle, syllable YAM, organ — lungs): movement, flexibility, freshness. Goddess — Lungta.", "Space (white, sphere, syllable KHAM, organ — heart): openness, clarity, capacity. Goddess — Namkha.", "Mantra of all elements: A YAM RAM MAM KHAM DRUM DU. Long life mantra: SO DRUM A KAR MU LA TING NAM O DU MU YE TSE NI DZA."] } },
      es: { title: "Cinco Elementos", subtitle: "Fundamento de todo el mundo manifestado", situation: "Clave para entender Bon", practice: { title: "Descripción de Cinco Elementos", time: "Lectura", steps: ["Cinco elementos — tierra, agua, fuego, aire, espacio — fundamento de todo el mundo manifestado en la enseñanza Bon.", "Tierra (amarillo, cuadrado, sílaba LAM, órgano — bazo): estabilidad, fuerza, apoyo. Diosa — Satri Ersang.", "Agua (azul, media luna, sílaba VAM, órgano — riñones): fluidez, calma, sensibilidad. Diosa — Kyedima.", "Fuego (rojo, triángulo, sílaba RAM, órgano — hígado): transformación, calor, fuerza de voluntad. Diosa — Meri.", "Aire (verde, círculo, sílaba YAM, órgano — pulmones): movimiento, flexibilidad, frescura. Diosa — Lungta.", "Espacio (blanco, esfera, sílaba KHAM, órgano — corazón): apertura, claridad, capacidad. Diosa — Namkha.", "Mantra de todos los elementos: A YAM RAM MAM KHAM DRUM DU. Mantra de larga vida: SO DRUM A KAR MU LA TING NAM O DU MU YE TSE NI DZA."] } }
    } },
    { id: "offerings-desc", icon: "🙏", translations: {
      ru: { title: "Подношения и Четыре Гостя", subtitle: "Практика щедрости и связи с миром", situation: "Развитие сердца и гармонии", practice: { title: "Описание Подношений", time: "Чтение", steps: ["Практика подношений развивает щедрость, чувствительность и сострадание. Истинное подношение происходит на уровне воображения и намерения.", "Четыре категории гостей: 1) Гости почитания — Три Драгоценности (Будды, Бодхисаттвы, Гуру, Идамы, Дакини). 2) Гости-защитники — охранители учения (Дхармапалы). 3) Кармические гости — восемь классов духов и существа, перед которыми есть долг. 4) Гости сострадания — все чувствующие существа шести миров.", "Санг — дымовое подношение можжевельника для очищения пространства и умилостивления духов местности.", "Серкьем — золотое подношение напитка (чай, молоко) защитникам Дхармы.", "Сур — подношение сожжённой пищи (цзамба с маслом) всем четырём группам гостей.", "Перед едой предложите пищу 1-й и 2-й группам гостей. Остатки отдайте 3-й и 4-й группам."] } },
      en: { title: "Offerings and Four Guests", subtitle: "Practice of generosity and connection with world", situation: "Heart development and harmony", practice: { title: "Description of Offerings", time: "Reading", steps: ["Offering practice develops generosity, sensitivity and compassion. True offering happens at level of imagination and intention.", "Four categories of guests: 1) Guests of reverence — Three Jewels (Buddhas, Bodhisattvas, Guru, Yidams, Dakinis). 2) Protector guests — dharma guardians (Dharmapalas). 3) Karmic guests — eight classes of spirits and beings to whom we owe debt. 4) Guests of compassion — all sentient beings of six realms.", "Sang — smoke offering of juniper for purifying space and appeasing local spirits.", "Serkem — golden drink offering (tea, milk) to Dharma protectors.", "Sur — burnt food offering (tsampa with butter) to all four groups of guests.", "Before eating, offer food to 1st and 2nd groups of guests. Remainders give to 3rd and 4th groups."] } },
      es: { title: "Ofrendas y Cuatro Huéspedes", subtitle: "Práctica de generosidad y conexión con el mundo", situation: "Desarrollo del corazón y armonía", practice: { title: "Descripción de Ofrendas", time: "Lectura", steps: ["Práctica de ofrendas desarrolla generosidad, sensibilidad y compasión. Verdadera ofrenda ocurre en nivel de imaginación e intención.", "Cuatro categorías de huéspedes: 1) Huéspedes de reverencia — Tres Joyas (Budás, Bodhisattvas, Guru, Yidams, Dakinis). 2) Huéspedes protectores — guardianes del dharma (Dharmapalas). 3) Huéspedes kármicos — ocho clases de espíritus y seres a quienes debemos deuda. 4) Huéspedes de compasión — todos los seres sintientes de seis reinos.", "Sang — ofrenda de humo de enebro para purificar espacio y apaciguar espíritus locales.", "Serkem — ofrenda dorada de bebida (té, leche) a protectores del Dharma.", "Sur — ofrenda de comida quemada (tsampa con mantequilla) a los cuatro grupos de huéspedes.", "Antes de comer, ofrece comida a 1er y 2do grupos de huéspedes. Restos da a 3er y 4to grupos."] } }
    } }
  ]
};

const flashcards = {
  mantras: [
    { front: "Тонпа Шенраб", back: "ОМ МА ТЕ МА ЙЕ СА ЛЕ ХУМ" },
    { front: "Шенла Одкар", back: "ОМ МУНИ ТРИГЬЕ ДУ ШЕН" },
    { front: "Шерап Чамма", back: "ОМ ПАДМА КИЛИ КИЛИ ШЕРАП ЧАММА ХУМ СОХА" },
    { front: "Всех элементов", back: "А ЯМ РАМ МАМ КХАМ ДРУМ ДУ" },
    { front: "Богини Земли", back: "КХАМ ЛА ЖИ КЬЕ ЛЕ ДУ" },
    { front: "Богини Воды", back: "МАМ ДАНГ РА МАМ ТИНГ ДУ" },
    { front: "Богини Огня", back: "РАМ ЦАНГ ТАНГ НЕ РАМ ДУ" },
    { front: "Богини Воздуха", back: "ЯМ ЯМ НИ ЛИ ТУН ДУ" },
    { front: "Богини Пространства", back: "А МУ ЙЕ А КАР А НИ А" }
  ],
  syllables: [
    { front: "А (белый)", back: "Коронная чакра, пространство, Дхармакайя" },
    { front: "ОМ (красный)", back: "Горловая чакра, качество, Самбхогакайя" },
    { front: "ХУНГ (синий)", back: "Сердечная чакра, проявление" },
    { front: "РАМ (красный)", back: "Пупочная чакра, действие" },
    { front: "ДЗА (зеленый)", back: "Тайная чакра, деятельность, Нирманакайя" }
  ],
  elements: [
    { front: "Земля", back: "Жёлтый, квадрат, ЛАМ, селезёнка, устойчивость" },
    { front: "Вода", back: "Синий, полумесяц, ВАМ, почки, текучесть" },
    { front: "Огонь", back: "Красный, треугольник, РАМ, печень, трансформация" },
    { front: "Воздух", back: "Зелёный, круг, ЯМ, лёгкие, движение" },
    { front: "Пространство", back: "Белый, сфера, ХАМ, сердце, открытость" }
  ],
  pranas_fc: [
    { front: "Поднимающая прана", back: "Земля, горловая чакра, ясность чувств" },
    { front: "Прана жизненной силы", back: "Пространство, сердечная чакра, жизнеспособность" },
    { front: "Прана, подобная огню", back: "Огонь, пупочная чакра, пищеварение" },
    { front: "Вездесущая прана", back: "Воздух, всё тело, связи внутри тела" },
    { front: "Опускающая прана", back: "Вода, основание тела, выделение" }
  ],
  dzogchen: [
    { front: "Кунжи", back: "Основа всего — изначальное пространство" },
    { front: "Ригпа", back: "Изначальное осознавание" },
    { front: "Сем", back: "Обычный двойственный ум" },
    { front: "Цал", back: "Энергия, движение, три великих видения" },
    { front: "Трекчо", back: "Прорыв — отсечение отвлечений" },
    { front: "Тхогёл", back: "Перескок — работа со светом" },
    { front: "Тигле", back: "Световая сфера, семя осознавания" },
    { front: "Шесть светильников", back: "От сердца к глазам — путь видений" }
  ],
  transition: [
    { front: "Переход жизни", back: "От рождения до ухода" },
    { front: "Переход ясности", back: "Встреча со светом" },
    { front: "Переход становления", back: "Поиск нового рождения" },
    { front: "Ясный свет", back: "Природа ума в момент ухода" },
    { front: "Радужное тело", back: "Высшая реализация Дзогчен" }
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
    pranas: i18n[currentLang].pranas_title,
    dream: i18n[currentLang].dream_title,
    transition: i18n[currentLang].transition_title,
    offerings: i18n[currentLang].offerings_title,
    library: i18n[currentLang].library_title
  };
  document.getElementById('section-title').textContent = titles[section] || section;
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
    item.innerHTML = '<div class="library-icon">' + card.icon + '</div><div class="library-info"><h4>' + t.title + '</h4><p>' + t.subtitle + '</p></div>';
    item.onclick = function() { showCard(section, index); };
    listEl.appendChild(item);
  });
  if (filtered.length === 0) {
    listEl.innerHTML = '<div class="favorites-empty">Ничего не найдено</div>';
  }
}

function showCard(section, index) {
  const card = data[section][index];
  currentCard = { section: section, card: card, index: index };
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
  t.steps.forEach(function(step, i) {
    stepsEl.innerHTML += '<div class="practice-step"><div class="step-number">' + (i+1) + '</div><div class="step-text">' + step + '</div></div>';
  });
  showScreen('practice-screen');
}

function searchCards() {
  const query = document.getElementById('search-input').value.toLowerCase().trim();
  const listEl = document.getElementById('library-list');
  listEl.innerHTML = '';
  
  if (query.length < 2) {
    if (currentSection && data[currentSection]) {
      showSectionList(currentSection);
    }
    return;
  }
  
  const allSections = ['body', 'speech', 'mind', 'elements', 'pranas', 'dream', 'transition', 'offerings', 'library'];
  const results = [];
  
  allSections.forEach(function(section) {
    if (!data[section]) return;
    data[section].forEach(function(card, index) {
      const t = card.translations[currentLang];
      const searchText = (t.title + ' ' + t.subtitle + ' ' + t.situation + ' ' + t.practice.title + ' ' + t.practice.steps.join(' ')).toLowerCase();
      if (searchText.includes(query)) {
        results.push({ section: section, card: card, index: index });
      }
    });
  });
  
  if (results.length === 0) {
    listEl.innerHTML = '<div class="favorites-empty">Ничего не найдено по запросу "' + query + '"</div>';
    return;
  }
  
  document.getElementById('section-title').textContent = 'Результаты поиска: ' + query + ' (' + results.length + ')';
  
  const sectionNames = {
    body: 'Тело', speech: 'Речь', mind: 'Ум', elements: 'Элементы',
    pranas: 'Праны', dream: 'Сон', transition: 'Переходы',
    offerings: 'Подношения', library: 'Библиотека'
  };
  
  results.forEach(function(item) {
    const t = item.card.translations[currentLang];
    const itemEl = document.createElement('div');
    itemEl.className = 'library-item';
    itemEl.innerHTML = '<div class="library-icon">' + item.card.icon + '</div><div class="library-info"><h4>' + t.title + '</h4><p>' + t.subtitle + '</p><p style="font-size:10px;color:#d4af37;margin-top:3px;">📂 ' + (sectionNames[item.section] || item.section) + '</p></div>';
    itemEl.onclick = function() { showCard(item.section, item.index); };
    listEl.appendChild(itemEl);
  });
}

function showFlashcards(category) {
  currentFlashcardCategory = category;
  currentFlashcardIndex = 0;
  document.querySelectorAll('.category-btn').forEach(function(btn) { btn.classList.remove('active'); });
  event.target.classList.add('active');
  updateFlashcard();
  showScreen('flashcards-screen');
}

function updateFlashcard() {
  const cards = flashcards[currentFlashcardCategory];
  const card = cards[currentFlashcardIndex];
  document.getElementById('flashcard-front').textContent = card.front;
  document.getElementById('flashcard-back').textContent = card.back;
  document.getElementById('flashcard-counter').textContent = (currentFlashcardIndex + 1) + ' / ' + cards.length;
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
  const index = favorites.findIndex(function(f) { return f.cardId === cardId; });
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
  const isFavorite = favorites.some(function(f) { return f.cardId === cardId; });
  btn.textContent = isFavorite ? '⭐' : '☆';
  btn.classList.toggle('active', isFavorite);
}

function startTimer(seconds) {
  document.getElementById('timer-modal').classList.add('active');
  let remaining = seconds;
  updateTimerDisplay(remaining);
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(function() {
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