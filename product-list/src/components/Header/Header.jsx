import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import Subheading from '../Subheading/Subheading';
import { logo } from '../Constants/constants';
import Notification, {
  showSuccessNotification,
} from '../Notifications/Notifications';
import styles from './header.module.css';
import data from '../../mockData.json';

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

  const handleAddToCart = () => {
    showSuccessNotification('Item has been successfully added to the cart');
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link to="/" className={styles.link}>
              <p>{logo.logo}</p>
            </Link>{' '}
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
                    <button className={styles.button} onClick={handleAddToCart}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.profile}>
            <FaShoppingCart />
            <FaUserCircle />
          </div>
        </div>
      </div>
      <Subheading />
      <Notification />
    </div>
  );
};

export default Header;
