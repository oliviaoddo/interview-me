import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  puppies: require('./puppies').default,
});

export default rootReducer;
