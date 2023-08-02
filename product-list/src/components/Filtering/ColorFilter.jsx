import styles from './filter.module.css';

const ColorFilter = ({ handleColorChange }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Color</h3>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="color1"
          value="black"
          onChange={handleColorChange}
        />
        <label htmlFor="color1">Black</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="color2"
          value="white"
          onChange={handleColorChange}
        />
        <label htmlFor="color2">White</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="color3"
          value="blue"
          onChange={handleColorChange}
        />
        <label htmlFor="color3">Blue</label>
      </div>
    </div>
  );
};

export default ColorFilter;
