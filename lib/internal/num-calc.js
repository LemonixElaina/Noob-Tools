import { _checkType } from './check-type.js'


function _ERROR(x) {
	const prompt = 'The arugment be sure to greater or equals to 0'
	if (x < 0) {
		throw new Error(prompt)
	}
}


function factorial(x) {
	_checkType(x, 'number')
	_ERROR(x)

	let result = 1

	for (let i = 1; i <= x; i++) {
		result *= i
	}

	return result
}


function unsafeFactorial(x) {
	_checkType(x, 'number')
	_ERROR(x)

	if (x === 0) {
		return 1
	}

	return x * unsafeFactorial(x - 1)
}

class Complex {
	set(real = 0, imag = 0) {
		_checkType(real, 'number', 'the real argument type must be number')
		_checkType(imag, 'number', 'the real argument type must be number')
	}

	/* Constructor */
	constructor(real = 0, imag = 0) {
		this.set(real, imag)
	}
	
	toString(char = 'i') {
		// display real if it isn't 0
		const real = this.real == 0 ? '' : this.real

		/**
		 * if real is 0:
		 * 	and imag is not minus
		 */
		const symbol = (() => {
			if (this.real == 0) {
				return this.imag >= 0 ? '' : '-'
			} else {
				return this.imag >= 0 ? '+' : ''
			}
		})();

		const imag = [-1, 1].includes(this.imag) ? '' : this.imag
		
		return `${ real }${ symbol }${ imag }${ char }`
	}

	valueOf() {
		const real = this.real
		const imag = this.imag
		return { real, imag }
	}

	/* plus */
	plus(other) {
		Complex.#check(other)
		const real = this.real + other.real
		const imag = this.imag + other.imag

		return new Complex(real, imag)
	}

	/* substract */
	sub(other) {
		Complex.#check(other);
		const real = this.real - other.real
		const imag = this.imag - other.imag

		return new Complex(real, imag)
	}

	/* multiply */
	mult(other) {
		Complex.#check(other);
		const {real: real1, imag: imag1} = this.valueOf()
		const {real: real2, imag: imag2} = other.valueOf()

		const leftReal = real1 * real2
		const leftImag = real1 * imag2
		const rightReal = -(imag1 * imag2)
		const rightImag = imag1 * real2

		const resultReal = leftReal + rightReal
		const resultImag = leftImag + rightImag

		return new Complex(resultReal, resultImag)
	}

	/* division */
	divby(other) {
		Complex.#check(other)
		const conjugate = Complex.conjugate(other)
		const temp = new Complex(1 / other.mult(conjugate).real, 0)
		const result = this.mult(temp.mult(conjugate))

		return result
	}

	/* to check that is it Complex instance */
	static #check(instance) {
		if (!(instance instanceof Complex)) {
			throw new TypeError('The arguments must be instance of Complex or child class')
		}
	}

	static sqrt(num) {
		if (num > 0) {
			return Math.sqrt(num)
		}

		return new Complex(0, Math.sqrt(-num))
	}

	static conjugate(obj) {
		return new Complex(obj.real, -obj.imag)
	}
}


export {
	factorial, unsafeFactorial,
	Complex
}

