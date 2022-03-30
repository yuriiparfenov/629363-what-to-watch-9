import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { START_CURRENT_TIME } from '../../const';
import { Film } from '../../types/films';
import { useNavigate } from 'react-router-dom';
dayjs.extend(duration);

type FullScreenPlayerProps = {
  film: Film;
};

function FullScreenPlayer({ film }: FullScreenPlayerProps): JSX.Element {
  const { posterImage, videoLink, name } = film;
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isNowPlaying, setIsNowPlaying] = useState(true);
  const [isChangeButton, setIsChangeButton] = useState(false);
  const [videoDuration, setVideoDuration] = useState(videoRef.current?.duration);
  const [progressVideo, setProgressVideo] = useState(START_CURRENT_TIME);
  const LeftStyle: { left: string } = { left: `${progressVideo}%` };

  const handlePlayVideo = () => {
    setIsNowPlaying(!isNowPlaying);
    setIsChangeButton(!isChangeButton);
  };

  const filmDuration = dayjs.duration(
    videoDuration || film.runTime,
    'seconds',
  );

  const formatedFilmDuration =
    filmDuration.asHours() >= 1
      ? filmDuration.format('-HH:mm:ss')
      : filmDuration.format('-mm:ss');

  const handleOnTimeUpdate = () => {
    if (videoRef && videoRef.current) {
      setProgressVideo((videoRef.current.currentTime / videoRef.current.duration) * 100);
      setVideoDuration(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  const handleVideoProgress = (evt: React.FormEvent<HTMLProgressElement>) => {
    if (videoRef && videoRef.current) {
      const target = evt.target as HTMLProgressElement;
      const manualChange = Number(target.value);
      videoRef.current.currentTime =
        (videoRef.current.duration / 100) * manualChange;
      setProgressVideo(manualChange);
    }
  };

  const handleExitClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isNowPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isNowPlaying, videoLink]);

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={posterImage}
        onTimeUpdate={handleOnTimeUpdate}
      />
      <button type="button" className="player__exit" onClick={handleExitClick}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              onChange={(e) => handleVideoProgress(e)}
              value={progressVideo}
              max="100"
            >
            </progress>
            <div className="player__toggler" style={LeftStyle}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{formatedFilmDuration}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayVideo}
          >
            {isChangeButton ? (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            )}
          </button>

          <div className="player__name">{name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => videoRef.current?.requestFullscreen()}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullScreenPlayer;
