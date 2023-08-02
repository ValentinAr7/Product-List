import ColorFilter from '../Filtering/ColorFilter';
import PriceFilter from '../Filtering/PriceFilter';
import styles from './Sidebar.module.css';

function Sidebar({ handleFilterChange }) {
  return (
    <div className={styles.sidebar}>
      <h2>Filter by</h2>
      <PriceFilter />
      <ColorFilter />
    </div>
  );
}

export default Sidebar;
