import React from 'react';
import ColorFilter from '../Filtering/ColorFilter';
import PriceFilter from '../Filtering/PriceFilter';
import styles from './Sidebar.module.css';

function Sidebar({ handleColorChange, handlePriceChange }) {
  return (
    <div className={styles.sidebar}>
      <h2>Filter by</h2>
      <PriceFilter handlePriceChange={handlePriceChange} />
      <ColorFilter handleColorChange={handleColorChange} />
    </div>
  );
}

export default Sidebar;
