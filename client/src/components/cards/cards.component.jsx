import Card from "../card/card.component";
import style from "../cards/cards.module.css";
const Cards = (props) => {
  return (
    <div className={style.Cards}>
      {props.pokemons.map((pokemons) => {
        return (
          <Card
            id={pokemons.id}
            key={pokemons.id}
            name={pokemons.name}
            image={pokemons.image}
            types={pokemons.types}
            attack={pokemons.attack}
          />
        );
      })}
    </div>
  );
};

export default Cards;
