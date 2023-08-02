import styles from './filter.module.css';

const PriceFilter = ({ handleFilterChange }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Price</h3>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range1"
          value="50"
          onChange={handleFilterChange}
        />
        <label htmlFor="range1">$0 - $50</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range2"
          value="150"
          onChange={handleFilterChange}
        />
        <label htmlFor="range2">$50 - $150</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range3"
          value="300"
          onChange={handleFilterChange}
        />
        <label htmlFor="range3">$150 - $300</label>
      </div>
    </div>
  );
};

export default PriceFilter;
