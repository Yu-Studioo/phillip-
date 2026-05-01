let display = document.getElementById("display");
let expression = "";
let sequence = [];
let holdTimer;

function press(num){
expression += num;
display.innerText = expression;

sequence.push(num);
if(sequence.length > 2){
sequence.shift();
}
}

function clearDisplay(){
expression = "";
display.innerText = "0";
}

function calculate(){
expression = eval(expression);
display.innerText = expression;
}

let equals = document.getElementById("equals");

equals.addEventListener("mousedown", function(){

if(sequence[0] === "6" && sequence[1] === "7"){

holdTimer = setTimeout(function(){

window.location.href = "password.html";

},1500);

}

});

equals.addEventListener("mouseup", function(){
clearTimeout(holdTimer);
});

equals.addEventListener("click", calculate);
