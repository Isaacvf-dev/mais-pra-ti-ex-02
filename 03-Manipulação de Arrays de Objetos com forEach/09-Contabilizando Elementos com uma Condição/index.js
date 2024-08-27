//Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

const customers = [
  {"name": "Linda", "age": 50, "city": "New Jersey"},
  {"name": "Carol", "age": 30, "city": "New York"},
  {"name": "John", "age": 40, "city": "Utah"},
  {"name": "Michael", "age": 8, "city": "Sugar Land"}
]
let count = 0

function over30YearsOldAmount(user) {
  if(user.age > 30) {
    count++
  }
  return count
}

customers.forEach(over30YearsOldAmount)
console.log(`A quantidade de clientes acima de 30 anos é ${count}`)
