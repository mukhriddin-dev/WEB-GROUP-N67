"use strict";

let notif = document.querySelector('#notif'),
   input = document.querySelectorAll('input'),
   sendBtn = document.querySelector('.btn-primary'),
   indicator = document.querySelector('#indicator'),
   modalWrapper = document.querySelector('.modal-wrapper'),
   modalText = document.querySelector('#modal-text'),
   textTimer = document.querySelector('.text-danger');




//======================= FORM VALIDATION ====================//

input[0].addEventListener('focus', (e) => {
   e.target.setAttribute('style', 'border:2px solid green');
   e.target.setAttribute('placeholder', 'Enter Username')
})

input[0].addEventListener('blur', (e) => {

   if (e.target.value.trim().length === 0) {
      e.target.setAttribute('style', 'border:2px solid crimson');
      e.target.setAttribute('placeholder', 'Please fill input  . . .');
      e.target.value = ""
   } else {
      e.target.setAttribute('style', 'border:2px solid green');
   }
})


input[1].addEventListener('focus', (e) => {

   if (input[1].value.trim().length === 0) {
      input[1].setAttribute('style', 'border:2px solid crimson');
      input[1].setAttribute('placeholder', 'Please fill input  . . .');
      input[1].value = ""
   } else {
      input[1].setAttribute('style', 'border:2px solid green');
      indicator.setAttribute('class', 'ind d-block');

   }
   if (input[0].value.trim().length === 0) {

      input[0].setAttribute('style', 'border:2px solid crimson');
      input[0].setAttribute('placeholder', 'Please fill input  . . .');
      input[0].value = ""
   } else {
      input[0].setAttribute('style', 'border:2px solid green');

   }
})

input[1].addEventListener('blur', (e) => {
   if (e.target.value.trim().length === 0) {
      e.target.setAttribute('style', 'border:2px solid crimson');
      e.target.setAttribute('placeholder', 'Please fill input  . . .');
      e.target.value = "";
      indicator.setAttribute('class', 'ind d-none');
   } else {
      e.target.setAttribute('style', 'border:2px solid green');
      indicator.setAttribute('class', 'ind d-block');
   }
})


indicator.addEventListener('click', (e) => {

   if (input[1].getAttribute('type').toLowerCase() === 'password') {
      input[1].setAttribute('type', 'text');
      indicator.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
   } else {
      input[1].setAttribute('type', 'password');
      indicator.innerHTML = `<i class="bi bi-eye-fill"></i>`;
   }

})


//======================= FORM VALIDATION ====================//


sendBtn.addEventListener('click', () => {
   if (input[0].value.trim().length === 0 || input[1].value.trim().length === 0) {
      console.log(1);
   } else {
      modalWrapper.setAttribute('class', 'modal-wrapper d-flex');
      setTimeout(function () {
         modalWrapper.setAttribute('class', 'modal-wrapper slide')
      }, 10000)
   }
})


window.addEventListener('click', (e) => {
   console.log(e.target);
   if (e.target.getAttribute('class') === 'modal-wrapper d-flex') {
      modalWrapper.setAttribute('class', 'modal-wrapper  slide')
   }
})

// ============== date object ===========//
var month = ["January", "February", "March", "April", "May", "June", "July",
   "August", "September", "October", "November", "December"
];


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



let date = new Date();
console.log(date);

console.log(date.getDate()); // bugungu sana
console.log(date.getDay()); // bugungi hafta kuni
console.log(date.getFullYear()); // yil
console.log(month[date.getMonth()]); /// oy 
console.log(date.getHours()); // soat
console.log(date.getMinutes()); // daqiqa
console.log(date.getSeconds()); // soniya
console.log(date.getTimezoneOffset()); //

console.log(Math.round(2022 - date.getTime() / 1000 / 60 / 60 / 24 / 365));


setInterval(() => {
   let date = new Date();
   textTimer.innerHTML = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)