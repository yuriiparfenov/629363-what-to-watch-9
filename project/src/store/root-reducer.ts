import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { contentProcess } from './content-process/content-process';
import { dataProcess } from './data-process/data-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Content]: contentProcess.reducer,
});
