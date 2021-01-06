import { ProxyState } from "../AppState.js"
import { apiPokemonService } from "../Services/ApiPokemonService.js"

function _drawApiPokemon() {
  let template = ''
  ProxyState.apiPokemon.forEach(p => {
    template += `<li class="api-pokemon" onclick="app.apiPokemonController.getPokemon('${p.name}')">${p.name}</li>`
  })
  document.getElementById('api-pokemon').innerHTML = template
}
function _drawSelected() {
  let template = ''
  if (ProxyState.selected) {
    template = ProxyState.selected.Template
  }
  document.getElementById('selected-pokemon').innerHTML = template
}

export default class ApiPokemonController {
  constructor() {
    ProxyState.on("apiPokemon", _drawApiPokemon)
    ProxyState.on("selected", _drawSelected)
    this.getAllPokemon()
  }
  getAllPokemon() {
    try {
      apiPokemonService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }
  getPokemon(index) {
    try {
      apiPokemonService.getPokemon(index)
    } catch (error) {
      console.error(error)
    }
  }
}