import { all, call } from 'redux-saga/effects'

import { watchAddToCallStackAsync } from './callstack/callstack.sagas'
import { eventLoop, pullFromCallbackQueue } from './eventLoop/eventLoop.sagas'
import { watchAddToWebApi } from './WebApiRedux/webApi.sagas'

export default function* rootSaga() {
	yield all([
		call(watchAddToCallStackAsync),
		call(eventLoop),
		call(watchAddToWebApi),
		call(pullFromCallbackQueue),
	])
}
