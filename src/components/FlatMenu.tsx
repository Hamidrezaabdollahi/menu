import { useEffect, useState } from "react";
import type { FlatMenus } from "../types/menuTypes";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Submenu from "./Submenu";
import FlatSubmenu from "./FlatSubMenu";




function FlatMenu() {
  const [flatMenu, setFlatMenu] = useState<FlatMenus>([]);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);


  function getChildren (id: number) {
    const children = flatMenu.find(((item) => item.parentId === id))
    return children;
  }



  return  <div>
      <ul className="flex flex-col">
        {flatMenu.filter(item => item.parentId === null).map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setActiveMenu(item.id ? item.id : null)}
            onMouseLeave={() => setActiveMenu(null)}
            className="flex relative items-center justify-between gap-2 hover:bg-neutral-200 transition-all duration-300 w-full py-2 px-4"
          >
            <a href={item.path}>{item.name}</a>
            {getChildren(item.id) && (
              <span>
                {" "}
                <ArrowLeftIcon className="w-5 h-5" />
              </span>
            )}
            {getChildren(item.id) && item.id === activeMenu ? (
              <FlatSubmenu menus={getChildren(item.id)} />
            ) : null}
          
          </li>
        ))}{" "}
      </ul>
    </div>;
}

export default FlatMenu;




