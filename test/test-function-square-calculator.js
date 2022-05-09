const { expect } = require('chai');

const functionSquareCalculator = require("../function-square-calculator");


describe('Recebendo um único parametro', function(){
    describe('1º - Único valor como entrada', function(){
        it('Recebendo um único parametro positivo', function(){
            const retornoResultado = functionSquareCalculator(2);
            expect(retornoResultado).to.be.equal(4);
        });
       
    })
    describe('2º - Único valor como entrada', function(){
        it('Recebendo um único parametro neagtivo', function(){
            const retornoResultado = functionSquareCalculator(-2);
            expect(retornoResultado).to.be.equal(4);
        });
       
    })
    describe('3º - Único valor como entrada e string', function(){
        it('Recebendo um único parametro', function(){
            const retornoResultado = functionSquareCalculator('casa');
            expect(retornoResultado).to.be.NaN;            
        });
       
    })
    
})

describe('Recebendo mais de um parâmetro', function(){
    describe('1º - Mais de um parametro', function(){
        it('Recebendo mais de um parametro positivo', function(){
            const retornoResultado = functionSquareCalculator(5,4);
            expect(retornoResultado).to.be.equal(25,16);
        });
       
    })
    describe('2º - Mais de um parametro', function(){
        it('Recebendo mais de um parametro negativo', function(){
            const retornoResultado = functionSquareCalculator(-5,-4);
            expect(retornoResultado).to.be.equal(25,16);
        });
       
    })
    describe('3º - Mais de um parametro', function(){
        it('Mais de um parametro de String', function(){
            const retornoResultado = functionSquareCalculator("Azul","casa");
            expect(retornoResultado).to.be.NaN;            
        });
       
    })
    
})