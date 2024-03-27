import { useState } from "react";

/**
 * state がネストされたオブジェクトになっています。
 * ネストされたオブジェクトの state を更新する場合、更新するオブジェクトのコピーを作成する必要があります。
 * さらに、そのオブジェクトを内包する上位のオブジェクトも同様に、コピーを作成する必要があります。
 */

export default function Case8() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Title:
          <input
            value={person.artwork.title}
            onChange={(e) =>
              setPerson({
                ...person,
                artwork: {
                  ...person.artwork,
                  title: e.target.value,
                },
              })
            }
          />
        </label>
      </div>
      <div>
        <label>
          City:
          <input
            value={person.artwork.city}
            onChange={(e) =>
              setPerson({
                ...person,
                artwork: {
                  ...person.artwork,
                  city: e.target.value,
                },
              })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input
            value={person.artwork.image}
            onChange={(e) =>
              setPerson({
                ...person,
                artwork: {
                  ...person.artwork,
                  image: e.target.value,
                },
              })
            }
          />
        </label>
      </div>
      <div>
        <span>
          <i>{person.artwork.title}</i> by {person.name}
          <br />
          (located in {person.artwork.city})
        </span>
      </div>
      <div>
        <img src={person.artwork.image} alt="" />
      </div>
    </div>
  );
}
