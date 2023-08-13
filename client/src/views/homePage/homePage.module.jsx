import Cards from "../../components/cards/cards.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons, paginatePokemon } from "../../redux/actions";
import Filter from "../../components/filter/filter";
import style from "./homePage.module.css";

let arregloPaginado = {
  num1: 0,
  num2: 12,
  isFilter: false,
};

const HomePage = () => {
  const dispatch = useDispatch();
  let pokemons = useSelector((state) => state.pokemons);
  let pokemonsViews2 = useSelector((state) => state.pokemonsViews2);

  console.log("pokemons", pokemons);

  const paginadoNext = (e) => {
    e.preventDefault();

    if (arregloPaginado.num2 > pokemons.length) {
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
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div className={style.home}>
      <Filter />

      <div className={style.paginado}>
        <button className={style.back} name="back" onClick={paginadoBack}>
          Back
        </button>

        <button className={style.next} name="next" onClick={paginadoNext}>
          Next
        </button>
      </div>
      <Cards pokemons={pokemonsViews2} />
    </div>
  );
};

export default HomePage;
