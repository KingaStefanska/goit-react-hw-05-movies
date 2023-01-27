import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API/Api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  return (
    <div>
      {movieReviews.length > 0 ? (
        <ul className={css.ul}>
          {movieReviews.map(review => (
            <li className={css.li} key={review.id}>
              <h3 className={css.h3}>Author: {review.author}</h3>
              <p className={css.p}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie"
      )}
    </div>
  );
};

export default Reviews;
