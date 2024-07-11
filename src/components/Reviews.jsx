import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api';
import styles from '../styles/Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      const reviewData = await fetchMovieReviews(movieId);
      setReviews(reviewData);
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default Reviews;
