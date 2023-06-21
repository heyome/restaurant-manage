import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/user/UserList';
import VideoPage from './pages/VideoPage';
import PicturePage from './pages/PicturePage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import Home from './pages/Home';
import NavBar from './utils/NavBar';
import UpdateUser from './pages/user/UpdateUser';

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
        <Route path="/update/:userId" element={<UpdateUser />} />
        
      </Routes>
    </Router>
  );
}

export default App;
