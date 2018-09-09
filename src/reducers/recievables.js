import { recievablesList } from '../mockData';

const initialState = {
  isFetching: false,
  errors: [],
  recievablesList: recievablesList
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECIEVABLE_REQUEST_INITIATED':
      return {
        ...state,
        isFetching: true
      }
    case 'ADD_RECIEVABLE_REQUEST_SUCCESS':
      return {
        ...state,
        isFetching: false,
        errors: [],
        recievablesList: [...state.recievablesList, action.payload.recievable]
      };
    default:
      return state;
  }
};
