import GenderFilter from "../category/gender.component";
import SpeciesFilter from "../category/species.component";
import StatusFilter from "../category/status.component";

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  return (
    <div className="">
      <h2 className="text center fw-bold fs-4 mb-2">Filters</h2>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline text-primary "
      >
        Clear Filters
      </div>

      {/* Accordion */}
      <div className="accordion" id="accordionExample">
        <StatusFilter setPageNumber={setPageNumber} setStatus={setStatus} />
        <SpeciesFilter setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <GenderFilter setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};
export default Filters;
