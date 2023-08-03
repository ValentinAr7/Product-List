import styles from './sorting.module.css';

const Sorting = ({ handleSortChange }) => {
  return (
    <div>
      <h4 className={styles.title}>Sort</h4>
      <select className={styles.dropdown} onChange={handleSortChange}>
        <option value="az">Brand (A-Z)</option>
        <option value="za">Brand (Z-A)</option>
        <option value="asc">Price (Low to high)</option>
        <option value="desc">Price (High to low)</option>
      </select>
    </div>
  );
};

export default Sorting;
