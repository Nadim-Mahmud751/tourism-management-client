import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    const [mobileNavOpenStatus, setMobileNavOpenStatus] = useState(false);

    const menuList = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "All Tourists Spot", path: "/tourists-spots" },
        { id: 3, name: "Add Tourists Spot", path: "/add-tourists-spots" },
        { id: 4, name: "My List", path: "my-list" },
    ]

    return (
        <header>
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-sm">
                <a className="text-3xl font-bold leading-none" href="#">
                    Travigo
                </a>
                <div className="lg:hidden">
                    <button onClick={() => setMobileNavOpenStatus(true)} className="navbar-burger flex items-center text-blue-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    {
                        menuList.map((item) =>
                            <li key={item?.id}>
                                <NavLink to={item?.path} className="text-sm nav-link text-gray-400 hover:text-gray-500">{item?.name}</NavLink>
                            </li>
                        )
                    }


                </ul>
                <Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" to="/login">Sign In</Link>
                <Link className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" to="/signup">Sign up</Link>
            </nav>
            <div className={`navbar-menu relative z-50 lg:hidden ${mobileNavOpenStatus ? "" : "hidden"}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            Travigo
                        </a>
                        <button onClick={() => setMobileNavOpenStatus(false)} className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            {
                                menuList.map(item =>
                                    <li key={item?.id} className="mb-1">
                                        <NavLink to={item?.path} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">{item?.name}</NavLink>
                                    </li>
                                )
                            }
                            <li className="mb-1">
                                <Link to={"/login"} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Login</Link>
                            </li>
                            <li className="mb-1">
                                <Link to={"signup"} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Signup</Link>
                            </li>

                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    )
}

