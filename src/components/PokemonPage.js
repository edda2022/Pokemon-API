import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonPage({ capitalizeFirstLetter }) {
  const { name } = useParams();
  const navigate = useNavigate();

  const [pokemonDetail, setPokemonDetail] = useState({
    sprites: {
      front_default: "",
    },
  });

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        setPokemonDetail(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(pokemonDetail);
  return (
    <>
      <div className="card w-50 pokemoncarddiv mx-auto">
        <div className="row g-2 mb-4 pokemoncard  ">
          <div className="col-md-3">
            <img
              src={pokemonDetail.sprites.front_default}
              className="img-fluid rounded-start"
              alt={capitalizeFirstLetter(name)}
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              {/* <h3 className="card-title mb-4">{capitalizeFirstLetter(name)}</h3> */}
              <p>Name: {capitalizeFirstLetter(pokemonDetail.name)}</p>
              <p>National Pokedex Number: {pokemonDetail.id}</p>
              <p className="card-text">Height: {pokemonDetail.height}</p>
              <p className="card-text">Weight: {pokemonDetail.weight}</p>
              <p>
                Statistic:
                {pokemonDetail.stats?.map((stat) => {
                  return (
                    <div>
                      {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
                    </div>
                  );
                })}
              </p>
              <p>
                Types:
                {pokemonDetail.types?.map((type) => {
                  return <div>{capitalizeFirstLetter(type.type.name)}</div>;
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="backbuttondiv">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-lg btn-secondary btn-outline-warning"
        >
          Go back to overview
        </button>
      </div>
    </>
  );
}
