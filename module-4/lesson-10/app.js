let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let products = [{
      name: "abs",
      price: 100
   },
   {
      name: "absd",
      price: 300
   },
   {
      name: "absde",
      price: 8
   }
]



const sum = products.reduce((a, b) => {
   return a+b.price
},10)


console.log(sum);