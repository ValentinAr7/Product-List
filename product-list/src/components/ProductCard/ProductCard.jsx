import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './productCard.module.css';
import Notification, {
  showSuccessNotification,
} from '../Notifications/Notifications';

const ProductCard = ({ product }) => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < product.rating ? '★' : '☆',
  );

  const handleAddToCart = () => {
    showSuccessNotification('Item has been successfully added to the cart');
  };

  const cuttedDescription = (input, length) => {
    return input.length > length ? `${input.substring(0, length)}...` : input;
  };

  return (
    <div className={styles.card}>
      <img variant="top" className={styles.cardImg} src={product.imageUrl} />
      <div className={styles.cardContent}>
        <h3 className={styles.productTitle}>{product.name.toUpperCase()}</h3>
        <p className={styles.description}>
          {cuttedDescription(product.shortDescription, 50)}
        </p>
        <div className={styles.addToCart}>
          <button className={styles.btn} onClick={handleAddToCart}>
            Add to bag <FaShoppingCart className={styles.shoppingCart} />
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
      <Notification />
    </div>
  );
};

export default ProductCard;
