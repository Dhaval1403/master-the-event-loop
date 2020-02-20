import { combineReducers } from 'redux'
import { helpReducer } from './helpToggle/helpToggle.reducer'

// import all reducers in this file and add them with a flag to the combineReducer method by adding it to the object
// reducerName : reducer;

export default combineReducers({
	helpReducer: helpReducer,
})
