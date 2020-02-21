import {
	CHECK_CALLSTACK,
	CHECK_FUNCTION,
	ADD_TO_CALLSTACK,
	REMOVE_FROM_CALLSTACK,
} from './callstack.types'

export const checkCallStackState = () => ({
	type: CHECK_CALLSTACK,
})

export const checkFunctionRelation = (functionName) => ({
	type: CHECK_FUNCTION,
	payload: functionName,
})

export const addFunctionToCallstack = (functionName) => ({
	type: ADD_TO_CALLSTACK,
	payload: functionName,
})

export const removeFunctionFromCallstack = () => ({
	type: REMOVE_FROM_CALLSTACK,
})
