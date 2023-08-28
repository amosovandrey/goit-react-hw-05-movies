import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <input
        type="text"
        onChange={evt => setSearchParams({ movieId: evt.target.value })}
      />
      <button onClick={() => setSearchParams()}>search</button>
      {['movie - 1', 'movie - 2', 'movie - 3'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            `🎥: {movie}`
          </Link>
        );
      })}
    </div>
  );
};
export default Movies;

// Movies: 🎥

// {['movie - 1', 'movie - 2', 'movie - 3'].map(movie => {
//         return (<Link key={movie} to={`${movie}`}>{movie}<Link/>))}
