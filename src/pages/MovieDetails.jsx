import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

import {
  fetchMovieDetailes,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
} from 'services/tmdbAPI';
import { formatDate } from 'services/formattedDate';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchMovieDetailes(movieId)
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);

  const formattedDate = formatDate(movie.release_date);

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go Back</Link>
      <h1>{movie.title}</h1>
      <img src={`${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`} alt="" />
      <p>{movie.overview}</p>
      <p>Released: {formattedDate}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
