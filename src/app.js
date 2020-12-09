import parser from './core/utils';




let els = document.querySelectorAll('ul.numbers > li');
console.log(els)



console.log(' --  Avant la permutation --- ')

let myTab = Array.from(document.querySelectorAll('li'))
console.log('myTab', myTab)

let [l1,l2,l3] = myTab

const ul = document.querySelector('ul.numbers');

[l3, l1, l2].map(lesLi   => {
  console.log(' --  Apres la permutation --- ', lesLi);
  ul.appendChild(l1);
}
)





// let  text = Array.from(document.querySelectorAll('span'))
//   .map(el => el.innerText);
// console.log("avec map ",text) 


// On attend que le DOM soit construit avant d'exécuter nos fonctions
document.addEventListener("DOMContentLoaded", (event) => {



});