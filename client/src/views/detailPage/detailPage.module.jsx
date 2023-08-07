import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();

  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);
  useEffect(() => {
    try {
      const axiosGet = async () => {
        const response = await axios(`http://localhost:3001/pokemons/${id}`);

        if (response.data) {
          setPokemons(response.data);
        }
      };
      axiosGet();
    } catch (error) {
      alert(error.response.data);
    }
    return setPokemons([]);
  }, [id]);

  return (
    <div>
      <h1>{pokemons[0]?.id}</h1>
      <h1>{pokemons[0]?.name}</h1>
      <img src={pokemons[0]?.image} alt="" />
      <h1>{pokemons[0]?.attack}</h1>
      <h1>{pokemons[0]?.defense}</h1>
      {pokemons[0]?.types.map((type) => {
        return <h1>{type.name}</h1>;
      })}
    </div>
  );
};

export default DetailPage;
