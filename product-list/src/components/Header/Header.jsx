import { FaSearch, FaUserCircle } from 'react-icons/fa';
import styles from './header.module.css';
import Subheading from '../Subheading/Subheading';

const Header = () => {
  return (
    <div className={styles.container}>
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
      <Subheading />
    </div>
  );
};

export default Header;
