import React, { useState } from "react";
import "./login.css";
function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const iniciar = (e) => { 
    e.preventDefault();

    if (correo.includes("negocio@romulo.com") && contraseña === "romulo123") {
      alert("Bienvenido Señor/a ESFOT");
      window.location.href=("/");
    } else {
      alert("Usuario o contraseña incorrectos. Por favor ingrese nuevamente");

      if (!correo.includes("@romulo.com")){
        document.querySelector('.correo1').classList.add('error');
      }
      
      if(contraseña !== "romulo123"){
        document.querySelector('.contra').classList.add('error');
      }
    }
  };

  const cancelar = () => {
    alert("Proceso Cancelado");
    setCorreo('');
    setContraseña('');
  };

  return (
    <div className='cuadro'>
          <form className="formularioLogin" onSubmit={iniciar}>
            <nav className="Cabe_Login">
              <h3>Inicio de sesión</h3>
            </nav>
            <label>
              <h6>Ingrese su correo: </h6>
            </label>
            <input id='usuario' className='correo1' type='email' value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
            <label>
              <h6>Ingrese su contraseña: </h6>
            </label>
            <input id='contra' className='contra' type='password' value={contraseña} onChange={(e) => setContraseña(e.target.value)} required/><br/><br/>
            <nav className="buton_Con">
              <button type="submit" className="botones">Iniciar sesión</button><br/>
              <button type="button" className="botones" onClick={cancelar}>Cancelar</button>
            </nav>
          </form>
          <div className="paraRegistro">
            <a href="./registro">Registrarse</a>
          </div>
        </div>
  );
}

export default Login;
