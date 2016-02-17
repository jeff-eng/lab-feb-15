var pTagOne = document.getElementById('ans-one');
var pTagTwo = document.getElementById('ans-two');
var pTagThree = document.getElementById('ans-three');
var pTagFour = document.getElementById('ans-four');
var pTagFive = document.getElementById('ans-five');

function sum(num1, num2) {
  var result = num1 + num2;
  pTagOne.textContent = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + result + '.';
  return result;
}

function multiply(num1, num2) {
  var result = num1 * num2;
  pTagTwo.textContent = 'The product of ' + num1 + ' and ' + num2 + ' is ' + result + '.';
  return result;
}

function sumAndMultiply(num1, num2, num3) {
  var tempSum = pTagOne.textContent;
  var tempProd = pTagTwo.textContent;
  var summation = sum(sum(num1,num2),num3);

  var product = multiply(multiply(num1,num2),num3);
  pTagOne.textContent = tempSum;
  pTagTwo.textContent = tempProd;
  pTagThree.textContent = num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + summation + '. The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + product + '.';
  return [summation, product];
}

function sumArray(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  console.table(array);
  pTagFour.textContent = array + ' was passed in as an array of numbers, and ' + result + ' is their sum.';
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
