import React from 'react';
import styles from './Article.module.css';  // Импортируем файл стилей

function Article({ title, text }) {
  return (
    <article className={styles.article}> {/* Применяем класс через styles */}
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default Article;
