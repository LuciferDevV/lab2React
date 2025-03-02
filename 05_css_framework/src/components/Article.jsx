import React from 'react';

function Article({ title, text }) {
  return (
    <article className="card my-3 p-3 border">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </article>
  );
}

export default Article;
