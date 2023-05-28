import { useState, useEffect } from 'react';
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// Components
import Filters from './components/Filters/filters.component';
import Cards from './components/Cards/cards.component';

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [api, setApi] = useState(
    `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
  );

  const { info, results } = fetchedData;

  // let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  useEffect(() => {
    const fetechData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setFetchedData(data);
    };
    fetechData(api);
  }, [api]);

  return (
    <div>
      <h1 className='text-center rm-title my-3'>
        Rick and Morty <span className='text-primary'>Wiki</span>
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Filters />
          </div>
          <div className='col-md-8'>
            <Cards characters={fetchedData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
