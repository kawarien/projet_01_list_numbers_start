import parser from './core/utils';

///////////////////////  Exercice 01 liste de nombres //////////////////


let els = document.querySelectorAll('ul.numbers > li');
console.log(els)



// console.log(' --  Avant la permutation --- ')

// let myTab = Array.from(document.querySelectorAll('li'))
// console.log('myTab', myTab)

// let [l1,l2,l3] = myTab

// const ul = document.querySelector('ul.numbers');

// [l3, l1, l2].map(lesLi   => {

//   console.log(' --  Apres la permutation --- ', lesLi);

//   ul.appendChild(l1);
// }
// )




// Boucles JS

// function perm(xs) {
//   let mysNewTab = [];
//   for (let i = 0; i < xs.length; i = i + 1) {
//     let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

//     if(!rest.length) {
//       mysNewTab.push([xs[i]])
//     } else {
//       for(let j = 0; j < rest.length; j = j + 1) {
//         mysNewTab.push([xs[i]].concat(rest[j]))
//       }
//     }
//   }
//   return mysNewTab;
// }
//  let myTab = Array.from(document.querySelectorAll('li'))
//  console.log(myTab)
// console.log(perm(myTab).join("\n"));

//  let myTab = Array.from(document.querySelectorAll('li'))
// for(let i = 0; i < myTab.length; i++){
//   console.log(i);
// }

// // Calculer la longueur d'un tableau
// console.log('longueur du tab ',myTab.length)


// let  text = Array.from(document.querySelectorAll('span'))
//   .map(el => el.innerText);
// console.log("avec map ",text) 




///////////////////////  Exercice 02 Créer un élément HTML //////////////////



window.onload = () => {
    
    let container = document.querySelector('ul.numbers');
    let li = null;

    let  text = Array.from(document.querySelectorAll('ul.numbers > li'))
      .map(el => {
          return el
      });
    console.log("avec map ",text) 

    for (let index = 4; index < 9; index++) {
        li = document.createElement("li");
        const str = "DEFGH";
        for (let i = 0; i < 5; i++) {
            li.innerHTML = str.charAt(str[i]) + "="+ index;
            container.appendChild(li)   
            
        }
          
        
}
   
}
