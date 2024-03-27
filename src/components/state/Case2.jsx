import { useState } from "react";

/**
 * text state 変数が文字列 (string) を保持しています。
 * ブラウザの DOM の input 要素に文字を入力すると、handleChange は input 要素から最新の値を読み出し、
 * setText を呼び出して state を更新します。これにより、下部に、現在の text を表示できます。
 */

export default function Case2() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={text} onChange={handleChange} />
        <button onClick={() => setText("")}>reset</button>
      </div>
      <div>
        <span>You typed: {text}</span>
      </div>
    </div>
  );
}
