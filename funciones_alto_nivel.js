console.log("2.- Funciones alto nivel: iife")

  const saludar = (function() {
    
    var mensaje = "Hola";
    
    function saludando(){
      console.log("Mensaje a decir: ", mensaje)
    }

    // Asi retorno con invocacion
    //return saludando()

    // Asi retorno sin invocacion
    return saludando

  })()


  saludar()

  
  //
  const counter = (function() {
    let count = 0
    
    return{
      inc: function() { count = count + 1 },
      getCount: function() { console.log(count)},
      dec: function() { count = count - 1 },
      sum: function() { count = count + count },
      elements: [235, 5, 7, 2020],
      obj1: {

      }
    }
  })()

  counter.getCount()
  counter.inc()
  counter.getCount()
  counter.inc()
  counter.inc()
  counter.getCount()
  counter.dec()
  counter.getCount()
  

  counter.sum()
  counter.getCount()


  console.log(counter)