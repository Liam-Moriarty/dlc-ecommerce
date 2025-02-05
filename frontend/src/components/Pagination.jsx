import React from "react";
import ReactPaginate from "react-paginate";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Pagination = ({ totalPages, page, setPage, currentPages }) => {
  const handlePageClick = (event) => {
    setPage(event.selected + 1); // ReactPaginate uses zero-based index
  };

  return (
    <div className="w-full h-auto bg-transparent p-5 flex justify-center items-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<MdChevronRight className="text-sm" />}
        previousLabel={<MdChevronLeft className="text-sm" />}
        onPageChange={handlePageClick}
        pageCount={totalPages}
        pageRangeDisplayed={currentPages}
        marginPagesDisplayed={2}
        forcePage={page - 1} // Highlight the correct page (zero-based index)
        containerClassName="pagination-container"
        pageClassName="pagination-page"
        activeClassName="pagination-page-active"
        previousClassName="pagination-previous-next"
        nextClassName="pagination-previous-next"
        disabledClassName="pagination-disable"
      />
    </div>
  );
};

export default Pagination;
