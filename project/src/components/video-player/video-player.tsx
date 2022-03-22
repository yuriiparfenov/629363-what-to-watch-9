import { useEffect, useRef } from 'react';
import { Film } from '../../types/films';

type VideoPlayerProps = {
  isPlaying: boolean;
  film: Film;
};

function VideoPlayer({ film, isPlaying }: VideoPlayerProps): JSX.Element {
  const { posterImage, videoLink } = film;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();

  }, [isPlaying, videoLink]);

  return (
    <video
      ref={videoRef}
      src={videoLink}
      className="player__video"
      poster={posterImage}
      muted
    />
  );
}

export default VideoPlayer;
