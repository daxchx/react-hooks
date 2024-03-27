import { useState } from "react";

/**
 * todos state 変数が配列を保持しています。
 * 各ボタンのハンドラは、todos 配列の新しい値を引数として setTodos を呼び出します。
 * スプレッド構文 ([...todos]) や、todos.map()、todos.filter() などを利用すると、
 * state の配列を（書き換えではなく）確実に置き換えることができます。
 */

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function Case9() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (title) => {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  const handleChangeTodo = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onChangeTodo={handleChangeTodo}
      />
    </div>
  );
}

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        value={title}
        placeholder="Add todo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </div>
  );
}

function TodoList({ todos, onDeleteTodo, onChangeTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              onChange={onChangeTodo}
              onDelete={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) =>
            onChange({
              ...todo,
              done: e.target.checked,
            })
          }
        />
        {todoContent}
      </label>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </>
  );
}
