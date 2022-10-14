const {translateArray} = require('./translator.js');

describe(translateArray,() => {
    it("A should translate to .-", () => {
        const result = translateArray("A");
        expect(result).toEqual(".-");
    });

    it("Aa should translate to .-.-", () => {
        const result = translateArray("Aa");
        expect(result).toEqual(".-.-");
    });

    it("Anusha should translate to .-.-", () => {
        const result = translateArray("Anusha");
        expect(result).toEqual(".--...-........-");
    });

    it("1 should translate to .----", () => {
        const result = translateArray("1");
        expect(result).toEqual(".----");
    });


});