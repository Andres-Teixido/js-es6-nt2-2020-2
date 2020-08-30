function imprimirUno(){
    console.log("uno");
  }

  function imprimirDos(){
    console.log("dos")
  }

  function imprimirTres(){
    console.log("tres")
  }
  

  // Con este ejemplo se puede apreciar como trabaja la cola de funciones.
  // No los imprime en orden, sino que depende de las llamadas encoladas y su tiempo.
  setTimeout(imprimirUno, 3000)
  setTimeout(imprimirDos, 0)

 // Las llamadas en ejecucion prevalecen sobre las llamadas encoladas. 
  imprimirTres()