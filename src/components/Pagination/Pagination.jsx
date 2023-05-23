import ReactPaginate from 'react-paginate';

const Pagination = ({ pageNumber, setPagenumber, data }) => {
    const info = data?.info;

    return (
        <ReactPaginate
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            previousClassName='bg-white h-full text-green-900 font-bold py-2 px-4 border-2 border-green-900 rounded hover:bg-green-500 hover:text-white transition ease-in-out delay-150 hover:ease-in-out delay-150 '
            nextClassName='bg-white h-   text-green-900 font-bold py-2 px-4 border-2 border-green-900 rounded hover:bg-green-500  hover:text-white transition ease-in-out delay-150 hover:ease-in-out delay-150'
            pageClassName='text-green-900 mx-2 rounded items-center hover:bg-green-500 rounded hover:text-white transition ease-in-out  hover:ease-in-out'
            pageLinkClassName='px-3 border-2 border-green-900 h-full w-full inline-block flex items-center rounded hover:bg-green-500  hover:text-white transition ease-in-out  hover:ease-in-out '
            className='flex justify-center my-5'
            activeClassName='bg-green-500 text-white transition ease-in-out  hover:ease-in-out'
            pageCount={info?.pages}
            onPageChange={(selectedPage) => {
                setPagenumber(selectedPage.selected + 1);
            }}
        />
    );
};
export default Pagination;
