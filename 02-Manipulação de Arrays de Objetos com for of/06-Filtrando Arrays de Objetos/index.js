//Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

const employees = [
  {"name": "Carol", "position": "Frontend Jr.", "salary": 3000},
  {"name": "John", "position": "Backend Jr.", "salary": 3500},
  {"name": "Charlie", "position": "DevOps Jr.", "salary": 2800},
  {"name": "Mandy", "position": "Secretary", "salary": 1800},
]

let higherPayments = {}

for( employee of employees ) {  

  if(employee.salary > 2500) {
    higherPayments[employee.name] = employee.salary  
  }  
}

console.log(higherPayments)