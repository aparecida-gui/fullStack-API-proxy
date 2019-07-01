import React from "react";

const Pagination = ({urlPrevious, urlNext}) => (
	<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <button className="page-link" onClick={urlPrevious} aria-disabled="true">Previous</button>
    </li>
    <li className="page-item">
      <button className="page-link" onClick={urlNext}>Next</button>
    </li>
  </ul>
</nav>
);

export default Pagination;