App.js only renders PokemonList component
###
PokemonList component fetches a list of pokemon from pokeapi.co and renders a PokemonClass Component for each one passing the object down as a prop. This array of objects will only have a name and url property on each one.
###
The PokemonClass Component will use the url from the pokemon prop to fetch additional information about the given pokemon so we can display it. We also use conditional rendering to only attempt to display information if the object exists.