import React from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/midnight.css";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ({ language, title, value, onChange }) => {

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
      <>
        <h6>{title}</h6>
        <ControlledEditor
          onBeforeChange={handleChange}
          className="codemirror-wrapper border border-white background-mid"
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "midnight",
            lineNumbers: true
          }}
        />
    </>
  );
};

export default Editor;
