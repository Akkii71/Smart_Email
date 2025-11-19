"use client";
import { useState } from "react";
import axios from "axios";

export default function Generate() {
  const [result, setResult] = useState("");

  const handleGenerate = async (e) => {
    e.preventDefault();

    const data = {
      job: e.target.job.value,
      achievements: e.target.achievements.value,
      tone: e.target.tone.value,
      type: e.target.type.value,
    };

    const res = await axios.post("/api/generate", data);
    setResult(res.data.text);
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Smart Email / Cover Letter Generator</h1>

      <form onSubmit={handleGenerate} className="space-y-4">
        <textarea name="job" placeholder="Paste Job Description" className="w-full border p-3" />
        <textarea name="achievements" placeholder="Your Achievements" className="w-full border p-3" />

        <select name="tone" className="border p-3">
          <option>Formal</option>
          <option>Friendly</option>
          <option>Confident</option>
        </select>

        <select name="type" className="border p-3">
          <option>Email</option>
          <option>Cover Letter</option>
        </select>

        <button className="bg-black text-white px-6 py-2 rounded">Generate</button>
      </form>

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-100 whitespace-pre-line">
          {result}
        </div>
      )}
    </div>
  );
}
