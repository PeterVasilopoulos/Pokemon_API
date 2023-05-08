import React, { useState } from 'react'

const FetchPokemon = () => {
    // Variable to hold the pokemon list
    const [pokemon, setPokemon] = useState([]);

    // Function to fetch data from pokemon api
    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => {
            // Convert data to json
            return response.json();
        })
        .then((response) => {
            // Console log data to check format
            console.log(response.results);
            // Place data into pokemon variable
            setPokemon(response.results);
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Error: ", err);
        })
    }

    return (
        <div>
            {/* Button to fetch pokemon */}
            <button className='fetch-button' onClick={fetchData}>Fetch Pokemon</button>

            {/* Map through all data and print out names of pokemon */}
            {
                pokemon.map((poke, i) => {
                    return (
                        <div key={i}>
                            <h2>{poke.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchPokemon