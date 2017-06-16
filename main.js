function trackInput(){


  const inputDigit = document.querySelectorAll(".digit");
  inputDigit.addEventListener("mouseover", highlightButton());

  const html = `
    <p>${inputDigit}</p>
  `
  document.querySelector('#cal-display').insertAdjacentHTML('afterend', html);
}
//Special characters complete array element input and increase index.
//Special characters are stored in array as well.
//Equals computes contents of array with respect to pemdas.
//Stores left, right, and operation. On location of * or /, executes operation, stores in right, right becomes left, operation becomes next operatir, right becomes next value, then continue parse.
function highlightButton(){
  inputDigit
}
