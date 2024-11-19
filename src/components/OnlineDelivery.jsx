import React, { useState, useEffect } from "react";

export default function TopRest() {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurant with online delivery
        </div>
      </div>

      {/* Displaying the fetched data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.length === 0 ? (
          <div>Loading...</div>
        ) : (
          data.map((restaurant, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl">{restaurant.name}</h3>
              <p>{restaurant.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
