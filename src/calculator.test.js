var calculator = require('./calculator');
test('Add numbers', ()=>{
    expect(1+1).toBe(2)
})

test('Testing eval function for sum', ()=>{
    expect(eval("2+2")).toBe(4)
})
/* global expect, calculate */

