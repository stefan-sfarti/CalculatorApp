const display = document.getElementById("display");
const button_1 = document.getElementById('button-1');
const button_2 = document.getElementById('button-2');
const button_3 = document.getElementById('button-3');
const button_4 = document.getElementById('button-4');
const button_5 = document.getElementById('button-5');
const button_6 = document.getElementById('button-6');
const button_7 = document.getElementById('button-7');
const button_8 = document.getElementById('button-8');
const button_9 = document.getElementById('button-9');
const button_0 = document.getElementById('button-0');
const buttonAdd= document.getElementById('button_+');
const buttonSubst = document.getElementById('button_-');
const buttonMulti = document.getElementById('button_*');
const buttonDiv = document.getElementById('button_/');
const buttonEquals = document.getElementById('button_=');
const buttonClear = document.getElementById('button_clear');

let firstNumber;
let secondNumber;

let operator;
function addition (a, b){
    return parseInt(a) + parseInt(b) ;
}
function substraction (a, b){
    return parseInt(a) - parseInt(b);
}
function multiplication (a, b){
    return parseInt(a) * parseInt(b);
}
function division (a, b){
    return parseInt(a) / parseInt(b);
}
button_1.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML == 0){
        display.innerHTML = '1';
    }else{
        display.innerHTML += 1;
    }
    if (display.innerHTML + '1' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
button_2.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML == 0){
        display.innerHTML = '2';
    }else{
        display.innerHTML += 2;
    }
    if (display.innerHTML + '1' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
button_3.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML == 0){
        display.innerHTML = '3';
    }else{
        display.innerHTML += 3;
    }
    if (display.innerHTML + '1' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
button_4.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML == 0){
        display.innerHTML = '4';
    }else{
        display.innerHTML += 4;
    }
    if (display.innerHTML + '1' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
button_5.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML == 0){
        display.innerHTML = '5';
    }else{
        display.innerHTML += 5;
    }
    if (display.innerHTML + '1' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
button_6.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML == 0){
        display.innerHTML = '6';
    }else{
        display.innerHTML += 6;
    }
    if (display.innerHTML + '1' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
button_7.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML == 0){
        display.innerHTML = '7';
    }else{
        display.innerHTML += 7;
    }
    if (display.innerHTML + '1' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
button_8.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML == 0){
        display.innerHTML = '8';
    }else{
        display.innerHTML += 8;
    }
    if (display.innerHTML + '1' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
button_9.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML == 0){
        display.innerHTML = '9';
    }else{
        display.innerHTML += 9;
    }
    if (display.innerHTML + '1' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }

}
button_0.onclick = function (item){
    if (display.innerHTML === 'Enter a number'){
        display.innerHTML = '';
    }
    if (display.innerHTML < 1 && display.innerHTML == 0){
        display.innerHTML = '0';
    }else {
        display.innerHTML += 0;
    }
    if (display.innerHTML + '0' > Number.MAX_SAFE_INTEGER-1){
        button_0.disabled = true;
        button_1.disabled = true;
        button_2.disabled = true;
        button_3.disabled = true;
        button_4.disabled = true;
        button_5.disabled = true;
        button_6.disabled = true;
        button_7.disabled = true;
        button_8.disabled = true;
        button_9.disabled = true;
    }
}
buttonAdd.onclick = function (){
    operator = '+';
    firstNumber = display.innerHTML;
    display.innerHTML = '';
}
buttonSubst.onclick = function (){
    operator = '-';
    firstNumber = display.innerHTML;
    display.innerHTML = '';
}
buttonMulti.onclick = function (){
    operator = '*';
    firstNumber = display.innerHTML;
    display.innerHTML = '';
}
buttonDiv.onclick = function (){
    operator = '/';
    firstNumber = display.innerHTML;
    display.innerHTML = '';
}
buttonEquals.onclick = function (){
    secondNumber = display.innerHTML;
    switch (operator){
        case '+':
            display.innerHTML = addition(firstNumber, secondNumber);
            console.log(firstNumber);
            break;
        case '-':
            display.innerHTML = substraction(firstNumber, secondNumber);
            break;
        case '*':
            display.innerHTML = multiplication(firstNumber, secondNumber);
            break;
        case '/':
            display.innerHTML = division(firstNumber, secondNumber);
            break;
    }
}
buttonClear.onclick = function () {
    display.innerHTML = '0';
}

