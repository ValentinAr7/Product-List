import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RecommendedProducts from './components/Recommendations/Recomendations';
import Header from './components/Header/Header';
import PrivacyPolicies from './components/Pages/PrivacyPolicies/PrivacyPolicies';
import Categories from './components/Categories/Categories';
import Terms from './components/Pages/T&C/Terms&Conditions';
import Clothes from './components/Pages/Clothes/Clothes';
import Watches from './components/Pages/Watches/Watches';
import Contact from './components/Pages/Contact/Contact';
import Phones from './components/Pages/Phones/Phones';
import Shoes from './components/Pages/Shoes/Shoes';
import Bags from './components/Pages/Bags/Bags';
import Footer from './components/Footer/Footer';

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
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicies />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
