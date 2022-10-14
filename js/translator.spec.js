const {translateArray, getValid} = require('./translator.js');

describe(getValid,() => {
    //lower case test
    it("Shoud return true if Key code 97 for a is valid data", () => {
        const result = getValid(97);
        expect(result).toEqual(true);
    });
    //upper case test
    it("Shoud return true if Key code 65 for A is valid data", () => {
        const result = getValid(65);
        expect(result).toEqual(true);
    });
    //number test
    it("Shoud return true if Key code 53 for 5 is valid data", () => {
        const result = getValid(53);
        expect(result).toEqual(true);
    });
    //Negative test for special character
    it("Shoud return true if Key code 33 for ! is not a valid data", () => {
        const result = getValid(33);
        expect(result).toEqual(false);
    });

})

describe(translateArray,() => {
    //should check correct output getting for A
    it("A should translate to .-", () => {
        const result = translateArray("A");
        expect(result).toEqual(".-");
    });
    // should check output of lower case letter
    it("a should translate to .-.-", () => {
        const result = translateArray("a");
        expect(result).toEqual(".-");
    });
    // should check output for combination of letters
    it("Anusha should translate to .-.-", () => {
        const result = translateArray("Anusha");
        expect(result).toEqual(".--...-........-");
    });
    // should check output of a number
    it("1 should translate to .----", () => {
        const result = translateArray("1");
        expect(result).toEqual(".----");
    });
    // should check output of numbers
    it("should translate 123 to .----", () => {
        const result = translateArray("123");
        expect(result).toEqual(".----..---...--");
    });
    // should check output for combination of letters and numbers
    it("should translate Anusha123 to .----", () => {
        const result = translateArray("Anusha123");
        expect(result).toEqual(".--...-........-.----..---...--");
    });

});