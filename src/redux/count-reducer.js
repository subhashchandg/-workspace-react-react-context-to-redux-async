export default (intialState = 10, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return intialState + action.payload;
    case 'DECREMENT':
      return intialState - 1;
    default:
      return intialState;
  }
};
