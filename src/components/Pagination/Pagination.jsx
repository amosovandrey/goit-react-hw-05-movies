import ReactPaginate from 'react-paginate';
import { PaginationContainer } from './Pagination.styled';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <PaginationContainer>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        pageClassName={''}
      />
    </PaginationContainer>
  );
};

export default Pagination;
