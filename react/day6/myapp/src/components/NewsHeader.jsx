import { ChevronDown, Play, Search } from "lucide-react";

import { NavLink } from "react-router";

export default function NewsHeader() {
    return (
        <header className=" mb-3 shadow py-1">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-3">
                <NavLink to={'/'} className="flex items-center gap-3">
                    <img src="./logo.png" className="h-16" alt="" />
                    <h1 className="text-2xl font-bold">ABC News</h1>
                </NavLink>
                <div className="menu">
                    <nav className="flex gap-3">
                        <div className="relative group">
                            <div className="flex gap-1 items-center">
                                <label>News </label>
                                <div className="icon">
                                    <ChevronDown />
                                </div>
                            </div>

                            <div className="dropdown absolute  hidden group-hover:block  w-64 bg-white shadow-md">
                                <div className="items px-3 py-3 space-y-3 rounded-md flex flex-col">
                                    <a href="#" className="hover:text-red-500">
                                        Latest News
                                    </a>
                                    <a href="#" className="hover:text-red-500">
                                        Popular News
                                    </a>
                                    <a href="#" className="hover:text-red-500">
                                        For you
                                    </a>
                                </div>

                            </div>
                        </div>
                        <a href="#">
                            Science
                        </a>
                        <a href="#">
                            Technology
                        </a>
                        <a href="#">
                            History
                        </a>

                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </nav>
                </div>
                <div className="buttons flex items-center gap-3">
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    <button className="">
                        <Search />
                    </button>
                    <button className="bg-red-700 flex gap-2 items-center text-white px-5 py-3 rounded-md">
                        <Play /> Live
                    </button>

                </div>
            </div>
        </header >
    )
}