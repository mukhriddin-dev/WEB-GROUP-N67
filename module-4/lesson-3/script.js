"use strict";



// const language=['java', 'javaScript', ['php', 'c#',"c++"]];

// console.log(language);

// const [ one,two, ...three ]=language;

// console.log(language[1]);

// const [...app]=language;

// app.push('swift')
// console.log(app);

// console.log(three);



// const person={
//   isName:"Sardor",
//   age:17,
//   job:"programmer",
//   hobbies:{
//     coding:{
//       javaScript:{
//         reactJS:['hooks', 'context', 'spa'],
//       }
//     },
//     playGame:{
//       football:['PS4']
//     }
//   }
// }


// console.log(person.hobbies.coding.javaScript.reactJS[2]);


// const {hobbies:{coding:{javaScript:{reactJS}}}}=person;

// const {job, age, isName , hobbies:{coding}}=person;

// console.log(isName);

// console.log(reactJS);


// function getData(a,b,...c){
//   console.log(a,b,c);

//   c.forEach((e)=>{
//     if(e%2==1){
//       console.log(e);
//     }
//   })
// }

// console.log(11%10);


// getData(1,2,3,1,2,3,4,5)


// const language=['java', 'javaScript', 'php', 'c#',"c++"];




// const app=language; //shalow clone

// deep clone

// const [...app]=language;

// let app=[]

// for (let i=0; i<language.length; i++){
//   app.push(language[i])
// }

// language.forEach((e)=>{
//   app.push(e)
// })

// let app=language.filter((e)=>{
//   return e
// })

// app.push('kotlin');

// console.log(language);
// console.log(app); 


// JSON =>  

//const cloneRoom=room; // shalow copy

// const cloneRoom={...room}

// const cloneRoom=Object.assign({}, room)


const room={
  isname:'Slack',
  color:"yellow & white",
  size:"large",
  nt:"chilonzor",
}

const cloneRoom=JSON.parse(JSON.stringify({ok:"ok"}));

// console.log(JSON)

// cloneRoom.nt="Xadra"
cloneRoom.is=false;
console.log(room);

console.log(cloneRoom)
// const parseRoom=JSON.parse(cloneRoom)
// console.log(parseRoom);

