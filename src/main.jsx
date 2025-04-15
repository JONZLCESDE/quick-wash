// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import Footer from "./components/footer/Footer";
// import "./index.css";
// import Home from "./pages/guest/home";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Home />
//     <Footer />
//   </StrictMode>
// );


// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import LoginAdmin from './components/auth/LoginAdmin'; // Importa el LoginAdmin
// import MenuGuest from './components/menu/MenuGuest';
// import History from './pages/guest/History'; // Si quieres una ruta para el historial
// import OurServices from './pages/guest/OurServices';
// import WhoWeAre from './pages/guest/WhoWeAre';

// function Main() {
//   return (
//     <Router>
//       <MenuGuest /> {/* El menú siempre estará visible */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/servicios" element={<OurServices />} />
//         <Route path="/quienes-somos" element={<WhoWeAre />} />
//         <Route path="/historial" element={<History />} /> {/* Ejemplo de ruta */}
//         <Route path="/admin/login" element={<LoginAdmin />} /> {/* Ruta para el login */}
//       </Routes>
//     </Router>
//   );
// }

// export default Main;

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import LoginAdmin from './components/auth/LoginAdmin';
// import MenuGuest from './components/menu/MenuGuest';
// import Main from './Main';
// import History from './pages/guest/History'; // Asegúrate de tener este componente
// import Home from './pages/guest/Home';
// import OurServices from './pages/guest/OurServices';
// import WhoWeAre from './pages/guest/WhoWeAre';
// import './src/index.css'; // Importa tus estilos globales

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Main /> {/* Renderiza el componente Main que contiene el Router */}
//   </React.StrictMode>
// );

// function Main() {
//   return (
//     <Router>
//       <MenuGuest />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/servicios" element={<OurServices />} />
//         <Route path="/quienes-somos" element={<WhoWeAre />} />
//         <Route path="/historial" element={<History />} /> {/* Asegúrate de tener este componente */}
//         <Route path="/admin/login" element={<LoginAdmin />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Main;




import React from 'react';
import { createRoot } from 'react-dom/client';

import './src/index.css';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main /> 
  </React.StrictMode>
);


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginAdmin from './components/auth/LoginAdmin';
import LoginOperator from './components/auth/LoginOperator';
import MenuGuest from './components/menu/MenuGuest';
import History from './pages/guest/History';
import Home from './pages/guest/Home';
import OurServices from './pages/guest/OurServices';
import WhoWeAre from './pages/guest/WhoWeAre';

function Main() {
  return (
    <Router>
      <MenuGuest />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<OurServices />} />
        <Route path="/quienes-somos" element={<WhoWeAre />} />
        <Route path="/historial" element={<History />} /> 
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/operator/login" element={<LoginOperator />} /> 
      </Routes>
    </Router>
  );
}

export default Main;

























// import ReactDOM from 'react-dom/client';

// import Main from './Main'; // Importa el componente principal

// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>
// );


// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import LoginAdmin from './components/auth/LoginAdmin';
// import MenuGuest from './components/menu/MenuGuest';
// import History from './pages/guest/History';
// import Home from './pages/guest/Home';
// import OurServices from './pages/guest/OurServices';
// import WhoWeAre from './pages/guest/WhoWeAre';

// function Main() {
//   return (
//     <Router>
//       <MenuGuest />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/servicios" element={<OurServices />} />
//         <Route path="/quienes-somos" element={<WhoWeAre />} />
//         <Route path="/historial" element={<History />} />
//         <Route path="/admin/login" element={<LoginAdmin />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Main;