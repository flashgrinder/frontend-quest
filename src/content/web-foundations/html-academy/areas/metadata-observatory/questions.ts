import type { ContentQuestion } from '../../../../../types/content'

export const metadataObservatoryQuestions: ContentQuestion[] = [
  {
    "id": 20121,
    "moduleId": "html-metadata-observatory-basics",
    "type": "Theory",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "canonical-robots",
      "html-metadata-observatory-basics"
    ],
    "question": "Metadata Observatory: Базовая миссия: какой вариант лучше всего описывает тему «canonical и robots»?",
    "answers": [
      {
        "id": "a",
        "text": "canonical и robots используют для выражения смысла: тема помогает выбрать основной URL и управлять индексацией."
      },
      {
        "id": "b",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "c",
        "text": "Добавить ARIA ко всем элементам, даже если существует подходящий нативный HTML-элемент."
      },
      {
        "id": "d",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      }
    ],
    "correctAnswer": "a",
    "explanation": "Правильный ответ связан с тем, что тема «canonical и robots» помогает выбрать основной URL и управлять индексацией. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<link rel=\"canonical\" href=\"https://example.com/html\">\n<meta name=\"robots\" content=\"index,follow\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-canonical-robots"
  },
  {
    "id": 20122,
    "moduleId": "html-metadata-observatory-basics",
    "type": "CodeOutput",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "open-graph",
      "html-metadata-observatory-basics"
    ],
    "question": "Metadata Observatory: Базовая миссия: какой вариант лучше всего описывает тему «Open Graph»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «Open Graph»."
      },
      {
        "id": "c",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "d",
        "text": "Использовать div или span всегда достаточно, потому что CSS полностью заменяет семантику HTML."
      }
    ],
    "correctAnswer": "b",
    "explanation": "Правильный ответ связан с тем, что тема «Open Graph» управляет превью ссылки в социальных сетях и мессенджерах. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<meta property=\"og:title\" content=\"HTML Academy\">\n<meta property=\"og:image\" content=\"https://example.com/og.png\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-open-graph"
  },
  {
    "id": 20123,
    "moduleId": "html-metadata-observatory-basics",
    "type": "FindBug",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "favicon-manifest",
      "html-metadata-observatory-basics"
    ],
    "question": "Metadata Observatory: Базовая миссия: какой вариант лучше всего описывает тему «favicon и manifest»?",
    "answers": [
      {
        "id": "a",
        "text": "Добавить ARIA ко всем элементам, даже если существует подходящий нативный HTML-элемент."
      },
      {
        "id": "b",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "c",
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «favicon и manifest»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «favicon и manifest» помогает браузеру и PWA-оболочке представить сайт. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<link rel=\"icon\" href=\"/favicon.svg\">\n<link rel=\"manifest\" href=\"/manifest.webmanifest\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-favicon-manifest"
  },
  {
    "id": 20124,
    "moduleId": "html-metadata-observatory-basics",
    "type": "BestPractice",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "script-defer-async",
      "html-metadata-observatory-basics"
    ],
    "question": "Metadata Observatory: Базовая миссия: какой вариант лучше всего описывает тему «defer и async»?",
    "answers": [
      {
        "id": "a",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "b",
        "text": "Использовать div или span всегда достаточно, потому что CSS полностью заменяет семантику HTML."
      },
      {
        "id": "c",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "d",
        "text": "Сначала выбирают нативный HTML по смыслу, затем добавляют CSS и JavaScript поверх него."
      }
    ],
    "correctAnswer": "d",
    "explanation": "Правильный ответ связан с тем, что тема «defer и async» разделяет отложенное выполнение по порядку и независимую загрузку скрипта. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<script src=\"analytics.js\" async></script>\n<script src=\"app.js\" defer></script>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-script-defer-async"
  },
  {
    "id": 20125,
    "moduleId": "html-metadata-observatory-basics",
    "type": "Interview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "noscript",
      "html-metadata-observatory-basics"
    ],
    "question": "Metadata Observatory: Базовая миссия: какой вариант лучше всего описывает тему «noscript»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «noscript» на доступность и поддержку."
      },
      {
        "id": "b",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "c",
        "text": "Добавить ARIA ко всем элементам, даже если существует подходящий нативный HTML-элемент."
      },
      {
        "id": "d",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      }
    ],
    "correctAnswer": "a",
    "explanation": "Правильный ответ связан с тем, что тема «noscript» показывает fallback, если JavaScript отключён или недоступен. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<noscript>Для работы интерактивных функций нужен JavaScript.</noscript>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-noscript"
  },
  {
    "id": 20126,
    "moduleId": "html-metadata-observatory-advanced",
    "type": "Scenario",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "open-graph",
      "html-metadata-observatory-advanced"
    ],
    "question": "Metadata Observatory: Продвинутая миссия: какой вариант лучше всего описывает тему «Open Graph»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «Open Graph» там, где эта семантика соответствует задаче."
      },
      {
        "id": "c",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "d",
        "text": "Использовать div или span всегда достаточно, потому что CSS полностью заменяет семантику HTML."
      }
    ],
    "correctAnswer": "b",
    "explanation": "Правильный ответ связан с тем, что тема «Open Graph» управляет превью ссылки в социальных сетях и мессенджерах. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<meta property=\"og:title\" content=\"HTML Academy\">\n<meta property=\"og:image\" content=\"https://example.com/og.png\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-open-graph"
  },
  {
    "id": 20127,
    "moduleId": "html-metadata-observatory-advanced",
    "type": "CodeReview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "favicon-manifest",
      "html-metadata-observatory-advanced"
    ],
    "question": "Metadata Observatory: Продвинутая миссия: какой вариант лучше всего описывает тему «favicon и manifest»?",
    "answers": [
      {
        "id": "a",
        "text": "Добавить ARIA ко всем элементам, даже если существует подходящий нативный HTML-элемент."
      },
      {
        "id": "b",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "c",
        "text": "В code review стоит проверить семантику, доступное имя, валидность и поведение без CSS."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «favicon и manifest» помогает браузеру и PWA-оболочке представить сайт. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<link rel=\"icon\" href=\"/favicon.svg\">\n<link rel=\"manifest\" href=\"/manifest.webmanifest\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-favicon-manifest"
  },
  {
    "id": 20128,
    "moduleId": "html-metadata-observatory-advanced",
    "type": "Architecture",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "script-defer-async",
      "html-metadata-observatory-advanced"
    ],
    "question": "Metadata Observatory: Продвинутая миссия: какой вариант лучше всего описывает тему «defer и async»?",
    "answers": [
      {
        "id": "a",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "b",
        "text": "Использовать div или span всегда достаточно, потому что CSS полностью заменяет семантику HTML."
      },
      {
        "id": "c",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "d",
        "text": "HTML-структура должна оставаться независимым фундаментом интерфейса и не зависеть от визуального слоя."
      }
    ],
    "correctAnswer": "d",
    "explanation": "Правильный ответ связан с тем, что тема «defer и async» разделяет отложенное выполнение по порядку и независимую загрузку скрипта. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<script src=\"analytics.js\" async></script>\n<script src=\"app.js\" defer></script>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-script-defer-async"
  },
  {
    "id": 20129,
    "moduleId": "html-metadata-observatory-advanced",
    "type": "Theory",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "noscript",
      "html-metadata-observatory-advanced"
    ],
    "question": "Metadata Observatory: Продвинутая миссия: какой вариант лучше всего описывает тему «noscript»?",
    "answers": [
      {
        "id": "a",
        "text": "noscript используют для выражения смысла: тема показывает fallback, если JavaScript отключён или недоступен."
      },
      {
        "id": "b",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "c",
        "text": "Добавить ARIA ко всем элементам, даже если существует подходящий нативный HTML-элемент."
      },
      {
        "id": "d",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      }
    ],
    "correctAnswer": "a",
    "explanation": "Правильный ответ связан с тем, что тема «noscript» показывает fallback, если JavaScript отключён или недоступен. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<noscript>Для работы интерактивных функций нужен JavaScript.</noscript>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-noscript"
  },
  {
    "id": 20130,
    "moduleId": "html-metadata-observatory-advanced",
    "type": "CodeOutput",
    "difficulty": "Middle",
    "tags": [
      "html",
      "metadata-observatory",
      "base-element",
      "html-metadata-observatory-advanced"
    ],
    "question": "Metadata Observatory: Продвинутая миссия: какой вариант лучше всего описывает тему «base»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «base»."
      },
      {
        "id": "c",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "d",
        "text": "Использовать div или span всегда достаточно, потому что CSS полностью заменяет семантику HTML."
      }
    ],
    "correctAnswer": "b",
    "explanation": "Правильный ответ связан с тем, что тема «base» меняет базовый URL для относительных ссылок и ресурсов. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<base href=\"https://cdn.example.com/docs/\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-base-element"
  },
  {
    "id": 20131,
    "moduleId": "html-metadata-observatory-interview",
    "type": "FindBug",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "metadata-observatory",
      "favicon-manifest",
      "html-metadata-observatory-interview"
    ],
    "question": "Metadata Observatory: Собеседование: какой вариант лучше всего описывает тему «favicon и manifest»?",
    "answers": [
      {
        "id": "a",
        "text": "Добавить ARIA ко всем элементам, даже если существует подходящий нативный HTML-элемент."
      },
      {
        "id": "b",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "c",
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «favicon и manifest»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «favicon и manifest» помогает браузеру и PWA-оболочке представить сайт. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<link rel=\"icon\" href=\"/favicon.svg\">\n<link rel=\"manifest\" href=\"/manifest.webmanifest\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-favicon-manifest"
  },
  {
    "id": 20132,
    "moduleId": "html-metadata-observatory-interview",
    "type": "BestPractice",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "metadata-observatory",
      "script-defer-async",
      "html-metadata-observatory-interview"
    ],
    "question": "Metadata Observatory: Собеседование: какой вариант лучше всего описывает тему «defer и async»?",
    "answers": [
      {
        "id": "a",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "b",
        "text": "Использовать div или span всегда достаточно, потому что CSS полностью заменяет семантику HTML."
      },
      {
        "id": "c",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "d",
        "text": "Сначала выбирают нативный HTML по смыслу, затем добавляют CSS и JavaScript поверх него."
      }
    ],
    "correctAnswer": "d",
    "explanation": "Правильный ответ связан с тем, что тема «defer и async» разделяет отложенное выполнение по порядку и независимую загрузку скрипта. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<script src=\"analytics.js\" async></script>\n<script src=\"app.js\" defer></script>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-script-defer-async"
  },
  {
    "id": 20133,
    "moduleId": "html-metadata-observatory-interview",
    "type": "Interview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "metadata-observatory",
      "noscript",
      "html-metadata-observatory-interview"
    ],
    "question": "Metadata Observatory: Собеседование: какой вариант лучше всего описывает тему «noscript»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «noscript» на доступность и поддержку."
      },
      {
        "id": "b",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "c",
        "text": "Добавить ARIA ко всем элементам, даже если существует подходящий нативный HTML-элемент."
      },
      {
        "id": "d",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      }
    ],
    "correctAnswer": "a",
    "explanation": "Правильный ответ связан с тем, что тема «noscript» показывает fallback, если JavaScript отключён или недоступен. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<noscript>Для работы интерактивных функций нужен JavaScript.</noscript>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-noscript"
  },
  {
    "id": 20134,
    "moduleId": "html-metadata-observatory-interview",
    "type": "Scenario",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "metadata-observatory",
      "base-element",
      "html-metadata-observatory-interview"
    ],
    "question": "Metadata Observatory: Собеседование: какой вариант лучше всего описывает тему «base»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «base» там, где эта семантика соответствует задаче."
      },
      {
        "id": "c",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "d",
        "text": "Использовать div или span всегда достаточно, потому что CSS полностью заменяет семантику HTML."
      }
    ],
    "correctAnswer": "b",
    "explanation": "Правильный ответ связан с тем, что тема «base» меняет базовый URL для относительных ссылок и ресурсов. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<base href=\"https://cdn.example.com/docs/\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-base-element"
  },
  {
    "id": 20135,
    "moduleId": "html-metadata-observatory-interview",
    "type": "CodeReview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "metadata-observatory",
      "schema-org",
      "html-metadata-observatory-interview"
    ],
    "question": "Metadata Observatory: Собеседование: какой вариант лучше всего описывает тему «Schema.org»?",
    "answers": [
      {
        "id": "a",
        "text": "Добавить ARIA ко всем элементам, даже если существует подходящий нативный HTML-элемент."
      },
      {
        "id": "b",
        "text": "Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста."
      },
      {
        "id": "c",
        "text": "В code review стоит проверить семантику, доступное имя, валидность и поведение без CSS."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Schema.org» помогает поисковым системам понять сущности страницы. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<script type=\"application/ld+json\">{\"@context\":\"https://schema.org\"}</script>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-metadata-observatory-schema-org"
  }
]
