function twoSumsOneNumberII(one, two, three, four, five) {
    // Write code here
    let sum1 = one + two
    let sum2 = three + four
    if (sum1 > five || sum2 > five){
      console.log("Yes")
    }else{
      console.log("No")
    }
}

function twoSumsOneNumberII(one, two, three, four, five, six) {
    // Write code here
    let sum1 = one + two
    let sum2 =   four  + five
    if (sum1 > three && sum2 > six){
      console.log("Yes")
    }else{
      console.log("No")
    }
}


function logicalEvens(one, two) {
    // Write code here
    if (one % 2 == 0 && two % 2 == 0 ){
      console.log("Both")
    }else{
      console.log("No")
    }
}


function oddEvenBoth(one, two) {
    // Write code here
     if (one % 2 == 0 && two % 2 == 0 ){
      console.log("Even")
    }else if (one % 2 == 1 && two % 2 ==  1 ){
      console.log("Odd")
    }
    else{
      console.log("Even-Odd")
    }
}

function weekday(num) {
    // Write code here
    if (num == 1 ){
      console.log("Monday")
    }
    else if (num == 2 ){
      console.log("Tuesday")
    }
    else if (num == 3 ){
      console.log("Wednesday")
    }
    else if (num == 4 ){
      console.log("Thursday")
    }
    else if (num == 5 ){
      console.log("Friday")
    }
    else if (num == 6 ){
      console.log("Saturday")
    }
    else if (num == 7 ){
      console.log("sunday")
    }
}


function modeof10(num) {
    // Write code here
  let x = num % 10
   if (x == 0 ){
      console.log("zero")
    }
   else if (x == 1) {
     console.log("one")
   }
   else if (x == 2) {
     console.log("two")
   }
   else if (x == 3) {
     console.log("three")
   }
   else if (x == 4) {
     console.log("four")
   }
   else if (x == 5) {
     console.log("five")
   }
   else if (x == 6) {
     console.log("six")
   }
   else if (x == 7) {
     console.log("seven")
   }
   else if (x == 8) {
     console.log("eight")
   }
   else if (x == 9) {
     console.log("nine")
   }
}
