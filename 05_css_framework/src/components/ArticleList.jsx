import React from 'react';
import Article from './Article';

function ArticleList() {
  const articles = [
    { title: "Первая статья", text: "Это текст первой статьи." },
    { title: "Вторая статья", text: "Это текст второй статьи." },
    { title: "Третья статья", text: "Это текст третьей статьи." },
    { title: "Четвертая статья", text: "Это текст четвертой статьи." }
  ];

  return (
    <main className="container">
      {articles.map((article, index) => (
        <Article key={index} title={article.title} text={article.text} />
      ))}
    </main>
  );
}

export default ArticleList;
