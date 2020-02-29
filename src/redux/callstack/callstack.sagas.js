import { put, delay, call, take, fork } from 'redux-saga/effects'
import { ADD_TO_CALLSTACK, REMOVE_FROM_CALLSTACK } from './callstack.types'
import { webApiTypes } from './../WebApiRedux/webApi.types'
import { consoleTypes } from './..//Console/Console.types'

const consoleVariations = [
	'console',
	'console.log',
	'console.trace',
	'console.time',
	'console.info',
	'console.error',
	'console.warn',
]

function* removeFromCallstackAsync(payload) {
	yield delay(1000)
	yield console.log('remove from call stack')
	yield put({ type: REMOVE_FROM_CALLSTACK })

	if (consoleVariations.includes(payload.name)) {
		yield put({
			type: consoleTypes.PUSH_TO_CONSOLE,
			payload: { name: payload.name, message: payload.message },
		})
	}

	if (payload.webApi) {
		yield fork(addToWebApi, payload)
	}
}

function* addToWebApi(payload) {
	yield put({
		type: webApiTypes.ADD_TO_WEB_API,
		payload: payload,
	})
}

export function* watchAddToCallStackAsync() {
	while (true) {
		const { payload } = yield take(ADD_TO_CALLSTACK)
		console.log('delay ADD TO CALLSTACK finished')
		yield call(removeFromCallstackAsync, payload)
	}
}
