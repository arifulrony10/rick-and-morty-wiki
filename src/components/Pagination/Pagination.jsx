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
                    className='px-4 py-2 bg-blue-200 rounded-full border-2 border-b-blue-950 cursor-not-allowed opacity-50'
                >
                    Prev
                </button>
            ) : (
                <button
                    onClick={prevBtn}
                    className='px-4 py-2 bg-blue-200 rounded-full border-2 border-blue-950 hover:bg-blue-500'
                >
                    Prev
                </button>
            )}
            <button
                onClick={nextBtn}
                className='px-4 py-2 bg-blue-200 rounded-full border-2 border-blue-950 hover:bg-blue-500'
            >
                Next
            </button>
        </div>
    );
};
export default Pagination;
