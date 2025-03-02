import React from 'react';
import styled from 'styled-components';

// Создаем стилизованный компонент
const ArticleStyled = styled.article`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  
  h2 {
    font-size: 1.5em;
  }
`;

// Компонент, использующий стилизованный компонент
function Article({ title, text }) {
  return (
    <ArticleStyled>
      <h2>{title}</h2>
      <p>{text}</p>
    </ArticleStyled>
  );
}

export default Article;
