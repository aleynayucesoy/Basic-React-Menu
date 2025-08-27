"use client";

import { useEffect, useState } from "react";

function useRestaurantMenu() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const url = "https://dummyjson.com/recipes";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setData(json.recipes);
      } catch (error) {
        console.log("Error: ", error.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return { data, loading };
}

export default useRestaurantMenu;
