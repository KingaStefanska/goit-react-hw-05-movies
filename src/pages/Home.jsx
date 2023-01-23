import { getTrending } from '../API/Api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const useTrending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(setTrendingMovies);
  }, []);

  return (
    <>
      <h1 className={css.pageTitle}>Treading today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li className={css.li} key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default useTrending;
