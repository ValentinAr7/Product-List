import styles from './categories.module.css';
import data from '../../mockDataCategories.json';

const Categories = () => {
  return (
    <div>
      <h2 className={styles.title}>Our most popular categories</h2>
      <div className={styles.container}>
        {data.map((category, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          >
            <div className={styles.cardContent}>
              <h2>{category.category}</h2>
              <button className={styles.button}>See more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
