const Pagination = ({ pageNumber, setPageNumber }) => {
  const nextBtn = () => {
    console.log("next clicked");
    setPageNumber((prev) => prev + 1);
  };
  const prevBtn = () => {
    if (pageNumber === 1) return;
    setPageNumber((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prevBtn} className="btn btn-primary">
        Previous
      </button>
      <button onClick={nextBtn} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};
export default Pagination;
