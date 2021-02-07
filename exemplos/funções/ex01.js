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

var uid = (new Date().getTime()).toString(36)
console.log('O numero gerado é:', uid);

var date = new Date();
var components = [
    date.getYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
];

var id = components.join("");
console.log('A data é: ', date);
console.log('O numero gerado é:', id);

var agora = Date.now();
console.log('Valor :', agora);

var date = new Date();
let ano = date.getFullYear().toString()
console.log('Valor Ano :', ano);

let mes = (date.getMonth() + 1).toString()
mes = pad(mes,2);
console.log('Valor Mes :', mes);

let dia = date.getDate().toString()
dia = pad(dia,2);
console.log('Valor Dia :', dia);

let hora = date.getHours().toString()
hora = pad(hora,2);
console.log('Valor Hora :', hora);

let min = date.getMinutes().toString()
min = pad(min,2);
console.log('Valor Minuto :', min);

let sec = date.getSeconds().toString()
sec = pad(sec,2);
console.log('Valor Segundo :', sec);

let seq = date.getMilliseconds().toString()
console.log('Valor Seq :', seq);

let ficha = ano + mes + dia + hora + min + sec
console.log('Ficha: ', ficha);

function pad(str, length) {
  const resto = length - String(str).length;
  return '0'.repeat(resto > 0 ? resto : '0') + str;
}
