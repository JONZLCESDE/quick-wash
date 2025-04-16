
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginAdmin from './components/auth/LoginAdmin';
import MenuGuest from './components/menu/MenuGuest';
import History from './pages/guest/History';
import Home from './pages/guest/Home';
import OurServices from './pages/guest/OurServices';
import WhoWeAre from './pages/guest/WhoWeAre';

function AppRouter() {
  return (
    <Router>
      <MenuGuest />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<OurServices />} />
        <Route path="/quienes-somos" element={<WhoWeAre />} />
        <Route path="/historial" element={<History />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
