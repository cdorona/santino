// Primero vamos a crear un Array de Objetos ( de cartas)

const cartas = [
    {
        nombre: "Imagen1",
        img:"imagenes/buzz.png",
    },
    {
        nombre: "Imagen2",
        img:"imagenes/woody.png",
    },
    {
        nombre: "Imagen3",
        img:"imagenes/dino.png",
    },
    {
        nombre: "Imagen4",
        img:"imagenes/papa.png",
    },
    {
        nombre: "Imagen5",
        img:"imagenes/tenedor.png",
    },
    {
        nombre: "Imagen6",
        img:"imagenes/cerdito.png",
    },
    {
        nombre: "Imagen7",
        img:"imagenes/malo.png",
    },
    {
        nombre: "Imagen8",
        img:"imagenes/perrito.png",
    },
    {
        nombre: "Imagen9",
        img:"imagenes/duendes.png",
    },
    {
        nombre: "Imagen10",
        img:"imagenes/novia.png",
    },
    {
        nombre: "Imagen11",
        img:"imagenes/pibe.png",
    },
    {
        nombre: "Imagen12",
        img:"imagenes/manos.png",
    },
    {
        nombre: "Imagen1",
        img:"imagenes/buzz.png",
    },
    {
        nombre: "Imagen2",
        img:"imagenes/woody.png",
    },
    {
        nombre: "Imagen3",
        img:"imagenes/dino.png",
    },
    {
        nombre: "Imagen4",
        img:"imagenes/papa.png",
    },
    {
        nombre: "Imagen5",
        img:"imagenes/tenedor.png",
    },
    {
        nombre: "Imagen6",
        img:"imagenes/cerdito.png",
    },
    {
        nombre: "Imagen7",
        img:"imagenes/malo.png",
    },
    {
        nombre: "Imagen8",
        img:"imagenes/perrito.png",
    },
    {
        nombre: "Imagen9",
        img:"imagenes/duendes.png",
    },
    {
        nombre: "Imagen10",
        img:"imagenes/novia.png",
    },
    {
        nombre: "Imagen11",
        img:"imagenes/pibe.png",
    },
    {
        nombre: "Imagen12",
        img:"imagenes/manos.png",
    },

]
// Este metodo ordena el Array ramdom cada vez que hago refresh
cartas.sort(() => 0.5 - Math.random())

// Ahora busco el # GRID

const gridDisplay = document.querySelector("#grid") // Busca en todo el documento para buscar el ID GRID y toma toda la linea

// Ahora busco de donde sale el Score
const resultadoDisplay = document.querySelector("#result")

// Ahora armo un Array de cartas elegidas

let tarjetasElegidas=[]
    
// Ahora armo un Array de Cartas Elegidas

let tarjetasElediasId =[]

// Array que nos diga que cartas ya salieron
const tarjetasGanadoras = []


// boton para reiniciar con refresh con el boton
const boton = document.querySelector("#boton")

boton.addEventListener("click",() => {
    location.reload();
    console.log("Sebas esta entrando")

})

//Ahora hacemos una funcion para crear el tablero del juego


function createBoard(){
    for (let i=0; i< cartas.length; i++){
        const tarjeta = document.createElement("img")
        tarjeta.setAttribute("src","imagenes/blank.png")
        tarjeta.setAttribute("data-id",i)
        tarjeta.addEventListener("click",flipCard)
        gridDisplay.appendChild(tarjeta)
    }
}

createBoard()

// Funcion para chekear si hay un Match

function checkMatch(){
    const carta = document.querySelectorAll("img") // Busca todas las imagenes en el documento
    const opcionUnoId = tarjetasElediasId[0]
    const opcionDosId = tarjetasElediasId[1]


    console.log("Check for Match!!!")
    if(opcionUnoId == opcionDosId){
        alert("TOCASTE LA MISMA CARTA !!!")
        carta[opcionUnoId].setAttribute("src","imagenes/blank.png")
        carta[opcionDosId].setAttribute("src","imagenes/blank.png")

    }

    if(tarjetasElegidas[0]==tarjetasElegidas[1]){
        alert("MUY BIEN SANTI, SEGUI ASI !!!")
        carta[opcionUnoId].setAttribute("src","imagenes/white.png")
        carta[opcionDosId].setAttribute("src","imagenes/white.png")
        carta[opcionUnoId].removeEventListener("click",flipCard)
        carta[opcionDosId].removeEventListener("click",flipCard)
        tarjetasGanadoras.push(tarjetasElegidas)
         

    } else{
        carta[opcionUnoId].setAttribute("src","imagenes/blank.png")
        carta[opcionDosId].setAttribute("src","imagenes/blank.png")
        alert("NO COINCIDERON, VOLVE A INTENTARLO !!! ")

    }
    tarjetasElegidas=[] // las vacio para comenzar otra vez
    tarjetasElediasId=[]
    resultadoDisplay.textContent = tarjetasGanadoras.length
    if(tarjetasGanadoras.length == (cartas.length)/2){
        resultadoDisplay.textContent = "    Felicitaciones SANTI, GANASTE!!!"


    }
}

//Ahora creamos una funcion para dar vuelta las cartas

function flipCard(){
    console.log(cartas)
    const cardId=this.getAttribute("data-id")
    
    
    tarjetasElegidas.push(cartas[cardId].nombre)
    tarjetasElediasId.push(cardId)
    console.log(tarjetasElegidas)
    console.log(tarjetasElediasId)

    
    this.setAttribute("src",cartas[cardId].img)
    if(tarjetasElegidas.length === 2){
        setTimeout(checkMatch,500)




    }


}








