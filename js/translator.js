const morseData = {
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
};

export const ValidateData = (input) => {
    let returnVal;
    let charCode;
    if ((typeof input) == "object") {
        charCode = input.keyCode;
        console.log(charCode);
        returnVal=getValid(charCode);
    } else {
        let returnStr;
        for (let index=0;index<input.length;index++){
            charCode = input.charCodeAt(index);
            returnStr=getValid(charCode);
            if (!returnStr){
                return false;
            }
        }
        returnVal=returnStr;
    }
    if (!returnVal){
        input.preventDefault();
    }
}

export const getValid = (charCode) =>{
    if (charCode > 32 && (charCode < 65 || charCode > 90) &&
            (charCode < 97 || charCode > 122)) {
            if (charCode > 47 && charCode < 58) {
                return true;
            }
            return false;
        }
    return true;
}

export const getMorse = () => {
    let text = document.querySelector(".text-input").value;
    const translate=document.querySelector(".translator");
    translate.innerHTML=translateArray(text);
    console.log(translateArray(text));
    
}

export const translateArray = (str) => {
    let morseString = "";
    for (let index=0;index<str.length;index++){
        let word=str[index];
        word.trim();
        word=word.toUpperCase();
        morseString+=morseData[word];
    }
    return morseString;
}
