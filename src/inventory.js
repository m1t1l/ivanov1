import { dice } from './dice'
const d20 = () => dice(20) // 1 - 20
const d8 = () => dice(8)
const rand20 = () => d20() - 1 // 0 - 20

class Inventory {
  constructor() {
    this.ARMORS = {
      3: { name: "Без доспеха", defence: 11, slots: 0, kind: 0 },
      14: { name: "Кожаные", defence: 12, slots: 1, kind: 3 },
      19: { name: "Кольчужные", defence: 13, slots: 2, kind: 4 },
      20: { name: "Пластинчатые", defence: 14, slots: 3, kind: 5 },
    }
    this.SHIELDS = {
      13: { name: "Нет", defence: 0, slots: 0, kind: 0 },
      16: { name: "Шлем", defence: 1, slots: 1, kind: 1 },
      19: { name: "Щит", defence: 1, slots: 1, kind: 1 },
      20: { name: "Шлем и щит", defence: 2, slots: 2, kind: 1 },
    }
    this.WORLDVIEW = {
      5: "Порядок",
      15: "Нейтралитет",
      20: "Хаос"
    }
    this.MAIN1 = [
      "Шест, 10фт",
      "Мешок",
      "Палатка",
      "Колья, 5",
      "Факелы, 5",
      "Пила",
      "Ведро",
      "Ёжики",
      "Зубило",
      "Сверло",
      "Удочка",
      "Мраморные шарики",
      "Клей",
      "Кирка",
      "Песочные часы",
      "Сеть",
      "Клещи",
      "Отмычки",
      "Железный футляр",
      "Гвозди",
    ]
    this.MAIN2 = [
      "Благовония",
      "Губка",
      "Линзы",
      "Духи",
      "Горн",
      "Бутыль",
      "Мыло",
      "Подзорная труба",
      "Смола",
      "Нитки",
      "Поддельные драг. камни",
      "Книга (чистая)",
      "Колода карт",
      "Набор кубиков",
      "Горшок для готовки",
      "Грим",
      "Свисток",
      "Муз. инструмент",
      "Перо и чернила",
      "Колокольчик",
    ]
    this.MAIN3 = [
      "Веревка, 50фт",
      "Шкивы",
      "Свечи, 5",
      "Цепь, 10 фт",
      "Мел, 10",
      "Ломик",
      "Спички",
      "Крюк-кошка",
      "Молоток",
      "Фляга",
      "Фонарь",
      "Лампадное масло",
      "Замок",
      "Кандалы",
      "Зеркало",
      "Шест, 10 фт",
      "Мешок",
      "Палатка",
      "Колья, 5",
      "Факелы, 5",
    ]
    this.PERKS = {
      "Тело": [
        "Атлетичное",
        "Мускулистое",
        "Тучное",
        "Изящное",
        "Костлявое",
        "Громадное",
        "Долговязое",
        "Накачанное",
        "Грубое",
        "Худое",
        "Короткое",
        "Жилистое",
        "Стройное",
        "Дряблое",
        "Статное",
        "Коренастое",
        "Миниатюрное",
        "Великанье",
        "Гибкое",
        "Закалённое",
      ],
      "Волосы": [
        "Лысина",
        "Косы",
        "Короткострижены",
        "Грубо обрезаны",
        "Кудрявые",
        "Взлохмачены",
        "Дреды",
        "Грязные",
        "Вьющиеся",
        "Сальные",
        "Ломкие",
        "Длинные",
        "Шикарные",
        "Ирокез",
        "Блестящие",
        "Хвост",
        "Шелковистые",
        "Узел",
        "Волнистые",
        "Тонкие",
      ],
      "Лицо": [
        "Раздутое",
        "Грубое",
        "Костлявое",
        "Точечное",
        "Утончённое",
        "Продолговатое",
        "Королевское",
        "Сжатое",
        "Ястребиное",
        "Повреждённое",
        "Ехидное",
        "Узкое",
        "Крысиное",
        "Круглое",
        "Впалое",
        "Острое",
        "Мягкое",
        "Квадратное",
        "Широкое",
        "Волчье",
      ],
      "Одежда": [
        "Старинная",
        "Окровавленная",
        "Церемониальная",
        "Украшенная",
        "Эксцентричная",
        "Элегантная",
        "Модная",
        "Грязная",
        "Вызывающая",
        "Запачканная",
        "Иноземная",
        "Потёртая",
        "Старомодная",
        "Униформа",
        "Мешковатая",
        "В заплатках",
        "Надушенная",
        "Мерзкая",
        "Порванная",
        "Малорослая",
      ],
      "Кожа": [
        "Боевой шрам",
        "Родимое пятно",
        "Ожог",
        "Тёмная",
        "Макияж",
        "Жирная",
        "Бледная",
        "Идеальная",
        "Пирсинг",
        "Рябая",
        "Зловонная",
        "Татуировки",
        "Благоухающая",
        "Грубая",
        "Обвисшая",
        "Солнечный ожог",
        "Загорелая",
        "Боевая раскраска",
        "Дряблая",
        "Шрамы от кнута",
      ],
      "Достоинство": [
        "Амбициозность",
        "Осторожность",
        "Храбрость",
        "Обходительность",
        "Любознательность",
        "Дисциплинированность",
        "Целеустремлённость",
        "Щедрость",
        "Общительность",
        "Честность",
        "Великодушие",
        "Скромность",
        "Идеализм",
        "Простота",
        "Лояльность",
        "Милосердие",
        "Праведность",
        "Невозмутимость",
        "Стойкость",
        "Терпимость",
      ],
      "Недостаток": [
        "Агрессивность",
        "Надменность",
        "Обидчивость",
        "Трусость",
        "Жестокость",
        "Лживость",
        "Легкомысленность",
        "Обжорство",
        "Жадность",
        "Раздражительность",
        "Лень",
        "Нервозность",
        "Предубеждения",
        "Безрассудство",
        "Грубость",
        "Подозрительность",
        "Тщеславие",
        "Мстительность",
        "Расточительность",
        "Нытьё",
      ],
      "Неприятности": [
        "Сирота",
        "Зависим",
        "Шантажируется",
        "Осуждён",
        "Проклят",
        "Обманут",
        "Расжалован",
        "Дискредитирован",
        "Отрёкся",
        "Изгнан",
        "Подставлен",
        "Одержим",
        "Похищен",
        "Изувечен",
        "Банкрот",
        "Преследуемый",
        "Отвергнут",
        "Заменён",
        "Ограблен",
        "Подозреваемый",
      ],
      "Речь": [
        "Грубая",
        "Громогласная",
        "Задыхающаяся",
        "Загадочная",
        "Проглатывающая",
        "Слюнявая",
        "Высокопарная",
        "Официозная",
        "Загробная",
        "Хриплая",
        "Бормочущая",
        "Краткая",
        "Причудливая",
        "Бессвязная",
        "Скороговорная",
        "Акцент",
        "Медленная",
        "Пищащая",
        "Заикающаяся",
        "Шепчущая",
      ],
      "Прошлое": [
        "Алхимик",
        "Попрошайка",
        "Мясник",
        "Грабитель",
        "Шарлатан",
        "Священник",
        "Повар",
        "Культист",
        "Картёжник",
        "Травник",
        "Волшебник",
        "Моряк",
        "Наёмник",
        "Торговец",
        "Бандит",
        "Актёр",
        "Карманник",
        "Контрабандист",
        "Студент",
        "Охотник",
      ]
    }
  }

  getArmor(d20) {
    for (const k in this.ARMORS)
      if (d20 <= k) return this.ARMORS[k]
    throw new Error(`${d20} - unknown armor`)
  }
  getShield(d20) {
    for (const k in this.SHIELDS)
      if (d20 <= k) return this.SHIELDS[k]
    throw new Error(`${d20} - unknown shield`)
  }
  getWorldView(d20) {
    for (const k in this.WORLDVIEW) if (d20 <= k) return this.WORLDVIEW[k]
    return new Error(`${d20} - unknown worldview`)
  }
  createRandomHero() {
    let perks = []
    for (let p in this.PERKS) perks.push({ [p]: this.PERKS[p][rand20()] })
    perks.push({"Мировоззрение": this.getWorldView(rand20())})
    return {
      health: d8(),
      perks,
      armors: {
        "Броня": this.getArmor(d20()),
        "Щит/шлем": this.getShield(d20()),
      },
      inventory: [
        this.MAIN1[rand20()],
        this.MAIN2[rand20()],
        this.MAIN3[rand20()],
        this.MAIN3[rand20()],
      ]
    }
  }
}

export default Inventory;
