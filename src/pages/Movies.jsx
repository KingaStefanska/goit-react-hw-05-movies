import { getQuery } from '../API/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import css from './Movies.module.css';
// css //

const Movies = () => {
  const [movies, setSearchedMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams(query !== '' ? { query: form.elements.query.value } : {});
    form.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) return;
    getQuery(query).then(setSearchedMovie);
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="query"></input>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      {movies.length > 0 && (
        <ul className={css.ul}>
          {movies.map(movie => (
            <li className={css.li} key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
