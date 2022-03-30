import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import useFilm from '../../hooks/useFilm';
import FullScreenPlayer from '../full-screen-player/fill-screen-player';
import HiddenElement from '../hidden-element/hidden-element';
import LoadingScreen from '../loading-screen/loading-screen';
import Error from '../error/error';


function Player(): JSX.Element {
  const { id } = useParams();
  const selectedFilm = useFilm(id);
  const {
    isSelectFilmLoaded,
    errorResponse } = useAppSelector(({ DATA }) => DATA);

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
