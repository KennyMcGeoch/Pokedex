import React from "react";
import Card from "./Card";


const CardList = ({pokemon}) => {
    const CardArray = pokemon.map((user, i) => {
        return <Card 
        key={i} 
        name={pokemon[i][1]}
        id={pokemon[i][0]}
        types={pokemon[i][2]} />
    })
    return (
        <div>
            {CardArray}
         </div>
    );
}

export default CardList;