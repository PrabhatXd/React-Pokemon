import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import PokemonList from "../PokemonList/PokemonList";
import axios from "axios";

function App() {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [NextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonNested, setPokemonNested] = useState([]);
 
  const [loading, setLoading] = useState(true);

 

  const fetchNestedData = async () => {
    const pokeName = await axios.get(currentPageUrl);
    console.log(pokeName.data.next,"nextpage url")
    setNextPageUrl(pokeName.data.next)
    setPrevPageUrl(pokeName.data.previous)

    const pokeArray = [];
    for (let i = 0; i < pokeName.data.results.length; i++) {
      const poke = pokeName.data.results[i];
      const pokeImage = await axios.get(poke.url);
      const pokeObj = {
        name: poke.name,
        image: pokeImage.data.sprites.other.dream_world.front_default,
        type:pokeImage.data.types[0].type.name
      };
      pokeArray.push(pokeObj);
    }
    // console.log(pokeArray);
    // console.log(pokemonData)
    setPokemonNested(pokeArray);
  };
  function gotoNextPage() {
      console.log(NextPageUrl,"nextPage url")
    setCurrentPageUrl(NextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }
  useEffect(() => {
    fetchNestedData();
    setLoading(false)
    
    
  }, [currentPageUrl]);

  return (
    <div>
      <PokemonList pokemonData={pokemonData} pokemonNested={pokemonNested} />
      <Pagination  gotoNextPage={NextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
    </div>
  );
}

export default App;
