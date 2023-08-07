import Cards from "../../components/cards/cards.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons } from "../../redux/actions";
import Filter from "../../components/filter/filter";

const HomePage = () => {
  const dispatch = useDispatch();
  let pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <Cards pokemons={pokemons} />
    </div>
  );
};

export default HomePage;
