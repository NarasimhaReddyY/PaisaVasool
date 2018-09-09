export const addRecievableActionCreator = (recievable) => {
  return {
    type: 'ADD_RECIEVABLE_REQUEST',
    payload: {
      recievable: recievable
    },
  };
}
