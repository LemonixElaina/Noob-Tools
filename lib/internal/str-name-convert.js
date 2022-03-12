import { _checkType } from './check-type.js'
import { capitalize, initialLowercase } from './process-str.js'


/* Snake to Camel */
function snake2camel(str) {
	_checkType(str, 'string')

	const split = str.split('_')
	const result = [split[0], ...split.slice(1).map(capitalize)]

	return result.join('')
}


/* Snake to Pascal */
function snake2pascal(str) {
	_checkType(str, 'string')

	return capitalize(snake2camel(str))
}


/* Camel to Snake */
function camel2snake(str) {
	_checkType(str, 'string')

	const split = str.split('')
	let slow = 0
	let fast = 1

	for (; slow < str.length - 1; ++slow) {
		if (split[fast].toLocaleUpperCase() == split[fast]) {
		split.splice(fast, 0, '_')
		fast++
		// The fast will be replace by _ after splicing
		}

		fast++
	}

	return split.map((v) => v.toLocaleLowerCase()).join('')
}


/* Camel to Pascal */
function camel2pascal(str) {
	_checkType(str, 'string')

	return capitalize(str)
}


/* Pascal to Snake */
function pascal2snake(str) {
	_checkType(str, 'string')

	return camel2snake(str)
}


/* Pascal to Camel */
function pascal2camel(str) {
	_checkType(str, 'string')

	return initialLowercase(str)
}


export {
	snake2camel,
	snake2pascal,
	camel2snake,
	camel2pascal,
	pascal2snake,
	pascal2camel,
}
