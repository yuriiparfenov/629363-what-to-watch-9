import { useEffect, useRef } from 'react';
import { Film } from '../../types/films';

type VideoPlayerProps = {
  isPlaying: boolean;
  film: Film;
};

function VideoPlayer({ film, isPlaying }: VideoPlayerProps): JSX.Element {
  const { srcPicture, srcVideo } = film;
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

  }, [isPlaying, srcVideo]);

  return (
    <video
      ref={videoRef}
      src={srcVideo}
      className="player__video"
      poster={srcPicture}
      muted
    />
  );
}

export default VideoPlayer;
