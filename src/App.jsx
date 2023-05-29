import { useState, useEffect } from "react";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// Components
import Filters from "./components/Filters/filters.component";
import Cards from "./components/Cards/cards.component";
import Pagination from "./components/Pagination/pagination.component";
import Search from "./components/Search/search.component";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

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
      <h1 className="text-center rm-title my-3">
        Rick and Morty <span className="text-primary">Wiki</span>
      </h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Filters />
          </div>
          <div className="col-md-8">
            <Cards characters={fetchedData} />
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
    </div>
  );
};
export default App;
