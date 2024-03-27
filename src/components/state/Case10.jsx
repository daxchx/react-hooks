import { useImmer } from "use-immer";

/**
 * 配列やオブジェクトの書き換えを行わずに state を更新することが煩雑に感じる場合、
 * Immer のようなライブラリを用いて繰り返しのコードを減らすことができます。
 * Immer を利用することで、オブジェクトを書き換えているかのような簡潔なコードを書くことができます。
 * しかし内部では、イミュータブル（不変, immutable）な更新が実行されます。
 */

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function Case10() {
  const [list, updateList] = useImmer(initialList);

  const handleToggle = (artworkId, nextSeen) => {
    updateList((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      artwork.seen = nextSeen;
    });
  };

  return <ItemList artworks={list} onToggle={handleToggle} />;
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => onToggle(artwork.id, e.target.checked)}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
