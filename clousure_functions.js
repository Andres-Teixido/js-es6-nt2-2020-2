console.log("1.- Clousure functions")

  function helloFunction() {
    var mensaje = 'Hola Angelica';


    function saludar(){
      console.log("Este es el saludo: ", mensaje)
    }

    return saludar;
  }


  // la variable `mensaje` no esta  dentro del ambito en este punto
  console.log("typeof mensaje:  ", typeof mensaje);

  //  la function saludar todavia hace referencia a la variable llamada saludar 
  const saludar = helloFunction()
  console.log(saludar.toString())


  // Por la funcion clouser, `saludar()` todavia tiene acceso a la variable dentro del ambito de la funciuon cuando fue declarada (a `mensaje`)
  saludar()