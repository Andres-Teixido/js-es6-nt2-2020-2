class Persona{
    saludo(){
      console.log("Hola desde clase Persona")
    }
  }


  const persona1 = new Persona()

  console.log(typeof persona1)

  persona1.saludo()

  const persona2 = {
    saludo: function(){
      console.log("Hola desde objeto")
    }
  }

  console.log(typeof persona2)
  persona2.saludo()


  class Estudiante extends Persona{
    constructor(){
      super();
    }

    saludo_estudiante(){
      console.log(`Hola ${this.firstName}`)
    }

    set firstName(first_name){
      console.log("Aqui defino la entrada de ese atributo")
      this.first_name = first_name
    }

    get firstName(){
      return this.first_name
    }
  }
  

  const estudiante = new Estudiante()

  console.log("Tipo estudiante: ",estudiante)
  console.log("Prototype de estudiante", estudiante.__proto__)

  estudiante.saludo()


  //estudiante.firstName("mi nombre")
  // Hace una llamada 
  estudiante.firstName = "Alberto"

  console.log(estudiante.firstName)

  console.log(estudiante)

  estudiante.saludo_estudiante()
