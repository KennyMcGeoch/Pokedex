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
        let url = 'https://pokeapi.co/api/v2/pokemon/' + i; // Ideally it would be preferable to do a single API call to
    // 'https://pokeapi.co/api/v2/pokemon/?limit=151' but unfortunately it only gives the name and then a url for a further API
    // call hence why 151 API calls are done. Normally it would be best to get the API modified so it can all be done in a single call
    fetch(url)
    .then(response=> response.json())
    .then(resp=> {
            this.setState((prevState)=> ({ pokemon: [ ...prevState.pokemon, resp]}
        ))})
        }
 


}


onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    }

    render() {
    const { pokemon, searchfield } = this.state;
    const sortedPokemon = pokemon.sort(function(a, b){return a.id - b.id});
    const filteredPokemon = sortedPokemon.filter(pokemon =>{
       return pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
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