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
            { id: "five-point-posture", icon: "🧘", translations: {
      ru: { title: "Пятиченная поза", subtitle: "Основа всех практик — тело, прана и ум в единстве", situation: "Перед любой медитацией, при рассеянности или усталости.", practice: { title: "Медитация в пятичленной позе", time: "5-15 мин", steps: [
        "Сядьте на пол, скрестив ноги (правая поверх левой). Это положение удерживает тепло и предотвращает рассеивание пранической энергии, генерирует внутреннее тепло для глубоких опытов.",
        "Сложите руки в положение равновесия (ньягшаг): опустите руки на четыре пальца ниже пупка, ладонями вверх, левая поверх правой. Это уравнивает ясность и пустоту, сводит к минимуму двойственность.",
        "Выпрямите позвоночник — прямо и расслабленно. Это выравнивает основные каналы, позволяет пране подниматься легко и плавно.",
        "Слегка опустите подбородок, растянув заднюю поверхность шеи. Это успокаивает мысли и внутренний диалог.",
        "Расправьте грудную клетку. Это делает дыхание свободным и помогает открыть сердечную чакру — центральный энергетический фокус тела.",
        "Глаза могут быть открыты или закрыты. Если открыты — смотрите в пространство перед собой и немного вниз, не фокусируясь на объектах. Если закрыты — легче концентрироваться в начале практики.",
        "Соединитесь с неподвижностью тела, безмолвием речи и просторностью ума. Побудьте в этом состоянии, прежде чем начинать основную практику.",
        "Визуализируйте три канала: центральный синий (толщина большого пальца) идет от четырех пальцев ниже пупка до макушки; правый белый и левый красный (толщина мизинца) соединяются с центральным внизу и открываются в ноздрях."
      ] } },
      en: { title: "Five-Point Posture", subtitle: "Foundation of all practices — body, prana and mind in unity", situation: "Before any meditation, when scattered or tired.", practice: { title: "Meditation in Five-Point Posture", time: "5-15 min", steps: [
        "Sit on the floor, legs crossed (right over left). This position retains heat and prevents pranic energy from scattering, generates inner heat for deep experiences.",
        "Place hands in equilibrium position (nyamshag): lower hands four finger-widths below navel, palms up, left over right. This balances clarity and emptiness, minimizes duality.",
        "Straighten spine — upright and relaxed. This aligns main channels, allows prana to rise easily and smoothly.",
        "Slightly lower chin, stretching back of neck. This calms thoughts and inner dialogue.",
        "Open chest. This makes breathing free and helps open heart chakra — central energy focus of body.",
        "Eyes can be open or closed. If open — gaze into space before you and slightly down, not focusing on objects. If closed — easier to concentrate at beginning.",
        "Connect with stillness of body, silence of speech and spaciousness of mind. Rest in this state before beginning main practice.",
        "Visualize three channels: central blue (thumb thickness) runs from four fingers below navel to crown; right white and left red (pinky thickness) join central at bottom and open in nostrils."
      ] } },
      es: { title: "Postura de Cinco Puntos", subtitle: "Base de todas las prácticas — cuerpo, prana y mente en unidad", situation: "Antes de cualquier meditación, cuando estás disperso o cansado.", practice: { title: "Meditación en Postura de Cinco Puntos", time: "5-15 min", steps: [
        "Siéntate en el suelo, piernas cruzadas (derecha sobre izquierda). Esta posición retiene el calor y previene la dispersión de energía pránica, genera calor interno para experiencias profundas.",
        "Coloca las manos en posición de equilibrio (nyamshag): baja las manos cuatro dedos debajo del ombligo, palmas hacia arriba, izquierda sobre derecha. Esto equilibra claridad y vacuidad, minimiza dualidad.",
        "Endereza la columna — erguida y relajada. Esto alinea los canales principales, permite que la prana suba fácil y suavemente.",
        "Baja ligeramente la barbilla, estirando la parte posterior del cuello. Esto calma pensamientos y diálogo interno.",
        "Abre el pecho. Esto hace la respiración libre y ayuda a abrir el chakra del corazón — foco energético central del cuerpo.",
        "Los ojos pueden estar abiertos o cerrados. Si abiertos — mira al espacio frente a ti y ligeramente abajo, sin enfocarte en objetos. Si cerrados — más fácil concentrarse al inicio.",
        "Conéctate con la quietud del cuerpo, silencio del habla y amplitud de la mente. Descansa en este estado antes de comenzar la práctica principal.",
        "Visualiza tres canales: central azul (grosor del pulgar) va desde cuatro dedos debajo del ombligo hasta la coronilla; derecho blanco e izquierdo rojo (grosor del meñique) se unen al central abajo y se abren en las fosas nasales."
      ] } }
    } },
    { id: "five-warrior-syllables", icon: "⚔️", translations: {
      ru: { title: "Пять слогов-воинов", subtitle: "А-ОМ-ХУНГ-РАМ-ДЗА — пребывание в природе ума", situation: "Нужно достичь состояния неизменного присутствия, очистить пять ядов.", practice: { title: "Практика пяти слогов-воинов", time: "15 мин", steps: [
        "Сядьте в пятичленную позу. Визуализируйте в центре сердца синий слог ХУНГ, излучающий свет. ХУНГ — это природа вашего ума, изначальное осознавание.",
        "Первый слог — А (белый, корона, пространство). Вдохните через левую ноздрю, произнося А. Очищает гордость и яд гордыни. Белый свет заполняет макушку.",
        "Второй слог — ОМ (красный, горло, качество). Задержите дыхание на уровне горла, произнося ОМ. Очищает зависть. Красный свет наполняет горловую чакру.",
        "Третий слог — ХУНГ (синий, сердце, проявление). Удерживайте дыхание в сердце, произнося ХУНГ. Очищает привязанность. Синий свет сияет в сердечной чакре.",
        "Четвертый слог — РАМ (красный, пупок, действие). Опустите энергию к пупку, произнося РАМ. Очищает гнев. Огненный свет пылает в пупочной чакре.",
        "Пятый слог — ДЗА (зеленый, тайная чакра, деятельность). Выдохните через правую ноздрю, произнося ДЗА. Очищает невежество. Зеленый свет распространяется по всему телу.",
        "Повторите цикл 7, 21 или 108 раз. Завершите, растворив все слоги в ХУНГ в сердце и отдохнув в единой природе ума — Ригпа."
      ] } },
      en: { title: "Five Warrior Syllables", subtitle: "A-OM-HUNG-RAM-DZA — resting in mind nature", situation: "Need to attain unchanging presence, purify five poisons.", practice: { title: "Five Warrior Syllables Practice", time: "15 min", steps: [
        "Sit in five-point posture. Visualize blue syllable HUNG in heart center, radiating light. HUNG is your mind nature, primordial awareness.",
        "First syllable — A (white, crown, space). Inhale through left nostril, sounding A. Purifies pride. White light fills crown.",
        "Second syllable — OM (red, throat, quality). Hold breath at throat level, sounding OM. Purifies jealousy. Red light fills throat chakra.",
        "Third syllable — HUNG (blue, heart, manifestation). Hold breath in heart, sounding HUNG. Purifies attachment. Blue light shines in heart chakra.",
        "Fourth syllable — RAM (red, navel, action). Lower energy to navel, sounding RAM. Purifies anger. Fiery light blazes in navel chakra.",
        "Fifth syllable — DZA (green, secret chakra, activity). Exhale through right nostril, sounding DZA. Purifies ignorance. Green light spreads through whole body.",
        "Repeat cycle 7, 21 or 108 times. Finish by dissolving all syllables into HUNG in heart and resting in unified mind nature — Rigpa."
      ] } },
      es: { title: "Cinco Sílabas Guerreras", subtitle: "A-OM-HUNG-RAM-DZA — descansar en naturaleza de mente", situation: "Necesitas alcanzar presencia inmutable, purificar cinco venenos.", practice: { title: "Práctica de Cinco Sílabas Guerreras", time: "15 min", steps: [
        "Siéntate en postura de cinco puntos. Visualiza sílaba azul HUNG en centro del corazón, irradiando luz. HUNG es tu naturaleza mental, conciencia primordial.",
        "Primera sílaba — A (blanca, coronilla, espacio). Inhala por fosa izquierda, sonando A. Purifica orgullo. Luz blanca llena coronilla.",
        "Segunda sílaba — OM (roja, garganta, cualidad). Mantén respiración en garganta, sonando OM. Purifica envidia. Luz roja llena chakra garganta.",
        "Tercera sílaba — HUNG (azul, corazón, manifestación). Mantén respiración en corazón, sonando HUNG. Purifica apego. Luz azul brilla en chakra corazón.",
        "Cuarta sílaba — RAM (roja, ombligo, acción). Baja energía al ombligo, sonando RAM. Purifica ira. Luz de fuego arde en chakra ombligo.",
        "Quinta sílaba — DZA (verde, chakra secreto, actividad). Exhala por fosa derecha, sonando DZA. Purifica ignorancia. Luz verde se expande por todo el cuerpo.",
        "Repite ciclo 7, 21 o 108 veces. Termina disolviendo todas las sílabas en HUNG en corazón y descansando en naturaleza unificada de la mente — Rigpa."
      ] } }
    } },
        { id: "four-immeasurables", icon: "💛", translations: {
      ru: { title: "Четыре безмерных", subtitle: "Джампа, Ньиндже, Гава, Тангньом — путь открытого сердца", situation: "Нужно развить сердечные качества, преодолеть эгоцентризм.", practice: { title: "Практика четырёх безмерных", time: "15 мин", steps: [
        "Сядьте удобно, расслабьте тело. Сгенерируйте мотивацию Бодхичитты: «Пусть эта практика послужит благу всех существ без исключения».",
        "Безмерная любовь (Джампа): «Пусть все существа будут счастливы и обладают причинами счастья». Визуализируйте теплый золотой свет, исходящий из сердца и наполняющий всех существ. Повторите 7 раз.",
        "Безмерное сострадание (Ньиндже): «Пусть все существа будут свободны от страданий и их причин». Представьте всех страдающих существ. Пусть голубой свет из сердца освобождает их от боли. Повторите 7 раз.",
        "Безмерная радость (Гава): «Пусть все существа никогда не расстанутся с радостью, свободной от страданий». Искренне радуйтесь счастью и успехам других, особенно тех, кого трудно любить. Повторите 7 раз.",
        "Безмерная равностность (Тангньом): «Пусть все существа пребывают в великой равностности, свободной от привязанности к близким и отвращения к врагам». Отпустите разделение на «своих» и «чужих». Повторите 7 раз.",
        "Расширьте каждое качество на все шесть миров. Завершите посвящением заслуг: «Пусть эти качества проявятся в каждом существе, приводя их к просветлению»."
      ] } },
      en: { title: "Four Immeasurables", subtitle: "Jam-pa, Nying-je, Ga-wa, Tang-nyom — path of open heart", situation: "Need to develop heart qualities, overcome egocentrism.", practice: { title: "Four Immeasurables Practice", time: "15 min", steps: [
        "Sit comfortably, relax body. Generate Bodhicitta motivation: 'May this practice serve the benefit of all beings without exception'.",
        "Immeasurable love (Jam-pa): 'May all beings be happy and have causes of happiness'. Visualize warm golden light radiating from heart, filling all beings. Repeat 7 times.",
        "Immeasurable compassion (Nying-je): 'May all beings be free from suffering and its causes'. Imagine all suffering beings. Let blue light from heart liberate them from pain. Repeat 7 times.",
        "Immeasurable joy (Ga-wa): 'May all beings never be separated from joy free from suffering'. Sincerely rejoice in happiness and success of others, especially those hard to love. Repeat 7 times.",
        "Immeasurable equanimity (Tang-nyom): 'May all beings rest in great equanimity, free from attachment to friends and aversion to enemies'. Release division into 'us' and 'them'. Repeat 7 times.",
        "Extend each quality to all six realms. Finish with dedication: 'May these qualities manifest in every being, leading them to enlightenment'."
      ] } },
      es: { title: "Cuatro Inconmensurables", subtitle: "Jam-pa, Nying-je, Ga-wa, Tang-nyom — camino del corazón abierto", situation: "Necesitas desarrollar cualidades del corazón, superar egocentrismo.", practice: { title: "Práctica de Cuatro Inconmensurables", time: "15 min", steps: [
        "Siéntate cómodo, relaja cuerpo. Genera motivación de Bodhicitta: 'Que esta práctica sirva al beneficio de todos los seres sin excepción'.",
        "Amor inconmensurable (Jam-pa): 'Que todos los seres sean felices y tengan causas de felicidad'. Visualiza luz dorada cálida irradiando del corazón, llenando todos los seres. Repite 7 veces.",
        "Compasión inconmensurable (Nying-je): 'Que todos los seres sean libres del sufrimiento y sus causas'. Imagina todos los seres que sufren. Que luz azul del corazón los libere del dolor. Repite 7 veces.",
        "Alegría inconmensurable (Ga-wa): 'Que todos los seres nunca se separen de la alegría libre de sufrimiento'. Alégrate sinceramente por la felicidad y el éxito de otros, especialmente de los difíciles de amar. Repite 7 veces.",
        "Ecuanimidad inconmensurable (Tang-nyom): 'Que todos los seres descansen en gran ecuanimidad, libres de apego a amigos y aversión a enemigos'. Suelta la división en 'nosotros' y 'ellos'. Repite 7 veces.",
        "Extiende cada cualidad a los seis reinos. Termina con dedicación: 'Que estas cualidades se manifiesten en cada ser, llevándolos a la iluminación'."
      ] } }
    } },
    { id: "prostrations-detailed", icon: "🙏", translations: {
      ru: { title: "Простирания", subtitle: "Очищение тела, речи и ума через поклонение Трем Драгоценностям", situation: "Нужно очистить карму трёх врат, преодолеть гордость.", practice: { title: "Практика простираний", time: "15 мин", steps: [
        "Встаньте прямо, ноги вместе. Сложите ладони в форме лотоса у сердца — это символизирует чистую мотивацию и уважение к Трем Драгоценностям (Будда, Бон, Сангха).",
        "Поднимите сложенные ладони к макушке — очищает тело и карму телесных действий. Произнесите: «Принимаю прибежище в Гуру».",
        "Опустите ладони к горлу — очищает речь и карму словесных действий. Произнесите: «Принимаю прибежище в Будде».",
        "Опустите ладони к сердцу — очищает ум и карму мысленных действий. Произнесите: «Принимаю прибежище в Дхарме».",
        "Опуститесь на колени, затем лягте на землю, коснувшись пятью точками: лоб, две ладони, два колена. Это символизирует очищение пяти ядов (гордость, зависть, привязанность, гнев, невежество) и поклонение пяти Буддам-семьям.",
        "Поднимитесь, сложив ладони у сердца. Произнесите: «Принимаю прибежище в Сангхе». Повторите цикл 3, 7, 21 или 108 раз.",
        "Завершите, сидя в медитации. Визуализируйте, как все Будды и Гуру растворяются в вашем сердце, и отдохните в состоянии единства с ними."
      ] } },
      en: { title: "Prostrations", subtitle: "Purifying body, speech and mind through reverence to Three Jewels", situation: "Need to purify karma of three gates, overcome pride.", practice: { title: "Prostrations Practice", time: "15 min", steps: [
        "Stand straight, feet together. Join palms in lotus shape at heart — symbolizes pure motivation and reverence to Three Jewels (Buddha, Bon, Sangha).",
        "Raise joined palms to crown — purifies body and karma of physical actions. Say: 'I take refuge in the Guru'.",
        "Lower palms to throat — purifies speech and karma of verbal actions. Say: 'I take refuge in the Buddha'.",
        "Lower palms to heart — purifies mind and karma of mental actions. Say: 'I take refuge in the Dharma'.",
        "Kneel down, then lie on ground, touching five points: forehead, two palms, two knees. Symbolizes purification of five poisons (pride, jealousy, attachment, anger, ignorance) and reverence to five Buddha families.",
        "Rise up, palms joined at heart. Say: 'I take refuge in the Sangha'. Repeat cycle 3, 7, 21 or 108 times.",
        "Finish sitting in meditation. Visualize all Buddhas and Gurus dissolving into your heart, and rest in state of unity with them."
      ] } },
      es: { title: "Postraciones", subtitle: "Purificando cuerpo, habla y mente mediante reverencia a Tres Joyas", situation: "Necesitas purificar karma de tres puertas, superar orgullo.", practice: { title: "Práctica de Postraciones", time: "15 min", steps: [
        "Párate derecho, pies juntos. Une palmas en forma de loto en corazón — simboliza motivación pura y reverencia a Tres Joyas (Buda, Bon, Sangha).",
        "Levanta palmas unidas a coronilla — purifica cuerpo y karma de acciones físicas. Di: 'Tomo refugio en el Guru'.",
        "Baja palmas a garganta — purifica habla y karma de acciones verbales. Di: 'Tomo refugio en el Buda'.",
        "Baja palmas a corazón — purifica mente y karma de acciones mentales. Di: 'Tomo refugio en el Dharma'.",
        "Arrodíllate, luego acuéstate en el suelo, tocando cinco puntos: frente, dos palmas, dos rodillas. Simboliza purificación de cinco venenos (orgullo, envidia, apego, ira, ignorancia) y reverencia a cinco familias de Budas.",
        "Levántate, palmas unidas en corazón. Di: 'Tomo refugio en la Sangha'. Repite ciclo 3, 7, 21 o 108 veces.",
        "Termina sentado en meditación. Visualiza todos los Budas y Gurus disolviéndose en tu corazón, y descansa en estado de unidad con ellos."
      ] } }
    } },
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
      ru: { title: "Шаманизм", subtitle: "Внешний путь — работа с элементами и духами", situation: "Основы пути Бон", practice: { title: "Описание Шаманизма", time: "Чтение", steps: [
        "Шаманизм — внешний уровень духовной практики в Бон. Работает с пятью элементами (земля, вода, огонь, воздух, пространство) как с живыми силами природы.",
        "Три уровня души: Ла (жизненная сила), Йид (душа ума), Сем (жизненная сущность). Когда они уравновешены — человек здоров и счастлив.",
        "Практик устанавливает связь с духами природы: наги (водные духи), лу (духи земли), лха (небесные божества), ньен (духи деревьев и гор).",
        "Основные практики: подношения (санг — дымовое, серкьем — напиток, сур — сожжённая пища), возвращение утраченных энергий элементов.",
        "Стрела души (дадар), бирюза и олень души (шава) — шаманские инструменты для восстановления баланса.",
        "Четыре категории гостей: почитания (Три Драгоценности), защитники (дхармапалы), кармические (духи, перед которыми есть долг), сострадания (все существа).",
        "Цель шаманизма: восстановить баланс элементов в теле и окружении, исцелить болезнь, вернуть жизненную силу."
      ] } },
      en: { title: "Shamanism", subtitle: "Outer path — working with elements and spirits", situation: "Foundation of Bon", practice: { title: "Description of Shamanism", time: "Reading", steps: [
        "Shamanism is the outer level of spiritual practice in Bon. Works with five elements as living forces of nature.",
        "Three levels of soul: La (life force), Yid (soul of mind), Sem (life essence). When balanced — person is healthy.",
        "Practitioner connects with nature spirits: nagas (water), lu (earth), lha (sky), nyen (trees and mountains).",
        "Main practices: offerings (sang, serkem, sur), returning lost element energies.",
        "Soul arrow (dadar), turquoise and soul deer (shawa) — shamanic tools for restoring balance.",
        "Four categories of guests: reverence (Three Jewels), protectors (dharmapalas), karmic, compassion (all beings).",
        "Goal of shamanism: restore balance of elements in body and environment, heal illness, return life force."
      ] } },
      es: { title: "Chamanismo", subtitle: "Camino exterior — trabajo con elementos y espíritus", situation: "Fundamento del Bon", practice: { title: "Descripción del Chamanismo", time: "Lectura", steps: [
        "El chamanismo es el nivel exterior de la práctica espiritual en Bon. Trabaja con cinco elementos como fuerzas vivas.",
        "Tres niveles del alma: La (fuerza vital), Yid (alma de la mente), Sem (esencia vital). Cuando están equilibrados — la persona está sana.",
        "El practicante se conecta con espíritus de la naturaleza: nagas (agua), lu (tierra), lha (cielo), nyen (árboles y montañas).",
        "Prácticas principales: ofrendas (sang, serkem, sur), retornar energías perdidas de elementos.",
        "Flecha del alma (dadar), turquesa y ciervo del alma (shawa) — herramientas chamánicas para restaurar el equilibrio.",
        "Cuatro categorías de huéspedes: reverencia (Tres Joyas), protectores (dharmapalas), kármicos, compasión (todos los seres).",
        "Objetivo del chamanismo: restaurar equilibrio de elementos en cuerpo y entorno, sanar enfermedad, retornar fuerza vital."
      ] } }
    } },
        { id: "sutra", icon: "", translations: {
      ru: { title: "Сутра", subtitle: "Путь преобразования ума через этику и сострадание", situation: "Развитие сердца", practice: { title: "Описание Сутры", time: "Чтение", steps: [
        "Сутра — путь работы с умом через развитие этических качеств и сердечной мотивации. Основа: принятие Прибежища в Трёх Драгоценностях (Будда, Бон, Сангха).",
        "Бодхичитта — намерение достичь просветления ради всех существ. Это сердце пути Сутры: от эгоцентризма к открытому сердцу.",
        "Четыре Безмерных качества: любящая доброта (майтри) — желание счастья всем; сострадание (ньиндже) — желание освободить от страданий; сорадование (мудита) — радость за успехи других; равностность (упекша) — беспристрастность ко всем.",
        "Шесть совершенств: щедрость (джинпа) — отпускание привязанности; нравственность (цултрим) — чистота действий; терпение (зопе) — принятие трудностей; усердие (цондю) — радостное усилие; медитация (самтен) — устойчивость ума; мудрость (шераб) — понимание пустоты.",
        "Практика начинается с мотивации: «Пусть все существа будут счастливы». Заканчивается посвящением заслуг: «Пусть это послужит благу всех».",
        "Сутра меняет наше отношение к миру — от защиты эго к открытому сердцу, от страха к доверию, от разделения к единству."
      ] } },
      en: { title: "Sutra", subtitle: "Path of mind transformation through ethics and compassion", situation: "Heart development", practice: { title: "Description of Sutra", time: "Reading", steps: [
        "Sutra is the path of working with mind through ethical qualities and heart motivation. Foundation: taking Refuge in Three Jewels (Buddha, Bon, Sangha).",
        "Bodhicitta — intention to attain awakening for all beings. This is the heart of Sutra path: from egocentrism to open heart.",
        "Four Immeasurables: loving-kindness (maitri) — wish for happiness of all; compassion (nyingje) — wish to free from suffering; joy (mudita) — joy for others' success; equanimity (upeksha) — impartiality to all.",
        "Six perfections: generosity (jinpa) — releasing attachment; ethics (tsultrim) — purity of action; patience (zope) — accepting difficulties; effort (tsöndü) — joyous diligence; meditation (samten) — stability of mind; wisdom (sherab) — understanding emptiness.",
        "Practice begins with motivation: 'May all beings be happy'. Ends with dedication: 'May this serve the benefit of all'.",
        "Sutra changes our attitude to the world — from defending ego to open heart, from fear to trust, from division to unity."
      ] } },
      es: { title: "Sutra", subtitle: "Camino de transformación mental a través de ética y compasión", situation: "Desarrollo del corazón", practice: { title: "Descripción de Sutra", time: "Lectura", steps: [
        "Sutra es el camino de trabajar con la mente mediante cualidades éticas y motivación del corazón. Base: tomar Refugio en Tres Joyas (Buda, Bon, Sangha).",
        "Bodhicitta — intención de alcanzar despertar para todos los seres. Este es el corazón del camino Sutra: del egocentrismo al corazón abierto.",
        "Cuatro Inconmensurables: amor bondadoso (maitri) — deseo de felicidad para todos; compasión (nyingje) — deseo de liberar del sufrimiento; alegría (mudita) — alegría por el éxito ajeno; ecuanimidad (upeksha) — imparcialidad hacia todos.",
        "Seis perfecciones: generosidad (jinpa) — soltar apego; ética (tsultrim) — pureza de acción; paciencia (zope) — aceptar dificultades; esfuerzo (tsöndü) — diligencia gozosa; meditación (samten) — estabilidad de mente; sabiduría (sherab) — comprensión de la vacuidad.",
        "La práctica comienza con motivación: 'Que todos los seres sean felices'. Termina con dedicación: 'Que esto sirva al beneficio de todos'.",
        "Sutra cambia nuestra actitud al mundo — de defender el ego a corazón abierto, del miedo a la confianza, de la división a la unidad."
      ] } }
    } },
        { id: "tantra", icon: "", translations: {
      ru: { title: "Тантра", subtitle: "Путь преобразования энергии через каналы, ветры и божества", situation: "Работа с тонким телом", practice: { title: "Описание Тантры", time: "Чтение", steps: [
        "Тантра обнаруживает энергии элементов не вовне, а в собственном теле — в каналах (ца), ветрах-пранах (лунг) и семенных сущностях (тигле). Это путь преобразования.",
        "Три коренных канала: центральный (ума, синий) — проходит через центр тела; правый (ро-ма, белый/красный); левый (кьянг-ма, красный/белый). Все три соединяются на четыре пальца ниже пупка.",
        "Пять пран: поднимающая (горло, земля) — приводит в действие чувства; жизненной силы (сердце, пространство) — заключает жизнеспособность; подобная огню (пупок, огонь) — энергия пищеварения; вездесущая (всё тело, воздух) — обеспечивает связи; опускающая (основание, вода) — связана с выделением.",
        "Пять слогов-воинов: А (корона, пространство) — чистота тела; ОМ (горло, качество) — чистота речи; ХУНГ (сердце, проявление) — чистота ума; РАМ (пупок, действие) — чистота качеств; ДЗА (тайная чакра, деятельность) — чиста деяний.",
        "Практики: цалунг (движение ветра в каналах через задержку дыхания), трюлкхор (шесть движений для очищения каналов), мантры божеств (Шерап Чамма, Шенла Одкар), работа с пятью Богинями-Матерями элементов.",
        "Конечная цель Тантры — обретение тела божества, преображение обычных тела, речи и ума в просветлённые. В отличие от Шаманизма, Тантра стремится к состоянию божества."
      ] } },
      en: { title: "Tantra", subtitle: "Path of energy transformation through channels, winds and deities", situation: "Working with subtle body", practice: { title: "Description of Tantra", time: "Reading", steps: [
        "Tantra discovers element energies not externally, but in one's own body — in channels (tsa), winds-pranas (lung) and seed essences (tigle). This is the path of transformation.",
        "Three root channels: central (uma, blue) — passes through body center; right (ro-ma, white/red); left (kyang-ma, red/white). All three join four finger-widths below navel.",
        "Five pranas: ascending (throat, earth) — activates senses; life-force (heart, space) — contains vitality; fire-like (navel, fire) — digestive energy; all-pervading (whole body, air) — provides connections; downward (base, water) — related to elimination.",
        "Five warrior syllables: A (crown, space) — purity of body; OM (throat, quality) — purity of speech; HUNG (heart, manifestation) — purity of mind; RAM (navel, action) — purity of qualities; DZA (secret chakra, activity) — purity of deeds.",
        "Practices: tsa lung (wind movement in channels through breath retention), trulkhor (six movements to purify channels), deity mantras (Sherap Chamma, Shenlha Okar), working with five Mother Goddesses of elements.",
        "Ultimate goal of Tantra — attaining deity body, transforming ordinary body, speech and mind into enlightened ones. Unlike Shamanism, Tantra aims for the state of deity."
      ] } },
      es: { title: "Tantra", subtitle: "Camino de transformación energética a través de canales, vientos y deidades", situation: "Trabajo con cuerpo sutil", practice: { title: "Descripción de Tantra", time: "Lectura", steps: [
        "Tantra descubre energías de elementos no externamente, sino en el propio cuerpo — en canales (tsa), vientos-pranas (lung) y esencias semilla (tigle). Este es el camino de transformación.",
        "Tres canales raíz: central (uma, azul) — pasa por el centro del cuerpo; derecho (ro-ma, blanco/rojo); izquierdo (kyang-ma, rojo/blanco). Los tres se unen cuatro dedos bajo el ombligo.",
        "Cinco pranas: ascendente (garganta, tierra) — activa los sentidos; fuerza vital (corazón, espacio) — contiene vitalidad; similar al fuego (ombligo, fuego) — energía digestiva; omnipresente (todo el cuerpo, aire) — proporciona conexiones; descendente (base, agua) — relacionada con eliminación.",
        "Cinco sílabas guerreras: A (coronilla, espacio) — pureza del cuerpo; OM (garganta, cualidad) — pureza del habla; HUNG (corazón, manifestación) — pureza de la mente; RAM (ombligo, acción) — pureza de cualidades; DZA (chakra secreto, actividad) — pureza de acciones.",
        "Prácticas: tsa lung (movimiento de viento en canales mediante retención de aliento), trulkhor (seis movimientos para purificar canales), mantras de deidades (Sherap Chamma, Shenlha Okar), trabajo con cinco Diosas Madre de elementos.",
        "Meta final del Tantra — obtener cuerpo de deidad, transformar cuerpo, habla y mente ordinarios en iluminados. A diferencia del Chamanismo, el Tantra busca el estado de deidad."
      ] } }
    } },
        { id: "dzogchen", icon: "☁️", translations: {
      ru: { title: "Дзогчен", subtitle: "Путь Великого Совершенства — прямое узнавание природы ума", situation: "Высший путь Бон", practice: { title: "Описание Дзогчен", time: "Чтение", steps: [
        "Дзогчен (Дзогпа Ченпо) — высшее учение Бон, путь прямого узнавания изначальной природы ума без усилий и трансформации. В отличие от Тантры, здесь не нужно ничего преобразовывать — нужно просто узнать то, что уже есть.",
        "Кунжи (основа всего) — изначальное пространство, мать всех проявлений. Ригпа (сын) — изначальное осознавание, неразрывное с пустотой. Цал — их нераздельное единство, проявляющееся как три великих видения: звук, свет, лучи.",
        "Сем (обычный ум) — двойственный ум, захваченный мыслями. Ригпа — чистое осознавание за пределами мыслей. Практика Дзогчен — это переход от Сем к Ригпа через прямое узнавание.",
        "Два главных метода: Трекчо (Прорыв) — отсечение отвлечений, пребывание в естественном состоянии без усилий; Тхогёл (Перескок) — работа со светом и видениями через шесть светильников.",
        "Шесть светильников: светильник Кунжи (основа), светильник сердца (источник), светильник мягкого белого канала (путь от сердца к глазам), светильник воды (чистота восприятия), светильник чистого измерения (видения), светильник Бардо (переход).",
        "Четыре Бардо: этой жизни (от рождения до смерти), умирания (растворение пяти элементов), дхарматы (встреча с ясным светом — природа ума), становления (поиск нового рождения). Высший плод Дзогчен — Радужное Тело (Джа Лю): тело практика растворяется в свете в момент смерти, остаются только волосы и ногти."
      ] } },
      en: { title: "Dzogchen", subtitle: "Path of Great Perfection — direct recognition of mind nature", situation: "Highest Bon path", practice: { title: "Description of Dzogchen", time: "Reading", steps: [
        "Dzogchen (Dzogpa Chenpo) — highest teaching of Bon, path of direct recognition of primordial mind nature without effort or transformation. Unlike Tantra, nothing needs to be transformed — one simply recognizes what is already there.",
        "Kunzhi (ground of all) — primordial space, mother of all manifestations. Rigpa (son) — primordial awareness, inseparable from emptiness. Tsal — their inseparable unity, manifesting as three great visions: sound, light, rays.",
        "Sem (ordinary mind) — dualistic mind caught in thoughts. Rigpa — pure awareness beyond thoughts. Dzogchen practice is the transition from Sem to Rigpa through direct recognition.",
        "Two main methods: Trekchö (Cutting Through) — cutting off distractions, resting in natural state without effort; Tögal (Leapover) — working with light and visions through six lamps.",
        "Six lamps: lamp of Kunzhi (ground), lamp of heart (source), lamp of soft white channel (path from heart to eyes), water lamp (purity of perception), lamp of pure dimension (visions), lamp of Bardo (transition).",
        "Four Bardos: of this life (birth to death), of dying (dissolution of five elements), of dharmata (meeting clear light — nature of mind), of becoming (seeking new birth). Highest fruit of Dzogchen — Rainbow Body (Ja Lü): practitioner's body dissolves into light at death, only hair and nails remain."
      ] } },
      es: { title: "Dzogchen", subtitle: "Camino de la Gran Perfección — reconocimiento directo de la naturaleza de la mente", situation: "Camino supremo del Bon", practice: { title: "Descripción de Dzogchen", time: "Lectura", steps: [
        "Dzogchen (Dzogpa Chenpo) — enseñanza suprema del Bon, camino de reconocimiento directo de la naturaleza primordial de la mente sin esfuerzo ni transformación. A diferencia del Tantra, no hay que transformar nada — simplemente se reconoce lo que ya está ahí.",
        "Kunzhi (base de todo) — espacio primordial, madre de todas las manifestaciones. Rigpa (hijo) — conciencia primordial, inseparable de la vacuidad. Tsal — su unidad inseparable, manifestándose como tres grandes visiones: sonido, luz, rayos.",
        "Sem (mente ordinaria) — mente dualista atrapada en pensamientos. Rigpa — conciencia pura más allá de los pensamientos. La práctica de Dzogchen es la transición de Sem a Rigpa mediante reconocimiento directo.",
        "Dos métodos principales: Trekchö (Corte) — cortar distracciones, descansar en estado natural sin esfuerzo; Tögal (Salto) — trabajar con luz y visiones a través de seis lámparas.",
        "Seis lámparas: lámpara de Kunzhi (base), lámpara de corazón (fuente), lámpara del canal blanco suave (camino del corazón a los ojos), lámpara de agua (pureza de percepción), lámpara de dimensión pura (visiones), lámpara de Bardo (transición).",
        "Cuatro Bardos: de esta vida (nacimiento a muerte), de la muerte (disolución de cinco elementos), de dharmata (encuentro con luz clara — naturaleza de la mente), del devenir (buscando nuevo nacimiento). Fruto supremo de Dzogchen — Cuerpo Arcoíris (Ja Lü): cuerpo del practicante se disuelve en luz al morir, solo quedan pelo y uñas."
      ] } }
    } },
	        { id: "elements-desc", icon: "🌍", translations: {
      ru: { title: "Пять Элементов", subtitle: "Основа всего проявленного мира", situation: "Ключ к пониманию Бон", practice: { title: "Описание Пяти Элементов", time: "Чтение", steps: [
        "Пять элементов — земля, вода, огонь, воздух, пространство — основа всего проявленного мира в учении Бон. Каждый элемент имеет цвет, форму, слог-семя, орган в теле, чакры и Богиню-Мать.",
        "Земля (жёлтый, квадрат, слог ЛАМ, селезёнка, чакра основания): устойчивость, прочность, опора. Богиня — Сатри Эрсанг. Мантра: КХАМ ЛА ЖИ КЬЕ ЛЕ ДУ. Отвечает за чувство осязания.",
        "Вода (синий, полумесяц, слог ВАМ, почки, сакральная чакра): текучесть, спокойствие, чувствительность. Богиня — Кьедима. Мантра: МАМ ДАНГ РА МАМ ТИНГ ДУ. Отвечает за вкус.",
        "Огонь (красный, треугольник, слог РАМ, печень, пупочная чакра): трансформация, тепло, сила воли. Богиня — Мерима. Мантра: РАМ ЦАНГ ТАНГ НЕ РАМ ДУ. Отвечает за зрение.",
        "Воздух (зелёный, круг, слог ЯМ, лёгкие, сердечная чакра): движение, гибкость, свежесть. Богиня — Лунгта. Мантра: ЯМ ЯМ НИ ЛИ ТУН ДУ. Отвечает за обоняние.",
        "Пространство (белый, сфера, слог ХАМ, сердце, горловая чакра): открытость, ясность, вместимость. Богиня — Намкха. Мантра: А МУ ЙЕ А КАР А НИ А. Отвечает за слух.",
        "Пять пран связаны с элементами: поднимающая (земля, горло), жизненной силы (пространство, сердце), подобная огню (огонь, пупок), вездесущая (воздух, всё тело), опускающая (вода, основание).",
        "Мантра всех элементов: А ЯМ РАМ МАМ КХАМ ДРУМ ДУ. Мантра долгой жизни: СО ДРУМ А КАР МУ ЛА ТИНГ НАМ О ДУ МУ ЙЕ ЦЕ НИ ДЗА. Практика с элементами восстанавливает баланс в теле и уме, возвращает утраченные энергии."
      ] } },
      en: { title: "Five Elements", subtitle: "Foundation of all manifested world", situation: "Key to understanding Bon", practice: { title: "Description of Five Elements", time: "Reading", steps: [
        "Five elements — earth, water, fire, air, space — foundation of all manifested world in Bon. Each element has color, form, seed syllable, body organ, chakra and Mother Goddess.",
        "Earth (yellow, square, syllable LAM, spleen, base chakra): stability, strength, support. Goddess — Satri Ersang. Mantra: KHAM LA ZHI KYE LE DU. Governs touch.",
        "Water (blue, crescent, syllable VAM, kidneys, sacral chakra): flow, calm, sensitivity. Goddess — Kyedima. Mantra: MAM DANG RA MAM TING DU. Governs taste.",
        "Fire (red, triangle, syllable RAM, liver, navel chakra): transformation, warmth, willpower. Goddess — Merima. Mantra: RAM TSANG TANG NE RAM DU. Governs sight.",
        "Air (green, circle, syllable YAM, lungs, heart chakra): movement, flexibility, freshness. Goddess — Lungta. Mantra: YAM YAM NI LI TUN DU. Governs smell.",
        "Space (white, sphere, syllable KHAM, heart, throat chakra): openness, clarity, capacity. Goddess — Namkha. Mantra: A MU YE A KAR A NI A. Governs hearing.",
        "Five pranas are linked to elements: ascending (earth, throat), life-force (space, heart), fire-like (fire, navel), all-pervading (air, whole body), downward (water, base).",
        "Mantra of all elements: A YAM RAM MAM KHAM DRUM DU. Long life mantra: SO DRUM A KAR MU LA TING NAM O DU MU YE TSE NI DZA. Practice with elements restores balance in body and mind, returns lost energies."
      ] } },
      es: { title: "Cinco Elementos", subtitle: "Fundamento de todo el mundo manifestado", situation: "Clave para entender Bon", practice: { title: "Descripción de Cinco Elementos", time: "Lectura", steps: [
        "Cinco elementos — tierra, agua, fuego, aire, espacio — fundamento de todo el mundo manifestado en Bon. Cada elemento tiene color, forma, sílaba semilla, órgano, chakra y Diosa Madre.",
        "Tierra (amarillo, cuadrado, sílaba LAM, bazo, chakra base): estabilidad, fuerza, apoyo. Diosa — Satri Ersang. Mantra: KHAM LA ZHI KYE LE DU. Gobierna el tacto.",
        "Agua (azul, media luna, sílaba VAM, riñones, chakra sacro): fluidez, calma, sensibilidad. Diosa — Kyedima. Mantra: MAM DANG RA MAM TING DU. Gobierna el gusto.",
        "Fuego (rojo, triángulo, sílaba RAM, hígado, chakra ombligo): transformación, calor, fuerza de voluntad. Diosa — Merima. Mantra: RAM TSANG TANG NE RAM DU. Gobierna la vista.",
        "Aire (verde, círculo, sílaba YAM, pulmones, chakra corazón): movimiento, flexibilidad, frescura. Diosa — Lungta. Mantra: YAM YAM NI LI TUN DU. Gobierna el olfato.",
        "Espacio (blanco, esfera, sílaba KHAM, corazón, chakra garganta): apertura, claridad, capacidad. Diosa — Namkha. Mantra: A MU YE A KAR A NI A. Gobierna el oído.",
        "Cinco pranas están ligadas a elementos: ascendente (tierra, garganta), fuerza vital (espacio, corazón), similar al fuego (fuego, ombligo), omnipresente (aire, todo cuerpo), descendente (agua, base).",
        "Mantra de todos los elementos: A YAM RAM MAM KHAM DRUM DU. Mantra de larga vida: SO DRUM A KAR MU LA TING NAM O DU MU YE TSE NI DZA. La práctica con elementos restaura el equilibrio en cuerpo y mente, retorna energías perdidas."
      ] } }
    } },
	    { id: "offerings-desc", icon: "🙏", translations: {
      ru: { title: "Подношения и Четыре Гостя", subtitle: "Практика щедрости и связи с миром", situation: "Развитие сердца и гармонии", practice: { title: "Описание Подношений", time: "Чтение", steps: [
        "Практика подношений — одно из шести совершенств (парамит) пути Сутры. Развивает щедрость (джинпа), чувствительность и сострадание. Истинное подношение происходит на уровне воображения и намерения, а не материальных предметов.",
        "Четыре категории гостей: 1) Гости почитания — Три Драгоценности (Будды, Бон, Сангха), Гуру, Идамы, Дакини. Им подносят в знак благодарности и преданности.",
        "2) Гости-защитники — охранители учения (Дхармапалы), местные божества и духи-хранители. Им подносят в знак уважения и просьбы о защите.",
        "3) Кармические гости — восемь классов духов (наги, лу, лха, ньен, цан, синпо, дре и другие), существа, перед которыми у нас есть кармический долг. Им подносят для очищения кармы и восстановления баланса.",
        "4) Гости сострадания — все чувствующие существа шести миров (боги, асуры, люди, животные, голодные духи, существа ада). Им подносят из сострадания, желая освободить от страданий.",
        "Четыре вида подношений: Санг — дымовое подношение можжевельника для очищения пространства и умилостивления духов местности. Серкьем — золотое подношение напитка (чай, молоко, пиво) защитникам Дхармы.",
        "Сур — подношение сожжённой пищи (цзамба с маслом и сахаром) всем четырём группам гостей, особенно кармическим. Цзанг — чистое подношение свежей пищи и воды.",
        "Порядок практики: перед едой предложите пищу 1-й и 2-й группам гостей (Драгоценностям и защитникам). Остатки отдайте 3-й и 4-й группам (кармическим гостям и всем существам). Завершите посвящением заслуг: «Пусть это послужит благу всех существ»."
      ] } },
      en: { title: "Offerings and Four Guests", subtitle: "Practice of generosity and connection with world", situation: "Heart development and harmony", practice: { title: "Description of Offerings", time: "Reading", steps: [
        "Offering practice is one of the six perfections of the Sutra path. Develops generosity (jinpa), sensitivity and compassion. True offering happens at the level of imagination and intention, not material objects.",
        "Four categories of guests: 1) Guests of reverence — Three Jewels (Buddha, Bon, Sangha), Guru, Yidams, Dakinis. Offered to in gratitude and devotion.",
        "2) Protector guests — dharma guardians (Dharmapalas), local deities and guardian spirits. Offered to in respect and request for protection.",
        "3) Karmic guests — eight classes of spirits (nagas, lu, lha, nyen, tsan, sinpo, dre and others), beings to whom we owe karmic debt. Offered to purify karma and restore balance.",
        "4) Guests of compassion — all sentient beings of six realms (gods, asuras, humans, animals, hungry ghosts, hell beings). Offered from compassion, wishing to free them from suffering.",
        "Four types of offerings: Sang — smoke offering of juniper for purifying space and appeasing local spirits. Serkem — golden drink offering (tea, milk, beer) to Dharma protectors.",
        "Sur — burnt food offering (tsampa with butter and sugar) to all four groups, especially karmic guests. Tsang — pure offering of fresh food and water.",
        "Order of practice: before eating, offer food to 1st and 2nd groups (Jewels and protectors). Remainders give to 3rd and 4th groups (karmic guests and all beings). End with dedication: 'May this serve the benefit of all beings'."
      ] } },
      es: { title: "Ofrendas y Cuatro Huéspedes", subtitle: "Práctica de generosidad y conexión con el mundo", situation: "Desarrollo del corazón y armonía", practice: { title: "Descripción de Ofrendas", time: "Lectura", steps: [
        "La práctica de ofrendas es una de las seis perfecciones del camino Sutra. Desarrolla generosidad (jinpa), sensibilidad y compasión. Verdadera ofrenda ocurre en nivel de imaginación e intención, no objetos materiales.",
        "Cuatro categorías de huéspedes: 1) Huéspedes de reverencia — Tres Joyas (Buda, Bon, Sangha), Guru, Yidams, Dakinis. Se ofrece en gratitud y devoción.",
        "2) Huéspedes protectores — guardianes del dharma (Dharmapalas), deidades locales y espíritus guardianes. Se ofrece en respeto y petición de protección.",
        "3) Huéspedes kármicos — ocho clases de espíritus (nagas, lu, lha, nyen, tsan, sinpo, dre y otros), seres a quienes debemos deuda kármica. Se ofrece para purificar karma y restaurar equilibrio.",
        "4) Huéspedes de compasión — todos los seres sintientes de seis reinos (dioses, asuras, humanos, animales, fantasmas hambrientos, seres del infierno). Se ofrece desde compasión, deseando liberarlos del sufrimiento.",
        "Cuatro tipos de ofrendas: Sang — ofrenda de humo de enebro para purificar espacio y apaciguar espíritus locales. Serkem — ofrenda dorada de bebida (té, leche, cerveza) a protectores del Dharma.",
        "Sur — ofrenda de comida quemada (tsampa con mantequilla y azúcar) a los cuatro grupos, especialmente huéspedes kármicos. Tsang — ofrenda pura de comida fresca y agua.",
        "Orden de la práctica: antes de comer, ofrece comida a 1er y 2do grupos (Joyas y protectores). Restos da a 3er y 4to grupos (huéspedes kármicos y todos los seres). Termina con dedicación: 'Que esto sirva al beneficio de todos los seres'."
      ] } }
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
