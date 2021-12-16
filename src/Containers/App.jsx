import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component  {
    constructor(){
        super()
        this.state = {
            pokemon: [],
            searchfield: ""
        }
    }

    
componentDidMount() {
    for (let i = 1; i < 152; i++) { 
        let url = 'https://pokeapi.co/api/v2/pokemon/' + i;
    fetch(url)
    .then(response=> response.json())
    .then(resp=> {
        let types = "";
        for (let i = 0; i < resp.types.length; i++){
            types = types + resp.types[i].type.name.charAt(0).toUpperCase() + resp.types[i].type.name.slice(1) + " ";
        }
            this.setState((prevState)=> ({ pokemon: [ ...prevState.pokemon, [resp.id, resp.name, types]]}
        ))})
        }
 


}


onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    }

    render() {
    const { pokemon, searchfield } = this.state;
    const sortedPokemon = pokemon.sort(function(a, b){return a[0] - b[0]});
    const filteredPokemon = sortedPokemon.filter(pokemon =>{
       return pokemon[1].toLowerCase().includes(searchfield.toLowerCase())
    })
    return( 
    <div className="tc">
        <h1 className="f1">Pokedex</h1>
        <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                <CardList pokemon={filteredPokemon}/>
                </ErrorBoundary>
            </Scroll>
    </div>);
}}

  export default App;