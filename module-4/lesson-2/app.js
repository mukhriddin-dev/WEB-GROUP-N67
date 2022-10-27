// $$(".box").forEach(element => {
//    element.addEventListener('click', (e) => {
//       e.target.style.display = "none";
//       console.log(e.target.classList.contains('box'));
//    })
// });

const boxitem=$$('.box');




$('.wrapper').addEventListener('click', (e)=>{
   if(e.target.classList.contains('box')){
      e.target.style.borderRadius="20px"
   }

})

const box = createElement('div', 'boxs', 'box-5');

boxitem[2].after(box);

// $('.wrapper').appendChild(box);


