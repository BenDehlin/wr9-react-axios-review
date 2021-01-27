import { Component } from "react"
import axios from "axios"

class PokemonClass extends Component {
  constructor() {
    super()
    this.state = {
      pokemonData: null,
    }
  }

  //This componentDidMount will only fire if the PokemonClass is rendered.
  //Each PokemonClass component is rendered if there are objects in the
  //pokemonList array on state in the parent. If there is we should have
  //access to a url on the pokemon object on our props. This url will allow us
  //to fetch additional data about the specific pokemon from the api. We will
  //fetch that data and save it to state.
  componentDidMount() {
    axios
      .get(this.props.pokemon.url)
      .then((res) => {
        this.setState({
          pokemonData: res.data,
        })
      })
      .catch(() => console.log("There was an error"))
  }

  render() {
    return (
      <div>
        {this.props.pokemon.name}
        {/* We are using a ternary and conditional rendering here to only
                try to display information from the pokemonData piece of state
                if the pokemonData piece of state is not null. pokemonData starts out
                as null and becomes an object after the componentDidMount successfully runs
                and fetches our data about the pokemon. This will allow us to error handle. */}
        {this.state.pokemonData ? (
          // anything that goes inside the parentheses after the question mark
          // will be rendered if this.state.pokemonData is truthy (not null)
          <div>
            <img src={this.state.pokemonData.sprites.front_default} />
            <img src={this.state.pokemonData.sprites.back_default} />
          </div>
        ) : (
          // anything that goes inside the parentheses after the colon will be
          // rendered if this.state.pokemonData is falsy (null). This will briefly
          // appear before the componentDidMount fires.
          <div>Pokemon Data not fetched yet</div>
        )}
      </div>
    )
  }
}

export default PokemonClass
