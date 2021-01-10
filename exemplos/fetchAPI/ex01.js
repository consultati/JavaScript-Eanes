// fetch API

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then( res => res.json())
  .then(data => {
    console.log('Resultado com then -------------------')
    data.results.forEach(element => {
      console.log(element.name)
    });
  })
  .catch(error => console.log(error))

  // async await

  const obterPokemons = async() => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      console.log('Resultado com async --------------------')
      data.results.forEach(element => {
        console.log(element.name)
      });
    } catch (error) {
      console.log(error)
    }
  }
  obterPokemons()
