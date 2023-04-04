import React from "react";
import "./Counter.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "../slices/counterSlice";

const Counter = () => {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <h2 className="text-center">Counter</h2>
      <div className="text-center">
        <button
          className="counter-button"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="counter-show">{value}</span>
        <button
          className="counter-button"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="text-center mt-2">
        <button className="counter-button" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button
          className="counter-button"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
        <button
          className="counter-button"
          onClick={() => dispatch(decrementByAmount(5))}
        >
          Decrement by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
