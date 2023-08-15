import Cards from "../../components/cards/cards.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons, paginatePokemon } from "../../redux/actions";
import Filter from "../../components/filter/filter";
import style from "./homePage.module.css";
import { useState } from "react";
import pikachu from "../../assets/images/pikachu.gif";
import back from "../../assets/images/back.png";
import next from "../../assets/images/next.png";

let arregloPaginado = {
  num1: 0,
  num2: 12,
  isFilter: false,
};

const HomePage = () => {
  const dispatch = useDispatch();
  let pokemons = useSelector((state) => state.pokemons);
  let pokemonsViews2 = useSelector((state) => state.pokemonsViews2);
  const [showLoading, setShowLoading] = useState(true);

  const paginadoNext = (e) => {
    e.preventDefault();

    if (arregloPaginado.num2 >= pokemons.length) {
      alert("there is no more Pokemons");
      return;
    }
    if (pokemons.length > arregloPaginado.num1) {
      dispatch(
        paginatePokemon({
          num1: arregloPaginado.num1 + 12,
          num2: arregloPaginado.num2 + 12,
        })
      );

      arregloPaginado.num1 = arregloPaginado.num1 + 12;
      arregloPaginado.num2 = arregloPaginado.num2 + 12;
    }
  };

  const paginadoBack = (e) => {
    if (arregloPaginado.num1 === 0) {
      alert("There Is no more Pokemons behain");
      return;
    }
    dispatch(
      paginatePokemon({
        num1: arregloPaginado.num1 - 12,
        num2: arregloPaginado.num2 - 12,
      })
    );

    arregloPaginado.num1 = arregloPaginado.num1 - 12;
    arregloPaginado.num2 = arregloPaginado.num2 - 12;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    if (pokemons.length === 0) dispatch(getAllPokemons());

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <div className={style.home}>
      <Filter />

      {pokemonsViews2.length === 1 ? null : (
        <div className={style.containerPaginado}>
          <div className={style.carga}>
            {showLoading ? (
              <div className={style.loading}>
                <p>Loading...</p>
                <img src={pikachu} alt="" />
              </div>
            ) : null}
          </div>
          <div className={style.buttons}>
            <img
              src={back}
              alt=""
              className={style.back}
              name="back"
              onClick={paginadoBack}
            ></img>
            <img
              src={next}
              alt=""
              className={style.next}
              name="next"
              onClick={paginadoNext}
            ></img>
          </div>
        </div>
      )}

      <Cards pokemons={pokemonsViews2} />
      {pokemonsViews2.length === 1 ? null : (
        <div className={style.containerPaginado}>
          <div className={style.carga}></div>
          <div className={style.buttons}>
            <img
              src={back}
              alt=""
              className={style.back}
              name="back"
              onClick={paginadoBack}
            ></img>
            <img
              src={next}
              alt=""
              className={style.next}
              name="next"
              onClick={paginadoNext}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
