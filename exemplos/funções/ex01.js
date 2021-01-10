function sumar (num1, num2) {
  console.log(num1 + num2)
}
sumar(10, 20)

const sumarDosA = (num1, num2) => {
  console.log(num1 + num2)
}
sumarDosA(10, 50)

const sumarDosB = num1 => {
  console.log(num1)
}
sumarDosB(10)

const sumarDosC = num1 => {
  return num1
}
console.log(sumarDosC(10))

const sumarDosD = num1 => num1
console.log(sumarDosD(10))

const sumarC = (num1, num2) => {
  return 'la suma es: ' + (num1 + num2)
}
let resultado = sumarC(10, 20)
console.log(resultado)

const sumarA = (num1, num2) => (
  'la suma es: ' + (num1 + num2)
)
let resultadoB = sumarA(10, 20)
console.log(resultadoB)

const sumarB = (num1 = 10) => (
  'la suma es: ' + (num1 + 20)
)
let resultadoA = sumarB()
console.log(resultadoA)