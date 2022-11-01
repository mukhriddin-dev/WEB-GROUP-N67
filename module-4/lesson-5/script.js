"use strict";

// async / await

// const getData=async()=>{
//   let n=await 2000; 
//   for(let i=0;i<n;i++){
//     console.log("get data")
//   }
// }
// getData()


// async function getNumbers(){
//   let text= await "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adip lorem ips dolor sit amet, consectetur adip lorem ips dolor"
//   console.log(text)
// }
// getNumbers()
// console.log("Coca-cola");


// function getData() {

//   let homeWork = true;

//   return new Promise((resolve, reject) => {

//     const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

//     if (homeWork) {
//       resolve(array)
//     } else {
//       reject('404 NOT FOUND');
//     }

//   })  

// }

// getData() 
// .then((a) => {console.log(a);})
// .catch((error) =>console.log(error))


async function getPosts(){
  const request=await  fetch('https://jsonplaceholder.typicode.com/todos');
  const result=await request.json();
  dataRender(result)

  

}

getPosts()  

function dataRender(data=[]){
data.forEach((e)=>{
  const card= createElement('card', 'card p-4', e.title);
  $('.wrapper').appendChild(card);
})
}




//  fetch('https://jsonplaceholder.typicode.com/todos')
//  .then((response)=>response.json())
//  .then((result)=>console.log(result))
//  .catch((error)=>console.log(error));
