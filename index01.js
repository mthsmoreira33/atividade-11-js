const salarios = [
  5000.0, 5460.5, 3452.0, 6900.0, 7590.1, 8012.99, 1290.0, 15000.0,
];

console.log(salarios.findIndex(salario => salario > 7500));
console.log(salarios.filter(salario => salario > 8000));
