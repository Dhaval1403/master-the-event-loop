import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/editor/editor.actions'
import { Controlled as CodeMirror } from 'react-codemirror2'
import Classes from './editor.module.css'
import { ConsoleContainer, ConsoleData, ConsoleHeader, ConsoleTitle } from '../../styles/console'
import { Box } from '../../styles/flex'
import Controls from '../Controls/Controls'

import {
	addFunctionToCallstack,
	changeCallstackState,
} from './../../redux/callstack/callstack.actions'
import {
	playAnimation,
	pauseAnimation,
	stopAnimation,
} from './../../redux/controls/controls.actions'

require('codemirror/lib/codemirror.css')
require('codemirror/theme/material.css')
require('codemirror/theme/neat.css')
require('codemirror/mode/xml/xml.js')
require('codemirror/mode/javascript/javascript.js')

/**
 * @typedef {Object} findCharacterResult
 * @property {?boolean} found
 * @property {number} tokenIndex
 * @property {number} line
 * @property {array} tokens
 * @property {?boolean} isOpen
 * @property {?number} firstOpenIndex
 * @property {?number} lastOpenIndex
 * @property {?number} lineNo
 */

class Editor extends Component {
	/**
	 * @param {CodeMirror.Editor} editor
	 * @param {number} num
	 */
	higlightLine = (editor, num) => {
		editor.addLineClass(num, 'background', Classes.activeLine)
	}
	unHiglightLine = (editor, num) => {
		editor.removeLineClass(num, 'background', Classes.activeLine)
	}

	// need to reduce argument length. By passing in an object of configurations

	/**
	 * @param {CodeMirror.Editor} editor
	 * @param {number} lineNumber
	 * @param {string} character
	 * @param {?string} constraint
	 * @param {boolean} multiLine
	 * @param {?number} startToken
	 * @return {findCharacterResult}
	 */

	findCharacter = (
		editor,
		lineNumber,
		character,
		constraint = null,
		multiLine = false,
		startToken = null
	) => {
		let check = { open: 0, lastOpenTokenIndex: null, close: 0 }
		const tokens = editor.getLineTokens(lineNumber)
		let firstOpenIndex
		let lastCloseIndex
		let found = false
		let isOpen = false
		let lineFound = null

		/**
		 *
		 * @param {array} tokens
		 * @param {number} lineNo
		 * @param {number} startingToken
		 */

		const loopThroughLine = (tokens, lineNo, startingToken) => {
			for (let i = startingToken !== null ? startingToken : 0; i < tokens.length; i++) {
				if (tokens[i].string === character) {
					found = true
					if (check.open === 0) {
						firstOpenIndex = { lineNo: lineNo, tokenIndex: i }
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
						firstOpenIndex,
						lastCloseIndex,
					}
				}
			}
		}
		const val = loopThroughLine(tokens, lineNumber, startToken)

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
				result = loopThroughLine(editor.getLineTokens(j), j, 0)
				j++
			}
			return result
		}
	}

	/**
	 * @param {CodeMirror.Editor} editor
	 * @param {number} lineNumber
	 * @param {?number}
	 */

	findOPeningAndClosing = (editor, lineNumber, startToken = null) => {
		return this.findCharacter(editor, lineNumber, '{', '}', true, 0)
	}
	openingCurlyBrace = (editor, lineNumber) => {
		return this.findCharacter(editor, lineNumber, '{', '}')
	}
	findFatArrow = (editor, lineNumber) => this.findCharacter(editor, lineNumber, '=>')

	findFunctionKeyword = (editor, lineNumber) => this.findCharacter(editor, lineNumber, 'function')

	/**
	 * @param {CodeMirror.Editor} editor
	 * @param {[number, number]} startLineAndIndex
	 * @param {[number, number]} endLineAndIndex
	 */

	getStringValue = (editor, startLineAndIndex, endLineAndIndex) => {
		let tokens = editor.getLineTokens(startLineAndIndex[0])
		let stringValue = ''
		;(function() {
			let foundInitialiser = false
			let i = startLineAndIndex[1] - 1
			while (!foundInitialiser) {
				if (tokens[i].string !== ' ') {
					foundInitialiser = true
				}
				stringValue += tokens[i].string + ' '
				i--
			}
		})()
		if (startLineAndIndex[1] !== 0) {
			for (let i = startLineAndIndex[1]; i < tokens.length; i++) {
				stringValue += tokens[i].string
			}
		} else {
			stringValue += '\n' + editor.getLine(startLineAndIndex[0])
		}
		if (endLineAndIndex[0] !== startLineAndIndex[0] + 1) {
			for (let i = startLineAndIndex[0] + 1; i <= endLineAndIndex[0]; i++) {
				stringValue += '\n' + editor.getLine(i)
			}
		}
		if (endLineAndIndex[1] !== 0) {
			let tokens = editor.getLineTokens(endLineAndIndex[0])
			for (let i = endLineAndIndex[1]; i < tokens.length; i++) {
				stringValue += tokens[i].string
			}
		} else {
			stringValue += '\n' + editor.getLine(endLineAndIndex[0])
		}
		return stringValue
	}

	/**
	 * @param {CodeMirror.Editor} editor
	 * @param {[number, number]} startLineAndIndex
	 */

	getFunctionStringValue = (editor, startLineAndIndex) => {
		const firstLineTokens = editor.getLineTokens(startLineAndIndex[0])

		if (firstLineTokens) {
			const result = this.findOPeningAndClosing(editor, startLineAndIndex[0], startLineAndIndex[1])

			return {
				parameters: result,
				functionString: this.getStringValue(
					editor,
					[startLineAndIndex[0], startLineAndIndex[1]],
					Object.values(result.lastCloseIndex)
				),
			}
		}
	}

	/**
	 * @param {array} tokens
	 * @param {number} limit
	 * @param {number} line
	 * @param {boolean} es5
	 */

	findFunctionName = (tokens, limit, line, es5 = false) => {
		const foundTokens = { ')': false, '(': false }
		if (es5) {
			for (let i = limit + 1; i < tokens.length; i++) {
				if (tokens[i].string === '(' && !foundTokens['(']) {
					foundTokens[tokens[i].string] = true
					continue
				}
				if (tokens[i].string === ')' && !foundTokens[')']) {
					return {
						type: 'anonymous',
						tokenIndex: i,
						line,
					}
				}
				if (tokens[i].string === ' ') {
					continue
				}
				if (tokens[i].string && !foundTokens['(']) {
					return {
						type: 'named',
						name: tokens[i].string,
						tokenIndex: i,
						line,
					}
				}
			}
		} else {
			for (let i = limit - 1; i >= 0; i--) {
				if (
					(tokens[i].string === '(' && !foundTokens['(']) ||
					(tokens[i].string === ')' && !foundTokens[')'])
				) {
					foundTokens[tokens[i].string] = true
					continue
				}
				if (foundTokens[')'] && foundTokens['(']) {
					if (tokens[i].string === ' ' || tokens[i].string === '=' || tokens[i].string === ':') {
						continue
					} else if (tokens[i].string === '(' || tokens[i].string === '{') {
						return {
							type: 'anonymous',
							tokenIndex: i,
							line,
						}
					} else {
						return {
							type: 'named',
							name: tokens[i].string,
							tokenIndex: i,
							line,
						}
					}
				}
			}
		}
	}

	findFunctions = (editor, line) => {
		const es6Function = this.findFatArrow(editor, line)
		const es5Function = this.findFunctionKeyword(editor, line)
		if (es6Function && es6Function.found) {
			const res = this.findFunctionName(es6Function.tokens, es6Function.tokenIndex, line)

			this.props.addFunction(res)
		}
		if (es5Function && es5Function.found) {
			const res = this.findFunctionName(es5Function.tokens, es5Function.tokenIndex, line, true)
			res.functionDetails = this.getFunctionStringValue(editor, [res.line, res.tokenIndex])
			res.es5 = true
			this.props.addFunction(res)
		}
	}

	loadStateWithFunctions = (editor, startNumber) => {
		for (var i = startNumber; i < editor.doc.size; i++) {
			this.findFunctions(editor, i)
		}
	}
	// Handle Paste into editor
	loadStateWithCollapsable = (editor, startNumber) => {
		for (var i = startNumber; i < editor.doc.size; i++) {
			const result = this.openingCurlyBrace(editor, i)
			if (result && result.isOpen) {
				editor.addLineClass(i, 'background', Classes.collapsableLine)
				this.props.addCollapsableLine({
					index: i,
					lastOpenToken: result.lastOpenToken,
					tokens: result.tokens,
					lastOpenIndex: result.lastOpenIndex,
				})
			}
		}
	}

	handlePaste = (editor, data, value) => {
		this.loadStateWithCollapsable(editor, data.from.line)
	}
	handleChange = (editor, data, value) => {
		if (data.origin === 'paste') {
			this.handlePaste(editor, data, value)
		}
		if (
			data.origin === '+input' ||
			data.origin === '+delete' ||
			data.origin === 'undo' ||
			data.origin === 'redo'
		) {
			const result = this.openingCurlyBrace(editor, data.from.line)

			if (result && result.isOpen) {
				editor.addLineClass(data.from.line, 'background', Classes.collapsableLine)
				this.props.addCollapsableLine({
					index: data.from.line,
					lastOpenToken: result.lastOpenToken,
					tokens: result.tokens,
					lastOpenIndex: result.lastOpenIndex,
				})
			} else {
				if (this.props.collapsableLines[data.from.line]) {
					editor.removeLineClass(data.from.line, 'background', Classes.collapsableLine)
					this.props.removeCollapsableLine(data.from.line)
				}
			}
		}
	}

	handleCursor = (editor, data) => {
		if (this.props.highlightedLines.length > 0) {
			this.unHiglightLine(editor, this.props.highlightedLines[0])
			this.props.removeLastHighlightedLine()
		}
		this.higlightLine(editor, data.line)
		this.props.highlightLine(data.line)
	}

	// Add style to line(s) during execution simulation

	/**
	 * @param {CodeMirror.Editor} editor
	 * @param {number} from
	 * @param {number} to
	 */

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

	returnOpeningAndClosingLine = ({
		functionDetails: {
			parameters: { firstOpenIndex, lastCloseIndex },
		},
	}) => ({ start: firstOpenIndex.lineNo, end: lastCloseIndex.lineNo })

	iterateThroughLines = function* it(editor) {
		let currentLine = 0
		let preservedLine = null

		this.props.changeCallstackState(true)
		this.props.playAnimation()

		while (currentLine < editor.lineCount()) {
			let startHighlight = currentLine
			let endHighlight = currentLine
			editor.scrollIntoView({ line: currentLine, ch: 0 })
			const isFunctionCall =
				editor.getLine(currentLine) !== undefined ? editor.getLine(currentLine).split('(') : ['']
			console.warn(isFunctionCall)
			const isWebApi =
				isFunctionCall[0] !== '' && (window[isFunctionCall[0]] || isFunctionCall[0].includes('.then'))
					? true
					: false

			// Check if line is a function which is already registered in state
			let checkIfNamedFunction = Object.values(this.props.functions.named).filter(
				(value) => value.line === currentLine
			)
			let checkIfAnonymouseFunction = Object.values(this.props.functions.anonymous).filter(
				(value) => value.line === currentLine
			)

			// If the current line is not a function declaration
			if (!isFunctionCall[0].includes('function')) {
				// if we found a function name within the named function hash table
				if (checkIfNamedFunction.length > 0) {
					const { start, end } = this.returnOpeningAndClosingLine(checkIfNamedFunction[0])

					startHighlight = start
					endHighlight = end
					preservedLine = currentLine
					currentLine = end
				} else {
					// if we found a anonymouse function within the anonymouse function hash table
					if (checkIfAnonymouseFunction.length > 0) {
						const { start, end } = this.returnOpeningAndClosingLine(checkIfAnonymouseFunction[0])
						const mainMethod =
							editor.getLine(currentLine) !== undefined ? editor.getLine(currentLine).split('(') : ['']
						console.warn('ANONYNMOUSE FUNCTION DETECTED ', checkIfAnonymouseFunction, mainMethod)
						startHighlight = start - 1
						endHighlight = end
						currentLine = end

						this.props.addFunctionToCallstack({
							name: mainMethod[0],
							delay: 1000,
							webApi: isWebApi,
							message: undefined,
							block: false,
						})
					}

					if (
						isFunctionCall[0] !== '' &&
						!isFunctionCall[0].includes('function') &&
						!isFunctionCall[0].includes('}')
					) {
						const callFunction = this.props.functions.named[isFunctionCall[0]]

						if (isFunctionCall[0].includes('console')) {
							this.props.addFunctionToCallstack({
								name: isFunctionCall[0],
								delay: 1000,
								webApi: isWebApi,
								message: isFunctionCall[1].split(')')[0],
								block: false,
							})
						} else {
							if (callFunction) {
								const { start, end } = this.returnOpeningAndClosingLine(callFunction)
								startHighlight = start
								endHighlight = end
								this.higlightCharacters(editor, currentLine)

								this.props.addFunctionToCallstack({
									name: isFunctionCall[0],
									delay: 1000,
									webApi: isWebApi,
									message: undefined,
									block: false,
								})
								setTimeout(() => {
									this.removeHiglightFromCharacters(editor, currentLine, currentLine)
								}, 500)
							}
						}
					}
				}
				this.higlightCharacters(editor, startHighlight, endHighlight)

				setTimeout(() => {
					this.removeHiglightFromCharacters(editor, startHighlight, endHighlight)
				}, 500)
				yield console.error('EDITOR LINE: ', currentLine)
			} else {
				if (checkIfNamedFunction.length > 0) {
					const { start, end } = this.returnOpeningAndClosingLine(checkIfNamedFunction[0])

					startHighlight = start
					endHighlight = end
					currentLine = end
				}
				if (checkIfAnonymouseFunction.length > 0) {
					const { start, end } = this.returnOpeningAndClosingLine(checkIfAnonymouseFunction[0])

					startHighlight = start
					endHighlight = end
					currentLine = end
				}
				this.higlightCharacters(editor, startHighlight, endHighlight)

				setTimeout(() => {
					this.removeHiglightFromCharacters(editor, startHighlight, endHighlight)
				}, 500)
			}
			currentLine++
		}

		while (this.props.callbackQueue.stack.length > 0) {
			console.error('CALLBACKQUEUE LENGTH ', this.props.callbackQueue.stack.length)
			if (this.props.callbackQueue.stack.length > 0) {
				this.props.changeCallstackState(false)
			}
			yield 'playing'
		}

		yield this.props.stopAnimation()
	}

	editorDidMount = () => {
		const editor = this.props.editor
		const highlightedLine = this.props.highlightedLines[0] ? this.props.highlightedLines[0] : 0
		this.unHiglightLine(editor, highlightedLine)
		this.loadStateWithCollapsable(editor, 0)
		this.loadStateWithFunctions(editor, 0)
		const generator = this.iterateThroughLines(editor)
		//console.log(generator)
		setInterval(() => generator.next(), 1500)
	}

	render() {
		return (
			<>
				<ConsoleContainer style={{ padding: '5px' }}>
					<ConsoleHeader>
						<Box display="flex" justifyContent="space-around" alignItems="center">
							<ConsoleTitle p="10px">Code Editor</ConsoleTitle>
						</Box>
						<Box display="flex" justifyContent="flex-end" alignItems="center">
							<Controls loadFunctions={this.editorDidMount} />
						</Box>
					</ConsoleHeader>
					<ConsoleData>
						<Box>
							<div className={Classes.container}>
								<CodeMirror
									className={Classes.codeMirror}
									value={this.props.data}
									editorDidMount={(editor) => {
										this.props.setEditor(editor)
										//this.editorDidMount
										//editor.setSize('100%', '100%')
									}}
									options={{
										mode: 'javascript',
										theme: 'material',
										tabSize: 2,
										lineNumbers: true,
										scrollbarStyle: null,
										lineWrapping: true,
									}}
									onCursor={this.handleCursor}
									onBeforeChange={(editor, data, value) => this.props.setData(value)}
									onChange={this.handleChange}
									onGutterClick={(editor, number, gutter, str) => {
										//this.findFunctions(editor, number)
									}}
								/>
							</div>
						</Box>
					</ConsoleData>
				</ConsoleContainer>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	const {
		editor: { editor, highlightedLines, collapsableLines, data, functions },
		callstack: { isOccupied },
		callbackQueue,
	} = state

	return {
		data,
		editor,
		highlightedLines,
		collapsableLines,
		functions,
		isOccupied,
		callbackQueue,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		highlightLine: (lineNumber) => dispatch(actions.highlightLine(lineNumber)),
		removeLastHighlightedLine: () => dispatch(actions.removeLastHighlightedLine()),
		setData: (data) => dispatch(actions.setData(data)),
		addCollapsableLine: (data) => dispatch(actions.addCollapsableLine(data)),
		removeCollapsableLine: (lineNumber) => dispatch(actions.removeCollapsableLine(lineNumber)),
		addFunction: (fun) => dispatch(actions.addFunction(fun)),
		setEditor: (editor) => dispatch(actions.setEditor(editor)),
		addFunctionToCallstack: (func) => dispatch(addFunctionToCallstack(func)),
		changeCallstackState: (toState) => dispatch(changeCallstackState(toState)),
		playAnimation: () => dispatch(playAnimation()),
		pauseAnimation: () => dispatch(pauseAnimation()),
		stopAnimation: () => dispatch(stopAnimation()),
	}
	// editorMount
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
