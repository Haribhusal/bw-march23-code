import { ChevronDown, Play, Search } from "lucide-react";

export default function NewsHeader() {
    return (
        <header className="">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                    <img src="./logo.png" className="h-22" alt="" />
                    <h1 className="text-2xl font-bold">ABC News</h1>
                </div>
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
                        <a href="#">
                            Glamour
                        </a>
                    </nav>
                </div>
                <div className="buttons flex gap-3">
                    <button className="">
                        <Search />
                    </button>
                    <button className="bg-red-700 flex gap-2 items-center text-white px-5 py-3 rounded-md">
                        <Play /> Live
                    </button>

                </div>
            </div>
        </header>
    )
}