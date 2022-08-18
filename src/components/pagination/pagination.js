import React from 'react';
import "./pagination.css";
import ReactPaginate from 'react-paginate';


const pagination = ({pageCount, handlePageClick}) => {
  return (
    <div>
        <ReactPaginate
            breakLabel="..."
            breakClassName='break-class'
            nextLabel="Suivant"
            containerClassName={"pagination"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="precedent"
            renderOnZeroPageCount={null}
        />
    </div>

    );
};

export default pagination;