



// var calButton = document.querySelectorAll(".button");
// for(let i = 0; i < calButton.length; ++i){
//   calButton[i].addEventListener("click", processButtonInput);
// }

// const html = `
//   <p>${inputDigit}</p>
// `
// document.querySelector('#cal-display').insertAdjacentHTML('afterend', html);

//Special characters complete array element input and increase index.
//Special characters are stored in array as well.
//Equals computes contents of array with respect to pemdas.
//Stores left, right, and operation. On location of * or /, executes operation, stores in right, right becomes left, operation becomes next operatir, right becomes next value, then continue parse.
// function processButtonInput(){
//   console.log("Event listener works!");
//
// }

var inputArray = [];
var inputString = "";

function handleDigit(digit){
  inputString = inputString + digit;
  console.log(inputString);//---------------------Testing
  displayInput(digit);
}

function handleOperation(operation){
  if(inputString !== ""){
    inputArray.push(inputString);
  }
  if(!((inputArray[inputArray.length-1] === '*') ||(inputArray[inputArray.length-1] === '/') ||(inputArray[inputArray.length-1] === '+') ||(inputArray[inputArray.length-1] === '-'))
  && (inputArray.length !== 0)){
    console.log(operation);//---------------------Testing
    inputArray.push(operation);
    clearDisplay();
    inputString = "";
    console.log(inputArray);//---------------------Testing
  }
}

function handleEquals(){
  if(inputString !== ""){
    inputArray.push(inputString);
    console.log(inputArray);//---------------------Testing

  }
  //Clear and update display input.
}

function handleClear(){
  clearDisplay();
  inputString = "";
  inputArray = [];
}

function clearDisplay(){
  var calDisplay = document.getElementById("cal-display");
  calDisplay.textContent = "";
}


function displayInput(input){
  const html = `
    <p>${input}</p>
  `
  document.querySelector('#cal-display').insertAdjacentHTML('beforeend', html);
}
