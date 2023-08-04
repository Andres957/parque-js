let nombre= prompt("ingrese su nombre").toUpperCase();
let edad= parseInt(prompt("Ingrese su edad"));
let altura= parseInt(prompt("Ingrese su altura"))
if(edad < 10 && altura < 100 ){
    alert("usted no puede ingresar al juego del parque")
}else if(edad <10 && altura > 100){
    alert("Debe ingresar al juego con un arnes")
}else{
    alert("Ud cumple con las coniciones, ingrese al juego tranquilo")
}
const saludar = (nombre, edad) => {
    return `Buenos días, ${nombre}. Su edad es ${edad} años.`;
  };

  let mensajeSaludo = saludar(nombre, edad);
  alert(mensajeSaludo);