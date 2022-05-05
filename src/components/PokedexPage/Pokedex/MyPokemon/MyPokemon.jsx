import React from "react";
import "./MyPokemon.css";

function MyPokemon() {
  // const { capturedPokemons } = useContext(GameContext);
  let capturedPokemons = JSON.parse(localStorage.getItem("myPokemon"));

  // let cardDisplay = (pokemon) => {


  //   <div key={pokemon.id}><img className="pokemon-img_captured" src={pokemon.image} alt="My pokemon captured" style={}/>
  //   <span className="pokemon-captured_name">{pokemon.name}</span></div>
  // }

  
  
  const cardColor = (type) => {
    switch (type) {
      case 'grass':
        return {backgroundColor: "#92E469", border: "2px solid #78C850", boxShadow: "5px 5px 15px 5px #4E8234"};
      case 'normal':
        return {backgroundColor: "#CDCDA8", border: "2px solid #A8A878", boxShadow: "5px 5px 15px 5px #818163"}
      case 'fire':
        return {backgroundColor: "#F6A66C", border: "2px solid #F08030", boxShadow: "5px 5px 15px 5px #CB641D"}
      case 'fighting':
        return {backgroundColor: "#E9625A", border: "2px solid #C03028", boxShadow: "5px 5px 15px 5px #7D1F1A"}
      case 'water':
        return {backgroundColor: "#98B6FF", border: "2px solid #6890F0", boxShadow: "5px 5px 15px 5px #445E9C"}
      case 'flying':
        return {backgroundColor: "#C2B1F6", border: "2px solid #A890F0", boxShadow: "5px 5px 15px 5px #6D5E9C"}
      case 'poison':
        return {backgroundColor: "#C080C0", border: "2px solid #A040A0", boxShadow: "5px 5px 15px 5px #682A68"}
      case 'electric':
        return {backgroundColor: "#F8E084", border: "2px solid #F8D030", boxShadow: "5px 5px 15px 5px #BD9E21"}
      case 'ground':
        return {backgroundColor: "#F8DD95", border: "2px solid #E0C068", boxShadow: "5px 5px 15px 5px #927D44"}
      case 'psychic':
        return {backgroundColor: "#F488A9", border: "2px solid #F85888", boxShadow: "5px 5px 15px 5px #A23B5B"}
      case 'rock':
        return {backgroundColor: "#DCC873", border: "2px solid #B8A038", boxShadow: "5px 5px 15px 5px #796824"}
      case 'ice':
        return {backgroundColor: "#B7F3F3", border: "2px solid #98D8D8", boxShadow: "5px 5px 15px 5px #41A8A8"}
      case 'bug':
        return {backgroundColor: "#CFDF46", border: "2px solid #A8B820", boxShadow: "5px 5px 15px 5px #6D7815"}
      case 'dragon':
        return {backgroundColor: "#B8A0F8", border: "2px solid #7038F8", boxShadow: "5px 5px 15px 5px #483890"}
      case 'ghost':
        return {backgroundColor: "#9D84C7", border: "2px solid #705898", boxShadow: "5px 5px 15px 5px #493964"}
      case 'dark':
        return {backgroundColor: "#967F6F", border: "2px solid #705848", boxShadow: "5px 5px 15px 5px #49392F"}
      case 'steel':
        return {backgroundColor: "#DCDCF0", border: "2px solid #B8B8D0", boxShadow: "5px 5px 15px 5px #787887"}
      case 'fairy':
        return {backgroundColor: "#FFD9DD", border: "2px solid #F0B6BC", boxShadow: "5px 5px 15px 5px #D87881"}
      default:
        return {backgroundColor: "#DCDCF0", border: "2px solid #B8B8D0", boxShadow: "5px 5px 15px 5px #787887"}
    }
  }
  return (
    <>
      <div className="my-pokemon_container">
        <div className="my-pokemon_info">
          <h2 className="my-pokemon_title">My Pokemons</h2>
          <h3 className="my-pokemon_total">Total: {capturedPokemons.length}</h3>
        </div>
        <div className="my-pokemon_display">
          {capturedPokemons &&
            capturedPokemons.map(pokemon => (
              
              <div key={pokemon.id}>
                <img
                  className="pokemon-img_captured"
                  src={pokemon.image}
                  alt="My pokemon captured"
                  style={cardColor(pokemon.type)}
                />
                <span className="pokemon-captured_name">
                  {pokemon.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MyPokemon;
