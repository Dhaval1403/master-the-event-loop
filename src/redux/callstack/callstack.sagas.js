import { put, delay, call, take, fork, select } from 'redux-saga/effects'
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

function* pushOrRemove(payload) {
	yield call(removeFromStack, payload)

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

function* removeFromStack(payload) {
	//payload.block = true
	yield delay(800)
	const state = yield select()
	if (payload.block) {
		console.warn('LET IT BE')
	} else {
		if (state.callstack.stack.length > 1) {
			while (state.callstack.stack.length > 0) {
				yield put({ type: REMOVE_FROM_CALLSTACK })
			}
		}
		yield put({ type: REMOVE_FROM_CALLSTACK })
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
		yield call(pushOrRemove, payload)
	}
}
