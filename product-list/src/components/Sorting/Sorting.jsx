import React from 'react';
import styles from './sorting.module.css';

const Sorting = ({ handleSortChange }) => {
  return (
    <select className={styles.dropdown} onChange={handleSortChange}>
      <option value="az">Alphabetical A-Z</option>
      <option value="za">Alphabetical Z-A</option>
      <option value="asc">Price Ascending</option>
      <option value="desc">Price Descending</option>
    </select>
  );
};

export default Sorting;
