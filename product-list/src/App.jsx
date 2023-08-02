import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import RecommendedProducts from './components/Recommendations/Recomendations';
import Categories from './components/Categories/Categories';
import Clothes from './components/Pages/Clothes';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <RecommendedProducts />
                <Categories />
              </div>
            }
          />
          <Route path="/clothes" element={<Clothes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
