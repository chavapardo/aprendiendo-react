import React, { Component } from 'react';

class Card extends Component {
   

    render() {
        const { pais, capital, poblacion} = this.props;

        return (
            <div>
                <h2>{pais}</h2>
                <p>Capital: {capital}</p>
                <p>Población: {poblacion}</p>
            </div>
        );
    }
}

export default Card;