import { webApiTypes } from './webApi.types'
const initalState = {
	webApiStack: [],
}

export const webApiReducer = (state = initalState, action) => {
	switch (action.type) {
		case webApiTypes.ADD_TO_WEB_API:
			return { ...state, webApiStack: action.payload }
		default:
			return state
	}
}
