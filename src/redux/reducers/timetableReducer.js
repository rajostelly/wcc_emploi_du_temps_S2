const initialState = [];

const timetableReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TIMETABLE':
      return action.timetable;
    default:
      return state;
  }
};

export default timetableReducer;
