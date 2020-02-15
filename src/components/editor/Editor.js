import React, { useState, useEffect } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import Classes from './editor.module.css';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

const Editor = () => {
	const [data, updateData] = useState(``);
	const [, setEditor] = useState(null);
	const [collapsableLines, setCollapsableLines] = useState({});
	const higlightLine = (editor, num) => {
		editor.addLineClass(num, 'background', Classes.activeLine);
	};
	const unHiglightLine = (editor, num) => {
		editor.removeLineClass(num, 'background', Classes.activeLine);
	};
	const higlightedLine = [];
	const findOpeningCurlyBrace = (editor, lineNumber) => {
		let check = { open: 0, lastOpenTokenIndex: 0, close: 0 };
		const tokens = editor.getLineTokens(lineNumber);
		let isCollapsable = false;
		for (let i = 0; i < tokens.length; i++) {
			if (tokens[i].string === '{') {
				check.open += 1;
				check.lastOpenTokenIndex = i;
			}
			if (tokens[i].string === '}') {
				check.close += 1;
			}
		}
		if (check.open > check.close) {
			isCollapsable = true;
		}
		return {
			isCollapsable: isCollapsable,
			lastOpenIndex: check.lastOpenTokenIndex,
			tokens: tokens,
			lastOpenToken: tokens[check.lastOpenTokenIndex],
		};
	};
	const handlePaste = (editor, data, value) => {
		for (var i = data.from.line; i < data.text.length; i++) {
			const { isCollapsable, lastOpenToken, tokens, lastOpenIndex } = findOpeningCurlyBrace(
				editor,
				i
			);
			if (isCollapsable) {
				setCollapsableLines({
					...collapsableLines,
					[i]: {
						lastOpenToken,
						tokens,
						lastOpenIndex,
					},
				});
			}
		}
	};

	const handleChange = (editor, data, value) => {
		console.log(collapsableLines);
		console.log(editor.setGutterMarker(data.from.line, Classes.gutter, <div></div>));
		if (data.origin === 'paste') {
			handlePaste(editor, data, value);
		}
		if (data.origin === '+input') {
			const { isCollapsable, lastOpenToken, tokens, lastOpenIndex } = findOpeningCurlyBrace(
				editor,
				data.from.line
			);
			if (isCollapsable) {
				setCollapsableLines({
					...collapsableLines,
					[data.from.line]: {
						lastOpenToken,
						tokens,
						lastOpenIndex,
					},
				});
			} else {
				if (collapsableLines[data.from.line]) {
					const { [data.from.line]: _, ...rest } = collapsableLines;
					setCollapsableLines(rest);
				}
			}
		}
	};

	const handleCursor = (editor, data) => {
		higlightedLine.push(data.line);
		if (higlightedLine.length > 1) {
			const first = higlightedLine.shift();
			unHiglightLine(editor, first);
		}
		higlightLine(editor, data.line);
	};

	const closingCurlyBrace = () => {};

	return (
		<div className={Classes.container}>
			<CodeMirror
				className={Classes.codeMirror}
				value={data}
				editorDidMount={editor => setEditor(editor)}
				options={{
					mode: 'javascript',
					theme: 'material',
					tabSize: 2,
					lineNumbers: true,
				}}
				onCursor={handleCursor}
				onBeforeChange={(editor, data, value) => updateData(value)}
				onChange={handleChange}
				onGutterClick={(editor, number, gutter, str) => {}}
			/>
		</div>
	);
};

export default Editor;
