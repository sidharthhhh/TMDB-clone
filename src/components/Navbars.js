import React from 'react'
import { Select, Option } from "@material-tailwind/react";
// import {BsSearch} from 'react-icons'


const Navbars = () => {
  return (
    <>
      <div className="navbar px-4 py-3 bg-blue-950 text-white">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="nav-mid">
          <ul className='flex justify-around gap-5 cursor-pointer'>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>People</li>
            <li>More</li>
          </ul>
        </div>
        <div className="nav-end">
          <ul className='flex justify-around gap-3 cursor-pointer'>
            <li>+</li>
            <li>EN</li>
            <li>Login</li>
            <li>Join TMDB</li>
            {/* <li>{BsSearch}</li> */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbars