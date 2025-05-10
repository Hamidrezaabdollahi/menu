import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import {  useEffect, useState } from "react";
import type { NestedMenus } from "../types/menuTypes";

const BASE_URL = "http://localhost:5000";


export default function Menu() {
  const [menu, setMenu] = useState<NestedMenus>([]);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  useEffect(() => {
    async function dataFetcher() {
      try {
        const data = await fetch(`${BASE_URL}/menus`).then((res) => res.json());
        setMenu(data);
      } catch (error) {
        console.log(error);
      }
    }

    dataFetcher();
  }, []);

  return (
    <div>
      <ul className="flex flex-col">
        {menu.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setActiveMenu(item.id ? item.id : null)}
            onMouseLeave={() => setActiveMenu(null)}
            className="flex relative items-center justify-between gap-2 hover:bg-neutral-200 transition-all duration-300 w-full py-2 px-4"
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
        ))}{" "}
      </ul>
    </div>
  );
}

function Submenu({ menus }: { menus: NestedMenus }) {
      const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <ul className="absolute top-0 right-full bg-white shadow-lg w-40">
      {menus.map((item) => (
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
