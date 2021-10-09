import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <div className="title"></div>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;