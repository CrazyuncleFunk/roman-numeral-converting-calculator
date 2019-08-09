const ROMANBTN = document.getElementById("calc-roman");
const DECIMALBTN = document.getElementById("calc-decimal");
const CLEARBTN = document.getElementById("calc-clear");
const BACKSPACEBTN = document.getElementById("calc-backspace");
const DISPLAYELEMENT = document.getElementById("calc-display-val");
const CALCNUMBTN = document.getElementsByClassName("calc-btn-num");
const CALCOPERATORBTN = document.getElementsByClassName("calc-btn-operator");

let displayVal = "0";
let pendingVal;
let evalStringArray = [];
let test = 0;

for(let i = 0;i<CALCNUMBTN.length;i++){
  CALCNUMBTN[i].addEventListener("click",function(clickObj){
   test = 0;
    let btnText = clickObj.target.innerText;
    if(displayVal === '0'){
        displayVal = '';
    }
    displayVal += btnText;
    DISPLAYELEMENT.innerText = displayVal;
                                  } , false);
}
let performOperation = (clickObj) => {
  test = 0;
   let operator = clickObj.target.innerText;
  switch (operator){
    case "+" :
      pendingVal=displayVal;
      displayVal ="0";
      DISPLAYELEMENT.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;
    case "-" :
      pendingVal=displayVal;
      displayVal ="0";
      DISPLAYELEMENT.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;
    case "x":
      pendingVal=displayVal;
      displayVal ="0";
      DISPLAYELEMENT.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;
    case "÷" :
      pendingVal=displayVal;
      displayVal ="0";
      DISPLAYELEMENT.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;
    case "=":
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(" "));
       displayVal = evaluation + "";
      DISPLAYELEMENT.innerText = displayVal;
      evalStringArray = [];
      break;
  }
}

for(let i = 0;i<CALCOPERATORBTN.length;i++){
 CALCOPERATORBTN[i].addEventListener("click",performOperation, false);
}
CLEARBTN.addEventListener("click", function(clickObj){
  test = 0;
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  DISPLAYELEMENT.innerHTML = displayVal;
},false)

BACKSPACEBTN.addEventListener("click", function(clickObj){
  test = 0;
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0,lengthOfDisplayVal - 1);

  DISPLAYELEMENT.innerHTML = displayVal;
     if(displayVal === '' ){
        DISPLAYELEMENT.innerHTML = '0';
    }
})
DECIMALBTN.addEventListener("click",function(clickObj){
    if(!displayVal.includes(".")){
   if(displayVal ==='0' || displayVal ===""){
     DISPLAYELEMENT.innerHTML = '0' + "."
   }
    displayVal += "."

    DISPLAYELEMENT.innerText = displayVal;
}
                            } , false);

let convertToRoman = function(num) {

  let numValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romanValue = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  let romanized = "";

  for (let index = 0; index < numValue.length; index++) {
    while (numValue[index] <= num) {
      romanized += romanValue[index];
      num -= numValue[index];
    }
  }


  DISPLAYELEMENT.innerHTML= romanized
}

ROMANBTN.addEventListener("click",function(clickObj){
 if(test === 0){
    test++;
  convertToRoman(parseInt(displayVal));
  }else if(test !== 0){
    test = 0;
    DISPLAYELEMENT.innerHTML = displayVal;
  }
  if(displayVal == 0){
    DISPLAYELEMENT.innerHTML = "0";
  }
                          } , false);
