import { useState } from "react";

/**
 * 同じコンポーネントで、複数の state 変数を宣言することができます。
 * それぞれの state 変数は、完全に独立しています。
 */

export default function Case4() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(40);

  return (
    <div>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setAge(age + 1)}>Increment age</button>
      </div>
      <div>
        <span>
          Hello, {name}. You are {age}
        </span>
      </div>
    </div>
  );
}
