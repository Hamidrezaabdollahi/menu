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


  

  return (
    <div className="w-full relative h-full ">
      {menu
        .filter((item) => item.parentId === null)
        .map((parent) => {
          const children = menu.filter((item) => item.parentId === parent.id);
          return (
            <div key={parent.id} className="w-full h-full flex flex-col gap-4">
              <div className="w-full h-full flex items-center justify-center">
                <span className="bg-gray-400 text-white w-full h-full text-center">
                  {parent.name}
                </span>
              </div>
           
              {children.map((child) => {
                const grandchildren = menu.filter(
                  (item) => item.parentId === child.id
                );
                return (
                  <div>
                    <div
                      key={child.id}
                      className="w-full h-full flex items-center justify-center text-sm"
                    >
                      <span>{child.name}</span>
                    </div>
                    {grandchildren.map((grandchild) => {
                      return (
                        <div
                          key={grandchild.id}
                          className="w-full h-full flex items-center justify-center text-xs"
                        >
                          <span className="text-red-600">{grandchild.name}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

export default FlatMenu;


function SubMenu(){
    
}