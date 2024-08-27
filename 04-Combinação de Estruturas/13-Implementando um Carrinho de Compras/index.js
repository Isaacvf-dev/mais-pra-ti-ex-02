//Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho

const cart = {
  itens: [
    {"name": "Mouse", "amount": 2, "unitPrice": 60},
    {"name": "Keyboard", "amount": 1, "unitPrice": 100},
    {"name": "Monitor", "amount": 1, "unitPrice": 1500},
    {"name": "Mousepad", "amount": 3, "unitPrice": 50},
  ]
}

let cartTotalPrice = 0

cart.itens.forEach(product => {
  cartTotalPrice += product.amount * product.unitPrice
})

console.log(`Preço final: ${cartTotalPrice}`)