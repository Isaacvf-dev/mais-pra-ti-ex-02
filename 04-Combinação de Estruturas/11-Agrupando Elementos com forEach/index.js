//Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

const orders = [
  {"user": "Clare", "product": "Purse", "amount": 2},
  {"user": "Clare", "product": "Notebook", "amount": 5},
  {"user": "Nyx", "product": "Pen", "amount": 3},
  {"user": "Ilianna", "product": "Paper", "amount": 100},
  {"user": "Ilianna", "product": "Mouse", "amount": 1},
  {"user": "Ilianna", "product": "keyboard", "amount": 1},
]

let customerTotalProducts = {}

orders.forEach(order => { 
  customerTotalProducts[order.user] ? 
    customerTotalProducts[order.user] += order.amount :
    customerTotalProducts[order.user] = order.amount
})

console.log(customerTotalProducts)