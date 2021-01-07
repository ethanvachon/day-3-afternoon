import { ProxyState } from "../AppState.js"
import { myPokemonService } from "../Services/MyPokemonService.js"


function _drawMyPokemon() {
  let template = ''
  ProxyState.myPokemon.forEach(p => {
    template += `<li class="api-pokemon" onclick="app.myPokemonController.getPokemon('${p.name}')">${p.name}</li>`
  })
  document.getElementById('my-pokemon').innerHTML = template
}

export default class MyPokemonController {
  constructor() {
    ProxyState.on('myPokemon', _drawMyPokemon)
    this.getAllPokemon()
  }
  getAllPokemon() {
    try {
      myPokemonService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }
  addPokemon() {
    try {
      myPokemonService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }
  getPokemon(index) {
    try {
      myPokemonService.getPokemon(index)
    } catch (error) {
      console.error(error)
    }
  }
  removePokemon() {
    try {
      myPokemonService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }
}