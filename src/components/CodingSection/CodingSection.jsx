import React, { useEffect, useState } from "react";
import './CodingSection.css'
import Split from "react-split";


import ConsoleBlock from "./CodeBlock.jsx/ConsoleBlock";
import OutputBlock from "./CodeBlock.jsx/OutputBlock";
import { IoMdArrowDropdown } from "react-icons/io";
import CodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from "@codemirror/lang-javascript";
import { useScreenContext } from "../../context/ScreenContext";

const CodingSection = () => {

  //context
  const { htmlOn, cssOn, jsOn, consoleOn, outputOn } = useScreenContext();

  //inital html value
  const initialHtml = '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8" />\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n\t<title>Document</title>\n</head>\n<body>\n\n</body>\n</html>'

  //useState for getting the value
  const [htmlValue, setHtmlValue] = useState(initialHtml)

  const [cssValue, setCssValue] = useState('')
  const [jsValue, setJsValue] = useState('')
  const [output, setOutput] = useState('')

  //seting in local storage
  const setItemLocal = (key, value) => {
    localStorage.setItem(key, value)
  }

  //geting from local storage
  const getLocalItem = (key) => (
    localStorage.getItem(key)
  )

  //output
  const combinedOutput = `${htmlValue} 
  <style>${cssValue}</style>
  <script> ${jsValue} </script>`


  useEffect(() => (
    setOutput(combinedOutput)
  ), [htmlValue, cssValue, jsValue])

  //saving work in local storage
  useEffect(() => {
    if (getLocalItem('html') !== null) {
      setHtmlValue(getLocalItem('html'))
      console.log('hir')

    } else {
      setHtmlValue(initialHtml)
      console.log('no hit')

    }

    if (getLocalItem('css') !== null) {
      console.log('css pugyo')
      setCssValue(getLocalItem('css'))
    } else {
      console.log('css pugena')
      setCssValue('')
    }


    if (getLocalItem('javaScript') !== null) {
      setJsValue(getLocalItem('javaScript'))
    } else { setJsValue('') }

  }, [])



  return (
    <div className="h-screen ">
      {htmlOn || cssOn || jsOn || consoleOn || outputOn ? (
        <Split
          className="split h-full"
          gutterSize={2}

          key={`${htmlOn}-${cssOn}-${jsOn}-${consoleOn}-${outputOn}`}

        >
          {/* html section */}
          {htmlOn &&
            <section>
              <div className="pr-5 flex flex-col md:flex-row items-start md:items-baseline justify-between gap-y-1 mb-2">

                <h1 className='code-head uppercase'>Html <span className='text-xl'><IoMdArrowDropdown /></span></h1>

                <button onClick={() => {
                  localStorage.removeItem('html')
                  setHtmlValue(initialHtml)
                }} className="ml-[6px] bg-red-600 font-semibold text-white text-[12px] px-2 py-[2px] boreder border-red-950 rounded-[5px]">Reset</button>
              </div>

              <div>
                <CodeMirror
                  value={htmlValue}
                  extensions={[html()]}
                  onChange={(value) => {
                    setHtmlValue(value)
                    setItemLocal('html', value)
                  }}


                />
              </div>
            </section>
          }
          {/* css section */}
          {cssOn && <section>
            <div className=" pr-5 flex flex-col md:flex-row items-start md:items-baseline justify-between gap-y-1 mb-2">
              <h1 className='code-head '>CSS <span className='text-xl'><IoMdArrowDropdown /></span></h1>

              <button onClick={() => {
                localStorage.removeItem('css')
                setCssValue('')
              }} className="ml-2 bg-red-600 font-semibold text-white text-[12px] px-2 py-[2px] boreder border-red-950 rounded-[5px]">Reset</button>
            </div>


            <CodeMirror value={cssValue}
              extensions={[css()]}
              onChange={(value) => {
                setCssValue(value)
                setItemLocal('css', value)
              }}
            />

          </section>
          }


          {/* jsSection */}
          {jsOn && <section>
            <div className=" pr-5 flex flex-col md:flex-row items-start md:items-baseline justify-between gap-y-1 mb-2">

              <h1 className='code-head uppercase'>JavaScript <span className='text-xl'><IoMdArrowDropdown /></span></h1>

              <button onClick={() => {
                localStorage.removeItem('javaScript')
                setJsValue('')
              }} className="ml-[6px] bg-red-600 font-semibold text-white text-[12px] px-2 py-[2px] boreder border-red-950 rounded-[5px]">Reset</button>
            </div>

            <CodeMirror value={jsValue} extensions={[javascript()]} onChange={(value) => {
              setJsValue(value)
              setItemLocal('javaScript', value)
            }} />
          </section>
          }


          {consoleOn && <ConsoleBlock jsValue={jsValue} />
          }

          {outputOn && <OutputBlock srcCode={output} />}

        </Split>
      ) : null}


    </div>
  )
}

export default CodingSection