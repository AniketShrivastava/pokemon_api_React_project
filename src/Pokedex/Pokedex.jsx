import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search'
import './Pokedex.css'
function Pokedex(){
    return(

        <>
        <div className='pokemon-wrapper'>
        <h1 >POKEMON</h1>
        <Search/>
        <PokemonList/>
        </div>
        </>
        )
}
export default Pokedex;