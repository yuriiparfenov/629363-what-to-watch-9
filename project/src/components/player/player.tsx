import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FullScreenPlayer from '../full-screen-player/fill-screen-player';
import HiddenElement from '../hidden-element/hidden-element';
import LoadingScreen from '../loading-screen/loading-screen';
import Error from '../error/error';
import { fetchSelectedFilmAction } from '../../store/api-action';
import { useEffect } from 'react';

function Player(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { isSelectFilmLoaded, errorResponse, selectedFilm } = useAppSelector(
    ({ DATA }) => DATA,
  );

  useEffect(() => {
    dispatch(fetchSelectedFilmAction(Number(id)));
  }, [dispatch, id]);

  if (errorResponse) {
    return <Error />;
  }

  if (!isSelectFilmLoaded || !selectedFilm) {
    return <LoadingScreen />;
  }

  return (
    <>
      <HiddenElement />

      <div className="player">
        <FullScreenPlayer film={selectedFilm} />
      </div>
    </>
  );
}

export default Player;
