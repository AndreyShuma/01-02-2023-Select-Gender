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


// console.log( upFirst(`Helow`)); 


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


// let n = f.slice(1, 4);
let n = "Привет! Мене!".slice(1, 4);
let m = f.substr(1, 4);
let k = f.substring(1, 4);

// console.log(f[f.indexOf('е')]);
// console.log(m);
// console.log(k);

function test(s) {
	console.log(s);
}
// test`text`;

const d = {
    name: 'Jeremy',
     age: 24, 
     role: 'Software Engineer'
    };
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]];
let result = [];

for (let key in d) {
    // result.push([key, d[key]]);

    result[key] =d[key] ;
}

// console.log(result);

// console.log(JSON.stringify(d)); 

function maskify(cc) {
    // return `${cc.slice(0, 5).replace(/[a-d]/gi, '-')}${cc.slice(5, -4).replace(/./gi, '#')}${cc.slice(-4)}`
    return `${cc.slice(0, -4).replace(/[0-9]/gi, '*')}${cc.slice(-4)}`
    }

//   console.log(maskify("zZcva123456789616"));  

  function descendingOrder(n){
    if (n < 0) return;
    let a = n.toString();
    console.log(a);
    let aa = a.split('');
    console.log(aa);
    let b = aa.sort((a,b) => b-a);
    console.log(b);
    let c = b.join('');
    console.log(c, typeof c);
    return  c;
    
  }
//   console.log(descendingOrder(56165156546111215)); 
    
  let g = 10;


    let l = g.toString(); // мутод Number
    let u = String(g); // метод String
    // console.log('l', l, typeof l);
    // console.log('u', u, typeof u);
    // let r = '10';
    // let o = Number(r) ;
    // console.log(o);

    function polindrom(parametr) {
        parametr = String(parametr).toLowerCase();
        // console.log(String(parametr.split('').reverse()));
        return parametr == parametr.split('').reverse().join('');
    }
    // console.log(polindrom('abba')); 

    let p =20;
    p = (5).toString();
    let  t = String(true);
    // console.dir(Math);

    // console.log(p, typeof p);
    // console.log(t, typeof t);

    let nn;
    var s="JavaScript";
    // console.log(s.toString());
    // console.log( {} + {});

    // console.log(String(1), Number(), Boolean(), Array(), Object(), Date(), Function, JSON); 
    // console.log(Math.PI);
    function longest(s1, s2) {
        let a = s1.toLowerCase().split(''); 
        let b = s2.toLowerCase().split('');
        if(s1.lenght >= s2.lenght) {   
          return a.sort().join('');
        }
        else {return b.sort().join('')}
      }

    //  console.log(longest('ghPHPNMAAjj', 'myughhabgKKKgchgh'));

    let r = [1, 5, 6, 2, 12, -3, 15];
    let o = r.filter( (item, index, arr) =>  {
        // for (let i = 0; i < arr.length; i++)
        // { console.log(i);
        //   console.log(++item);
        // console.log(index);
        // };

        // console.log(item, index, arr.length);
        return item >= 0;
    });
    // console.log(o);

    const cities = [
        {name: 'Moscow', population: 12506468},
        {name: 'Saint Petersburg', population: 5351935},
        {name: 'Novosibirsk', population: 1612833},
        {name: 'Kaliningrad', population: 482443},
        {name: 'Kaluga', population: 336726}
    ];

    // for ( let key of cities) {
    //     console.log(key, cities[]);
    // }
    let res = [];
    for ( let i = 0; i <cities.length; i++) {
        // console.log(i, cities[i].population);
        if(cities[i].population > 1000000) {
            // res[i] = cities[i];
            res.push(cities[i]);
            // console.log(cities[i].name);
        }
    }
    // console.log(res);

    // console.log(cities.filter( item => item.population > 1000000 )); 
document.write(`<div>Привіт JavaScript  :-) ${p}</div>
    <ul> 
        <li>1</li> 
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
     `);
