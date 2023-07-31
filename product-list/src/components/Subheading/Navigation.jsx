import styles from './navigation.module.css';
import data from '../../mockData.json';

const Navigation = () => {
  return (
    <div className={styles.header}>
      <div className={styles.subHeader}>
        {data.map((section, index) => {
          return (
            <button key={index} className={styles.btn}>
              {section.category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
