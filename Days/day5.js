function niceArray(N, array, K) {
    //write code here
    let even_count = 0
    for(let i = 0 ; i<= array.length - 1 ; i++){
       if(array[i] % 2 == 0) {
          even_count++
       }
    }
    if(even_count > K){
       console.log("Nice Array")
    }else{
      console.log("Bad Array")
    }
  
    
  }

  function smallerThanLargest(N,arr){
    //write your code here
    let max  ="-Infinity"
    for(let i = 0 ;i <= arr.length - 1 ;i++){
       if(arr[i] > max){
          max =  arr[i]
       }
    }
     let numbers  = []
     for(let i = 0 ;i <= arr.length - 1 ;i++){
       if(arr[i] != max){
           numbers.push(-1)
       }else{
         numbers.push(arr[i])
       }
    }
    let res =""
      for(let i = 0 ;i <= numbers.length - 1 ;i++){
         res += numbers[i] + " " 
       }
       console.log(res)
    
  }

  function newYorkSkylines(N,arr){
    //write your code here
    let scores = []
    for(let i = 0 ; i<= arr.length - 1 ; i++){
      let counter = 0
      if( i != 0){
         if(arr[i] > arr [ i  - 1]){
           counter += 1
           
         }
      }
      if( i != N - 1 ){
         if(arr[i] > arr[i + 1]){
            counter += 1
         }
      }
      scores.push(counter)
    }
    let res =  ""
    for(let i = 0 ;i <= scores.length - 1 ; i++){
      res += scores[i] +" "
    }
    console.log(res)
  }

  function threeMaxThreeMin(N,arr){
    //write code here
   let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] != undefined) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    
    let newArray = Object.keys(obj).map(Number).sort((a,b)=>a-b);
    if(newArray.length < 5){
      console.log("Not Possible");
      console.log("Not Possible");
      return
    }
    let minn = newArray.slice(0, 3);
    let maxx = newArray.slice(-3);
   
    if (minn.length < 3) {
        console.log("Not Possible");
    } else {
        console.log(...minn);
    }

    if (maxx.length < 3) {
        console.log("Not Possible");
    } else {
        console.log(...maxx);
    }
   
}
