# Лабораторная работа: Стилизация компонентов React

## Описание лабораторной работы

В ходе лабораторной работы были созданы семь независимых версий проекта с использованием различных методов стилизации компонентов в React. Цель работы заключалась в сравнении различных подходов к стилизации и изучении их особенностей. Проект включает компоненты `Article`, `ArticleList`, `Footer`, `Header`.

## Краткая документация к проекту

Проект представляет собой блог, состоящий из следующих компонентов:
- **Article** — отображает одну статью с заголовком и текстом.
- **ArticleList** — отображает список статей.
- **Footer** — футер с годом.
- **Header** — шапка с названием блога.

Для каждой версии проекта был использован один из методов стилизации.

### Примеры использования проекта с фрагментами кода

#### 1. Исходная версия (00_initial)

Без использования стилизации. Компоненты просто возвращают JSX-разметку.

```jsx
function Article({ title, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
```

#### 2. Использование CSS-файлов (01_css)

В этой версии используются глобальные и локальные стили в отдельном CSS-файле.

```css
/* styles.css */
article {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
```

```jsx
import './styles.css';

function Article({ title, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
```

#### 3. Использование SCSS (02_scss)

В этой версии используется SCSS с переменными и вложенностью.

```scss
// styles.scss
$border-color: #ddd;

article {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid $border-color;
  
  h2 {
    font-size: 1.5em;
  }
}
```

#### 4. Использование CSS-модулей (03_css_modules)

CSS-модули для инкапсуляции стилей.

```css
/* Article.module.css */
.article {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
```

```jsx
import styles from './Article.module.css';

function Article({ title, text }) {
  return (
    <article className={styles.article}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
```

#### 5. Использование CSS-in-JS (04_css_in_js)

Использование библиотеки `styled-components`.

```jsx
import styled from 'styled-components';

const ArticleStyled = styled.article`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  
  h2 {
    font-size: 1.5em;
  }
`;

function Article({ title, text }) {
  return (
    <ArticleStyled>
      <h2>{title}</h2>
      <p>{text}</p>
    </ArticleStyled>
  );
}
```

#### 6. Использование CSS-фреймворка Bootstrap (05_css_framework)

В этой версии используется фреймворк Bootstrap для стилизации.

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mini-Blog</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

```jsx
import { Card, CardContent, Typography } from '@mui/material';

function Article({ title, text }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{text}</Typography>
      </CardContent>
    </Card>
  );
}
```

#### 7. Использование библиотеки компонентов (06_component_library)

Использование библиотеки компонентов, такой как Material-UI или Chakra UI.

```jsx
import { Card, CardContent, Typography } from '@mui/material';

function Article({ title, text }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{text}</Typography>
      </CardContent>
    </Card>
  );
}
```

## Ответы на контрольные вопросы

1. **Какие из методов стилизации предпочтительнее использовать в больших проектах и почему?**
   - В больших проектах предпочтительнее использовать **CSS-модули** или **CSS-in-JS**, так как они позволяют избегать конфликтов имен классов и обеспечивают лучшую инкапсуляцию стилей. **CSS-in-JS** еще более гибок, так как позволяет динамически генерировать стили в зависимости от состояния компонента.

2. **Какие преимущества и недостатки имеют CSS-фреймворки по сравнению с другими методами стилизации?**
   - **Преимущества**:
     - Быстрое начало работы благодаря предустановленным стилям.
     - Стандартизированные стили, которые обеспечивают единообразный внешний вид.
   - **Недостатки**:
     - Привязка к фреймворку, что может затруднить дальнейшую настройку и кастомизацию.
     - Избыточность стилей, если проект маленький.

3. **В чем отличие CSS-модулей от обычных CSS-файлов и SCSS?**
   - **CSS-модули** обеспечивают локальную область видимости стилей для компонентов, предотвращая конфликты имен классов, в отличие от обычных **CSS-файлов** и **SCSS**, которые являются глобальными. **SCSS** предоставляет дополнительные возможности, такие как вложенность и переменные.

4. **Какие преимущества и недостатки имеет использование CSS-in-JS по сравнению с другими методами стилизации?**
   - **Преимущества**:
     - Стили интегрированы с компонентами, что позволяет улучшить их поддержку.
     - Поддержка динамических стилей, таких как состояние компонентов.
   - **Недостатки**:
     - Могут возникать проблемы с производительностью при большом количестве динамических стилей.
     - Потребность в дополнительной библиотеке для работы с CSS.

## Список использованных источников

- [Официальная документация React](https://reactjs.org/)
- [Официальная документация styled-components](https://styled-components.com/)

