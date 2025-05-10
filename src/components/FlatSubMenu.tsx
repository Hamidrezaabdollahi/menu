import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import type { FlatMenu, FlatMenus } from "../types/menuTypes";

export default function FlatSubmenu({ menus }: { menus: FlatMenus | [] }) {





    console.log(menus)
      const [activeMenu, setActiveMenu] = useState<number | null>(null);

        function getChildren (id: number) {
    const children = menus.find(((item) => item.parentId === id))
    return children;
  }

  return (
    <ul className="absolute top-0 right-full bg-white shadow-lg w-40">
      {Array.isArray(menus) && menus.map((item : FlatMenu) => (
        <li
          key={item.id}
          className="flex relative items-center justify-between gap-2 hover:bg-neutral-200 transition-all duration-300 w-full py-2 px-4"
           onMouseEnter={() => setActiveMenu(item.id ? item.id : null)}
            onMouseLeave={() => setActiveMenu(null)}
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
      ))}
    </ul>
  );
}