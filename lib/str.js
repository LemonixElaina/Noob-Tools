import * as processStr from './internal/str-process.js'
import * as nameConvert from './internal/str-name-convert.js'
import * as sentences from './internal/str-sentences.js'
import { format } from './internal/str-format'
import { strCounter } from './internal/counter.js'

const includes = {
	format,
	strCounter,
	...processStr,
	...nameConvert,
	...sentences
}

export default includes
