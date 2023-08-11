import { Link } from "react-router-dom";
import style from "./card.module.css";
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

const Card = (props) => {
  const styleMap = {
    fire: style.fire,
    water: style.water,
    poison: style.poison,
    electric: style.electric,
    normal: style.normal,
    rock: style.rock,
    ice: style.ice,
    dragon: style.dragon,
    psychic: style.psychic,
    grass: style.grass,
    bug: style.bug,
    fairy: style.fairy,
    dark: style.dark,
    ghost: style.ghost,
    ground: style.ground,
    fighting: style.fighting,
    flying: style.flying,
    steel: style.steel,
  };

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

  const primaryType = props.types[0].name.toLowerCase();
  const cardClass = styleMap[primaryType] || style.Card;

  return (
    <div className={cardClass}>
      <div className={style.divImagen}>
        <div className={style.contenedorType}>
          {props.types.map((type) => {
            return (
              <img
                className={style.type}
                src={imageMappingIcon[type.name]}
                alt=""
              />
            );
          })}
        </div>
        <Link to={`/detail/${props.id}`}>
          <img className={style.image} src={props.image} alt="" />
        </Link>
        <h1 className={style.name}>
          {props.name[0].toUpperCase() + props.name.slice(1)}
        </h1>
      </div>
    </div>
  );
};

export default Card;
