import { editorTypes } from './editor.types'

export const highlightLine = (lineNumber) => ({
	type: editorTypes.ADD_HIGHLIGHTED_LINE,
	payload: lineNumber,
})

export const removeLineHighlight = (lineNumber) => ({
	type: editorTypes.REMOVE_HIGHLIGHTED_LINE,
	payload: lineNumber,
})

export const removeLastHighlightedLine = () => ({
	type: editorTypes.REMOVE_LAST_HIGHLIGHTED_LINE,
})

export const setData = (data) => ({
	type: editorTypes.SET_DATA,
	payload: data,
})

// {index, lastOpenToken, tokens,lastOpenIndex}
export const addCollapsableLine = (data) => ({
	type: editorTypes.ADD_COLLAPSABLE_LINE,
	payload: data,
})

export const removeCollapsableLine = (lineNumber) => ({
	type: editorTypes.REMOVE_COLLAPSABLE_LINE,
	payload: lineNumber,
})

export const addFunction = (fun) => ({
	type: editorTypes.ADD_FUNCTION,
	payload: fun,
})

export const setEditor = (editor) => ({
	type: editorTypes.SET_EDITOR,
	payload: editor
})