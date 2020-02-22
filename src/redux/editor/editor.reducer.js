import { editorTypes } from './editor.types'
import { str } from './testString'

const INITIAL_STATE = {
	data: str,
	editor: null,
	highlightedLines: [],
	collapsableLines: {},
	functions: { named: {}, anonymous: [] },
}

export const editorReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case editorTypes.SET_DATA:
			return {
				...state,
				data: action.payload,
			}
		case editorTypes.SET_EDITOR:
			return {
				...state,
				editor: action.payload,
			}
		case editorTypes.ADD_COLLAPSABLE_LINE:
			return {
				...state,
				collapsableLines: { ...state.collapsableLines, [action.payload.index]: action.payload },
			}
		case editorTypes.REMOVE_COLLAPSABLE_LINE:
			const { [action.payload]: _, ...rest } = state.collapsableLines
			return {
				...state,
				collapsableLines: { ...rest },
			}
		case editorTypes.ADD_HIGHLIGHTED_LINE:
			return {
				...state,
				highlightedLines: [action.payload],
			}
		case editorTypes.REMOVE_LAST_HIGHLIGHTED_LINE:
			const newArr = [...state.highlightedLines]
			newArr.pop()
			return {
				...state,
				highlightedLines: newArr,
			}
		case editorTypes.ADD_FUNCTION:
			if (action.payload.name) {
				return {
					...state,
					functions: {
						...state.functions,
						named: {
							...state.functions.named,
							[action.payload.name]: action.payload,
						},
					},
				}
			} else {
				return {
					...state,
					functions: { ...state.functions, anonymous: [...state.functions.anonymous, action.payload] },
				}
			}

		default:
			return state
	}
}
