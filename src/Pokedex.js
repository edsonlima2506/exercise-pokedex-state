import React from 'react';
import Pokemon from './Pokemon';
import data from './data.js';

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

    prevPokemon = () => {
        if (this.state.pokemon !== 0) {
            this.setState((pokemonAnterior, _props) => ({
                pokemon: pokemonAnterior.pokemon - 1
            }))
        } else {
            this.setState(() => ({
                pokemon: data.length - 1
            }))
        }
    }

    filterPokemon = (event) => {
        const filteredPokemon = data.filter((pokemon) => (pokemon.type === event.target.textContent))
        this.setState(() => ({
            pokemon: filteredPokemon[0].id
        }))
    }

    render() {
        return (
            <div>
            <button onClick={this.prevPokemon} className="prevPokemon">Pokémon anterior</button>
            <button onClick={this.nextPokemon} className="nextPokemon">Próximo pokémon</button>
            <div className="types">
                <button className="typeButton" onClick={this.filterPokemon}>Electric</button>
                <button className="typeButton" onClick={this.filterPokemon}>Fire</button>
                <button className="typeButton" onClick={this.filterPokemon}>Psychic</button>
                <button className="typeButton" onClick={this.filterPokemon}>Bug</button>
                <button className="typeButton" onClick={this.filterPokemon}>Dragon</button>
                <button className="typeButton" onClick={this.filterPokemon}>Normal</button>
                <button className="typeButton" onClick={this.filterPokemon}>Poison</button>
            </div>
            <div className="pokedex">
              <Pokemon key={data[this.state.pokemon].id} pokemon={data[this.state.pokemon]} />
            </div>
            </div>
        );
    }
}

export default Pokedex;