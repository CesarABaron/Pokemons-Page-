import "./App.css";
import LandingPage from "./views/landinPage/landinPage.jsx";
import NavBar from "./components/navBar/navBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homePage/homePage.module";
import DetailPage from "./views/detailPage/detailPage.module";
import CreatePokemon from "./views/createForm/createPokemon";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreatePokemon />} />
      </Routes>
    </div>
  );
}

export default App;
