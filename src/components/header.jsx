import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  cartItems: store.productState.cartItems,
});

export default connect(mapStateToProps)((props) => {
  const { cartItems } = props;
  return (
    <div className="header">
      <div className="headerItems">
        <Link to="/products">
          <p>Products</p>
        </Link>
        <Link to="/cart">
          <p>
            cart ({cartItems.reduce((accum, el) => accum + (el.count || 0), 0)})
          </p>
        </Link>
      </div>
    </div>
  );
});
