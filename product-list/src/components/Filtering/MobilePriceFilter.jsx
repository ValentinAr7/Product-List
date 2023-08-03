import React from 'react';
import styles from './filter.module.css';
import { filterPrices } from '../Constants/constants';

const MobilePriceFilter = ({ handlePriceChangeMobile }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Price</h3>
      <select className={styles.dropdown} onChange={handlePriceChangeMobile}>
        <option value="">Filter by price</option>
        <option value="50">{filterPrices.range1}</option>
        <option value="150">{filterPrices.range2}</option>
        <option value="300">{filterPrices.range3}</option>
        <option value="500">{filterPrices.range4}</option>
        <option value="1000">{filterPrices.range5}</option>
      </select>
    </div>
  );
};

export default MobilePriceFilter;
