/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
/* global expect */

import calculator from './index';

const calc = new CalcCommand;

/**
* This method executes the calculate method based on the buttons clicked
* and returns the resultant value
*
* @param buttons - array of buttons that are to be clicked
*
* @return value - the value that results after calculate is executed on all button values
*/

function pressButtons(buttons){
  let value = 0;
  buttons.forEach((button) => {
    value = calc.calculate(button, value);
  });

  return value;
}

/**
* This method executes the calculate method based on the buttons clicked
* and returns the resultant value
*
* @param buttons - array of buttons that are to be clicked
* @param expectation - the value that os expected as a result of the calculation
*
*/

function expectButtons(buttons, expectation) {
  expect(pressButtons(buttons)).toEqual(expectation);
  calc.reset();
}

// tests based on various combination of button clicks

it('should support 4', () => {
  expectButtons(['4'], '4');
});

it('should support 79', () => {
  expectButtons(['7','9'], '79');
});

it('should support 6 + 5', () => {
  expectButtons(['6','+','5'], '5');
});

it('should support addition', () => {
  expectButtons(['8','+','4','='], '12');
});

it('should support subtraction', () => {
  expectButtons(['10','-','7','='], '3');
});

it('should support nultiplication', () => {
  expectButtons(['5','*','5','='], '25');
});

it('should support division', () => {
  expectButtons(['78','/','3','='], '26');
});

});


