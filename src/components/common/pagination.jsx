import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize } = props;

  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);
  // 1 is added so that last page is also added

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item">
            <a href="" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

// lodash is used for exporting Node.js
