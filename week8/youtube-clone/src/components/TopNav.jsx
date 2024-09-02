import {useState} from "react";
import { Logo } from "./logo";

export function TopNav(){
        const [inputfield, setInputfield]=useState(false)
        function display(){
            setInputfield(!inputfield)
        }
    return(
            <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-white dark:bg-black">
            <div className="flex justify-between p-3 dark:bg-black">
                <div className="w-[225px]">
                    <Logo/>
                </div>
            <div className="flex focus:outline-blue-500">
                <form className="flex lg:border lg:border-grey-500 rounded-l-full focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className={`hidden ${inputfield?"lg:block":"lg:hidden"}`}>
                        <div className="p-2 mt-[2px] ml-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        </div>
                    </div>
                    <div>
                        <input onFocus={display} onBlur={display} placeholder="Search" className="hidden lg:block pl-4 rounded-l-full w-[400px] h-[40px] focus:outline-none"></input>
                    </div>
                </form>
                <button className="p-1 rounded-full lg:p-0 lg:pl-3 lg:pr-3 border border-grey-500 bg-[#F8F8F8] lg:rounded-r-full lg:rounded-none dark:bg-[#222222]"><div className="p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="stroke-black dark:stroke-white size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    </div>
                    </button>
            </div>
            <div className="flex pt-1">
                <div className="p-2 pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-6 stroke-black dark:stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <div className="p-2 pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-6 stroke-black dark:stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                </div>
                <div className="pr-2">
                    <img className="h-10 w-10" src="../Riyaz.ico"></img>
                </div>
            </div>
            </div>
            </nav>
    )
}