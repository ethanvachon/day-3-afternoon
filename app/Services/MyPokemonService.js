import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { myApi } from "../Services/AxiosService.js"

class MyPokemonService {

  async getAllPokemon() {
    let res = await myApi.get('')
    if (res.data) {
      ProxyState.myPokemon = res.data.map(m => new Pokemon(m))

    }
  }
  async addPokemon() {
    let res = await myApi.post('', ProxyState.selected)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
    console.log(ProxyState.myPokemon)
    console.log(ProxyState.selected)
  }
  getPokemon(index) {
    let pokemon = ProxyState.myPokemon.find(p => p.name == index)
    ProxyState.selected = pokemon
  }
  async removePokemon() {
    let res = await myApi.delete(ProxyState.selected.id)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id !== ProxyState.selected.id)
    ProxyState.selected = null
  }
}

export const myPokemonService = new MyPokemonService()