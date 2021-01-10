// var vs let vs const
// var me permite redefinir a variável e seu conteúdo.
var idade1 = 10
var idade1 = 20

let res1 = window.document.getElementById('resultado1')
res1.innerHTML = `<p>Resultado <strong>var:</strong> ${idade1}</p>`

// let não me permite redefinir a variável. Somente seu conteúdo.
let idade2 = 10
idade2 = 20

let res2 = window.document.getElementById('resultado2')
res2.innerHTML = `<p>Resultado <strong>let:</strong>: ${idade2}</p>`

// const não me permite redefinir a variável nem tampouco seu conteúdo.
const idade3 = 10
let res3 = window.document.getElementById('resultado3')
res3.innerHTML = `<p>Resultado <strong>const:</strong>: ${idade3}</p>`

// Uma exceção para const é quando utilizamos um array e executamos uma ação de modificação no array

const arraynumero = [10,20,30]
arraynumero.push(40,50)
let res4 = window.document.getElementById('resultado4')
res4.innerHTML = `<p>Resultado <strong>const + array:</strong>: ${arraynumero}</p>`

const pessoa = {
  nome: 'Antonio',
  idade: 40
  }
  
  pessoa.idade = 45
  pessoa.pais = 'Brasil'
  
  let res5 = window.document.getElementById('resultado5')
  res5.innerHTML = `<p>Resultado <strong>const + array:</strong>: ${pessoa.nome + " " + pessoa.idade + " " + pessoa.pais}</p>`



