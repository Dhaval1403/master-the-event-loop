import { CHECK_CALLSTACK, ADD_TO_CALLSTACK, REMOVE_FROM_CALLSTACK } from './callstack.types'

const initalState = {
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
