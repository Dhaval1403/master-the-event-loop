import {
	CHECK_FUNCTION,
	CHANGE_CALLSTACK_STATE,
	ADD_TO_CALLSTACK,
	REMOVE_FROM_CALLSTACK,
} from './callstack.types'

export const checkFunctionRelation = (functionName) => ({
	type: CHECK_FUNCTION,
	payload: functionName,
})

export const changeCallstackState = (toState) => ({
	type: CHANGE_CALLSTACK_STATE,
	payload: toState,
})

export const addFunctionToCallstack = (functionName) => ({
	type: ADD_TO_CALLSTACK,
	payload: functionName,
})

export const removeFunctionFromCallstack = () => ({
	type: REMOVE_FROM_CALLSTACK,
	meta: {
		delay: 1000,
	},
})
