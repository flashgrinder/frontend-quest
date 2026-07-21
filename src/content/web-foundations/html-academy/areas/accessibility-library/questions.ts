import type { ContentQuestion } from '../../../../../types/content'

export const accessibilityLibraryQuestions: ContentQuestion[] = [
  {
    "id": 20106,
    "moduleId": "html-accessibility-library-basics",
    "type": "CodeOutput",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "aria-native-first",
      "html-accessibility-library-basics"
    ],
    "question": "Accessibility Library: Базовая миссия: какой вариант лучше всего описывает тему «Сначала нативный HTML, потом ARIA»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «Сначала нативный HTML, потом ARIA»."
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
    "explanation": "Правильный ответ связан с тем, что тема «Сначала нативный HTML, потом ARIA» напоминает, что ARIA не заменяет подходящий HTML-элемент. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<button type=\"button\">Сохранить</button>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-aria-native-first"
  },
  {
    "id": 20107,
    "moduleId": "html-accessibility-library-basics",
    "type": "FindBug",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "form-accessibility",
      "html-accessibility-library-basics"
    ],
    "question": "Accessibility Library: Базовая миссия: какой вариант лучше всего описывает тему «Доступность форм»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «Доступность форм»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Доступность форм» требует label, понятных ошибок, группировки и корректных состояний. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<label for=\"password\">Пароль</label>\n<input id=\"password\" aria-describedby=\"password-error\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-form-accessibility"
  },
  {
    "id": 20108,
    "moduleId": "html-accessibility-library-basics",
    "type": "BestPractice",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "accessible-name",
      "html-accessibility-library-basics"
    ],
    "question": "Accessibility Library: Базовая миссия: какой вариант лучше всего описывает тему «Доступное имя»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Доступное имя» даёт интерактивному элементу имя для ассистивных технологий. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<button aria-label=\"Закрыть окно\">×</button>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-accessible-name"
  },
  {
    "id": 20109,
    "moduleId": "html-accessibility-library-basics",
    "type": "Interview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "aria-label-labelledby",
      "html-accessibility-library-basics"
    ],
    "question": "Accessibility Library: Базовая миссия: какой вариант лучше всего описывает тему «aria-label и aria-labelledby»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «aria-label и aria-labelledby» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «aria-label и aria-labelledby» задаёт имя явно или связывает элемент с видимым текстом. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<h2 id=\"dialog-title\">Настройки</h2>\n<section aria-labelledby=\"dialog-title\">...</section>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-aria-label-labelledby"
  },
  {
    "id": 20110,
    "moduleId": "html-accessibility-library-basics",
    "type": "Scenario",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "aria-describedby",
      "html-accessibility-library-basics"
    ],
    "question": "Accessibility Library: Базовая миссия: какой вариант лучше всего описывает тему «aria-describedby»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «aria-describedby» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «aria-describedby» дополняет имя элемента подсказкой или сообщением об ошибке. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<input aria-describedby=\"password-help\">\n<p id=\"password-help\">Минимум 12 символов.</p>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-aria-describedby"
  },
  {
    "id": 20111,
    "moduleId": "html-accessibility-library-advanced",
    "type": "CodeReview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "form-accessibility",
      "html-accessibility-library-advanced"
    ],
    "question": "Accessibility Library: Продвинутая миссия: какой вариант лучше всего описывает тему «Доступность форм»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Доступность форм» требует label, понятных ошибок, группировки и корректных состояний. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<label for=\"password\">Пароль</label>\n<input id=\"password\" aria-describedby=\"password-error\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-form-accessibility"
  },
  {
    "id": 20112,
    "moduleId": "html-accessibility-library-advanced",
    "type": "Architecture",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "accessible-name",
      "html-accessibility-library-advanced"
    ],
    "question": "Accessibility Library: Продвинутая миссия: какой вариант лучше всего описывает тему «Доступное имя»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Доступное имя» даёт интерактивному элементу имя для ассистивных технологий. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<button aria-label=\"Закрыть окно\">×</button>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-accessible-name"
  },
  {
    "id": 20113,
    "moduleId": "html-accessibility-library-advanced",
    "type": "Theory",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "aria-label-labelledby",
      "html-accessibility-library-advanced"
    ],
    "question": "Accessibility Library: Продвинутая миссия: какой вариант лучше всего описывает тему «aria-label и aria-labelledby»?",
    "answers": [
      {
        "id": "a",
        "text": "aria-label и aria-labelledby используют для выражения смысла: тема задаёт имя явно или связывает элемент с видимым текстом."
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
    "explanation": "Правильный ответ связан с тем, что тема «aria-label и aria-labelledby» задаёт имя явно или связывает элемент с видимым текстом. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<h2 id=\"dialog-title\">Настройки</h2>\n<section aria-labelledby=\"dialog-title\">...</section>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-aria-label-labelledby"
  },
  {
    "id": 20114,
    "moduleId": "html-accessibility-library-advanced",
    "type": "CodeOutput",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "aria-describedby",
      "html-accessibility-library-advanced"
    ],
    "question": "Accessibility Library: Продвинутая миссия: какой вариант лучше всего описывает тему «aria-describedby»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «aria-describedby»."
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
    "explanation": "Правильный ответ связан с тем, что тема «aria-describedby» дополняет имя элемента подсказкой или сообщением об ошибке. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<input aria-describedby=\"password-help\">\n<p id=\"password-help\">Минимум 12 символов.</p>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-aria-describedby"
  },
  {
    "id": 20115,
    "moduleId": "html-accessibility-library-advanced",
    "type": "FindBug",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "hidden-aria-hidden",
      "html-accessibility-library-advanced"
    ],
    "question": "Accessibility Library: Продвинутая миссия: какой вариант лучше всего описывает тему «hidden, aria-hidden и display none»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «hidden, aria-hidden и display none»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «hidden, aria-hidden и display none» по-разному влияет на DOM, визуальное отображение и accessibility tree. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<span aria-hidden=\"true\">★</span>\n<span class=\"sr-only\">Избранное</span>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-hidden-aria-hidden"
  },
  {
    "id": 20116,
    "moduleId": "html-accessibility-library-interview",
    "type": "BestPractice",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "accessible-name",
      "html-accessibility-library-interview"
    ],
    "question": "Accessibility Library: Собеседование: какой вариант лучше всего описывает тему «Доступное имя»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Доступное имя» даёт интерактивному элементу имя для ассистивных технологий. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<button aria-label=\"Закрыть окно\">×</button>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-accessible-name"
  },
  {
    "id": 20117,
    "moduleId": "html-accessibility-library-interview",
    "type": "Interview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "aria-label-labelledby",
      "html-accessibility-library-interview"
    ],
    "question": "Accessibility Library: Собеседование: какой вариант лучше всего описывает тему «aria-label и aria-labelledby»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «aria-label и aria-labelledby» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «aria-label и aria-labelledby» задаёт имя явно или связывает элемент с видимым текстом. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<h2 id=\"dialog-title\">Настройки</h2>\n<section aria-labelledby=\"dialog-title\">...</section>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-aria-label-labelledby"
  },
  {
    "id": 20118,
    "moduleId": "html-accessibility-library-interview",
    "type": "Scenario",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "aria-describedby",
      "html-accessibility-library-interview"
    ],
    "question": "Accessibility Library: Собеседование: какой вариант лучше всего описывает тему «aria-describedby»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «aria-describedby» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «aria-describedby» дополняет имя элемента подсказкой или сообщением об ошибке. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<input aria-describedby=\"password-help\">\n<p id=\"password-help\">Минимум 12 символов.</p>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-aria-describedby"
  },
  {
    "id": 20119,
    "moduleId": "html-accessibility-library-interview",
    "type": "CodeReview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "hidden-aria-hidden",
      "html-accessibility-library-interview"
    ],
    "question": "Accessibility Library: Собеседование: какой вариант лучше всего описывает тему «hidden, aria-hidden и display none»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «hidden, aria-hidden и display none» по-разному влияет на DOM, визуальное отображение и accessibility tree. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<span aria-hidden=\"true\">★</span>\n<span class=\"sr-only\">Избранное</span>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-hidden-aria-hidden"
  },
  {
    "id": 20120,
    "moduleId": "html-accessibility-library-interview",
    "type": "Architecture",
    "difficulty": "Middle",
    "tags": [
      "html",
      "accessibility-library",
      "tabindex",
      "html-accessibility-library-interview"
    ],
    "question": "Accessibility Library: Собеседование: какой вариант лучше всего описывает тему «tabindex»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «tabindex» управляет фокусом, но положительные значения почти всегда вредят навигации. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<div tabindex=\"0\">Фокусируемая область</div>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-accessibility-library-tabindex"
  }
]
