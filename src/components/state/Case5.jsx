import { useState } from "react";

// 更新用関数を渡しているため、“+3” ボタンは想定通りに動きます。

export default function Case5() {
  const [age, setAge] = useState(40);

  const increment = () => {
    /**
     * 慣習として、処理中の state の引数名には、state 変数名の頭文字 1 文字を利用することが一般的です
     * （例えば、age という state 変数に対して、a という引数名）。
     */
    setAge((a) => a + 1);
  };

  return (
    <div>
      <div>
        <span>Your age: {age}</span>
      </div>
      <div>
        <button onClick={() => increment()}>+1</button>
        <button
          onClick={() => {
            increment();
            increment();
            increment();
          }}
        >
          +3
        </button>
      </div>
    </div>
  );
}
