import { createSlice } from '@reduxjs/toolkit';
import { FILMS_COUNT, NameSpace } from '../../const';
import { ContentProcess } from '../../types/state';

const initialState: ContentProcess = {
  filmsCount: FILMS_COUNT,
};

export const contentProcess = createSlice({
  name: NameSpace.Content,
  initialState,
  reducers: {
    incrementFilmsCount: (state) => {
      state.filmsCount += FILMS_COUNT;
    },
    resetFilmsCount: (state) => {
      state.filmsCount = FILMS_COUNT;
    },
  },
});

export const { incrementFilmsCount, resetFilmsCount } = contentProcess.actions;
