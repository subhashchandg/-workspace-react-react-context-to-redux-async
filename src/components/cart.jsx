import React from 'react';
import Product from './product';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  cartItems: store.productState.cartItems,
  products: store.productState.products,
});
const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch({ type: 'REMOVE_FROM_CART', id: id }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  React.memo((props) => {
    const { cartItems, removeFromCart } = props;
    return (
      <div className="product-container">
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <Product
              product={product}
              buttonLabel="Remove from cart"
              clickHandler={removeFromCart.bind(this, product.id)}
            />
          ))
        ) : (
          <h2>You Donot Have Items in Your Cart Yet </h2>
        )}
      </div>
    );
  })
);
