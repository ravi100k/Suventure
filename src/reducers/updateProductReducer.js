export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        value: action.payload
      };
    default:
      return state;
  }
};
