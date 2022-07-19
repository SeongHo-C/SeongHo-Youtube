import styles from './search_header.module.css';
import React from 'react';

const SearchHeader = (props) => (
  <header className={styles.header}>
    <div className={styles.logoTitle}>
      <img className={styles.logo} src='./images/logo.png' alt='logo' />
      <h1 className={styles.title}>Youtube</h1>
    </div>
    <input className={styles.input} type='search' placeholder='search' />
    <button className={styles.button}>
      <img className={styles.search} src='./images/search.png' alt='search' />
    </button>
  </header>
);

export default SearchHeader;
