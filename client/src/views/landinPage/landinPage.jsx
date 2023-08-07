import style from "../landinPage/landinPage.module.css";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={style.landing}>
      <button className={style.container}>
        <div className={style.content}>
          <NavLink to={"/home"}>
            <p>Get Started</p>
          </NavLink>
        </div>
      </button>
    </div>
  );
};

export default LandingPage;
