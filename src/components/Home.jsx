import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies, fetchGenres } from '../api';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };

    const getGenres = async () => {
      const genreList = await fetchGenres();
      const genreMap = {};
      genreList.forEach(genre => {
        genreMap[genre.id] = genre.name;
      });
      setGenres(genreMap);
    };

    getTrendingMovies();
    getGenres();
  }, []);

  return (
    <div className={styles.home}>
      <nav>
        <Link to="/movies">MOVIES</Link>
      </nav>

      <h2>Trending Movies</h2>
      <div className={styles.movieList}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.movieThumbnail}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <div className={styles.movieTitle}>{movie.title}</div>
            <div className={styles.movieGenres}>
              {movie.genre_ids.map(genreId => (
                <span key={genreId}>{genres[genreId]} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
