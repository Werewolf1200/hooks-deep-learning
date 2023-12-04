import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user } = useContext(UserContext); // Extraemos la información requerida (value) del Provedor de nuestro Contexto
  return (
      <>
      <h1>LoginPage</h1>
      
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      </>
  )
}