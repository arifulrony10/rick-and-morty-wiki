import { useEffect, useState } from 'react';
import Cards from '../components/Cards/cards.component';
import Card from '../components/Cards/card.component';
import InputGroup from '../components/Filters/inputGroup.component';

const Episodes = () => {
  const [id, setId] = useState(1);
  const [episodeDetails, setEpisodeDetails] = useState([]);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [results, setResults] = useState([]);
  // const [characters, setCharacters] = useState([]);

  const { air_date, name, characters } = episodeDetails;

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetechData = async (url) => {
      try {
        setPending(true);
        const response = await fetch(url);
        const data = await response.json();
        setEpisodeDetails(data);

        const allCharacters = await Promise.all(
          data?.characters?.map(async (url) => {
            return await fetch(url)
              .then((res) => res.json())
              .catch((error) => console.log(error));
          })
        );
        setResults(allCharacters);
        setPending(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetechData(api);
  }, [api]);

  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center'>
          Episode:{' '}
          <span className='text-success'>{name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className='text-center'>
          {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-3'>
          <h3 className='text-center fw-bold fs-4 mb-2'>Pick Episodes</h3>
          <InputGroup setId={setId} totalPage={51} episodeName={name} />
        </div>
        <div className='col-8'>
          <div className='row'>
            {pending ? 'Loading' : <Cards charactersData={results} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Episodes;
