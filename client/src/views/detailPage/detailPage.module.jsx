import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./detailPage.module.css";
import rockImage from "../../assets/images/inconsHd/rock.png";
import bugImage from "../../assets/images/inconsHd/bug.png";
import darkImage from "../../assets/images/inconsHd/dark.png";
import fireImage from "../../assets/images/inconsHd/fire.png";
import dragonImage from "../../assets/images/inconsHd/dragon.png";
import electricImage from "../../assets/images/inconsHd/electric.png";
import fairyImage from "../../assets/images/inconsHd/fairy.png";
import flyingImage from "../../assets/images/inconsHd/flying.png";
import fightingImage from "../../assets/images/inconsHd/fighting.png";
import ghostImage from "../../assets/images/inconsHd/ghost.png";
import grassImage from "../../assets/images/inconsHd/grass.png";
import groundImage from "../../assets/images/inconsHd/ground.png";
import iceImage from "../../assets/images/inconsHd/ice.png";
import normalImage from "../../assets/images/inconsHd/normal.png";
import poisonImage from "../../assets/images/inconsHd/poison.png";
import psychicImage from "../../assets/images/inconsHd/psychic.png";
import steelImage from "../../assets/images/inconsHd/steel.png";
import waterImage from "../../assets/images/inconsHd/water.png";
import healt from "../../assets/images/inconsHd/life.png";
import sword from "../../assets/images/inconsHd/sword.png";
import shield from "../../assets/images/inconsHd/shield.png";

const imageMappingIcon = {
  rock: rockImage,
  fire: fireImage,
  bug: bugImage,
  dark: darkImage,
  dragon: dragonImage,
  electric: electricImage,
  fairy: fairyImage,
  fighting: fightingImage,
  flying: flyingImage,
  ghost: ghostImage,
  grass: grassImage,
  ground: groundImage,
  ice: iceImage,
  normal: normalImage,
  poison: poisonImage,
  psychic: psychicImage,
  steel: steelImage,
  water: waterImage,
};

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
    <div className={style.contenedor}>
      <div>
        <div className={style.card}>
          <div className={style.id}>
            {" "}
            <h1>{pokemons[0]?.id}</h1>
          </div>
          <div className={style.name}>
            <h1>
              {pokemons[0]?.name[0].toUpperCase() + pokemons[0]?.name.slice(1)}
            </h1>
          </div>
          <div className={style.imageCard}>
            <img src={pokemons[0]?.image} alt="" />
          </div>

          <div className={style.points}>
            <img src={sword} alt="" />
            <h1>{pokemons[0]?.attack}</h1>
            <img src={shield} alt="" />
            <h1>{pokemons[0]?.defense}</h1>
            <img src={healt} alt="" />
            <h1>{pokemons[0]?.hp}</h1>
          </div>

          <div className={style.iconContainer}>
            {pokemons[0]?.types.map((type) => {
              return (
                <img
                  className={style.icon}
                  src={imageMappingIcon[type.name]}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
