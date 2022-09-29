"use strict";

// getSay(12,10,5,8)


// function decloartrion
// function getSay(a,b,c,d) {
// return a+b*c*d


// }

// console.log(getSay(30,10,5,8));


// function expression

//ES5
// const getData =function(text){
//    return text
// }

// console.log(getData('javaScript the best'));

// // ES6

// const app=(a,b)=> a+b

// console.log(app('LESSON 4','lesson 5'));


// let data=app;

// data('32','86')


// (function(text){
//    console.log('Hello world '+text);

// }('javaScript'))

// let text='javaScript'
// console.log('Hello world '+text);

// console.log();



// function message(text='JavaScript'){
//    console.log(text);
// }

// message()



// let fruits=new Array('apple','limon',12,true,'orange');
// console.log(fruits[1]);

// console.log(typeof(fruits));


// let cars = ['bmw', 'audi', 'nissan', 'lombarghini', 'bugatti','lexus'];

// cars[1]="bmw"

// cars[7]="nexia"
// console.log(cars);
// console.log(cars[4]);


// for(let i=1; i<50; i++){
//    cars[i]=`car ${i+1}`;
// }


// for (let i = 0; i < cars.length; i++) {
//    console.log(cars[i]);
// }




const data=[12];
const letters=['a','b','c','d','e'];

data.push('Asadbek'); // ohiridan element qo'shadi
data.push('Javlonbek');
data.push('MESSI');

data.pop() // o'chiradi

data.unshift('Ibrohim')
data.unshift('Husniddin')
data.unshift('Mirkamol')
// data.shift()



// console.log(data.slice(1,3)); // qisimni olib beradi

let newArray=data.splice(3,2) // qirqib oldi 


// let array3=data.concat(letters).concat(newArray).concat(['php ']); //ulab beradi
// console.log(array3);

// console.log(data);

// console.log(data.join(' 12 '));

// console.log(typeof data.join('-'));


// let array=['javaScript','swift','go lang' ,'rust','c#' ,'c++','java'];


// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// console.log(array.includes('java'));

// console.log(array.indexOf('rust'));


// for(let i=0; i<array.length; i++){

//    if(array[i].length>=5){
//       console.log(array[i]);
//    }

// }









// let text='Salom,va as alaykum , assalom ';

// console.log(text.length);

// console.log(text.concat(' va alaykum assalom'));
// console.log(text.trim().length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text[0]);
// console.log(text.split(""));
// console.log(text.charAt(0));
// console.log(text.substring(1,99));
// console.log(text.search('va'));
// console.log(text.match(/va/g));




// function ok(text){
//    return 'SALOM'+text
// }


// console.log(ok('VA'));


// alert(ok(' va alaykum assalom'))





let n=+prompt('n=');
let array=[];
for(let i=0; i<=n; i++){
  array.push(i)
  console.log(array[i]);
}

console.log(array);




