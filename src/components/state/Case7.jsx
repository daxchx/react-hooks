import { useState } from "react";

/**
 * form state 変数はオブジェクトを保持しています。
 * それぞれの input 要素は change ハンドラを持っており、新しい form オブジェクトを引数として setForm を呼び出します。
 * { ...form } のようにスプレッド構文を用いることで、state オブジェクトを（書き換えではなく）確実に置き換えることができます。
 */

export default function Case7() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  return (
    <div>
      <div>
        <label>
          First name:
          <input
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Last name:
          <input
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
      </div>
      <div>
        <span>
          {form.firstName} {form.lastName} ({form.email})
        </span>
      </div>
    </div>
  );
}
