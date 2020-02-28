import { CHECK_CALLSTACK, ADD_TO_CALLSTACK, REMOVE_FROM_CALLSTACK } from './callstack.types'

const initalState = {
	//stack: [
	//	{
	//		name: 'Main',
	//		delay: 0,
	//		webApi: false,
	//		message: undefined,
	//	},
	//	{
	//		name: 'console.log',
	//		delay: 0,
	//		webApi: false,
	//		message: 'Test Console log',
	//	},
	//	{
	//		name: 'console.warn',
	//		delay: 0,
	//		webApi: false,
	//		message: 'Test Console warn',
	//	},
	//	{
	//		name: 'console.info',
	//		delay: 0,
	//		webApi: false,
	//		message: 'Test Console info',
	//	},
	//	{
	//		name: 'console.time',
	//		delay: 0,
	//		webApi: false,
	//		message: 'Test Console time',
	//	},
	//	{
	//		name: 'console.error',
	//		delay: 0,
	//		webApi: false,
	//		message: 'Test Console error',
	//	},
	//],
	stack: [],
	isOccupied: false,
}

export const callstackReducer = (state = initalState, action) => {
	switch (action.type) {
		// IS ACTUALLY PART OF THE CODE EDITOR REDUCER
		/* 	case CHECK_FUNCTION:
			
			const stackObject = {
				name: undefined,
				delay: undefined,
				webApi: undefined,
				message: undefined
			}

			if (typeof window[action.payload] === 'function') {
				stackObject.name = action.payload
				stackObject.delay = 1000
				stackObject.webApi = true
			} else {
				stackObject.name = action.payload
				stackObject.delay = 500
				stackObject.webApi = false
			}
			return { ...state, stack: [...state.stack, stackObject] } */
		case CHECK_CALLSTACK:
			return { ...state }
		case ADD_TO_CALLSTACK:
			// return { ...state, stack: [...state.stack, action.payload], isOccupied: true }
			return { stack: [...state.stack, action.payload], isOccupied: true }
		case REMOVE_FROM_CALLSTACK:
			const changeStack = [...state.stack]
			changeStack.shift()
			return { stack: [...changeStack], isOccupied: changeStack.length === 0 ? false : true }
		default:
			return state
	}
}
