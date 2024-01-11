import { useEffect } from 'react';
import './PokemonList.css'
import axios from 'axios';
function PokemonList(){

const Pokemon_URL = `https://pokeapi.co/api/v2/pokemon`

async function downloadPokemon(){

   const response = await axios.get(Pokemon_URL);
   const pokemonResults = response.data.results;

  const pokemonPromise =  pokemonResults.map((pokemon)=> axios.get(pokemon.url));

  const pokemonListData = await axios.all(pokemonPromise)
  console.log(pokemonListData)
}


useEffect(()=>{
 downloadPokemon()
},[])

    return(
        <></>
    )
}
export default PokemonList;