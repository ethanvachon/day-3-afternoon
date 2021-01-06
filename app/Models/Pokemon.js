export default class Pokemon {
  constructor({ name, img, height, weight, types }) {
    this.name = name
    this.img = img
    this.height = height
    this.weight = weight
    this.types = types
  }

  get Template() {
    return `<img src="${this.img}" alt="">
                    <h2>Name: ${this.name}</h2>
                    <h4>Height: ${this.height} || Weight: ${this.weight}</h4>
                    <h4>Types: ${this.types}</h4>`
  }
}