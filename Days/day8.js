// Write a program that prints the following triangle pattern using nested for loops:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


let num = 5
for(let i = 1 ;i<=num ; i++){
  let res = ""
  for(let j = 1; j<=num; j++){
      if(j <= i){
       res+= j + " "
      }
  }
  console.log(res)
}

// Write a program that prints a pyramid of numbers, but with the following twist:

// Use a nested for loop to generate the pyramid.
// The number of rows in the pyramid should be based on user input (between 1 and 10).
// Skip printing numbers that are divisible by 3 using the continue statement.
// Stop the pyramid when you reach a row that contains a number divisible by 7 using the break statement.


let num2 = 5

for(let i = 1; i<= num2;i++){
   let res = ""
   for(let j = 1; j<= num2;j++){
     if(j <= i){
       
     if( j % 3 === 0){
       continue
     }
     else if( j % 7 == 0){
       break
     }else{
       
     res += j +" "
     }  
     }
   }
  console.log(res)
  
}