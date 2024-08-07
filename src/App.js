import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Component/Page/Blog/Blog';
import Home from './Component/Page/Home/Home';
import Signup from './Component/Page/Signup/Signup';
import ArticleDetails from './Component/Page/ArticleDetails/ArticleDetails';
import Login from './Component/Page/Connexion/Connexion';
import Compte from './Component/Page/Compte/Compte';
import Inscription from './Component/Page/Inscription/Inscription';
import Partanariat from './Component/Page/Partanariat/Partanariat';
import NosProducteurs from './Component/Page/NosProducteurs/NosProducteurs';
import Leaflet from './Component/Page/Leaflet/Leaflet';
import MapComponent from './Component/Page/Leaflet/MapComponent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/partanariat" element={<Partanariat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compte" element={<Compte />} />
        <Route path="/details-article/:id" element={<ArticleDetails />} />
        <Route path="/nos-producteurs" element={<NosProducteurs />} />
        <Route path="/products" element={<Leaflet />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
