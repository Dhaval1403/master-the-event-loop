import { put, delay, call, take, fork, select, cancel } from 'redux-saga/effects'
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

function* pushOrRemove(payload, task) {
	const state = yield select((state) => state.controls.animationDuration)
	yield delay(state - 50)
	if (consoleVariations.includes(payload.name)) {
		yield put({
			type: consoleTypes.PUSH_TO_CONSOLE,
			payload: { name: payload.name, message: payload.message },
		})
	}

	if (payload.webApi) {
		yield fork(addToWebApi, payload)
	}
	yield call(removeFromStack, payload, task)
}

export function* removeFromStack(payload, task) {
	const state = yield select((state) => state.callstack.stack)
	console.error('STACK STATE: ', state)
	if (payload.block) {
		console.warn('LET IT BE ', payload)
		yield cancel(task)
	} else {
		console.warn('REMOVE FROM CALLSTACK SAGA')
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
		const workerTask = yield fork(take, REMOVE_FROM_CALLSTACK)
		yield cancel(workerTask)

		yield call(pushOrRemove, payload, workerTask)
	}
}
