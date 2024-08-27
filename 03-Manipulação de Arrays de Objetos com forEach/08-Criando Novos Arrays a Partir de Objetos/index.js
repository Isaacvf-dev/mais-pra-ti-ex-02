//Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes

const movies = [
  {"name": "Harry Potter", "director": "Linhenson Noah", "releaseYear": "2002"},
  {"name": "Frozen", "director": "Judite Spanchy", "releaseYear": "2010"},
  {"name": "Moana", "director": "Sarah Liniker", "releaseYear": "2009"},
  {"name": "Inside Out", "director": "Cris Figman", "releaseYear": "2012"},
  {"name": "Run", "director": "Nielson Vog", "releaseYear": "2014"},
]

let moviesNameArray = []

movies.forEach(movie => moviesNameArray.push(movie.name))

console.log(moviesNameArray)