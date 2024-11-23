import { plus } from './count'

describe('plus function', () => {
	it('should return the sum of two positive numbers', () => {
		expect(plus(2, 3)).toBe(5)
	})

	it('should return the sum of a positive and a negative number', () => {
		expect(plus(5, -2)).toBe(3)
	})

	it('should return 0 when both numbers are 0', () => {
		expect(plus(0, 0)).toBe(0)
	})

	it('should return the correct sum for large numbers', () => {
		expect(plus(1000000, 2000000)).toBe(3000000)
	})
})
