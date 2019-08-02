const oneBtn = document.getElementById("calc-one");
const twoBtn = document.getElementById("calc-two");
const threeBtn = document.getElementById("calc-three");
const fourBtn = document.getElementById("calc-four");
const fiveBtn = document.getElementById("calc-five");
const sixBtn = document.getElementById("calc-six");
const sevenBtn = document.getElementById("calc-seven");
const eightBtn = document.getElementById("calc-eight");
const nineBtn = document.getElementById("calc-nine");
const zeroBtn = document.getElementById("calc-zero");

const romanBtn = document.getElementById("calc-roman");

const decimalBtn = document.getElementById("calc-decimal");
const clearBtn = document.getElementById("calc-clear");
const backspaceBtn = document.getElementById("calc-backspace");
const displayValElement = document.getElementById("calc-display-val");

let displayVal = "0";
let pendingVal;
let evalStringArray = [];
let test = 0;
let calcNumBtns = document.getElementsByClassName("calc-btn-num");
let calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

for(let i = 0;i<calcNumBtns.length;i++){
  calcNumBtns[i].addEventListener("click",function(clickObj){
   test = 0;
    let btnText = clickObj.target.innerText;
    if(displayVal === '0'){ 
        displayVal = '';
    }
    displayVal += btnText;
    displayValElement.innerText = displayVal;                               
                                  } , false);
}
let performOperation = (clickObj) => {
  test = 0;
   let operator = clickObj.target.innerText;
  switch (operator){
    case "+" :
      pendingVal=displayVal;
      displayVal ="0";
      displayValElement.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;
    case "-" :
      pendingVal=displayVal;
      displayVal ="0";
      displayValElement.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;
    case "x":
      pendingVal=displayVal;
      displayVal ="0";
      displayValElement.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;
    case "÷" :
      pendingVal=displayVal;
      displayVal ="0";
      displayValElement.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;
    case "=":
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(" "));
       displayVal = evaluation + "";
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;
  }
}

for(let i = 0;i<calcOperatorBtns.length;i++){
 calcOperatorBtns[i].addEventListener("click",performOperation, false);
}
clearBtn.onclick = () => {
  test = 0;
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
}
backspaceBtn.onclick = () =>{
  test = 0;
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0,lengthOfDisplayVal - 1);

  displayValElement.innerHTML = displayVal;
     if(displayVal === '' ){ 
        displayValElement.innerHTML = '0';
    }
}
decimalBtn.addEventListener("click",function(clickObj){
    if(!displayVal.includes(".")){
   if(displayVal ==='0' || displayVal ===""){
     displayValElement.innerHTML = '0' + "."
   }
    displayVal += "."
  
    displayValElement.innerText = displayVal;
}                         
                            } , false);

let convertToRoman = function(num) {

  let numValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romanValue = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  let romanized = '';

  for (let index = 0; index < numValue.length; index++) {
    while (numValue[index] <= num) {
      romanized += romanValue[index];
      num -= numValue[index];
    }
  }

  
  displayValElement.innerHTML= romanized
}

decimalBtn.onlick = () =>{
  test = 0;
  if(!displayVal.includes(".")){
    displayVal += "."
  }
  displayValElement.innerHTML = displayVal;
}


 
romanBtn.addEventListener("click",function(clickObj){
 if(test === 0){
    test++;
  convertToRoman(parseInt(displayVal));
  }else if(test !== 0){
    test = 0;
    displayValElement.innerHTML = displayVal;
  }
  if(displayVal == 0){
    displayValElement.innerHTML = "0";
  }                         
                          } , false);
