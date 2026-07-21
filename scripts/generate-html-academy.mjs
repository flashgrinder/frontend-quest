import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = join('src', 'content', 'web-foundations', 'html-academy')
const areasRoot = join(root, 'areas')
const questionTypes = ['Theory', 'CodeOutput', 'FindBug', 'BestPractice', 'Interview', 'Scenario', 'CodeReview', 'Architecture']
const answerIds = ['a', 'b', 'c', 'd']

const areas = [
  {
    id: 'document-gate',
    title: 'Document Gate',
    description: 'Входные врата HTML Academy: базовая структура документа, head, body, язык страницы, кодировка и viewport.',
    order: 1,
    accentColor: '#FFD84D',
    icon: 'DOC',
    topics: [
      ['doctype', '<!DOCTYPE html>', 'переводит браузер в standards mode для современного HTML-документа', '<!doctype html>\n<html lang="ru">\n  <head>\n    <meta charset="utf-8">\n    <title>Документ</title>\n  </head>\n  <body>\n    <main>Контент страницы</main>\n  </body>\n</html>'],
      ['html-element', 'Элемент html', 'задаёт корень документа и границы HTML-дерева', '<html lang="ru">\n  <head>...</head>\n  <body>...</body>\n</html>'],
      ['head-body', 'head и body', 'разделяют служебные метаданные и видимое содержимое страницы', '<head>\n  <title>Каталог</title>\n</head>\n<body>\n  <main>Список товаров</main>\n</body>'],
      ['lang', 'Атрибут lang', 'сообщает язык документа или фрагмента скринридерам, поиску и переводчикам', '<html lang="ru">\n  <body>\n    <p lang="en">Frontend Developer</p>\n  </body>\n</html>'],
      ['charset', 'meta charset', 'объявляет кодировку документа в начале head', '<head>\n  <meta charset="utf-8">\n  <title>Страница</title>\n</head>'],
      ['viewport', 'meta viewport', 'настраивает область просмотра на мобильных устройствах', '<meta name="viewport" content="width=device-width, initial-scale=1.0">'],
      ['html-parser', 'Разбор HTML браузером', 'строит DOM, исправляет часть ошибок и применяет правила вложенности', '<p>Первый абзац\n<p>Второй абзац</p>'],
      ['valid-nesting', 'Допустимая вложенность', 'ограничивает размещение элементов через контентные модели HTML', '<ul>\n  <li>Пункт списка</li>\n</ul>'],
    ],
  },
  {
    id: 'semantic-archives',
    title: 'Semantic Archives',
    description: 'Залы семантики: landmarks, смысловые контейнеры, article, section, nav и отличие div от структурных элементов.',
    order: 2,
    accentColor: '#F59E0B',
    icon: 'SEM',
    topics: [
      ['semantic-markup', 'Семантическая разметка', 'описывает смысл контента, а не только его внешний вид', '<main>\n  <article>\n    <h1>Новость</h1>\n    <p>Текст новости</p>\n  </article>\n</main>'],
      ['header-footer', 'header и footer', 'задают вводные и завершающие области страницы или отдельной секции', '<article>\n  <header><h2>Обзор</h2></header>\n  <p>Текст</p>\n  <footer>Автор</footer>\n</article>'],
      ['main', 'Роль main', 'обозначает главное уникальное содержимое страницы', '<body>\n  <header>Навигация</header>\n  <main>Основной контент</main>\n</body>'],
      ['nav', 'Элемент nav', 'выделяет область основной навигации, а не любую группу ссылок', '<nav aria-label="Главное меню">\n  <a href="/">Главная</a>\n</nav>'],
      ['section-vs-div', 'section и div', 'отделяет тематический раздел от нейтрального контейнера', '<section aria-labelledby="features-title">\n  <h2 id="features-title">Возможности</h2>\n</section>'],
      ['article-vs-section', 'article и section', 'различает самостоятельный материал и часть общей темы', '<article>\n  <h2>Пост блога</h2>\n  <section><h3>Выводы</h3></section>\n</article>'],
      ['aside', 'aside', 'помечает дополнительный контент, связанный с основным', '<aside>\n  <h2>Связанные материалы</h2>\n</aside>'],
      ['multiple-headings', 'Несколько h1', 'требует понятной структуры заголовков даже в современном HTML', '<main>\n  <h1>Документация</h1>\n  <section><h2>Установка</h2></section>\n</main>'],
    ],
  },
  {
    id: 'text-hall',
    title: 'Text Hall',
    description: 'Зал текста: заголовки, абзацы, списки, цитаты, inline-семантика и фрагменты кода.',
    order: 3,
    accentColor: '#FBBF24',
    icon: 'TXT',
    topics: [
      ['heading-hierarchy', 'Иерархия заголовков', 'формирует структуру страницы и помогает быстро понять содержание', '<h1>Справочник HTML</h1>\n<section>\n  <h2>Текст</h2>\n  <h3>Цитаты</h3>\n</section>'],
      ['paragraph-span', 'p и span', 'разделяет абзац и нейтральный inline-контейнер', '<p>Цена: <span class="price">1200</span> рублей</p>'],
      ['strong-em', 'strong и em', 'передаёт важность через strong и смысловое ударение через em', '<p><strong>Важно:</strong> <em>не удаляйте</em> этот файл.</p>'],
      ['b-i', 'b и i', 'помогает выделять текст без усиления смысловой важности', '<p><b>Новинка</b> <i lang="la">status quo</i></p>'],
      ['blockquote-q', 'blockquote и q', 'различает длинные блочные и короткие inline-цитаты', '<blockquote cite="https://example.com">\n  <p>Длинная цитата.</p>\n</blockquote>'],
      ['code-pre', 'code и pre', 'обозначает код и сохраняет форматирование примера', '<pre><code>const count = 1</code></pre>'],
      ['lists', 'ul, ol и li', 'выражает набор пунктов или последовательность действий', '<ol>\n  <li>Открыть форму</li>\n  <li>Заполнить поля</li>\n</ol>'],
      ['description-list', 'dl, dt и dd', 'связывает термин с описанием или характеристикой', '<dl>\n  <dt>HTML</dt>\n  <dd>Язык разметки документов.</dd>\n</dl>'],
    ],
  },
  {
    id: 'media-gallery',
    title: 'Media Gallery',
    description: 'Галерея медиа: изображения, адаптивные источники, подписи, видео, аудио и защита от сдвигов layout.',
    order: 4,
    accentColor: '#FB923C',
    icon: 'IMG',
    topics: [
      ['img-alt', 'img и alt', 'даёт изображению текстовую альтернативу, если оно несёт смысл', '<img src="chart.png" alt="Рост конверсии на 12%">'],
      ['image-size-cls', 'width и height у img', 'помогает браузеру зарезервировать место и снизить CLS', '<img src="hero.jpg" alt="Команда разработки" width="1200" height="630">'],
      ['picture-source', 'picture и source', 'выбирает источник изображения по media или type', '<picture>\n  <source srcset="hero.avif" type="image/avif">\n  <img src="hero.jpg" alt="Главный экран">\n</picture>'],
      ['srcset-sizes', 'srcset и sizes', 'позволяет браузеру выбрать подходящий ресурс для экрана', '<img src="card-800.jpg" srcset="card-400.jpg 400w, card-800.jpg 800w" sizes="(max-width: 600px) 100vw, 400px" alt="Карточка товара">'],
      ['figure-figcaption', 'figure и figcaption', 'связывает медиа или пример с подписью', '<figure>\n  <img src="diagram.png" alt="Схема процесса">\n  <figcaption>Этапы обработки запроса</figcaption>\n</figure>'],
      ['audio-video-track', 'audio, video и track', 'добавляет controls, субтитры и альтернативные дорожки', '<video controls width="640">\n  <source src="lesson.mp4" type="video/mp4">\n  <track kind="captions" src="lesson.vtt" srclang="ru" label="Русский">\n</video>'],
      ['iframe', 'iframe', 'встраивает внешний документ и требует title, sandbox и контроля разрешений', '<iframe src="map.html" title="Карта офиса" loading="lazy"></iframe>'],
      ['lazy-loading', 'loading="lazy"', 'откладывает загрузку offscreen-изображений и iframe', '<img src="gallery-12.jpg" alt="Экспонат галереи" loading="lazy">'],
    ],
  },
  {
    id: 'navigation-temple',
    title: 'Navigation Temple',
    description: 'Храм навигации: ссылки, якоря, безопасность target blank и различие ссылки и кнопки.',
    order: 5,
    accentColor: '#F97316',
    icon: 'NAV',
    topics: [
      ['anchor-href', 'a и href', 'ведёт к ресурсу или позиции документа через понятный href', '<a href="/docs/html">Открыть раздел HTML</a>'],
      ['absolute-relative-url', 'Абсолютные и относительные ссылки', 'задаёт полный адрес или путь относительно текущего документа', '<a href="../guide/forms.html">Формы</a>'],
      ['anchor-links', 'Якорные ссылки', 'переводит пользователя к элементу с соответствующим id', '<a href="#forms">К формам</a>\n<section id="forms">...</section>'],
      ['mailto-tel', 'mailto и tel', 'запускает почтовый клиент или звонок через специальные схемы URL', '<a href="mailto:team@example.com">Написать</a>\n<a href="tel:+78005553535">Позвонить</a>'],
      ['target-blank-rel', 'target blank и rel', 'защищает opener при открытии внешней ссылки в новой вкладке', '<a href="https://example.com" target="_blank" rel="noopener noreferrer">Внешний ресурс</a>'],
      ['download', 'download', 'подсказывает браузеру скачать ресурс вместо открытия', '<a href="report.pdf" download>Скачать отчёт</a>'],
      ['link-vs-button', 'Ссылка и кнопка', 'разделяет навигацию и действие на текущем экране', '<a href="/profile">Профиль</a>\n<button type="button">Сохранить</button>'],
      ['accessible-navigation', 'Доступная навигация', 'требует понятных названий, порядка фокуса и видимого focus', '<nav aria-label="Разделы документации">\n  <a href="/html">HTML</a>\n</nav>'],
    ],
  },
  {
    id: 'table-chamber',
    title: 'Table Chamber',
    description: 'Палата таблиц: табличные данные, заголовки, caption, scope и доступность сложных таблиц.',
    order: 6,
    accentColor: '#D97706',
    icon: 'TBL',
    topics: [
      ['table-purpose', 'table для табличных данных', 'описывает данные с отношениями строк и столбцов, а не layout', '<table>\n  <tr><th>Товар</th><th>Цена</th></tr>\n  <tr><td>Книга</td><td>900</td></tr>\n</table>'],
      ['caption', 'caption', 'задаёт название таблицы и помогает понять её назначение', '<table>\n  <caption>Цены подписки</caption>\n</table>'],
      ['thead-tbody-tfoot', 'thead, tbody и tfoot', 'группирует строки и делает таблицу структурнее', '<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n  <tfoot>...</tfoot>\n</table>'],
      ['th-scope', 'th и scope', 'связывает заголовок с колонкой или строкой', '<th scope="col">Месяц</th>\n<th scope="row">Январь</th>'],
      ['td-th', 'td и th', 'разделяет ячейки данных и заголовочные ячейки', '<tr>\n  <th scope="row">Итого</th>\n  <td>120</td>\n</tr>'],
      ['colspan-rowspan', 'colspan и rowspan', 'объединяет ячейки, но усложняет чтение таблицы', '<td colspan="2">Общий итог</td>'],
      ['complex-tables', 'Сложные таблицы', 'требует явных связей заголовков и аккуратной структуры', '<th id="q1">Q1</th>\n<td headers="q1 revenue">120</td>'],
      ['table-accessibility', 'Доступность таблиц', 'использует заголовки и caption для навигации по данным', '<table>\n  <caption>Расписание</caption>\n  <thead>...</thead>\n</table>'],
    ],
  },
  {
    id: 'form-sanctuary',
    title: 'Form Sanctuary',
    description: 'Святилище форм: поля, label, отправка, встроенная валидация и корректные состояния элементов.',
    order: 7,
    accentColor: '#FACC15',
    icon: 'FRM',
    topics: [
      ['form-basics', 'form, action и method', 'группирует поля и описывает отправку данных', '<form action="/feedback" method="post">\n  <button type="submit">Отправить</button>\n</form>'],
      ['label-input', 'label и input', 'связывает текстовую подпись с полем и увеличивает доступность', '<label for="email">Email</label>\n<input id="email" name="email" type="email">'],
      ['name-value', 'name и value', 'задаёт ключ и значение отправляемых данных формы', '<input name="city" value="Самара">'],
      ['input-types', 'Типы input', 'подсказывает формат поля, клавиатуру и базовую валидацию', '<input type="email" name="email" autocomplete="email">'],
      ['required-pattern-length', 'required, pattern и длина', 'включает базовую клиентскую валидацию без JavaScript', '<input name="code" required pattern="[0-9]{4}" minlength="4" maxlength="4">'],
      ['disabled-readonly', 'disabled и readonly', 'разделяет неотправляемое отключённое поле и нередактируемое значение', '<input name="id" value="42" readonly>\n<input name="token" disabled>'],
      ['fieldset-legend', 'fieldset и legend', 'группирует связанные поля и даёт группе имя', '<fieldset>\n  <legend>Способ связи</legend>\n  <label><input type="radio" name="contact" value="email"> Email</label>\n</fieldset>'],
      ['file-upload-enctype', 'Загрузка файлов и enctype', 'требует multipart/form-data для отправки файлов', '<form method="post" enctype="multipart/form-data">\n  <input type="file" name="avatar">\n</form>'],
    ],
  },
  {
    id: 'accessibility-library',
    title: 'Accessibility Library',
    description: 'Библиотека доступности: имена элементов, ARIA, клавиатура, скрытие и правило native HTML first.',
    order: 8,
    accentColor: '#A3E635',
    icon: 'A11Y',
    topics: [
      ['accessible-name', 'Доступное имя', 'даёт интерактивному элементу имя для ассистивных технологий', '<button aria-label="Закрыть окно">×</button>'],
      ['aria-label-labelledby', 'aria-label и aria-labelledby', 'задаёт имя явно или связывает элемент с видимым текстом', '<h2 id="dialog-title">Настройки</h2>\n<section aria-labelledby="dialog-title">...</section>'],
      ['aria-describedby', 'aria-describedby', 'дополняет имя элемента подсказкой или сообщением об ошибке', '<input aria-describedby="password-help">\n<p id="password-help">Минимум 12 символов.</p>'],
      ['hidden-aria-hidden', 'hidden, aria-hidden и display none', 'по-разному влияет на DOM, визуальное отображение и accessibility tree', '<span aria-hidden="true">★</span>\n<span class="sr-only">Избранное</span>'],
      ['tabindex', 'tabindex', 'управляет фокусом, но положительные значения почти всегда вредят навигации', '<div tabindex="0">Фокусируемая область</div>'],
      ['keyboard-navigation', 'Клавиатурная навигация', 'позволяет пользоваться интерфейсом без мыши и сохраняет видимый focus', '<button type="button">Открыть меню</button>'],
      ['aria-native-first', 'Сначала нативный HTML, потом ARIA', 'напоминает, что ARIA не заменяет подходящий HTML-элемент', '<button type="button">Сохранить</button>'],
      ['form-accessibility', 'Доступность форм', 'требует label, понятных ошибок, группировки и корректных состояний', '<label for="password">Пароль</label>\n<input id="password" aria-describedby="password-error">'],
    ],
  },
  {
    id: 'metadata-observatory',
    title: 'Metadata Observatory',
    description: 'Обсерватория метаданных: title, description, Open Graph, robots, favicon, scripts и структурированные данные.',
    order: 9,
    accentColor: '#FDE68A',
    icon: 'SEO',
    topics: [
      ['title-description', 'title и meta description', 'влияет на вкладку браузера и сниппеты поиска', '<title>HTML Academy</title>\n<meta name="description" content="Справочник по семантическому HTML.">'],
      ['canonical-robots', 'canonical и robots', 'помогает выбрать основной URL и управлять индексацией', '<link rel="canonical" href="https://example.com/html">\n<meta name="robots" content="index,follow">'],
      ['open-graph', 'Open Graph', 'управляет превью ссылки в социальных сетях и мессенджерах', '<meta property="og:title" content="HTML Academy">\n<meta property="og:image" content="https://example.com/og.png">'],
      ['favicon-manifest', 'favicon и manifest', 'помогает браузеру и PWA-оболочке представить сайт', '<link rel="icon" href="/favicon.svg">\n<link rel="manifest" href="/manifest.webmanifest">'],
      ['script-defer-async', 'defer и async', 'разделяет отложенное выполнение по порядку и независимую загрузку скрипта', '<script src="analytics.js" async></script>\n<script src="app.js" defer></script>'],
      ['noscript', 'noscript', 'показывает fallback, если JavaScript отключён или недоступен', '<noscript>Для работы интерактивных функций нужен JavaScript.</noscript>'],
      ['base-element', 'base', 'меняет базовый URL для относительных ссылок и ресурсов', '<base href="https://cdn.example.com/docs/">'],
      ['schema-org', 'Schema.org', 'помогает поисковым системам понять сущности страницы', '<script type="application/ld+json">{"@context":"https://schema.org"}</script>'],
    ],
  },
  {
    id: 'final-html-trial',
    title: 'Final HTML Trial',
    description: 'Финальное испытание HTML Academy: смешанные задачи по структуре, семантике, формам, медиа, доступности и метаданным.',
    order: 10,
    accentColor: '#F59E0B',
    icon: 'FIN',
    topics: [
      ['section-heading-rule', 'section требует заголовок', 'даёт тематическому разделу понятное имя через заголовок или aria-label', '<section aria-labelledby="pricing-title">\n  <h2 id="pricing-title">Тарифы</h2>\n</section>'],
      ['multiple-header', 'Несколько header', 'позволяет иметь header у страницы и у отдельных article или section', '<article>\n  <header><h2>Отчёт</h2></header>\n</article>'],
      ['placeholder-label', 'placeholder не заменяет label', 'не является полноценной подписью поля и исчезает при вводе', '<label for="search">Поиск</label>\n<input id="search" name="q" placeholder="Например, HTML">'],
      ['defer-vs-async', 'defer против async', 'сохраняет порядок выполнения после парсинга, в отличие от async', '<script src="vendor.js" defer></script>\n<script src="app.js" defer></script>'],
      ['html-audit', 'Аудит HTML-разметки', 'объединяет семантику, доступность, формы, медиа и metadata в одной проверке', '<main>\n  <h1>Профиль</h1>\n  <form>...</form>\n</main>'],
      ['blank-security', 'Безопасность внешних ссылок', 'требует rel noopener noreferrer для target blank', '<a target="_blank" rel="noopener noreferrer" href="https://example.com">Документация</a>'],
      ['table-scope-final', 'scope в таблицах', 'связывает th с соответствующими строками или колонками', '<th scope="col">Статус</th>'],
      ['metadata-order-final', 'Порядок metadata в head', 'требует раннего charset и доступности важных SEO-тегов без JavaScript', '<head>\n  <meta charset="utf-8">\n  <title>Страница</title>\n</head>'],
    ],
  },
]

const missionKinds = [
  { suffix: 'basics', label: 'Базовая миссия', difficulty: 'Junior', xp: 80, coins: 20 },
  { suffix: 'advanced', label: 'Продвинутая миссия', difficulty: 'JuniorPlus', xp: 110, coins: 28 },
  { suffix: 'interview', label: 'Собеседование', difficulty: 'Middle', xp: 140, coins: 36 },
]
const finalKinds = [
  { suffix: 'semantics-audit', label: 'Аудит семантики', difficulty: 'Middle', xp: 160, coins: 40 },
  { suffix: 'forms-a11y', label: 'Формы и доступность', difficulty: 'MiddlePlus', xp: 180, coins: 45 },
  { suffix: 'media-metadata', label: 'Медиа и метаданные', difficulty: 'MiddlePlus', xp: 180, coins: 45 },
  { suffix: 'code-review', label: 'HTML Code Review', difficulty: 'Senior', xp: 220, coins: 55 },
  { suffix: 'final-interview', label: 'Финальное интервью', difficulty: 'Senior', xp: 240, coins: 60 },
]

const rarityByIndex = ['common', 'common', 'rare', 'common', 'rare', 'epic', 'rare', 'legendary']
const camel = (id) => id.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
const stringify = (value) => JSON.stringify(value, null, 2)
const createArrayFile = (name, value, typeName) =>
  `import type { ${typeName} } from '../../../../../types/content'\n\nexport const ${name}: ${typeName}[] = ${stringify(value)}\n`

const createKnowledge = (area, topic, topicIndex) => {
  const [topicId, title, summary, code] = topic

  return {
    id: `knowledge-html-${area.id}-${topicId}`,
    moduleId: `html-${area.id}-basics`,
    questionId: 20100 + area.order * 100 + topicIndex + 1,
    title,
    category: area.title,
    rarity: rarityByIndex[topicIndex % rarityByIndex.length],
    interviewLevel: topicIndex > 5 ? 'middle' : 'junior',
    readingTime: topicIndex > 5 ? '5 мин' : '4 мин',
    whatIsIt: `${title} — это часть HTML, которая помогает браузеру, поисковым системам и ассистивным технологиям точнее понять документ. Эта тема ${summary}. Важно воспринимать HTML как смысловой контракт, а не как набор удобных контейнеров для CSS. Хорошая разметка остаётся полезной даже без стилей и JavaScript. На собеседовании такой ответ показывает понимание платформы, а не только знание названий тегов.`,
    whenToUse: `${title} используют там, где нужно явно выразить смысл соответствующей части страницы. Решение особенно важно в документах, формах, навигации, карточках контента и публичных страницах. Если подходящий нативный HTML-элемент уже существует, он обычно лучше самодельного div с классом. Для интерфейсов с большим сроком жизни такая семантика снижает стоимость поддержки и улучшает доступность.`,
    howItWorks: `Браузер разбирает HTML, строит DOM и учитывает семантику при создании accessibility tree. Поисковые системы, валидаторы и инструменты аудита тоже используют эти сигналы. Если разметка выбрана неверно, визуально страница может выглядеть нормально, но навигация с клавиатуры, скринридер или SEO-сниппет пострадают. Поэтому корректный HTML нужно проверять не только глазами, но и по поведению документа.`,
    whyImportant: `${title} важен, потому что HTML задаёт фундамент интерфейса до подключения CSS и JavaScript. Ошибка на этом уровне часто маскируется стилями, но проявляется в доступности, индексации, автоматизированном тестировании и поддержке. Для Frontend Developer это базовая зона ответственности. Уверенное объяснение темы помогает на интервью связать практику вёрстки с качеством продукта.`,
    codeExample: { language: 'html', filename: `${topicId}.html`, code },
    commonMistake: `Типичная ошибка — выбирать элемент только по внешнему виду или удобству стилизации. Например, интерактивный элемент делают из div, подпись формы заменяют placeholder, а тематический раздел создают без понятного имени. Такой код может пройти поверхностную проверку, но ломает доступность и усложняет сопровождение. Сначала стоит выбрать правильную семантику, а стили добавлять уже поверх неё.`,
    interviewQuestions: [
      `Когда стоит использовать ${title}, а когда лучше выбрать другой HTML-элемент?`,
      `Как ${title} влияет на доступность, SEO или поведение браузера?`,
      `Какая типичная ошибка встречается при работе с темой «${title}»?`,
      `Как проверить, что разметка с ${title} действительно корректна?`,
    ],
    remember: `${title} нужно оценивать по смыслу и поведению, а не по тому, как элемент выглядит после CSS. Нативный HTML обычно даёт больше пользы, чем искусственная разметка без семантики.`,
  }
}

const createQuestion = (area, mission, topic, globalIndex, knowledge) => {
  const [topicId, title, summary, code] = topic
  const correctAnswer = answerIds[globalIndex % answerIds.length]
  const type = questionTypes[globalIndex % questionTypes.length]
  const difficulty = globalIndex < 60 ? 'Junior' : globalIndex < 130 ? 'Middle' : globalIndex < 170 ? 'MiddlePlus' : 'Senior'
  const correctTextByType = {
    Theory: `${title} используют для выражения смысла: тема ${summary}.`,
    CodeOutput: `Браузер построит DOM с учётом правил HTML и семантики «${title}».`,
    FindBug: `Ошибка связана с тем, что разметка нарушает смысл или доступность темы «${title}».`,
    BestPractice: `Сначала выбирают нативный HTML по смыслу, затем добавляют CSS и JavaScript поверх него.`,
    Interview: `Нужно объяснить назначение, ограничения и влияние «${title}» на доступность и поддержку.`,
    Scenario: `Лучшее решение — применить «${title}» там, где эта семантика соответствует задаче.`,
    CodeReview: `В code review стоит проверить семантику, доступное имя, валидность и поведение без CSS.`,
    Architecture: `HTML-структура должна оставаться независимым фундаментом интерфейса и не зависеть от визуального слоя.`,
  }[type]
  const distractors = [
    'Использовать div или span всегда достаточно, потому что CSS полностью заменяет семантику HTML.',
    'Выбирать элемент нужно только по тому, как он выглядит в браузере без дополнительных стилей.',
    'Добавить ARIA ко всем элементам, даже если существует подходящий нативный HTML-элемент.',
    'Перенести смысл в JavaScript, потому что HTML отвечает только за отображение текста.',
  ]
  const answers = answerIds.map((id, answerIndex) => ({
    id,
    text: id === correctAnswer ? correctTextByType : distractors[(answerIndex + globalIndex) % distractors.length],
  }))

  return {
    id: 20000 + globalIndex + 1,
    moduleId: mission.id,
    type,
    difficulty,
    tags: ['html', area.id, topicId, mission.id],
    question: `${mission.title}: какой вариант лучше всего описывает тему «${title}»?`,
    answers,
    correctAnswer,
    explanation: `Правильный ответ связан с тем, что тема «${title}» ${summary}. HTML-разметка должна передавать смысл документа до применения CSS и JavaScript. Остальные варианты выглядят правдоподобно, но подменяют семантику внешним видом, избыточным ARIA или логикой JavaScript. В практической разработке это приводит к проблемам доступности, SEO, поддержки и автоматизированного тестирования. Пример корректного подхода:\n\n\`\`\`html\n${code}\n\`\`\`\n\nНа интервью важно объяснить не только название элемента или атрибута, но и почему он меняет поведение браузера, accessibility tree или обработку формы.`,
    knowledgeId: knowledge.id,
  }
}

rmSync(areasRoot, { recursive: true, force: true })
mkdirSync(areasRoot, { recursive: true })

const areaExports = []
const allMissions = []
const allKnowledge = []
const allQuestions = []
let globalQuestionIndex = 0

const semanticArchivesDescriptions = {
  basics:
    'Архив семантики хранит знания о структурных элементах HTML: header, nav, main, section, article, aside и footer. Научитесь выбирать элементы по смыслу и создавать понятную структуру документа.',
  advanced:
    'Исследуйте landmark-области, правила вложенности и различия между article, section и div. Разберитесь, как семантическая структура влияет на доступность, навигацию и понимание страницы браузером.',
  interview:
    'Проверьте знание семантического HTML через неоднозначные примеры, разбор распространённых ошибок и вопросы, которые часто встречаются на технических собеседованиях.',
}

for (const area of areas) {
  const areaDir = join(areasRoot, area.id)
  mkdirSync(areaDir, { recursive: true })
  const missionDefinitions = area.id === 'final-html-trial' ? finalKinds : missionKinds
  const areaMissions = missionDefinitions.map((kind, index) => ({
    id: `html-${area.id}-${kind.suffix}`,
    title: `${area.title}: ${kind.label}`,
    description:
      area.id === 'semantic-archives'
        ? semanticArchivesDescriptions[kind.suffix] ?? area.description
        : `${area.description} Эта миссия проверяет темы области «${area.title}» через практические вопросы, разбор ошибок и интервью-сценарии.`,
    difficulty: kind.difficulty,
    estimatedMinutes: area.id === 'final-html-trial' ? 28 : 18,
    questionsCount: area.id === 'final-html-trial' ? 9 : 5,
    xpReward: kind.xp,
    coinReward: kind.coins,
    color: area.accentColor,
    accentColor: area.accentColor,
    icon: area.icon,
    order: allMissions.length + index + 1,
  }))
  const areaKnowledge = area.topics.map((topic, index) => createKnowledge(area, topic, index))
  const areaQuestions = []

  for (const mission of areaMissions) {
    for (let index = 0; index < mission.questionsCount; index += 1) {
      const topic = area.topics[(index + mission.order) % area.topics.length]
      const knowledge = areaKnowledge[(index + mission.order) % areaKnowledge.length]
      const question = createQuestion(area, mission, topic, globalQuestionIndex, knowledge)
      const questionOccurrence = allQuestions.filter((item) => item.question === question.question).length

      if (questionOccurrence > 0) {
        question.question = `${question.question} Сценарий ${questionOccurrence + 1}.`
      }

      areaQuestions.push(question)
      allQuestions.push(question)
      globalQuestionIndex += 1
    }
  }

  const exportPrefix = camel(area.id)
  writeFileSync(join(areaDir, 'missions.ts'), createArrayFile(`${exportPrefix}Missions`, areaMissions, 'ContentModuleMeta'), 'utf8')
  writeFileSync(join(areaDir, 'knowledge.ts'), createArrayFile(`${exportPrefix}KnowledgeCards`, areaKnowledge, 'ContentKnowledgeCard'), 'utf8')
  writeFileSync(join(areaDir, 'questions.ts'), createArrayFile(`${exportPrefix}Questions`, areaQuestions, 'ContentQuestion'), 'utf8')
  writeFileSync(
    join(areaDir, 'index.ts'),
    `export { ${exportPrefix}Missions } from './missions'\nexport { ${exportPrefix}KnowledgeCards } from './knowledge'\nexport { ${exportPrefix}Questions } from './questions'\n`,
    'utf8',
  )

  areaExports.push({ id: area.id, prefix: exportPrefix })
  allMissions.push(...areaMissions)
  allKnowledge.push(...areaKnowledge)
}

writeFileSync(
  join(root, 'metadata.ts'),
  `export const htmlAcademyMetadata = ${stringify({
    id: 'html-academy',
    worldId: 'web-foundations',
    title: 'HTML Academy',
    description: 'Древняя цифровая академия, где изучают структуру документа, семантику, текст, медиа, формы, доступность и метаданные.',
    motto: 'Любое великое приложение начинается со структуры.',
    areasCount: areas.length,
    missionsCount: allMissions.length,
    questionsCount: allQuestions.length,
    knowledgeCardsCount: allKnowledge.length,
  })}\n`,
  'utf8',
)

const imports = areaExports.flatMap(({ id, prefix }) => [
  `import { ${prefix}KnowledgeCards } from './areas/${id}/knowledge'`,
  `import { ${prefix}Missions } from './areas/${id}/missions'`,
  `import { ${prefix}Questions } from './areas/${id}/questions'`,
])
writeFileSync(
  join(root, 'index.ts'),
  `${imports.join('\n')}\nexport { htmlAcademyMetadata } from './metadata'\n\nexport const htmlAcademyMissions = [\n${areaExports.map(({ prefix }) => `  ...${prefix}Missions,`).join('\n')}\n]\n\nexport const htmlAcademyQuestions = [\n${areaExports.map(({ prefix }) => `  ...${prefix}Questions,`).join('\n')}\n]\n\nexport const htmlAcademyKnowledgeCards = [\n${areaExports.map(({ prefix }) => `  ...${prefix}KnowledgeCards,`).join('\n')}\n]\n`,
  'utf8',
)

writeFileSync(
  join('src', 'content', 'web-foundations', 'index.ts'),
  `import { htmlAcademyKnowledgeCards, htmlAcademyMissions, htmlAcademyQuestions } from './html-academy'\n\nexport const webFoundationsModules = [\n  ...htmlAcademyMissions,\n]\n\nexport const webFoundationsQuestions = [\n  ...htmlAcademyQuestions,\n]\n\nexport const webFoundationsKnowledgeCards = [\n  ...htmlAcademyKnowledgeCards,\n]\n`,
  'utf8',
)

console.log(JSON.stringify({ areas: areas.length, missions: allMissions.length, questions: allQuestions.length, knowledgeCards: allKnowledge.length }, null, 2))
