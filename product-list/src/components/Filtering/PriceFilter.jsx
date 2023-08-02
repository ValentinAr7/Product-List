import styles from './filter.module.css';

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
        <label htmlFor="range1">$0 - $50</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range2"
          value="150"
          onChange={handlePriceChange}
        />
        <label htmlFor="range2">$50 - $150</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range3"
          value="300"
          onChange={handlePriceChange}
        />
        <label htmlFor="range3">$150 - $300</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range4"
          value="500"
          onChange={handlePriceChange}
        />
        <label htmlFor="range4">$300 - $500</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="range5"
          value="1000"
          onChange={handlePriceChange}
        />
        <label htmlFor="range5">$500 - $1000</label>
      </div>
    </div>
  );
};

export default PriceFilter;
