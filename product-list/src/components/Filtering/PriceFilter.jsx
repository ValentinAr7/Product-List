import styles from './filter.module.css';
import { filterPrices } from '../Constants/constants';

const PriceFilter = ({ handlePriceChange = {} }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Price</h3>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range1"
          value="50"
          onChange={handlePriceChange}
        />
        <label htmlFor="range1">{filterPrices.range1}</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range2"
          value="150"
          onChange={handlePriceChange}
        />
        <label htmlFor="range2">{filterPrices.range2}</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range3"
          value="300"
          onChange={handlePriceChange}
        />
        <label htmlFor="range3">{filterPrices.range3}</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range4"
          value="500"
          onChange={handlePriceChange}
        />
        <label htmlFor="range4">{filterPrices.range4}</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range5"
          value="1000"
          onChange={handlePriceChange}
        />
        <label htmlFor="range5">{filterPrices.range5}</label>
      </div>
    </div>
  );
};

export default PriceFilter;
