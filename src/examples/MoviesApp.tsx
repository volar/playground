import { movies, MovieType } from './movies';
import { useState } from 'react';

const Movie = ({ title, year }: MovieType) => {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <article>
      <header>{title}</header>
      <p>
        <span className={`${hidden ? 'blurred' : 'visible'}`}>{year}</span>
      </p>
      <footer>
        <button onClick={() => setHidden(!hidden)}>Toggle</button>
      </footer>
    </article>
  );
};

const MoviesApp = () => {
  return (
    <main>
      {movies.map((m) => (
        <Movie title={m.title} year={m.year} key={m.id} />
      ))}
    </main>
  );
};

export default MoviesApp;
