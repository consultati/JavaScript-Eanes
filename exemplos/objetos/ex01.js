// Objetos

// objetos
const mascota = {
  nombre: 'Tom',
  edad: 5,
  tipo: 'gato',
  vivo: true,
  cor: ['branco','preto']
}
mascota.raza = 'peludo'
console.log(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.tipo)
console.log(mascota.vivo)
console.log(mascota.raza)
console.log( mascota.cor[0] + ' e ' + mascota.cor[1])

if (mascota.vivo) {
  console.log('Vivo!')
}
else {
  console.log('Morto!')
}
