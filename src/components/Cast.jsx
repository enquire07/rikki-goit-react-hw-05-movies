import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api';
import styles from '../styles/Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      const castData = await fetchMovieCredits(movieId);
      setCast(castData);
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <div className={styles.cast}>
      <h3>Cast</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
