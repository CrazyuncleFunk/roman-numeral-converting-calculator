var oneBtn = document.getElementById("calc-one");
var twoBtn = document.getElementById("calc-two");
var threeBtn = document.getElementById("calc-three");
var fourBtn = document.getElementById("calc-four");
var fiveBtn = document.getElementById("calc-five");
var sixBtn = document.getElementById("calc-six");
var sevenBtn = document.getElementById("calc-seven");
var eightBtn = document.getElementById("calc-eight");
var nineBtn = document.getElementById("calc-nine");
var zeroBtn = document.getElementById("calc-zero");

var romanBtn = document.getElementById("calc-roman");

var decimalBtn = document.getElementById("calc-decimal");
var clearBtn = document.getElementById("calc-clear");
var backspaceBtn = document.getElementById("calc-backspace");
var displayValElement = document.getElementById("calc-display-val");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];
var test = 0;
var calcNumBtns = document.getElementsByClassName("calc-btn-num");
var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");



var updateDisplayVal = (clickObj) => {
test = 0;
  let btnText = clickObj.target.innerText;
  if(displayVal === '0'){
      displayVal = '';
  }
  displayVal += btnText;
  displayValElement.innerText = displayVal;
}
for(let i = 0;i<calcNumBtns.length;i++){
calcNumBtns[i].addEventListener("click",updateDisplayVal, false);
}
var performOperation = (clickObj) => {
test = 0;
 var operator = clickObj.target.innerText;
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
var updateDecimalVal = (clickObj) => {

if(!displayVal.includes(".")){
 if(displayVal ==='0' || displayVal ===""){
   displayValElement.innerHTML = '0' + "."
 }
  displayVal += "."

  displayValElement.innerText = displayVal;
}
}
decimalBtn.addEventListener("click",updateDecimalVal, false);
//var romanUpdate = convertToRoman(parseInt(displayVal))
var convertToRoman = function(num) {

var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

var romanized = '';

for (var index = 0; index < decimalValue.length; index++) {
  while (decimalValue[index] <= num) {
    romanized += romanNumeral[index];
    num -= decimalValue[index];
  }
}

console.log( romanized);
displayValElement.innerHTML= romanized
}

decimalBtn.onlick = () =>{
test = 0;
if(!displayVal.includes(".")){
  displayVal += "."
}
displayValElement.innerHTML = displayVal;
}

var romanUpdate = (clickObj) => {

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
}

romanBtn.addEventListener("click",romanUpdate, false);
