import { all, call, delay } from 'redux-saga/effects'

import { watchAddToCallStackAsync } from './callstack/callstack.sagas'
import { eventLoop, pullFromCallbackQueue } from './eventLoop/eventLoop.sagas'
import { watchAddToWebApi } from './WebApiRedux/webApi.sagas'
//import { watchAddBackToCallstack } from './eventLoop/eventLoop.sagas'

export default function* rootSaga() {
	//yield all([call(watchAddToCallStackAsync), call(watchRemoveCallStackAsync)])
	yield all([
		call(watchAddToCallStackAsync),
		call(eventLoop),
		call(watchAddToWebApi),
		call(pullFromCallbackQueue),
		/* delay(1000),
		call(eventLoop), */
		//call(watchAddBackToCallstack),
	])
	/* 	yield call(watchAddToCallStackAsync)
	yield call(watchAddToWebApi) */
}
