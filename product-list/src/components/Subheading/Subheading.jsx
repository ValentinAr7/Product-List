import { Link } from 'react-router-dom';
import styles from './navigation.module.css';
import data from '../../mockData.json';

const Subheading = () => {
  return (
    <div className={styles.header}>
      <div className={styles.subHeader}>
        {data.map((section, index) => {
          return (
            <Link to={`/${section.category}`} key={index}>
              <button className={styles.btn}>{section.category}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Subheading;
