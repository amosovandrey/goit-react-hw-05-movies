import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchMovieCast, IMAGE_BASE_URL, IMAGE_SIZE } from 'services/tmdbAPI';
import { Loader } from 'components/Loader/Loader';
import defaultCastPic from '../../../src/default-cast-pic.jpeg';
import scrollToView from 'services/scrollToView';
import { CastList, CastListItem, CastListItemImage } from './Cast.styled';

const actorsByPage = 5;

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
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
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
      {error ? (
        <h3>Looks like there's no info about the cast 🤷🏻‍♂️</h3>
      ) : (
        <div>
          <CastList>
            {actors.slice(0, visibleActors).map(actor => (
              <CastListItem key={actor.id}>
                {actor.profile_path ? (
                  <CastListItemImage
                    src={`${IMAGE_BASE_URL}${IMAGE_SIZE}${actor.profile_path}`}
                    alt={`${actor.name}`}
                    width="32"
                  />
                ) : (
                  <CastListItemImage
                    src={defaultCastPic}
                    alt="cast"
                    width="32"
                  />
                )}
                <p>
                  {actor.name}
                  {actor.character && <span> as {actor.character}</span>}
                </p>
              </CastListItem>
            ))}
          </CastList>
          {visibleActors < actors.length && (
            <button type="button" onClick={loadMoreActors}>
              Load More Actors
            </button>
          )}
          {visibleActors > actorsByPage && (
            <button type="button" onClick={collapseActorsList}>
              Collapse List
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Cast;
