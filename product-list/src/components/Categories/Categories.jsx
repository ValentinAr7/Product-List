import { Link } from 'react-router-dom';
import styles from './categories.module.css';
import data from '../../mockDataCategories.json';

const Categories = () => {
  return (
    <div>
      <h2 className={styles.title}>Our most popular categories</h2>
      <div className={styles.container}>
        {data.map((categoryItem, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${categoryItem.imageUrl})` }}
          >
            <div className={styles.cardContent}>
              <h2>{categoryItem.label}</h2>
              <Link to={`${categoryItem.category}`} className={styles.button}>
                See more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
