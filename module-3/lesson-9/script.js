"use strict";

//part 1

// let user = [
//    {
//       "id": 1,
//       "email": "george.bluth@reqres.in",
//       "first_name": "George",
//       "last_name": "Bluth",
//       "avatar": "https://reqres.in/img/faces/1-image.jpg"

//     },
//     {
//       "id": 2,
//       "email": "janet.weaver@reqres.in",
//       "first_name": "Janet",
//       "last_name": "Weaver",
//       "avatar": "https://reqres.in/img/faces/2-image.jpg"
//     },
//     {
//       "id": 3,
//       "email": "emma.wong@reqres.in",
//       "first_name": "Emma",
//       "last_name": "Wong",
//       "avatar": "https://reqres.in/img/faces/3-image.jpg"
//     },
//     {
//       "id": 4,
//       "email": "eve.holt@reqres.in",
//       "first_name": "Eve",
//       "last_name": "Holt",
//       "avatar": "https://reqres.in/img/faces/4-image.jpg"
//     },
//     {
//       "id": 5,
//       "email": "charles.morris@reqres.in",
//       "first_name": "Charles",
//       "last_name": "Morris",
//       "avatar": "https://reqres.in/img/faces/5-image.jpg"
//     },
//     {
//       "id": 6,
//       "email": "tracey.ramos@reqres.in",
//       "first_name": "Tracey",
//       "last_name": "Ramos",
//       "avatar": "https://reqres.in/img/faces/6-image.jpg"
//     }
// ,
//    {
//       "id": 7,
//       "email": "michael.lawson@reqres.in",
//       "first_name": "Michael",
//       "last_name": "Lawson",
//       "avatar": "https://reqres.in/img/faces/7-image.jpg"
//    },

//    {
//       "id": 8,
//       "email": "lindsay.ferguson@reqres.in",
//       "first_name": "Lindsay",
//       "last_name": "Ferguson",
//       "avatar": "https://reqres.in/img/faces/8-image.jpg"
//    },
//    {
//       "id": 9,
//       "email": "tobias.funke@reqres.in",
//       "first_name": "Tobias",
//       "last_name": "Funke",
//       "avatar": "https://reqres.in/img/faces/9-image.jpg"
//    },
//    {
//       "id": 10,
//       "email": "byron.fields@reqres.in",
//       "first_name": "Byron",
//       "last_name": "Fields",
//       "avatar": "https://reqres.in/img/faces/10-image.jpg"
//    },
//    {
//       "id": 11,
//       "email": "george.edwards@reqres.in",
//       "first_name": "George",
//       "last_name": "Edwards",
//       "avatar": "https://reqres.in/img/faces/11-image.jpg"
//    },
//    {
//       "id": 12,
//       "email": "rachel.howell@reqres.in",
//       "first_name": "Rachel",
//       "last_name": "Howell",
//       "avatar": "https://reqres.in/img/faces/12-image.jpg"
//    }
// ];

// console.log(user[0].avatar);

// for (let i = 0; i < user.length; i++) {
//    const div = document.createElement('div');
//    div.setAttribute('class', 'card p-5 shadow w-25 ');
//    div.innerHTML = `
//    <img src=${user[i].avatar} alt="rasm">
//    <h3>${user[i].first_name} ${user[i].last_name} </h3>
//    <strong>${user[i].email}</strong>

//    `;

//    $('.wrapper').appendChild(div);
// }

// console.log(div);

//part 2

let products = [{
      name: "Iphone 14 pro",
      brand: "Apple",
      price: 1400,
      isBuy: true,
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
      category: ["smartphone", "tech"],
   },
   {
      name: "Samsung A72",
      brand: "Samsung",
      price: 500,
      isBuy: true,
      img: "https://openshop.uz/uploads/products/photos/202107/EXCBkPLOB3pB0rE0RT6NBH7VrV4aCrphD0C8UNSq.jpg",
      category: ["smartphone"],
   },
   {
      name: "Redmi note 11 pro",
      brand: "Xiomi",
      price: 320,
      isBuy: false,
      img: "https://mi-tashkent.uz/image/cache/catalog/0001/00001/0001/011/xiaomi-redmi-note-11-pro-5g-109-600x600.jpg",
      category: ["smartphone", "tech"],
   },
   {
      name: "Nokia 1202",
      brand: "Nokia",
      price: 5000,
      isBuy: true,
      img: "https://mobile-review.com/review/image/nokia/1202/pic/pic11.jpg",
      category: ["archive", "keyboard smartphone"],
   },

   {
      name: "Iphone 11 pro",
      brand: "Apple",
      price: 700,
      isBuy: true,
      img: "https://www.ixbt.com/img/x780x600/r30/00/02/23/46/AppleiPhone11ProColors091019.jpg",
      category: ["smartphone", "tech"],
   },
   {
      name: "Samsung A22",
      brand: "Samsung",
      price: 200,
      isBuy: true,
      img: "https://mobile-review.com/all/wp-content/uploads/2021/06/samsung_galaxy_a22_5g_1.jpg",
      category: ["smartphone"],
   },
   {
      name: "M11 lite",
      brand: "Xiomi",
      price: 420,
      isBuy: false,
      img: "https://openshop.uz/uploads/products/photos/202203/oT1fjPzA6XjPufbq0o3LYGrDpaCQDW1RaGDbY6Il.jpg",
      category: ["smartphone", "tech"],
   },
   {
      name: "Nokia G21",
      brand: "Nokia",
      price: 230,
      isBuy: true,
      img: "https://m.media-amazon.com/images/I/71x+m2-yb7L._SL1500_.jpg",
      category: ["smartphone"],
   },
];

// arry.forEach( function(elements , index , array ){ })
//let data=arry.filter( function(elements , index , array ){ })

// let data = products.filter((e, i, a) => {
//    return e.brand.toLowerCase() === 'apple'
// })



// console.log(data);


// let numbers=[1,2,3,4,5,6,7,8,9];

// let datanumber=numbers.filter((e)=>{
//    return e%3===0
// })

// console.log(datanumber);






function summa(){
   let sum=products.reduce((a,b)=>{
      return a+b.price
   },0);

   $('.sum').textContent=sum;
}

summa()




let brand = [];
//========== DEFOUL RENDER PRODUCTS =======////
products.forEach((e) => {
   
   //===== BRANDS NO REPEAT ======/
   if (!brand.includes(e.brand)) {
      brand.push(e.brand)
   }

   const div = document.createElement("div");


   div.setAttribute("class", "card  shadow w-25 d-flex justify-content-center ");

   div.innerHTML = `
   <img src=${e.img} alt="rasm" width="300" height="320">
   <h3>Name: ${e.name}</h3>
   <h4>Brand: ${e.brand}</h4>
   <span class="p-2 bg-secondary text-white fw-bold">${e.price}</span>
   <ul>
   <li>${e.category}</li>
   </ul>
   <strong 
   class=${e.isBuy ? "bg-success p-2 rounded-4 text-white" : "bg-danger p-2 rounded-4 text-white"}> ${e.isBuy ? "SOTUVDA MAVJUD" : "SOTUVDA YO'Q "}</strong>
   `;

   $('.wrapper').appendChild(div);

});


// ====== DYNAMIC OPTION APPEND

brand.forEach(e => {
   const option = document.createElement('option');
   option.innerHTML = e;
   $('.form-select').appendChild(option);
})

///====== FILTER IN BRAND

$('.form-select').addEventListener('change', (evt) => {
   $('.wrapper').innerHTML = "";
   let price=$('#price').value;
   const filterProduct = products.filter((e) => {
      return e.brand.toLowerCase() === evt.target.value.toLowerCase() && e.price > price; 
   })
   filterBrand(filterProduct)
})


function filterBrand(data) {

   let sum=data.reduce((a,b)=>{
      return a+b.price
   },0);

   $('.sum').textContent=sum;

   console.log(sum)
   
   

   data.forEach((e) => {
      const div = document.createElement("div");

      div.setAttribute("class", "card  shadow w-25 d-flex justify-content-center ");

      div.innerHTML = `
      <img src=${e.img} alt="rasm" width="300" height="320">
      <h3>Name: ${e.name}</h3>
      <h4>Brand: ${e.brand}</h4>
      <span class="p-2 bg-secondary text-white fw-bold">${e.price}</span>
      <ul>
      <li>${e.category}</li>
      </ul>
      <strong 
      class=${e.isBuy ? "bg-success p-2 rounded-4 text-white" : "bg-danger p-2 rounded-4 text-white"}> ${e.isBuy ? "SOTUVDA MAVJUD" : "SOTUVDA YO'Q "}</strong>
      `;

      $('.wrapper').appendChild(div);

   });
}


