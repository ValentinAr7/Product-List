import styles from './filter.module.css';
import { filterColors } from '../Constants/constants';

const ColorFilter = ({ handleColorChange }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Color</h3>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="color1"
          value={filterColors.black}
          onChange={handleColorChange}
        />
        <label htmlFor="color1">{filterColors.black}</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="color2"
          value={filterColors.white}
          onChange={handleColorChange}
        />
        <label htmlFor="color2">{filterColors.white}</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="color3"
          value={filterColors.blue}
          onChange={handleColorChange}
        />
        <label htmlFor="color3">{filterColors.blue}</label>
      </div>
    </div>
  );
};

export default ColorFilter;
