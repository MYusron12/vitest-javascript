import { describe, it, expect } from 'vitest'
import { add, subtract } from '../src/math'

describe('Math functions', () => {
  it('adds two numbers correctly', () => {
    //AAA
    //Arrange
    const a = 2
    const b = 1

    //Act
    const result = add(a, b)

    //Assert
    expect(result).toBe(3)

    // expect(add(1,2)).toBe(3)
  })
  it('substracts tow numbers correctly', () => {
    expect(subtract(2, 1)).toBe(1)
  })
})