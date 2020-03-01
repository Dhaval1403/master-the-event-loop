import { put, delay, take, fork } from 'redux-saga/effects'
import { webApiTypes } from './webApi.types'
import { ADD_TO_CALLBACK_QUEUE } from './../callbackQueue/callbackQueue.types'

function* removeFromWebApi(payload) {
	yield delay(payload.delay)
	yield console.log('remove from web api', payload)
	yield put({ type: webApiTypes.REMOVE_FROM_WEB_API })
	yield addToCallbackQueue(payload)
}

function* addToCallbackQueue(payload) {
	yield put({
		type: ADD_TO_CALLBACK_QUEUE,
		payload: { ...payload, webApi: false, name: `${payload.name} callback` },
	})
}

export function* watchAddToWebApi() {
	while (true) {
		const { payload } = yield take(webApiTypes.ADD_TO_WEB_API)
		console.log('delay ADD TO WEB API finished')
		yield fork(removeFromWebApi, payload)
	}
}
