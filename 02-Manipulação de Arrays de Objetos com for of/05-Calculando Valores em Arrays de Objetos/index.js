//Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

const students = [
  {"name": "Felipe", "grade1": 10, "grade2": 5},
  {"name": "Carlos", "grade1": 4, "grade2": 9},
  {"name": "Gina", "grade1": 8, "grade2": 4},
  {"name": "Gina", "grade1": 2, "grade2": 9}  
]

for( student of students ) {
  let avgGrade = (student.grade1 + student.grade2) / 2
  
  console.log(`${student.name}: ${avgGrade}`)
}