//Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

const sales = [
  {"product": "TV", "amount": 10, "price": 2500 },
  {"product": "Car", "amount": 5, "price": 40000 },
  {"product": "Laptop", "amount": 3, "price": 10000 },
  {"product": "Monitor", "amount": 20, "price": 1500 },
  {"product": "Chair", "amount": 60, "price": 1000 }
]

let totalPrice = 0

sales.forEach( sale => {
  totalPrice += sale.amount * sale.price
})

console.log(`O valor total de vendas é ${totalPrice}`)
