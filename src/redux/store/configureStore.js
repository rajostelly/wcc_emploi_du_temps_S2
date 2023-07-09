import { createStore, combineReducers } from 'redux';
import timetableReducer from '../reducers/timetableReducer';

const rootReducer = combineReducers({
  timetable: timetableReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
