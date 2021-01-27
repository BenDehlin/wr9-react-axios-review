import { Component } from "react"
import axios from "axios"
import PokemonClass from "./PokemonClass"

class PokemonList extends Component {
  constructor() {
    super()
    this.state = {
      pokemonList: [],
    }
  }

  // our componentDidMount fetches data from the pokeapi and saves it to state.
  // the number of pokemon it fetches is denoted by "limit=3" and where in the
  // pokemon list it starts is noted by "offset=0"
  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=3&offset=0")
      .then((res) => {
        // The data sent back by the api is an object with several things
        // inside of it. In order for us to get access to the specific info
        // we are looking for we need to find the array in res.data.results
        this.setState({
          pokemonList: res.data.results,
        })
      })
      .catch((err) => {
        console.log("There was an error")
      })
  }

  render() {
    //destructuring pokemonList off of state for easier use
    const { pokemonList } = this.state
    return (
      <div>
        {/* mapping over the pokemonList array on state and rendering
                a PokemonClass component for each item in the array. We are passing
                the PokemonClass component a pokemon prop with a value of the pokemon
                object from the array. */}
        {pokemonList.map((pokemon) => {
          return <PokemonClass pokemon={pokemon} />
        })}
      </div>
    )
  }
}

export default PokemonList
