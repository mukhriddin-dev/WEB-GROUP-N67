"use strict";



// 1. ====> console.log da this = global window
// console.log(this);

// (function(){
//    console.log(this);
// }())
// function getWindow(){
//    console.log(this);     
// }
//  getWindow()

// 2 . ==> function decloartrion & function expression da this keyword => "use strict" ? = undefined || global window

// const app=()=>{
//    console.log(this);
// }

// app()

// 3. arrow function da this keyword => "use strict" || global window


// const obj={


//    getInfo: function(){
//        console.log(this);
//    }

// }

// obj.getInfo()


// 4. this keyword object ichida  shu  object ga teng.


// Closure 


// // const sum = 5000;

// function text(text) {
//    console.log(text);
// }

// function num() {
//    const sum = 10000;

//    console.log(sum);



//    text(sum)
// }

// num()



// function addNumber(num){
//    console.log(this.number+num);
// }


// let sum={
//    number:777777777
// }


// // CALL , 
// // addNumber('ok')

// addNumber.call(sum,  888);
// addNumber.apply(sum, [" +988"]);

// console.log(addNumber);


// function number(num) {
//    console.log(this + num);
// }

// const app = number.bind(100)

// app(90)
// app(777)
// app(-400)



// let btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//    console.log(this);
//    this.style.background="red"
// });














// ======== constructor function ES5 ======== 


// function Device(name, color, price, brand, type) {

//    this.name = name;
//    this.color = color;
//    this.price = price;
//    this.brand = brand;
//    this.type = type;

//    this.allInfo = function () {
//       console.log(`name: ${this.name} color: ${this.color} price: ${this.price} brand: ${this.brand} type: ${this.type}`);
//    }


// }


// const iphone = new Device('Iphone 7 plus', 'silver', 300, 'apple', 'smartphone');
// const samsung = new Device('Samsung S25 ultra pro', 'silver', 4400, 'Samsung', 'smartphone');

// console.log(iphone);
// console.log(samsung);

// Device.prototype.readMore = function () {
//    console.log(`${this.name} read more...`);
// }


// iphone.allInfo()
// samsung.allInfo()
// iphone.readMore()


class Device {

   constructor(name, color, price, brand, type) {
      this.name = name;
      this.color = color;
      this.price = price;
      this.brand = brand;
      this.type = type;

      this.allInfo = function () {
         console.log(`name: ${this.name} color: ${this.color} price: ${this.price} brand: ${this.brand} type: ${this.type}`);
      }
   }


}




class Product extends Device{

   constructor(name, color, price, brand, type, category,weight){
       super(name, color, price, brand, type),
       this.category = category,
       this.weight= weight
   }


}

class Cars extends Product {

   constructor(name, color, price, brand, type, category,weight, power){
      super(name, color, price, brand, type, category,weight)
      this.power= power
   }

}


const realme=new Device('Realme +' , "white", "544", "xiomi", "smartphone");
const cola=new Product('cola', 'black','12000','coca-cola','drink','drink','1.5')
const merc=new Cars('Merc','black', '777777', 'mercedec' ,'cars', 'sport cars', '3000', '500' )

console.log(realme);
console.log(cola);
console.log(merc);

realme.allInfo()
cola.allInfo()

























// function callBackHell() {
//    const message = "hello world!";

//    setTimeout(() => {
//       console.log(message);
//       setTimeout(() => {
//          console.log("step2");
//          setTimeout(() => {
//             console.log("step3");
//             setTimeout(() => {
//                console.log("step 4");
//                setTimeout(() => {
//                   consoltweryjtue.log("step 5");
//                }, 5000)
//             }, 4000)
//          }, 3000)
//       }, 2000)
//    }, 1000)

// }


// callBackHell()