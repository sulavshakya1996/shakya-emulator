import React from "react";
import './CodingSection.css'
import Split from "react-split";
import HtmlBlock from "./CodeBlock.jsx/HtmlBlock";
import CssBlock from "./CodeBlock.jsx/CssBlock";
import JsBlock from "./CodeBlock.jsx/JsBlock";
import ConsoleBlock from "./CodeBlock.jsx/ConsoleBlock";
import OutputBlock from "./CodeBlock.jsx/OutputBlock";

const CodingSection = () => {
  return (
    <div>
      <Split
        className="split h-screen"
        gutterSize={2}
      >
        <HtmlBlock />
        <CssBlock />
        <JsBlock />
        <ConsoleBlock />
        <OutputBlock />

      </Split>

    </div>
  )
}

export default CodingSection