import { combineReducers } from 'redux';

import salad from './salad';
import hello from './hello';

export default combineReducers({
  salad,
  hello
});
