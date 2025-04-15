// import "./MenuGuest.css";

// function MenuGuest() {
//   return (
//     <header>
//       <nav>
//         <img src="/logo.png" alt="" />
//         <ul>
//           <li>
//             {" "}
//             <a href="#seccionNumeroDos">¿Quienes somos?</a>
//           </li>

//           <li>
//             {" "}
//             <a href="#tres">Nuestros servicios</a>
//           </li>

//           <li>
//             <a href="#historico">Fidelización </a>
//           </li>

//           <li>
//             {" "}
//             <a href="#seccionNumeroCinco">Contáctanos </a>
//           </li>

//           <a href="admin2/dashboard.html">
//             <button>¿Eres Administrador?</button>
//           </a>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default MenuGuest;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './MenuGuest.css';

// function MenuGuest() {
//   return (
//     <header>
//       <nav>
//         <Link to="/">
//           <img src="/logo.png" alt="" /> {/* Asegúrate de que la ruta del logo sea correcta */}
//         </Link>
//         <ul>
//           <li>
//             <Link to="/quienes-somos">¿Quienes somos?</Link>
//           </li>
//           <li>
//             <Link to="/servicios">Nuestros servicios</Link>
//           </li>
//           <li>
//             <Link to="/fidelizacion">Fidelización</Link> {/* Ajusta la ruta si es diferente */}
//           </li>
//           <li>
//             <Link to="/contactanos">Contáctanos</Link> {/* Ajusta la ruta si es diferente */}
//           </li>
//           <li>
//             <Link to="/admin/login">
//               <button>¿Eres Administrador?</button>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }





// export default MenuGuest;





function MenuGuest() {
  return (
    <header>
      <nav>
        <h1>Quick Wash</h1>
        <ul>
          <li><a href="#">¿Quienes somos?</a></li>
          <li><a href="#">Nuestros servicios</a></li>
          <li><a href="#">Fidelización</a></li>
          <li><a href="#">Contáctanos</a></li>
          <li><button>¿Eres Administrador?</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default MenuGuest;