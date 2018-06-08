
export default (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_TEXT':
      return {
        value: action.value
      };
    default:
      return state;
  }
};
