//Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

const transactions = [
  {"type": "income", "value": 3000},
  {"type": "outcome", "value": 100},
  {"type": "outcome", "value": 500},
  {"type": "outcome", "value": 400},
  {"type": "income", "value": 1000},
]

let total = 0

transactions.forEach(transaction => {
  transaction.type === "income" ? 
    total += transaction.value : 
    total -= transaction.value  
})

console.log(`Saldo: ${total}`)