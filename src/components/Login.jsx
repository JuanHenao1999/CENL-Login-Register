import React, { useState } from "react";
import "../styles/style_login.css";
import axios from "axios";
// import axios from "axios";

const Login = () => {
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  //   const [isLoading, setIsLoading] = useState(true);

  //   const [email, setEmail] = useState("");
  //   const [password, setpassword] = useState("");

  //   const iniciarSesion = async () => {
  //     const { data } = await axios.post(`http://localhost:3000/user/login/`);
  //   };

  //   Asigna los valores a modificar en el formulario de sesion
  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const ejecutarFormulario = (e) => {
    e.preventDefault();
    iniciarSesion();

    console.log(userForm);
  };

  const iniciarSesion = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/user/login",
        userForm
      );
      console.log(data);
    } catch (error) {
      console.log(`error en al iniciar sesión ${error.message}`);
    }
  };

  return (
    <div>
      {/* INICIO Registro */}
      <div className="container-form register">
        <div className="information">
          <div className="info-childs">
            <h2>¡¡Bienvenido!!</h2>
            <p>
              Para unirte a nuestra guarderia por favor registrate con tus datos
            </p>
            <input type="button" defaultValue="Registrarse" id="sing-up" />
          </div>
        </div>

        <div className="form-information">
          <div className="form-information-childs">
            <h2>Iniciar Sesión</h2>
            <form
              onSubmit={ejecutarFormulario}
              className="form form-register"
              noValidate
            >
              <div>
                <label>
                  <i className="bx bx-envelope" />
                  <input
                    type="email"
                    placeholder="Correo Electronico"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  <i className="bx bx-lock-alt" />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </label>
              </div>
              <input type="submit" defaultValue="Iniciar Sesión" />
            </form>
          </div>
        </div>
      </div>
      {/* FIN Registro */}
    </div>
  );
};

export default Login;
