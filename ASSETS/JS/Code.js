function sumar() {
    let numero_usuario = document.getElementById("digito_ingresado").value

    let resultado = 0

    for (let numero = 0; numero <= numero_usuario; numero++) {
        resultado = resultado + numero
    }
    let resultado_usuario = document.getElementById("resultado")
    resultado_usuario.value = resultado
}



function verificarnumero() {

    let numeroavalidar = document.getElementById("digito_ingresado2").value
    console.log(numeroavalidar)
    if (numeroavalidar % 2 == 0) {
        alert("El número " + numeroavalidar + " es par");
    }
    else {
        alert("El número " + numeroavalidar + " es impar");
    }
}

function premios() {
    let edad = document.getElementById("edad_ingresada").value
    let generofemenino = document.getElementById("femenino").checked
    let generomasculino = document.getElementById("masculino").checked

    if (edad <= 10) {
        alert("Haz ganado un jugo")
        if (document.getElementById("femenino").checked){
            alert("Recibe pizza hawaiana")
        } 
        if (document.getElementById("masculino").checked){
            alert("Recibe una pizza de carnes")
        }     
    }
    else{
        alert("No cumples con los requisitos para recibir un premio");
    } 

    if (edad >= 18) {
        alert("Haz ganado una cerveza")
        if (document.getElementById("femenino").checked){
            alert("Recibe pizza hawaiana")
        } 
        if (document.getElementById("masculino").checked){
            alert("Recibe una pizza de carnes")
        }      
    }
    else{
        alert("No cumples con los requisitos para recibir un premio")
    }


}

function savedata(email, password) {
    let correo = document.getElementById("inputEmail").value
    let regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if(regexCorreo.test(correo)){
            validateusers(correo)
    }
}

function validateusers(correo) {
    let correoValido = "correo@correo.com"

    if(correo == correoValido){
        document.write("Ingresaste");
    }
    else{
        alert("ingrese correo valido");
    }

}

function escribirtablademultiplicar(numerodeusuario){
    var numerodeusuario = document.getElementById("numeroamultiplicar").value
   
document.write("Esta es la tabla de multiplicar del " + numerodeusuario);

for(i = 1; i<=10; i++){
    document.write("<li>");
    document.write (numerodeusuario + "x" + i + "=" + numerodeusuario * i);
    document.write ("</li>");
}
    
}


function descuentosmatricula(){
    let valorpredeterminado = 1000000
    let descuento1 = 950000
    let descuento2 = 500000
    let promedioestudiante = document.getElementById("promedio").value

    if(promedioestudiante < 3){
        alert("El valor de la matricula es igual a " + valorpredeterminado);    
    }

   else if (promedioestudiante = 3 && promedioestudiante <= 4){
   alert("El valor de la matricula es igual a " + descuento1);
   }
   
   else if (promedioestudiante > 4){
    alert("El valor de la matricula es igual a"+ descuento2);

   } 
}



