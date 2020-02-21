import { editorTypes } from './editor.types'

const INITIAL_STATE = {
	data: `const loopThroughLine = (tokens, lineNo) => {
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].string === character) {
                found = true
                if (check.open === 0) {
                    fistOpenIndex = { lineNo: lineNo, tokenIndex: i }
                }

                if (constraint) {
                    check.open += 1
                    check.lastOpenTokenIndex = i
                }
                if (!constraint) {
                    return {
                        found: true,
                        tokenIndex: i,
                        line: lineNo,
                        tokens: tokens,
                    }
                }
            }
            if (tokens[i].string === constraint) {
                check.close += 1
                lastCloseIndex = { lineNo: lineNo, tokenIndex: i }
            }`,
	editor: null,
	highlightedLines: [],
	collapsableLines: {},
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
		default:
			return state
	}
}
