import React, { useState } from 'react';
import { movies, MovieType } from './movies';

function Movie({ title, year }: MovieType) {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <article>
      <header>{title}</header>
      <p>
        <span className={`${hidden ? 'blurred' : 'visible'}`}>{year}</span>
      </p>
      <footer>
        <button type="button" onClick={() => setHidden(!hidden)}>
          Toggle
        </button>
      </footer>
    </article>
  );
}

function MoviesApp() {
  return (
    <main>
      {movies.map((m) => (
        <Movie title={m.title} year={m.year} key={m.id} />
      ))}
    </main>
  );
}

export default MoviesApp;
