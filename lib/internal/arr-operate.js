import { _checkType } from './check-type.js'


function remove(arr, index = -1) {
    _checkType(arr, 'array')

    arr.splice(index, 1)

    return arr
}


function extend(arr, items, index = arr.length) {
    _checkType(arr, 'array')
    if (Array.isArray(items) || typeof items == 'string') {
        throw new TypeError('The items need to push must be a string or an array')
    }

    const elem = Array.isArray(items) ? [...items] : [items]
    arr.splice(index, 0, ...elem)

    return arr
}  


function findAll(target, item) {
    const arr = Object.assign(target)
    let ptr = 0
    let result = []
    let cur
    while ( (cur = arr.indexOf(item)) != -1 ) {
        arr[cur] = String.fromCharCode(item.charCodeAt(0) + 1) + item.slice(1)
        result.push(cur)
        ptr++
    }

    return result
}


export {
    remove,
    extend,
    findAll
}