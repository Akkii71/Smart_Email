"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function History() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/history").then((res) => setItems(res.data));
  }, []);

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">History</h1>

      {items.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded">
          <p>{item.text}</p>
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>
      ))}
    </div>
  );
}
