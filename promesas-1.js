function renderizarData(vehiculo){
    console.log("tengo que renderizar data: ", vehiculo)
  }
  
  const url = "https://us-central1-be-tp3-a.cloudfunctions.net/app/api/read"

  const peticion = fetch(url)

  console.log("Aqui ya se hizo esa peticion: ", peticion)

  peticion.then((respuesta) =>{
    // Este es el tratamiento cuando la peticion se cumple (estado completado)
    console.log("Se cumple la peticion")
    console.log(respuesta)

    if (respuesta.status === 200){
      return respuesta.json() 
    }
    
  })
  //.then(renderizarData)
  .then((data) => {
    console.log("se renderiza data: ", data)
  })
 
  
 



  peticion.catch((error) => {
    console.log("NO se cumple la peticion")
    console.error(error)
  })

  peticion.finally(() => {
    console.log("Se ejecuta independientemente")
  })