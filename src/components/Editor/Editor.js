import React, { useState, useEffect } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import Classes from './editor.module.css'
import { ConsoleBox, ConsoleTitle } from '../../styles/console'
import { Box } from '../../styles/flex'

require('codemirror/lib/codemirror.css')
require('codemirror/theme/material.css')
require('codemirror/theme/neat.css')
require('codemirror/mode/xml/xml.js')
require('codemirror/mode/javascript/javascript.js')

const Editor = () => {
	const [data, updateData] = useState(`const [data, updateData] = useState("");
	const [, setEditor] = useState(null);
	const [collapsableLines, setCollapsableLines] = useState({});
	const higlightLine = (editor, num) => {
		editor.addLineClass(num, 'background', Classes.activeLine);
	};
	const unHiglightLine = (editor, num) => {
		editor.removeLineClass(num, 'background', Classes.activeLine);
	};
	const higlightedLine = [];
`)
	// const [functions, updateFunctions] = {};

	const [editor, setEditor] = useState(null)
	// const [collapsableLines, setCollapsableLines] = useState({});
	let collapsableLines = {}
	const setCollapsableLines = (arg) => {
		collapsableLines = arg
	}
	const higlightLine = (editor, num) => {
		editor.addLineClass(num, 'background', Classes.activeLine)
	}
	const unHiglightLine = (editor, num) => {
		editor.removeLineClass(num, 'background', Classes.activeLine)
	}
	const higlightedLine = []

	const findCharacter = (
		editor,
		lineNumber,
		character,
		constraint = false,
		// lastOccurence = false,
		multiLine = false
	) => {
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
				if (check.open + check.close !== 0 && check.open === check.close) {
					isOpen = false
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
		// if (multiLine) {
		// 	return {
		// 		isOpen,
		// 		lastOpenIndex: check.lastOpenTokenIndex,
		// 		tokens: tokens,
		// 		lastOpenToken: tokens[check.lastOpenTokenIndex],
		// 		line: lineFound,
		// 	};
		// }
	}

	// const openingCurlyBrace = (editor, lineNumber) =>
	// 	findCharacter(editor, lineNumber, '{', '}', true);
	// const parenthesis = (editor, lineNumber) => findCharacter(editor, lineNumber, '(', ')', true);
	// const closingCurlyBrace = (editor, lineNumber) =>
	// 	findCharacter(editor, lineNumber, '}', false, false, true);

	const findOPeningAndClosing = (editor, lineNumber) => {
		return findCharacter(editor, lineNumber, '{', '}', true)
	}

	const updateCollapsableLines = (i, lastOpenToken, tokens, lastOpenIndex) => {
		setCollapsableLines({
			...collapsableLines,
			[i]: {
				lastOpenToken,
				tokens,
				lastOpenIndex,
			},
		})
	}

	// Handle Paste into editor

	const loadStateWithCollapsable = (editor, startNumber) => {
		// for (var i = startNumber; i < editor.doc.size; i++) {
		// 	const { isCollapsable, lastOpenToken, tokens, lastOpenIndex } = openingCurlyBrace(editor, i);
		// 	if (isCollapsable) {
		// 		editor.addLineClass(i, 'background', Classes.collapsableLine);
		// 		updateCollapsableLines(i, lastOpenToken, tokens, lastOpenIndex);
		// 	}
		// }
	}

	const handlePaste = (editor, data, value) => {
		loadStateWithCollapsable(editor, data.from.line)
	}

	const handleChange = (editor, data, value) => {
		// if (data.origin === 'paste') {
		// 	handlePaste(editor, data, value);
		// }
		// if (data.origin === '+input') {
		// 	const { isCollapsable, lastOpenToken, tokens, lastOpenIndex } = openingCurlyBrace(
		// 		editor,
		// 		data.from.line
		// 	);
		// 	if (isCollapsable) {
		// 		updateCollapsableLines(lastOpenToken, tokens, lastOpenIndex);
		// 	} else {
		// 		if (collapsableLines[data.from.line]) {
		// 			const { [data.from.line]: _, ...rest } = collapsableLines;
		// 			setCollapsableLines(rest);
		// 		}
		// 	}
		// }
	}

	const handleCursor = (editor, data) => {
		higlightedLine.push(data.line)
		if (higlightedLine.length > 1) {
			const first = higlightedLine.shift()
			unHiglightLine(editor, first)
		}
		higlightLine(editor, data.line)
	}

	// Add style to line(s) during execution simulation

	const higlightCharacters = (editor, from, to) => {
		if (to !== undefined) {
			for (var i = from; i <= to; i++) {
				editor.addLineClass(i, 'background', Classes.runningLine)
			}
		} else {
			editor.addLineClass(from, 'background', Classes.runningLine)
		}
	}

	// Remove style to line(s) during execution simulation

	const removeHiglightFromCharacters = (editor, from, to) => {
		if (to !== undefined) {
			for (var i = from; i <= to; i++) {
				editor.removeLineClass(i, 'background', Classes.runningLine)
			}
		} else {
			editor.removeLineClass(i, 'background', Classes.runningLine)
		}
	}

	const editorMount = (editor) => {
		setEditor(editor)
		if (editor.doc.size > 1) {
			loadStateWithCollapsable(editor, 0)
		}
		// higlightCharacters(editor, 3, 4);
	}

	const getStringValue = (editor, startLine, endLine, startIndex, endIndex) => {
		const firstLineTokens = editor.getLineTokens(startLine)
	}

	const findFunctions = (editor) => {
		// const data = parenthesis
	}
	// editorMount
	return (
		<ConsoleBox>
			<Box display="flex" justifyContent="center" alignItems="center">
				<ConsoleTitle p="10px">Code Editor</ConsoleTitle>
			</Box>

			<Box borderTop={1} borderStyle="solid" color="colorBlue" />

			<Box>
				<div className={Classes.container}>
					<CodeMirror
						className={Classes.codeMirror}
						value={data}
						editorDidMount={() => {}}
						options={{
							mode: 'javascript',
							theme: 'material',
							tabSize: 2,
							lineNumbers: true,
						}}
						onCursor={handleCursor}
						onBeforeChange={(editor, data, value) => updateData(value)}
						onChange={handleChange}
						onGutterClick={(editor, number, gutter, str) => {
							console.log(findOPeningAndClosing(editor, 3))
							// console.log(closingCurlyBrace(editor, number + 1));
						}}
					/>
				</div>
			</Box>
		</ConsoleBox>
	)
}

export default Editor
