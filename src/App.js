import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import VideoPage from './pages/VideoPage';
import PicturePage from './pages/PicturePage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import Home from './pages/Home';
import NavBar from './utils/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/pictures" element={<PicturePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
