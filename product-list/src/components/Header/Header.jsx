import { useState } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import styles from './header.module.css';
import Subheading from '../Subheading/Subheading';
import data from '../../mockData.json';
import { logo } from '../Constants/constants';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = searchTerm
    ? data.flatMap(category =>
        category.items.filter(item =>
          item.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
        ),
      )
    : [];

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <p>{logo.logo}</p>
          </div>

          <div className={styles.search}>
            <FaSearch className={styles.searchIcon} />
            <input
              className={styles.searchBar}
              type="text"
              placeholder="Search for items"
              value={searchTerm}
              onChange={handleChange}
            />
            {filteredItems.length > 0 && (
              <div className={styles.dropdown}>
                {filteredItems.map(item => (
                  <div key={item.name} className={styles.dropdownItem}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                    <span>{item.name}</span>
                    <button className={styles.button}>Add to Cart</button>
                  </div>
                ))}
              </div>
            )}
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
