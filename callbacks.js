// Esta funcion de primer nivel invoca una funcion con argumento
  function saluda(param1, mostrar_consola){
    // realmente lo que hace es `console.log("Hola mundo")`
    return mostrar_consola("hola mundo! " + param1);
  }

  let nombre = 'Matias'
  saluda(nombre, console.log)
  
  //  
  function saludoTardio(param1, callback){
    setTimeout(() => {
      callback("Hola mundo despues de 3sg! " +  param1)
    }, 10000)
  }


  saludoTardio(nombre, console.log)

  nombre = "Carlos"
  saluda(nombre, console.log)

  // Este ejemplo simula una llamada a una base de datos (o incluso una API):
  // retorna un objeto persona
  function obtenerUsuarioDesdeBD(callback){
    // Simula obtener la data dsde una BD (con un tiempo de espera 1000ms)
    setTimeout(() => {

      // recibe datos desde API/BD:

      const data_ususario = {
        firstName: "Carlos",
        lastName: "Tevez",
        edad: 28
      }

      callback(data_ususario)
    }, 1000)
  }

  
  // Esta funcion saluda al usuario, que es pasado por un callback a `obtieneUsuarioDesdeBD()`
  function saludoUsuario(user){
    console.log(`Hola ${user.firstName} ${user.lastName}`)
  }

  function validaEdadUsuario(user){
    if (user.edad >= 35){
      console.log(`${user.firstName} ${user.lastName} está en edad de retiro profesional`)
    }else{
      console.log(`${user.firstName} ${user.lastName} está en edad activa para el futbol`)
    }
  }

  //MI llamada a la API
  obtenerUsuarioDesdeBD(saludoUsuario)

  obtenerUsuarioDesdeBD(validaEdadUsuario)