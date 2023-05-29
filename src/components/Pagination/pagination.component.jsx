// React Paginate
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {

  return (
    <ReactPaginate 
    
    className="pagination justify-content-center gap-4 my-5"
    previousClassName="btn btn-primary"
    nextClassName="btn btn-primary"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    activeClassName="active"
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    pageCount={info?.pages}
    onPageChange={(selectedPageNumber) => {
      setPageNumber(selectedPageNumber.selected + 1)
    }}
    />
  );
};
export default Pagination;
