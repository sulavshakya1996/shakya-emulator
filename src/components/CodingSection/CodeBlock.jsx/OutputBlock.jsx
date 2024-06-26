import React from "react";

const OutputBlock = ({ srcCode }) => {

  console.log('output', srcCode)
  return (
    <div>
      <h1 className="output-head">Output</h1>

      <iframe srcDoc={srcCode} frameborder="0" />
    </div>
  )
}

export default OutputBlock