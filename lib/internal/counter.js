import { _checkType } from './check-type.js'


function arrCounter(item, arr) {
	_checkType(arr, 'array')

	let count = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			count++
		}
	}

	return count
}


function strCounter(item, str) {
	const re = new RegExp(`${item}`, 'g')

	return str.match(re).length
}


export { arrCounter, strCounter }
