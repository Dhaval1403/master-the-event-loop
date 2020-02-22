export const str = `import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/editor/editor.actions'
import { Controlled as CodeMirror } from 'react-codemirror2'
import Classes from './editor.module.css'
require('codemirror/lib/codemirror.css')
require('codemirror/theme/material.css')
require('codemirror/theme/neat.css')
require('codemirror/mode/xml/xml.js')
require('codemirror/mode/javascript/javascript.js')

class Editor extends Component {
    higlightLine = (editor, num) => {
        editor.addLineClass(num, 'background', Classes.activeLine)
    }
    unHiglightLine = (editor, num) => {
        editor.removeLineClass(num, 'background', Classes.activeLine)
    }
    function IDENTIFY_ME (params) {
        console.log("I AM HERE")
    }
    findCharacter = (editor, lineNumber, character, constraint = false, multiLine = false) => {
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

    findOPeningAndClosing = (editor, lineNumber) => {
        return this.findCharacter(editor, lineNumber, '{', '}', true)
    }
    openingCurlyBrace = (editor, lineNumber) => {
        return this.findCharacter(editor, lineNumber, '{', '}')
    }
    findFatArrow = (editor, lineNumber) => this.findCharacter(editor, lineNumber, '=>')
    findFunctionKeyword = (editor, lineNumber) => this.findCharacter(editor, lineNumber, 'function')

    findFunctions = (editor, line) => {
        const es6Function = this.findFatArrow(editor, line)
        if (es6Function && es6Function.found) {
            console.log('WE ARE GETTING SOMEWHERE', es6Function)
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
    getStringValue = (editor, startLine, endLine, startIndex, endIndex) => {
        const firstLineTokens = editor.getLineTokens(startLine)
    }

    render() {
        return (
            <div className={Classes.container}>
                <CodeMirror
                    className={Classes.codeMirror}
                    value={this.props.data}
                    editorDidMount={(editor) => {
                        this.loadStateWithCollapsable(editor, 0)
                        this.loadStateWithFunctions(editor, 0)
                    }}
                    options={{
                        mode: 'javascript',
                        theme: 'material',
                        tabSize: 2,
                        lineNumbers: true,
                    }}
                    onCursor={this.handleCursor}
                    onBeforeChange={(editor, data, value) => this.props.setData(value)}
                    onChange={this.handleChange}
                    onGutterClick={(editor, number, gutter, str) => {}}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        editor: { editor, highlightedLines, collapsableLines, data },
    } = state
    return {
        data,
        editor,
        highlightedLines,
        collapsableLines,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        highlightLine: (lineNumber) => dispatch(actions.highlightLine(lineNumber)),
        removeLastHighlightedLine: () => dispatch(actions.removeLastHighlightedLine()),
        setData: (data) => dispatch(actions.setData(data)),
        addCollapsableLine: (data) => dispatch(actions.addCollapsableLine(data)),
        removeCollapsableLine: (lineNumber) => dispatch(actions.removeCollapsableLine(lineNumber)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)`
