var calculator = require('./calculator');
test('Add numbers', ()=>{
    expect(1+1).toBe(2)
})

test('Testing eval function for sum', ()=>{
    expect(eval("2+2")).toBe(4)
})

test('Testing eval function for subtraction', ()=>{
    expect(eval("5-2")).toBe(3)
})

test('Testing eval function for multiplication', ()=>{
    expect(eval("3*3")).toBe(9)
})

test('Testing eval function for division', ()=>{
    expect(eval("9/3")).toBe(3)
})

test('Testing eval function for floating point numbers', ()=>{
    expect(eval("3.2+2.5")).toBe(5.7)
})
/* global expect, calculate */

