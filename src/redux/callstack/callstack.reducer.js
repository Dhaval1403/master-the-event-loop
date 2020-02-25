import {
	CHECK_CALLSTACK,
	CHECK_FUNCTION,
	ADD_TO_CALLSTACK,
	REMOVE_FROM_CALLSTACK,
} from './callstack.types'

const initalState = {
	// stack: [
	// 	{
	// 		name: 'Main',
	// 		delay: 0,
	// 		webApi: false,
	// 		message: undefined,
	// 	},
	// {
	// 	name: 'console.log',
	// 	delay: 0,
	// 	webApi: false,
	// 	message: 'Test Console log',
	// },
	// 	{
	// 		name: 'console.warn',
	// 		delay: 0,
	// 		webApi: false,
	// 		message: 'Test Console warn',
	// 	},
	// ],
	stack: [],
	isOccupied: false,
}

export const callstackReducer = (state = initalState, action) => {
	switch (action.type) {
		case CHECK_CALLSTACK:
			return state.isOccupied

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

		case ADD_TO_CALLSTACK:
			// return { ...state, stack: [...state.stack, action.payload], isOccupied: true }
			return { stack: [action.payload, ...state.stack], isOccupied: true }

		case REMOVE_FROM_CALLSTACK:
			state.stack.splice(0, 1)
			return { ...state, isOccupied: state.stack.length === 0 ? false : true }
		default:
			return state
	}
}
