// Destructuring Objects

const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro']
}

console.log(mascota.razas[1])
console.log(mascota.nombre)

const nombreMascota = mascota.nombre
console.log(nombreMascota)

const {nombre} = mascota
console.log(nombre)