"use strict";

var _translator = require("./translator.js");

var textIn = document.querySelector(".text-input");
textIn.addEventListener("keypress", _translator.ValidateData);
var morseButton = document.querySelector(".morse-button");
morseButton.addEventListener("click", _translator.getMorse);