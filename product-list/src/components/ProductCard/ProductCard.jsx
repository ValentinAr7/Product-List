import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './productCard.module.css';

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
            <div key={i}>
              <span className={styles.star}>{star}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
