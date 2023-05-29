import { useState, useEffect } from "react";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// Components
import Filters from "./components/Filters/filters.component";
import Cards from "./components/Cards/cards.component";
import Pagination from "./components/Pagination/pagination.component";
import Search from "./components/Search/search.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
      {/* Search */}
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          {/*  Filters */}
          <div className="col-md-3">
            <Filters
              setPageNumber={setPageNumber}
              setStatus={setStatus}
              setGender={setGender}
              setSpecies={setSpecies}
            />
          </div>
          {/* Cards */}
          <div className="col-md-8">
            <Cards characters={fetchedData} />
          </div>
        </div>
      </div>
      {/* Pagination */}
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={info}
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App;
