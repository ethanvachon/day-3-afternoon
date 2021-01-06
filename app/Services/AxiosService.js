export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
})

export const myApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/ethan/pokemon"
})