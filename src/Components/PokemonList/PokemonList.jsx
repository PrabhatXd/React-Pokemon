import React from "react";
import Pagination from "../Pagination/Pagination";



function PokemonList({ pokemonData, pokemonNested }) {
  
  const backgrounds = {
    fire: '#ffe6cc',
    bug: ' #ffffe6',
    poison: '#e6ccff',
    grass:'#ccfff5',
    water: "#cce6ff",
    normal:"#d9e6f2",
    electric:"#749fdb",
    rock:"#e6bb91",
    ghost:"#a6a19d",
    ice:"#d6f5f5",
}


 
const defaultBackground = 'white';
  const pokeCard = pokemonNested.map((element) => (
    console.log(element),
   <div className="col-sm-3 pt-3" key={element.name}>
      <div class="card  h-100"style = {{background: backgrounds[element.type] || defaultBackground }}>
      <img className="card-img-top" src={element.image} alt="Card image cap" width="100px" height="100px"></img>
      <div class="card-body">
       <small className="text-uppercase"><b>{element.name}</b></small><br />
       <small className="type">{ "Type:" +  element.type}</small><br />
      <span  >
      <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-pokeball-video-games-those-icons-lineal-color-those-icons.png"/>
      </span>
      </div>
    </div>
   </div> 
  ));
  
  return <div>
    <div className="container-fluid text-center bg-dark" >
      <h1 className="Headline">WHO'S YOUR FAVOURITE !!</h1>
      <div className="row">
      {pokeCard}
      </div>
    
    </div>
    
  </div>;
}

export default PokemonList;
