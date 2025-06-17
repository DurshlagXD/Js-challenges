"use strict";

function arrayFormat(array, result, index){
    array.splice(index - 1, 3);
    array.splice(index - 1, 0, result);
    return array
}

function isNotFirstOrderActions(array){
    return array.indexOf("*") === -1 && array.indexOf("/") === -1;
}

function mathAction(first, second, action, target){
    let mathResult = 0;
    switch(action){
        case "*":
            mathResult = parseFloat(first) * parseFloat(second);
            break;
        case "/":
            if (parseFloat(second) === 0){
                result.innerText = "Can`t divide by zero";
                throw new Error("Incorrect input!");
            }
            else{
                mathResult = parseFloat(first) / parseFloat(second);
            }
            break;
        case "+":
            if (target){
                mathResult = parseFloat(first) + parseFloat(second);
            }
            break;
        case "-":
            if (target){
                mathResult = parseFloat(first) - parseFloat(second);
            }
            break;
    }
    return mathResult;
}

function analyzeEqual(equalyze){
    let index = 1;
    let equal_result = 0;
    let permission = false;
    while (equalyze.length != 1){
        if (isNaN(Number(equalyze[index]))){
            console.log(equalyze);
            permission = isNotFirstOrderActions(equalyze);
            equal_result = mathAction(equalyze[index - 1], equalyze[index + 1], equalyze[index], permission);
            if (equal_result != 0){
                equalyze = arrayFormat(equalyze, equal_result, index);
                index = 1;
            }
            else{
                index += 2;
            }
        }
        else{
            index += 2;
        }
    }
    if (isNaN(equalyze[0]))
    {
        return "Wrong input!";
    }
    return equalyze[0];
}

function main(){
    let equalization = inputEqual.value;
    if (equalization.trim() !== ""){
        let equal = equalization.split(" ")
        console.log(equal);
        result.innerText = "Result: " + analyzeEqual(equal);
    }
}

function clearText(){
    inputEqual.value = "";
    result.innerText = "Result: ";
}

const solveBtn = document.getElementById("button-solver");
const clearBtn = document.getElementById("clean-button");
let inputEqual = document.getElementById("input-puzzle");
let result = document.getElementById("result");

solveBtn.addEventListener("click", () => main());

clearBtn.addEventListener("click", () => clearText());

document.addEventListener("keydown", (event) => {
    let keyName = event.key;
    if (keyName === "Enter"){
        main();
    }
    if (keyName === "c"){
        clearText();
    }
});