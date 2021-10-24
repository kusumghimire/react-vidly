import React from 'react'

const Pagination =props=>{
    const {itemCount , pageSize } = props;

    const pagesCount  = itemsCount / pageSize;

 return <nav>
     <ul className="pagination">
         <li className="page">
             <a href="" className="page-item">1</a>
             </li>
     </ul>
 </nav>
};

export default Pagination;

// lodash is used for exporting Node.js