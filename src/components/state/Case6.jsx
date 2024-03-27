import { useState } from "react";

// 更新用関数を渡していません。そのため “+3” ボタンは意図した通りには動きません。

export default function Case6() {
  const [age, setAge] = useState(40);

  const increment = () => {
    setAge(age + 1);
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
