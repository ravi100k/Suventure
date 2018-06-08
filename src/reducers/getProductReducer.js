export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        value: action.payload
      };
    default:
      return state;
  }
};
