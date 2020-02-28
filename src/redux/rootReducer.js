import { combineReducers } from 'redux'
import { helpReducer } from './helpToggle/helpToggle.reducer'
import { consoleReducer } from './Console/Console.reducer'
import { callstackReducer } from './callstack/callstack.reducer'
import { callbackQueueReducer } from './callbackQueue/callbackQueue.reducer'
import { webApiReducer } from './WebApiRedux/webApi.reducer'
import { eventLoopReducer } from './eventLoop/eventLoop.reducer'

// import all reducers in this file and add them with a flag to the combineReducer method by adding it to the object
// reducerName : reducer;

export default combineReducers({
	helpReducer: helpReducer,
	consoleReducer: consoleReducer,
	callstack: callstackReducer,
	callbackQueue: callbackQueueReducer,
	webApiReducer: webApiReducer,
	eventLoop: eventLoopReducer,
})
