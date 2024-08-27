//Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

const people = [
  {"name": "Gabriel", "age": 33, "city": "Lisboa"},
  {"name": "Julia", "age": 8, "city": "Fort Collins"},
  {"name": "Nyx", "age": 14, "city": "Lawrence"},  
]

for( person of people ) {
  console.log(person)
}