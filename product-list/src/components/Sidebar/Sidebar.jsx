import React from 'react';
import ColorFilter from '../Filtering/ColorFilter';
import PriceFilter from '../Filtering/PriceFilter';
import styles from './sidebar.module.css';

function Sidebar({ handleColorChange, handlePriceChange, isMobile }) {
  return (
    <div
      className={
        isMobile ? `${styles.sidebar} ${styles.sidebarMobile}` : styles.sidebar
      }
    >
      <h2>Filter by</h2>
      <PriceFilter handlePriceChange={handlePriceChange} />
      <ColorFilter handleColorChange={handleColorChange} />
    </div>
  );
}

export default Sidebar;
