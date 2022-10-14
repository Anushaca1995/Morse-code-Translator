import {ValidateData, getMorse} from "./translator.js";

const textIn=document.querySelector(".text-input");
textIn.addEventListener("keypress", ValidateData);

const morseButton=document.querySelector(".morse-button");
morseButton.addEventListener("click", getMorse);






