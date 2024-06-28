import { createContext, useContext, useState } from "react";

const ScreenContext = createContext();

export const useScreenContext = () => {
  return useContext(ScreenContext);
}

export const ScreenContextProvider = ({ children }) => {
  const [htmlOn, setHtmlOn] = useState(true);
  const [cssOn, setCssOn] = useState();
  const [jsOn, setJsOn] = useState();
  const [consoleOn, setConsoleOn] = useState();
  const [outputOn, setOututOn] = useState(true);

  return <ScreenContext.Provider value={{ htmlOn, setHtmlOn, cssOn, setCssOn, jsOn, setJsOn, consoleOn, setConsoleOn, outputOn, setOututOn }}>{children}</ScreenContext.Provider>
}