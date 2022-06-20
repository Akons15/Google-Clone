import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark: border-gray-600 ">
        <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to='/'>
                <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 round dark:bg-gray-500 dark:text-gray-900">
                    Goggl 🔎
                </p>
            </Link>
        
            <button onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 bg-gray-600 dark:text-gray-900 text-gray-200  border rounded-full px-2 py-1">
                {darkTheme ? 'Light 💡' : 'Dark 🌙'}
            </button>
        </div>
        <Search />
    </div>
  )
}

export default Navbar
