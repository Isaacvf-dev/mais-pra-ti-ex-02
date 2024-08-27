//Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const stock = [
  {"name": "Paper", "amount": 40, "minimun": 50},
  {"name": "Scissors", "amount": 50, "minimun": 10},
  {"name": "Pen", "amount": 50, "minimun": 100},
  {"name": "Pencil", "amount": 300, "minimun": 60}
]

stock.forEach(product => {
  if(product.amount < product.minimun) {
    product.amount += product.amount
  }
})

console.log(stock)