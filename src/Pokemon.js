import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div className="pokemonInfo">
                    <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                    </div>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;