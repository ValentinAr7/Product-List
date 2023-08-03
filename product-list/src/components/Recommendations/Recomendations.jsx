import React from 'react';
import styles from './recomendations.module.css';
import data from '../../mockData.json';
import ProductCard from '../ProductCard/ProductCard';

const RecommendedProducts = () => {
  const recommendedProducts = data.map(section => section.items[0]);

  return (
    <div className={styles.recommended}>
      <h2 className={styles.title}>Recommended Products</h2>
      <div className={styles.carouselContainer}>
        {recommendedProducts.map((product, index) => (
          <div className={styles.carouselItem} key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
