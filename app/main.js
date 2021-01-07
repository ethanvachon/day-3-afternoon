import ApiPokemonController from "./Controllers/ApiPokemonController.js"
import MyPokemonController from "./Controllers/myPokemonController.js";

class App {
  apiPokemonController = new ApiPokemonController()
  myPokemonController = new MyPokemonController()
}

window["app"] = new App();
