"use client";
import { useState } from "react";
import { templates } from "@/data/templates";

export default function TemplatesPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-black px-8 py-10">
      <h1 className="text-4xl font-semibold tracking-tight mb-10">
        Choose a Template
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((t) => (
          <div
            key={t.id}
            onClick={() => setSelected(t.id)}
            className={`border border-black p-6 rounded-2xl cursor-pointer transition-all duration-200
              ${selected === t.id ? "bg-black text-white" : "bg-white text-black"}
            `}
          >
            <h2 className="text-2xl font-medium mb-3">{t.name}</h2>
            <p className="opacity-70 text-sm leading-relaxed line-clamp-4 whitespace-pre-wrap">
              {t.structure.replace(/\{\{.*?\}\}/g, "_____")}
            </p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 flex items-center justify-center">
          <button className="px-6 py-3 bg-white text-black rounded-xl text-lg font-medium">
          Continue with {`"${templates.find((t) => t.id === selected)?.name}"`}


          </button>
        </div>
      )}
    </div>
  );
}
