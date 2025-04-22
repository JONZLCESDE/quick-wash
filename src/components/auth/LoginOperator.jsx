// import { useState } from 'react';
// import './LoginOperator.css';

// function LoginOperator() {
//   const [nombre, setNombre] = useState('');
//   const [telefono, setTelefono] = useState('');
//   const [correo, setCorreo] = useState('');
//   const [clave, setClave] = useState('');

//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     if (id === 'nombre') {
//       setNombre(value);
//     } else if (id === 'telefono') {
//       setTelefono(value);
//     } else if (id === 'correo') {
//       setCorreo(value);
//     } else if (id === 'clave') {
//       setClave(value);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    

//     console.log('Intentando iniciar sesión como operador con:', { nombre, telefono, correo, clave });
    
//   };

//   return (
//     <div className="background-overlay">
//       <div className="container">
//         <div className="card">
//           <div className="left-side">
//             <img src="/images/avatar png.png" alt="Operador" className="operator-icon" />
//           </div>
//           <div className="right-side">
//             <h2>Ingreso De Operador:</h2>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="nombre">¿Cual es tu nombre?</label>
//               <input
//                 type="text"
//                 id="nombre"
//                 placeholder="¿Quien Eres?"
//                 value={nombre}
//                 onChange={handleInputChange}
//                 required
//               />

//               <label htmlFor="telefono">Numero de Telefono:</label>
//               <input
//                 type="tel"
//                 id="telefono"
//                 name="telefono"
//                 placeholder="Tu celular o fijo"
//                 value={telefono}
//                 onChange={handleInputChange}
//                 required
//               />

//               <label htmlFor="correo">Tu correo por favor:</label>
//               <input
//                 type="email"
//                 id="correo"
//                 placeholder="example@mail.com"
//                 value={correo}
//                 onChange={handleInputChange}
//                 required
//               />

//               <label htmlFor="clave">Password:</label>
//               <input
//                 type="password"
//                 id="clave"
//                 placeholder="Escribe una clave SOLO NUMEROS"
//                 value={clave}
//                 onChange={handleInputChange}
//                 required
//               />

//               <button type="submit">Comprobar Usuario</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginOperator;