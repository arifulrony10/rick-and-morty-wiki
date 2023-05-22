import { useEffect, useState } from "react"
import CardContainer from "../../components/CharacterCard/CardContainer"
import CharacterCard from "../../components/CharacterCard/CharacterCard"

// Custom hooks
import { useFetch } from "../../hooks/useFetch"

const Home = () => {

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
    const {data, isPending, error} = useFetch(url)
    const [characters, setCharacters] = useState(null)

    // console log data
    // if(data && data.lenght !== 0) {
    //     const {results} = data
    //     console.log(results)
    // }

  return (
    <div>
        {
            !isPending &&  <CardContainer data={data}/>
        }
       
    </div>
  )
}
export default Home