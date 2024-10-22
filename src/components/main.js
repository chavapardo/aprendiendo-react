import React, { Component } from 'react';
import Card from './card';

class Main extends Component {
    constructor () {
        super();    
        this.state = { tech : 'de prueba', developer : 'Nero'};
    }

    componentDidUpdate (prevProps, prevState) {
        console.log(prevState);
        if(prevState.developer === this.state.developer){
            this.setState({ developer: 'Maddie'})
        }
    }

    render () {
        return (
            <main>
                <h1>Este es el contenido principal de la página {this.state.tech}</h1>
                <button onClick = {() => this.setState({ tech: 'de comprobación' })}> CAMBIAR </button>
                <em>Dev: {this.state.developer}</em>
                <Card pais="México" capital="CDMX" poblacion="127 millones" />
                <Card pais="Colombia" capital="Bogotá" poblacion="50 millones" />
                <Card pais="Argentina" capital="Buenos Aires" poblacion="44 millones" />
            </main>
        );
    }
}

export const libreria = 'React';

export default Main;