import { combineReducers } from 'redux';

import dashboard from './dashboard';
import recievables from './recievables';
import payables from './payables';

export const rootReducer = combineReducers({
  dashboard, recievables, payables
});
