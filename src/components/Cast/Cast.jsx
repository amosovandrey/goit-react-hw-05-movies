import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchMovieCast, IMAGE_BASE_URL, IMAGE_SIZE } from 'services/tmdbAPI';
import { Loader } from 'components/Loader/Loader';
import defaultCastPic from '../../../src/default-cast-pic.jpeg';
import scrollToView from 'services/scrollToView';
import {
  CastList,
  CastListItem,
  CastListItemImage,
  CastListItemText,
  CastWrapper,
  CastListItemSpan,
  MainBtn,
  SecondBtn,
  ButtonWrapper,
} from './Cast.styled';

const actorsByPage = 4;

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleActors, setVisibleActors] = useState(actorsByPage);

  useEffect(() => {
    setTimeout(scrollToView, 100);

    fetchMovieCast(movieId)
      .then(function (response) {
        setIsLoading(true);
        setActors(response.data.cast);
      })
      .catch(function (error) {
        console.error(error);
        setError(error);
      })
      .finally(function () {
        setIsLoading(false);
      });
  }, [movieId]);

  const loadMoreActors = () => {
    setVisibleActors(prevVisibleActors => prevVisibleActors + actorsByPage);
    setTimeout(scrollToView, 100);
  };

  const collapseActorsList = () => {
    setVisibleActors(actorsByPage);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error || actors.length === 0 ? (
        <h3>Looks like there's no info about the cast 🤷🏻‍♂️</h3>
      ) : (
        <CastWrapper>
          <CastList>
            {actors.slice(0, visibleActors).map(actor => (
              <CastListItem key={actor.id}>
                <CastListItemImage
                  src={
                    actor.profile_path
                      ? `${IMAGE_BASE_URL}${IMAGE_SIZE}${actor.profile_path}`
                      : defaultCastPic
                  }
                  alt={`${actor.name}`}
                  width="32"
                />

                <CastListItemText>
                  {actor.name}
                  {actor.character && (
                    <CastListItemSpan>{` as ${actor.character}`}</CastListItemSpan>
                  )}
                </CastListItemText>
              </CastListItem>
            ))}
          </CastList>
          <ButtonWrapper>
            {visibleActors < actors.length && (
              <MainBtn type="button" onClick={loadMoreActors}>
                Load More Actors
              </MainBtn>
            )}
            {visibleActors > actorsByPage && (
              <SecondBtn type="button" onClick={collapseActorsList}>
                Collapse List
              </SecondBtn>
            )}
          </ButtonWrapper>
        </CastWrapper>
      )}
    </>
  );
};

export default Cast;
