import React, { useEffect } from 'react';
import Product from './product';
import { fetchProducts } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  cartItems: store.productState.cartItems,
  products: store.productState.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (id) => dispatch({ type: 'ADD_TO_CART', id: id }),
  fetchProducts: bindActionCreators(fetchProducts, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  React.memo((props) => {
    const { products, cartItems, addToCartHandler, fetchProducts } = props;
    console.log(props);
    useEffect(() => {
      fetchProducts();
    }, []);
    return (
      <div className="product-container">
        {products.length ? (
          products.map((product) => (
            <Product
              product={product}
              buttonLabel="Add to cart"
              clickHandler={addToCartHandler.bind(this, product.id)}
            />
          ))
        ) : (
          <h2>You Donot have any products</h2>
        )}
      </div>
    );
  })
);
