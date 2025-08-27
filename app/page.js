"use client";

import { useEffect, useState } from "react";
import MenuItem from "./components/MenuItem";
import useRestaurantMenu from "./data/useRestaurantMenu";


export default function Home() {
  const { data } = useRestaurantMenu();
  const [randomData, setRandomData] = useState(null)

  const getRandomImg = (array) => {
    const randomImg = array[Math.floor(Math.random() * array.length)];
    setRandomData(randomImg);
  };
  
  useEffect(() => {
    if (data && data.length > 0) {
      getRandomImg(data)
    }
  }, [data])

  if (!data) return <p className="text-red-500">Data Not Found</p>;

  return (
    <main className="font-sans grid items-center justify-items-center max-h-screen">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-h-screen">
        {randomData && (
        <img src={randomData.image} className="w-full max-h-screen object-cover" />
        )}
      </div>
    </main>
  );
}
