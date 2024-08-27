// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

const products = [
  {"name": "Keyboard", "price": 100, "discount": 0},
  {"name": "Mouse", "price": 50, "discount": 0},
  {"name": "Notebook", "price": 2500, "discount": 0},
  {"name": "Computer Monitor", "price": 1500, "discount": 0},
]

function getDiscount(item) {
  let newPrice = (item.price  - item.price* 0.1)
  return console.log(newPrice)
}

products.forEach(getDiscount)

