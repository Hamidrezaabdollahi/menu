import { useEffect, useState } from "react";
import type { FlatMenu } from "../types/menuTypes";

const BASE_URL = "http://localhost:5000";

const FlatMenu = () => {
  const [menu, setMenu] = useState<FlatMenu[]>([]);
  console.log(menu);
  useEffect(() => {
    async function dataFetcher() {
      try {
        const data = await fetch(`${BASE_URL}/flat`).then((res) => res.json());
        setMenu(data);
      } catch (error) {
        console.log(error);
      }
    }

    dataFetcher();
  }, []);

  const renderMenuItem = (item: FlatMenu, depth: number = 0) => {
    const children = menu.filter((child) => child.parentId === item.id);

    return (
      <div key={item.id} className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-full flex items-center justify-center">
          <span
            className={`${
              depth === 0
                ? "bg-gray-400 text-white"
                : "bg-gray-200 text-gray-500"
            } w-full h-full`}
            style={{ marginRight: `${depth * 16}px` }}
          >
            {item.name}
          </span>
        </div>
        {children.length > 0 && (
          <div className="ml-4">
            {children.map((child) => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };



  
  return (
    <div className="w-full relative h-full">
      {menu
        .filter((item) => item.parentId === null)
        .map((item) => renderMenuItem(item))}
    </div>
  );
};

export default FlatMenu;
