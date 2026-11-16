// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую 
  разметку для двух профилей. Извлеките из него 
  компонент Profile, чтобы уменьшить дублирование кода. 
  Для этого нужно будет определить props для компонента 
  Profile.
*/

import { getImageUrl } from "./util";

function Profile({ name, imageUrl, profession, awards, discovered }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards} </b>
          ({discovered.awardsList})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered.name}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl={getImageUrl('Maria')}
        profession="physicist and chemist"
        awards={4}
        discovered={{
          name: 'polonium (chemical element)',
          awardsList: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'
        }}
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl={getImageUrl('KatsukoSaruhashi')}
        profession="geochemist"
        awards={2}
        discovered={{
          name: 'a method for measuring carbon dioxide in seawater',
          awardsList: 'Miyake Prize for geochemistry, Tanaka Prize'
        }}
      />
    </div>
  );
}
