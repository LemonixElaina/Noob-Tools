import { _checkType } from './check-type.js'


function hasRedundancy(arr) {
	_checkType(arr, 'array')

	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) !== i) {
			return true
		}
	}

	return false
}


function removeRedundancy(arr) {
	_checkType(arr, 'array')

	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) !== i) {
			arr.splice(i, 1)
		}
	}

	return arr
}


export { hasRedundancy, removeRedundancy }
