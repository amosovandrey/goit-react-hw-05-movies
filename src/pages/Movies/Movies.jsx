import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearch } from 'services/tmdbAPI';
import { useEffect, useState } from 'react';

import { Wrapper } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';

import Pagination from 'components/Pagination/Pagination';
import ScrollToTop from 'components/Scroll/Scroll';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  let page = parseInt(searchParams.get('page')) || 1;

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(page);
  useEffect(() => {
    fetchMovieBySearch(query, currentPage)
      .then(function (response) {
        setIsLoading(true);
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch(function (error) {
        setError(error);
        console.error(error);
      })
      .finally(function () {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      });
  }, [currentPage, query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value, page: 1 });
    form.reset();
  };

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected + 1);
    setSearchParams({ query, page: selectedPage.selected + 1 });
  };

  return (
    <div>
      <Searchbar handleSubmit={handleSubmit} query={query} />
      <Wrapper>
        {isLoading && <Loader />}
        {error && <h2> Oops!.. Something goes wrong</h2>}
        {query && movies.length === 0 ? (
          <h2>{`Looks like there's no info about ${query}`}</h2>
        ) : (
          <>
            <MoviesList movies={movies} />
            {totalPages !== 1 && (
              <Pagination
                pageCount={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
        <ScrollToTop />
      </Wrapper>
    </div>
  );
};

export default Movies;
