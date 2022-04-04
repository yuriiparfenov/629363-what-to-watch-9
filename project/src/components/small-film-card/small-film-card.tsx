import { useState } from 'react';
import { Link } from 'react-router-dom';
import { APIRoute, ON_MOUSE_ENTER_TIMER } from '../../const';
import { Film } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  movie: Film;
};

function SmallFilmCard({ movie }: SmallFilmCardProps): JSX.Element {
  const { name, id } = movie;
  const [isPlaying, setIsPlaying] = useState(false);
  let timer: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    timer = setTimeout(() => setIsPlaying(true), ON_MOUSE_ENTER_TIMER);
  };
  const handleMouseLeave = () => {
    setIsPlaying(false);
    clearTimeout(timer);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <VideoPlayer film={movie} isPlaying={isPlaying} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${APIRoute.films}/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
