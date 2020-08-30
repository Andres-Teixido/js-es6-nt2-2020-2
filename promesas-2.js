 
  (async function(){
    console.log("Esta es una funcion de alto orden")

    // La declaro de tipo PROMESA
    function buscarVehiculos() {
      const url = "https://us-central1-be-tp3-a.cloudfunctions.net/app/api/read"
      // La instanciacion de Promise hace referencia a un objeto que tiene dos (2) posibles estadios: resolved,rejected. Recibo dos parametros (param1 = resolved, param2 = rejected)
      return new Promise((resuelve, rechaza) => {

        fetch(url).then(respuesta => {
          console.log(respuesta)
          // Paso como parametro al callback "resuelve" la data que quiero que reciba el then.
          if (respuesta.status === 200){
            return resuelve(respuesta.json())
          }else{  
            throw new Error("Error comunicacion con backend");
          }
          
        })
        .catch(error => {
          return rechaza(error)
        })
      })
    }


    /**
     * Llamada a funciones de tipo Promise()
     */ 
    

    /*
    let vehiculos = buscarVehiculos()
    //console.log(vehiculos)
  
    vehiculos.then((data)  => {
      console.log("Vehiculos: ", data)
    })

    vehiculos.catch(err => {
      console.log("Error , ", err.error())
    })
    */
  
  

    /**
     * Llamada a funciones de tipo Promise() con un await/async
     */
    
    
    try{
      let vehiculos = await buscarVehiculos()

      console.log(typeof vehiculos, vehiculos)

      vehiculos.forEach((vehiculo) => {
        console.log(vehiculo)
      })
    }catch(error){
      console.error(error)
    }
    
    
    

  })()
