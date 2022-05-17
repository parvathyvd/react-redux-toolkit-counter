import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, onAddbyAmount, resetAll } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);
  const addValue = Number(inputValue) || 0;
  const count = useSelector((state) => state.counter.count);
  const onAddByAmountHandler = () => {
    dispatch(onAddbyAmount(addValue));
  };
  const reset = () => {
    dispatch(resetAll());
    setInputValue("");
  };

  return (
    <div className="ui center aligned align-center">
      {" "}
      <h1 className="ui center aligned header pb-3 main">
        Basic counter app using redux tool kit
      </h1>
      <button
        className="ui positive basic button"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="ui negative basic button"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <div>
        <div class="ui input pt-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Counter by Amount"
          />
        </div>

        <button
          className="ui primary basic button"
          onClick={onAddByAmountHandler}
        >
          Add by Amount
        </button>
      </div>
      <h1>{count}</h1>
      <button className="ui secondary basic button" onClick={reset}>
        Reset All
      </button>
    </div>
  );
};

export default Counter;
