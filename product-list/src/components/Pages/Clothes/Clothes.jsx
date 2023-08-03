import { useEffect, useState } from 'react';
import MobileColorFilter from '../../Filtering/MobileColorFilter';
import MobilePriceFilter from '../../Filtering/MobilePriceFilter';
import ProductCard from '../../ProductCard/ProductCard';
import { sections, mobileBreakPoint } from '../../Constants/constants';
import styles from './clothes.module.css';
import data from '../../../mockData.json';
import Sidebar from '../../Sidebar/Sidebar';
import Sorting from '../../Sorting/Sorting';

const Clothes = () => {
  const clothesData = data.find(section => section.category === 'Clothes');
  const clothesItems = clothesData.items;
  const categoryDescription = clothesData.categoryDescription;

  const [sortingOption, setSortingOption] = useState('az');
  const [visibleProducts, setVisibleProducts] = useState(8);
  const productsPerLoad = 4;
  const [selectedColors, setSelectedColors] = useState({
    black: false,
    white: false,
    other: false,
  });

  const [selectedPrices, setSelectedPrices] = useState({
    50: false,
    150: false,
    300: false,
    500: false,
    1000: false,
  });

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileBreakPoint.breakPoint,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileBreakPoint.breakPoint);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleColorChange = event => {
    setSelectedColors({
      ...selectedColors,
      [event.target.value]: event.target.checked,
    });
  };

  const handlePriceChange = event => {
    setSelectedPrices({
      ...selectedPrices,
      [event.target.value]: event.target.checked,
    });
  };

  const handleSortChange = event => {
    setSortingOption(event.target.value);
  };

  const sortProducts = (a, b) => {
    if (sortingOption === 'az') {
      return a.name.localeCompare(b.name);
    } else if (sortingOption === 'za') {
      return b.name.localeCompare(a.name);
    } else if (sortingOption === 'asc') {
      return a.price - b.price;
    } else if (sortingOption === 'desc') {
      return b.price - a.price;
    }
  };

  const sortedClothesItems = [...clothesItems].sort(sortProducts);

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + productsPerLoad);
  };

  const productDescription =
    clothesItems.length > 0 ? clothesItems[0].shortDescription : '';

  const filteredClothesItems = sortedClothesItems.filter(
    product =>
      (selectedColors[product.color] ||
        !Object.values(selectedColors).some(Boolean)) &&
      (inSelectedPriceRange(product.price) ||
        !Object.values(selectedPrices).some(Boolean)),
  );

  function inSelectedPriceRange(price) {
    const priceRanges = [
      { max: 50, selected: selectedPrices['50'] },
      { min: 50, max: 150, selected: selectedPrices['150'] },
      { min: 150, max: 300, selected: selectedPrices['300'] },
      { min: 300, max: 500, selected: selectedPrices['500'] },
      { min: 500, max: 1000, selected: selectedPrices['1000'] },
    ];
    return priceRanges.some(
      range =>
        range.selected && price >= (range.min || 0) && price <= range.max,
    );
  }

  return (
    <div className={styles.container}>
      <div className={isMobile ? styles.hideMobile : ''}>
        <Sidebar
          handleColorChange={handleColorChange}
          handlePriceChange={handlePriceChange}
        />
      </div>
      <div className={styles.recommended}>
        <div className={styles.sortingContainer}>
          <div className={styles.productDescription}>
            <h2 className={styles.title}>{sections.clothes}</h2>
            <p className={styles.description}>{categoryDescription}</p>
          </div>
          <Sorting handleSortChange={handleSortChange} />

          {isMobile ? (
            <div className={styles.filterContainer}>
              <MobileColorFilter handleColorChange={handleColorChange} />
              <MobilePriceFilter handlePriceChange={handlePriceChange} />
            </div>
          ) : (
            ''
          )}

          <div className={styles.productCounter}>
            {`Showing ${visibleProducts} out of ${sortedClothesItems.length} products`}
          </div>
        </div>
        <div className={styles.carouselContainer}>
          {filteredClothesItems
            .slice(0, visibleProducts)
            .map((product, index) => (
              <div className={styles.carouselItem} key={index}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
        {visibleProducts < sortedClothesItems.length && (
          <div className={styles.loadMoreContainer}>
            <button
              className={styles.loadMoreButton}
              onClick={loadMoreProducts}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Clothes;
