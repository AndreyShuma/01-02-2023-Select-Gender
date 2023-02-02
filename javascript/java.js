'use strict'
const become = document.querySelector('select[name=name_become]');
const man = document.querySelector('option[value=man]');
const woman = document.querySelector('option[value=woman]');
const myNull = document.querySelector('option[value=null]');
const text_woman = document.querySelector('.text_woman');
const test_input = document.getElementById('five');

// test_input.addEventListener('change', () => {
//     console.log(test_input.value);
// });

let myInput;
become.addEventListener('change', (ev) => {
    if(woman.selected) {
        console.log(woman);
        text_woman.innerHTML ="Дівчат не питають про вік!!!";
        text_woman.classList.remove('addMan');
        text_woman.classList.add('addWoman');
    } else if(myNull.selected) { 
        text_woman.classList.remove('addMan');
        text_woman.classList.remove('addWoman');
        console.log(text_woman.classList);
    } else { 
        renderMan(); 
        myInput.addEventListener('keyup', (even) => {
            let age = even.target.value;
            console.log(age);           
            // text_woman.append(age);
        });
        // const event = ev.target.value;
        // console.log(event);

    }
       
});

function renderMan() {
    text_woman.classList.add('addMan');
    text_woman.classList.remove('addWoman');
    myInput = document.createElement('input');
    // let myInput =`<input type="text" id="123" value="">`;
    // const elInput =document.querySelector('#123');

    text_woman.innerHTML =`<div>Який ваш вік ? <br> </div>`;
    text_woman.append(myInput);
    
    // myInput.addEventListener('keyup', () => console.log( myInput.value ));
    
    // return console.log(myInput);
}

// console.log(man);


// var Shape = { twoDimensional: true, color: undefined, hasLineSegments: undefined };
// var Square = Object.create(Shape);
// console.log(Square);