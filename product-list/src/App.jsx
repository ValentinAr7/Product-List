import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import RecommendedProducts from './components/Recommendations/Recomendations';

function App() {
  return (
    <div>
      <Header />
      <RecommendedProducts />
      <Categories />
    </div>
  );
}

export default App;
