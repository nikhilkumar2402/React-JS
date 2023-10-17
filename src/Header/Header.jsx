import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeBtn from '../Components/ThemeBtn'

const Header = () => {
  return (
    <div className='border-b-2 flex justify-between items-center px-80 py-2 font-medium sticky top-0 bg-white dark:bg-gray-900 dark:text-white'>
      <img src="logo.png" className='h-12'/>
      <div>
        <ul className='flex gap-9'>
            <li>
              <NavLink
                to=''
                className={({isActive})=>`${isActive ? "text-green-600 dark:text-green-300" : "text-gray-600 dark:text-white"}`}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({isActive})=>`${isActive ? "text-green-600 dark:text-green-300" : "text-gray-600 dark:text-white"} `}
              >About</NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({isActive})=>`${isActive ? "text-green-600 dark:text-green-300" : "text-gray-600 dark:text-white"}`}
              >Contact</NavLink>
            </li>
        </ul>
      </div>
      <div className='flex gap-3'>
        <button className='px-4 py-2 rounded-lg cursor-pointer hover:underline'>Log in</button>
        <button className='bg-green-400 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-500 transition-all'>Get Started</button>
      </div>
      <ThemeBtn />
    </div>
  )
}

export default Header
