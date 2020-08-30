// Esto hara una llamada recursova infinita (te congelara la pantalla al cabo de un tiempo)
function recursion(){
  console.log("recursion!!!!")
  return recursion()
}

// Esto causara un desbordamiento de pila (stack overflow)
// recursion()