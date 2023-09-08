import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/tmdbAPI';
import { Loader } from 'components/Loader/Loader';
import scrollToView from 'services/scrollToView';

import {
  ReviewsWrapper,
  ReviewsList,
  ReviewsListItem,
  ReviewsListItemText,
  Author,
  ReadMoreLink,
  SecondBtn,
  MainBtn,
  LoadMoreButtonWrapper,
} from './Reviews.styled';

const reviewsByPage = 3;
const maxWordsToShow = 20;

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(reviewsByPage);

  useEffect(() => {
    setTimeout(scrollToView, 100);

    fetchMovieReviews(movieId)
      .then(function (response) {
        setIsLoading(true);
        setReviews(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
        setError(error);
      })
      .finally(function () {
        setIsLoading(false);
      });
  }, [movieId]);

  const loadMoreReviews = () => {
    setVisibleReviews(prevVisibleReviews => prevVisibleReviews + reviewsByPage);
    setTimeout(scrollToView, 100);
  };

  const collapseReviewsList = () => {
    setVisibleReviews(reviewsByPage);
  };

  const truncateText = text => {
    const words = text.split(' ');
    if (words.length > maxWordsToShow) {
      return words.slice(0, maxWordsToShow).join(' ') + '...';
    }
    return text;
  };

  return (
    <>
      {isLoading && <Loader />}
      {error || reviews.length === 0 ? (
        <h3>Looks like there's no info about the reviews 🤷🏻‍♂️</h3>
      ) : (
        <ReviewsWrapper>
          <ReviewsList>
            {reviews.slice(0, visibleReviews).map(review => (
              <ReviewsListItem key={review.id}>
                <ReadMoreLink
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Author>{review.author}</Author>
                  <ReviewsListItemText>
                    {truncateText(review.content)}
                  </ReviewsListItemText>
                </ReadMoreLink>
              </ReviewsListItem>
            ))}
          </ReviewsList>
          <LoadMoreButtonWrapper>
            {visibleReviews < reviews.length && (
              <MainBtn type="button" onClick={loadMoreReviews}>
                Load More Reviews
              </MainBtn>
            )}
            {visibleReviews > reviewsByPage && (
              <SecondBtn type="button" onClick={collapseReviewsList}>
                Collapse List
              </SecondBtn>
            )}
          </LoadMoreButtonWrapper>
        </ReviewsWrapper>
      )}
    </>
  );
};

export default Reviews;
