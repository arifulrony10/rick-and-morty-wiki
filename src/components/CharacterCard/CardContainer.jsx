import CharacterCard from './CharacterCard';

const CardContainer = ({ characters }) => {
    const { info, results: charactersData } = characters;

    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {charactersData ? (
                charactersData.map((charecter) => (
                    <CharacterCard key={charecter.id} charecter={charecter} />
                ))
            ) : (
                <h2>No data found 😢</h2>
            )}
        </div>
    );
};
export default CardContainer;
