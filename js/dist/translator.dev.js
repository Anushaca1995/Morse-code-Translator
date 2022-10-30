"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateArray = exports.getMorse = exports.getValid = exports.ValidateData = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var morseData = {
  " ": "|",
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": "·−·−·−",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "−·−·−−",
  "/": "−··−·"
};

var ValidateData = function ValidateData(input) {
  var returnVal;
  var charCode;

  if (_typeof(input) == "object") {
    charCode = input.keyCode;
    console.log(charCode);
    returnVal = getValid(charCode);
  } else {
    var returnStr;

    for (var index = 0; index < input.length; index++) {
      charCode = input.charCodeAt(index);
      returnStr = getValid(charCode);

      if (!returnStr) {
        return false;
      }
    }

    returnVal = returnStr;
  }

  if (!returnVal) {
    input.preventDefault();
  }
};

exports.ValidateData = ValidateData;

var getValid = function getValid(charCode) {
  if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
    if (charCode > 47 && charCode < 58) {
      return true;
    }

    return false;
  }

  return true;
};

exports.getValid = getValid;

var getMorse = function getMorse() {
  var text = document.querySelector(".text-input").value;
  var translate = document.querySelector(".translator");
  translate.innerHTML = translateArray(text);
  return translateArray(text);
};

exports.getMorse = getMorse;

var translateArray = function translateArray(str) {
  var morseString = "";

  for (var index = 0; index < str.length; index++) {
    var word = str[index];
    word.trim();
    word = word.toUpperCase();
    morseString += morseData[word];
  }

  return morseString;
};

exports.translateArray = translateArray;