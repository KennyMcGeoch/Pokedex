import React from "react";
import Card from "./Card";


const CardList = ({pokemon}) => {
    const CardArray = pokemon.map((user, i) => {

        const pokemonType = pokemon[i].types.map((pokemonk, j) => {
            return pokemon[i].types[j].type.name.charAt(0).toUpperCase() + pokemon[i].types[j].type.name.slice(1);
        })

        return <Card 
        key={i} 
        name={pokemon[i].name}
        id={pokemon[i].id}
        types={pokemonType.join(" ")} />
    })
    return (
        <div>
            {CardArray}
         </div>
    );
}

export default CardList;