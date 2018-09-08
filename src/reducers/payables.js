import { payablesList } from '../mockData';

const initialState = {
  payablesList: payablesList
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
