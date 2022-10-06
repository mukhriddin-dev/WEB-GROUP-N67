"use strict";

// let text=document.querySelector('.text');
// let btn1=document.querySelector('.btn-primary'),
//     btn2=document.querySelector('.btn-danger'),
//     btn3=document.querySelector('.btn-success');





// function addStyel(){
//    // text.style.color="red"
//    // text.style.padding="100px"
//    // text.style.backgroundColor="yellow"
//    text.style.cssText='color:red; background-color:orange; padding:50px';
// }

// v2
// btn1.onclick=addStyel

// btn2.onclick=function(){
//    text.style.display="none"
// }

// btn3.onclick=function(){
//    text.style.display="block"
// }

// v3

// btn1.addEventListener('click', addStyel);

// btn2.addEventListener('click',()=> { text.style.display="none" })







// card.addEventListener('mouseover',(e)=>{
//    console.log(e.target);
//    // e.target.style.display="none";
//    console.log('is working over');
//    card.style.backgroundColor="green";
// })

// card.addEventListener('mouseout',()=>{

//    console.log('is working out');
//    card.style.backgroundColor="white";
// })


// card.addEventListener('mousedown',()=>{

//    console.log('is working down');
//    card.style.backgroundColor="crimson";
// })

// card.addEventListener('mouseup',()=>{

//    console.log('is working up');
//    card.style.backgroundColor="aqua";
// })

// let btnw=document.querySelector('.btn-warning');

//        window.addEventListener('mousemove',(e)=>{
//         console.log(e);
//         btnw.style.transform=`translateX(${e.clientX}px)`
//       //   btnw.style.transform=`translateY(${e.clientY}px)`
//        })




let card=document.querySelector('.card');
let userinput=document.querySelector('#username');
let message=document.querySelector('#message');
let selectGroup=document.querySelector('#group');
let light=document.querySelector('#light'),
    night=document.querySelector('#night'),
    login=document.querySelector('#login');



// userinput.addEventListener('focus', (e)=>{
//    console.log('focused');
//    e.target.style.border="3px solid green"
// })

// userinput.addEventListener('blur', (e)=>{
//    console.log('blured');
//    e.target.style.border="3px solid red"
// })

// userinput.addEventListener('mouseover', (e)=>{
//    console.log('blured');
//    e.target.style.border="3px solid red"
// })

// selectGroup.addEventListener('change', (e)=>{
//   console.log(e.target.value);
// }) 

// userinput.addEventListener('input', (e)=>{
//    console.log(e.target.value);
//    message.textContent=e.target.value;
 
//  }) 

 light.addEventListener('input',()=>{
    document.body.style.backgroundColor="#fff"
 })


 night.addEventListener('input',()=>{
   document.body.style.backgroundColor="#000"
})


// login.addEventListener('submit',(e)=>{
//    e.preventDefault();
//    console.log(e);
//    console.log('login');
// })



// userinput.addEventListener('keyup', (e)=>{
   
// console.log(e.code.split('')[3]);
//    message.textContent=e.target.value;
 
//  }) 


// window.addEventListener('DOMContentLoaded',()=>{
//    alert('document succesfully loaded')
// })


// window.addEventListener('load',()=>{
//    console.log('document succesfully loaded')
// })

window.addEventListener('scroll',(e)=>{
console.log(document.body.scrollTop);
})

console.log(document.body.scrollTop);