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
    what_to_do: "🔥 Practice", start_timer: " Timer", close: "Close",
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
    } },
    { id: "five-warrior-syllables", icon: "⚔️", translations: {
      ru: { title: "Пять слогов-воинов", subtitle: "А-ОМ-ХУНГ-РАМ-ДЗА — пребывание в природе ума", situation: "Нужно достичь состояния неизменного присутствия.", practice: { title: "Практика пяти слогов-воинов", time: "15 мин", steps: ["Сядьте в пятичленную позу.", "Визуализируйте в сердце синий слог ХУНГ.", "Вдыхайте через левую ноздрю, произнося А.", "Задержите дыхание, произнося ОМ.", "Выдыхайте через правую ноздрю, произнося ХУНГ.", "Повторите цикл 7, 21 или 108 раз.", "Побудьте в едином ХУНГ — природе ума."] } },
      en: { title: "Five Warrior Syllables", subtitle: "A-OM-HUNG-RAM-DZA — resting in mind nature", situation: "Need to attain unchanging presence.", practice: { title: "Five Warrior Syllables Practice", time: "15 min", steps: ["Sit in five-point posture.", "Visualize blue HUNG in heart.", "Inhale through left nostril, sounding A.", "Hold breath, sounding OM.", "Exhale through right nostril, sounding HUNG.", "Repeat cycle 7, 21 or 108 times.", "Rest in unified HUNG — mind nature."] } },
      es: { title: "Cinco Sílabas Guerreras", subtitle: "A-OM-HUNG-RAM-DZA — descansar en naturaleza de mente", situation: "Necesitas alcanzar presencia inmutable.", practice: { title: "Práctica de Cinco Sílabas Guerreras", time: "15 min", steps: ["Siéntate en postura de cinco puntos.", "Visualiza HUNG azul en corazón.", "Inhala por fosa izquierda, sonando A.", "Mantén respiración, sonando OM.", "Exhala por fosa derecha, sonando HUNG.", "Repite ciclo 7, 21 o 108 veces.", "Descansa en HUNG unificado — naturaleza de mente."] } }
    } },
    { id: "four-immeasurables", icon: "💛", translations: {
      ru: { title: "Четыре безмерных", subtitle: "Любовь, сострадание, радость, равностность", situation: "Нужно развить сердечные качества.", practice: { title: "Практика четырёх безмерных", time: "10 мин", steps: ["Любовь: «Пусть все существа будут счастливы».", "Сострадание: «Пусть все существа будут свободны от страданий».", "Радость: «Пусть все существа не расстанутся с радостью».", "Равностность: «Пусть все существа пребывают в беспристрастности».", "Расширь каждое качество на всех существ без исключения."] } },
      en: { title: "Four Immeasurables", subtitle: "Love, compassion, joy, equanimity", situation: "Need to develop heart qualities.", practice: { title: "Four Immeasurables Practice", time: "10 min", steps: ["Love: 'May all beings be happy'.", "Compassion: 'May all beings be free from suffering'.", "Joy: 'May all beings not be separated from joy'.", "Equanimity: 'May all beings rest in impartiality'.", "Extend each quality to all beings without exception."] } },
      es: { title: "Cuatro Inconmensurables", subtitle: "Amor, compasión, alegría, ecuanimidad", situation: "Necesitas desarrollar cualidades del corazón.", practice: { title: "Práctica de Cuatro Inconmensurables", time: "10 min", steps: ["Amor: 'Que todos los seres sean felices'.", "Compasión: 'Que todos los seres sean libres del sufrimiento'.", "Alegría: 'Que todos los seres no se separen de la alegría'.", "Ecuanimidad: 'Que todos los seres descansen en imparcialidad'.", "Extiende cada cualidad a todos los seres sin excepción."] } }
    } },
    { id: "prostrations-detailed", icon: "", translations: {
      ru: { title: "Простирания (подробно)", subtitle: "Очищение тела, речи и ума через поклонение", situation: "Нужно очистить карму трёх врат.", practice: { title: "Практика простираний", time: "15 мин", steps: ["Встаньте, руки сложены у сердца (ум).", "Поднимите руки к макушке — очищение тела.", "Опустите к горлу — очищение речи.", "Опустите к сердцу — очищение ума.", "Лягте на землю, коснувшись пятью точками (лоб, две руки, два колена).", "Поднимитесь, повторяя: «Принимаю прибежище в Будде, Боне и Сангхе».", "Повторите 3, 7, 21 или 108 раз."] } },
      en: { title: "Prostrations (detailed)", subtitle: "Purifying body, speech and mind through reverence", situation: "Need to purify karma of three gates.", practice: { title: "Prostrations Practice", time: "15 min", steps: ["Stand, hands joined at heart (mind).", "Raise hands to crown — purify body.", "Lower to throat — purify speech.", "Lower to heart — purify mind.", "Lie on ground, touching five points (forehead, two hands, two knees).", "Rise, repeating: 'I take refuge in Buddha, Bon and Sangha'.", "Repeat 3, 7, 21 or 108 times."] } },
      es: { title: "Postraciones (detallado)", subtitle: "Purificando cuerpo, habla y mente mediante reverencia", situation: "Necesitas purificar karma de tres puertas.", practice: { title: "Práctica de Postraciones", time: "15 min", steps: ["Párate, manos unidas en corazón (mente).", "Levanta manos a coronilla — purifica cuerpo.", "Baja a garganta — purifica habla.", "Baja a corazón — purifica mente.", "Acuéstate, tocando cinco puntos (frente, dos manos, dos rodillas).", "Levántate, repitiendo: 'Tomo refugio en Buda, Bon y Sangha'.", "Repite 3, 7, 21 o 108 veces."] } }
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
    } },
    { id: "om-ah-hum", icon: "✨", translations: {
      ru: { title: "ОМ А ХУМ", subtitle: "Три слога-источника: очищение тела, речи, ума", situation: "Нужно очищение на трёх уровнях.", practice: { title: "Очищение ОМ А ХУМ", time: "3 мин", steps: ["Белый слог А на макушке — очищает тело.", "Красный слог ОМ в горле — очищает речь.", "Синий слог ХУМ в сердце — очищает ум.", "Повтори каждый слог по 7 раз.", "Побудь в тройственной чистоте."] } },
      en: { title: "OM AH HUM", subtitle: "Three seed syllables: purify body, speech, mind", situation: "Need purification on three levels.", practice: { title: "OM AH HUM Purification", time: "3 min", steps: ["White syllable A at crown — purifies body.", "Red syllable OM at throat — purifies speech.", "Blue syllable HUM at heart — purifies mind.", "Repeat each 7 times.", "Rest in threefold purity."] } },
      es: { title: "OM AH HUM", subtitle: "Tres sílabas semilla: purifican cuerpo, habla, mente", situation: "Necesitas purificación en tres niveles.", practice: { title: "Purificación OM AH HUM", time: "3 min", steps: ["Sílaba blanca A en coronilla — purifica cuerpo.", "Sílaba roja OM en garganta — purifica habla.", "Sílaba azul HUM en corazón — purifica mente.", "Repite cada una 7 veces.", "Descansa en pureza triple."] } }
    } },
    { id: "om-ma-te", icon: "", translations: {
      ru: { title: "ОМ МА ТЕ МА ЙЕ СА ЛЕ ХУМ", subtitle: "Главная мантра Тонпа Шенраба, основателя Бон", situation: "Нужно благословение линии, связь с истоками учения.", practice: { title: "Мантра Тонпа Шенраба", time: "5 мин", steps: ["Представь Тонпа Шенраба перед собой или на макушке.", "Сложи ладони в жесте молитвы.", "Повтори мантру: ОМ МА ТЕ МА ЙЕ СА ЛЕ ХУМ (21 раз).", "Попроси благословения на реализацию учения.", "Раствори Гуру в своём сердце, став с ним одним."] } },
      en: { title: "OM MA TE MA YE SA LE HUM", subtitle: "Main mantra of Tonpa Shenrab, founder of Bon", situation: "Need blessing of lineage, connection with origins.", practice: { title: "Mantra of Tonpa Shenrab", time: "5 min", steps: ["Visualize Tonpa Shenrab before you or on crown.", "Join palms in prayer gesture.", "Repeat mantra: OM MA TE MA YE SA LE HUM (21 times).", "Ask for blessing to realize teachings.", "Dissolve Guru into your heart, becoming one."] } },
      es: { title: "OM MA TE MA YE SA LE HUM", subtitle: "Mantra principal de Tonpa Shenrab, fundador del Bon", situation: "Necesitas bendición del linaje, conexión con orígenes.", practice: { title: "Mantra de Tonpa Shenrab", time: "5 min", steps: ["Visualiza a Tonpa Shenrab frente a ti o en coronilla.", "Une palmas en gesto de oración.", "Repite mantra: OM MA TE MA YE SA LE HUM (21 veces).", "Pide bendición para realizar enseñanzas.", "Disuelve Guru en tu corazón, volviéndote uno."] } }
    } },
    { id: "a-ka-ra-me", icon: "🌈", translations: {
      ru: { title: "А КАР А МЕ ДУ", subtitle: "Мантра пяти Будд и пяти элементов", situation: "Нужна гармонизация пяти элементов в теле.", practice: { title: "Мантра пяти элементов", time: "3 мин", steps: ["А — пространство (белый), КАР — вода (синий), РА — огонь (красный), МЕ — ветер (зелёный), ДУ — земля (жёлтый).", "Визуализируй пять цветов света в пяти центрах тела.", "Повтори: А КАР А МЕ ДУ (7 раз).", "Почувствуй, как пять элементов приходят в баланс.", "Побудь в гармонии пяти цветов."] } },
      en: { title: "A KA RA ME DU", subtitle: "Mantra of five Buddhas and five elements", situation: "Need harmonization of five elements in body.", practice: { title: "Mantra of five elements", time: "3 min", steps: ["A — space (white), KA — water (blue), RA — fire (red), ME — wind (green), DU — earth (yellow).", "Visualize five colors of light in five body centers.", "Repeat: A KA RA ME DU (7 times).", "Feel five elements coming into balance.", "Rest in harmony of five colors."] } },
      es: { title: "A KA RA ME DU", subtitle: "Mantra de cinco Budas y cinco elementos", situation: "Necesitas armonización de cinco elementos en el cuerpo.", practice: { title: "Mantra de cinco elementos", time: "3 min", steps: ["A — espacio (blanco), KA — agua (azul), RA — fuego (rojo), ME — viento (verde), DU — tierra (amarillo).", "Visualiza cinco colores de luz en cinco centros.", "Repite: A KA RA ME DU (7 veces).", "Siente cinco elementos en equilibrio.", "Descansa en armonía de cinco colores."] } }
    } }
  ],
   mind: [
    { id: "kunzhi", icon: "☁️", translations: {
      ru: { title: "Кунжи", subtitle: "Основа всего", situation: "Забыл пространство.", practice: { title: "Возвращение к Кунжи", time: "5 мин", steps: ["Остановись.", "Скажи: «Всё — игра Кунжи».", "Не меняй ничего.", "Почувствуй единство.", "Просто будь."] } },
      en: { title: "Kunzhi", subtitle: "Ground of All", situation: "Forgot space.", practice: { title: "Return to Kunzhi", time: "5 min", steps: ["Stop.", "Say: 'All is Kunzhi'.", "Don't change.", "Feel unity.", "Just be."] } },
      es: { title: "Kunzhi", subtitle: "Fundamento", situation: "Olvidaste espacio.", practice: { title: "Regreso a Kunzhi", time: "5 min", steps: ["Detente.", "Di: 'Todo es Kunzhi'.", "No cambies.", "Siente unidad.", "Solo sé."] } }
    } },
    { id: "rigpa", icon: "✨", translations: {
      ru: { title: "Ригпа", subtitle: "Изначальное осознавание", situation: "Потеря присутствия.", practice: { title: "Узнавание Ригпа", time: "5 мин", steps: ["Остановись.", "Посмотри на смотрящего.", "Не ищи — узнай.", "Это Ригпа.", "Побудь в узнавании."] } },
      en: { title: "Rigpa", subtitle: "Primordial awareness", situation: "Lost presence.", practice: { title: "Recognizing Rigpa", time: "5 min", steps: ["Stop.", "Look at the looker.", "Don't search — recognize.", "This is Rigpa.", "Rest in recognition."] } },
      es: { title: "Rigpa", subtitle: "Conciencia primordial", situation: "Perdiste presencia.", practice: { title: "Reconocer Rigpa", time: "5 min", steps: ["Detente.", "Mira al que mira.", "No busques — reconoce.", "Esto es Rigpa.", "Descansa."] } }
    } }
  ],
  elements: [
    { id: "earth", icon: "️", translations: {
      ru: { title: "Земля", subtitle: "Сатри Эрсанг, мантра: КХАМ ЛА ЖИ КЬЕ ЛЕ ДУ", situation: "Нужна стабильность.", practice: { title: "Богиня Земли", time: "5 мин", steps: ["Визуализируйте жёлтую богиню.", "Повторяйте мантру.", "Попросите благословения устойчивости."] } },
      en: { title: "Earth", subtitle: "Satri Ersang, mantra: KHAM LA ZHI KYE LE DU", situation: "Need stability.", practice: { title: "Earth Goddess", time: "5 min", steps: ["Visualize yellow goddess.", "Repeat mantra.", "Ask for stability."] } },
      es: { title: "Tierra", subtitle: "Satri Ersang", situation: "Necesitas estabilidad.", practice: { title: "Diosa Tierra", time: "5 min", steps: ["Visualiza diosa amarilla.", "Repite mantra.", "Pide estabilidad."] } }
    } },
    { id: "water", icon: "💧", translations: {
      ru: { title: "Вода", subtitle: "Кьедима, мантра: МАМ ДАНГ РА МАМ ТИНГ ДУ", situation: "Нужна текучесть.", practice: { title: "Богиня Воды", time: "5 мин", steps: ["Визуализируйте синюю богиню.", "Повторяйте мантру.", "Попросите благословения очищения."] } },
      en: { title: "Water", subtitle: "Kyedima, mantra: MAM DANG RA MAM TING DU", situation: "Need flow.", practice: { title: "Water Goddess", time: "5 min", steps: ["Visualize blue goddess.", "Repeat mantra.", "Ask for purification."] } },
      es: { title: "Agua", subtitle: "Kyedima", situation: "Necesitas fluidez.", practice: { title: "Diosa Agua", time: "5 min", steps: ["Visualiza diosa azul.", "Repite mantra.", "Pide purificación."] } }
    } },
    { id: "fire", icon: "", translations: {
      ru: { title: "Огонь", subtitle: "Мэри, мантра: РАМ ЦАНГ ТАНГ НЕ РАМ ДУ", situation: "Нужна трансформация.", practice: { title: "Богиня Огня", time: "5 мин", steps: ["Визуализируйте красную богиню.", "Повторяйте мантру.", "Попросите благословения трансформации."] } },
      en: { title: "Fire", subtitle: "Meri, mantra: RAM TSANG TANG NE RAM DU", situation: "Need transformation.", practice: { title: "Fire Goddess", time: "5 min", steps: ["Visualize red goddess.", "Repeat mantra.", "Ask for transformation."] } },
      es: { title: "Fuego", subtitle: "Meri", situation: "Necesitas transformación.", practice: { title: "Diosa Fuego", time: "5 min", steps: ["Visualiza diosa roja.", "Repite mantra.", "Pide transformación."] } }
    } },
    { id: "air", icon: "💨", translations: {
      ru: { title: "Воздух", subtitle: "Лунгта, мантра: ЯМ ЯМ НИ ЛИ ТУН ДУ", situation: "Нужно движение.", practice: { title: "Богиня Воздуха", time: "5 мин", steps: ["Визуализируйте зелёную богиню.", "Повторяйте мантру.", "Попросите благословения свободы."] } },
      en: { title: "Air", subtitle: "Lungta, mantra: YAM YAM NI LI TUN DU", situation: "Need movement.", practice: { title: "Air Goddess", time: "5 min", steps: ["Visualize green goddess.", "Repeat mantra.", "Ask for freedom."] } },
      es: { title: "Aire", subtitle: "Lungta", situation: "Necesitas movimiento.", practice: { title: "Diosa Aire", time: "5 min", steps: ["Visualiza diosa verde.", "Repite mantra.", "Pide libertad."] } }
    } },
    { id: "space", icon: "☁️", translations: {
      ru: { title: "Пространство", subtitle: "Намкха, мантра: А МУ ЙЕ А КАР А НИ А", situation: "Нужна открытость.", practice: { title: "Богиня Пространства", time: "5 мин", steps: ["Визуализируйте белую богиню.", "Повторяйте мантру.", "Побудьте в безграничности."] } },
      en: { title: "Space", subtitle: "Namkha, mantra: A MU YE A KAR A NI A", situation: "Need openness.", practice: { title: "Space Goddess", time: "5 min", steps: ["Visualize white goddess.", "Repeat mantra.", "Rest in boundlessness."] } },
      es: { title: "Espacio", subtitle: "Namkha", situation: "Necesitas apertura.", practice: { title: "Diosa Espacio", time: "5 min", steps: ["Visualiza diosa blanca.", "Repite mantra.", "Descansa en inmensidad."] } }
    } }
  ],
  pranas: [
    { id: "ascending", icon: "⬆️", translations: {
      ru: { title: "Поднимающая прана", subtitle: "Земля, горло", situation: "Тупость чувств.", practice: { title: "Активация", time: "5 мин", steps: ["Горловая чакра.", "Жёлтый свет.", "Вдыхайте вверх.", "Ясность."] } },
      en: { title: "Ascending Prana", subtitle: "Earth, throat", situation: "Dull senses.", practice: { title: "Activation", time: "5 min", steps: ["Throat chakra.", "Yellow light.", "Inhale up.", "Clarity."] } },
      es: { title: "Prana Ascendente", subtitle: "Tierra, garganta", situation: "Sentidos embotados.", practice: { title: "Activación", time: "5 min", steps: ["Garganta.", "Luz amarilla.", "Inhala arriba.", "Claridad."] } }
    } },
    { id: "life-force", icon: "🤍", translations: {
      ru: { title: "Прана жизненной силы", subtitle: "Пространство, сердце", situation: "Слабость.", practice: { title: "Укрепление", time: "5 мин", steps: ["Сердечная чакра.", "Белая драгоценность.", "Чистое пространство.", "Полнота жизни."] } },
      en: { title: "Life-Force Prana", subtitle: "Space, heart", situation: "Weakness.", practice: { title: "Strengthening", time: "5 min", steps: ["Heart chakra.", "White jewel.", "Pure space.", "Fullness of life."] } },
      es: { title: "Prana Fuerza Vital", subtitle: "Espacio, corazón", situation: "Debilidad.", practice: { title: "Fortalecimiento", time: "5 min", steps: ["Corazón.", "Joya blanca.", "Espacio puro.", "Plenitud."] } }
    } },
    { id: "fire-like", icon: "", translations: {
      ru: { title: "Прана, подобная огню", subtitle: "Огонь, пупок", situation: "Холод.", practice: { title: "Внутренний огонь", time: "5 мин", steps: ["Пупочная чакра.", "Красный треугольник.", "Тепло в центре.", "Сила."] } },
      en: { title: "Fire-Like Prana", subtitle: "Fire, navel", situation: "Cold.", practice: { title: "Inner Fire", time: "5 min", steps: ["Navel chakra.", "Red triangle.", "Warmth in center.", "Power."] } },
      es: { title: "Prana Fuego", subtitle: "Fuego, ombligo", situation: "Frío.", practice: { title: "Fuego Interno", time: "5 min", steps: ["Ombligo.", "Triángulo rojo.", "Calor en centro.", "Poder."] } }
    } },
    { id: "all-pervading", icon: "🌬️", translations: {
      ru: { title: "Вездесущая прана", subtitle: "Воздух, всё тело", situation: "Скованность.", practice: { title: "Распространение", time: "5 мин", steps: ["Расслабьте тело.", "Зелёный свет.", "Энергия течёт.", "Единство."] } },
      en: { title: "All-Pervading Prana", subtitle: "Air, whole body", situation: "Stiffness.", practice: { title: "Spreading", time: "5 min", steps: ["Relax body.", "Green light.", "Energy flows.", "Unity."] } },
      es: { title: "Prana Omnipresente", subtitle: "Aire, todo cuerpo", situation: "Rigidez.", practice: { title: "Expansión", time: "5 min", steps: ["Relaja cuerpo.", "Luz verde.", "Energía fluye.", "Unidad."] } }
    } },
    { id: "downward", icon: "⬇️", translations: {
      ru: { title: "Опускающая прана", subtitle: "Вода, основание", situation: "Тревога.", practice: { title: "Заземление", time: "5 мин", steps: ["Основание тела.", "Синий свет вниз.", "Отпустите напряжение.", "Покой."] } },
      en: { title: "Downward Prana", subtitle: "Water, base", situation: "Anxiety.", practice: { title: "Grounding", time: "5 min", steps: ["Base of body.", "Blue light down.", "Release tension.", "Peace."] } },
      es: { title: "Prana Descendente", subtitle: "Agua, base", situation: "Ansiedad.", practice: { title: "Enraizar", time: "5 min", steps: ["Base del cuerpo.", "Luz azul abajo.", "Suelta tensión.", "Paz."] } }
    } }
  ],
  dream: [
    { id: "dream-prep", icon: "🌙", translations: {
      ru: { title: "Подготовка ко сну", subtitle: "Осознанные сны", situation: "Не запоминать сны.", practice: { title: "Подготовка", time: "10 мин", steps: ["Днём осознавай бодрствование.", "Вечером — намерение.", "Перед сном — свет в сердце.", "Утром — вспоминай сон."] } },
      en: { title: "Dream Prep", subtitle: "Lucid dreams", situation: "Not remembering dreams.", practice: { title: "Preparation", time: "10 min", steps: ["Day — recognize waking.", "Evening — intention.", "Before sleep — light in heart.", "Morning — recall dream."] } },
      es: { title: "Preparación Sueño", subtitle: "Sueños lúcidos", situation: "No recordar sueños.", practice: { title: "Preparación", time: "10 min", steps: ["Día — reconoce vigilia.", "Tarde — intención.", "Antes dormir — luz en corazón.", "Mañana — recuerda sueño."] } }
    } }
  ],
  transition: [
    { id: "bardo-life", icon: "🌅", translations: {
      ru: { title: "Бардо этой жизни", subtitle: "От рождения до ухода", situation: "Забыл о непостоянстве.", practice: { title: "Памятование", time: "5 мин", steps: ["Эта жизнь — переход.", "Всё временно.", "Используй момент.", "Не цепляйся."] } },
      en: { title: "Bardo of Life", subtitle: "Birth to departure", situation: "Forgot impermanence.", practice: { title: "Remembering", time: "5 min", steps: ["This life is transition.", "Everything temporary.", "Use the moment.", "Don't cling."] } },
      es: { title: "Bardo de Vida", subtitle: "Nacimiento a partida", situation: "Olvidaste impermanencia.", practice: { title: "Recordando", time: "5 min", steps: ["Esta vida es transición.", "Todo temporal.", "Usa el momento.", "No te aferres."] } }
    } }
  ],
  offerings: [
    { id: "sang", icon: "🌫️", translations: {
      ru: { title: "Санг", subtitle: "Дымовое подношение", situation: "Тяжесть в месте.", practice: { title: "Ритуал Санг", time: "10 мин", steps: ["Зажгите можжевельник.", "Дым как подношение.", "Пригласите духов.", "Попросите очищения."] } },
      en: { title: "Sang", subtitle: "Smoke offering", situation: "Heaviness.", practice: { title: "Sang Ritual", time: "10 min", steps: ["Light juniper.", "Smoke as offering.", "Invite spirits.", "Ask purification."] } },
      es: { title: "Sang", subtitle: "Ofrenda de humo", situation: "Pesadez.", practice: { title: "Ritual Sang", time: "10 min", steps: ["Enciende enebro.", "Humo como ofrenda.", "Invita espíritus.", "Pide purificación."] } }
    } }
  ],
  library: [
    { id: "shamanism", icon: "🌿", translations: {
      ru: { title: "Шаманизм", subtitle: "Внешний путь", situation: "Основы Бон", practice: { title: "Описание", time: "Чтение", steps: ["Работа с пятью элементами.", "Связь с духами: наги, лу, лха, ньен.", "Практики: санг, серкьем, сур.", "Цель: баланс элементов."] } },
      en: { title: "Shamanism", subtitle: "Outer path", situation: "Bon foundation", practice: { title: "Description", time: "Reading", steps: ["Work with five elements.", "Connect with spirits: nagas, lu, lha, nyen.", "Practices: sang, serkem, sur.", "Goal: element balance."] } },
      es: { title: "Chamanismo", subtitle: "Camino exterior", situation: "Base del Bon", practice: { title: "Descripción", time: "Lectura", steps: ["Trabajo con cinco elementos.", "Conecta con espíritus.", "Prácticas: sang, serkem, sur.", "Objetivo: equilibrio."] } }
    } },
    { id: "sutra", icon: "📿", translations: {
      ru: { title: "Сутра", subtitle: "Путь ума", situation: "Развитие сердца", practice: { title: "Описание", time: "Чтение", steps: ["Прибежище и Бодхичитта.", "Четыре Безмерных.", "Шесть совершенств.", "От эго к открытому сердцу."] } },
      en: { title: "Sutra", subtitle: "Path of mind", situation: "Heart development", practice: { title: "Description", time: "Reading", steps: ["Refuge and Bodhicitta.", "Four Immeasurables.", "Six perfections.", "From ego to open heart."] } },
      es: { title: "Sutra", subtitle: "Camino de mente", situation: "Desarrollo corazón", practice: { title: "Descripción", time: "Lectura", steps: ["Refugio y Bodhicitta.", "Cuatro Inconmensurables.", "Seis perfecciones.", "Del ego al corazón abierto."] } }
    } },
    { id: "tantra", icon: "🔥", translations: {
      ru: { title: "Тантра", subtitle: "Путь энергии", situation: "Тонкое тело", practice: { title: "Описание", time: "Чтение", steps: ["Каналы, праны, тигле.", "Пять слогов-воинов.", "Цалунг, трюлкхор.", "Тело божества."] } },
      en: { title: "Tantra", subtitle: "Path of energy", situation: "Subtle body", practice: { title: "Description", time: "Reading", steps: ["Channels, pranas, tigles.", "Five warrior syllables.", "Tsa lung, trulkhor.", "Deity body."] } },
      es: { title: "Tantra", subtitle: "Camino de energía", situation: "Cuerpo sutil", practice: { title: "Descripción", time: "Lectura", steps: ["Canales, pranas, tigles.", "Cinco sílabas guerreras.", "Tsa lung, trulkhor.", "Cuerpo de deidad."] } }
    } },
    { id: "dzogchen", icon: "☁️", translations: {
      ru: { title: "Дзогчен", subtitle: "Великое Совершенство", situation: "Высший путь", practice: { title: "Описание", time: "Чтение", steps: ["Кунжи, Ригпа, Цал.", "Трекчо и Тхогёл.", "Шесть светильников.", "Радужное Тело."] } },
      en: { title: "Dzogchen", subtitle: "Great Perfection", situation: "Highest path", practice: { title: "Description", time: "Reading", steps: ["Kunzhi, Rigpa, Tsal.", "Trekchö and Tögal.", "Six lamps.", "Rainbow Body."] } },
      es: { title: "Dzogchen", subtitle: "Gran Perfección", situation: "Camino supremo", practice: { title: "Descripción", time: "Lectura", steps: ["Kunzhi, Rigpa, Tsal.", "Trekchö y Tögal.", "Seis lámparas.", "Cuerpo Arcoíris."] } }
    } }
  ]
};

const flashcards = {
  mantras: [
    { front: "Тонпа Шенраб", back: "ОМ МА ТЕ МА ЙЕ СА ЛЕ ХУМ" },
    { front: "Шенла Одкар", back: "ОМ МУНИ ТРИГЬЕ ДУ ШЕН" },
    { front: "Шерап Чамма", back: "ОМ ПАДМА КИЛИ КИЛИ ШЕРАП ЧАММА ХУМ СОХА" },
    { front: "ОМ А ХУМ", back: "Три слога-источника" },
    { front: "А КАР А МЕ ДУ", back: "Пять элементов" }
  ],
  syllables: [
    { front: "А (белый)", back: "Корона, пространство" },
    { front: "ОМ (красный)", back: "Горло, качество" },
    { front: "ХУНГ (синий)", back: "Сердце" },
    { front: "РАМ (красный)", back: "Пупок" },
    { front: "ДЗА (зелёный)", back: "Тайная чакра" }
  ],
  elements: [
    { front: "Земля", back: "Жёлтый, ЛАМ" },
    { front: "Вода", back: "Синий, ВАМ" },
    { front: "Огонь", back: "Красный, РАМ" },
    { front: "Воздух", back: "Зелёный, ЯМ" },
    { front: "Пространство", back: "Белый, ХАМ" }
  ],
  pranas_fc: [
    { front: "Поднимающая", back: "Земля, горло" },
    { front: "Жизненной силы", back: "Пространство, сердце" },
    { front: "Подобная огню", back: "Огонь, пупок" },
    { front: "Вездесущая", back: "Воздух, всё тело" },
    { front: "Опускающая", back: "Вода, основание" }
  ],
  dzogchen: [
    { front: "Кунжи", back: "Основа" },
    { front: "Ригпа", back: "Осознавание" },
    { front: "Сем", back: "Обычный ум" },
    { front: "Цал", back: "Энергия" },
    { front: "Трекчо", back: "Прорыв" },
    { front: "Тхогёл", back: "Перескок" }
  ],
  transition: [
    { front: "Бардо жизни", back: "Рождение — уход" },
    { front: "Бардо ясности", back: "Свет" },
    { front: "Бардо становления", back: "Новое рождение" },
    { front: "Радужное тело", back: "Высшая реализация" }
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

function showSectionList(section, filter) {
  const cards = data[section] || [];
  const listEl = document.getElementById('library-list');
  listEl.innerHTML = '';
  const filtered = filter ? cards.filter(c => {
    const t = c.translations[currentLang];
    return (t.title + ' ' + t.subtitle).toLowerCase().includes(filter);
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
      const searchText = (t.title + ' ' + t.subtitle + ' ' + t.situation).toLowerCase();
      if (searchText.includes(query)) {
        results.push({ section: section, card: card, index: index });
      }
    });
  });
  if (results.length === 0) {
    listEl.innerHTML = '<div class="favorites-empty">Ничего не найдено</div>';
    return;
  }
  document.getElementById('section-title').textContent = 'Поиск: ' + query + ' (' + results.length + ')';
  const sectionNames = { body: 'Тело', speech: 'Речь', mind: 'Ум', elements: 'Элементы', pranas: 'Праны', dream: 'Сон', transition: 'Переходы', offerings: 'Подношения', library: 'Библиотека' };
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
