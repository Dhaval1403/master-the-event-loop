import React, { Component } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import Classes from './editor.module.css'
require('codemirror/lib/codemirror.css')
require('codemirror/theme/material.css')
require('codemirror/theme/neat.css')
require('codemirror/mode/xml/xml.js')
require('codemirror/mode/javascript/javascript.js')

class Editor extends Component {
	constructor(props) {
		super(props)
		this.state = {
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
			higlightedLine: [],
			collapsableLines: {},
		}
	}
	// const [functions, updateFunctions] = {};

	// const [editor, setEditor] = useState(null)
	// const [collapsableLines, setCollapsableLines] = useState({})
	// collapsableLines = {}
	// setCollapsableLines = (arg) => {
	// 	collapsableLines = arg
	// }
	// console.log(collapsableLines)
	higlightLine = (editor, num) => {
		editor.addLineClass(num, 'background', Classes.activeLine)
	}
	updateData = (val) => {
		this.setState({ ...this.state, data: val })
	}
	unHiglightLine = (editor, num) => {
		editor.removeLineClass(num, 'background', Classes.activeLine)
	}
	// const higlightedLine = []
	findCharacter = (editor, lineNumber, character, constraint = false, multiLine = false) => {
		// console.log(editor, lineNumber, character, constraint, multiLine);
		let check = { open: 0, lastOpenTokenIndex: null, close: 0 }
		const tokens = editor.getLineTokens(lineNumber)
		let fistOpenIndex
		let lastCloseIndex
		let found = false
		let isOpen = false
		let lineFound = null
		const loopThroughLine = (tokens, lineNo) => {
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
				}
				if (check.open + check.close !== 0 && i === tokens.length - 1) {
					if (check.open === check.close) isOpen = false
					if (check.open > check.close) isOpen = true
					return {
						isOpen,
						tokenIndex: i,
						lineNo,
						tokens: tokens,
						fistOpenIndex,
						lastCloseIndex,
					}
				}
			}
		}
		const val = loopThroughLine(tokens, lineNumber)

		if (!multiLine) return val
		let j = lineNumber + 1
		if (multiLine && !found) {
			while (!found) {
				loopThroughLine(editor.getLineTokens(j), j)
				j++
			}
			lineFound = j - 1
		}
		if (multiLine && found && check.open + check.close !== 0 && check.open !== check.close) {
			let result
			while (check.open !== check.close) {
				result = loopThroughLine(editor.getLineTokens(j), j)
				j++
			}
			return result
		}
	}

	// const openingCurlyBrace = (editor, lineNumber) =>
	// 	findCharacter(editor, lineNumber, '{', '}', true);
	// const parenthesis = (editor, lineNumber) => findCharacter(editor, lineNumber, '(', ')', true);
	// const closingCurlyBrace = (editor, lineNumber) =>
	// 	findCharacter(editor, lineNumber, '}', false, false, true);
	findFatArrow = (editor, lineNumber) => this.findCharacter(editor, lineNumber, '=>')

	findOPeningAndClosing = (editor, lineNumber) => {
		return this.findCharacter(editor, lineNumber, '{', '}', true)
	}

	updateCollapsableLines = (i, lastOpenToken, tokens, lastOpenIndex) => {
		// console.log({
		// 	...this.state,
		// 	collapsableLines: {
		// 		...this.state.collapsableLines,
		// 		[i]: {
		// 			lastOpenToken,
		// 			tokens,
		// 			lastOpenIndex,
		// 		},
		// 	},
		// })
		this.setState({
			...this.state,
			collapsableLines: {
				...this.state.collapsableLines,
				[i]: {
					lastOpenToken,
					tokens,
					lastOpenIndex,
				},
			},
		})
	}
	openingCurlyBrace = (editor, lineNumber) => {
		return this.findCharacter(editor, lineNumber, '{', '}')
	}

	// Handle Paste into editor

	loadStateWithCollapsable = (editor, startNumber) => {
		for (var i = startNumber; i < editor.doc.size; i++) {
			const result = this.openingCurlyBrace(editor, i)
			if (result && result.isOpen) {
				editor.addLineClass(i, 'background', Classes.collapsableLine)
				console.log(this.state.collapsableLines, result)
				this.updateCollapsableLines(i, result.lastOpenToken, result.tokens, result.lastOpenIndex)
			}
		}
	}

	handlePaste = (editor, data, value) => {
		this.loadStateWithCollapsable(editor, data.from.line)
	}

	removeFromObject = (key, obj) => {
		const { [key]: _, ...rest } = this.state.collapsableLines
		return rest
	}

	handleChange = (editor, data, value) => {
		if (data.origin === 'paste') {
			this.handlePaste(editor, data, value)
		}
		if (data.origin === '+input' || data.origin === '+delete') {
			const result = this.openingCurlyBrace(editor, data.from.line)
			if (result && result.isOpen) {
				editor.addLineClass(data.from.line, 'background', Classes.collapsableLine)
				this.updateCollapsableLines(result.lastOpenToken, result.tokens, result.lastOpenIndex)
			} else {
				if (this.state.collapsableLines[data.from.line]) {
					editor.removeLineClass(data.from.line, 'background', Classes.collapsableLine)
					this.setState({
						...this.state,
						collapsableLines: this.removeFromObject(data.from.line, this.collapsableLines),
					})
				}
			}
		}
	}

	handleCursor = (editor, data) => {
		this.setState({ ...this.state, higlightedLine: [...this.state.higlightedLine, data.line] })
		if (this.state.higlightedLine.length > 1) {
			const newHiglightedLine = [...this.state.higlightedLine]
			const first = newHiglightedLine.shift()
			this.setState({ ...this.state, higlightedLine: newHiglightedLine })
			this.unHiglightLine(editor, first)
		}
		this.higlightLine(editor, data.line)
	}

	// Add style to line(s) during execution simulation

	higlightCharacters = (editor, from, to) => {
		if (to !== undefined) {
			for (var i = from; i <= to; i++) {
				editor.addLineClass(i, 'background', Classes.runningLine)
			}
		} else {
			editor.addLineClass(from, 'background', Classes.runningLine)
		}
	}

	// Remove style to line(s) during execution simulation

	removeHiglightFromCharacters = (editor, from, to) => {
		if (to !== undefined) {
			for (var i = from; i <= to; i++) {
				editor.removeLineClass(i, 'background', Classes.runningLine)
			}
		} else {
			editor.removeLineClass(i, 'background', Classes.runningLine)
		}
	}

	editorMount = (editor) => {
		this.setState({
			...this.state,
			editor,
		})
		if (editor.doc.size > 1) {
			this.loadStateWithCollapsable(editor, 0)
		}
	}

	getStringValue = (editor, startLine, endLine, startIndex, endIndex) => {
		const firstLineTokens = editor.getLineTokens(startLine)
	}

	findFunctions = (editor) => {
		// const data = parenthesis
	}
	// editorMount

	render() {
		console.log(this.state)
		return (
			<div className={Classes.container}>
				<CodeMirror
					className={Classes.codeMirror}
					value={this.state.data}
					editorDidMount={(editor) => {
						this.loadStateWithCollapsable(editor, 0)
					}}
					options={{
						mode: 'javascript',
						theme: 'material',
						tabSize: 2,
						lineNumbers: true,
					}}
					onCursor={this.handleCursor}
					onBeforeChange={(editor, data, value) => this.updateData(value)}
					onChange={this.handleChange}
					onGutterClick={(editor, number, gutter, str) => {
						// console.log(findOPeningAndClosing(editor, 3))
						console.log(this.findFatArrow(editor, number))
						// console.log(closingCurlyBrace(editor, number + 1));
					}}
					state={this.state}
				/>
			</div>
		)
	}
}

export default Editor
