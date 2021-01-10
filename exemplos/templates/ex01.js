// template string

const numero = (num) => {
  return 'O número é: ' + num
}
const resultado = numero(10)
console.log(resultado)

const numeroA = (num1, num2) => {
  return `A soma dos números é: ${num1 + num2}`
}
const resultadoA = numeroA(10, 20)
console.log(resultadoA)

const numeroB = (num1, num2) => (
  `A soma dos números é: ${num1 + num2}`
)
let resultadoB = numeroB(20, 30)
console.log(resultadoB)
