//Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

const company = {
  departments: [
    {"name": "Tech", "employees": ["Carla", "John", "Marie", "Lia"]},
    {"name": "Sales", "employees": ["Lincon", "Iara", "Maria", "Juan"]},
    {"name": "Business", "employees": ["Mia", "Leon", "Mellody", "Yan"]}
  ]
}

for( index in company.departments ) {
  const department = company.departments[index]
  
  for( employee of department.employees ) {
    console.log(`Funcionário: ${employee}, Departamento: ${department.name}`)
  }
  
}