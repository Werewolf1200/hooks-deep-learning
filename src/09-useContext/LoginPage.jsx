import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user,setUser } = useContext(UserContext); // Extraemos la información requerida (value) del Provedor de nuestro Contexto
  return (
      <>
      <h1>LoginPage</h1>
      
      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
        className="btn btn-primary"
        onClick={ () => setUser({ id: 321, name: 'Iaphet', email: 'iaphet@correo.com' })}
      >
        Establecer usuario
      </button>
      </>
  )
}