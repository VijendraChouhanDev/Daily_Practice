function smallerThanLargest(N, arr) {
  //write your code here
  let max = "-Infinity";
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let numbers = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] != max) {
      numbers.push(-1);
    } else {
      numbers.push(arr[i]);
    }
  }
  let res = "";
  for (let i = 0; i <= numbers.length - 1; i++) {
    res += numbers[i] + " ";
  }
  console.log(res);
}

function averageOfAll(n, arr) {
  //write code here
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  console.log(Math.ceil(avg));
}

function evenArray(n, arr) {
  //write code here
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}

function maximumInArray(N, arr) {
  //write code here

  let max = "-Infinity";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
