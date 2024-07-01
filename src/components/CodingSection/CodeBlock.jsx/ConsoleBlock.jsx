import React, { useEffect, useState } from "react";
import { executeCode } from "../../../features/api";


const ConsoleBlock = ({ jsValue }) => {

  const [output, setOutput] = useState(null);



  const onButtonClick = () => setOutput(null)

  useEffect(() => {
    const runCode = async () => {
      if (!jsValue) return;
      try {
        const { run } = await executeCode(jsValue);
        return setOutput(run);

      } catch (error) {
        console.error("Error executing code:", error)
      }
      setOutput('<p>Error</p>')
    }
    runCode()
  }, [jsValue])


  return (
    <div>
      <div className="pr-5 flex flex-col md:flex-row items-start md:items-baseline justify-between gap-y-1 mb-2">
        <h1 className="output-head">Console</h1>
        <button onClick={onButtonClick} className="ml-[6px] px-2 text-[12px] bg-primary border border-primary-dark rounded-md">Clear</button>
      </div>
      <iframe srcDoc={output?.stdout} className="h-[95%] w-full" frameborder="0"></iframe>
    </div>
  )
}

export default ConsoleBlock