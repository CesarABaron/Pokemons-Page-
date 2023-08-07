import { Link } from "react-router-dom";
import style from "./card.module.css";

const Card = (props) => {
  const styleMap = {
    fire: style.Card,
    water: style.Card1,
    poison: style.Card2,
  };

  const primaryType = props.types[0].name.toLowerCase();
  const cardClass = styleMap[primaryType] || style.Card;

  return (
    <div className={cardClass}>
      <Link to={`/detail/${props.id}`}>
        <h1 className={style.name}>{props.attack}</h1>
        <h1 className={style.name}>{props.name}</h1>

        <img className={style.image} src={props.image} alt="" />
      </Link>

      {props.types.map((type) => {
        return <h1 className={style.type}>{type.name}</h1>;
      })}
    </div>
  );
};

export default Card;
