import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = props => {
  const { itemsCount, currentPage, pageSize, onPageChange } = props;
  // console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
// here 1 is added to make sure the last number is displayed as pages is array and starts from 0

  return (
    <nav>
    <ul className="pagination">
      {pages.map(page => (
        <li
          key={page}
          className={page === currentPage ? 'page-item active' : 'page-item'}>
          <a onClick={() => onPageChange(page)} className="page-link">
            {page}
          </a>
        </li>
      ))}
    </ul>
  </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
