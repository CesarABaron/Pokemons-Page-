import style from "../landinPage/landinPage.module.css";
import { NavLink } from "react-router-dom";
import chari from "../../assets/images/charizard-01.png";
import postgresql from "../../assets/images/postgresql.png";
import react from "../../assets/images/react.png";
import node from "../../assets/images/nodejs.png";
import redux from "../../assets/images/redux.png";
import sequelize from "../../assets/images/sequelize.png";

const LandingPage = () => {
  return (
    <div className={style.landing}>
      <div className={style.containerHome}>
        <div className={style.left}>
          <h1>Welcome to Pokémon Application</h1>
          <div className={style.botonR}>
            <NavLink to="/home">
              <button>Get started</button>
            </NavLink>
          </div>

          <div className={style.tecnologies}>
            <img src={postgresql} alt="" className={style.tecnologiesLogo} />
            <img src={react} alt="" className={style.tecnologiesLogo} />
            <img src={node} alt="" className={style.tecnologiesLogo} />
            <img src={redux} alt="" className={style.tecnologiesLogo} />
            <img src={sequelize} alt="" className={style.tecnologiesLogo} />
          </div>
        </div>

        <div className={style.right}>
          <img src={chari} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
