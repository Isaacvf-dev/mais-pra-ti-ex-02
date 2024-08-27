//Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
  titulo: "Harry Potter",
  autor: "J. K. Rolling",
  anoPublicacao: "2005",
  genero: "fantasia"
}

for(key in livro) {
  key !== "editora" ?  livro.editora = "Racco": null
}

