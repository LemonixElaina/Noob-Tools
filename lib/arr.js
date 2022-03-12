import * as operate from './internal/arr-operate.js'
import { arrCounter } from './internal/counter.js'


const includes = {
    arrCounter,
    ...operate
}


export default includes
