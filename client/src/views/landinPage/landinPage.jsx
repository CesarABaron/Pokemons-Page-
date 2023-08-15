import style from "../landinPage/landinPage.module.css";
import { NavLink } from "react-router-dom";
import chari from "../../assets/images/charizard-01.png";

const LandingPage = () => {
  return (
    <div className={style.landing}>
      <div className={style.container}>
        <img src={chari} alt="" />
        <div>
          <h1 className={style.div1}>
            <h1>Welcome to PokéWorld Where Pokémon Dreams Begin</h1>

            <button> Get started</button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
