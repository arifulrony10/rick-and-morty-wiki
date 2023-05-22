import CharacterCard from "./CharacterCard"

const CardContainer = ({data}) => {
    const {info, results} = data
  return (
    <div>
        {
            // results.map(character => <CharacterCard key={character.id} character={character}/>)
        }
    </div>
  )
}
export default CardContainer