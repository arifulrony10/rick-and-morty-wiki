import Card from './card.component';

const Cards = ({ characters }) => {
  const { info, results: charactersData } = characters;

  if (charactersData) {
    return (
      <div className='row'>
        {charactersData?.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    );
  } else {
    <div>No Data Found!</div>;
  }
};
export default Cards;
