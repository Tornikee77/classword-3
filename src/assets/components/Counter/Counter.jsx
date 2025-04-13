import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function Increase() {
    setCounter((counter) => counter + 1);
  }
  function decrease() {
    setCounter((prev) => prev - 1);
  }

  return (
    <div>
      {counter}
      <button onClick={Increase}>CLick to Increase</button>
      <button onClick={decrease}>ClickTo Decrease</button>
    </div>
  );
};

export default Counter;
