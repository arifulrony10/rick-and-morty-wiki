import Card from "./card.component";

const Cards = ({ characters }) => {
  const { info, results: charactersData } = characters;

  if (charactersData) {
    return (
      <div className="row">
        {
        charactersData?.map((character) => (
          <Card key={character.id} character={character} />
        ))
        }
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h2>No data found 😢</h2>
      </div>
    )
  }
};
export default Cards;
