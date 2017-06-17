var inputArray = [];
var inputString = "";
var decimal = false;

function handleDigit(digit){
  if(!decimal){
    if(digit === '.'){
      decimal = true;
    }
    inputString = inputString + digit;
    displayInput(digit);
  }
  else if(digit !== '.'){
    inputString = inputString + digit;
    displayInput(digit);
  }
}

function handleOperation(operation){
  if(inputString !== ""){
    inputArray.push(inputString);
    decimal = false;
  }
  if(!((inputArray[inputArray.length-1] === '*')
  ||(inputArray[inputArray.length-1] === '/')
  ||(inputArray[inputArray.length-1] === '+')
  ||(inputArray[inputArray.length-1] === '-'))){
    if(inputArray.length !== 0){
      inputArray.push(operation);
      displayInput(operation);
      inputString = "";
    }
  }
  else {
    inputArray[inputArray.length-1] = operation;
  }
}

function handleEquals(){
  if((inputString !== "")
  && (inputString !== inputArray[inputArray.length-1])){
    inputArray.push(inputString);
    clearDisplay();
    computeArray(inputArray);
  }
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

function computeArray(array){
  var operation;
  var left;
  var right;

  for(let i = 0; i < array.length; i+=2){
    if((i%2) === 0){
      left = array[i] * 1;
      operation = array[i+1];
      right = array[i+2] * 1;

      if(operation === "*"){
        array[i] = left * right;
        array.splice(i+1, 2);
        i-=2;
      }
      else if(operation === "/"){
        array[i] = left / right;
        array.splice(i+1, 2);
        i-=2;
      }
    }
  }
  for(let j = 0; j < array.length; j+=2){
    if((j%2) === 0){
      left = array[j] * 1;
      operation = array[j+1];
      right = array[j+2] * 1;

      if(operation === "+"){
        array[j] = left + right;
        array.splice(j+1, 2);
        j-=2;
      }
      else if(operation === "-"){
        array[j] = left - right;
        array.splice(j+1, 2);
        j-=2;
      }
    }
  }
  displayInput(array[0]);
  inputString = array[0].toString();
  inputArray.splice(0,1);
  decimal = true;
}
