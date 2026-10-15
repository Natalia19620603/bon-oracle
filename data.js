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
        shamanism: {
            id: "nagi",
            icon: "🐍",
            translations: {
                ru: {
                    title: "Наги",
                    subtitle: "Духи воды",
                    situation: "Ты забыл о связи с природой. Вода — это жизнь, и ты используешь её механически, не замечая священного.",
                    practice: {
                        title: "Связь с водой",
                        time: "1-2 минуты",
                        steps: [
                            "Встань у источника воды (кран, бутылка, река).",
                            "Положи руку на сосуд или подставь руку под струю.",
                            "Мысленно скажи: «Я вижу тебя, наги. Я благодарю за эту воду. Я подношу тебе чистое намерение и извиняюсь за загрязнение».",
                            "Визуализируй синий свет, исходящий от воды к твоему сердцу.",
                            "Пей или используй воду с осознанием."
                        ]
                    }
                },
                en: {
                    title: "Nagi",
                    subtitle: "Water spirits",
                    situation: "You have forgotten your connection with nature. Water is life, and you use it mechanically, not noticing the sacred.",
                    practice: {
                        title: "Connection with water",
                        time: "1-2 minutes",
                        steps: [
                            "Stand by a water source (tap, bottle, river).",
                            "Place your hand on the container or under the stream.",
                            "Mentally say: 'I see you, nagas. I thank you for this water. I offer you pure intention and apologize for pollution.'",
                            "Visualize blue light flowing from the water to your heart.",
                            "Drink or use the water with awareness."
                        ]
                    }
                },
                es: {
                    title: "Nagi",
                    subtitle: "Espíritus del agua",
                    situation: "Has olvidado tu conexión con la naturaleza. El agua es vida, y la usas mecánicamente, sin notar lo sagrado.",
                    practice: {
                        title: "Conexión con el agua",
                        time: "1-2 minutos",
                        steps: [
                            "Párate junto a una fuente de agua (grifo, botella, río).",
                            "Coloca tu mano en el recipiente o bajo el chorro.",
                            "Di mentalmente: 'Los veo, nagas. Les agradezco por esta agua. Les ofrezco intención pura y me disculpo por la contaminación.'",
                            "Visualiza luz azul fluyendo del agua a tu corazón.",
                            "Bebe o usa el agua con conciencia."
                        ]
                    }
                }
            }
        },

        sutra: {
            id: "compassion",
            icon: "🤲",
            translations: {
                ru: {
                    title: "Сострадание",
                    subtitle: "Ньиндже",
                    situation: "Ты черств, раздражен, забыл о страданиях других. Твое сердце закрыто.",
                    practice: {
                        title: "Медитация сострадания",
                        time: "2-3 минуты",
                        steps: [
                            "Вспомни конкретного страдающего человека (или представь случайного).",
                            "Положи руку на сердце.",
                            "Мысленно скажи: «Пусть ты будешь свободен от страданий. Пусть ты обретешь покой».",
                            "Визуализируй белый свет, исходящий из твоего сердца к этому человеку.",
                            "Повтори: «Пусть все существа будут счастливы»."
                        ]
                    }
                },
                en: {
                    title: "Compassion",
                    subtitle: "Nyingje",
                    situation: "You are hardened, irritated, have forgotten the suffering of others. Your heart is closed.",
                    practice: {
                        title: "Compassion meditation",
                        time: "2-3 minutes",
                        steps: [
                            "Recall a specific suffering person (or imagine a random one).",
                            "Place your hand on your heart.",
                            "Mentally say: 'May you be free from suffering. May you find peace.'",
                            "Visualize white light flowing from your heart to this person.",
                            "Repeat: 'May all beings be happy.'"
                        ]
                    }
                },
                es: {
                    title: "Compasión",
                    subtitle: "Nyingje",
                    situation: "Estás endurecido, irritado, has olvidado el sufrimiento de otros. Tu corazón está cerrado.",
                    practice: {
                        title: "Meditación de compasión",
                        time: "2-3 minutos",
                        steps: [
                            "Recuerda a una persona que sufre (o imagina una al azar).",
                            "Coloca tu mano en el corazón.",
                            "Di mentalmente: 'Que seas libre del sufrimiento. Que encuentres la paz.'",
                            "Visualiza luz blanca fluyendo de tu corazón a esta persona.",
                            "Repite: 'Que todos los seres sean felices.'"
                        ]
                    }
                }
            }
        },

        tantra: {
            id: "fire_prana",
            icon: "🔥",
            translations: {
                ru: {
                    title: "Прана огня",
                    subtitle: "Внутренний огонь",
                    situation: "Ты чувствуешь тупость, холод, отсутствие энергии. Твой внутренний огонь угас.",
                    practice: {
                        title: "Активация внутреннего огня",
                        time: "3-5 минут",
                        steps: [
                            "Сядь прямо, сосредоточь внимание на пупке.",
                            "Представь красный треугольник (огонь) в области пупка.",
                            "Сделай 9 очищающих дыханий: вдох через правую ноздрю (втягиваешь красный свет), задержка, выдох через левую ноздрю (выдыхаешь серый дым — тупость).",
                            "Повтори мантру: А РАМ (7 раз).",
                            "Почувствуй тепло и энергию в теле."
                        ]
                    }
                },
                en: {
                    title: "Fire Prana",
                    subtitle: "Inner fire",
                    situation: "You feel dullness, cold, lack of energy. Your inner fire has dimmed.",
                    practice: {
                        title: "Activating inner fire",
                        time: "3-5 minutes",
                        steps: [
                            "Sit straight, focus attention on your navel.",
                            "Visualize a red triangle (fire) in the navel area.",
                            "Take 9 cleansing breaths: inhale through right nostril (drawing in red light), hold, exhale through left nostril (breathing out gray smoke — dullness).",
                            "Repeat mantra: AH RAM (7 times).",
                            "Feel warmth and energy in your body."
                        ]
                    }
                },
                es: {
                    title: "Prana de fuego",
                    subtitle: "Fuego interno",
                    situation: "Sientes embotamiento, frío, falta de energía. Tu fuego interno se ha apagado.",
                    practice: {
                        title: "Activando el fuego interno",
                        time: "3-5 minutos",
                        steps: [
                            "Siéntate recto, enfoca la atención en el ombligo.",
                            "Visualiza un triángulo rojo (fuego) en el área del ombligo.",
                            "Toma 9 respiraciones purificadoras: inhala por la fosa nasal derecha (absorbiendo luz roja), mantén, exhala por la izquierda (expulsando humo gris — embotamiento).",
                            "Repite el mantra: AH RAM (7 veces).",
                            "Siente calor y energía en tu cuerpo."
                        ]
                    }
                }
            }
        },

        dzogchen: {
            id: "kunzhi",
            icon: "☁️",
            translations: {
                ru: {
                    title: "Кунжи",
                    subtitle: "Всеоснова",
                    situation: "Ты забыл, что всё есть проявление изначального пространства. Ты цепляешься за формы.",
                    practice: {
                        title: "Возвращение к основе",
                        time: "2 минуты",
                        steps: [
                            "Остановись. Посмотри вокруг.",
                            "Скажи себе: «Всё, что я вижу, слышу, чувствую — это игра Кунжи».",
                            "Не меняй ничего. Просто будь.",
                            "Почувствуй, что ты не отделен от этого пространства.",
                            "Отпусти любое усилие. Просто присутствуй."
                        ]
                    }
                },
                en: {
                    title: "Kunzhi",
                    subtitle: "The Ground of All",
                    situation: "You have forgotten that everything is a manifestation of primordial space. You cling to forms.",
                    practice: {
                        title: "Returning to the ground",
                        time: "2 minutes",
                        steps: [
                            "Stop. Look around.",
                            "Tell yourself: 'Everything I see, hear, feel — this is the play of Kunzhi.'",
                            "Don't change anything. Just be.",
                            "Feel that you are not separate from this space.",
                            "Release any effort. Just be present."
                        ]
                    }
                },
                es: {
                    title: "Kunzhi",
                    subtitle: "El Fundamento de Todo",
                    situation: "Has olvidado que todo es una manifestación del espacio primordial. Te aferras a las formas.",
                    practice: {
                        title: "Regresando al fundamento",
                        time: "2 minutos",
                        steps: [
                            "Detente. Mira a tu alrededor.",
                            "Dite a ti mismo: 'Todo lo que veo, oigo, siento — esto es el juego de Kunzhi.'",
                            "No cambies nada. Solo sé.",
                            "Siente que no estás separado de este espacio.",
                            "Libera cualquier esfuerzo. Solo está presente."
                        ]
                    }
                }
            }
        }
    }
};