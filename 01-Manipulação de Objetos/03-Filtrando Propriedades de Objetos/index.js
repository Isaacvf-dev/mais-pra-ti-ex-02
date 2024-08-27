//Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

const product = {
  id: 10,
  price: 20,
  salesPrice: 40,
  tax: 30,
  name: "mouse",
}

function higherThanTen(obj) {
  let newObj = {}

  for(key in obj) {    
    if(obj[key] > 10) {
      newObj[key] = obj[key]      
    }
  }

  return newObj
}

console.log(higherThanTen(product))