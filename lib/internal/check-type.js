function _checkType(obj, type, prompt) {
    if (!prompt) {
        prompt = `The type of arugment must be ${type}`
    }

    const ERROR = () => {
        throw new TypeError(prompt)
    }

    if (typeof type != 'string') ERROR()

    const realType = typeof obj

    if (type == 'array') {
        if (!Array.isArray(obj)) ERROR()
    } else if (realType == 'object') {
        if (!type == realType.slice(8, -1)) ERROR()
    } else {
        if (typeof obj != type) ERROR()
    }
}


export { _checkType }
