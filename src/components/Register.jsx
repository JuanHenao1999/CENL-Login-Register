// import React, { useState } from "react";
// import "../styles/style_login.css";

// const Register = () => {
//   const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

//   const toggleForm = () => {
//     setIsLoginFormVisible((prevState) => !prevState);
//   };

//   return (
//     <div>
//       <div
//         className={`container-form ${
//           isLoginFormVisible ? "login" : "register"
//         }`}
//       >
//         <div className="information">
//           <div className="info-childs">
//             <h2>
//               {isLoginFormVisible
//                 ? "¡¡Bienvenido Nuevamente!!"
//                 : "Bienvenido al Centro Educativo Nuevos Lideres"}
//             </h2>
//             <p>
//               {isLoginFormVisible
//                 ? "Para unirte a nuestra guarderia por favor registrate con tus datos"
//                 : "Para unirte a nuestra guarderia por favor Inicia Sesión con tus datos"}
//             </p>
//             <input
//               type="button"
//               value={isLoginFormVisible ? "Registrarse" : "Iniciar Sesión"}
//               onClick={toggleForm}
//             />
//           </div>
//         </div>
//         <div className="form-information">
//           <div className="form-information-childs">
//             <h2>{isLoginFormVisible ? "Iniciar Sesión" : "Crear mi Cuenta"}</h2>
//             <form
//               className={`form ${
//                 isLoginFormVisible ? "form-login" : "form-register"
//               }`}
//               noValidate
//             >
//               {!isLoginFormVisible && (
//                 <div>
//                   <label>
//                     <i className="bx bx-user" />
//                     <input
//                       type="text"
//                       placeholder="Nombre Usuario"
//                       name="userName"
//                     />
//                   </label>
//                 </div>
//               )}
//               <div>
//                 <label>
//                   <i className="bx bx-envelope" />
//                   <input
//                     type="email"
//                     placeholder="Correo Electronico"
//                     name="userEmail"
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <i className="bx bx-lock-alt" />
//                   <input
//                     type="password"
//                     placeholder="Contraseña"
//                     name="userPassword"
//                   />
//                 </label>
//               </div>
//               <input
//                 type="submit"
//                 value={isLoginFormVisible ? "Iniciar Sesión" : "Registrame"}
//               />
//               <div className="alerta-error">
//                 Todos los campos son obligatorios
//               </div>
//               <div className="alerta-exito">
//                 {isLoginFormVisible
//                   ? "Iniciaste sesión correctamente"
//                   : "Te has registrado correctamente"}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
