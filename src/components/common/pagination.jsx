import React from "react";
import PropType from 'prop-types';
import _ from "lodash";
// lodash is the popular js library called underscore


const Pagination = props => {
  const { itemsCount, pageSize ,currentPage,onPageChange} = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  // Math.ceil method return smallest integer greater than 1 or 2
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  // 1 is added so that last page is also added
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li  key={page} className={page === currentPage ? 'page-item active': 'page-item' }>
            <a href="" className="page-link" onClick={()=> onPageChange(page) }>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount, pageSize ,currentPage,onPageChange
};

export default Pagination;

// lodash is used for exporting Node.js
