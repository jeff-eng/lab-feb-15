// var pTagOne = document.getElementById('ans-one');
// var ans1 = prompt('Did Sam live in South Dakota for 8 years?');
// if (ans1.toLowerCase() === 'n' || ans1.toUpperCase() === 'NO') {
//   // alert('You\'re right! Sam never lived in South Dakota!');
//   // The alert() is replaced with the following line
//   pTagOne.textContent = 'You\'re right! Sam never lived in South Dakota!';
// } else if (ans1.toLowerCase() === 'y' || ans1.toUpperCase() === 'YES') {
//   // alert('Nope! Sam never lived in South Dakota!');
//   // The alert() is replaced with the following line
//   pTagOne.textContent = 'Nope! Sam never lived in South Dakota!';
// } else {
//   // This error-correction can stay as an alert
//   alert('Please give a yes or no answer.');
// }

function sum(num1, num2) {
  var result = num1 + num2;
  // console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + result + '.');
  return result;
}

function multiply(num1, num2) {
  var result = num1 * num2;
  // console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + result + '.');
  return result;
}

function sumAndMultiply(num1, num2, num3) {
  var summation = sum(sum(num1,num2),num3);
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + summation + '.');
  var product = multiply(multiply(num1,num2),num3);
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + product + '.');
  return [summation, product];
}

function sumArray(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  console.table(array);
  console.log(array + ' was passed in as an array of numbers, and ' + result + ' is their sum.');
  return result;
}

function multiplyArray(array) {
  var result = 1;
  for (var i = 0; i < array.length; i++) {
    result *= array[i];
  }
  console.table(array);
  console.log('The numbers ' + array + ' have a product of ' + result + '.');
  return result;
}
