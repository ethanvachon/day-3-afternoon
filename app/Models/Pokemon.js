export default class Pokemon {
  constructor({ name, img, height, weight, types, id }) {
    this.name = name
    this.img = img
    this.height = height
    this.weight = weight
    this.types = types
    this.id = id
  }

  get Template() {
    return `<img src="${this.img}" alt="">
                    <h2>Name: ${this.name}</h2>
                    <h4>Height: ${this.height} || Weight: ${this.weight}</h4>
                    <h4>Types: ${this.types[0].type.name}${this.type2}</h4>
                    ${this.Button}`

  }
  get type2() {
    if (this.types[1]) {
      return ', ' + this.types[1].type.name
    }
    return ''
  }
  get Button() {
    if (!this.id.length) {
      return `<button class="btn btn-outline-success" onclick="app.myPokemonController.addPokemon()">Add Pokemon</button>`
    }
    return `<button class="btn btn-outline-warning" onclick="app.myPokemonController.removePokemon()">Remove Pokemon</button>`
  }
}