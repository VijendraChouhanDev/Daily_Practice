function findArmstrongNumbers(n1, n2) {
    for (let num = n1; num <= n2; num++) {
        let sum = 0;
        let temp = num;
        const numDigits = num.toString().length;

        while (temp > 0) {
            const digit = temp % 10;
            sum += digit ** numDigits
            temp = Math.floor(temp / 10)
        }

        if (sum === num) {
            console.log(num);
        }
    }
}

// Example usage
findArmstrongNumbers(100, 999);

function palindrome(num) {
    // Write code here
    let rev =  0 
    let temp = num
    while (temp > 0){
      rev = rev * 10 + (temp % 10)
      temp = Math.floor(temp / 10)
      
    }
    if (num == rev) {
      console.log("Yes")
    }
    else{
      console.log("No")
    }
}

function countChar(str){
    let count = 1
    let result = ""
    for(let  i = 0 ; i<= str.length ; i++){
      if (str[i] == str[i + 1]){
        count++
      }else{
        result += str[i] + count
        count = 1
      }
    }
    console.log(result)
  }

  function catch420(n) {
    //write code here
    let temp =  n.toString()
   let data  = "420"
    for(let  i = 0 ; i<= temp.length - data.length ; i++){
      // console.log(temp[i] + temp[i + 1] + temp[i + 2])
      if(temp[i] + temp[i + 1] + temp[i + 2] === data){
         console.log("Caught")
         return 
      }
         
      
    }
          console.log("Escaped")
    
  }
  
  function sumOfSeries(N, X) {
    // Write code here 
    if (X < 0){
      console.log(-1)
      return
    }
    if (N < 0){
      console.log(-1)
      return
    }
    let sum = 1
    for(let i = 1 ; i< N ; i++){
      sum += X ** i 
    }
    console.log(sum)
}
