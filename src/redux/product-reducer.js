export default (state = { products: [], cartItems: [] }, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      console.log('Received a fetch product casae');
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      if (state.cartItems.find((el) => el.id === action.id)) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.id === action.id ? { ...el, count: el.count + 1 } : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...state.products.find((el) => el.id === action.id), count: 1 },
          ],
        };
      }
    case 'REMOVE_FROM_CART':
      if (state.cartItems.find((el) => el.id === action.id).count > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.id === action.id ? { ...el, count: el.count - 1 } : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((el) => el.id !== action.id),
        };
      }
    default:
      return { ...state };
  }
};
