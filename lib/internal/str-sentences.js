import { _checkType } from './check-type.js'


function segment(str) {
    _checkType(str, 'string')

    const res = str.replaceAll('\n', ' ').split(' ')
    if (res[0] == '') res.shift()
    if (res.at(-1) == '') res.pop()

    return res
}


export {
    segment
}