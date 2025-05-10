
import {UserIcon} from "@heroicons/react/24/solid"
import React from "react";
import Menu from "./Menu";
import FlatMenu from "./FlatMenu";

const Header = () => {
    const [openMenu , setOpenMenu] = React.useState<boolean>(false)
    const [flatMenu, setFlatMenu] = React.useState<boolean>(false)
    return ( 
        <div className="shadow-lg px-10 w-full h-20 bg-gray-100 flex items-center justify-between ">
            <div className="m-2 p-4 ">
                <UserIcon className="w-6 h-6 fill-gray-500" />
            </div>
            <div dir="rtl" onMouseEnter={()=>setFlatMenu(true)} onMouseLeave={()=>setFlatMenu(false)} className={"relative h-full w-60 flex items-center justify-center p-2 text-gray-500 font-bold hover:cursor-pointer hover:bg-gray-200 transition-colors duration-300"}>
                <span>منوی فلت</span>
                <div className={`${flatMenu ? "block" : "hidden"} absolute top-20 right-0 w-full  bg-white shadow-lg`}> 
                    <FlatMenu />
                </div>
            </div>
            <div dir="rtl" onMouseEnter={()=>setOpenMenu(true)} onMouseLeave={()=>setOpenMenu(false)} className={"relative h-full w-60 flex items-center justify-center p-2 text-gray-500 font-bold hover:cursor-pointer hover:bg-gray-200 transition-colors duration-300"}>
                <span>منوی تو در تو</span>
                <div className={`${openMenu ? "block" : "hidden"} absolute top-20 right-0 w-full  bg-white shadow-lg`}> 
                    <Menu />
                </div>
            </div>
        </div>
        );
}
 
export default Header;




