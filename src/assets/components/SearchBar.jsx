import { useRef } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

export default function SearchBar({ query, setQuery, setPage }) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const inputVal = inputRef.current.value.trim().toLowerCase();

    if (inputVal === "" || inputVal === query) {
      toast.error("Please type something different to search!");
    } else {
      setQuery(inputVal);
      setPage(1);
    }
  }

  return (
    <header className={styles.header}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.searchForm}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          ref={inputRef}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
    </header>
  );
}
