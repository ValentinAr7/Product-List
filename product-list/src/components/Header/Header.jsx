import { FaSearch, FaUserCircle } from 'react-icons/fa';
import styles from './header.module.css';
import Navigation from '../Subheading/Navigation';

const Header = () => {
  return (
    <div>
      <div className={styles.headerSection}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <p>C4 Nexus</p>
          </div>

          <div className={styles.search}>
            <FaSearch className={styles.searchIcon} />
            <input
              className={styles.searchBar}
              type="text"
              placeholder="Search for items"
            />
          </div>

          <div className={styles.profile}>
            <FaUserCircle />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
