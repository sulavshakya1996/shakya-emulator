import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {

  const [open, setOpen] = useState();
  const clicked = () => setOpen(!open)

  const MenuInfo = [
    {
      title: "File",
      content: [
        {
          contentTitle: "New",
          link: "#"
        },
        {
          contentTitle: "Make bin private",
          link: "#"
        },
        {
          contentTitle: "Delete",
          link: "#"
        },
        {
          contentTitle: "Delete",
          link: "#"
        },
        {
          contentTitle: "Archieve",
          link: "#"
        },
        {
          contentTitle: "Add Description",
          link: "#"
        },
        {
          title: "Save Snapshot",
          link: "#"
        },
        {
          title: "Publish to vanity homepage",
          link: "#"
        },
        {
          title: "Export as gist",
          link: "#"
        },
        {
          title: "Download",
          link: "#"
        },
        {
          title: "Save as template",
          link: "#"
        },
      ]
    },
    {
      title: "Add Library",
      link: "#"
    }

  ]

  const buttons = [
    'HTML', 'CSS', 'JavaScript', 'Console', 'Output'
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
    <header className="bg-primary  border-b-[1px] border-[#bfbfbf] px-3 flex items-center justify-between ">

      {/* Menu info section */}
      <section className="flex ">
        <FaLaptopCode className="text-4xl px-1" />

        <div className=" h-full flex flex-1 text-[13px] ">
          {MenuInfo.map((el, i) => (
            <div key={i} onClick={el.content && clicked} className="p-[10px]  hover:bg-primary-dark hover:border-x-[1px] border-[#bfbfbf] cursor-pointer flex items-center">
              <a href={el.link} >{el.title}</a>
              {el.content && < IoMdArrowDropdown className="text-lg" />
              }
              {open && el.content ? (
                <div>
                  <p>hi</p>

                </div>
              ) : null}


            </div>
          ))}

        </div>
      </section>

      {/* Buttons section */}
      <section className="flex">
        {buttons.map((but, i) => (
          <div>
            <button className={`px-3 py-[2px] bg-blue-100 border-[1px] border-[#bfbfbf] hover:bg-[#EBF3FF] ${i === 0 ? "rounded-l-[5px]" : ""} ${i === buttons.length - 1 ? "rounded-r-[5px]" : ""}`}>{but}</button>
          </div>
        ))}

      </section>

      {/* help secton */}
      <section className="flex">

        <button className="bg-[#FFEB3B] my-1 mr-[2px] py-[2px] px-[7px] rounded-[5px]">{helpSection.auth}</button>

        {
          helpSection.support.map((el) => (
            <div className="  p-2 hover:bg-primary-dark  hover:border-x-[1px] border-[#bfbfbf]">
              <a href={el.link} className="text-[13px]">{el.title}</a>
            </div>
          ))
        }

      </section>

    </header >
  )
}

export default Header