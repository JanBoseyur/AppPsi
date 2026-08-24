
function Login() {
  return (
    
    <div className = "center">
      
      <h1>Iniciar sesión</h1>

      <input
        type="email"
        placeholder="Correo electrónico"
      />

      <input
        type="password"
        placeholder="Contraseña"
      />

      <button>
        Iniciar sesión
      </button>

    </div>

  );
}

export default Login;