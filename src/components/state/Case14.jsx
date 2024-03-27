import { useState } from "react";

/**
 * レンダーに応じて state を設定したい場合があります。
 * 例えば、prop が変化したときに state 変数を変化させたい場合です。
 */

export default function Case14() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <CountLabel count={count} />
    </div>
  );
}

function CountLabel({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "increasing" : "decreasing");
  }
  return (
    <div>
      <div>{count}</div>
      {trend && <div>The count is {trend}</div>}
    </div>
  );
}
