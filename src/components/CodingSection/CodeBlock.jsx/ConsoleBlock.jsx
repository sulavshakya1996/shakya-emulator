import React, { useEffect, useState } from "react";
import { executeCode } from "../../../features/api";
import { CgLayoutGrid } from "react-icons/cg";

const ConsoleBlock = ({ jsValue }) => {

  const [output, setOutput] = useState(null);
  console.log('outp', output)

  const onButtonClick = () => setOutput(null)

  useEffect(() => {
    const runCode = async () => {
      if (!jsValue) return;
      try {
        const { run } = await executeCode(jsValue);
        return setOutput(run?.output);

      } catch (error) {
        console.error("Error executing code:", error)
      }
      setOutput('<p>Error</p>')
    }
    runCode()
  }, [jsValue])

  // const runCode = async () => {
  //   try {
  //     const run = await executeCode(jsValue);
  //     console.log('console', run);
  //   } catch (error) {

  //   }
  // }
  return (
    <div>
      <div className="pr-5 flex items-baseline justify-between">
        <h1 className="output-head">Console</h1>
        <button onClick={onButtonClick} className="px-2 text-[12px] bg-primary border border-primary-dark rounded-md">Clear</button>
      </div>
      <iframe srcDoc={output ? output : ""} frameborder="0"></iframe>
    </div>
  )
}

export default ConsoleBlock