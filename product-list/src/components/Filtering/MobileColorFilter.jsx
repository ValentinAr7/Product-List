import React from 'react';
import styles from './filter.module.css';

const MobileColorFilter = ({ handleColorChangeMobile }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Color</h3>
      <select className={styles.dropdown} onChange={handleColorChangeMobile}>
        <option value="">All</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default MobileColorFilter;
