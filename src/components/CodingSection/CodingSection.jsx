import React, { useState } from "react";
import './CodingSection.css'
import Split from "react-split";


import ConsoleBlock from "./CodeBlock.jsx/ConsoleBlock";
import OutputBlock from "./CodeBlock.jsx/OutputBlock";
import { IoMdArrowDropdown } from "react-icons/io";
import CodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from "@codemirror/lang-javascript";

const CodingSection = () => {

  const [htmlValue, setHtmlValue] = useState('<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8" />\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n\t<title>Document</title>\n</head>\n<body>\n\n</body>\n</html>')
  console.log(htmlValue)
  const [cssValue, setCssValue] = useState('')
  console.log('css', cssValue)

  const [jsValue, setJsValue] = useState('')
  console.log('js', jsValue)








  return (
    <div>
      <Split
        className="split h-screen"
        gutterSize={2}
      >
        {/* html section */}
        <section>
          <h1 className='code-head uppercase'>Html <span className='text-xl'><IoMdArrowDropdown /></span></h1>

          <div>
            <CodeMirror
              value={htmlValue}

              extensions={[html()]}
              onChange={(value) => { setHtmlValue(value) }}
            />
          </div>
        </section>

        {/* css section */}
        <section>
          <h1 className='code-head '>CSS{

          } <span className='text-xl'><IoMdArrowDropdown /></span></h1>


          <CodeMirror value={cssValue}
            extensions={[css()]}
            onChange={(value) => setCssValue(value)} />

        </section>

        {/* jsSection */}
        <section>
          <h1 className='code-head uppercase'>JavaScript <span className='text-xl'><IoMdArrowDropdown /></span></h1>

          <CodeMirror value={jsValue} extensions={[javascript()]} onChange={(value) => setJsValue(value)} />
        </section>


        <ConsoleBlock />
        <OutputBlock />

      </Split>

    </div>
  )
}

export default CodingSection