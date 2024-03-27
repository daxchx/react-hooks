import Case1 from "./state/Case1";
import Case10 from "./state/Case10";
import Case11 from "./state/Case11";
import Case12 from "./state/Case12";
import Case13 from "./state/Case13";
import Case14 from "./state/Case14";
import Case2 from "./state/Case2";
import Case3 from "./state/Case3";
import Case4 from "./state/Case4";
import Case5 from "./state/Case5";
import Case6 from "./state/Case6";
import Case7 from "./state/Case7";
import Case8 from "./state/Case8";
import Case9 from "./state/Case9";

export default function State() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
      <Case1 />
      <Case2 />
      <Case3 />
      <Case4 />
      <Case5 />
      <Case6 />
      <Case7 />
      <Case8 />
      <Case9 />
      <Case10 />
      <Case11 />
      <Case12 />
      <Case13 />
      <Case14 />
    </div>
  );
}
