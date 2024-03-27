import { useState } from "react";

/**
 * count state 変数が数値 (number) を保持しています。
 * ボタンをクリックすることで、数値が増加します。
 */

export default function Case1() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>You pressed me {count} times</button>
    </div>
  );
}
