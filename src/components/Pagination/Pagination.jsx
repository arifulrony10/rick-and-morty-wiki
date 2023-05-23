const Pagination = ({ pageNumber, setPagenumber }) => {
  console.log(
    '🚀 ~ file: Pagination.jsx:2 ~ Pagination ~ pageNumber:',
    pageNumber
  );
  const nextBtn = () => {
    setPagenumber((prev) => prev + 1);
  };
  const prevBtn = () => {
    if (pageNumber === 1) return;
    setPagenumber((prev) => prev - 1);
  };

  return (
    <div className='my-5 flex justify-center gap-5'>
      {pageNumber === 1 ? (
        <button
          onClick={prevBtn}
          className='bg-white h-full  text-green-900 font-bold py-2 px-4 border-2 border-green-900 rounded hover:bg-green-500  hover:text-white transition ease-in-out delay-150 hover:ease-in-out delay-150 cursor-not-allowed opacity-50'
        >
          Prev
        </button>
      ) : (
        <button
          onClick={prevBtn}
          className='bg-white h-full  text-green-900 font-bold py-2 px-4 border-2 border-green-900 rounded hover:bg-green-500  hover:text-white transition ease-in-out delay-150 hover:ease-in-out delay-150 '
        >
          Prev
        </button>
      )}
      <button
        onClick={nextBtn}
        className='bg-white h-full  text-green-900 font-bold py-2 px-4 border-2 border-green-900 rounded hover:bg-green-500  hover:text-white transition ease-in-out delay-150 hover:ease-in-out delay-150 '
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
