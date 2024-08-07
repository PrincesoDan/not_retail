// Manipulando el DOM
// document.querySelector("h1").textContent = "Cambiado desde JS";

// document.querySelectorAll(".grande").forEach(element => {
//     element.fontSize = "30px";
// });
// document.querySelectorAll(".red").forEach((element, index) => {
//     element.textContent = `Paragrafo ${index}`;
// });   
// EVENTOS

// let titulo = document.querySelector("h1");
// // function muestraAlerta () {
// //     alert("Hola");
// // }   
// // titulo.addEventListener("mouseenter", (e) => {alert("Hola")});
// // titulo.addEventListener("mouseleave", muestraAlerta);

// titulo.addEventListener("click", cambioColor);
// function cambioColor () {
//     const colores = ["red", "green", "blue", "yellow", "purple"];
//     titulo.style.color = colores[Math.round(Math.random()*(colores.length-1))];};

// EJERCICIO

// let titulo = document.querySelector("h1");
// let p = document.querySelector(".red");
// // function muestraAlerta () {
// //     alert("Hola");
// // }   
// // titulo.addEventListener("mouseenter", (e) => {alert("Hola")});
// // titulo.addEventListener("mouseleave", muestraAlerta);
// p.addEventListener("mouseenter", cambioContenido);
// titulo.addEventListener("click", cambioColor);
// function cambioContenido () {
//     p.textContent = "Nuevo texto";
// }
// function cambioColor () {
//     const colores = ["red", "green", "blue", "yellow", "purple"];
//     if (titulo.style.color !== "green") {
//         titulo.style.color = "green";
//     }
//     else {
//         titulo.style.color = "red";
//     }
// };

// <!-- Proyecto Front-end -->

const formFruta = document.querySelector("#valorIntroducido form");
const listaFrutas = document.querySelector("#seccionFrutas ul");
const infoNutricional = document.querySelector("#seccionNutricional p");


formFruta.addEventListener("submit", extraerFruta);

function extraerFruta (e) {
    e.preventDefault();
    e.target.valorFruta.value !== ""? fetchFruta(e.target.valorFruta.value): alert("Might introduce una fruta");
    e.target.valorFruta.value = ""; 


};
   
async function fetchFruta (fruta) {
    try {
        const resp = await fetch(`https://test-back-end-1.onrender.com/frutas/${fruta}`);
        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        } 
        else {
            const datos = await resp.json();
            nuevaFruta(datos);
        }

       }   catch (e) {
        console.log('Error: ' + e);
    }
};

let cal=0;
let calFrutas = {};

function nuevaFruta (fruta){
    const li = document.createElement("li");
    li.textContent = fruta.nombre;
    li.addEventListener("click",eliminarFruta);
    listaFrutas.appendChild(li);
    calFrutas[fruta.name] = fruta.nutritions.calories;
    cal += fruta.nutritions.calories;
    infoNutricional.textContent = `Total de calorias: ${cal}`;

};
function eliminarFruta (e) {
    const nombreFruta = e.target.textContent;
    cal -= calFrutas[nombreFruta];
    infoNutricional.textContent = `Total de calorias: ${cal}`;
    e.target.remove();
};