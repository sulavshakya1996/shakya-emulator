import React, { useState } from "react";
import { executeCode } from "../../../features/api";
import { CgLayoutGrid } from "react-icons/cg";

const ConsoleBlock = ({ jsValue }) => {

  const [output, setOutput] = useState(null)
  const runCode = async () => {
    try {
      const run = await executeCode(jsValue);
      console.log('console', run);
    } catch (error) {

    }
  }
  return (
    <div>
      <h1 className="output-head">Console</h1>
      <iframe src={runCode} frameborder="0"></iframe>
    </div>
  )
}

export default ConsoleBlock