// objetos dentro de objetos
const web = {
  nombre: 'bluuweb',
  links: {
    enlace: 'www.bluuweb.cl'
  },
  redesSociales:{
    youtube:{
      enlace: 'youtube.com/bluuweb',
      nombre: 'bluuweb yt'
    },
    facebook:{
      enlace: 'facebook.com/bluuweb',
      nombre: 'bluuweb fb'
    }
  }
}

const enlaceYT = web.redesSociales.youtube.enlace
console.log(enlaceYT)

const {enlace, nombre} = web.redesSociales.youtube
console.log(enlace)
console.log(nombre)