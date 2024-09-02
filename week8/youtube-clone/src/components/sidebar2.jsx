import { useRecoilValue } from "recoil";
import { sidebar } from "../store/atoms/atom";

export function SideBar2(){
    const sidebarOpen=useRecoilValue(sidebar)
    console.log(sidebarOpen)
    return(<>
    <aside id="default-sidebar" className={`dark:bg-black fixed top-[70px] left-0 z-40 w-[100px] h-screen transition-transform pl-2 
    ${
          sidebarOpen ? "hidden" : "block"
        }`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto dark:bg-inherit bg-white dark:bg-black">
            <ul className="font-medium">
                <li className="flex pb-4">
                    <a href="#" className="items-center p-2 text-black rounded-full dark:text-white group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" className="size-8 hover:bg-gray-100 dark:hover:bg-gray-700 stroke-black dark:stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span className="flex-1 whitespace-nowrap text-[14px]">Home</span>
                    </a>
                </li>
                <li className="flex pb-4">
                    <a href="#" className="items-center p-2 text-black rounded-full dark:text-white group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" className="size-8 hover:bg-gray-100 dark:hover:bg-gray-700 stroke-black dark:stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                    <span className="flex-1 whitespace-nowrap text-[14px]">shorts</span>
                    </a>
                </li>
                <li className="flex pb-4">
                    <a href="#" className="items-center p-2 text-black rounded-full dark:text-white group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" className="size-8 hover:bg-gray-100 dark:hover:bg-gray-700 stroke-black dark:stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>
                    <span className="flex-1 whitespace-nowrap text-[14px]">Playlists</span>
                    </a>
                </li>
            </ul>
        </div>
        </aside>
 </>)
}