import Case1 from "./effect/Case1";
import Case2 from "./effect/Case2";
import Case3 from "./effect/Case3";

export default function Effect() {
  return (
    <div>
      <span>外部システムへの接続</span>
      <Case1 />
      <Case2 />
      <Case3 />
    </div>
  );
}
