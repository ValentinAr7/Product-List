import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './recomendations.module.css';
import data from '../../mockData.json';

const ProductCard = ({ product }) => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < product.rating ? '★' : '☆',
  );

  return (
    <div className={styles.card}>
      <img variant="top" className={styles.cardImg} src={product.imageUrl} />
      <div className={styles.cardContent}>
        <h3 className={styles.productTitle}>{product.name}</h3>
        <p className={styles.description}>{product.shortDescription}</p>
        <div className={styles.addToCart}>
          <button className={styles.btn}>
            Add to bag <FaShoppingCart className={styles.shoppingCart} />{' '}
          </button>
          <p className={styles.price}> ${product.price}</p>
        </div>
        <div className={styles.stars}>
          <p className={styles.ratingNumber}>{product.rating}</p>
          {stars.map((star, i) => (
            <div>
              <span className={styles.star} key={i}>
                {star}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
