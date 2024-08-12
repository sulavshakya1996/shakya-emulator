import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useScreenContext } from "../../context/ScreenContext";

const Header = () => {
  const { setHtmlOn, setCssOn, setJsOn, setConsoleOn, setOututOn } = useScreenContext();


  const handleClick = (i) => {
    if (i === 0) {
      setHtmlOn((prev) => !prev)
    } else if (i === 1) {
      setCssOn((prev) => !prev)
    } else if (i === 2) {
      setJsOn((prev) => !prev)
    } else if (i === 3) {
      setConsoleOn((prev) => !prev)
    } else if (i === 4) {
      setOututOn((prev) => !prev)
    }
  }
  const [open, setOpen] = useState();
  const clicked = () => setOpen(!open)

  const MenuInfo = [
    {
      title: "File",
      content: "coming soon"
    },
    {
      title: "Add Library",
      link: "#"
    }

  ]

  const buttons = [
    'HTML', 'CSS', 'Js', 'Console', 'Output'
  ]

  const helpSection = {
    auth: "Login or Register",
    support: [
      {
        title: "Help",
        link: "#"
      },
      {
        title: "Blog",
        link: "#"
      }
    ]
  }

  return (
    <header className="bg-primary  border-b-[1px] border-[#bfbfbf] border-collapse md:px-3 pl-[2px] sm:pl-3 flex items-center justify-between ">

      {/* Menu info section */}
      <section className="flex ">
        <FaLaptopCode className="text-4xl px-1" />

        <div className=" h-full hidden md:block  text-[13px] ">
          <div className="flex">
            {MenuInfo.map((el, i) => (
              <div key={i} onClick={el.content && clicked} className="p-[10px]  hover:bg-primary-dark hover:border-x-[1px] border-[#bfbfbf] cursor-pointer flex items-center">
                <a href={el.link} >{el.title}</a>
                {el.content && < IoMdArrowDropdown className="text-lg" />
                }

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buttons section */}
      <section className="flex">
        {buttons.map((but, i) => (
          <div key={i}>
            <button className={`h-full px-2 md:px-3 py-[6px] md:py-[2px] bg-blue-100 border-[1px] border-[#bfbfbf]  hover:bg-[#EBF3FF] ${i === 0 ? "md:rounded-l-[5px]" : ""} ${i === buttons.length - 1 ? "md:rounded-r-[5px]" : ""}`} onClick={() => handleClick(i)}>{but}</button>
          </div>
        ))}

      </section>

      {/* help secton */}
      <section className="hidden lg:block   ">
        <div className="flex">


          <button className="bg-[#FFEB3B] my-1 mr-[2px] py-[2px] px-[7px] rounded-[5px]">{helpSection.auth}</button>

          {
            helpSection.support.map((el) => (
              <div className="  p-2 hover:bg-primary-dark  hover:border-x-[1px] border-[#bfbfbf]">
                <a href={el.link} className="text-[13px]">{el.title}</a>
              </div>
            ))
          }

        </div>
      </section>

    </header >
  )
}

export default Header