import { Link } from 'react-router-dom';
import { Film } from '../../types/films';

type SmallFilmCardProps = {
  movie: Film;
};

function SmallFilmCard({ movie }: SmallFilmCardProps): JSX.Element {
  const { srcPicture, title, unicId } = movie;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={srcPicture} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${unicId}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
