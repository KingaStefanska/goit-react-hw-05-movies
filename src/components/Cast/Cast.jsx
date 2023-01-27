import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API/Api';
import css from './Cast.module.css';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <>
      <ul className={css.ul}>
        {movieCast.map(actor => (
          <li className={css.li} key={actor.id}>
            <img
              className={css.img}
              src={
                actor.profile_path
                  ? `https://www.themoviedb.org/t/p/w500/${actor.profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
              }
              alt={actor.original_name}
            />
            <h3 className={css.h3}>{actor.name}</h3>
            <p className={css.p}>As: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
