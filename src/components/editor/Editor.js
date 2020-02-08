import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import Classes from "./editor.module.css";
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/theme/neat.css");
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/javascript/javascript.js");

const Editor = () => {
  const [data, updateData] = useState("");
  const [, setEditor] = useState(null);
  const higlightLine = (editor, num) => {
    editor.addLineClass(num, "background", Classes.activeLine);
  };
  const unHiglightLine = (editor, num) => {
    editor.removeLineClass(num, "background", Classes.activeLine);
  };
  const higlightedLine = [];
  return (
    <div className={Classes.container}>
      <CodeMirror
        className={Classes.codeMirror}
        value={data}
        editorDidMount={editor => {
          setEditor(editor);
        }}
        options={{
          mode: "javascript",
          theme: "material",
          tabSize: 2,
          lineNumbers: true
        }}
        onCursor={(editor, data) => {
          higlightedLine.push(data.line);
          if (higlightedLine.length > 1) {
            const first = higlightedLine.shift();
            unHiglightLine(editor, first);
          }
          higlightLine(editor, data.line);
        }}
        onBeforeChange={(editor, data, value) => {
          updateData(value);
        }}
        onChange={(editor, value) => {}}
      />
    </div>
  );
};

export default Editor;
