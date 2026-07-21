import type { ContentQuestion } from '../../../../../types/content'

export const formSanctuaryQuestions: ContentQuestion[] = [
  {
    "id": 20091,
    "moduleId": "html-form-sanctuary-basics",
    "type": "FindBug",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "input-types",
      "html-form-sanctuary-basics"
    ],
    "question": "Form Sanctuary: Базовая миссия: какой вариант лучше всего описывает тему «Типы input»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «Типы input»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Типы input» подсказывает формат поля, клавиатуру и базовую валидацию. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<input type=\"email\" name=\"email\" autocomplete=\"email\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-input-types"
  },
  {
    "id": 20092,
    "moduleId": "html-form-sanctuary-basics",
    "type": "BestPractice",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "required-pattern-length",
      "html-form-sanctuary-basics"
    ],
    "question": "Form Sanctuary: Базовая миссия: какой вариант лучше всего описывает тему «required, pattern и длина»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «required, pattern и длина» включает базовую клиентскую валидацию без JavaScript. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<input name=\"code\" required pattern=\"[0-9]{4}\" minlength=\"4\" maxlength=\"4\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-required-pattern-length"
  },
  {
    "id": 20093,
    "moduleId": "html-form-sanctuary-basics",
    "type": "Interview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "disabled-readonly",
      "html-form-sanctuary-basics"
    ],
    "question": "Form Sanctuary: Базовая миссия: какой вариант лучше всего описывает тему «disabled и readonly»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «disabled и readonly» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «disabled и readonly» разделяет неотправляемое отключённое поле и нередактируемое значение. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<input name=\"id\" value=\"42\" readonly>\n<input name=\"token\" disabled>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-disabled-readonly"
  },
  {
    "id": 20094,
    "moduleId": "html-form-sanctuary-basics",
    "type": "Scenario",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "fieldset-legend",
      "html-form-sanctuary-basics"
    ],
    "question": "Form Sanctuary: Базовая миссия: какой вариант лучше всего описывает тему «fieldset и legend»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «fieldset и legend» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «fieldset и legend» группирует связанные поля и даёт группе имя. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<fieldset>\n  <legend>Способ связи</legend>\n  <label><input type=\"radio\" name=\"contact\" value=\"email\"> Email</label>\n</fieldset>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-fieldset-legend"
  },
  {
    "id": 20095,
    "moduleId": "html-form-sanctuary-basics",
    "type": "CodeReview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "file-upload-enctype",
      "html-form-sanctuary-basics"
    ],
    "question": "Form Sanctuary: Базовая миссия: какой вариант лучше всего описывает тему «Загрузка файлов и enctype»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Загрузка файлов и enctype» требует multipart/form-data для отправки файлов. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<form method=\"post\" enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"avatar\">\n</form>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-file-upload-enctype"
  },
  {
    "id": 20096,
    "moduleId": "html-form-sanctuary-advanced",
    "type": "Architecture",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "required-pattern-length",
      "html-form-sanctuary-advanced"
    ],
    "question": "Form Sanctuary: Продвинутая миссия: какой вариант лучше всего описывает тему «required, pattern и длина»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «required, pattern и длина» включает базовую клиентскую валидацию без JavaScript. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<input name=\"code\" required pattern=\"[0-9]{4}\" minlength=\"4\" maxlength=\"4\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-required-pattern-length"
  },
  {
    "id": 20097,
    "moduleId": "html-form-sanctuary-advanced",
    "type": "Theory",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "disabled-readonly",
      "html-form-sanctuary-advanced"
    ],
    "question": "Form Sanctuary: Продвинутая миссия: какой вариант лучше всего описывает тему «disabled и readonly»?",
    "answers": [
      {
        "id": "a",
        "text": "disabled и readonly используют для выражения смысла: тема разделяет неотправляемое отключённое поле и нередактируемое значение."
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
    "explanation": "Правильный ответ связан с тем, что тема «disabled и readonly» разделяет неотправляемое отключённое поле и нередактируемое значение. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<input name=\"id\" value=\"42\" readonly>\n<input name=\"token\" disabled>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-disabled-readonly"
  },
  {
    "id": 20098,
    "moduleId": "html-form-sanctuary-advanced",
    "type": "CodeOutput",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "fieldset-legend",
      "html-form-sanctuary-advanced"
    ],
    "question": "Form Sanctuary: Продвинутая миссия: какой вариант лучше всего описывает тему «fieldset и legend»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Браузер построит DOM с учётом правил HTML и семантики «fieldset и legend»."
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
    "explanation": "Правильный ответ связан с тем, что тема «fieldset и legend» группирует связанные поля и даёт группе имя. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<fieldset>\n  <legend>Способ связи</legend>\n  <label><input type=\"radio\" name=\"contact\" value=\"email\"> Email</label>\n</fieldset>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-fieldset-legend"
  },
  {
    "id": 20099,
    "moduleId": "html-form-sanctuary-advanced",
    "type": "FindBug",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "file-upload-enctype",
      "html-form-sanctuary-advanced"
    ],
    "question": "Form Sanctuary: Продвинутая миссия: какой вариант лучше всего описывает тему «Загрузка файлов и enctype»?",
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
        "text": "Ошибка связана с тем, что разметка нарушает смысл или доступность темы «Загрузка файлов и enctype»."
      },
      {
        "id": "d",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      }
    ],
    "correctAnswer": "c",
    "explanation": "Правильный ответ связан с тем, что тема «Загрузка файлов и enctype» требует multipart/form-data для отправки файлов. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<form method=\"post\" enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"avatar\">\n</form>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-file-upload-enctype"
  },
  {
    "id": 20100,
    "moduleId": "html-form-sanctuary-advanced",
    "type": "BestPractice",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "form-basics",
      "html-form-sanctuary-advanced"
    ],
    "question": "Form Sanctuary: Продвинутая миссия: какой вариант лучше всего описывает тему «form, action и method»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «form, action и method» группирует поля и описывает отправку данных. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<form action=\"/feedback\" method=\"post\">\n  <button type=\"submit\">Отправить</button>\n</form>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-form-basics"
  },
  {
    "id": 20101,
    "moduleId": "html-form-sanctuary-interview",
    "type": "Interview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "disabled-readonly",
      "html-form-sanctuary-interview"
    ],
    "question": "Form Sanctuary: Собеседование: какой вариант лучше всего описывает тему «disabled и readonly»?",
    "answers": [
      {
        "id": "a",
        "text": "Нужно объяснить назначение, ограничения и влияние «disabled и readonly» на доступность и поддержку."
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
    "explanation": "Правильный ответ связан с тем, что тема «disabled и readonly» разделяет неотправляемое отключённое поле и нередактируемое значение. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<input name=\"id\" value=\"42\" readonly>\n<input name=\"token\" disabled>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-disabled-readonly"
  },
  {
    "id": 20102,
    "moduleId": "html-form-sanctuary-interview",
    "type": "Scenario",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "fieldset-legend",
      "html-form-sanctuary-interview"
    ],
    "question": "Form Sanctuary: Собеседование: какой вариант лучше всего описывает тему «fieldset и legend»?",
    "answers": [
      {
        "id": "a",
        "text": "Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей."
      },
      {
        "id": "b",
        "text": "Лучшее решение — применить «fieldset и legend» там, где эта семантика соответствует задаче."
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
    "explanation": "Правильный ответ связан с тем, что тема «fieldset и legend» группирует связанные поля и даёт группе имя. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<fieldset>\n  <legend>Способ связи</legend>\n  <label><input type=\"radio\" name=\"contact\" value=\"email\"> Email</label>\n</fieldset>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-fieldset-legend"
  },
  {
    "id": 20103,
    "moduleId": "html-form-sanctuary-interview",
    "type": "CodeReview",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "file-upload-enctype",
      "html-form-sanctuary-interview"
    ],
    "question": "Form Sanctuary: Собеседование: какой вариант лучше всего описывает тему «Загрузка файлов и enctype»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «Загрузка файлов и enctype» требует multipart/form-data для отправки файлов. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<form method=\"post\" enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"avatar\">\n</form>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-file-upload-enctype"
  },
  {
    "id": 20104,
    "moduleId": "html-form-sanctuary-interview",
    "type": "Architecture",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "form-basics",
      "html-form-sanctuary-interview"
    ],
    "question": "Form Sanctuary: Собеседование: какой вариант лучше всего описывает тему «form, action и method»?",
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
    "explanation": "Правильный ответ связан с тем, что тема «form, action и method» группирует поля и описывает отправку данных. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<form action=\"/feedback\" method=\"post\">\n  <button type=\"submit\">Отправить</button>\n</form>\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-form-basics"
  },
  {
    "id": 20105,
    "moduleId": "html-form-sanctuary-interview",
    "type": "Theory",
    "difficulty": "Middle",
    "tags": [
      "html",
      "form-sanctuary",
      "label-input",
      "html-form-sanctuary-interview"
    ],
    "question": "Form Sanctuary: Собеседование: какой вариант лучше всего описывает тему «label и input»?",
    "answers": [
      {
        "id": "a",
        "text": "label и input используют для выражения смысла: тема связывает текстовую подпись с полем и увеличивает доступность."
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
    "explanation": "Правильный ответ связан с тем, что тема «label и input» связывает текстовую подпись с полем и увеличивает доступность. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n```html\n<label for=\"email\">Email</label>\n<input id=\"email\" name=\"email\" type=\"email\">\n```\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.",
    "knowledgeId": "knowledge-html-form-sanctuary-label-input"
  }
]
