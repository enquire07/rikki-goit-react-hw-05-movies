import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies, fetchGenres } from '../api';
import styles from '../styles/Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const getGenres = async () => {
      const genreList = await fetchGenres();
      const genreMap = {};
      genreList.forEach(genre => {
        genreMap[genre.id] = genre.name;
      });
      setGenres(genreMap);
    };

    getGenres();
  }, []);

  const handleSearch = async e => {
    e.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className={styles.movies}>
      <nav>
        <Link to="/">HOME</Link>
      </nav>

      <h2>Search Movies</h2>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
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

export default Movies;
