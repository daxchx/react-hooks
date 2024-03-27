import { useState } from "react";

/**
 * コンポーネントに異なる key を渡すことで、コンポーネントの state をリセットすることができます。
 * この例では、version state 変数を Form に key として渡しています。
 * “Reset” ボタンをクリックすると、version state 変数が変化します。
 * key が変化したとき、React は Form コンポーネント（と、そのすべての子コンポーネント）を一から再生成するため、
 * Form の state がリセットされます。
 */

export default function Case13() {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion(version + 1);
  };

  return (
    <div>
      <div>
        <Form key={version} />
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

function Form() {
  const [name, setName] = useState("Taylor");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>Hello, {name}.</div>
    </div>
  );
}
