import { _checkType } from './check-type.js'
import { findAll } from './arr-operate.js'


const typeMap = {
	b: 'bin',
	B: 'bool',
	d: 'int',
	f: 'float',
	h: 'hex',
	o: 'oct',
	s: 'string',
}

const num = ['bin', 'int', 'float', 'oct', 'bool']
const radix = {
	bin: 2,
	oct: 8,
	hex: 16
}
const canBeLowerCase = ['%D', '%F', '%H', '%O', '%S']
// lower case these word, they're the same meaning

function canBeConvert(value, last) {
	const isNum = num.includes(last)
	const canConvertToNum = ['number', 'boolean'].includes(typeof value) || parseInt(value) != NaN
	if (isNum && !canConvertToNum) {
		throw new Error(`${ value } connot convert to number`)
	}
}


/**
 * A function to format strings that realize the C-like format
 * @param { string } pattern
 * @param { Array<any> = } pattern
 * @return { string }
 */
function format(pattern = '', ...args) {
	_checkType(pattern, 'string')

	let tokens
	try {
		tokens = pattern
			.match(/%\.?\d*[bdfhos]{1}/gi)
			.map(v => v == '%B' ? v : v.toLowerCase())
			// to match the word such as %d %B %.2f
	} catch {
		return pattern // when the expreession's result is null
	}

	pattern = pattern.split('')
	for (let item of canBeLowerCase) {
		for (let index of findAll(pattern, item)) {
			pattern[index] = item.toLowerCase()
		}
		// example: %D -> %d
	}
	

	if (tokens.length != args.length) {
		throw new Error(
			'The quantities of formatted sign must be the same as quantities of variables'
		)
	}

	let type, last, given, ptr = 0

	for (let token of tokens) {
		last = token.at(-1)
		given = args[ptr] // corresponding variable
		canBeConvert(given, last)


		switch (type = typeMap[last]) {
			case 'bin':
			case 'oct':
			case 'hex': // when the type is num but not int
				pattern[pattern.indexOf(token)] = Number(given).toString(radix[type])
				// convert to the corresponding radix
				break
			case 'bool':
				pattern[pattern.indexOf(token)] = !!given
				// to boolean
				break
			
			case 'int':
				pattern[pattern.indexOf(token)] = Number(given)
				break
			
			case 'float':
				if (i.length == 2) {
					pattern[pattern.indexOf(token)] = Number(given).toFixed(6)
				} else {
					pattern[pattern.indexOf(token)] = Number(given).toFixed(i.slice(2, -1))
				}
				break
			
			case 'string':
				pattern[pattern.indexOf(token)] = given.toString()
				break
		}
		ptr++
	}

	return pattern // the pattern has already finished
}


export { format }

