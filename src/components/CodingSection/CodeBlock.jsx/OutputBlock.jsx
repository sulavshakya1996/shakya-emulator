import React from "react";

const OutputBlock = ({ srcCode }) => {

  return (
    <div className="">
      <h1 className="output-head">Output</h1>

      <iframe srcDoc={srcCode} className="h-full w-full " frameborder="0" />
    </div>
  )
}

export default OutputBlock