import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import type {  NestedMenu, NestedMenus } from "../types/menuTypes";

export default function Submenu({ menus }: { menus: NestedMenus }) {
      const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <ul className="absolute top-0 right-full bg-white shadow-lg w-40">
      {menus.map((item : NestedMenu) => (
        <li
          key={item.id}
          className="flex relative items-center justify-between gap-2 hover:bg-neutral-200 transition-all duration-300 w-full py-2 px-4"
           onMouseEnter={() => setActiveMenu(item.id ? item.id : null)}
            onMouseLeave={() => setActiveMenu(null)}
        >
          <a href={item.path}>{item.name}</a>
          {item.children && (
            <span>
              {" "}
              <ArrowLeftIcon className="w-5 h-5" />
            </span>
          )}
          {item.children && item.id === activeMenu ? (
              <Submenu menus={item.children} />
            ) : null}
        </li>
      ))}
    </ul>
  );
}
