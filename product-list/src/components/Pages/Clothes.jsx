import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './clothes.module.css';
import data from '../../mockData.json';
import Sidebar from '../Sidebar/Sidebar';

const RecommendedProducts = () => {
  const clothesItems = data.find(
    section => section.category === 'Clothes',
  ).items;

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.recommended}>
        <div className={styles.carouselContainer}>
          {clothesItems.map((product, index) => (
            <div className={styles.carouselItem} key={index}>
              <ProductCard product={product} />{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
