export default (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return {
        value: action.payload
      };
    default:
      return state;
  }
};
