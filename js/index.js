//localStorage.setItem("sesionIniciada",);

//let resultFetch = JSON.parse(localStorage.getItem("resultFetch"));


let datos = [];

document.getElementById("buttonText").addEventListener("click", function(){
   
    let dato = document.getElementById("inputText").value;
    datos.push(dato);    
    localStorage.setItem("textdata", JSON.stringify(datos))
});
