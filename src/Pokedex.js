import React from 'react';
import Pokemon from './Pokemon';
import data from './data.js'

class Pokedex extends React.Component {

    constructor() {
        super()
            this.state = {
                pokemon: 0
            }
            this.nextPokemon = this.nextPokemon.bind(this)
    }

    nextPokemon = () => {
        if (this.state.pokemon < (data.length - 1)) {
            this.setState((pokemonAnterior, _props) => ({
                pokemon: pokemonAnterior.pokemon + 1
            }))
        } else {
            this.setState(() => ({
                pokemon: 0
            }))
        }
    }

    render() {
        return (
            <div>
            <button onClick={this.nextPokemon}>Próximo pokémon</button>
            <div className="pokedex">
              <Pokemon key={data[this.state.pokemon].id} pokemon={data[this.state.pokemon]} />
            </div>
            </div>
        );
    }
}

export default Pokedex;