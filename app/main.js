import ApiPokemonController from "./Controllers/ApiPokemonController.js"

class App {
  apiPokemonController = new ApiPokemonController()
}

window["app"] = new App();
