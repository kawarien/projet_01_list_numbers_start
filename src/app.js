import parser from './core/utils';



const main = document.getElementById("main");

// On attend que le DOM soit construit avant d'exécuter nos fonctions
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("App.js")
  console.log(parser("Bonjour tout le monde"));


});