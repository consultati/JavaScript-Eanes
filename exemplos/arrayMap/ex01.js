// Array Map

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then( res => res.json())
  .then(data => {
    console.log('Resultado com let -------------------')
    let arrayNomes = []
    data.results.forEach(element => {
      //console.log(element.name)
      arrayNomes.push(element.name)
    });
    console.log(arrayNomes)
  })
  .catch(error => console.log(error))

  // array Map

  const obterPokemons = async() => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      console.log('Resultado com array Map --------------------')
      const arrayNomes = data.results.map(poke => poke.name)
      console.log(arrayNomes)
    } catch (error) {
      console.log(error)
    }
  }
  obterPokemons()

  // filter

  const obterPokemons1 = async() => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      console.log('Resultado com array Filter --------------------')
      const arrayNomes = data.results.filter(poke => poke.name === 'bulbasaur')
      console.log(arrayNomes)
    } catch (error) {
      console.log(error)
    }
  }
  obterPokemons1()
