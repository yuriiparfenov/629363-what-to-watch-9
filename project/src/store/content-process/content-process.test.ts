import { contentProcess, incrementFilmsCount, resetFilmsCount } from './content-process';

describe('Reduxer: contentProcess', () => {
  it('should increment films count by fixed StepCoutn = 8', () => {
    const state = {filmsCount: 8};
    expect(contentProcess.reducer(state, incrementFilmsCount())).toEqual({filmsCount: 16});
  });

  it('should increment films count by one, but start 16', () => {
    const state = {filmsCount: 16};
    expect(contentProcess.reducer(state, incrementFilmsCount())).toEqual({filmsCount: 24});
  });

  it('should reset films count by 8', () => {
    const state = {filmsCount: 24};
    expect(contentProcess.reducer(state, resetFilmsCount())).toEqual({filmsCount: 8});
  });
});
