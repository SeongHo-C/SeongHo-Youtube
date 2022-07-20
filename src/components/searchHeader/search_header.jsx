import styles from './search_header.module.css';
import React from 'react';
import { useRef } from 'react';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') handleSearch();
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoTitle}>
        <img className={styles.logo} src='./images/logo.png' alt='logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='search'
        onKeyDown={onKeyDown}
      />
      <button className={styles.button} onClick={onClick}>
        <img className={styles.search} src='./images/search.png' alt='search' />
      </button>
    </header>
  );
};

export default SearchHeader;
