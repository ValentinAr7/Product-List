import styles from './filter.module.css';

const ColorFilter = ({ handleFilterChange }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Color</h3>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="color1"
          value="red"
          onChange={handleFilterChange}
        />
        <label htmlFor="color1">Red</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="color2"
          value="green"
          onChange={handleFilterChange}
        />
        <label htmlFor="color2">Green</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="color3"
          value="blue"
          onChange={handleFilterChange}
        />
        <label htmlFor="color3">Blue</label>
      </div>
    </div>
  );
};

export default ColorFilter;
