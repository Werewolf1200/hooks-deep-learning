import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
      <UserProvider>
          <NavBar />
          <hr />

          <Routes> {/*Definir Rutas*/}
              <Route path="/" element={ <HomePage /> } />
              <Route path="about" element={ <AboutPage /> } />
              <Route path="login" element={<LoginPage />} />
              
              <Route path="/*" element={<Navigate to="/" />} /> {/*Cuando ingresa otra ruta, redirige a Home*/}
              
          </Routes>
      </UserProvider>
  )
}
