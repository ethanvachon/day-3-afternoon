import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "../Services/AxiosService.js"


class ApiPokemonService {
  async getAllPokemon() {
    let res = await pokeApi.get('?limit=100')
    ProxyState.apiPokemon = res.data.results
  }
  async getPokemon(index) {
    let res = await pokeApi.get(index)
    ProxyState.selected = new Pokemon({ name: index, img: res.data.sprites.front_default, height: res.data.height, weight: res.data.weight, types: res.data.types, id: res.data.id })
  }
}



export const apiPokemonService = new ApiPokemonService()