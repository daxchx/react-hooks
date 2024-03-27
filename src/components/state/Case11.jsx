import { useState } from "react";

/**
 * 初期化関数を利用しています。
 * そのため、createInitialTodos 関数は初期化時のみ実行されます。
 * 入力フィールドに文字を入力した場合などの、コンポーネントの再レンダー時には実行されません。
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

export default function Case11() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button
          onClick={() => {
            setText("");
            setTodos([{ id: todos.length, text: text }, ...todos]);
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
