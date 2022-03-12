import { _checkType } from './check-type.js'


function partial(func, ...argsBound) {
	return function (...args) {
		return func.call(this, ...argsBound, ...args)
	}
}


export { partial }
