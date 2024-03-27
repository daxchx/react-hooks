import { useState } from "react";

/**
 * 初期化関数を利用していません。
 * そのため、createInitialTodos 関数は、入力フィールドに文字を入力したときなどのすべてのレンダーで実行されます。
 * 挙動に目に見える違いはありませんが、少し効率が悪くなります。
 */

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

export default function Case12() {
  const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
