"use strict";

// <i class="bi bi-x-lg"></i>

// classList.add('') => classlar ro'yhatiga qo'shadi.
// classList.remove('') => classlar ro'yhatiga o'chiradi.
// classList.contains('') => classlar ro'yhatidan tekshiradi bor bo'lsa true / false

$('.btn-success').addEventListener('click', () => {
   console.log($('.card').classList);
   $('.card').classList.add('text-center', 'text-danger', 'fw-bold', 'd-none');
   console.log($('.card').classList);
})



$('.btn-danger').addEventListener('click', () => {
   console.log($('.card').classList);
   $('.card').classList.remove('text-center', 'd-none');
   console.log($('.card').classList);
})


$('.btn-info').addEventListener('click', () => {
   console.log($('.card').classList.contains('card1'));
})


$('.btn-primary').addEventListener('click', () => {
   $('.card').classList.toggle('d-none');
})



$('.btn-warning').addEventListener('click', () => {

   $('.card').classList.toggle('swipe');
   if ($('.card').classList.contains('swipe')) {
      $('.btn-warning').innerHTML = `<i class="bi bi-list"></i>`;
   } else {
      $('.btn-warning').innerHTML = `<i class="bi bi-x-lg"></i>`;
   }
})

//=============== SLIDER============//


let i = 0;

function slider() {

   if (i > $$('.slide-item').length - 1) {
      i = 0;
   }
   if (i < 0) {
      i = $$('.slide-item').length - 1
   }

   $('.slide-list').style.transform = `translateX(${-i*700}px)`;

}


$('.next').addEventListener('click', () => {
   i++
   slider()
})


$('.prev').addEventListener('click', () => {
   i--
   slider()
})

setInterval(() => {
   i++
   slider()
}, 3000)