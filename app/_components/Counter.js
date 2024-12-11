"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="">
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
