export default (state = {}, action) => {
  switch (action.type) {
    case 'DELETE_DATA':
      return {
        value: action.payload
      };
    default:
      return state;
  }
};
