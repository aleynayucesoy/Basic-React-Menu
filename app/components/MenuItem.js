"use client";

import useRestaurantMenu from "../data/useRestaurantMenu";

export default function MenuItem() {
  const { data, loading } = useRestaurantMenu();

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!data) return <p className="text-red-500">Data Not Found</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {data.map((item)=> (
            <div key={item.id} className="border p-4 rounded shadow">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.cuisine}</p>
                <p className="text-sm mt-1">{item.instructions.slice(0, 10)}...</p>
            </div>
        ))}
    </div>
  );
}
