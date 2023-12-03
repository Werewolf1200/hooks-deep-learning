import { Navigate, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { NavBar } from "./NavBar";

export const MainApp = () => {
  return (
      <>
          <NavBar />
          <hr />

          <Routes> {/*Definir Rutas*/}
              <Route path="/" element={ <HomePage /> } />
              <Route path="about" element={ <AboutPage /> } />
              <Route path="login" element={<LoginPage />} />
              
              <Route path="/*" element={<Navigate to="/" />} /> {/*Cuando ingresa otra ruta, redirige a Home*/}
              
          </Routes>
      </>
  )
}
