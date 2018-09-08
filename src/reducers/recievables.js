import { recievablesList } from '../mockData';

const initialState = {
  recievablesList: recievablesList
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
