
const inputUsuario =document.querySelector(".usuario");
const inputClave =document.querySelector(".clave");
const btn =document.querySelector (".enviar");




btn.addEventListener("click", envioSolicitud);

const mensaje =document.querySelector(".mensaje")

function envioSolicitud(){

    const usuario= inputUsuario.value;
    const clave = inputClave.value
   


    if(usuario!=="pruba2022" && clave !== "prueba2022" ){

        
        mensaje.innerText ="el usuario y contraseña es incorrecto"

    }
    
    
    else {
    
        
        
        window.location= "index2.html"



}




   

    }
    
   
   
   
    






 










