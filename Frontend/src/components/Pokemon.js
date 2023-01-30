import { Link } from 'react-router-dom';

export default function Pokemon({pokemon, capitalizeFirstLetter}) {



    return(
        <div key={pokemon.name} className="pokemon">
            <div className="pokemonname">{capitalizeFirstLetter(pokemon.name)}</div>
            <div className="pokemonbuttondiv">
                <Link to={`/pokemon/${pokemon.name}`}>
                    <button className="btn-outline-secondary btn btn-light btn-sm pokemonbutton">View Details</button>
                </Link>
            </div>
           
        </div>
    )
}