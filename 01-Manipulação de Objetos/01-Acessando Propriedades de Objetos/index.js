//Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e  cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

const carro = {
  marca: "Corolla",
  modelo: "XEI",
  ano: "2011",
  cor: "Prata"
}

for(props in carro) {
  console.log(`${props}: ${carro[props]}`)
}