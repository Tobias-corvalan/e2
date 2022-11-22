/*
class  Pizza{
    
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.ingrediente=[];
        this.precio = precio;
    }

    agregar_ingrediente(ingredientes){
        this.ingrediente.push(ingredientes)
    }
    
}


let cantidad_pizza = parseInt(prompt("Ingrese la cantidad de pizzas que va a necesitar: "));
let lista_pizza = [];
id = 0
for(let i = 0; i < cantidad_pizza; i++){

    id++
    let nom = prompt("Ingrese nombre: ");
    let  precio = parseInt(prompt("Ingrese precio: "));
    let cantidad_ingre = parseInt(prompt("Ingrese cant ingre: "));
 
    const pizza = new Pizza(id,nom,precio);
    lista_pizza.push(pizza)

    for(let j = 0; j < cantidad_ingre; j++){

        let ingrediente = prompt("Ingrese ingrediente: ");
        pizza.agregar_ingrediente(ingrediente)
    }


}



//a)  Las pizzas que tengan un id impar.
const pizza_id = lista_pizza.filter(pizza => pizza.id % 2 !== 0);
console.log("Las pizzas con id impar son las siguientes:")
pizza_id.forEach(pizza => console.log(`${pizza.nombre}`))


//b) ¿Hay alguna pizza que valga menos de $600?
/*for(let i = 0; i < lista_pizza.length; i++){
    let pizza_1 = lista_pizza[i];
    if(pizza_1.precio <= 600){
        console.log(`La Pizza ${pizza_1.nombre} vale menos de $600`);
    }
}
const pizza_menor = pizza => pizza.precio < 600;
if(lista_pizza.some(pizza_menor)){
    console.log("Hay pizzas menores a $600")
}else{
    console.log("No hay pizzas menores a $600")
}

//c) El nombre de cada pizza con su respectivo precio.
lista_pizza.forEach(pizza => console.log(`La pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`));

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).

lista_pizza.forEach(pizza => {

    console.log(`La pizza ${pizza.nombre} tiene los siguientes ingredientes:`)
    pizza.ingrediente.forEach(ing => console.log(`${ing}`));
})
*/
//Entrega 2
const Pizzas = [
    {
        id: 1,
        nombre: "Especial",
        ingredientes: ["salsa de tomate","queso","jamón","aceitunas"],
        precio: 550
    },
    {
        id: 2,
        nombre: "Americana",
        ingredientes: ["salsa de tomate","queso","jamón","huevo frito","morrón","aceitunas"],
        precio: 1400
    },
    {
        id: 3,
        nombre: "Jamón y Palmitos",
        ingredientes: ["salsa de tomate","queso","jamón","palmitos","morrón"],
        precio: 1500
    },
    {
        id: 4,
        nombre: "Champiñon",
        ingredientes: ["queso","jamon","champiñones","morron", "salsa blanca"],
        precio: 1550
    },
    {
        id: 5,
        nombre: "Jamón y ananá",
        ingredientes: ["salsa de tomate","queso","jamon","ananá"],
        precio: 1600
    },
    {
        id: 6,
        nombre: "Rúcula y crudo",
        ingredientes: ["salsa de tomate","queso","jamon crudo","rúcula"],
        precio: 1850
    },
    {
        id: 7,
        nombre: "Fugazza y roque",
        ingredientes: ["queso","cebolla camamelizada","queso roquefort"],
        precio: 590
    }
]



const form = document.querySelector("#form");
const inputNumber = document.querySelector("#number-id");
const btn = document.querySelector(".btn-form");
const container = document.querySelector(".container-resultado");

const createHTML = (pizza) => {

    return `
    <div class="card">
        <h2>${pizza.nombre}</h2>
        <h3>$${pizza.precio}</h3>
    </div> `
}

const RenderMsj = (pizza, classet) => {

    container.innerHTML = createHTML(pizza);
    container.classList.add(classet);

}

const searchValue = (e) => {

    e.preventDefault();
    const valueid = inputNumber.value;
    console.log(valueid);
    if(valueid === ""){
        console.log("Ingrese un valor")
        container.classList.remove("correct")
        RenderMsj({nombre: "Ingrese un valor", precio: " -"}, "error");
        
    }else if(valueid == 0){
        console.log("Ingrese un valor mayor a 0")
        container.classList.remove("correct")
        RenderMsj({nombre: "Ingrese un valor mayor a 0", precio: " -"}, "error");
    }else if(valueid > 7){
        console.log("Ingrese un valor mayor a 0")
        container.classList.remove("correct")
        RenderMsj({nombre: "No hay pizzas con id mayor a 7", precio: " -"}, "error");
       
    }else{
        const pizza = Pizzas.find(pizza => pizza.id == valueid);
        container.classList.remove("error");
        RenderMsj(pizza, "correct");
       
    }
    inputNumber.value = "";

}



form.addEventListener("submit",searchValue);