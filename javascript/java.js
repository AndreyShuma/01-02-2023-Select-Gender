'use strict'
const become = document.querySelector('select[name=name_become]');
const man = document.querySelector('option[value=man]');
const woman = document.querySelector('option[value=woman]');
const myNull = document.querySelector('option[value=null]');
const text_woman = document.querySelector('.text_woman');
const test_input = document.getElementById('five');
const tagH2 = document.querySelector('h2');

let myInput;
let myInputName;
let divName;
become.addEventListener('change', (ev) => {

    let clickTarget = ev.target.value;
    // console.log(clickTarget, ', typeof :', typeof clickTarget) ;

    if(woman.selected) {
        // console.log(woman);
        text_woman.innerHTML ="Дівчат не питають про вік!!!";
        text_woman.classList.remove('addMan');
        text_woman.classList.add('addWoman');
    } else if(myNull.selected) { 
        text_woman.classList.remove('addMan');
        text_woman.classList.remove('addWoman');
        // console.log(text_woman.classList);
    } else { 
        renderMan(); 
        myInput.addEventListener('keyup', (even) => {
            let age = even.target.value;
            console.log(age);     
        });
        myInputName.addEventListener('keyup', (eventmy) => {
            let nameUser = eventmy.target.value;
            let lowerNameUser = nameUser.toLowerCase();
            
            console.log(lowerNameUser.charAt(0).toUpperCase());

            // nameUser.chartAt(0)
        });  
}
       
});

// controller

function renderMan() {
    text_woman.classList.add('addMan');
    text_woman.classList.remove('addWoman');
    myInput = document.createElement('input');
    divName = document.createElement('div');
    myInputName = document.createElement('input');
    // let myInput =`<input type="text" id="123" value="">`;
    // const elInput =document.querySelector('#123');

    text_woman.innerHTML =`<div>Який ваш вік ? <br> </div>`;
    text_woman.append(myInput);
    text_woman.append(divName);
    divName.innerHTML = `<br> Ім'я користувача`;
    text_woman.append(myInputName);
    
    // myInput.addEventListener('keyup', () => console.log( myInput.value ));
    
    // return console.log(myInput);
}

// const upFirst = (str) => {
//     str = str.toLowerCase();  // зробити всі літери маленькими
//     str =`${str.charAt(0).toUpperCase()}${str.slice(1)}`;
//     return str;   
// };

const upFirst = str => str = `${str.slice(0,1).toUpperCase()}${str.slice(1).toLowerCase()}`;


console.log( upFirst(`Helow`)); 


// tagH2.addEventListener('mouseenter', () => {
//     let s;
//     let renderH2 = () => {
//         s = `<div class='vay'>ABC</div>`;
//         // tagH2.prepend(s);
//         const k = document.createElement('div');
//         k.innerHTML = s;
//         tagH2.prepend(k);
//         // tagH2.innerHTML = s;
//         console.log("uuuuuu");
//     }
//     renderH2();
// }); 

const Datenow = new Date();
// console.log(Datenow);

let f ="Привет! Мене!";
let n = f.slice(1, 4);
let m = f.substr(1, 4);
let k = f.substring(1, 4);

// console.log(n,",F:", f);
// console.log(m);
// console.log(k);

function test(s) {
	console.log(s);
}
test`text`;