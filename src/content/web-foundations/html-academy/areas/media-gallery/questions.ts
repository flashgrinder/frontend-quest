import type { ContentQuestion } from '../../../../../types/content'

export const mediaGalleryQuestions: ContentQuestion[] = [
  {
    "id": 20046,
    "moduleId": "html-media-gallery-basics",
    "type": "Scenario",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "picture-source",
      "html-media-gallery-basics"
    ],
    "question": "Media Gallery: Базовая миссия: какой вариант лучше всего описывает тему «picture и source»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «picture и source» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «picture и source» выбирает источник изображения по media или type. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<picture>\n  <source srcset=\"hero.avif\" type=\"image/avif\">\n  <img src=\"hero.jpg\" alt=\"Главный экран\">\n</picture>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-picture-source"
  },
  {
    "id": 20047,
    "moduleId": "html-media-gallery-basics",
    "type": "CodeReview",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "srcset-sizes",
      "html-media-gallery-basics"
    ],
    "question": "Media Gallery: Базовая миссия: какой вариант лучше всего описывает тему «srcset и sizes»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «srcset и sizes» позволяет браузеру выбрать подходящий ресурс для экрана. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<img src=\"card-800.jpg\" srcset=\"card-400.jpg 400w, card-800.jpg 800w\" sizes=\"(max-width: 600px) 100vw, 400px\" alt=\"Карточка товара\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-srcset-sizes"
  },
  {
    "id": 20048,
    "moduleId": "html-media-gallery-basics",
    "type": "Architecture",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "figure-figcaption",
      "html-media-gallery-basics"
    ],
    "question": "Media Gallery: Базовая миссия: какой вариант лучше всего описывает тему «figure и figcaption»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «figure и figcaption» связывает медиа или пример с подписью. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<figure>\n  <img src=\"diagram.png\" alt=\"Схема процесса\">\n  <figcaption>Этапы обработки запроса</figcaption>\n</figure>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-figure-figcaption"
  },
  {
    "id": 20049,
    "moduleId": "html-media-gallery-basics",
    "type": "Theory",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "audio-video-track",
      "html-media-gallery-basics"
    ],
    "question": "Media Gallery: Базовая миссия: какой вариант лучше всего описывает тему «audio, video и track»?",
    "answers": [
      {
        "id": "a",
        "text": "audio, video и track используют для выражения смысла: тема добавляет controls, субтитры и альтернативные дорожки."
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
    "explanation": "Правильный ответ связан с тем, что тема «audio, video и track» добавляет controls, субтитры и альтернативные дорожки. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<video controls width=\"640\">\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n  <track kind=\"captions\" src=\"lesson.vtt\" srclang=\"ru\" label=\"Русский\">\n</video>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-audio-video-track"
  },
  {
    "id": 20050,
    "moduleId": "html-media-gallery-basics",
    "type": "CodeOutput",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "iframe",
      "html-media-gallery-basics"
    ],
    "question": "Media Gallery: Базовая миссия: какой вариант лучше всего описывает тему «iframe»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «iframe»."
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
    "explanation": "Правильный ответ связан с тем, что тема «iframe» встраивает внешний документ и требует title, sandbox и контроля разрешений. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<iframe src=\"map.html\" title=\"Карта офиса\" loading=\"lazy\"></iframe>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-iframe"
  },
  {
    "id": 20051,
    "moduleId": "html-media-gallery-advanced",
    "type": "FindBug",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "srcset-sizes",
      "html-media-gallery-advanced"
    ],
    "question": "Media Gallery: Продвинутая миссия: какой вариант лучше всего описывает тему «srcset и sizes»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «srcset и sizes»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «srcset и sizes» позволяет браузеру выбрать подходящий ресурс для экрана. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<img src=\"card-800.jpg\" srcset=\"card-400.jpg 400w, card-800.jpg 800w\" sizes=\"(max-width: 600px) 100vw, 400px\" alt=\"Карточка товара\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-srcset-sizes"
  },
  {
    "id": 20052,
    "moduleId": "html-media-gallery-advanced",
    "type": "BestPractice",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "figure-figcaption",
      "html-media-gallery-advanced"
    ],
    "question": "Media Gallery: Продвинутая миссия: какой вариант лучше всего описывает тему «figure и figcaption»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «figure и figcaption» связывает медиа или пример с подписью. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<figure>\n  <img src=\"diagram.png\" alt=\"Схема процесса\">\n  <figcaption>Этапы обработки запроса</figcaption>\n</figure>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-figure-figcaption"
  },
  {
    "id": 20053,
    "moduleId": "html-media-gallery-advanced",
    "type": "Interview",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "audio-video-track",
      "html-media-gallery-advanced"
    ],
    "question": "Media Gallery: Продвинутая миссия: какой вариант лучше всего описывает тему «audio, video и track»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «audio, video и track» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «audio, video и track» добавляет controls, субтитры и альтернативные дорожки. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<video controls width=\"640\">\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n  <track kind=\"captions\" src=\"lesson.vtt\" srclang=\"ru\" label=\"Русский\">\n</video>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-audio-video-track"
  },
  {
    "id": 20054,
    "moduleId": "html-media-gallery-advanced",
    "type": "Scenario",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "iframe",
      "html-media-gallery-advanced"
    ],
    "question": "Media Gallery: Продвинутая миссия: какой вариант лучше всего описывает тему «iframe»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «iframe» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «iframe» встраивает внешний документ и требует title, sandbox и контроля разрешений. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<iframe src=\"map.html\" title=\"Карта офиса\" loading=\"lazy\"></iframe>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-iframe"
  },
  {
    "id": 20055,
    "moduleId": "html-media-gallery-advanced",
    "type": "CodeReview",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "lazy-loading",
      "html-media-gallery-advanced"
    ],
    "question": "Media Gallery: Продвинутая миссия: какой вариант лучше всего описывает тему «loading=\"lazy\"»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «loading=\"lazy\"» откладывает загрузку offscreen-изображений и iframe. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<img src=\"gallery-12.jpg\" alt=\"Экспонат галереи\" loading=\"lazy\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-lazy-loading"
  },
  {
    "id": 20056,
    "moduleId": "html-media-gallery-interview",
    "type": "Architecture",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "figure-figcaption",
      "html-media-gallery-interview"
    ],
    "question": "Media Gallery: Собеседование: какой вариант лучше всего описывает тему «figure и figcaption»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «figure и figcaption» связывает медиа или пример с подписью. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<figure>\n  <img src=\"diagram.png\" alt=\"Схема процесса\">\n  <figcaption>Этапы обработки запроса</figcaption>\n</figure>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-figure-figcaption"
  },
  {
    "id": 20057,
    "moduleId": "html-media-gallery-interview",
    "type": "Theory",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "audio-video-track",
      "html-media-gallery-interview"
    ],
    "question": "Media Gallery: Собеседование: какой вариант лучше всего описывает тему «audio, video и track»?",
    "answers": [
      {
        "id": "a",
        "text": "audio, video и track используют для выражения смысла: тема добавляет controls, субтитры и альтернативные дорожки."
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
    "explanation": "Правильный ответ связан с тем, что тема «audio, video и track» добавляет controls, субтитры и альтернативные дорожки. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<video controls width=\"640\">\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n  <track kind=\"captions\" src=\"lesson.vtt\" srclang=\"ru\" label=\"Русский\">\n</video>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-audio-video-track"
  },
  {
    "id": 20058,
    "moduleId": "html-media-gallery-interview",
    "type": "CodeOutput",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "iframe",
      "html-media-gallery-interview"
    ],
    "question": "Media Gallery: Собеседование: какой вариант лучше всего описывает тему «iframe»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «iframe»."
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
    "explanation": "Правильный ответ связан с тем, что тема «iframe» встраивает внешний документ и требует title, sandbox и контроля разрешений. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<iframe src=\"map.html\" title=\"Карта офиса\" loading=\"lazy\"></iframe>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-iframe"
  },
  {
    "id": 20059,
    "moduleId": "html-media-gallery-interview",
    "type": "FindBug",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "lazy-loading",
      "html-media-gallery-interview"
    ],
    "question": "Media Gallery: Собеседование: какой вариант лучше всего описывает тему «loading=\"lazy\"»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «loading=\"lazy\"»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «loading=\"lazy\"» откладывает загрузку offscreen-изображений и iframe. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<img src=\"gallery-12.jpg\" alt=\"Экспонат галереи\" loading=\"lazy\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-lazy-loading"
  },
  {
    "id": 20060,
    "moduleId": "html-media-gallery-interview",
    "type": "BestPractice",
    "difficulty": "Junior",
    "tags": [
      "html",
      "media-gallery",
      "img-alt",
      "html-media-gallery-interview"
    ],
    "question": "Media Gallery: Собеседование: какой вариант лучше всего описывает тему «img и alt»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «img и alt» даёт изображению текстовую альтернативу, если оно несёт смысл. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<img src=\"chart.png\" alt=\"Рост конверсии на 12%\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-media-gallery-img-alt"
  }
]
