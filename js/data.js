const datos = JSON.parse(localStorage.getItem("textdata"));


function escribirlista(datos) {
    const lista = datos;
    let htmlContentToAppend = "";
    lista.forEach(elm => {
        htmlContentToAppend += 
        `<ul> 
        <li>${elm}</li>
        </ul>
        `
        document.getElementById("data").innerHTML = htmlContentToAppend;
    })
}

escribirlista(datos);