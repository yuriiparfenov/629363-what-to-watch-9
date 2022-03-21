import { useAppDispatch } from '../../hooks';
import { incFilmsCount } from '../../store/action';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  return(
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(incFilmsCount())}>
              Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
