import { _checkType } from './check-type.js'


function times(count, func, isReverse) {
    if (isReverse) { // count -> 0
        for (let i = count - 1; i >= 0; i--) {
            func(i)
        }
    } else { // 0 -> count
        for (let i = 0; i < count; i++) {
            func(i)
        }
    }
}


export {
    times
}