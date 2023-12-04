import { UserContext } from "./UserContext";

const user = {
    id: 123,
    name: 'Carlo',
    email: 'carlo@email.com'
}

export const UserProvider = ({ children }) => {
  return (
      <UserContext.Provider value={{hola: 'Mundo', user: user}}>
          {children}
      </UserContext.Provider>
  )
}

// value -> Información que se puede proveer a los componentes hijos {children}