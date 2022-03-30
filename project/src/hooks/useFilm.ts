import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { fetchSelectedFilmAction } from '../store/api-action';
import { Film } from '../types/films';

function useFilm(id : string | undefined | number): Film {
  const dispatch = useAppDispatch();
  const { selectedFilm } = useAppSelector(
    ({ DATA }) => DATA);

  useEffect(() => {
    dispatch(fetchSelectedFilmAction(Number(id)));
  }, [dispatch, id]);

  return selectedFilm;

}

export default useFilm;
