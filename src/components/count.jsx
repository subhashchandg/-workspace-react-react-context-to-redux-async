import React from 'react';
import { createIncrementAction } from '../redux/actions';
import { connect } from 'react-redux';

const Count = (props) => {
  console.log(props, 'From count component');
  return (
    <>
      <h1>The Current Count is {props.count}</h1>
      <button onClick={props.incrementHandler}>Increment</button>
      <button onClick={props.decrementHandler}>Decrement</button>
    </>
  );
};

const mapStateToProps = (store) => ({
  count: store.countState,
});
const mapDispatchToProps = (dispatch) => ({
  incrementHandler: () => dispatch(createIncrementAction()),
  decrementHandler: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
