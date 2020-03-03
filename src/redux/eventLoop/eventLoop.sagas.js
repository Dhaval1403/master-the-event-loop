import { put, delay, call, take, select } from 'redux-saga/effects'
import { REMOVE_FROM_CALLBACK_QUEUE } from './../callbackQueue/callbackQueue.types'
import { ADD_TO_CALLSTACK, CHANGE_CALLSTACK_STATE } from './../callstack/callstack.types'
import { TOGGLE_SPIN } from './../eventLoop/eventLoop.types'

function* removeFromCallbackQueue(payload) {
	yield put({ type: REMOVE_FROM_CALLBACK_QUEUE })
	yield put({
		type: ADD_TO_CALLSTACK,
		payload,
	})
	yield delay(1000)
	yield put({ type: CHANGE_CALLSTACK_STATE, payload: false })
}

export function* eventLoop() {
	while (true) {
		yield delay(1000)
		const state = yield select()
		if (
			(state.callbackQueue.stack.length > 0 || state.webApiReducer.webApiStack.length > 0) &&
			state.controls.isRunning
		) {
			yield put({ type: TOGGLE_SPIN })
		}
	}
}

export function* pullFromCallbackQueue() {
	while (true) {
		yield take(TOGGLE_SPIN)
		const state = yield select()
		if (!state.callstack.isOccupied && state.callbackQueue.stack.length > 0) {
			yield put({ type: CHANGE_CALLSTACK_STATE, payload: true })
			yield call(removeFromCallbackQueue, state.callbackQueue.stack[0])
		}
	}
}
