import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ setPage }) {
  function handleLoadMore(e) {
    e.preventDefault();
    setPage((curPage) => curPage + 1);
  }

  return (
    <div className={styles.loadMoreContainer}>
      <button className={styles.loadMoreBtn} onClick={(e) => handleLoadMore(e)}>
        Load More
      </button>
    </div>
  );
}
