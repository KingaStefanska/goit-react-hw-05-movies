import { Suspense, useRef } from 'react';
import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { getDetails } from 'API/Api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state.from ?? '/');

  useEffect(() => {
    getDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <Link className={css.backLink} to={backLink.current}>
        Go back
      </Link>
      <div className={css.div}>
        <div>
          <img
            className={css.img}
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
            }
            alt={`${movie.title}`}
          />
        </div>
        <div>
          <h2 className={css.h2}>
            {movie.title} ({movie.release_date.slice(0, 5)})
          </h2>
          <p className={css.p}>Rating: {movie.vote_average.toFixed(2)}</p>
          <h3 className={css.h3}>Overview</h3>
          <p className={css.p}>{movie.overview}</p>
          <h3 className={css.h3}>Genres</h3>
          <p className={css.p}>
            {movie.genres.map(genre => genre.name).join(' / ')}
          </p>
        </div>
      </div>
      <div>
        <h2 className={css.h2}>Additional information</h2>
        <ul>
          <li>
            <Link className={css.link} to={'cast'}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to={'reviews'}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
