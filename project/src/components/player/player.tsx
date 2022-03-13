import { Film } from '../../types/films';
import HiddenElement from '../hidden-element/hidden-element';

const LeftStyle: { left: string } = { left: '30%' };

type PlayerProps = {
  film: Film;
};

function Player({ film }: PlayerProps): JSX.Element {
  const { srcPicture, srcVideo } = film;
  return (
    <>
      <HiddenElement />

      <div className="player">
        <video
          src={srcVideo}
          className="player__video"
          poster={srcPicture}
        >
        </video>

        <button type="button" className="player__exit">
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value="30"
                max="100"
              >
              </progress>
              <div className="player__toggler" style={LeftStyle}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
