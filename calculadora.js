let acumuladorPrimerDigito = 0
let acumuladorSegundoDigito = 0
let segundoDigito = 0
let resultadoFinal = 0
let operador = ""
let primerDigito = 0



    let resultado = document.getElementById("resultado")
   

    let cero = document.getElementById("cero")
    cero.addEventListener("click", function(){
   
    if(operador == "" ){

    anadirNumeroAPrimerDigito("0")
    }
    else if (operador != ""){
    anadirNumeroASegundoDigito("0")    
    }


    })

    let uno = document.getElementById("uno")
    uno.addEventListener("click", function(){
       
        if(operador == "" ){

            anadirNumeroAPrimerDigito("1")
            }
            else if (operador != ""){
            anadirNumeroASegundoDigito("1")    
            }
        
    })

    let dos = document.getElementById("dos")
    dos.addEventListener("click", function(){
        if(operador == "" ){

            anadirNumeroAPrimerDigito("2")
            }
            else if (operador != ""){
            anadirNumeroASegundoDigito("2")    
            }
        
    })

    let tres = document.getElementById("tres")
    tres.addEventListener("click", function(){
       
        if(operador == "" ){

            anadirNumeroAPrimerDigito("3")
            }
            else if (operador != ""){
            anadirNumeroASegundoDigito("3")    
            }
    })

    let cuatro = document.getElementById("cuatro")
    cuatro.addEventListener("click", function(){
       
        if(operador == "" ){

            anadirNumeroAPrimerDigito("4")
            }
            else if (operador != ""){
            anadirNumeroASegundoDigito("4")    
            }
    })

    let cinco = document.getElementById("cinco")
    cinco.addEventListener("click", function(){
       
        if(operador == "" ){

            anadirNumeroAPrimerDigito("5")
            }
            else if (operador != ""){
            anadirNumeroASegundoDigito("5")    
            }
    })

    let seis = document.getElementById("seis")
    seis.addEventListener("click", function(){
       
        if(operador == "" ){

            anadirNumeroAPrimerDigito("6")
            }
            else if (operador != ""){
            anadirNumeroASegundoDigito("6")    
            }
    })

    let siete = document.getElementById("siete")
    siete.addEventListener("click", function(){
       
        if(operador == "" ){

            anadirNumeroAPrimerDigito("7")
            }
            else if (operador != ""){
            anadirNumeroASegundoDigito("7")    
            }
    })

    let ocho = document.getElementById("ocho")
    ocho.addEventListener("click", function(){
       
        if(operador == "" ){

            anadirNumeroAPrimerDigito("8")
            }
            else if (operador != ""){
            anadirNumeroASegundoDigito("8")    
            }
    })

    let nueve = document.getElementById("nueve")
    nueve.addEventListener("click", function(){
       
     
        if(operador == "" ){

            anadirNumeroAPrimerDigito("9")
            }
            else if (operador != ""){
            anadirNumeroASegundoDigito("9")  
            
            calculaResultadoFinal("suma")
            }
    })

    let suma = document.getElementById("suma")
    suma.addEventListener("click", function(){
        
        operador = "suma"
    })

    let resta = document.getElementById("resta")
    resta.addEventListener("click",function(){
        
        operador = "resta"
    })

    
    let multiplicacion = document.getElementById("multiplicacion")
    multiplicacion.addEventListener("click",function(){
      
        operador = "multiplicacion"
    })

    let division = document.getElementById("division")
    division.addEventListener("click",function(){

        operador = "division"


    })

    let igual = document.getElementById("igual")
    igual.addEventListener("click",function(){

        
        calculaResultadoFinal()
    })


function anadirNumeroAPrimerDigito(numero){


    acumuladorPrimerDigito = numero + acumuladorPrimerDigito
    

    let primerDigitoCorregido = acumuladorPrimerDigito.substring(0, acumuladorPrimerDigito.length - 1)
    

    let primerDigitoAlreves = primerDigitoCorregido.split("").reverse().join("")
    

    resultado.value = primerDigitoAlreves  
    primerDigito = parseInt(primerDigitoAlreves)


}

function anadirNumeroASegundoDigito(numero){

    acumuladorSegundoDigito = numero + acumuladorSegundoDigito
    
    let segundoDigitoCorregido = acumuladorSegundoDigito.substring(0, acumuladorSegundoDigito.length - 1)
    
    let segundoDigitoAlreves = segundoDigitoCorregido.split("").reverse().join("")
    
    resultado.value = segundoDigitoAlreves  
    segundoDigito = parseInt(segundoDigitoAlreves)
}

function calculaResultadoFinal(){

console.log(primerDigito);
console.log(operador);
console.log(segundoDigito);

}










