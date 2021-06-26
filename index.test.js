const { add, sub, div, mult } = require('./index.js')

test('Addition works', () => {
  expect(add(1, 2)).toBe(3)
  expect(add(2, 0)).toBe(2)
  expect(add(2, -2)).toBe(0)
})

test('Subtraction works', () => {
  expect(sub(2, 6)).toBe(-4)
  expect(sub(2, 0)).toBe(2)
  expect(sub(2, -2)).toBe(4)
})

test('Multiplication works', () => {
  expect(mult(2, 6)).toBe(12)
  expect(mult(2, 0)).toBe(0)
  expect(mult(2, -2)).toBe(-4)
})

test('Division works', () => {
  expect(div(2, 4)).toBe(0.5)
  expect(div(2, 1)).toBe(2)
  expect(div(2, -7)).toBe(-2/7)
})
