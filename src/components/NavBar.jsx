import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Link to={"/"} ><img src={logo} alt="hoobank" className='w-[124px] h-[32px]' /></Link>
      <ul className='list-none sm:flex hidden justify-end items-center flxe-1'>
        {
          navLinks.map((el, index)=>{
            return(
              <li key={el.id} className={`nav_buttons font-poppins font-normal cursor-pointer text-black text-[16px] ${index === navLinks.length-1 ? 'mr-0':'mr-10'}  `}>
                <a href={`#${el.id}`}>
                  {el.title}
                </a>
              </li>
            )
          })
        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center text-black'>
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain text-black" onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} text-black p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
          <ul className='list-none flex flex-col justify-end items-center flex-1 text-black'>
            {
              navLinks.map((el, index) => {
                return (
                  <li key={el.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-blac text-black`}>
                    <a href={`#${el.id}`} className='text-black'>
                      {el.title}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;