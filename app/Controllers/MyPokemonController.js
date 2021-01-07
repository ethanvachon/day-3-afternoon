import { ProxyState } from "../AppState.js"
import { myPokemonService } from "../Services/MyPokemonService/js"


function _drawMyPokemon() {

}

export default class MyPokemonController {
  constructor() {
    ProxyState.on('selector', _drawMyPokemon)
  }
  addPokemon() {
    try {
      myPokemonService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }
}