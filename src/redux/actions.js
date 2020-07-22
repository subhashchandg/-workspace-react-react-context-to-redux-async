export const createIncrementAction = () => ({ type: 'INCREMENT', payload: 10 });

export const fetchProducts = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:4321/api/products')
      .then((response) => {
        console.log('Hello');
        return response.json();
      })
      .then((data) => dispatch({ type: 'FETCH_PRODUCTS', payload: data }))
      .catch((error) => console.log(error));
  };
};
