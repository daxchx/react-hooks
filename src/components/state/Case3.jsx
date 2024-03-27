import { useState } from "react";

/**
 * liked state 変数が真偽値 (boolean) を保持しています。
 * input をクリックすると、setLiked はブラウザのチェックボックスの input がチェックされているかどうかで、
 * liked state 変数を更新します。
 * liked 変数は、チェックボックスの下のテキストをレンダーするために使用されます。
 */

export default function Case3() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={liked}
            onChange={(e) => setLiked(e.target.checked)}
          />
          I liked this
        </label>
      </div>
      <div>
        <span>You {liked ? "liked" : "did not like"} this.</span>
      </div>
    </div>
  );
}
