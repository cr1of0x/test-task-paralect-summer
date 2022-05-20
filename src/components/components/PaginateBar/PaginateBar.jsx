import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./PaginateBar.module.css";

export const PaginateBar = ({ handlePageClick, reposAmount }) => {
  const [pageFrom, setPageFrom] = useState(1);
  const [pageTo, setPageTo] = useState(0);
  const pageCount = Math.ceil(reposAmount / 4);

  useEffect(() => {
    if (reposAmount >= 4) {
      setPageTo(4);
    } else {
      setPageTo(reposAmount);
    }
  }, [reposAmount]);

  const handlePageClickWithFromTo = (data) => {
    handlePageClick(data);
    setPageFrom((data.selected + 1) * 4 - 3);
    setPageTo((data.selected + 1) * 4);
  };

  return (
    <div>
      <div>
        {pageFrom}-{pageTo} of {reposAmount} items
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        onPageChange={handlePageClickWithFromTo}
        containerClassName={styles.container}
        pageClassName={styles.page}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.previous}
        previousLinkClassName={styles.previousLink}
        nextClassName={styles.next}
        nextLinkClassName={styles.nextLink}
        breakClassName={styles.break}
        breakLinkClassName={styles.breakLink}
        activeClassName={styles.active}
      />
    </div>
  );
};
