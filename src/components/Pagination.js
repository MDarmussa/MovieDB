import React from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

//8- create and design pagination component using reactPagination. source link found on Readme file.
//10- import the prop (getpage) from MOvieList.js and inject it in the handlePageClick function
function PaginationComponent({ getPage, pageCount }) {
     const handlePageClick =(data) => {
          console.log(data.selected + 1)
          getPage(data.selected + 1)
     }
   //   const pageCount = 500;
     
  return (
     <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"

        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        
     
      />
  )
}

export default PaginationComponent