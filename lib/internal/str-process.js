import { _checkType } from './check-type.js'


function capitalize(str) {
	_checkType(str, 'string')

	return str[0].toLocaleUpperCase() + str.slice(1)
}


function initialLowercase(str) {
	_checkType(str, 'string')

	return str[0].toLocaleLowerCase() + str.slice(1)
}


function isCapitalize(str) {
	_checkType(str, 'string')

	return capitalize(str) == str ? true : false
}


function isInitialLowercase(str) {
	_checkType(str, 'string')

	return initialLowercase(str) == str ? true : false
}


function title(str) {
	_checkType(str, 'string')

	// upper case each word in the string
	return str.split(' ').map(capitalize).join(' ')
}


export {
	capitalize,
	initialLowercase,
	isCapitalize,
	isInitialLowercase,
	title,
}
