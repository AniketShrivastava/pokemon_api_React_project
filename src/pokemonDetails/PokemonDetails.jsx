import { useEffect, useState } from 'react';
import './PokemonDetails.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function PokemonDetails() {

    const { id } = useParams()
    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null)


    async function downloadPokemon() {
        const response = await axios.get(POKEMON_DETAIL_URL + id)
        const pokemon = response.data;
        setPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types,
            image: pokemon.sprites.other.dream_world.front_default

        });
    }
    useEffect(() => {
        downloadPokemon()
    }, [])
    return (
        <>
        <h1 className='pokedex-redirect'>
        <Link to="/">
        pokedex
        </Link>
        </h1>
       {pokemon&&
        <div className='pokemonDetails-wrapper'>
            <div className='pokemon-detail-name'>
                {pokemon.name}
            </div>
            <div>
                <img src={pokemon.image} className='pokemon-image' />
            </div>
            <div className='pokemon-attr'>
               Height: {pokemon.height}
               Weight: {pokemon.weight}
            </div>
            
            <div className='pokemon-types'>
               <h1>
               Types:</h1> {pokemon.types.map(t=><span className='type' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>}
        </>
    )
}
export default PokemonDetails;