// import react from "react";

const Card = ({name, types, id}) => {
    return(
<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img alt="pokemon" width="150" height="150" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}/> 
    <div>
        
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <h2># {id}</h2>
        <h3>{types}</h3>
        {/* <p>{email}</p> */}
    </div>
</div>
    );
}

export default Card;