import type { ContentQuestion } from '../../../../../types/content'

export const finalHtmlTrialQuestions: ContentQuestion[] = [
  {
    "id": 20136,
    "moduleId": "html-final-html-trial-semantics-audit",
    "type": "Architecture",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "html-audit",
      "html-final-html-trial-semantics-audit"
    ],
    "question": "Final HTML Trial: Аудит семантики: какой вариант лучше всего описывает тему «Аудит HTML-разметки»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Аудит HTML-разметки» объединяет семантику, доступность, формы, медиа и metadata в одной проверке. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<main>\n  <h1>Профиль</h1>\n  <form>...</form>\n</main>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-html-audit"
  },
  {
    "id": 20137,
    "moduleId": "html-final-html-trial-semantics-audit",
    "type": "Theory",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "blank-security",
      "html-final-html-trial-semantics-audit"
    ],
    "question": "Final HTML Trial: Аудит семантики: какой вариант лучше всего описывает тему «Безопасность внешних ссылок»?",
    "answers": [
      {
        "id": "a",
        "text": "Безопасность внешних ссылок используют для выражения смысла: тема требует rel noopener noreferrer для target blank."
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
    "explanation": "Правильный ответ связан с тем, что тема «Безопасность внешних ссылок» требует rel noopener noreferrer для target blank. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://example.com\">Документация</a>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-blank-security"
  },
  {
    "id": 20138,
    "moduleId": "html-final-html-trial-semantics-audit",
    "type": "CodeOutput",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "table-scope-final",
      "html-final-html-trial-semantics-audit"
    ],
    "question": "Final HTML Trial: Аудит семантики: какой вариант лучше всего описывает тему «scope в таблицах»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «scope в таблицах»."
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
    "explanation": "Правильный ответ связан с тем, что тема «scope в таблицах» связывает th с соответствующими строками или колонками. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<th scope=\"col\">Статус</th>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-table-scope-final"
  },
  {
    "id": 20139,
    "moduleId": "html-final-html-trial-semantics-audit",
    "type": "FindBug",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "metadata-order-final",
      "html-final-html-trial-semantics-audit"
    ],
    "question": "Final HTML Trial: Аудит семантики: какой вариант лучше всего описывает тему «Порядок metadata в head»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «Порядок metadata в head»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Порядок metadata в head» требует раннего charset и доступности важных SEO-тегов без JavaScript. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<head>\n  <meta charset=\"utf-8\">\n  <title>Страница</title>\n</head>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-metadata-order-final"
  },
  {
    "id": 20140,
    "moduleId": "html-final-html-trial-semantics-audit",
    "type": "BestPractice",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "section-heading-rule",
      "html-final-html-trial-semantics-audit"
    ],
    "question": "Final HTML Trial: Аудит семантики: какой вариант лучше всего описывает тему «section требует заголовок»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «section требует заголовок» даёт тематическому разделу понятное имя через заголовок или aria-label. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<section aria-labelledby=\"pricing-title\">\n  <h2 id=\"pricing-title\">Тарифы</h2>\n</section>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-section-heading-rule"
  },
  {
    "id": 20141,
    "moduleId": "html-final-html-trial-semantics-audit",
    "type": "Interview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "multiple-header",
      "html-final-html-trial-semantics-audit"
    ],
    "question": "Final HTML Trial: Аудит семантики: какой вариант лучше всего описывает тему «Несколько header»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «Несколько header» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «Несколько header» позволяет иметь header у страницы и у отдельных article или section. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<article>\n  <header><h2>Отчёт</h2></header>\n</article>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-multiple-header"
  },
  {
    "id": 20142,
    "moduleId": "html-final-html-trial-semantics-audit",
    "type": "Scenario",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "placeholder-label",
      "html-final-html-trial-semantics-audit"
    ],
    "question": "Final HTML Trial: Аудит семантики: какой вариант лучше всего описывает тему «placeholder не заменяет label»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «placeholder не заменяет label» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «placeholder не заменяет label» не является полноценной подписью поля и исчезает при вводе. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<label for=\"search\">Поиск</label>\n<input id=\"search\" name=\"q\" placeholder=\"Например, HTML\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-placeholder-label"
  },
  {
    "id": 20143,
    "moduleId": "html-final-html-trial-semantics-audit",
    "type": "CodeReview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "defer-vs-async",
      "html-final-html-trial-semantics-audit"
    ],
    "question": "Final HTML Trial: Аудит семантики: какой вариант лучше всего описывает тему «defer против async»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «defer против async» сохраняет порядок выполнения после парсинга, в отличие от async. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<script src=\"vendor.js\" defer></script>\n<script src=\"app.js\" defer></script>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-defer-vs-async"
  },
  {
    "id": 20144,
    "moduleId": "html-final-html-trial-semantics-audit",
    "type": "Architecture",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "html-audit",
      "html-final-html-trial-semantics-audit"
    ],
    "question": "Final HTML Trial: Аудит семантики: какой вариант лучше всего описывает тему «Аудит HTML-разметки»? Сценарий 2.",
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
    "explanation": "Правильный ответ связан с тем, что тема «Аудит HTML-разметки» объединяет семантику, доступность, формы, медиа и metadata в одной проверке. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<main>\n  <h1>Профиль</h1>\n  <form>...</form>\n</main>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-html-audit"
  },
  {
    "id": 20145,
    "moduleId": "html-final-html-trial-forms-a11y",
    "type": "Theory",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "blank-security",
      "html-final-html-trial-forms-a11y"
    ],
    "question": "Final HTML Trial: Формы и доступность: какой вариант лучше всего описывает тему «Безопасность внешних ссылок»?",
    "answers": [
      {
        "id": "a",
        "text": "Безопасность внешних ссылок используют для выражения смысла: тема требует rel noopener noreferrer для target blank."
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
    "explanation": "Правильный ответ связан с тем, что тема «Безопасность внешних ссылок» требует rel noopener noreferrer для target blank. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://example.com\">Документация</a>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-blank-security"
  },
  {
    "id": 20146,
    "moduleId": "html-final-html-trial-forms-a11y",
    "type": "CodeOutput",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "table-scope-final",
      "html-final-html-trial-forms-a11y"
    ],
    "question": "Final HTML Trial: Формы и доступность: какой вариант лучше всего описывает тему «scope в таблицах»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «scope в таблицах»."
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
    "explanation": "Правильный ответ связан с тем, что тема «scope в таблицах» связывает th с соответствующими строками или колонками. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<th scope=\"col\">Статус</th>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-table-scope-final"
  },
  {
    "id": 20147,
    "moduleId": "html-final-html-trial-forms-a11y",
    "type": "FindBug",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "metadata-order-final",
      "html-final-html-trial-forms-a11y"
    ],
    "question": "Final HTML Trial: Формы и доступность: какой вариант лучше всего описывает тему «Порядок metadata в head»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «Порядок metadata в head»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Порядок metadata в head» требует раннего charset и доступности важных SEO-тегов без JavaScript. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<head>\n  <meta charset=\"utf-8\">\n  <title>Страница</title>\n</head>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-metadata-order-final"
  },
  {
    "id": 20148,
    "moduleId": "html-final-html-trial-forms-a11y",
    "type": "BestPractice",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "section-heading-rule",
      "html-final-html-trial-forms-a11y"
    ],
    "question": "Final HTML Trial: Формы и доступность: какой вариант лучше всего описывает тему «section требует заголовок»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «section требует заголовок» даёт тематическому разделу понятное имя через заголовок или aria-label. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<section aria-labelledby=\"pricing-title\">\n  <h2 id=\"pricing-title\">Тарифы</h2>\n</section>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-section-heading-rule"
  },
  {
    "id": 20149,
    "moduleId": "html-final-html-trial-forms-a11y",
    "type": "Interview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "multiple-header",
      "html-final-html-trial-forms-a11y"
    ],
    "question": "Final HTML Trial: Формы и доступность: какой вариант лучше всего описывает тему «Несколько header»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «Несколько header» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «Несколько header» позволяет иметь header у страницы и у отдельных article или section. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<article>\n  <header><h2>Отчёт</h2></header>\n</article>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-multiple-header"
  },
  {
    "id": 20150,
    "moduleId": "html-final-html-trial-forms-a11y",
    "type": "Scenario",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "placeholder-label",
      "html-final-html-trial-forms-a11y"
    ],
    "question": "Final HTML Trial: Формы и доступность: какой вариант лучше всего описывает тему «placeholder не заменяет label»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «placeholder не заменяет label» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «placeholder не заменяет label» не является полноценной подписью поля и исчезает при вводе. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<label for=\"search\">Поиск</label>\n<input id=\"search\" name=\"q\" placeholder=\"Например, HTML\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-placeholder-label"
  },
  {
    "id": 20151,
    "moduleId": "html-final-html-trial-forms-a11y",
    "type": "CodeReview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "defer-vs-async",
      "html-final-html-trial-forms-a11y"
    ],
    "question": "Final HTML Trial: Формы и доступность: какой вариант лучше всего описывает тему «defer против async»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «defer против async» сохраняет порядок выполнения после парсинга, в отличие от async. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<script src=\"vendor.js\" defer></script>\n<script src=\"app.js\" defer></script>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-defer-vs-async"
  },
  {
    "id": 20152,
    "moduleId": "html-final-html-trial-forms-a11y",
    "type": "Architecture",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "html-audit",
      "html-final-html-trial-forms-a11y"
    ],
    "question": "Final HTML Trial: Формы и доступность: какой вариант лучше всего описывает тему «Аудит HTML-разметки»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Аудит HTML-разметки» объединяет семантику, доступность, формы, медиа и metadata в одной проверке. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<main>\n  <h1>Профиль</h1>\n  <form>...</form>\n</main>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-html-audit"
  },
  {
    "id": 20153,
    "moduleId": "html-final-html-trial-forms-a11y",
    "type": "Theory",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "blank-security",
      "html-final-html-trial-forms-a11y"
    ],
    "question": "Final HTML Trial: Формы и доступность: какой вариант лучше всего описывает тему «Безопасность внешних ссылок»? Сценарий 2.",
    "answers": [
      {
        "id": "a",
        "text": "Безопасность внешних ссылок используют для выражения смысла: тема требует rel noopener noreferrer для target blank."
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
    "explanation": "Правильный ответ связан с тем, что тема «Безопасность внешних ссылок» требует rel noopener noreferrer для target blank. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://example.com\">Документация</a>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-blank-security"
  },
  {
    "id": 20154,
    "moduleId": "html-final-html-trial-media-metadata",
    "type": "CodeOutput",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "table-scope-final",
      "html-final-html-trial-media-metadata"
    ],
    "question": "Final HTML Trial: Медиа и метаданные: какой вариант лучше всего описывает тему «scope в таблицах»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «scope в таблицах»."
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
    "explanation": "Правильный ответ связан с тем, что тема «scope в таблицах» связывает th с соответствующими строками или колонками. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<th scope=\"col\">Статус</th>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-table-scope-final"
  },
  {
    "id": 20155,
    "moduleId": "html-final-html-trial-media-metadata",
    "type": "FindBug",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "metadata-order-final",
      "html-final-html-trial-media-metadata"
    ],
    "question": "Final HTML Trial: Медиа и метаданные: какой вариант лучше всего описывает тему «Порядок metadata в head»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «Порядок metadata в head»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Порядок metadata в head» требует раннего charset и доступности важных SEO-тегов без JavaScript. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<head>\n  <meta charset=\"utf-8\">\n  <title>Страница</title>\n</head>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-metadata-order-final"
  },
  {
    "id": 20156,
    "moduleId": "html-final-html-trial-media-metadata",
    "type": "BestPractice",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "section-heading-rule",
      "html-final-html-trial-media-metadata"
    ],
    "question": "Final HTML Trial: Медиа и метаданные: какой вариант лучше всего описывает тему «section требует заголовок»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «section требует заголовок» даёт тематическому разделу понятное имя через заголовок или aria-label. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<section aria-labelledby=\"pricing-title\">\n  <h2 id=\"pricing-title\">Тарифы</h2>\n</section>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-section-heading-rule"
  },
  {
    "id": 20157,
    "moduleId": "html-final-html-trial-media-metadata",
    "type": "Interview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "multiple-header",
      "html-final-html-trial-media-metadata"
    ],
    "question": "Final HTML Trial: Медиа и метаданные: какой вариант лучше всего описывает тему «Несколько header»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «Несколько header» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «Несколько header» позволяет иметь header у страницы и у отдельных article или section. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<article>\n  <header><h2>Отчёт</h2></header>\n</article>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-multiple-header"
  },
  {
    "id": 20158,
    "moduleId": "html-final-html-trial-media-metadata",
    "type": "Scenario",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "placeholder-label",
      "html-final-html-trial-media-metadata"
    ],
    "question": "Final HTML Trial: Медиа и метаданные: какой вариант лучше всего описывает тему «placeholder не заменяет label»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «placeholder не заменяет label» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «placeholder не заменяет label» не является полноценной подписью поля и исчезает при вводе. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<label for=\"search\">Поиск</label>\n<input id=\"search\" name=\"q\" placeholder=\"Например, HTML\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-placeholder-label"
  },
  {
    "id": 20159,
    "moduleId": "html-final-html-trial-media-metadata",
    "type": "CodeReview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "defer-vs-async",
      "html-final-html-trial-media-metadata"
    ],
    "question": "Final HTML Trial: Медиа и метаданные: какой вариант лучше всего описывает тему «defer против async»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «defer против async» сохраняет порядок выполнения после парсинга, в отличие от async. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<script src=\"vendor.js\" defer></script>\n<script src=\"app.js\" defer></script>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-defer-vs-async"
  },
  {
    "id": 20160,
    "moduleId": "html-final-html-trial-media-metadata",
    "type": "Architecture",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "html-audit",
      "html-final-html-trial-media-metadata"
    ],
    "question": "Final HTML Trial: Медиа и метаданные: какой вариант лучше всего описывает тему «Аудит HTML-разметки»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Аудит HTML-разметки» объединяет семантику, доступность, формы, медиа и metadata в одной проверке. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<main>\n  <h1>Профиль</h1>\n  <form>...</form>\n</main>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-html-audit"
  },
  {
    "id": 20161,
    "moduleId": "html-final-html-trial-media-metadata",
    "type": "Theory",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "blank-security",
      "html-final-html-trial-media-metadata"
    ],
    "question": "Final HTML Trial: Медиа и метаданные: какой вариант лучше всего описывает тему «Безопасность внешних ссылок»?",
    "answers": [
      {
        "id": "a",
        "text": "Безопасность внешних ссылок используют для выражения смысла: тема требует rel noopener noreferrer для target blank."
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
    "explanation": "Правильный ответ связан с тем, что тема «Безопасность внешних ссылок» требует rel noopener noreferrer для target blank. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://example.com\">Документация</a>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-blank-security"
  },
  {
    "id": 20162,
    "moduleId": "html-final-html-trial-media-metadata",
    "type": "CodeOutput",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "table-scope-final",
      "html-final-html-trial-media-metadata"
    ],
    "question": "Final HTML Trial: Медиа и метаданные: какой вариант лучше всего описывает тему «scope в таблицах»? Сценарий 2.",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «scope в таблицах»."
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
    "explanation": "Правильный ответ связан с тем, что тема «scope в таблицах» связывает th с соответствующими строками или колонками. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<th scope=\"col\">Статус</th>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-table-scope-final"
  },
  {
    "id": 20163,
    "moduleId": "html-final-html-trial-code-review",
    "type": "FindBug",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "metadata-order-final",
      "html-final-html-trial-code-review"
    ],
    "question": "Final HTML Trial: HTML Code Review: какой вариант лучше всего описывает тему «Порядок metadata в head»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «Порядок metadata в head»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Порядок metadata в head» требует раннего charset и доступности важных SEO-тегов без JavaScript. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<head>\n  <meta charset=\"utf-8\">\n  <title>Страница</title>\n</head>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-metadata-order-final"
  },
  {
    "id": 20164,
    "moduleId": "html-final-html-trial-code-review",
    "type": "BestPractice",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "section-heading-rule",
      "html-final-html-trial-code-review"
    ],
    "question": "Final HTML Trial: HTML Code Review: какой вариант лучше всего описывает тему «section требует заголовок»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «section требует заголовок» даёт тематическому разделу понятное имя через заголовок или aria-label. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<section aria-labelledby=\"pricing-title\">\n  <h2 id=\"pricing-title\">Тарифы</h2>\n</section>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-section-heading-rule"
  },
  {
    "id": 20165,
    "moduleId": "html-final-html-trial-code-review",
    "type": "Interview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "multiple-header",
      "html-final-html-trial-code-review"
    ],
    "question": "Final HTML Trial: HTML Code Review: какой вариант лучше всего описывает тему «Несколько header»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «Несколько header» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «Несколько header» позволяет иметь header у страницы и у отдельных article или section. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<article>\n  <header><h2>Отчёт</h2></header>\n</article>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-multiple-header"
  },
  {
    "id": 20166,
    "moduleId": "html-final-html-trial-code-review",
    "type": "Scenario",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "placeholder-label",
      "html-final-html-trial-code-review"
    ],
    "question": "Final HTML Trial: HTML Code Review: какой вариант лучше всего описывает тему «placeholder не заменяет label»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «placeholder не заменяет label» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «placeholder не заменяет label» не является полноценной подписью поля и исчезает при вводе. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<label for=\"search\">Поиск</label>\n<input id=\"search\" name=\"q\" placeholder=\"Например, HTML\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-placeholder-label"
  },
  {
    "id": 20167,
    "moduleId": "html-final-html-trial-code-review",
    "type": "CodeReview",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "defer-vs-async",
      "html-final-html-trial-code-review"
    ],
    "question": "Final HTML Trial: HTML Code Review: какой вариант лучше всего описывает тему «defer против async»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «defer против async» сохраняет порядок выполнения после парсинга, в отличие от async. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<script src=\"vendor.js\" defer></script>\n<script src=\"app.js\" defer></script>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-defer-vs-async"
  },
  {
    "id": 20168,
    "moduleId": "html-final-html-trial-code-review",
    "type": "Architecture",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "html-audit",
      "html-final-html-trial-code-review"
    ],
    "question": "Final HTML Trial: HTML Code Review: какой вариант лучше всего описывает тему «Аудит HTML-разметки»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Аудит HTML-разметки» объединяет семантику, доступность, формы, медиа и metadata в одной проверке. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<main>\n  <h1>Профиль</h1>\n  <form>...</form>\n</main>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-html-audit"
  },
  {
    "id": 20169,
    "moduleId": "html-final-html-trial-code-review",
    "type": "Theory",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "blank-security",
      "html-final-html-trial-code-review"
    ],
    "question": "Final HTML Trial: HTML Code Review: какой вариант лучше всего описывает тему «Безопасность внешних ссылок»?",
    "answers": [
      {
        "id": "a",
        "text": "Безопасность внешних ссылок используют для выражения смысла: тема требует rel noopener noreferrer для target blank."
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
    "explanation": "Правильный ответ связан с тем, что тема «Безопасность внешних ссылок» требует rel noopener noreferrer для target blank. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://example.com\">Документация</a>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-blank-security"
  },
  {
    "id": 20170,
    "moduleId": "html-final-html-trial-code-review",
    "type": "CodeOutput",
    "difficulty": "MiddlePlus",
    "tags": [
      "html",
      "final-html-trial",
      "table-scope-final",
      "html-final-html-trial-code-review"
    ],
    "question": "Final HTML Trial: HTML Code Review: какой вариант лучше всего описывает тему «scope в таблицах»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «scope в таблицах»."
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
    "explanation": "Правильный ответ связан с тем, что тема «scope в таблицах» связывает th с соответствующими строками или колонками. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<th scope=\"col\">Статус</th>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-table-scope-final"
  },
  {
    "id": 20171,
    "moduleId": "html-final-html-trial-code-review",
    "type": "FindBug",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "metadata-order-final",
      "html-final-html-trial-code-review"
    ],
    "question": "Final HTML Trial: HTML Code Review: какой вариант лучше всего описывает тему «Порядок metadata в head»? Сценарий 2.",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «Порядок metadata в head»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Порядок metadata в head» требует раннего charset и доступности важных SEO-тегов без JavaScript. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<head>\n  <meta charset=\"utf-8\">\n  <title>Страница</title>\n</head>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-metadata-order-final"
  },
  {
    "id": 20172,
    "moduleId": "html-final-html-trial-final-interview",
    "type": "BestPractice",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "section-heading-rule",
      "html-final-html-trial-final-interview"
    ],
    "question": "Final HTML Trial: Финальное интервью: какой вариант лучше всего описывает тему «section требует заголовок»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «section требует заголовок» даёт тематическому разделу понятное имя через заголовок или aria-label. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<section aria-labelledby=\"pricing-title\">\n  <h2 id=\"pricing-title\">Тарифы</h2>\n</section>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-section-heading-rule"
  },
  {
    "id": 20173,
    "moduleId": "html-final-html-trial-final-interview",
    "type": "Interview",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "multiple-header",
      "html-final-html-trial-final-interview"
    ],
    "question": "Final HTML Trial: Финальное интервью: какой вариант лучше всего описывает тему «Несколько header»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «Несколько header» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «Несколько header» позволяет иметь header у страницы и у отдельных article или section. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<article>\n  <header><h2>Отчёт</h2></header>\n</article>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-multiple-header"
  },
  {
    "id": 20174,
    "moduleId": "html-final-html-trial-final-interview",
    "type": "Scenario",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "placeholder-label",
      "html-final-html-trial-final-interview"
    ],
    "question": "Final HTML Trial: Финальное интервью: какой вариант лучше всего описывает тему «placeholder не заменяет label»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «placeholder не заменяет label» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «placeholder не заменяет label» не является полноценной подписью поля и исчезает при вводе. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<label for=\"search\">Поиск</label>\n<input id=\"search\" name=\"q\" placeholder=\"Например, HTML\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-placeholder-label"
  },
  {
    "id": 20175,
    "moduleId": "html-final-html-trial-final-interview",
    "type": "CodeReview",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "defer-vs-async",
      "html-final-html-trial-final-interview"
    ],
    "question": "Final HTML Trial: Финальное интервью: какой вариант лучше всего описывает тему «defer против async»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «defer против async» сохраняет порядок выполнения после парсинга, в отличие от async. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<script src=\"vendor.js\" defer></script>\n<script src=\"app.js\" defer></script>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-defer-vs-async"
  },
  {
    "id": 20176,
    "moduleId": "html-final-html-trial-final-interview",
    "type": "Architecture",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "html-audit",
      "html-final-html-trial-final-interview"
    ],
    "question": "Final HTML Trial: Финальное интервью: какой вариант лучше всего описывает тему «Аудит HTML-разметки»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Аудит HTML-разметки» объединяет семантику, доступность, формы, медиа и metadata в одной проверке. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<main>\n  <h1>Профиль</h1>\n  <form>...</form>\n</main>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-html-audit"
  },
  {
    "id": 20177,
    "moduleId": "html-final-html-trial-final-interview",
    "type": "Theory",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "blank-security",
      "html-final-html-trial-final-interview"
    ],
    "question": "Final HTML Trial: Финальное интервью: какой вариант лучше всего описывает тему «Безопасность внешних ссылок»?",
    "answers": [
      {
        "id": "a",
        "text": "Безопасность внешних ссылок используют для выражения смысла: тема требует rel noopener noreferrer для target blank."
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
    "explanation": "Правильный ответ связан с тем, что тема «Безопасность внешних ссылок» требует rel noopener noreferrer для target blank. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://example.com\">Документация</a>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-blank-security"
  },
  {
    "id": 20178,
    "moduleId": "html-final-html-trial-final-interview",
    "type": "CodeOutput",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "table-scope-final",
      "html-final-html-trial-final-interview"
    ],
    "question": "Final HTML Trial: Финальное интервью: какой вариант лучше всего описывает тему «scope в таблицах»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «scope в таблицах»."
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
    "explanation": "Правильный ответ связан с тем, что тема «scope в таблицах» связывает th с соответствующими строками или колонками. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<th scope=\"col\">Статус</th>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-table-scope-final"
  },
  {
    "id": 20179,
    "moduleId": "html-final-html-trial-final-interview",
    "type": "FindBug",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "metadata-order-final",
      "html-final-html-trial-final-interview"
    ],
    "question": "Final HTML Trial: Финальное интервью: какой вариант лучше всего описывает тему «Порядок metadata в head»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «Порядок metadata в head»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Порядок metadata в head» требует раннего charset и доступности важных SEO-тегов без JavaScript. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<head>\n  <meta charset=\"utf-8\">\n  <title>Страница</title>\n</head>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-metadata-order-final"
  },
  {
    "id": 20180,
    "moduleId": "html-final-html-trial-final-interview",
    "type": "BestPractice",
    "difficulty": "Senior",
    "tags": [
      "html",
      "final-html-trial",
      "section-heading-rule",
      "html-final-html-trial-final-interview"
    ],
    "question": "Final HTML Trial: Финальное интервью: какой вариант лучше всего описывает тему «section требует заголовок»? Сценарий 2.",
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
    "explanation": "Правильный ответ связан с тем, что тема «section требует заголовок» даёт тематическому разделу понятное имя через заголовок или aria-label. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<section aria-labelledby=\"pricing-title\">\n  <h2 id=\"pricing-title\">Тарифы</h2>\n</section>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-final-html-trial-section-heading-rule"
  }
]
